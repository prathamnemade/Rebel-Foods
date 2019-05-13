import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from './common.service';
@Component({
  selector: 'app-mainpanel',
  templateUrl: './mainpanel.component.html',
  styleUrls: ['./mainpanel.component.css']
})
export class MainpanelComponent implements OnInit {
  constructor(private router: Router,public commonService:CommonService) { 
    this.commonService.getTotalNotification()
  }
  tabSelected = { order: true, predicted: false, kitchen: false };
  ngOnInit() {
    this.tabSelected = { order: false, predicted: false, kitchen: false };
    if (window.location.pathname == '/order') {
      this.tabSelected['order'] = true;
    } else if (window.location.pathname == '/kitchen') {
      this.tabSelected['kitchen'] = true;
    } else {
      this.tabSelected['predicted'] = true;
    }
  }
  redirectToPortal(page) {
    this.tabSelected = { order: false, predicted: false, kitchen: false };
    this.tabSelected[page] = true;
    this.router.navigate(['/' + page]);
  }
}
