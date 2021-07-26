import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // './app.component.scss'
})
export class AppComponent {

  check:boolean=true;
  myfunction(){
    this.check=!this.check;
  }
}
