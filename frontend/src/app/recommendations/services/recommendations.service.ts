import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { QuestionInterface } from '../../shared/models/question.model';

@Injectable({
  providedIn: 'root',
})
export class RecommendationsService {
  constructor(private apiService: ApiService) {}

  getQuestions(): Observable<QuestionInterface[]> {
    return this.apiService.get('question').pipe(map(({ data }) => data));
  }
}
