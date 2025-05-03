
import express from 'express';
import { getCommentsByVideo, addComment, deleteComment } from '../controllers/comment.controller';
import { authenticateToken } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/:videoId', getCommentsByVideo);
router.post('/', authenticateToken, addComment);
router.delete('/:id', authenticateToken, deleteComment);

export default router;
