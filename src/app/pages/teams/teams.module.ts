import { NgModule } from '@angular/core';
import { TeamsComponent } from '../teams/teams/teams.component';
import { TeamsRoutingModule } from '../teams/teams-routing.module';

import {HttpClientModule} from '@angular/common/http';
import { IteamsService } from './services/iteams.service';
import { CommonModule } from '@angular/common';
import { TeamsDetailsComponent } from './teams-details/teams-details.component';



@NgModule({
  declarations: [TeamsComponent, TeamsDetailsComponent],
  imports: [TeamsRoutingModule, HttpClientModule, CommonModule],
  providers: [ IteamsService ],
  exports: [TeamsComponent, TeamsDetailsComponent]
})
export class TeamsModule { }