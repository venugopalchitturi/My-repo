import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface BOARDNUMBERS {
  num: number,
  isClicked: boolean
}

@Component({
  selector: 'app-taombola-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './taombola-game.component.html',
  styleUrl: './taombola-game.component.scss'
})
export class TaombolaGameComponent implements OnInit {
  boardNumbers: BOARDNUMBERS[] = [];
  randomNumber!: number;
  ngOnInit() {
    this._generateNumbers();
    console.log(this.boardNumbers);

  }
  private _generateNumbers() {
    for (let i = 1; i <= 90; i++) {
      let isClicked = false;
      let num = i;
      this.boardNumbers.push({ num, isClicked })
    }
  }
  $$generateRandomNumber() {
    let random = Math.floor((Math.random() * 90) + 1);
    this._checkIsItGenerated(random);


  }
  private _checkIsItGenerated(random:number){
    this.boardNumbers.forEach((json)=>{
      if(json.num===random){
        if(json.isClicked===false){
          json.isClicked=true;
          this.randomNumber=json.num;
          this.$$audio();
        }
        else{
          this.$$generateRandomNumber();
        }
      }
    })

  }
  $$restart(){
    this.boardNumbers.forEach((json)=>{
      json.isClicked=false;
      this.randomNumber=0;
    })
  }
  $$audio(){
    let numberWord = this.randomNumber+'';
    let utterance = new SpeechSynthesisUtterance(numberWord);
    window.speechSynthesis.speak(utterance);
  }

}
