import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpUrls } from 'src/app/common.constants';
import * as io from "socket.io-client";
import { KitchenUiService } from './kitchen-ui/kitchenUI.service';
import { environment } from 'src/environments/environment.prod';
@Injectable({
    providedIn: 'root'
})
export class CommonService {
    // socket = io('http://localhost:1111');
    socket=io(1111);
    currentNotification = false;
    newNotification: any[] = [];
    currentnewNotification: any[] = [];
    orderCompletedData: any[] = []
    allNotificationPanel: boolean = false;
    orderComplete: boolean = false;
    completeTime;
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    constructor(private httpUrls: HttpUrls, private http: HttpClient, private kitchenUiService: KitchenUiService) { }
    receivedData = this.socket.on('newNotification', (data) => {
        this.currentnewNotification = data.newOrder;
        this.settimeoutTrigger()
    })
    orderRecievedNotify = this.socket.on('notifyOrderComplete', (data) => {
        console.warn("data,ordercomplete",data);
        
        this.updateAllOrders(data)
        clearTimeout(this.completeTime)
        this.settimeoutOrderComplete()
        this.orderCompletedData.push(data)
    })
    getTotalNotification() {
        this.getNotificationData().subscribe((data) => {
            data = data.reverse()
            this.newNotification = data;
        })
    }
    settimeoutTrigger() {
        this.currentNotification = true;
        setTimeout(() => {
            this.currentNotification = false;
        }, 5000);
    }
    settimeoutOrderComplete() {
        this.orderComplete = true;

        this.completeTime = setTimeout(() => {
            this.orderComplete = false;
            this.orderCompletedData = []
        }, 5000);

    }
    sendEventNotification(data) {
        this.saveNotifactionsToDB(data).subscribe((data) => {
            this.getTotalNotification()

        })
        this.socket.emit('notificationData', data);
    }
    getNotificationData(): Observable<any> {
        return this.http.get(this.httpUrls.getNotifications, this.httpOptions)
    }
    saveNotifactionsToDB(data): Observable<any> {
        console.warn("data", data);

        return this.http.post(this.httpUrls.saveNotifications, data, this.httpOptions)
    }
    showNotify() {
        this.getTotalNotification()
        this.allNotificationPanel = true;
    }
    updateAllOrders(data) {
        this.updateNotiifcation(data).subscribe((data) => {
            console.log("httpOptions-----", data)
            this.kitchenUiService.allDataOnKitchenPortal = data

        })
    }
    updateNotiifcation(data): Observable<any> {
        return this.http.post(this.httpUrls.updateNotifications, data, this.httpOptions)
    }
}
