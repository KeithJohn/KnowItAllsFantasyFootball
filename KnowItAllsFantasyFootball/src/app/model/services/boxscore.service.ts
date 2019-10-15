import { Injectable } from '@angular/core';
import { Client } from 'espn-fantasy-football-api/web';
import { Observable, from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BoxscoreService {
  client;
  constructor() {
    this.client = new Client ({leagueId: 58438855})
   }

   getBoxscores(seasonId: number, matchupPeriodId: number, scoringPeriodId: number):Observable<any>{
     return from(this.client.getBoxscoreForWeek({ seasonId: seasonId, matchupPeriodId: matchupPeriodId, scoringPeriodId: scoringPeriodId }));
   }

   getHistoricalScoreboardForWeek(seasonId: number, matchupPeriodId: number, scoringPeriodId: number): Observable<any>{
     return from(this.client.getHistoricalScoreboardForWeek({seasonId: seasonId, matchupPeriodId: matchupPeriodId, scoringPeriodId: scoringPeriodId}));
   }
}
