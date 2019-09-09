import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { TeamtaskComponent } from './teamtask/teamtask.component';
import { TeamtaskcardsComponent } from './teamtaskcards/teamtaskcards.component';
import { UsertaskComponent } from './usertask/usertask.component';






const routes: Routes = [
  { path: 'teamtask', component: TeamtaskComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'teamtaskcards', component: TeamtaskcardsComponent},
  { path: 'usertask', component: UsertaskComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
