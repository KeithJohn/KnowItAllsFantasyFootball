import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlayersPageComponent } from './view/players-page/players-page.component';
import set = Reflect.set;

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  /**
   * TODO: Add promises? or add week to entry, or make map with week.
   *  add normal free agents turn into map.
   */
  // getFreeAgent(){
  //   let playerMap = new Map();
  //   this.http.get(`https://fantasy.espn.com/apis/v3/games/ffl/seasons/2019/segments/0/leagues/58438855?scoringPeriodId=0&view=kona_player_info`).subscribe(data => {
  //     let players = data['players'];
  //     //console.log(players);
  //     let projPoints;
  //     let points;
  //     players.forEach(player =>{
  //           player.player.stats.forEach(stat =>{
  //             if(!stat.hasOwnProperty('appliedAverage')){
  //               if(stat.externalId == `20190`){
  //                 projPoints = stat.appliedTotal;
  //               }else{
  //                 points = stat.appliedTotal;
  //               }
  //             }
  //           });
  //       playerMap.set(player.id, {name: player.player.fullName, projPoints: [projPoints], points: [points]});
  //     });
  //
  //     for(let currentWeek = 1; currentWeek < 18; currentWeek++){
  //       this.http.get(`https://fantasy.espn.com/apis/v3/games/ffl/seasons/2019/segments/0/leagues/58438855?scoringPeriodId=${currentWeek}&view=kona_player_info`).subscribe(data => {
  //         let players = data['players'];
  //         //console.log(players);
  //         let projPoints= 0;
  //         let points = 0;
  //         players.forEach(player =>{
  //           player.player.stats.forEach(stat =>{
  //             if(!stat.hasOwnProperty('appliedAverage')){
  //               //console.log(`2019${currentWeek}`);
  //               //console.log(stat.externalId);
  //               //console.log(stat);
  //               if(stat.externalId == `2019${currentWeek}`){
  //                 projPoints = stat.appliedTotal;
  //               }else{
  //                 points = stat.appliedTotal;
  //               }
  //             }
  //           });
  //           //console.log(`${currentWeek}: proj: ${projPoints}, points: ${points}` );
  //           let playerInfo = playerMap.get(player.id);
  //           playerInfo.projPoints.push(projPoints);
  //           playerInfo.points.push(points);
  //           playerMap.set(player.id, playerInfo);
  //         });
  //       })
  //     }
  //     setTimeout(function(){ console.log(playerMap) }, 10000);
  //   });
  //
  // }

}
