import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MyInputWithCountComponent } from './my-input-with-count/my-input-with-count.component';
import { CountDirective } from './count.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, MyInputWithCountComponent, CountDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
