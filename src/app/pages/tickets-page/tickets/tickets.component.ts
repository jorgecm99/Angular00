import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketsService } from '../services/tickets.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {
  public id: string = '';
  public detailTicket?: any;

  constructor(private activatedRoute: ActivatedRoute, private ticketsService: TicketsService ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id') as string;
      this.getTicketDetail()
    });
  }
  public getTicketDetail (): void {
    this.ticketsService.getTicketDetail(this.id).subscribe((data: any) => {
      this.detailTicket = data;
    })
  }



}
