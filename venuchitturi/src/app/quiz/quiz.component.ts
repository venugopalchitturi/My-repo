import { Component, OnInit, Output } from '@angular/core';
import { QUESTIONS } from '../_/const/quiz-questions';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule, RequiredValidator, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent {
  questions = QUESTIONS;
  marks = 0;
  displayQuestions = true;

  constructor(private _activateRoute:ActivatedRoute){
    this.getQueryParams();

  }
  getQueryParams(){
    this._activateRoute.queryParams.subscribe((e)=>{
      console.log(e);
    })
  }

  $$validate() {
    this.displayQuestions = false;
    this.questions.forEach((e) => {
      e.options.forEach((option: any) => {
        if (option.isCorrect === true && option.isClicked === true) this.marks++;
      })
    });

    this._getCorrectAnswers();
  }

  $$selectOption(uid: number, options: any) {
    options.forEach((e: any) => {
      if (e.uid === uid) e.isClicked = true;
      else e.isClicked = false;

    });
  }


  private _getCorrectAnswers() {
      this.questions.forEach((question)=>{
        question.options.forEach((Option)=>{
          if(Option.isCorrect === true && (Option.isClicked==false || Option.isClicked==true)){
            Option.isClicked=true;
          }
        });

      });
  }

}
