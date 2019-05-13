import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpUrls } from 'src/app/common.constants';


@Injectable({
    providedIn: 'root'
})
export class KitchenUiService {
    allDataOnKitchenPortal: any[] = []
    constructor(private httpUrls: HttpUrls, private http: HttpClient) {
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
}
