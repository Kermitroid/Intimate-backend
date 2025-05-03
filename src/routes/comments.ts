import express from 'express';
import * as commentsController from '../controllers/commentsController';

const router = express.Router();

router.get('/', commentsController.getAll);
router.get('/:id', commentsController.getById);
router.post('/', commentsController.create);
router.delete('/:id', commentsController.remove);

export default router;
