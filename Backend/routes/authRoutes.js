import express from "express";
import { register, login, logout } from "../controllers/authController.js";

const router = express.Router();

router.post("/", register);
router.post("/login", login);
router.post("/logout", logout);

export default router;