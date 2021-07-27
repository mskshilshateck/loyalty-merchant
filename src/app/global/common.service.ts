import { Injectable } from '@angular/core';
import {
  DialogLayoutDisplay,
  ToastNotificationInitializer
} from '@costlydeveloper/ngx-awesome-popup';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  toastNotification(title:string,message:string,type:string) {
    const newToastNotification = new ToastNotificationInitializer();
    newToastNotification.setTitle(title);
    newToastNotification.setMessage(message);

    // Choose layout color type
    newToastNotification.setConfig({
        LayoutType: type == 'Danger' ? DialogLayoutDisplay.DANGER  :type == 'Success' ? DialogLayoutDisplay.SUCCESS :DialogLayoutDisplay.WARNING // SUCCESS | INFO | NONE | DANGER | WARNING
    });

    // Simply open the toast
   return newToastNotification.openToastNotification$();
}
}
