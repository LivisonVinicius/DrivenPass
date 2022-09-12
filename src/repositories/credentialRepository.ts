import { client } from "../database.js";
import { ICredentialInsert } from "../types/credentialType.js";

export async function insert(credential: ICredentialInsert) {
  await client.credentials.create({ data: credential });
  return;
}

export async function findOneUser(title: string, usersId: number) {
  const credential = client.credentials.findUnique({
    where: { credentialsId: { title, usersId } },
  });
  return credential;
}

export async function getByUserId(usersId: number) {
  const credential = await client.credentials.findMany({ where: { usersId } });
  return credential;
}

export async function getById(id: number) {
  const credential = await client.credentials.findUnique({ where: { id } });
  return credential;
}

export async function deleteById(id: number) {
  await client.credentials.delete({ where: { id } });
  return;
}
