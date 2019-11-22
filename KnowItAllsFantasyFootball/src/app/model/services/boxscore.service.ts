/**
 * TODO: Clean up and add methods for getting additional necessary data
 */

import { Injectable } from '@angular/core';
import { Client } from 'espn-fantasy-football-api/web';
import { Observable, from } from 'rxjs';
import { AppService } from './app.service';
import {Boxscore} from "../models/boxscore.model";
import {BoxscorePlayer} from "../models/boxscore-player.model";

@Injectable({
  providedIn: 'root'
})
export class BoxscoreService {
  client;

  constructor(private appService: AppService) {
    this.client = new Client ({leagueId: appService.getLeagueId()})
   }

   getHistoricalScoreboardForWeek(seasonId: number, matchupPeriodId: number, scoringPeriodId: number): Observable<any> {
     return from(this.client.getHistoricalScoreboardForWeek({seasonId: seasonId, matchupPeriodId: matchupPeriodId, scoringPeriodId: scoringPeriodId}));
   }

   getProjectedScores(boxscores: Boxscore[]){
    boxscores.forEach(boxscore => {
      boxscore.homeProjectedScore = 0;
      boxscore.awayProjectedScore = 0;
      boxscore.homeRoster.forEach(boxPlayer => {
        boxPlayer.totalProjPoints = this.sumProjectedPoints(boxPlayer);
        if(boxPlayer.position != 'Bench'){
          boxscore.homeProjectedScore += this.sumProjectedPoints(boxPlayer);
        }
      });

      boxscore.awayRoster.forEach(boxPlayer =>{
        boxPlayer.totalProjPoints = this.sumProjectedPoints(boxPlayer);

        if(boxPlayer.position!= 'Bench'){
          boxscore.awayProjectedScore += boxPlayer.totalProjPoints;
        }
      });

    });
   }

   sumProjectedPoints(boxscorePlayer: BoxscorePlayer): number{
    var projPoints:number = 0;
    var projPointBreakdown = boxscorePlayer.projectedPointBreakdown;
    for(var prop in projPointBreakdown){
      if(Object.prototype.hasOwnProperty.call(projPointBreakdown, prop)){
        if(projPointBreakdown[prop] && typeof projPointBreakdown[prop] == 'number'){
          projPoints += projPointBreakdown[prop];
        }
      }
    }
    return projPoints;
   }


}
