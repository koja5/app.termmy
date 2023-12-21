import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MessageService {
  public orientation = new Subject<string>();

  constructor() {}

  sendOrientation(value: string) {
    this.orientation.next(value);
  }

  getOrientation(): Observable<string> {
    return this.orientation.asObservable();
  }
}
