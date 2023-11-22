import express from "express";
import { register, login, logout } from "../controllers/authController.js";
import { verifyUser } from "../middleware/verifyUser.js";

const router = express.Router();

router.post("/", register);
router.post("/login", login);
router.post("/logout", verifyUser, logout);

export default router;
