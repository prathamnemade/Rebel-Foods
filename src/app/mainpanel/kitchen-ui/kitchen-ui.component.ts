import { Component, OnInit } from '@angular/core';
import { KitchenUiService } from './kitchenUI.service';

@Component({
  selector: 'app-kitchen-ui',
  templateUrl: './kitchen-ui.component.html',
  styleUrls: ['./kitchen-ui.component.css']
})
export class KitchenUIComponent implements OnInit {

  constructor(public kitchenUiService:KitchenUiService) { }

  ngOnInit() {
  }

}
