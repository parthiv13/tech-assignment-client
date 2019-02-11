import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CounterHomeComponent } from './counter-home/counter-home.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: '', component: CounterHomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'auth', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
