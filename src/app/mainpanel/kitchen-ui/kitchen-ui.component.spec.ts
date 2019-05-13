import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenUIComponent } from './kitchen-ui.component';

describe('KitchenUIComponent', () => {
  let component: KitchenUIComponent;
  let fixture: ComponentFixture<KitchenUIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchenUIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
