import { Request, Response } from "express";
import * as credentialService from "../services/credentialService.js";
import { ICredentialType } from "../types/credentialType.js";

export async function createCredential(req: Request, res: Response) {
  const credential: ICredentialType = req.body;
  const user = res.locals.user;
  await credentialService.create(credential, user.id);
  return res.status(201).send("Credential Created");
}

export async function getCredential(req: Request, res: Response) {
  const id = Number(req.params.id);
  const user = res.locals.user;
  const credential = await credentialService.get(user.id, id);
  return res.status(200).send(credential);
}

export async function deleteCredential(req: Request, res: Response) {
  const id = Number(req.params.id);
  await credentialService.deleteCredential(id);
  return res.status(204).send("Credential deleted");
}
