import { Request, Response } from "express";
import * as noteService from "../services/noteService.js";
import { INoteType } from "../types/noteType.js";

export async function createNote(req: Request, res: Response) {
  const note: INoteType = req.body;
  const user = res.locals.user;
  await noteService.create(note, user.id);
  return res.status(201).send("Note Created");
}

export async function getNote(req: Request, res: Response) {
  const id = Number(req.params.id);
  const user = res.locals.user;
  const note = await noteService.get(user.id,id);
  return res.status(200).send(note);
}

export async function deleteNote(req: Request, res: Response) {
  const id = Number(req.params.id);
  await noteService.deleteNote(id);
  return res.status(204).send("Note deleted");
}
