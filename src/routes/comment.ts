import express from 'express';
import * as commentController from '../controllers/commentController';
import { authenticate } from '../middleware/auth';

const router = express.Router();

router.get('/:videoId', commentController.getCommentsByVideo);

// Protected
router.post('/:videoId', authenticate, commentController.createComment);
router.post('/reply/:commentId', authenticate, commentController.replyToComment);
router.delete('/:commentId', authenticate, commentController.deleteComment);
router.post('/like/:commentId', authenticate, commentController.likeComment);

export default router;
