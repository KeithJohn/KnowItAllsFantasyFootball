import { Component, OnInit, Input } from '@angular/core';
import {Player} from "../../../../model/models/player.model";
import {BoxscorePlayer} from "../../../../model/models/boxscore-player.model";

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

}
