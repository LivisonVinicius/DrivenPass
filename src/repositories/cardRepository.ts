import { client } from "../database.js";
import { ICardInsert } from "../types/cardType.js";

export async function insert(card: ICardInsert) {
  await client.cards.create({ data: card });
  return;
}

export async function findOneUser(title: string, usersId: number) {
  const card = client.cards.findUnique({
    where: { cardsId: { title, usersId } },
  });
  return card;
}

export async function getByUserId(usersId: number) {
  const card = await client.cards.findMany({ where: { usersId } });
  return card;
}

export async function getById(id: number) {
  const card = await client.cards.findUnique({ where: { id } });
  return card;
}

export async function deleteById(id: number) {
  await client.cards.delete({ where: { id } });
  return;
}
