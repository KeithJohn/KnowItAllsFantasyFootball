import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/model/models/player.model';
import { AppService } from 'src/app/model/services/app.service';
import { Team } from 'src/app/model/models/team.model';
import { Boxscore } from 'src/app/model/models/boxscore.model';

@Component({
  selector: 'app-players-page',
  templateUrl: './players-page.component.html',
  styleUrls: ['./players-page.component.sass']
})
export class PlayersPageComponent implements OnInit {
  playersMap: Map<number, Player>;
  teamsMap: Map<number, Team>;
  boxscoresMap: Map<number, Boxscore[]>;
  /**
   * TODO:  Move getting of teams and players to players page. 
   *        Get projected points for current player on change? Or get projected points for all when initiated.(may take a long time);
   */
  currentPlayer: Player;
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.playersMap= this.appService.getPlayerMap();
    this.teamsMap=this.appService.getTeamMap();
    this.boxscoresMap=this.appService.getBoxscoresMap();
  }

  setCurrentPlayer(player:Player){
    //console.log(player);
    this.currentPlayer = player;
  }
}
