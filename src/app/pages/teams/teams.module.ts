import { NgModule } from '@angular/core';
import { TeamsComponent } from '../teams/teams/teams.component';
import { TeamsRoutingModule } from '../teams/teams-routing.module';



@NgModule({
  declarations: [TeamsComponent],
  imports: [TeamsRoutingModule],
  providers: [],
})
export class TeamsModule { }