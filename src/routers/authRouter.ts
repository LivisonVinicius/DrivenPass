import { Router } from "express";
import schemaValidator from "../middlewares/schemaValidator.js";
import * as authControllers from "../controllers/authControllers.js";

const authRouter = Router();

authRouter.post(
  "/signup",
  schemaValidator("registerSchema"),
  authControllers.register
);
authRouter.post("/signin");

export default authRouter;
