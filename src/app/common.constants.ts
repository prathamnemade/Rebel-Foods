import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
    providedIn: 'root'
})
export class HttpUrls {
    getSuggestions = `${environment.serverUrl}/getSuggestions`;
    savePredicted = `${environment.serverUrl}/savePredicted`;
    kitchenPortal = `${environment.serverUrl}/kitchenPortal`;
    saveNotifications= `${environment.serverUrl}/saveNotification`;
    getNotifications=`${environment.serverUrl}/getnotification`
}