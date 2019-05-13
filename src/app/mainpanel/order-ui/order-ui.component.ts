import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OrderUiService } from './orderui.service';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
import * as io from "socket.io-client";
import { environment } from 'src/environments/environment.prod';
@Component({
  selector: 'app-order-ui',
  templateUrl: './order-ui.component.html',
  styleUrls: ['./order-ui.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class OrderUIComponent implements OnInit {
  // socket = io('http://localhost:1111');
  socket=io(1111);
  constructor(public orderUiService: OrderUiService, private router: Router,public common:CommonService) { }
  ngOnInit() {
  }
  orderTriggered(event) {
    if (event) {
      this.orderUiService.orderToKitchen(JSON.stringify(this.orderUiService.ordersConfirmed)).subscribe(data => {
        if (data) {
          // this.common.getTotalNotification()
          this.common.sendEventNotification(this.orderUiService.ordersConfirmed)
          this.router.navigate(['/kitchen']);
          document.getElementById('kitchen').click()
          this.orderUiService.allReset()
        }
      })
    }
    
  }
}
