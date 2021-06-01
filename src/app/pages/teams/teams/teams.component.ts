import { Component, OnInit } from '@angular/core';
import { Iteams } from '../models/iteams';

import { IteamsService } from '../services/iteams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  public myTeams?: Iteams[];

  constructor(private iteamsService: IteamsService) { }

  ngOnInit(): void {
    this.getTeams;
  }

  public getTeams() {
    this.iteamsService.getTeams().subscribe((data: any)=>{
      this.myTeams = data;
    })
  }

}
