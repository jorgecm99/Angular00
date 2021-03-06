import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iregister } from '../../teams/models/iteams';
import { catchError, map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  public endpoint = 'http://localhost:3000';

  constructor(private http:HttpClient) { }

  public postUser(user:Iregister) {
    return this.http.post(`${this.endpoint}/register`, user).pipe(
      map((request)=>{
        if (!request){
          throw new Error ('Value expected!');
        } else {
           return request;
        }
      }),
      catchError(error =>{
        throw new Error ('Failed charge!')
      })
    );
  };

}
