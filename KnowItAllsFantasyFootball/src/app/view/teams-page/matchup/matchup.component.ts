import { Component, Input, OnInit } from '@angular/core';
import { BoxscoreService } from 'src/app/model/services/boxscore.service';
import { Boxscore } from 'src/app/model/models/boxscore.model';
import { TeamService } from 'src/app/model/services/team.service';
import { League } from 'src/app/model/models/league.model';
import { LeagueService } from 'src/app/model/services/league.service';
import { AppService } from 'src/app/model/services/app.service';

@Component({
  selector: 'app-matchup',
  templateUrl: './matchup.component.html',
  styleUrls: ['./matchup.component.sass']
})
export class MatchupComponent implements OnInit {
  boxScoreNumber: number = 1;
  isLoadedLineups: boolean = false;
  leagueInfo: League;
  lineupInfo;
  @Input() teamsMap;
  currentBoxscore: Boxscore;
  @Input() boxscoresMap: Map<number, Boxscore[]>;
  boxscoresForWeek: Boxscore[];

  constructor(private appService: AppService, private leagueService: LeagueService, private boxScoreService: BoxscoreService, private teamService: TeamService) { }

  //TODO: Move sort to seperate function for reuse
  ngOnInit() {
    this.getLineupInfo();
    this.boxscoresMap = this.appService.getBoxscoresMap();
    this.boxscoresForWeek = this.boxscoresMap.get(this.appService.getCurrentWeek());
    this.getLineups();
    this.currentBoxscore = this.boxscoresForWeek[0];
    this.boxScoreService.getProjectedScores(this.boxscoresForWeek);
    let slideConfig = { "slidesToShow": 4, "slidesToScroll": 4 }
  }

  getLineupInfo() {
    this.leagueService.getLeagueInfo(this.appService.getSeasonId()).subscribe(data => {
      this.leagueInfo = data;

      this.lineupInfo = this.leagueInfo.rosterSettings.lineupPostionCount;
    })
  }

  getLineups() {
    this.boxscoresForWeek[this.boxScoreNumber].homeRoster.sort(function (a, b) {
      var aPos: number;
      var bPos: number;
      switch (a.position) {
        case 'QB': {
          aPos = 1;
          break;
        }
        case 'RB': {
          aPos = 2;
          break;
        }
        case 'WR': {
          aPos = 3;
          break;
        }
        case 'TE': {
          aPos = 4;
          break;
        }
        case 'RB/WR/TE': {
          aPos = 5;
          break;
        }
        case 'D/ST': {
          aPos = 6;
          break;
        }
        case 'K': {
          aPos = 7;
          break;
        }
        case 'Bench': {
          aPos = 8;
          break;
        }
        default: {
          aPos = 9;
          break;
        }
      }

      switch (b.position) {
        case 'QB': {
          bPos = 1;
          break;
        }
        case 'RB': {
          bPos = 2;
          break;
        }
        case 'WR': {
          bPos = 3;
          break;
        }
        case 'TE': {
          bPos = 4;
          break;
        }
        case 'RB/WR/TE': {
          bPos = 5;
          break;
        }
        case 'D/ST': {
          bPos = 6;
          break;
        }
        case 'K': {
          bPos = 7;
          break;
        }
        case 'Bench': {
          bPos = 8;
          break;
        }
        default: {
          bPos = 9;
          break;
        }
      }
      return aPos - bPos;
    });

    this.boxscoresForWeek.forEach(boxscore => {
      boxscore.homeRoster.sort(function (a, b) {
        var aPos: number;
        var bPos: number;
        //Give position numeric value for presentation in list
        switch (a.position) {
          case 'QB': {
            aPos = 1;
            break;
          }
          case 'RB': {
            aPos = 2;
            break;
          }
          case 'WR': {
            aPos = 3;
            break;
          }
          case 'TE': {
            aPos = 4;
            break;
          }
          case 'RB/WR/TE': {
            aPos = 5;
            break;
          }
          case 'D/ST': {
            aPos = 6;
            break;
          }
          case 'K': {
            aPos = 7;
            break;
          }
          case 'Bench': {
            aPos = 8;
            break;
          }
          default: {
            aPos = 9;
            break;
          }
        }
        switch (b.position) {
          case 'QB': {
            bPos = 1;
            break;
          }
          case 'RB': {
            bPos = 2;
            break;
          }
          case 'WR': {
            bPos = 3;
            break;
          }
          case 'TE': {
            bPos = 4;
            break;
          }
          case 'RB/WR/TE': {
            bPos = 5;
            break;
          }
          case 'D/ST': {
            bPos = 6;
            break;
          }
          case 'K': {
            bPos = 7;
            break;
          }
          case 'Bench': {
            bPos = 8;
            break;
          }
          default: {
            bPos = 9;
            break;
          }
        }
        return aPos - bPos;
      });

      boxscore.awayRoster.sort(function (a, b) {
        var aPos: number;
        var bPos: number;
        //Give position numeric value for presentation in list
        switch (a.position) {
          case 'QB': {
            aPos = 1;
            break;
          }
          case 'RB': {
            aPos = 2;
            break;
          }
          case 'WR': {
            aPos = 3;
            break;
          }
          case 'TE': {
            aPos = 4;
            break;
          }
          case 'RB/WR/TE': {
            aPos = 5;
            break;
          }
          case 'D/ST': {
            aPos = 6;
            break;
          }
          case 'K': {
            aPos = 7;
            break;
          }
          case 'Bench': {
            aPos = 8;
            break;
          }
          default: {
            aPos = 9;
            break;
          }
        }
        switch (b.position) {
          case 'QB': {
            bPos = 1;
            break;
          }
          case 'RB': {
            bPos = 2;
            break;
          }
          case 'WR': {
            bPos = 3;
            break;
          }
          case 'TE': {
            bPos = 4;
            break;
          }
          case 'RB/WR/TE': {
            bPos = 5;
            break;
          }
          case 'D/ST': {
            bPos = 6;
            break;
          }
          case 'K': {
            bPos = 7;
            break;
          }
          case 'Bench': {
            bPos = 8;
            break;
          }
          default: {
            bPos = 9;
            break;
          }
        }
        return aPos - bPos;
      });

    });

    this.isLoadedLineups = true;
  }
  onSlide(event) {
    let slideIndex = parseInt(event.current.replace("ngb-slide-", ""), 10);
    this.currentBoxscore = this.boxscoresForWeek[slideIndex];
  }
}
