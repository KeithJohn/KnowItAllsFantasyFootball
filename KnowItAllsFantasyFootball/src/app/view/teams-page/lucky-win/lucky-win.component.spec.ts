import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuckyWinComponent } from './lucky-win.component';

describe('LuckyWinComponent', () => {
  let component: LuckyWinComponent;
  let fixture: ComponentFixture<LuckyWinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuckyWinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuckyWinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
