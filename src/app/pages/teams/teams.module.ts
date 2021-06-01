import { NgModule } from '@angular/core';
import { TeamsComponent } from '../teams/teams/teams.component';
import { TeamsRoutingModule } from '../teams/teams-routing.module';

import {HttpClientModule} from '@angular/common/http';
import { IteamsService } from './services/iteams.service';



@NgModule({
  declarations: [TeamsComponent],
  imports: [TeamsRoutingModule, HttpClientModule],
  providers: [ IteamsService ],
})
export class TeamsModule { }