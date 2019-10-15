import { Injectable } from '@angular/core';
import { Client } from 'espn-fantasy-football-api/web';
import { Observable, from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LeagueService {
  client;
  constructor() { 
    this.client = new Client({leagueId: 58438855});
  }

  getLeagueInfo(seasonId: number): Observable<any>{
    return from(this.client.getLeagueInfo({seasonId: seasonId}));
  }
}
