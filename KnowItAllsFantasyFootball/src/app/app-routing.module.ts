import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsPageComponent } from './view/teams-page/teams-page.component';
import { PlayersPageComponent } from './view/players-page/players-page.component';
import { DraftPageComponent } from './view/draft-page/draft-page.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';


const routes: Routes = [
  {path:'', redirectTo: '/dashboard', pathMatch: 'full' },
  {path:'dashboard', component:DashboardComponent},
  {path: 'teams', component: TeamsPageComponent},
  {path: 'players', component: PlayersPageComponent},
  {path: 'draft', component: DraftPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
