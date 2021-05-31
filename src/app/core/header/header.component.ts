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
      path:'',
    },
    {
      name:'Teams',
      path:'',
    },
    {
      name:'Players',
      path:'',
    },
    {
      name:'Tickets',
      path:'',
    },
    
  ]

  constructor() {

   }

  ngOnInit(): void {
  }

}
