import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  maxi = 10;
  myTextarea = 'Hello from textArea';
  myInput = 'Hello from myInput';
}
