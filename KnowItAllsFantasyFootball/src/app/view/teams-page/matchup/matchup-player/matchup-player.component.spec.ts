import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchupPlayerComponent } from './matchup-player.component';

describe('MatchupPlayerComponent', () => {
  let component: MatchupPlayerComponent;
  let fixture: ComponentFixture<MatchupPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchupPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchupPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
