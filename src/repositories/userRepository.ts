import { client } from "../database";
import { IUserType } from "../types/userType";

export async function insert(data: IUserType) {
  await client.users.create({ data });
  return;
}

export async function findByEmail(email: string) {
  const user = await client.users.findFirst({ where: { email } });
  return user;
}

export async function findById(id: number) {
  const user = await client.users.findFirst({ where: { id } });
  return user;
}
