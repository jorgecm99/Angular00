import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
}) 
export class HomePageService {
  getParticipants() {
    throw new Error('Method not implemented.');
  }
  public homeNFL: string = 'http://localhost:3000/home';

  constructor(private http: HttpClient) { }

  public getList () {
    return this.http.get(this.homeNFL)
  }
}
