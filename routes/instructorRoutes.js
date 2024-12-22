import express from "express";
import { addInstructor, getInstructors } from "../controllers/instructorController.js";

const router = express.Router();

router.post("/add", addInstructor); // Add a lecturer
router.get("/", getInstructors); // Get all lecturers

export default router;
