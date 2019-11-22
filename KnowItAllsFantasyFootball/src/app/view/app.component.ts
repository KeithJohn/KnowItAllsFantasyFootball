import { Component, OnInit } from '@angular/core';
import { FreeAgentService } from '../model/services/free-agent.service';
import { TestService } from '../test.service';
import {AppService} from "../model/services/app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'KnowItAllsFantasyFootball';
  doneLoading: boolean = false;
  constructor(private appService:AppService ){}
  ngOnInit() {
    let service = this;
    let intializePromise = this.appService.initializeData();
    intializePromise.then(values => {
      setTimeout(function(){service.doneLoading = true}, 2000);
    }, error => {
      console.log(error);
    });
  }
}
