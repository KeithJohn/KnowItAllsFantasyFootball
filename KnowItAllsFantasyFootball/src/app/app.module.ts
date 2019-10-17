import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule} from '@angular/material/';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './view/app.component';
import { TestComponent } from './view/test/test.component';
import { PlayerListComponent } from './view/player-list/player-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PlayerListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
