
import express from 'express';
import { getAllUsers, getProfile, updateProfile } from '../controllers/user.controller';
import { authenticateToken } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/me', authenticateToken, getProfile);
router.put('/me', authenticateToken, updateProfile);

export default router;
