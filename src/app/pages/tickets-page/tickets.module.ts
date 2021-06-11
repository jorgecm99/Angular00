import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { TicketsService } from './services/tickets.service';
import { TicketsRoutingModule } from './tickets-routing.module';
import { TicketsComponent } from './tickets/tickets.component';
import { TicketsRequestComponent } from './tickets-request/tickets-request.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [TicketsComponent, TicketsRequestComponent],
  imports: [TicketsRoutingModule, HttpClientModule, CommonModule, FormsModule, ReactiveFormsModule],
  providers: [TicketsService],
})
export class TicketsModule { }