import { Component, OnInit, Input } from '@angular/core';
import {Player} from "../../../../model/models/player.model";
import {BoxscorePlayer} from "../../../../model/models/boxscore-player.model";
import {BoxscoreService} from "../../../../model/services/boxscore.service";

@Component({
  selector: 'app-matchup-player',
  templateUrl: './matchup-player.component.html',
  styleUrls: ['./matchup-player.component.sass']
})
export class MatchupPlayerComponent implements OnInit {
  @Input() player: BoxscorePlayer;
  constructor() { }
  ngOnInit() {
  }

  getPosition(): String{
    if(this.player.player.eligiblePositions.includes("QB")){
      return "QB";
    }else if(this.player.player.eligiblePositions.includes("RB")){
      return "RB";
    }else if(this.player.player.eligiblePositions.includes("WR")){
      return "WR";
    }else if(this.player.player.eligiblePositions.includes("TE")){
      return "TE";
    }else if(this.player.player.eligiblePositions.includes("D/ST")){
      return "D/ST";
    }else if(this.player.player.eligiblePositions.includes("K")){
      return "K";
    }
  }
}
