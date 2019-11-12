import {
  Component,
  OnInit
} from '@angular/core';
import {
  Team
} from 'src/app/model/models/team.model';
import {
  BoxscoreService
} from 'src/app/model/services/boxscore.service';
import {
  Boxscore
} from 'src/app/model/models/boxscore.model';
import {
  TeamService
} from 'src/app/model/services/team.service';
import { League } from 'src/app/model/models/league.model';
import { LeagueService } from 'src/app/model/services/league.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import {BoxscorePlayer} from "../../../model/models/boxscore-player.model";

@Component({
  selector: 'app-matchup',
  templateUrl: './matchup.component.html',
  styleUrls: ['./matchup.component.sass']
})
export class MatchupComponent implements OnInit {
  boxScoreNumber:number = 1;
  isLoadedTeams: boolean = false;
  isLoadedMatchups: boolean = false;
  isLoadedLineups: boolean = false;
  leagueInfo:League;
  lineupInfo;
  teams: Team[] = [];
  currentBoxscore: Boxscore;
  boxscores: Boxscore[] = [];
  constructor(private leagueService: LeagueService ,private boxScoreService: BoxscoreService, private teamService: TeamService) {}

  ngOnInit() {
    this.getLineupInfo();
    this.getTeams()
    this.getMatchups(2019, 1, 1)
  }

  getTeams() {
    this.teamService.getTeamsAtWeek(2019, 1).subscribe(data => {
      this.teams = data;
      this.isLoadedTeams = true;
      console.log(this.teams);
    })
  }

  //TODO: Add team name for away and home for boxscore.
  getMatchups(seasonId: number, matchupPeriodId: number, scoringPeriodId: number) {
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
      this.getLineups();
      this.currentBoxscore=this.boxscores[0];
      this.isLoadedMatchups = true;
    });
  }

  getLineupInfo(){
    this.leagueService.getLeagueInfo(2019).subscribe(data => {
      this.leagueInfo = data;

      this.lineupInfo = this.leagueInfo.rosterSettings.lineupPostionCount;
    })
  }

  getLineups() {
    this.boxscores[this.boxScoreNumber].homeRoster.sort(function(a, b) {
      var aPos:number;
      var bPos:number;
      switch (a.position){
        case 'QB': {
          aPos=1;
          break;
        }
        case 'RB': {
          aPos=2;
          break;
        }
        case 'WR': {
          aPos=3;
          break;
        }
        case 'TE': {
          aPos=4;
          break;
        }
        case 'RB/WR/TE': {
          aPos=5;
          break;
        }
        case 'D/ST': {
          aPos=6;
          break;
        }
        case 'K': {
          aPos=7;
          break;
        }
        case 'Bench': {
          aPos=8;
          break;
        }
        default: {
          aPos=9;
          break;
        }
      }

      switch (b.position){
        case 'QB': {
          bPos=1;
          break;
        }
        case 'RB': {
          bPos=2;
          break;
        }
        case 'WR': {
          bPos=3;
          break;
        }
        case 'TE': {
          bPos=4;
          break;
        }
        case 'RB/WR/TE': {
          bPos=5;
          break;
        }
        case 'D/ST': {
          bPos=6;
          break;
        }
        case 'K': {
          bPos=7;
          break;
        }
        case 'Bench': {
          bPos=8;
          break;
        }
        default: {
          bPos=9;
          break;
        }
      }
      return aPos - bPos;
    });

    this.boxscores.forEach(boxscore => {
      boxscore.homeRoster.sort(function(a, b) {
        var aPos:number;
        var bPos:number;
        //Give position numeric value for presentation in list
        switch (a.position){
          case 'QB': {
            aPos=1;
            break;
          }
          case 'RB': {
            aPos=2;
            break;
          }
          case 'WR': {
            aPos=3;
            break;
          }
          case 'TE': {
            aPos=4;
            break;
          }
          case 'RB/WR/TE': {
            aPos=5;
            break;
          }
          case 'D/ST': {
            aPos=6;
            break;
          }
          case 'K': {
            aPos=7;
            break;
          }
          case 'Bench': {
            aPos=8;
            break;
          }
          default: {
            aPos=9;
            break;
          }
        }
        switch (b.position){
          case 'QB': {
            bPos=1;
            break;
          }
          case 'RB': {
            bPos=2;
            break;
          }
          case 'WR': {
            bPos=3;
            break;
          }
          case 'TE': {
            bPos=4;
            break;
          }
          case 'RB/WR/TE': {
            bPos=5;
            break;
          }
          case 'D/ST': {
            bPos=6;
            break;
          }
          case 'K': {
            bPos=7;
            break;
          }
          case 'Bench': {
            bPos=8;
            break;
          }
          default: {
            bPos=9;
            break;
          }
        }
        return aPos - bPos;
      });

      boxscore.awayRoster.sort(function(a, b) {
        var aPos:number;
        var bPos:number;
        //Give position numeric value for presentation in list
        switch (a.position){
          case 'QB': {
            aPos=1;
            break;
          }
          case 'RB': {
            aPos=2;
            break;
          }
          case 'WR': {
            aPos=3;
            break;
          }
          case 'TE': {
            aPos=4;
            break;
          }
          case 'RB/WR/TE': {
            aPos=5;
            break;
          }
          case 'D/ST': {
            aPos=6;
            break;
          }
          case 'K': {
            aPos=7;
            break;
          }
          case 'Bench': {
            aPos=8;
            break;
          }
          default: {
            aPos=9;
            break;
          }
        }
        switch (b.position){
          case 'QB': {
            bPos=1;
            break;
          }
          case 'RB': {
            bPos=2;
            break;
          }
          case 'WR': {
            bPos=3;
            break;
          }
          case 'TE': {
            bPos=4;
            break;
          }
          case 'RB/WR/TE': {
            bPos=5;
            break;
          }
          case 'D/ST': {
            bPos=6;
            break;
          }
          case 'K': {
            bPos=7;
            break;
          }
          case 'Bench': {
            bPos=8;
            break;
          }
          default: {
            bPos=9;
            break;
          }
        }
        return aPos - bPos;
      });

    });

    this.isLoadedLineups = true;
  }
  onSlide(event){
    console.log(parseInt(event.current.replace("ngb-slide-", ""), 10));
    let slideIndex=parseInt(event.current.replace("ngb-slide-", ""), 10);
    this.currentBoxscore=this.boxscores[slideIndex];
  }
}
