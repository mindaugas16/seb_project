import { NextFunction, Request, Response } from 'express';
import Questions from '../models/question';

export default {
    getQuestions: async (req: Request, res: Response, next: NextFunction) => {
        Questions.find()
            .then(async questions => {
                const body = {
                    data: questions,
                    meta: {},
                };
                res.send(body);
            })
            .catch(err => res.status(422).json(err));
    },
    createQuestion: async (req: Request, res: Response, next: NextFunction) => {
        const { title, answers } = req.body;

        Questions.findOne({ title })
            .then(question => {
                if (question) {
                    throw new Error('Title should be unique');
                }
                return new Questions(req.body).save();
            })
            .then(question => res.send(question));
    },
};
