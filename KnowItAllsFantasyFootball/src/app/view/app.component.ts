import { Component, OnInit } from '@angular/core';
import { FreeAgentService } from '../model/services/free-agent.service';
import { TestService } from '../test.service';
import {AppService} from "../model/services/app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
// TODO: Move all getting of info here. Pass down all necessary info from here.
// TODO: Calculate all projected stats in the services.
export class AppComponent implements OnInit{
  title = 'KnowItAllsFantasyFootball';
  doneLoading: boolean = false;
  constructor(private appService:AppService ){}
  ngOnInit() {
    let service = this;
    let intializePromise = this.appService.initializeData();
    intializePromise.then(values => {
      service.doneLoading = true;
      console.log("Done Loading");
    }, error => {
      console.log(error);
    });
  }
}
