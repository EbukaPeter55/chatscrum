import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamtaskcardsComponent } from './teamtaskcards.component';

describe('TeamtaskcardsComponent', () => {
  let component: TeamtaskcardsComponent;
  let fixture: ComponentFixture<TeamtaskcardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamtaskcardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamtaskcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
