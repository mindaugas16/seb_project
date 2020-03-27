import { Router } from 'express';
import QuestionRouter from './question';

const router = Router();

router.use('/question', QuestionRouter);

export default router;
