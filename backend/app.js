

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDatabase } from "./config/database.js";
import messageRoutes from "./routes/messageRoutes.js";

dotenv.config();

const app = express();

// Connect to database
connectDatabase();

// Middleware
app.use(
  cors({
    origin: [process.env.FRONTEND_URL || "http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/message", messageRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Portfolio Backend API is running!");
});

export default app;