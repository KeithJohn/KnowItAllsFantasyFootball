import { Component, OnInit } from '@angular/core';
import {FreeAgentService} from "../../model/services/free-agent.service";
import {TeamService} from "../../model/services/team.service";
import {FreeAgent} from "../../model/models/free-agent-player.model";
import {Team} from "../../model/models/team.model";
import {Player} from "../../model/models/player.model";


@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.sass']
})
export class PlayerListComponent implements OnInit {
  freeAgents: FreeAgent[] =[];
  teams: Team[] = [];
  players: Player[] = [];
  filteredPlayers: Player[] = [];

  currentPositionFilter: String = "";
  currentTeamFilter: String = "";
  constructor(private freeAgentService: FreeAgentService, private teamService: TeamService) {

  }

  ngOnInit() {
    this.getAllPlayers(2019, 5);
  }

  getAllPlayers(seasonId: number, scoringPeriodId: number){
    //Get Rosters for each team.
      this.teamService.getTeamsAtWeek(seasonId, scoringPeriodId).subscribe(data =>{
        this.teams = data;
        this.teams.forEach(team => {
          team.roster.forEach(player => {
            //console.log(player);
            player.teamId = team.id;
            this.players.push(player);
          })
        })
        //Get Free agents
        this.freeAgentService.getFreeAgents(seasonId, scoringPeriodId).subscribe(data => {
          let freeAgents: FreeAgent[] = data;
          freeAgents.forEach(freeAgent => {
            this.players.push(freeAgent.player);
          })
          this.filteredPlayers = this.players;
        })
      })
  }

  //TODO: When selecting empty selection, remove the filter, but keep others
  //TODO: Add check that if changing filter for already selected, then remove and add filter
  //TODO: Learn proper way to do filters/ queries.

  filterPosition(position: String){
    if(position == null){

      this.filteredPlayers = this.players;
    }else{
      this.filteredPlayers = this.filteredPlayers.filter(player => {
        return player.eligiblePositions.includes(position);
      })
    }
  }

  filterTeam(teamId: number){
    if(teamId == null){
      this.filteredPlayers = this.players;
    }else{
      this.filteredPlayers = this.filteredPlayers.filter(player => {
        return (player.teamId == teamId);
      });
    }
    // if(teamId == null){
    //
    // }else{
    //   this.filteredPlayers = this.filteredPlayers.filter(player => {
    //     return this.isPlayerOnTeam(teamId, player.id);
    //   })
    // }
  }

  // isPlayerOnTeam(teamId: number, playerId: number): boolean{
  //   console.log("Entering isPlayerOnTeam");
  //   for (var i = 0; i < this.teams.length; i+=1 ){
  //     console.log("Entering for loop")
  //     if (this.teams[i].id == teamId) {
  //       for (var j = 0; j < this.teams[i].roster.length; j+=1){
  //         if(this.teams[i].roster[j].id == playerId){
  //           console.log("Returning true");
  //           return true;
  //         }
  //       }
  //     }
  //   }
  //   console.log("Returning false");
  //   return false;
  // }

  sortBy(){

  }

}
