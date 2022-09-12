import { Request, Response } from "express";
import * as cardService from "../services/cardService.js";
import { ICardType } from "../types/cardType.js";

export async function createCard(req: Request, res: Response) {
  const card: ICardType = req.body;
  const user = res.locals.user;
  await cardService.create(card, user.id);
  return res.status(201).send("Card created");
}

export async function getCard(req: Request, res: Response) {
  const id = Number(req.params.id);
  const user = res.locals.user;
  const card = await cardService.get(user.id, id);
  return res.status(200).send(card);
}

export async function deleteCard(req: Request, res: Response) {
  const id = Number(req.params.id);
  await cardService.deleteCard(id);
  return res.status(204).send("Card deleted");
}
