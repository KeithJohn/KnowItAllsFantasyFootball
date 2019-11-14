import { Component, OnInit, Input } from '@angular/core';
import { Team } from 'src/app/model/models/team.model';
import {TeamService} from "../../../model/services/team.service";
import {AppService} from "../../../model/services/app.service";

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.sass']
})
export class TeamInfoComponent implements OnInit {
  // TODO: set up selection of current team.
  // TODO: calculate projected stats (possibly move to team services)
  currentTeamId: number;
  teams: Team[];
  constructor(private appService: AppService,private teamService: TeamService) { }

  ngOnInit() {
    this.teamService.getTeamsAtWeek(this.appService.seasonId, this.appService.currentWeek).subscribe(data => {
      this.teams = data;
    });
  }

}
