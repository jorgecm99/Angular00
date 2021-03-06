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
      path:'home',
    },
    {
      name:'Teams',
      path:'teams',
    },
    {
      name:'Tickets',
      path:'tickets',
    },

    {
      name:'Sign Up',
      path:'register',
    }
    
  ]

  constructor() {}

  ngOnInit(): void {}

  public dropDown = true

  dropDownMenu(){
    this.dropDown = !this.dropDown
  }


}
