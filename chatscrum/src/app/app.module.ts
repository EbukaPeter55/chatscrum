import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { TeamtaskComponent } from './teamtask/teamtask.component';
import { TeamtaskcardsComponent } from './teamtaskcards/teamtaskcards.component';
import { UsertaskComponent } from './usertask/usertask.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    TeamtaskComponent,
    TeamtaskcardsComponent,
    UsertaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
