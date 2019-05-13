import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpUrls } from 'src/app/common.constants';


@Injectable({
    providedIn: 'root'
})
export class PredictedUiService {
    dataFoodItems = [{ name: "Agnolini mantovani in brodo Pasta" }, { name: "Agnolotti piemontesi al Plin Pasta" }, { name: "Bigoli col musso Pasta" },
    { name: "50/50 burger" }, { name: "Angus burger" }, { name: "Aussie Burger" }, { name: "Bacon cheeseburger" }, { name: "Barbecue burger" }, { name: "Butter burger" }, { name: "Buffalo burger" }]
    predictedStock: Number = 0;
    selectedItem: string;
    dataToShow: any[] = [];
    dataPredictedForTheDay: any[] = []
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    constructor(private http: HttpClient, private httpurls: HttpUrls) {
        this.dataToShow = this.dataFoodItems;
        this.getSuggestions().subscribe(data => {
            this.dataPredictedForTheDay = data;
        })
    }
    addItem() {
        this.dataPredictedForTheDay.push({ name: this.selectedItem["name"] ? this.selectedItem["name"] : this.selectedItem, predicted: this.predictedStock })
        this.updatePrediction(JSON.stringify({ operation: "add", name: this.selectedItem["name"] ? this.selectedItem["name"] : this.selectedItem, predicted: this.predictedStock })).subscribe();
        var dataManipulator = this.dataToShow;
        var removed;
        this.dataToShow = []
        for (var i = 0; i < dataManipulator.length; i++) {
            if (dataManipulator[i].name == this.selectedItem['name']) {
                removed = dataManipulator.splice(i, 1);
            }
        }
        dataManipulator.map(x => {
            if (x != removed) {
                this.dataToShow.push(x)
            }
        })
        this.reset()
    }
    reset() {
        this.predictedStock = 0;
        this.selectedItem = "";
    }
    cancelPrediction(index) {
        var dataManipulator1 = this.dataPredictedForTheDay;
        this.dataPredictedForTheDay = []
        var removed = dataManipulator1.splice(index, 1)
        this.updatePrediction(JSON.stringify({ operation: "cancel", removed })).subscribe()
        dataManipulator1.map(x => {
            if (x != removed) {
                this.dataPredictedForTheDay.push(x)
            }
        })
    }
    updatePrediction(data): Observable<any> {
        return this.http.post(this.httpurls.savePredicted, data, this.httpOptions)
    }
    getSuggestions(): Observable<any> {
        return this.http.get(this.httpurls.getSuggestions, this.httpOptions)
    }
}
