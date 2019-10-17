import { Injectable } from '@angular/core';
import { Client } from 'espn-fantasy-football-api/web';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NflGameService {
  client;
  constructor() { 
    this.client = new Client({leagueId: 58438855});
  }

  getNFLGamesForPeriod(startDate: String, endDate: String){
    return from(this.client.getNFLGamesForPeriod({startDate: startDate, endDate: endDate}))
  }
}
