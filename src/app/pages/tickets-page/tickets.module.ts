import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { TicketsService } from './services/tickets.service';
import { TicketsRoutingModule } from './tickets-routing.module';
import { TicketsComponent } from './tickets/tickets.component';


@NgModule({
  declarations: [TicketsComponent],
  imports: [TicketsRoutingModule, HttpClientModule, CommonModule],
  providers: [TicketsService],
})
export class TicketsModule { }