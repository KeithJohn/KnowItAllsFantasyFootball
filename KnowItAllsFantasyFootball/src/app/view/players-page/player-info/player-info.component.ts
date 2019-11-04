import { Component, OnInit, Input } from '@angular/core';
import { Player } from 'src/app/model/models/player.model';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.sass']
})
export class PlayerInfoComponent implements OnInit {
  @Input() currentPlayer: Player;

  constructor() { }

  ngOnInit() {
  
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

}
