import { Router } from "express";
import authRouter from "./authRouter.js";
import noteRouter from "./noteRouter.js";
import wifiRouter from "./wifiRouter.js";

const router = Router();

router.use(authRouter);
router.use(noteRouter);
router.use(wifiRouter);

export default router;
