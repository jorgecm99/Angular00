import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { TeamsDetailsComponent } from './pages/teams/teams-details/teams-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    TeamsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
