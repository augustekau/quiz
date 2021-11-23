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

  constructor(db: AngularFireDatabase) {
    // Jei naudojame toki buda, tuomet, ngFor dalyje turime naudoti | async pipe
    // https://angular.io/guide/observables-in-angular#async-pipe
    // this.answersFromDatabase = db.list('answers').valueChanges();

    db.list('answers')
      .valueChanges()
      .subscribe((data: any) => {
        this.answers = data;
        console.log(this.answers);
      });
  }

  ngOnInit(): void {}
}
