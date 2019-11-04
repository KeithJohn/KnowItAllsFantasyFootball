/**
 * TODO: Clean up and add methods for getting additional necessary data
 */
import { Injectable } from '@angular/core';
import { Client } from 'espn-fantasy-football-api/web';
import {Observable, from } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FreeAgentService {
  client;
  constructor() {
    this.client = new Client({leagueId: 58438855});
  }

  getFreeAgents(seasonId: number, scoringPeriodId: number):Observable<any> {
    return from(this.client.getFreeAgents({seasonId: seasonId, scoringPeriodId: scoringPeriodId}));
  }

}
