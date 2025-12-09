export interface Chunk {
  id: string;
  text: string;
  embedding: number[];
  documentId: string;
  metadata?: Record<string, any>;
}

export interface Document {
  id: string; // required
  text: string;
  metadata?: {
    filename?: string;
    mimetype?: string;
    size?: number;
    [key: string]: any;
  };
}

export interface QueryResult {
  chunk: Chunk;
  similarity: number;
}

export interface VectorStore {
  id: string;
  embedding: number[];
  text: string;
  metadata?: Record<string, any>;
}
