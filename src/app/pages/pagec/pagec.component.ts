import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagec',
  templateUrl: './pagec.component.html',
  styleUrls: ['./pagec.component.css']
})
export class PagecComponent {

  showMessage = false;

  handleClick() {
    setTimeout(() => {
      this.showMessage = true;
    }, 2000);
  }

}
