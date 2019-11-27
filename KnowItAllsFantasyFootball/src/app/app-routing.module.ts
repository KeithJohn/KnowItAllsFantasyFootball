import { DraftPageComponent } from './view/draft-page/draft-page.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { PlayersPageComponent } from './view/players-page/players-page.component';
import { RouterModule, Routes } from '@angular/router';
import { TeamsPageComponent } from './view/teams-page/teams-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'teams', component: TeamsPageComponent },
  { path: 'players', component: PlayersPageComponent },
  { path: 'draft', component: DraftPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
