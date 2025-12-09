// src/services/vector-store/vectorStore.service.ts
import { Chunk, VectorStore } from '../../types';
import { cosineSimilarity } from '../../utils/cosineSimilarity';

// Simple in-memory vector store
const vectorStore: Chunk[] = [];

/**
 * Saves document chunks to the in-memory vector store.
 * @param chunks - An array of document chunks to save.
 */
export async function saveDocumentChunks(chunks: Chunk[]): Promise<void> {
  // In a real DB, this would be an insert operation.
  // For our in-memory store, we just push them to the array.
  vectorStore.push(...chunks);
  console.log(`Saved ${chunks.length} chunks to the vector store.`);
  Promise.resolve();
}

/**
 * Searches for the most similar chunks in the vector store.
 * @param queryEmbedding - The embedding of the user's query.
 * @param topK - The number of similar chunks to return.
 * @returns A promise that resolves to an array of the most similar chunks.
 */
export async function searchSimilarChunks(queryEmbedding: number[], topK: number): Promise<Chunk[]> {
  if (vectorStore.length === 0) {
    return Promise.resolve([]);
  }

  // Calculate similarities for all chunks
  const similarities = vectorStore.map(chunk => ({
    chunk,
    similarity: cosineSimilarity(queryEmbedding, chunk.embedding),
  }));

  // Sort by similarity in descending order
  similarities.sort((a, b) => b.similarity - a.similarity);

  // Return the topK chunks
  const topChunks = similarities.slice(0, topK).map(sim => sim.chunk);
  
  console.log(`Found ${topChunks.length} similar chunks.`);
  return Promise.resolve(topChunks);
}
