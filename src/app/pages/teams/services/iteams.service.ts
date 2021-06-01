import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IteamsService {
  public apiNFL: string = 'http://localhost:3000/team';

  constructor(private http: HttpClient) { }

  public getTeams () {
    return this.http.get(this.apiNFL);
  }
}
