import { Component, OnInit, ViewChild, DefaultIterableDiffer } from '@angular/core';
import {FreeAgentService} from "../../../model/services/free-agent.service";
import {TeamService} from "../../../model/services/team.service";
import {FreeAgent} from "../../../model/models/free-agent-player.model";
import {Team} from "../../../model/models/team.model";
import {Player} from "../../../model/models/player.model";
import { PlayerFilterType } from 'src/app/model/enums/player-filter-type.enum';
import { QuickSortService } from 'src/app/model/services/quick-sort.service';
import { SortType } from 'src/app/model/enums/sort-type.enum';
import { OrderByPipe } from 'src/app/model/pipes/order-by.pipe';


@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.sass'],
  providers: [OrderByPipe]
})
export class PlayerListComponent implements OnInit {
  freeAgents: FreeAgent[] =[];
  teams: Team[] = [];
  players: Player[] = [];
  filteredPlayers: Player[] = [];
  orderByType;

  currentPositionFilter: String = null;
  currentTeamFilter: number = null;
  currentSortType: SortType;
  constructor(private quickSortService: QuickSortService, private freeAgentService: FreeAgentService, private teamService: TeamService) {

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
      var sort: SortType;
      if(filterValue === 'AVGAUCTIONVALUE'){
          this.orderByType = '-auctionValueAverage'
      }else if (filterValue === 'TRANSACTIONTRENDS'){
          this.orderByType = '-percentChange'
      }else {
        this.orderByType = null;
      }
      // switch (filterValue){
      //   case 'AVGAUCTIONVALUE': {
      //     sort = SortType.AvgAuctionValue;
      //     if(sort != this.currentSortType){
      //       this.currentSortType = sort;
      //       this.sortPlayers(this.currentSortType);
      //     }
      //   }
      //   case 'TRANSACTIONTRENDS': {
      //     sort = SortType.TransactionTrends;
      //     if(sort != this.currentSortType){
      //       this.currentSortType = sort;
      //       this.sortPlayers(this.currentSortType);
      //     }
      //   }
      //   default: {
      //     //error
      //     break;
      //   }
      }
    }

  //TODO: Learn pipes to use that for order by.
  //TODO: When refiltering also resort
  //TODO: Get projected and actual stats for each player somehow.
  //TODO: Check to see if api only returns some data when we can get more data. 
  //TODO: Beautify everything
  //TODO: Fix Duplicate players issue


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

  sortPlayers(sortType: SortType){
    // console.log('Sorting players ' + this.currentSortType);
    // this.quickSortService.sortType = sortType; 
    // this.filteredPlayers = this.quickSortService.quickSort(this.filteredPlayers, 0, this.filteredPlayers.length - 1);
    switch (sortType) {
      case SortType.AvgAuctionValue: {
        this.filteredPlayers = this.filteredPlayers.sort((a, b) => {
          return b.auctionVauleAverage - a.auctionVauleAverage;
        })
        break;
      }
      case SortType.TransactionTrends: {
        this.filteredPlayers = this.filteredPlayers.sort((a, b) => {
          return Math.abs(b.percentChange) - Math.abs(a.percentChange);
        })
        break;
      }
      default: {

        break;
      }
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