import express from "express";
import userRoutes from "./api/user.routes";
import authRoutes from "./api/auth.routes";

const router = express.Router();

router.use("/user", userRoutes);
router.use("/auth", authRoutes);

export default router;
