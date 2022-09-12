import { client } from "../database.js";
import { INoteCreate } from "../types/noteType.js";

export async function insert(data: INoteCreate) {
  await client.notes.create({ data });
}

export async function findOneUser(title: string, usersId: number) {
  const note = client.notes.findUnique({
    where: { notesId: { title, usersId } },
  });
  return note;
}

export async function getByUserId(usersId: number) {
  const note = await client.notes.findMany({ where: { usersId } });
  return note;
}

export async function getById(id: number) {
  const note = await client.notes.findUnique({ where: { id } });
  return note;
}

export async function deleteById(id: number) {
  await client.notes.delete({ where: { id } });
}
