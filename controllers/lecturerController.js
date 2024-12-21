import Lecturer from "../models/Lecturer.js";

// Add a new lecturer
export const addLecturer = async (req, res) => {
    try {
        const lecturer = new Lecturer(req.body);
        await lecturer.save();
        res.status(201).json({ message: "Lecturer added successfully!" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all lecturers
export const getLecturers = async (req, res) => {
    try {
        const lecturers = await Lecturer.find();
        res.status(200).json(lecturers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
