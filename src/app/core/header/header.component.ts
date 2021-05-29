import { Component, OnInit } from '@angular/core';
import { Iheader } from './models/iheader';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public headerNav?: Iheader[] = [
    {
      name:'Home',
      patch:'',
    },
    {
      name:'Teams',
      patch:'',
    },
    {
      name:'Players',
      patch:'',
    },
    {
      name:'Tickets',
      patch:'',
    },
    
  ]

  constructor() {

   }

  ngOnInit(): void {
  }

}
