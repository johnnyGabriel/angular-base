import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, delay } from 'rxjs';

@Component({
  selector: 'app-pageb',
  templateUrl: './pageb.component.html',
  styleUrls: ['./pageb.component.css']
})
export class PagebComponent {

  showMessage = new BehaviorSubject(false);
  showMessage$ = this.showMessage.asObservable().pipe(delay(500));

  handleClick() {
    this.showMessage.next(true);
  }

}
