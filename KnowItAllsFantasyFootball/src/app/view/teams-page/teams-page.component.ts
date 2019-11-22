import {Component, Input, OnInit} from '@angular/core';
import { AppService } from 'src/app/model/services/app.service';
import {Player} from "../../model/models/player.model";
import {Team} from "../../model/models/team.model";
import {Boxscore} from "../../model/models/boxscore.model";

@Component({
  selector: 'app-teams-page',
  templateUrl: './teams-page.component.html',
  styleUrls: ['./teams-page.component.sass']
})
export class TeamsPageComponent implements OnInit {
  playersMap: Map<number, Player>;
  teamsMap: Map<number, Team>;
  boxscoresMap: Map<number, Boxscore[]>;

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.playersMap = this.appService.getPlayerMap();
    this.teamsMap = this.appService.getTeamMap();
    this.boxscoresMap = this.appService.getBoxscoresMap();
    console.log(this.boxscoresMap);

    //console.log(this.playersMap, this.teamsMap, this.boxscoresMap);
  }

}
