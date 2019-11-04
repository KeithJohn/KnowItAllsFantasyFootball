import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/model/models/player.model';

@Component({
  selector: 'app-players-page',
  templateUrl: './players-page.component.html',
  styleUrls: ['./players-page.component.sass']
})
export class PlayersPageComponent implements OnInit {

  /**
   * TODO:  Move getting of teams and players to players page. 
   *        Get projected points for current player on change? Or get projected points for all when initiated.(may take a long time);
   */
  currentPlayer: Player;
  constructor() { }

  ngOnInit() {
  }

  setCurrentPlayer(player:Player){
    console.log(player);
    this.currentPlayer = player;
  }
}
