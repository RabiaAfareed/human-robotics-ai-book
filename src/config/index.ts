// src/config/index.ts
import dotenv from 'dotenv';

dotenv.config();

export const config = {
  llmApiKey: process.env.OPENAI_API_KEY,
  port: process.env.PORT || 5000,
};
