import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/model/models/team.model';
import { BoxscoreService } from 'src/app/model/services/boxscore.service';
import { Boxscore } from 'src/app/model/models/boxscore.model';
import { TeamService } from 'src/app/model/services/team.service';

@Component({
  selector: 'app-matchup',
  templateUrl: './matchup.component.html',
  styleUrls: ['./matchup.component.sass']
})
export class MatchupComponent implements OnInit {

  teams: Team[] = [];
  currentTeam: Team;
  boxscores: Boxscore[] = [];

  constructor(private boxScoreService: BoxscoreService, private teamService: TeamService) { }

  ngOnInit() {
    this.getTeams()
    this.getMatchups(2019, 1, 1);
  }

  getTeams(){
    this.teamService.getTeamsAtWeek(2019, 1).subscribe(data => {
      this.teams = data;
    })
  }

  //TODO: Add team name for away and home for boxscore.
  getMatchups(seasonId: number, matchupPeriodId: number, scoringPeriodId: number){
    this.boxScoreService.getBoxscores(seasonId, matchupPeriodId, scoringPeriodId).subscribe(data => {
      console.log(data);
      this.boxscores = data;
      this.boxscores.forEach(boxscore => {

        let awayTeam = this.teams[this.teams.findIndex(team => {
          return team.id == boxscore.awayTeamId
        })];
        let homeTeam = this.teams[this.teams.findIndex(team => {
          return team.id == boxscore.homeTeamId
        })];

        console.log(boxscore);

      })
    });
  }

}
