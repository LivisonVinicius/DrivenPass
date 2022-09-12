import { Router } from "express";
import {
  createNote,
  deleteNote,
  getNote,
} from "../controllers/noteControllers.js";
import schemaValidator from "../middlewares/schemaValidator.js";
import validateToken from "../middlewares/validateToken.js";

const noteRouter = Router();

noteRouter.post(
  "/note",
  validateToken,
  schemaValidator("noteSchema"),
  createNote
);
noteRouter.get("/note", validateToken, getNote);

noteRouter.delete("/note/:id", validateToken, deleteNote);
export default noteRouter;
