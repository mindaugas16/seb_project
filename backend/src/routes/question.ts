import express from 'express';
import QuestionController from '../controllers/questions';

const router = express.Router();

router.get('/', QuestionController.getQuestions);
router.post('/', QuestionController.createQuestion);

export default router;
