import express from 'express';
import * as videosController from '../controllers/videosController';

const router = express.Router();

router.get('/', videosController.getAll);
router.get('/:id', videosController.getById);
router.post('/', videosController.create);
router.delete('/:id', videosController.remove);

export default router;
