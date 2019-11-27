import { AppComponent } from './view/app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { DraftPageComponent } from './view/draft-page/draft-page.component';
import { FilterByNamePipe } from './model/pipes/filter-by-name.pipe';
import { FilterByPositionPipe } from './model/pipes/filter-by-position.pipe';
import { FilterByTeamPipe } from './model/pipes/filter-by-team.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatchupComponent } from './view/teams-page/matchup/matchup.component';
import { MatchupPlayerComponent } from './view/teams-page/matchup/matchup-player/matchup-player.component';
import { MatCardModule, MatDividerModule, MatFormFieldModule, MatGridListModule, MatInputModule, MatListModule, MatOptionModule, MatProgressSpinnerModule, MatSelectModule } from '@angular/material/';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgModule } from '@angular/core';
import { OrderByPipe } from './model/pipes/order-by.pipe';
import { PlayerGraphComponent } from './view/players-page/player-graph/player-graph.component';
import { PlayerInfoComponent } from './view/players-page/player-info/player-info.component';
import { PlayerListComponent } from './view/players-page/player-list/player-list.component';
import { PlayerListItemComponent } from './view/players-page/player-list/player-list-item/player-list-item.component';
import { PlayersPageComponent } from './view/players-page/players-page.component';
import { TeamInfoComponent } from './view/teams-page/team-info/team-info.component';
import { TeamGraphComponent } from './view/teams-page/team-graph/team-graph.component';
import { TeamsPageComponent } from './view/teams-page/teams-page.component';
import { SlickModule } from "ngx-slick";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DraftPageComponent,
    FilterByNamePipe,
    FilterByPositionPipe,
    FilterByTeamPipe,
    MatchupComponent,
    MatchupPlayerComponent,
    OrderByPipe,
    PlayerGraphComponent,
    PlayerInfoComponent,
    PlayerListComponent,
    PlayerListItemComponent,
    PlayersPageComponent,
    TeamGraphComponent,
    TeamInfoComponent,
    TeamsPageComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    MatOptionModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    NgbModule,
    SlickModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
