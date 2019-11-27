import { Component, OnInit, ViewChild, DefaultIterableDiffer, Input, Output, EventEmitter } from '@angular/core';
import {FreeAgentService} from "../../../model/services/free-agent.service";
import {TeamService} from "../../../model/services/team.service";
import {FreeAgent} from "../../../model/models/free-agent-player.model";
import {Team} from "../../../model/models/team.model";
import {Player} from "../../../model/models/player.model";
import { ArrayDataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.sass'],
  providers: []
})
export class PlayerListComponent implements OnInit {
  @Input() playersMap: Map<number, Player>;
  @Output() currentPlayer = new EventEmitter<Player>();
  freeAgents: FreeAgent[] =[];
  teams: Team[] = [];
  players: Player[] = [];
  playerTeamInfo = [];
  orderByType;
  searchText = null;

  currentPositionFilter: String = null;
  currentTeamFilter: number = null;
  constructor(private freeAgentService: FreeAgentService, private teamService: TeamService) {

  }    
  //TODO: Beautify everything / Clean up

  ngOnInit() {
    //this.getAllPlayers(2019, 10);
    this.players = this.getPlayers();
    console.log(this.players);
    
  }

  getPlayers(){
    //console.log(this.playersMap);
    return Array.from(this.playersMap.values());
  }

  getAllPlayers(seasonId: number, scoringPeriodId: number){
    //Get Rosters for each team.
      this.teamService.getTeamsAtWeek(seasonId, scoringPeriodId).subscribe(data =>{
        this.teams = data;
        this.teams.forEach(team => {
          team.roster.forEach(player => {
            player.teamId = team.id;
            player.teamName = team.name;
            this.playerTeamInfo.push({playerName: player.fullName, teamId: team.id, teamName: team.name});
          })
        })
        //Get Free agents
        this.freeAgentService.getFreeAgents(seasonId, scoringPeriodId).subscribe(data => {
          let freeAgents: FreeAgent[] = data;
          freeAgents.forEach(freeAgent => {
            //console.log(freeAgent);
            var teamInfo = this.getTeamInfo(freeAgent.player)
            freeAgent.player.teamId = teamInfo.teamId;
            freeAgent.player.teamName = teamInfo.teamName;
            this.players.push(freeAgent.player);
          })
          
        })
      })
  }

  getTeamInfo(player: Player){
    for(var i = 0; i < this.playerTeamInfo.length; i++){
      if(this.playerTeamInfo[i].playerName === player.fullName){
        return this.playerTeamInfo[i];
      }
    }
    return {playerName: player.fullName, teamId: 0, teamName: "Free Agent"};
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

  //TODO:
  setPlayer(player:Player){
    this.currentPlayer.emit(player);
    
  }
}