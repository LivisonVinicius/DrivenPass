import { Credentials } from "@prisma/client";

export type ICredentialType = Omit<Credentials, "id" | "usersId">;
export type ICredentialInsert = Omit<Credentials, "id">;
export type ICredentialAll = Omit<Credentials, "usersId">;
