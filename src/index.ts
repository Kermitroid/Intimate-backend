import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/user.routes';
import videoRoutes from './routes/video.routes';
import commentRoutes from './routes/comment.routes';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
import authRoutes from './routes/auth.routes';
import { authenticateToken } from './middleware/authMiddleware';
app.use('/api/users', userRoutes);
app.use('/api/videos', videoRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/auth', authRoutes);

// Example protected route
app.get('/api/protected', authenticateToken, (req, res) => res.json({ message: 'Protected content accessed' }));

// Root endpoint
app.get('/', (_req, res) => res.send('API is running'));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI || '', {
  useNewUrlParser: true,
  useUnifiedTopology: true
} as any)
.then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch(err => {
  console.error('MongoDB connection error:', err);
});