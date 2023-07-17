import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagea',
  templateUrl: './pagea.component.html',
  styleUrls: ['./pagea.component.css']
})
export class PageaComponent {

  showMessage = false;

  handleClick() {
    this.showMessage = true;
  }

}
