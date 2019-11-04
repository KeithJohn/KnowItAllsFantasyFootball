import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
// TODO: Move all getting of info here. Pass down all necessary info from here. 
// TODO: Calculate all projected stats in the services. 
export class AppComponent {
  title = 'KnowItAllsFantasyFootball';
}
