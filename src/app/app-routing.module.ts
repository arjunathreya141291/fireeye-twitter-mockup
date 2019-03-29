import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstUserComponent} from './first-user/first-user.component';
import {SecondUserComponent} from './second-user/second-user.component';

const routes: Routes = [
  { path: 'firstuser', component: FirstUserComponent },
  { path: 'seconduser', component: SecondUserComponent },
  { path: '',
    redirectTo: '/firstuser',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
