import * as credentialRepository from "../repositories/credentialRepository.js";
import { ICredentialAll, ICredentialType } from "../types/credentialType.js";
import { cryptPassword, decryptPassword } from "../utils/cryptPassword.js";

export async function create(credential: ICredentialType, userId: number) {
  const existCredential = await credentialRepository.findOneUser(
    credential.title,
    userId
  );
  if (!existCredential) {
    throw { type: "Conflict", message: "Credential already exists" };
  }
  credential.password = cryptPassword(credential.password);

  await credentialRepository.insert({ ...credential, usersId: userId });
  return;
}

export async function get(userId: number, id: number) {
  let credential;
  if (id) {
    credential = await credentialRepository.getById(id);
    if (!credential || credential.usersId !== userId) {
      throw { type: "Not Found", message: "Not Found" };
    }
    credential.password = decryptPassword(credential.password);
  } else {
    credential = await credentialRepository.getByUserId(userId);
    if (!credential) {
      throw { type: "Not Found", message: "Not Found" };
    }
    credential = credential.map((elem: ICredentialAll) => {
      return {
        id: elem.id,
        title: elem.title,
        userName: elem.userName,
        url: elem.url,
        password: decryptPassword(elem.password),
      };
    });
  }
  return credential;
}

export async function deleteCredential(id: number) {
  if (!id) {
    throw { type: "Not Found", message: "Not Found" };
  }
  const credential = await credentialRepository.getById(id);
  if (!credential!) {
    throw { type: "Not Found", message: "Not Found" };
  }
  await credentialRepository.deleteById(id);
  return;
}
