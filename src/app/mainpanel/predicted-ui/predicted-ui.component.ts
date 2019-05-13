import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { PredictedUiService } from './predicted.service';

@Component({
  selector: 'app-predicted-ui',
  templateUrl: './predicted-ui.component.html',
  styleUrls: ['./predicted-ui.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PredictedUIComponent implements OnInit {

  constructor(public predictedUiService:PredictedUiService) { }

  ngOnInit() {
  }

}
