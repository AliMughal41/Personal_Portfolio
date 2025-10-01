// controller/messageController.js
import { Message } from "../models/messageSchema.js";
import { sendEmail } from "../config/email.js";

export const sendMessage = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Save message to database
    const newMessage = await Message.create({
      name,
      email,
      subject,
      message,
    });

    // Send email notification to your email
    const emailContent = `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
        <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #333; border-bottom: 3px solid #4CAF50; padding-bottom: 10px;">New Portfolio Contact Message</h2>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong style="color: #555;">Name:</strong> <span style="color: #333;">${name}</span></p>
            <p style="margin: 10px 0;"><strong style="color: #555;">Email:</strong> <span style="color: #333;">${email}</span></p>
            <p style="margin: 10px 0;"><strong style="color: #555;">Subject:</strong> <span style="color: #333;">${subject}</span></p>
          </div>
          
          <div style="margin: 20px 0; padding: 20px; background-color: #f9f9f9; border-left: 4px solid #4CAF50; border-radius: 5px;">
            <p style="margin: 0; color: #555;"><strong>Message:</strong></p>
            <p style="margin: 10px 0 0 0; color: #333; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center; color: #888; font-size: 12px;">
            <p>This message was sent from your portfolio contact form</p>
            <p>Received at: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      </div>
    `;

    // Send email
    await sendEmail({
      email: process.env.MY_EMAIL,
      subject: `Portfolio Contact: ${subject}`,
      message: emailContent,
    });

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: newMessage,
    });
  } catch (error) {
    console.error("Error in sendMessage:", error);

    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      return res.status(400).json({
        success: false,
        message: validationErrors.join(", "),
      });
    }

    res.status(500).json({
      success: false,
      message: "Failed to send message. Please try again later.",
    });
  }
};

export const getAllMessages = async (req, res, next) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      messages,
    });
  } catch (error) {
    console.error("Error in getAllMessages:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch messages",
    });
  }
};

export const deleteMessage = async (req, res, next) => {
  try {
    const { id } = req.params;
    const message = await Message.findByIdAndDelete(id);

    if (!message) {
      return res.status(404).json({
        success: false,
        message: "Message not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Message deleted successfully",
    });
  } catch (error) {
    console.error("Error in deleteMessage:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete message",
    });
  }
};