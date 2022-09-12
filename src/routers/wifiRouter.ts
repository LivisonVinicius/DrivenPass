import { Router } from "express";
import {
  createWifi,
  deleteWifi,
  getWifi,
} from "../controllers/wifiControllers.js";
import schemaValidator from "../middlewares/schemaValidator.js";
import validateToken from "../middlewares/validateToken.js";

const wifiRouter = Router();

wifiRouter.post(
  "/wifi",
  validateToken,
  schemaValidator("wifiSchema"),
  createWifi
);
wifiRouter.get("/wifi/:id?", validateToken, getWifi);

wifiRouter.delete("/wifi/:id", validateToken, deleteWifi);
export default wifiRouter;
