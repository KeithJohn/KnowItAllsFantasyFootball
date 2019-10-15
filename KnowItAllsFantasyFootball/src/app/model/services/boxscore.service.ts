import { Injectable } from '@angular/core';
import { Client } from 'espn-fantasy-football-api/web';
import { Boxscore } from '../models/boxscore.model';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BoxscoreService {
  client;
  constructor() {
    this.client = new Client ({leagueId: 58438855})
   }

   getBoxscores(seasonId: number, matchupPeriodId: number, scoringPeriodId: number):Observable<Boxscore[]>{
     return from(this.client.getBoxscoreForWeek({ seasonId: seasonId, matchupPeriodId: matchupPeriodId, scoringPeriodId: scoringPeriodId }));
   }
}
