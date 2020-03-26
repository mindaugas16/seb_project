import { Router } from 'express';
import MainController from '../controllers/';

const router = Router();

router.use('/recommendation', MainController.recommendation);

export default router;
