import express from "express";
import { summarize } from "../controllers/articleController.js";
import { verifyUser } from "../middleware/verifyUser.js";

const router = express.Router();

router.post("/summarize", summarize);
// router.post("/summarize-text", verifyUser, summarizeText);



export default router;
