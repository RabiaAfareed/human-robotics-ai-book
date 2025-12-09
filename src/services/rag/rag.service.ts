// src/services/rag/rag.service.ts
import { Document } from "../../types";
import { generateEmbedding } from "../embeddings/embedding.service";
import OpenAI from "openai";

// Initialize OpenAI client
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Document store with embeddings
interface StoredDocument extends Document {
  embedding: number[];
}
let documentStore: StoredDocument[] = [];

/**
 * Calculate cosine similarity between two vectors
 */
function cosineSimilarity(a: number[], b: number[]): number {
  let dot = 0, aLen = 0, bLen = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    aLen += a[i] ** 2;
    bLen += b[i] ** 2;
  }
  return dot / (Math.sqrt(aLen) * Math.sqrt(bLen));
}

/**
 * Process and store a document with embedding
 */
export const processAndStoreDocument = async (doc: Document): Promise<void> => {
  const embedding = await generateEmbedding(doc.text);
  documentStore.push({ ...doc, embedding });
  console.log(`Document stored: ${doc.metadata?.filename}`);
};

/**
 * Retrieve top K relevant documents based on cosine similarity
 */
function retrieveRelevantDocs(questionEmbedding: number[], topK = 3): StoredDocument[] {
  return documentStore
    .map(doc => ({ ...doc, score: cosineSimilarity(questionEmbedding, doc.embedding) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, topK);
}

/**
 * Answer a question using RAG pipeline
 */
export const answerQuestion = async (question: string) => {
  // Step 1: generate embedding for question
  const questionEmbedding = await generateEmbedding(question);

  // Step 2: retrieve relevant documents
  const relevantDocs = retrieveRelevantDocs(questionEmbedding);

  const contextText = relevantDocs.map(d => d.text).join("\n\n");

  // Step 3: create prompt for LLM
  const prompt = `
Based on the following context, answer the question.
If the context does not provide enough information, say "I'm sorry, I don't have enough information to answer that."

Context:
${contextText}

Question:
${question}
Answer:
`;

  // Step 4: call OpenAI LLM
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.2,
  });

  const answer = completion.choices[0].message?.content ?? "I'm sorry, I don't have enough information.";

  return { answer };
};
