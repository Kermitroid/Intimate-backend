import { Request, Response } from 'express';
import * as analyticsService from '../services/analyticsService';

export const logEvent = async (req: Request, res: Response) => {
  const data = { ...req.body, user: (req as any).user?.id || null };
  const event = await analyticsService.logEvent(data);
  res.status(201).json(event);
};

export const getVideoStats = async (req: Request, res: Response) => {
  const stats = await analyticsService.getVideoAnalytics(req.params.videoId);
  res.json(stats);
};

export const getSiteStats = async (_req: Request, res: Response) => {
  const stats = await analyticsService.getSiteMetrics();
  res.json(stats);
};
