import { Request, Response } from 'express';
import * as videosService from '../services/videosService';

export const getAll = async (req: Request, res: Response) => {
  const result = await videosService.getAll();
  res.json(result);
};

export const getById = async (req: Request, res: Response) => {
  const result = await videosService.getById(req.params.id);
  res.json(result);
};

export const create = async (req: Request, res: Response) => {
  const result = await videosService.create(req.body);
  res.status(201).json(result);
};

export const remove = async (req: Request, res: Response) => {
  await videosService.remove(req.params.id);
  res.status(204).end();
};
