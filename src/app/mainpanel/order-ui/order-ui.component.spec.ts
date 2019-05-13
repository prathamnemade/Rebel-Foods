import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderUIComponent } from './order-ui.component';

describe('OrderUIComponent', () => {
  let component: OrderUIComponent;
  let fixture: ComponentFixture<OrderUIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderUIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
