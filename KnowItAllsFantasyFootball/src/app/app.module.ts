import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatGridListModule, MatListModule, MatDividerModule ,MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule} from '@angular/material/';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './view/app.component';
import { TestComponent } from './view/test/test.component';
import { PlayerListComponent } from './view/players-page/player-list/player-list.component';
import { PlayerListItemComponent } from './view/players-page/player-list/player-list-item/player-list-item.component';

import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { MatchupComponent } from './view/teams-page/matchup/matchup.component';
import { LuckyWinComponent } from './view/teams-page/lucky-win/lucky-win.component';
import { TeamsPageComponent } from './view/teams-page/teams-page.component';
import { PlayersPageComponent } from './view/players-page/players-page.component';
import { DraftPageComponent } from './view/draft-page/draft-page.component';
import { HistoryPageComponent } from './view/history-page/history-page.component';
import { OrderByPipe } from './model/pipes/order-by.pipe';
import { FormsModule } from '@angular/forms';
import { FilterByPositionPipe } from './model/pipes/filter-by-position.pipe';
import { FilterByTeamPipe } from './model/pipes/filter-by-team.pipe';
import { FilterByNamePipe } from './model/pipes/filter-by-name.pipe';
import { PlayerGraphComponent } from './view/players-page/player-graph/player-graph.component';
import { PlayerInfoComponent } from './view/players-page/player-info/player-info.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PlayerListComponent,
    PlayerListItemComponent,
    MatchupComponent,
    LuckyWinComponent,
    TeamsPageComponent,
    PlayersPageComponent,
    DraftPageComponent,
    HistoryPageComponent,
    OrderByPipe,
    FilterByPositionPipe,
    FilterByTeamPipe,
    FilterByNamePipe,
    PlayerGraphComponent,
    PlayerInfoComponent,
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
    ScrollDispatchModule,
    MatGridListModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
