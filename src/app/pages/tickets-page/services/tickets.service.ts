import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  public ticketsNFL: string = 'http://localhost:3000/tickets';


  constructor(private http: HttpClient) { }

  public getTickets () {
    return this.http.get(this.ticketsNFL)
  }

  public getTicketDetail (paramId: string) {
    return this.http.get(this.ticketsNFL + '/'+ paramId)
  }
}
