import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  // public answers: Array<any> = [
  //   'Atsakymas 1',
  //   'Atsakymas 2',
  //   'Atsakymas 3',
  //   'Atsakymas 4',
  // ];

  public answers: Array<any> = [];

  public quiz: any = {};

  public quizQuestions: Array<any> = [];
  // Sukuriamas datos objekas
  // public today: any = new Date();
  public currentQuestion: number = 0;
  // Kintamasis saugoti kiek % klausimu yra atsakyta
  public progress: number = 0;

  constructor(private db: AngularFireDatabase) {
    // Jei naudojame toki buda, tuomet, ngFor dalyje turime naudoti | async pipe
    // https://angular.io/guide/observables-in-angular#async-pipe
    // this.answersFromDatabase = db.list('answers').valueChanges();

    db.object('quizes/abc')
      .valueChanges()
      .subscribe((data: any) => {
        this.quiz = data;
        this.quizQuestions = data.questions;
        console.warn(this.quizQuestions);
      });
  }
  nextQuestion() {
    this.currentQuestion++;
    let questionsCount = Object.keys(this.quizQuestions).length;
    this.progress = (this.currentQuestion / questionsCount) * 100;
    console.log('Progress: ' + this.progress);
  }

  ngOnInit(): void {}
}
