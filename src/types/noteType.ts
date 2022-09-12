import { Notes } from "@prisma/client";

export type INoteType = Omit<Notes, "id" | "usersId">;
export type INoteCreate = Omit<Notes, "id">;
