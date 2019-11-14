import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlayersPageComponent } from './view/players-page/players-page.component';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  /**
   * stats[2].appliedTotal is projected score for week
   * stats[3].appliedTotal is actual scored for week
   */
  getFreeAgent(){
    this.http.get('https://fantasy.espn.com/apis/v3/games/ffl/seasons/2019/segments/0/leagues/58438855?scoringPeriodId=10&view=kona_player_info').subscribe(data => {
      let players = data['players'];
      for (let i = 0; i < 50; i++){
        console.log(players[i].player.fullName);
        console.log(players[i].player.stats);
      }

      //console.log(data);
    });
  }
}
