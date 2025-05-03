import express from 'express';
import * as subscriptionController from '../controllers/subscriptionController';
import { authenticate } from '../middleware/auth';

const router = express.Router();

router.post('/:userId', authenticate, subscriptionController.subscribe);
router.delete('/:userId', authenticate, subscriptionController.unsubscribe);
router.get('/subscribers/:userId', subscriptionController.getSubscribers);
router.get('/subscriptions/:userId', subscriptionController.getSubscriptions);

export default router;
