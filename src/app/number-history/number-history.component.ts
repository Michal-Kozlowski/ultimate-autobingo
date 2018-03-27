import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-number-history',
  templateUrl: './number-history.component.html',
  styleUrls: ['./number-history.component.css']
})
export class NumberHistoryComponent implements OnInit {
  answers: string[] = [];
  min: number = 1;
  max: number = 10000;

  constructor(private data:DataService) { }

  checkNumber(guess){
    this.data.sendNumber('http://localhost:3000/', "msg=" + guess.toString())
      .subscribe(anwser => {
        this.answers.push(guess.toString() + " " + anwser.toString());
        if (anwser === "was too big") {
          this.max = guess - 1;
          this.checkNumber(Math.floor((this.min+this.max)/2));
        } else if (anwser === "was too small") {
          this.min = guess + 1;
          this.checkNumber(Math.floor((this.min+this.max)/2));
        }
      },
      error => this.data.errorMessage = <any>error);
    }

  ngOnInit() {
    this.checkNumber(Math.floor((this.min+this.max)/2));
  }

}
