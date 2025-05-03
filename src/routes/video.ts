import express from 'express';
import * as videoController from '../controllers/videoController';
import { authenticate } from '../middleware/auth';

const router = express.Router();

router.get('/', videoController.getAllVideos);
router.get('/:id', videoController.getVideoById);

// Protected
router.post('/', authenticate, videoController.createVideo);
router.put('/:id', authenticate, videoController.updateVideo);
router.delete('/:id', authenticate, videoController.deleteVideo);

export default router;
