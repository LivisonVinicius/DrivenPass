import * as cardRepository from "../repositories/cardRepository.js";
import { ICardAll, ICardType } from "../types/cardType.js";
import { cryptPassword, decryptPassword } from "../utils/cryptPassword.js";

export async function create(card: ICardType, userId: number) {
  const existCard = await cardRepository.findOneUser(card.title, userId);
  if (existCard) {
    throw { type: "Conflict", message: "Card already registered" };
  }
  card.password = cryptPassword(card.password);
  card.codeSecurity = cryptPassword(card.codeSecurity);

  await cardRepository.insert({ ...card, usersId: userId });
  return;
}

export async function get(userId: number, id: number) {
  let card;
  if (id) {
    card = await cardRepository.getById(id);
    if (!card || card.usersId !== userId) {
      throw { type: "Not Found", message: "Not Found" };
    }
    card.password = decryptPassword(card.password);
    card.codeSecurity = decryptPassword(card.codeSecurity);
  } else {
    card = await cardRepository.getByUserId(userId);
    if (!card) {
      throw { type: "Not Found", message: "Not Found" };
    }
    card = card.map((elem: ICardAll) => {
      return {
        id: elem.id,
        title: elem.title,
        number: elem.number,
        nameCard: elem.nameCard,
        isVirtual: elem.isVirtual,
        expirationDate: elem.expirationDate,
        type: elem.type,
        codeSecurity: decryptPassword(elem.codeSecurity),
        password: decryptPassword(elem.password),
      };
    });
  }
  return card;
}

export async function deleteCard(id: number) {
  if (!id) {
    throw { type: "Not Found", message: "Not Found" };
  }
  const card = await cardRepository.getById(id);
  if (!card!) {
    throw { type: "Not Found", message: "Not Found" };
  }
  await cardRepository.deleteById(id);
  return;
}
