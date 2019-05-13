import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpUrls } from 'src/app/common.constants';
import * as io from "socket.io-client";

@Injectable({
    providedIn: 'root'
})
export class KitchenUiService {
    socket = io('http://localhost:1111');
    allDataOnKitchenPortal: any[] = []
    constructor(private httpUrls: HttpUrls, private http: HttpClient) {
        console.warn("kitchen")
        this.getOrderData().subscribe((data) => {
            data=data.reverse()
            this.allDataOnKitchenPortal = data;
        })
    }
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    getOrderData(): Observable<any> {
        return this.http.get(this.httpUrls.getNotifications, this.httpOptions)
    }
    doneAllData(item){
        this.socket.emit('doneData',item)


    }
}
