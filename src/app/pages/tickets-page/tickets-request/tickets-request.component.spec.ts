import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsRequestComponent } from './tickets-request.component';

describe('TicketsRequestComponent', () => {
  let component: TicketsRequestComponent;
  let fixture: ComponentFixture<TicketsRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketsRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketsRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
