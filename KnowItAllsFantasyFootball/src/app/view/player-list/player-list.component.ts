import { Component, OnInit, ViewChild } from '@angular/core';
import {FreeAgentService} from "../../model/services/free-agent.service";
import {TeamService} from "../../model/services/team.service";
import {FreeAgent} from "../../model/models/free-agent-player.model";
import {Team} from "../../model/models/team.model";
import {Player} from "../../model/models/player.model";
import { PlayerFilterType } from 'src/app/model/enums/player-filter-type.enum';


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

  currentPositionFilter: String = null;
  currentTeamFilter: number = null;
  currentSortType: String = null;
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
            player.teamId = team.id;
            player.teamName = team.name;
            this.players.push(player);
          })
        })
        //Get Free agents
        this.freeAgentService.getFreeAgents(seasonId, scoringPeriodId).subscribe(data => {
          let freeAgents: FreeAgent[] = data;
          freeAgents.forEach(freeAgent => {
            freeAgent.player.teamId = 0;
            freeAgent.player.teamName = "Free Agent";
            this.players.push(freeAgent.player);
          })
          this.filteredPlayers = this.players;
        })
      })
  }

  checkForSelectionChange(filterValue, playerFilterType){
    
    if(playerFilterType == PlayerFilterType.Position){
      //Check if filter value is equal to current position filter
      if(filterValue != this.currentPositionFilter){
        this.currentPositionFilter = filterValue;
        this.filterPlayers(this.currentPositionFilter, this.currentTeamFilter);
      }
    }else if(playerFilterType == PlayerFilterType.Team){
      //Check if filter value is equal to current team filter
      if(filterValue != this.currentTeamFilter){
        this.currentTeamFilter = filterValue;
        this.filterPlayers(this.currentPositionFilter, this.currentTeamFilter);
      }
    }else if(playerFilterType == "SORT"){
      if(filterValue != this.currentSortType){
        this.currentSortType = filterValue;
        this.sortPlayers(this.currentSortType);
      }
    }
  }
  //TODO: Fix sort so that it is correct.
  //TODO: When refiltering also resort
  //TODO: 

  filterPlayers(position: String, teamId: number){
    this.filteredPlayers = this.players;
    
    if(teamId != null){
      //Filter by team
      this.filteredPlayers = this.filteredPlayers.filter(player => {
        return (player.teamId == teamId);
      })
    }

    if(position != null){
      //Filter by position
      this.filteredPlayers = this.filteredPlayers.filter(player => {
        return player.eligiblePositions.includes(position);
      })
    }
  }

  sortPlayers(sortType: String){
    if(sortType == 'AvgAuctionValue'){
      this.filteredPlayers.sort(function(a, b){
        if(a.auctionVauleAverage > b.auctionVauleAverage){
          return -1;
        }
        if(b.auctionVauleAverage > a.auctionVauleAverage){
          return 1;
        }
      })
    }
    if(sortType == 'TransactionTrends'){
      this.filteredPlayers.sort(function(a, b){return Math.abs(b.percentChange) - Math.abs(a.percentChange)})
    }
  }


  getPosition(player: Player){
    if(player.eligiblePositions.includes("QB")){
      return "QB";
    }else if(player.eligiblePositions.includes("RB")){
      return "RB";
    }else if(player.eligiblePositions.includes("WR")){
      return "WR";
    }else if(player.eligiblePositions.includes("TE")){
      return "TE";
    }else if(player.eligiblePositions.includes("D/ST")){
      return "D/ST";
    }else if(player.eligiblePositions.includes("K")){
      return "K";
    }
  }

  setPlayer(player:Player){
    console.log(player);
    
  }
}