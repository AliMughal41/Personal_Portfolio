import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minLength: [2, "Name must contain at least 2 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    validate: [validator.isEmail, "Please provide valid email"],
  },
  subject: {
    type: String,
    required: [true, "Subject is required"],
    minLength: [3, "Subject must contain at least 3 characters"],
  },
  message: {
    type: String,
    required: [true, "Message is required"],
    minLength: [10, "Message must contain at least 10 characters"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Message = mongoose.model("Message", messageSchema);