import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import * as Questions from '../assets/question.json';  
import {MatDialog} from '@angular/material/dialog';

interface IQuestion {
  question:string
  options: string[]
  answer: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Quiz';
  allQuestions: IQuestion[] = Questions;  
  selectedOption:number;
  currentIndex: number = 0;
  dialogueMessage:string;
  @ViewChild('answerDialogue', { read: TemplateRef }) answerDialogue: TemplateRef<any>;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.allQuestions = this.allQuestions.default;
  }
  nextQuestion() {
    if(this.allQuestions[this.currentIndex].answer === this.selectedOption) {
      this.openDialogue('Right Answer');
    } else {
      this.openDialogue('Wrong Answer');
    }
    if(!(this.currentIndex === this.allQuestions.length - 1)) {
      this.currentIndex += 1;
    }
  }
  previoustQuestion() {
    if(this.currentIndex) {
      this.currentIndex -= 1;
    }
  }
  onSelectionChange(selectedOption) {
    this.selectedOption = selectedOption;
  }
  openDialogue(answer) {
    this.dialogueMessage = answer;
    const dialogRef = this.dialog.open(this.answerDialogue, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}