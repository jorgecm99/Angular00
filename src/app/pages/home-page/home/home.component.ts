import { Component, OnInit } from '@angular/core';
import { Ihome } from '../../teams/models/iteams';
import { HomePageService } from '../services/home-page.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public myList?: any;

  constructor(private homePageService : HomePageService) { }

  ngOnInit(): void {
    this.getList();
  }

  public getList (): void {
    this.homePageService.getList().subscribe((data: any) => {
      this.myList = data;
    })
  }

}
