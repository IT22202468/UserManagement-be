import express from "express";
import { addLecturer, getLecturers } from "../controllers/lecturerController.js";

const router = express.Router();

router.post("/add", addLecturer); // Add a lecturer
router.get("/", getLecturers); // Get all lecturers

export default router;
