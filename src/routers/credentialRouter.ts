import { Router } from "express";
import {
  createCredential,
  deleteCredential,
  getCredential,
} from "../controllers/credentialControllers.js";
import schemaValidator from "../middlewares/schemaValidator.js";
import validateToken from "../middlewares/validateToken.js";

const credentialRouter = Router();

credentialRouter.post(
  "/credential",
  validateToken,
  schemaValidator("credentialSchema"),
  createCredential
);

credentialRouter.get("/credential/:id?", validateToken, getCredential);

credentialRouter.delete("/credential/:id", validateToken, deleteCredential);

export default credentialRouter;
