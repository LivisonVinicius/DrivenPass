import { Router } from "express";
import authRouter from "./authRouter.js";
import noteRouter from "./noteRouter.js";
import wifiRouter from "./wifiRouter.js";
import credentialRouter from "./credentialRouter.js";
import cardRouter from "./cardRouter.js";

const router = Router();

router.use(authRouter);
router.use(noteRouter);
router.use(wifiRouter);
router.use(credentialRouter);
router.use(cardRouter);

export default router;
