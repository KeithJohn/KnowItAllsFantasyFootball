import { Injectable } from '@angular/core';
import {FreeAgent} from "../models/free-agent-player.model";
import { Client } from 'espn-fantasy-football-api/web';
import { HttpClient } from '@angular/common/http';
import {Player} from "../models/player.model";
import {Team} from "../models/team.model";
import {Boxscore} from "../models/boxscore.model";
import {from} from "rxjs";
import {error} from "util";

@Injectable({
  providedIn: 'root'
})

/**
 * TODO: Clean up, Add league info get and all other client functions
 * TODO: Fix all async issues with getting teams, 
 *
 */
export class AppService {
  leagueId: number;
  date:Date;
  seasonId: number;
  currentWeek: number;
  client;
  playerMap: Map<number, Player>;
  teamMap: Map<number, Team>;
  boxscoresMap: Map<number, Boxscore[]>;

  constructor(private http: HttpClient) {
    this.setLeagueId(58438855);
    this.client = new Client({leagueId: this.getLeagueId()});
    this.date = new Date();
    this.seasonId = this.calculateSeasonId();
    this.currentWeek = this.calculateCurrentWeek();
    //this.initializeData();
   }

  calculateSeasonId(): number{
    return this.date.getFullYear();
  }

  //Only Valid for 2019. Will need to update for other years.
  calculateCurrentWeek(): number{
    if(this.date.getMonth() + 1 == 9 && this.date.getDate() < 10){
      //Before 9/10
      return 1;
    }
    else if (this.date.getMonth() + 1 == 9 && this.date.getDate() < 17){
      // 9/10 - 9/16
      return 2;
    }
    else if (this.date.getMonth() + 1 == 9 && this.date.getDate() < 24){
      // 9/17 - 9/23
      return 3;
    }
    else if (this.date.getMonth() + 1 == 9){
      // 9/24 - 9/30
      return 4;
    }
    else if (this.date.getMonth() + 1 == 10 && this.date.getDate() < 8){
      // 10/1 - 10/7
      return 5;
    }
    else if (this.date.getMonth() + 1 == 10 && this.date.getDate() < 15){
      // 10/8 - 10/14
      return 6;
    }
    else if (this.date.getMonth() + 1 == 10 && this.date.getDate() < 22){
      // 10/15 - 10/21
      return 7;
    }
    else if (this.date.getMonth() + 1 == 10 && this.date.getDate() < 29){
      // 10/22 - 10/28
      return 8;
    }
    else if (this.date.getMonth() + 1 == 10 || (this.date.getMonth() + 1 == 11 && this.date.getDate() < 5)){
      // 10/29 - 11/4
      return 9;
    }
    else if (this.date.getMonth() + 1 == 11 && this.date.getDate() + 1 < 12){
      // 11/5 - 11/11
      return 10;
    }
    else if (this.date.getMonth() + 1 == 11 && this.date.getDate() < 19){
      // 11/12 - 11/18
      return 11;
    }
    else if (this.date.getMonth() + 1 == 11 && this.date.getDate() < 26){
      // 11/19 - 11/25
      return 12;
    }
    else if (this.date.getMonth() + 1 == 11 || (this.date.getMonth() + 1 == 12 && this.date.getDate() < 3)){
      // 11/26 - 12/2
      return 13;
    }
    else if (this.date.getMonth() + 1 == 12 && this.date.getDate() < 10){
      // 12/3 - 12/9
      return 14;
    }
    else if (this.date.getMonth() + 1 == 12 && this.date.getDate() < 17){
      // 12-10 - 12/16
      return 15;
    }
    else if (this.date.getMonth() + 1 == 12 && this.date.getDate() < 24){
      // 12/17 - 12/23
      return 16;
    }
    else if (this.date.getMonth() + 1 == 12 && this.date.getDate() < 31){
      // 12/24 - 12/31
      return 17;
    }
    return 0;
  }

  setLeagueId(newLeagueId: number){
    this.leagueId = newLeagueId;
  }

  getLeagueId(): number{
    return this.leagueId;
  }

  getSeasonId(): number {
    return this.seasonId;
  }

  getCurrentWeek(): number {
    return this.currentWeek;
  }

