import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictedUIComponent } from './predicted-ui.component';

describe('PredictedUIComponent', () => {
  let component: PredictedUIComponent;
  let fixture: ComponentFixture<PredictedUIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredictedUIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictedUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
