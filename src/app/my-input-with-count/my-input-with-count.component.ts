import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-input-with-count',
  templateUrl: './my-input-with-count.component.html',
  styleUrls: ['./my-input-with-count.component.css'],
})
export class MyInputWithCountComponent implements OnInit {
  @Input() max: string;
  t = '';
  constructor() {}

  ngOnInit() {}
}
