import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

import connectDB from './config/db.js';

// Routes
import lecturerRoutes from './routes/lecturerRoutes.js';

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.use('/api/lecturers', lecturerRoutes);

// Define routes and middleware
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
