import { Component, OnInit } from '@angular/core';
import { FreeAgentService } from '../model/services/free-agent.service';
import { TestService } from '../test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
// TODO: Move all getting of info here. Pass down all necessary info from here. 
// TODO: Calculate all projected stats in the services. 
export class AppComponent implements OnInit{
  title = 'KnowItAllsFantasyFootball';
  constructor(private testService: TestService,private freeAgentService: FreeAgentService ){}
  ngOnInit() {
    this.testService.getFreeAgent();
    
  }
}
