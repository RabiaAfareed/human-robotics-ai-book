import { Router } from "express";
import { handleChat } from "../controllers/chat.controller";

const router = Router();

// POST /api/chat
router.post("/", handleChat);

export default router;
