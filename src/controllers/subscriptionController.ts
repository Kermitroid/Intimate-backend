import { Request, Response } from 'express';
import * as subscriptionService from '../services/subscriptionService';

export const subscribe = async (req: Request, res: Response) => {
  await subscriptionService.subscribe((req as any).user.id, req.params.userId);
  res.status(201).json({ message: 'Subscribed successfully' });
};

export const unsubscribe = async (req: Request, res: Response) => {
  await subscriptionService.unsubscribe((req as any).user.id, req.params.userId);
  res.json({ message: 'Unsubscribed successfully' });
};

export const getSubscribers = async (req: Request, res: Response) => {
  const result = await subscriptionService.getSubscribers(req.params.userId);
  res.json(result);
};

export const getSubscriptions = async (req: Request, res: Response) => {
  const result = await subscriptionService.getSubscriptions(req.params.userId);
  res.json(result);
};
