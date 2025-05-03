import { Request, Response } from 'express';
import * as moderationService from '../services/moderationService';

export const report = async (req: Request, res: Response) => {
  const report = await moderationService.createReport({ ...req.body, reporter: (req as any).user.id });
  res.status(201).json(report);
};

export const listReports = async (_req: Request, res: Response) => {
  const reports = await moderationService.getReports();
  res.json(reports);
};

export const updateReport = async (req: Request, res: Response) => {
  const updated = await moderationService.resolveReport(req.params.id, req.body.status);
  res.json(updated);
};

export const banUser = async (req: Request, res: Response) => {
  const result = await moderationService.banUser(req.params.userId);
  res.json(result);
};
