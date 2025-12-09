import { Request, Response } from "express";
import { Document } from "../types";
import { processAndStoreDocument, answerQuestion } from "../services/rag/rag.service";
import { v4 as uuidv4 } from "uuid";

/**
 * Handles document file upload
 */
export const handleDocumentUpload = async (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(400).send({ message: "No file uploaded." });
  }

  try {
    const doc: Document = {
      id: uuidv4(),
      text: req.file.buffer.toString("utf-8"),
      metadata: {
        filename: req.file.originalname,
        mimetype: req.file.mimetype,
        size: req.file.size,
      },
    };

    await processAndStoreDocument(doc);

    res.status(200).send({
      message: `File "${doc.metadata?.filename}" uploaded and processed successfully.`,
      documentId: doc.id,
    });
  } catch (error) {
    console.error("Error handling document upload:", error);
    res.status(500).send({ message: "Error processing document." });
  }
};

/**
 * Handles text upload
 */
export const handleTextUpload = async (req: Request, res: Response) => {
  const { filename, text } = req.body;

  if (!filename || !text) {
    return res.status(400).send({ message: "Both 'filename' and 'text' are required." });
  }

  try {
    const doc: Document = {
      id: uuidv4(),
      text,
      metadata: { filename },
    };

    await processAndStoreDocument(doc);

    res.status(200).send({
      message: `Text from "${doc.metadata?.filename}" uploaded and processed successfully.`,
      documentId: doc.id,
    });
  } catch (error) {
    console.error("Error handling text upload:", error);
    res.status(500).send({ message: "Error processing text." });
  }
};

/**
 * Handles question via RAG pipeline
 */
export const handleAskQuestion = async (req: Request, res: Response) => {
  const { question } = req.body;

  if (!question || typeof question !== "string") {
    return res.status(400).send({ message: 'A "question" string is required.' });
  }

  try {
    const result = await answerQuestion(question);
    res.status(200).send(result);
  } catch (error) {
    console.error("Error handling ask question:", error);
    res.status(500).send({ message: "Error generating answer." });
  }
};
