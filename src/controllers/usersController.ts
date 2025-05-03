import { Request, Response } from 'express';
import * as usersService from '../services/usersService';

export const getAll = async (req: Request, res: Response) => {
  const result = await usersService.getAll();
  res.json(result);
};

export const getById = async (req: Request, res: Response) => {
  const result = await usersService.getById(req.params.id);
  res.json(result);
};

export const create = async (req: Request, res: Response) => {
  const result = await usersService.create(req.body);
  res.status(201).json(result);
};

export const remove = async (req: Request, res: Response) => {
  await usersService.remove(req.params.id);
  res.status(204).end();
};
