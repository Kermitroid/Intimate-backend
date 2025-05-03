import express from 'express';
import * as moderationController from '../controllers/moderationController';
import { authenticate, requireAdmin } from '../middleware/auth';

const router = express.Router();

router.post('/report', authenticate, moderationController.report);
router.get('/reports', authenticate, requireAdmin, moderationController.listReports);
router.patch('/report/:id', authenticate, requireAdmin, moderationController.updateReport);
router.post('/ban/:userId', authenticate, requireAdmin, moderationController.banUser);

export default router;
