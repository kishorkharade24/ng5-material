import { Component } from '@angular/core';
import {setTimeout} from 'timers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  answer: string = '';
  answerDisplay: string = '';
  showSpinner: boolean = false;
  selectedDate: string = '';
  dateDisplay: string = '';

  showAnswer() {
    this.showSpinner = true;
    setTimeout(() => {
      this.answerDisplay = this.answer;
      this.dateDisplay = this.selectedDate;
      this.showSpinner = false;
    }, 2000);
  }
}
