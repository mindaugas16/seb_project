export interface AnswerInterface {
  id: number;
  value: string;
}

export interface QuestionInterface {
  _id: string;
  title: string;
  name: string;
  answers: AnswerInterface[];
}
