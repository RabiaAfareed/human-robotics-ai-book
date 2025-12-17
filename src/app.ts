// src/app.ts
import express from "express";
import cors from "cors";
import ragRoutes from "./routes/rag.routes";
import { config } from "./config";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/rag", ragRoutes);

app.get("/", (req, res) => {
  res.send(`RAG Chatbot Backend is running on port ${config.port}!`);
});

// Error handler
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

export default app;
