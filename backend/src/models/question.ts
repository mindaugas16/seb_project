import { Document, model, Schema } from 'mongoose';

export interface QuestionAnswerInterface {
    id: number;
    value: number;
}

export interface QuestionInterface extends Document {
    title: string;
    name: string;
    answers: QuestionAnswerInterface[];
}

const questionSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
        unique: true,
    },
    answers: {
        type: Schema.Types.Mixed,
        required: true,
    },
});

export default model<QuestionInterface>('Question', questionSchema);
