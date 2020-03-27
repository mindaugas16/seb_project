import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RecommendationsService } from '../services/recommendations.service';
import { QuestionInterface } from '../../shared/models/question.model';
import { RecommendationQuestionsInterface } from '../models/recommendation';

@Component({
  selector: 'app-recommendations-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  loading: boolean;
  form: FormGroup = new FormGroup(
    {
      age: new FormControl('', [
        Validators.min(0),
        Validators.max(200),
        Validators.required,
      ]),
      isStudent: new FormControl(false, [Validators.required]),
      income: new FormControl('', [Validators.required]),
    }
  );
  questions: RecommendationQuestionsInterface;

  constructor(private recommendationsService: RecommendationsService) {}

  ngOnInit(): void {
    const findQuestionByName = (
      questions: QuestionInterface[],
      questionName
    ) => {
      try {
        return questions.find(({ name }) => name === questionName);
      } catch (e) {
        throw new Error(`Unable to find question with name ${questionName}`);
      }
    };
    this.recommendationsService.getQuestions().subscribe((questions) => {
      this.questions = {
        age: findQuestionByName(questions, 'age'),
        isStudent: findQuestionByName(questions, 'isStudent'),
        income: findQuestionByName(questions, 'income'),
      };

      console.log(this.questions);
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
}
