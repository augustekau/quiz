import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public currentQuestion: number = 0;
  public progress: number = 0;
  constructor() {}

  // nextQuestion() {
  //   this.currentQuestion++;
  //   this.progress = (this.currentQuestion / this.answers.length) * 100;
  //   console.log('Progress: ' + this.progress);
  // }

  ngOnInit(): void {}
}
