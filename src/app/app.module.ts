import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuizComponent } from './quiz/quiz.component';

@NgModule({
  declarations: [AppComponent, QuizComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ProgressbarModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
