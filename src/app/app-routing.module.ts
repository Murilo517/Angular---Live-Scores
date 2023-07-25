import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatchesComponent } from './components/matches/matches.component';

const routes: Routes = [
  {path:'',redirectTo: 'dashboard', pathMatch: 'full'},
  {path:'dashboard', component: DashboardComponent},
  {path:'matches/:id', component: MatchesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
