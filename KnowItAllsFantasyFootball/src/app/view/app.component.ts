import { AppService } from "../model/services/app.service";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'KnowItAllsFantasyFootball';
  doneLoading: boolean = false;
  constructor(private appService: AppService) { }
  ngOnInit() {
    let service = this;
    let intializePromise = this.appService.initializeData();
    intializePromise.then(() => {
      //Time out to ensure everything is correctly loaded.
      setTimeout(function () { service.doneLoading = true }, 2000);
    }, error => {
      console.log(error);
    });
  }
}
