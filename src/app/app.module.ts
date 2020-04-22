import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskOneComponent } from './task-one/task-one.component';
import { TaskTwoComponent } from './task-two/task-two.component';
import { TaskTwoService } from './task-two/task-two.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskOneComponent,
    TaskTwoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    TaskTwoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
