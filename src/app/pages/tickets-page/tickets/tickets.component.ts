import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../services/tickets.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  constructor(private ticketsService: TicketsService) { }

  ngOnInit(): void {
  }

}
