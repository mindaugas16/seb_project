import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class RecommendationsService {

  constructor(private apiService: ApiService) { }

  getQuestions() {
    return this.apiService.get('questions');
  }
}
