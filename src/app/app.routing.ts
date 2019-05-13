import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { KitchenUIComponent } from './mainpanel/kitchen-ui/kitchen-ui.component';
import { OrderUIComponent } from './mainpanel/order-ui/order-ui.component';
import { PredictedUIComponent } from './mainpanel/predicted-ui/predicted-ui.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/predicted',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: OrderUIComponent,
    },
    {
        path: 'kitchen',
        component: KitchenUIComponent,
    },
    {
        path: 'order',
        component: OrderUIComponent,
    },
    {
        path: 'predicted',
        component: PredictedUIComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }