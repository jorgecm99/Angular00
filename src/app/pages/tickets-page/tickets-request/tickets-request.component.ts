import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tickets-request',
  templateUrl: './tickets-request.component.html',
  styleUrls: ['./tickets-request.component.scss']
})
export class TicketsRequestComponent implements OnInit {
  @Input() results: any;

  constructor() { }

  ngOnInit(): void {
  }

}