  initializeData(): Promise<any>{
    let playersPromise = this.getPlayersAndTeams();
    let boxscoresPromise = this.getBoxscores();

    return new Promise(function (resolve, reject){
      Promise.all([playersPromise, boxscoresPromise]).then(values => {
        resolve("Success");
      }, error => {
        reject(error);
      })
    });
  }


  getPlayersAndTeams(){
    let service = this;
    this.playerMap = new Map<number, any>();
    //Populate map
    let seasonId = this.getSeasonId();
    let currentWeek = this.getCurrentWeek();
    let currentFreeAgentRequest = service.http.get(`https://fantasy.espn.com/apis/v3/games/ffl/seasons/2019/segments/0/leagues/58438855?scoringPeriodId=${currentWeek}&view=kona_player_info`).toPromise();//this.client.getFreeAgents(2019, 1);
    return new Promise(function(resolve, reject)  {
      currentFreeAgentRequest.then(playersList => {
        console.log("Request good");

        let freeAgents: FreeAgent[] = playersList['players'];
        freeAgents.forEach(freeAgent => {
          let player = freeAgent.player;
          player.seasonRawStats = freeAgent.rawStats;
          player.projectedSeasonRawStats = freeAgent.projectRawStats;
          service.playerMap.set(player.id, player);
        });

        //Loop through weeks to get projected and actual scored for the week
        for(let week = 1; week < 18; week++){
          let freeAgentRequestForWeek = service.http.get(`https://fantasy.espn.com/apis/v3/games/ffl/seasons/2019/segments/0/leagues/58438855?scoringPeriodId=${week}&view=kona_player_info`).toPromise();
          freeAgentRequestForWeek.then(playersForWeek => {
            let players = playersForWeek['players'];
            let projPointsForWeek = 0;
            let pointsForWeek = 0;
            players.forEach(player => {
              player.player.stats.forEach(stat => {
                if(!stat.hasOwnProperty('appliedAverage')) {
                  if(stat.externalId == `2019${week}`){
                    projPointsForWeek = stat.appliedTotal;
                  }else{
                    pointsForWeek = stat.appliedTotal
                  }
                }
              });
              let playerInfo = service.playerMap.get(player.id);
              playerInfo.projPointsByWeek = new Map();
              playerInfo.pointsByWeek = new Map();
              playerInfo.projPointsByWeek.set(week, projPointsForWeek);
              playerInfo.pointsByWeek.set(week, pointsForWeek);
              service.playerMap.set(player.id, playerInfo);
            });
          });
        }
        //TODO: Maybe move to intialize data in then
        service.getTeams();
        resolve(service.playerMap);
      }, error => {
        console.log("Request Bad");
        console.log(error);
        reject(error);
      });
    });
  }

  getTeams(){
    this.teamMap = new Map();
    let service = this;
    return new Promise(function(resolve, reject) {
      //TODO: figure out why this isn't working with variables.
      let teamsRequest = service.client.getTeamsAtWeek({seasonId: 2019, scoringPeriodId: 11 });
      teamsRequest.then( teamsInfo => {
        let teams: Team[] = teamsInfo;
        teams.forEach(team => {
          team.roster.forEach(rosterPlayer => {
            let player = service.playerMap.get(rosterPlayer.id);
            player.teamId = team.id;
            player.teamName = team.name;
            service.playerMap.set(player.id, player);
          });
          service.teamMap.set(team.id, team);
        });
        resolve(service.teamMap);
      }, error => {
        console.log(error);
        reject(error);
      });
    });

  }

  getBoxscores(){
    let service = this;
    this.boxscoresMap = new Map();
    return new Promise(function(resolve, reject){
      for(let week = 1; week <= service.getCurrentWeek() + 1; week++){
        let boxscoresRequest = service.client.getBoxscoreForWeek({seasonId: service.getSeasonId(), matchupPeriodId: week, scoringPeriodId: week});
        boxscoresRequest.then(boxscoresInfo => {
          let boxscores: Boxscore[] = boxscoresInfo;
          service.boxscoresMap.set(week, boxscores);
        }, error => {
          console.log(error);
          reject(error);
        });
      }
      resolve(service.boxscoresMap);
    });
  }

  getPlayerMap(){
    return this.playerMap;
  }

  getTeamMap(){
    return this.teamMap;
  }
  getBoxscoresMap(){
    return this.boxscoresMap;
  }
}
