import { Component, VERSION } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  bool = false;
  maxi = 10;
  myTextarea = 'Hello from textArea';
  myInput = 'Hello from myInput';
  myForm = new FormGroup({
    input1: new FormControl(''),
    textarea1: new FormControl(''),
  });
}
