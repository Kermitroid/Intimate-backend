import express from 'express';
import * as analyticsController from '../controllers/analyticsController';
import { authenticate, requireAdmin } from '../middleware/auth';

const router = express.Router();

router.post('/', authenticate, analyticsController.logEvent);
router.get('/video/:videoId', authenticate, analyticsController.getVideoStats);
router.get('/site', authenticate, requireAdmin, analyticsController.getSiteStats);

export default router;
