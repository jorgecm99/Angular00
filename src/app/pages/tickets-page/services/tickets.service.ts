import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  public playersNFL: string = 'http://localhost:3000/players';


  constructor(private http: HttpClient) { }

  public getPlayers () {
    return this.http.get(this.playersNFL)
  }
}
