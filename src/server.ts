import dotenv from "dotenv";
dotenv.config(); // 👈 MUST be first

import express from "express";
import cors from "cors";
import ragRoutes from "./routes/rag.routes";

const app = express();
app.use(cors());
app.use(express.json());


app.use("/api/rag", ragRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`RAG Chatbot Backend running on http://localhost:${PORT}`);
  console.log("OPENAI KEY LOADED:", !!process.env.OPENAI_API_KEY);
});
