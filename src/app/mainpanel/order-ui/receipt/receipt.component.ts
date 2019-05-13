import { Component, OnInit, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { OrderUiService } from '../orderui.service';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ReceiptComponent implements OnInit {

  constructor(public orderUiService: OrderUiService) { }
  @Output() orderTrigger = new EventEmitter()
  ngOnInit() {
  }
  subOrder() {
    if (this.orderUiService.ordersConfirmed.length > 0) {
      this.orderTrigger.emit(true)
    }
  }

}
