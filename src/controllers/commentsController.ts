import { Request, Response } from 'express';
import * as commentsService from '../services/commentsService';

export const getAll = async (req: Request, res: Response) => {
  const result = await commentsService.getAll();
  res.json(result);
};

export const getById = async (req: Request, res: Response) => {
  const result = await commentsService.getById(req.params.id);
  res.json(result);
};

export const create = async (req: Request, res: Response) => {
  const result = await commentsService.create(req.body);
  res.status(201).json(result);
};

export const remove = async (req: Request, res: Response) => {
  await commentsService.remove(req.params.id);
  res.status(204).end();
};
