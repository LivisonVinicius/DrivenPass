import { Users } from "@prisma/client";

export type IUserType = Omit<Users, "id">;
