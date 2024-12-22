import mongoose from "mongoose";

const instructorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    telephone: { type: String, required: true },
    address: { type: String, required: true },
    dob: { type: Date, required : true },
    gender: { type: String, required: true },
    degree: { type: String, required: true },
    specialization: { type: String, required: true },
    experience: { type: Number, required: true },
    department: { type: String, required: true },
    supervisor: { type: String, required: true },
    password: { type: String, required: true },
});

export default mongoose.model("Instructor", instructorSchema);