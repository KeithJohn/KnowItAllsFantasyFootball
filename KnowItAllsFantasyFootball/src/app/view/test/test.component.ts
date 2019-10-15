import { Component, OnInit } from '@angular/core';
import { Client } from 'espn-fantasy-football-api/web';
import { BoxscoreService } from '../../model/services/boxscore.service';
import { Boxscore } from 'src/app/model/models/boxscore.model';
import { LeagueService } from 'src/app/model/services/league.service';
import { League, DraftSettings, RosterSettings, LeagueMap } from 'src/app/model/models/league.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.sass']
})
export class TestComponent implements OnInit {
  myClient;
  constructor(private boxscoreService: BoxscoreService, private leagueService: LeagueService) {
    this.myClient = new Client({leagueId: 58438855});
   }

  ngOnInit() {
    //this.getBoxscores(2019, 4, 4);
    //this.getLeagueInfo(2019);
    //this.getHistoricalScoreboardForWeek(2019, 2, 2);
  }

  //Get all boxscores for the week
  getBoxscores(seasonId: number, matchupPeriodId: number, scoringPeriodId: number){
    //Get boxscores
    this.boxscoreService.getBoxscores(seasonId, matchupPeriodId, scoringPeriodId).subscribe(data =>{
      var boxscores: Boxscore[] = data;
      console.log(boxscores);
      console.log(boxscores.length);
      console.log(boxscores[0].awayRoster);
      boxscores.forEach(function (boxscore) {
        console.log("Home Team Id: " + boxscore.homeTeamId);
        console.log("Home Team Score: " + boxscore.homeScore);
        console.log("Away Team Id: " + boxscore.awayTeamId);
        console.log("Away Team Score: " + boxscore.awayScore);

        console.log(findWinningTeam(boxscore.homeScore, boxscore.awayScore));
        console.log("");
      })
    });
  }

  //Get boxscores from past seasons for the week.
  getHistoricalScoreboardForWeek(seasonId: number, matchupPeriodId: number, scoringPeriodId: number){
    this.boxscoreService.getHistoricalScoreboardForWeek(seasonId, matchupPeriodId, scoringPeriodId).subscribe(data => {
      console.log(data);
    })
  }

  //Get all info of league for given season
  getLeagueInfo(seasonId: number){
    this.leagueService.getLeagueInfo(seasonId).subscribe(data =>{
      console.log(data);
      var leagueInfo: League = data;
      let draftSettings: DraftSettings = leagueInfo.draftSettings;
      let rosterSettings: RosterSettings = leagueInfo.rosterSettings;
      let scheduleSettings: LeagueMap = leagueInfo.scheduleSettings;
      console.log("-----League Info-----");
      console.log("League name: " + leagueInfo.name);
      console.log("Is public: " + leagueInfo.isPublic);
      console.log("Size: " + leagueInfo.size);
      console.log("---Draft Settings---");
      console.log("Can trade draft picks: " + draftSettings.canTradeDraftPicks);
      console.log("Date: " + draftSettings.date);
      console.log("Time per pick: " + draftSettings.timePerPick);
      console.log("---Roster Settings---");
      console.log("Lineup position count: " + rosterSettings.lineupPostionCount);
      console.log("Position limits: " + rosterSettings.positionLimits);
      console.log("---Schedule Settings---");
      console.log("Number of playoff matchups: " + scheduleSettings.numberOfPlayoffMatchups);
      console.log("Number of playoff teams: " + scheduleSettings.numberOfPlayoffTeams);
      console.log("Number of regular season matchups: " + scheduleSettings.numberOfRegularSeasonMatchups);
      console.log("Playoff matchup length: " + scheduleSettings.playoffMatchupLength);
      console.log("Regular season matchup length: " + scheduleSettings.regularSeasonMatchupLength);

    })
  }

}

function findWinningTeam(homeTeamScore: number, awayTeamScore: number): String {
  if(homeTeamScore > awayTeamScore){
    return "Home Team Wins";
  }else if (awayTeamScore > homeTeamScore){
    return "Away Team Wins";
  }else {
    return "It's a tie!";
  }
}


