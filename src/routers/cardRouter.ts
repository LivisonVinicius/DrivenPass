import { Router } from "express";
import {
  createCard,
  deleteCard,
  getCard,
} from "../controllers/cardController.js";
import schemaValidator from "../middlewares/schemaValidator.js";
import validateToken from "../middlewares/validateToken.js";

const cardRouter = Router();

cardRouter.post(
  "/card",
  validateToken,
  schemaValidator("cardSchema"),
  createCard
);

cardRouter.get("/card/:id?", validateToken, getCard);

cardRouter.delete("/card/:id", validateToken, deleteCard);

export default cardRouter;
