import { Injectable } from '@angular/core';
import { Client } from 'espn-fantasy-football-api/web';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  client;
  constructor() { 
    this.client = new Client({leagueId: 58438855});
  }


  getTeamsAtWeek(seasonId: number, scoringPeriodId: number): Observable<any>{
    return from(this.client.getTeamsAtWeek({seasonId: seasonId, scoringPeriodId: scoringPeriodId}));
  }
}
