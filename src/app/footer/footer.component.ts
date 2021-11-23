import { Component, OnInit } from '@angular/core';
import { QuizComponent } from '../quiz/quiz.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public currentQuestion: number = 0;
  public progress: number = 0;
  constructor() {}

  nextQuestion() {
    this.currentQuestion++;
    // this.progress = this.currentQuestion / this.answers.length;
  }

  ngOnInit(): void {}
}
