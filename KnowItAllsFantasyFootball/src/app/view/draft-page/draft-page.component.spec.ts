import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftPageComponent } from './draft-page.component';

describe('DraftPageComponent', () => {
  let component: DraftPageComponent;
  let fixture: ComponentFixture<DraftPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
