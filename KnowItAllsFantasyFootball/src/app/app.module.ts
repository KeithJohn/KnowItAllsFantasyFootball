import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatGridListModule, MatListModule, MatDividerModule ,MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatCardModule} from '@angular/material/';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './view/app.component';
import { PlayerListComponent } from './view/players-page/player-list/player-list.component';
import { PlayerListItemComponent } from './view/players-page/player-list/player-list-item/player-list-item.component';
import { MatchupComponent } from './view/teams-page/matchup/matchup.component';
import { TeamsPageComponent } from './view/teams-page/teams-page.component';
import { PlayersPageComponent } from './view/players-page/players-page.component';
import { DraftPageComponent } from './view/draft-page/draft-page.component';
import { OrderByPipe } from './model/pipes/order-by.pipe';
import { FormsModule } from '@angular/forms';
import { FilterByPositionPipe } from './model/pipes/filter-by-position.pipe';
import { FilterByTeamPipe } from './model/pipes/filter-by-team.pipe';
import { FilterByNamePipe } from './model/pipes/filter-by-name.pipe';
import { PlayerGraphComponent } from './view/players-page/player-graph/player-graph.component';
import { PlayerInfoComponent } from './view/players-page/player-info/player-info.component';
import { MatchupPlayerComponent } from './view/teams-page/matchup/matchup-player/matchup-player.component';
import { TeamInfoComponent } from './view/teams-page/team-info/team-info.component';
import { TeamGraphComponent } from './view/teams-page/team-graph/team-graph.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { SlickModule} from "ngx-slick";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    PlayerListItemComponent,
    MatchupComponent,
    TeamsPageComponent,
    PlayersPageComponent,
    DraftPageComponent,
    OrderByPipe,
    FilterByPositionPipe,
    FilterByTeamPipe,
    FilterByNamePipe,
    PlayerGraphComponent,
    PlayerInfoComponent,
    MatchupPlayerComponent,
    TeamInfoComponent,
    TeamGraphComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule,
    FormsModule,
    MatCardModule,
    NgbModule,
    SlickModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
