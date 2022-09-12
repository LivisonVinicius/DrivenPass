import { INoteType } from "../types/noteType.js";
import * as noteRepository from "../repositories/noteRepository.js";

export async function create(notes: INoteType, id: number) {
  const existNote = await noteRepository.findOneUser(notes.title, id);
  if (existNote) {
    throw { type: "Conflict", message: "Title already exists" };
  }
  await noteRepository.insert({ ...notes, usersId: id });
  return;
}
export async function get(userId: number) {
  const note = await noteRepository.getByUserId(userId);
  if (!note) {
    throw { type: "Not Found", message: "Not Found" };
  }
  return note;
}

export async function deleteNote(id: number) {
  if (!id) {
    throw { type: "Not Found", message: "Not Found" };
  }
  const note = await noteRepository.getById(id);
  if (!note!) {
    throw { type: "Not Found", message: "Not Found" };
  }
  await note;
}
