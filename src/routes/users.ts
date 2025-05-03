import express from 'express';
import * as usersController from '../controllers/usersController';

const router = express.Router();

router.get('/', usersController.getAll);
router.get('/:id', usersController.getById);
router.post('/', usersController.create);
router.delete('/:id', usersController.remove);

export default router;
