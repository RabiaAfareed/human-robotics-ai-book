// src/services/embeddings/embedding.service.ts
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const embeddingModel = genAI.getGenerativeModel({
  model: "text-embedding-004",
});

export async function generateEmbedding(text: string): Promise<number[]> {
  console.log(`Generating embedding (Gemini) for: "${text.substring(0, 50)}..."`);

  try {
    const result = await embeddingModel.embedContent(text);
    return result.embedding.values;
  } catch (error) {
    console.error("Gemini embedding error:", error);
    return Array.from({ length: 768 }, () => Math.random());
  }
}
