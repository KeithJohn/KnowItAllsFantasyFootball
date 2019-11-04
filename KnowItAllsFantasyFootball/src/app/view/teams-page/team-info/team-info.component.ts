import { Component, OnInit, Input } from '@angular/core';
import { Team } from 'src/app/model/models/team.model';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.sass']
})
export class TeamInfoComponent implements OnInit {
  // TODO: set up selection of current team.
  // TODO: calculate projected stats (possibly move to team services)
  @Input() currentTeam: Team;
  constructor() { }

  ngOnInit() {
  }

}
