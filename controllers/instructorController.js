import Instructor from '../models/Instructor.js';

// Add a new instructor
export const addInstructor = async (req, res) => {
    try {
        const instructor = new Instructor(req.body);
        await instructor.save();
        res.status(201).json({ message: "Instructor added successfully!" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all instructors
export const getInstructors = async (req, res) => {
    try {
        const instructors = await Instructor.find();
        res.status(200).json(instructors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};