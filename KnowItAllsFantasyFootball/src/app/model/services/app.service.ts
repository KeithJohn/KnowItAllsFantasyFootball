import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  leagueId: number;
  date:Date;
  seasonId: number;
  currentWeek: number;
  

  constructor() {
    this.leagueId = 58438855;
    this.date = new Date();
    this.seasonId = this.calculateSeasonId();
    this.currentWeek = this.calculateCurrentWeek();
   }

  calculateSeasonId(): number{
    return this.date.getFullYear();
  }

  //Only Valid for 2019. Will need to update for other years.
  calculateCurrentWeek(): number{
    console.log(this.date.getMonth() + 1);
    console.log(this.date.getDate());
    if(this.date.getMonth() + 1 == 9 && this.date.getDate() < 10){
      //Before 9/10
      return 1;
    }
    else if (this.date.getMonth() + 1 == 9 && this.date.getDate() < 17){
      // 9/10 - 9/16
      return 2;
    }
    else if (this.date.getMonth() + 1 == 9 && this.date.getDate() < 24){
      // 9/17 - 9/23
      return 3;
    }
    else if (this.date.getMonth() + 1 == 9){
      // 9/24 - 9/30
      return 4;
    }
    else if (this.date.getMonth() + 1 == 10 && this.date.getDate() < 8){
      // 10/1 - 10/7
      return 5;
    }
    else if (this.date.getMonth() + 1 == 10 && this.date.getDate() < 15){
      // 10/8 - 10/14
      return 6;
    }
    else if (this.date.getMonth() + 1 == 10 && this.date.getDate() < 22){
      // 10/15 - 10/21
      return 7;
    }
    else if (this.date.getMonth() + 1 == 10 && this.date.getDate() < 29){
      // 10/22 - 10/28
      return 8;
    }
    else if (this.date.getMonth() + 1 == 10 || (this.date.getMonth() + 1 == 11 && this.date.getDate() < 5)){
      // 10/29 - 11/4
      return 9;
    }
    else if (this.date.getMonth() + 1 == 11 && this.date.getDate() + 1 < 12){
      // 11/5 - 11/11
      return 10;
    }
    else if (this.date.getMonth() + 1 == 11 && this.date.getDate() < 19){
      // 11/12 - 11/18 
      return 11;
    }
    else if (this.date.getMonth() + 1 == 11 && this.date.getDate() < 26){
      // 11/19 - 11/25
      return 12;
    }
    else if (this.date.getMonth() + 1 == 11 || (this.date.getMonth() + 1 == 12 && this.date.getDate() < 3)){
      // 11/26 - 12/2
      return 13;
    }
    else if (this.date.getMonth() + 1 == 12 && this.date.getDate() < 10){
      // 12/3 - 12/9
      return 14;
    }
    else if (this.date.getMonth() + 1 == 12 && this.date.getDate() < 17){
      // 12-10 - 12/16
      return 15;
    }
    else if (this.date.getMonth() + 1 == 12 && this.date.getDate() < 24){
      // 12/17 - 12/23
      return 16;
    }
    else if (this.date.getMonth() + 1 == 12 && this.date.getDate() < 31){
      // 12/24 - 12/31
      return 17;
    }

    return 0;
  }

  setLeagueId(newLeagueId: number){
    this.leagueId = newLeagueId;
  }

  getLeagueId(): number{
    return this.leagueId;
  }

  getSeasonId(): number {
    return this.seasonId;
  }

  getCurrentWeek(): number {
    return this.currentWeek;
  }
}
