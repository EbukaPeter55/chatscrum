import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamtaskComponent } from './teamtask.component';

describe('TeamtaskComponent', () => {
  let component: TeamtaskComponent;
  let fixture: ComponentFixture<TeamtaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamtaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
