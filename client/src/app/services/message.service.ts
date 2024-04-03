import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MessageService {
  public orientation = new Subject<string>();
  public setupApp = new Subject<any>();

  constructor() {}

  sendOrientation(value: string) {
    this.orientation.next(value);
  }

  getOrientation(): Observable<string> {
    return this.orientation.asObservable();
  }

  sendSetupApp(value: any) {
    this.setupApp.next(value);
  }

  getSetupApp(): Observable<any> {
    return this.setupApp.asObservable();
  }
}
