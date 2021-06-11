import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  public endpoint = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public getTickets() {
    return this.http.get(`${this.endpoint}/tickets`).pipe(
      map((request) => {
        if (!request){
          throw new Error ('Value expected!');
        } else {
           return request;
        }
      }),
      catchError(error =>{
        throw new Error ('Failed charge!');
      })
    );

  }

  public postParticipants (user:any) {
    return this.http.post(`${this.endpoint}/ticketsParticipants`, user).pipe(
      map((request) => {
        if (!request){
          throw new Error ('Value expected!');
        } else {
           return request;
        }
      }),
      catchError(error =>{
        throw new Error ('Failed charge!')
      })
    )
  }

  public getParticipants () {
    return this.http.get(`${this.endpoint}/tournamentParticipants`).pipe(
      map((participantRequest)=>{
        if (!participantRequest){
          throw new Error ('Value expected!');
        } else {
           return participantRequest;
        }
      }),
      catchError(error =>{
        throw new Error ('Failed charge!');
      })
    )
  }



}
