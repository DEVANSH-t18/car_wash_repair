import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// 1. Initial configuration load at absolute top layer
dotenv.config();

import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

const app = express();

// 2. Database active router trigger
connectDB();

app.use(cors());
app.use(express.json());

// 3. Application API Mapping links
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});