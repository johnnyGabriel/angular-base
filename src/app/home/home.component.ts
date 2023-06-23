import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message = '';

  constructor() { }

  ngOnInit(): void {
  }

  handleAction1() {
    this.message = 'action 1 done';
  }

  handleAction2() {
    this.message = 'action 2 done'
  }

}
