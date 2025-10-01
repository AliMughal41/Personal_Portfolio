// routes/messageRoutes.js
import express from "express";
import {
  sendMessage,
  getAllMessages,
  deleteMessage,
} from "../controller/messageController.js";

const router = express.Router();

router.post("/send", sendMessage);
router.get("/all", getAllMessages);
router.delete("/delete/:id", deleteMessage);

export default router;
