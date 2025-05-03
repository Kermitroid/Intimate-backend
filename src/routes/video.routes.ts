
import express from 'express';
import { getAllVideos, uploadVideo } from '../controllers/video.controller';
import { authenticateToken } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/', getAllVideos);
router.post('/', authenticateToken, uploadVideo);

export default router;
