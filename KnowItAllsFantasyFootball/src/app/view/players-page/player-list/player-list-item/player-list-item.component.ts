import { Component, OnInit, Input } from '@angular/core';
import { Player } from 'src/app/model/models/player.model';

@Component({
  selector: 'app-player-list-item',
  templateUrl: './player-list-item.component.html',
  styleUrls: ['./player-list-item.component.sass']
})
export class PlayerListItemComponent implements OnInit {
  @Input() player: Player;
  playerPosition: String;
  constructor() { }

  ngOnInit() {
    this.playerPosition = this.getPosition();
  }

  getPosition() {
    if (this.player.eligiblePositions.includes("QB")) {
      return "QB";
    } else if (this.player.eligiblePositions.includes("RB")) {
      return "RB";
    } else if (this.player.eligiblePositions.includes("WR")) {
      return "WR";
    } else if (this.player.eligiblePositions.includes("TE")) {
      return "TE";
    } else if (this.player.eligiblePositions.includes("D/ST")) {
      return "D/ST";
    } else if (this.player.eligiblePositions.includes("K")) {
      return "K";
    }
  }
}
