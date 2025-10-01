// controller/cvController.js
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const downloadCV = async (req, res, next) => {
  try {
    // Path to your CV file (store it in a 'public' or 'uploads' folder)
    const cvPath = path.join(__dirname, "../public/cv/resume.pdf");

    // Check if file exists
    if (!fs.existsSync(cvPath)) {
      return res.status(404).json({
        success: false,
        message: "CV file not found",
      });
    }

    // Get file stats for proper headers
    const stat = fs.statSync(cvPath);

    // Set headers for download
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=Resume.pdf");
    res.setHeader("Content-Length", stat.size);

    // Create read stream and pipe to response
    const fileStream = fs.createReadStream(cvPath);
    fileStream.pipe(res);
  } catch (error) {
    console.error("Error in downloadCV:", error);
    res.status(500).json({
      success: false,
      message: "Failed to download CV",
    });
  }
};

// Alternative: If you want to use Cloudinary
export const getCVUrl = async (req, res, next) => {
  try {
    // If you're using Cloudinary, return the URL
    const cvUrl = process.env.CV_URL; // Store your Cloudinary URL in env

    if (!cvUrl) {
      return res.status(404).json({
        success: false,
        message: "CV URL not configured",
      });
    }

    res.status(200).json({
      success: true,
      cvUrl: cvUrl,
    });
  } catch (error) {
    console.error("Error in getCVUrl:", error);
    res.status(500).json({
      success: false,
      message: "Failed to get CV URL",
    });
  }
};