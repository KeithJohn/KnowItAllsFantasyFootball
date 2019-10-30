import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/model/models/player.model';

@Component({
  selector: 'app-players-page',
  templateUrl: './players-page.component.html',
  styleUrls: ['./players-page.component.sass']
})
export class PlayersPageComponent implements OnInit {

  currentPlayer: Player;
  constructor() { }

  ngOnInit() {
  }

  setCurrentPlayer(player:Player){
    console.log(player);
    this.currentPlayer = player;
  }
}
