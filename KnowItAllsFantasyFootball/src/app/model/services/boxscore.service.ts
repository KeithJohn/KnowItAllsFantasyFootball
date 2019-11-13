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

   getBoxscores(seasonId: number, matchupPeriodId: number, scoringPeriodId: number):Observable<any> {
     return from(this.client.getBoxscoreForWeek({ seasonId: seasonId, matchupPeriodId: matchupPeriodId, scoringPeriodId: scoringPeriodId }));
   }

   getHistoricalScoreboardForWeek(seasonId: number, matchupPeriodId: number, scoringPeriodId: number): Observable<any> {
     return from(this.client.getHistoricalScoreboardForWeek({seasonId: seasonId, matchupPeriodId: matchupPeriodId, scoringPeriodId: scoringPeriodId}));
   }

   getProjectedScores(boxscores: Boxscore[]){
    boxscores.forEach(boxscore => {
      boxscore.homeProjectedScore = 0;
      boxscore.awayProjectedScore = 0;
      boxscore.homeRoster.forEach(boxPlayer => {
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
    // if(boxscorePlayer.projectedPointBreakdown.passingYards);
    // boxscorePlayer.projectedPointBreakdown.passingTouchdowns;
    // boxscorePlayer.projectedPointBreakdown.passing2PtConversion;
    // boxscorePlayer.projectedPointBreakdown.passingInterceptions;
    // boxscorePlayer.projectedPointBreakdown.rushingYards;
    // boxscorePlayer.projectedPointBreakdown.rushingTouchdowns;
    // boxscorePlayer.projectedPointBreakdown.rushingTouchdowns;
    // boxscorePlayer.projectedPointBreakdown.rushing2PtConversions;
    // boxscorePlayer.projectedPointBreakdown.receivingYards;
    // boxscorePlayer.projectedPointBreakdown.receivingTouchdowns;
    // boxscorePlayer.projectedPointBreakdown.receiving2PtConversions;
    // boxscorePlayer.projectedPointBreakdown.receivingReceptions;
    // boxscorePlayer.projectedPointBreakdown.lostFumbles;
    // boxscorePlayer.projectedPointBreakdown.madeFieldGoalsFrom50Plus;
    // boxscorePlayer.projectedPointBreakdown.madeFieldGoalsFrom40To49;
    // boxscorePlayer.projectedPointBreakdown.madeFieldGoalsFromUnder40;
    // boxscorePlayer.projectedPointBreakdown.missedFieldGoals;
    // boxscorePlayer.projectedPointBreakdown.madeExtraPoints;
    // boxscorePlayer.projectedPointBreakdown.missedExtraPoints
    // boxscorePlayer.projectedPointBreakdown.defensive0PointsAllowed;
    // boxscorePlayer.projectedPointBreakdown.defensive1To6PointsAllowed;
    // boxscorePlayer.projectedPointBreakdown.defensive7To13PointsAllowed;
    // boxscorePlayer.projectedPointBreakdown.defensive14To17PointsAllowed;
    // boxscorePlayer.projectedPointBreakdown.defesnive18To27PointsAllowed;
    // boxscorePlayer.projectedPointBreakdown.defensive28To34PointsAllowed;
    // boxscorePlayer.projectedPointBreakdown.defensive35To45PointsAllowed;
    // boxscorePlayer.projectedPointBreakdown.defensiveBlockedKickForTouchdowns;
    // boxscorePlayer.projectedPointBreakdown.defensiveInterceptions;
    // boxscorePlayer.projectedPointBreakdown.defensiveFumbles;
    // boxscorePlayer.projectedPointBreakdown.defensiveBlockedKicks;
    // boxscorePlayer.projectedPointBreakdown.defensiveSafeties;
    // boxscorePlayer.projectedPointBreakdown.defensiveSacks;
    // boxscorePlayer.projectedPointBreakdown.kickoffReturnTouchdown;
    // boxscorePlayer.projectedPointBreakdown.puntReturnTouchdown;
    // boxscorePlayer.projectedPointBreakdown.fumbleReturnTouchdown;
    // boxscorePlayer.projectedPointBreakdown.interceptionReturnTouchdown;
    // boxscorePlayer.projectedPointBreakdown.defensive100To199YardsAllowed;
    // boxscorePlayer.projectedPointBreakdown.defensive200To299YardsAllowed;
    // boxscorePlayer.projectedPointBreakdown.defensive300To349YardsAllowed;
    // boxscorePlayer.projectedPointBreakdown.defensive350To399YardsAllowed;
    // boxscorePlayer.projectedPointBreakdown.defensive400To449YardsAllowed;
    // boxscorePlayer.projectedPointBreakdown.defensive450To499YardsAllowed;
    // boxscorePlayer.projectedPointBreakdown.defensive500To549YardsAllowed;
    // boxscorePlayer.projectedPointBreakdown.defensiveOver550YardsAllowed;
    return projPoints;
   }
}
