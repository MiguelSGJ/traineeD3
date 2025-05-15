import { Router } from "express";
import userRouter from "./authRoutes.js";

const router = Router();

router.use("/auth", userRouter);

export default router;
