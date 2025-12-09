// src/utils/cosineSimilarity.ts

/**
 * Calculates the cosine similarity between two vectors.
 * @param vecA - The first vector.
 * @param vecB - The second vector.
 * @returns The cosine similarity score.
 */
export function cosineSimilarity(vecA: number[], vecB: number[]): number {
  if (vecA.length !== vecB.length) {
    throw new Error('Vectors must be of the same length');
  }

  let dotProduct = 0;
  let normA = 0;
  let normB = 0;

  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i];
    normA += vecA[i] * vecA[i];
    normB += vecB[i] * vecB[i];
  }

  const magnitudeA = Math.sqrt(normA);
  const magnitudeB = Math.sqrt(normB);

  if (magnitudeA === 0 || magnitudeB === 0) {
    return 0; // Or handle as an error, depending on requirements
  }

  return dotProduct / (magnitudeA * magnitudeB);
}