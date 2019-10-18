import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatListModule, MatDividerModule ,MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule} from '@angular/material/';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './view/app.component';
import { TestComponent } from './view/test/test.component';
import { PlayerListComponent } from './view/player-list/player-list.component';
import { PlayerListItemComponent } from './view/player-list/player-list-item/player-list-item.component';

import { ScrollDispatchModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PlayerListComponent,
    PlayerListItemComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatDividerModule,
    MatListModule,
    ScrollDispatchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
