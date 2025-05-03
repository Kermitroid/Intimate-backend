import { Request, Response } from 'express';
import * as notificationService from '../services/notificationService';

export const getNotifications = async (req: Request, res: Response) => {
  const result = await notificationService.getNotificationsForUser((req as any).user.id);
  res.json(result);
};

export const markAsRead = async (req: Request, res: Response) => {
  const updated = await notificationService.markAsRead(req.params.id, (req as any).user.id);
  res.json(updated);
};
