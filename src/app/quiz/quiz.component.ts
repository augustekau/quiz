import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  public answers: Array<any> = [
    'Atsakymas 1',
    'Atsakymas 2',
    'Atsakymas 3',
    'Atsakymas 4',
  ];

  constructor() {}

  ngOnInit(): void {}
}
