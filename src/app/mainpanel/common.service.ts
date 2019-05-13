import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpUrls } from 'src/app/common.constants';
import * as io from "socket.io-client";

@Injectable({
    providedIn: 'root'
})
export class CommonService {
    socket = io('http://localhost:1111');
    currentNotification = false;
    newNotification: any[] = [];
    currentnewNotification: any[] = [];
    allNotificationPanel: boolean = false;
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    constructor(private httpUrls: HttpUrls, private http: HttpClient) { }
    receivedData = this.socket.on('newNotification', (data) => {
        this.currentnewNotification = data.newOrder;
        this.settimeoutTrigger()
    })
    getTotalNotification() {
        console.error("!");
        
        this.getNotificationData().subscribe((data) => {
            data = data.reverse()
            console.error("2",data);
            this.newNotification = data;
        })
    }
    settimeoutTrigger() {
        this.currentNotification = true;
        setTimeout(() => {
            this.currentNotification = false;
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
        console.warn("data",data);
        
        return this.http.post(this.httpUrls.saveNotifications, data, this.httpOptions)
    }
    showNotify() {
        this.getTotalNotification()
        this.allNotificationPanel = true;
    }
}
