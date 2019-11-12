/**
 * TODO: Clean up and add methods for getting additional necessary data
 */
import { Injectable } from '@angular/core';
import { Client } from 'espn-fantasy-football-api/web';
import {Observable, from } from "rxjs";
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class FreeAgentService {
  client;

  constructor(private appService: AppService) {
    this.client = new Client({leagueId: appService.getLeagueId()});
  }

  getFreeAgents(seasonId: number, scoringPeriodId: number):Observable<any> {
    return from(this.client.getFreeAgents({seasonId: seasonId, scoringPeriodId: scoringPeriodId}));
  }

}
