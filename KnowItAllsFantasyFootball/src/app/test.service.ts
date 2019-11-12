import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  getFreeAgent(){
    this.http.get('https://fantasy.espn.com/apis/v3/games/ffl/seasons/2019/segments/0/leagues/58438855?scoringPeriodId=2&view=kona_player_info').subscribe(data => {
      console.log(data);
    });
  }
}
