
// routes/cvRoutes.js
import express from "express";
import { downloadCV, getCVUrl } from "../controller/cvController.js";

const router = express.Router();

router.get("/download", downloadCV);
router.get("/url", getCVUrl);

export default router;