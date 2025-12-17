import express from "express";
import multer from "multer";
import { handleDocumentUpload, handleTextUpload, handleAskQuestion } from "../controllers/rag.controller";

const router = express.Router();
const upload = multer(); // memory storage for simplicity

router.get("/health", (req, res) => {
  res.json({ status: "RAG API is working" });
});

// Upload document (file)
router.post("/upload-document", upload.single("file"), handleDocumentUpload);

// Upload text
router.post("/upload-text", handleTextUpload);

// Ask question
router.post("/ask-question", handleAskQuestion);

export default router;
