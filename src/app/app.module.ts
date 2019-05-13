import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainpanelComponent } from './mainpanel/mainpanel.component';
import { PredictedUIComponent } from './mainpanel/predicted-ui/predicted-ui.component';
import { KitchenUIComponent } from './mainpanel/kitchen-ui/kitchen-ui.component';
import { OrderUIComponent } from './mainpanel/order-ui/order-ui.component';
import { AppRoutingModule } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DataTableModule} from 'primeng/datatable';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { OrderUiService } from './mainpanel/order-ui/orderui.service';
import { ReceiptComponent } from './mainpanel/order-ui/receipt/receipt.component';
import { HttpUrls } from './common.constants';
import { PredictedUiService } from './mainpanel/predicted-ui/predicted.service';
import { CommonService } from './mainpanel/common.service';
import { KitchenUiService } from './mainpanel/kitchen-ui/kitchenUI.service';
@NgModule({
  declarations: [
    AppComponent,
    MainpanelComponent,
    PredictedUIComponent,
    KitchenUIComponent,
    OrderUIComponent,
    ReceiptComponent
  ],
  imports: [
    DataTableModule,HttpClientModule,FormsModule,BrowserModule, AppRoutingModule, BrowserAnimationsModule,DropdownModule,InputTextModule,ButtonModule
  ],
  providers: [OrderUiService,HttpUrls,PredictedUiService,CommonService,KitchenUiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
