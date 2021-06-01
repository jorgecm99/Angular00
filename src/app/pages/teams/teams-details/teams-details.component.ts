import { Component, Input, OnInit } from '@angular/core';
import { Iteams } from '../models/iteams';

@Component({
  selector: 'app-teams-details',
  templateUrl: './teams-details.component.html',
  styleUrls: ['./teams-details.component.scss']
})
export class TeamsDetailsComponent implements OnInit {
  @Input() public team?: Iteams;

  constructor() { }

  ngOnInit(): void {
  }

}
