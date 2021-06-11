import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TicketService } from 'src/app/shared/tickets/ticket.service';
import { TicketsService } from '../services/tickets.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {
  public id: string = '';
  public detailTicket?: any;
  @Output() newParticipantEvent = new EventEmitter<void>();

  
  public eventMatch: FormGroup;
  public submitted = false;
  public user!: any;



  constructor(private activatedRoute: ActivatedRoute, private ticketsService: TicketsService,
    public ticketService: TicketService, public formBuilder:FormBuilder ) {
      this.eventMatch = this.formBuilder.group({
        name: ['', [Validators.required]],
        quantity: ['', [Validators.required]],
        place: ['', [Validators.required]],
        email: ['', [Validators.required]],
      });
  
     }

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

  public onSubmit(): void {
    this.submitted = true;

    if (this.eventMatch.valid){
      this.user = {
        name: this.eventMatch.get('name')?.value,
        quantity: this.eventMatch.get('quantity')?.value,
        place: this.eventMatch.get('place')?.value,
        email: this.eventMatch.get('email')?.value,
      };
      this.submitted = false;
      this.eventMatch.reset();
      this.ticketService.postParticipants(this.user).subscribe((data) => {
        this.newParticipantEvent.emit();
        console.log('tickets');
        alert( `You have applied for ${this.user.quantity} tickets for the match vs ${this.user.name}. An email has been sent to ${this.user.email} for more details.`)
    });
    }
  }




}
