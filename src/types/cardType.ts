import { Cards } from "@prisma/client";

export type ICardType = Omit<Cards, "id" | "usersId">;
export type ICardInsert = Omit<Cards, "id">;
export type ICardAll = Omit<Cards, "usersId">;
