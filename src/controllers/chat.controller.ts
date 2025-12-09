import { Request, Response } from "express";

export const handleChat = async (req: Request, res: Response) => {
  const { message } = req.body;

  // TODO: integrate Claude or OpenAI agent for RAG
  const responseMessage = `You said: ${message}`;

  res.json({ reply: responseMessage });
};
