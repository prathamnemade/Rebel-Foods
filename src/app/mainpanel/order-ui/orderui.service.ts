import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpUrls } from 'src/app/common.constants';


@Injectable({
    providedIn: 'root'
})
export class OrderUiService {
    selectedItem: string = "";
    dataToShow: any[] = []
    selectedQuantity: number = 1;
    ordersConfirmed: any[] = []
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    constructor(private http:HttpClient,private httpUrls:HttpUrls) {
        this.getSuggestions().subscribe(data => {
            this.dataToShow = data;
        })
    }
    addItem() {
        this.ordersConfirmed.push({ name: this.selectedItem['name'], quantity: this.selectedQuantity ,time:new Date()})
        var dataManipulator=this.dataToShow;
        var removed;
        this.dataToShow=[]
        for (var i = 0; i < dataManipulator.length; i++) {
            if (dataManipulator[i].name == this.selectedItem['name']) {
                removed=dataManipulator.splice(i, 1);
            }
        }
        dataManipulator.map(x=>{
            if(x!=removed){
                this.dataToShow.push(x)
            }
        })
        this.reset()
    }
    reset() {
        this.selectedItem = '';
        this.selectedQuantity = 1
    }
    allReset(){
        this.selectedItem = '';
        this.selectedQuantity = 1;
        this.ordersConfirmed=[]
    }
    getSuggestions(): Observable<any> {
        return this.http.get(this.httpUrls.getSuggestions, this.httpOptions)
    }
    orderToKitchen(data):Observable<any>{
        return this.http.post(this.httpUrls.kitchenPortal,data, this.httpOptions)
    }
}
