import { Component, OnInit } from '@angular/core';
import { Client } from 'espn-fantasy-football-api/web';
import { BoxscoreService } from '../../model/services/boxscore.service';
import { Boxscore } from 'src/app/model/models/boxscore.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.sass']
})
export class TestComponent implements OnInit {
  myClient;
  constructor(private boxscoreService: BoxscoreService) {
    this.myClient = new Client({leagueId: 58438855});
   }

  ngOnInit() {
    this.boxscoreService.getBoxscores(2019, 1, 1).subscribe(data =>{
      var boxscores: Boxscore[] = data;
      console.log(boxscores);
      console.log(boxscores.length);
      console.log(boxscores[0].awayRoster);
      boxscores.forEach(function (boxscore) {
        console.log("Home Team Id: " + boxscore.homeTeamId);
        console.log("Home Team Score: " + boxscore.homeScore);
        console.log("");
        console.log("Away Team Id: " + boxscore.awayTeamId);
        console.log("Away Team Score: " + boxscore.awayScore);

        console.log(this.findWinningTeam());
      })
    });
    
  }

  findWinningTeam(homeTeamScore: number, awayTeamScore: number): String{
    if(homeTeamScore > awayTeamScore){
      return "Home Team Wins";
    }else if (awayTeamScore > homeTeamScore){
      return "Away Team Wins";
    }else {
      return "It's a tie!";
    }
  }

}
