import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MessageService {
  public orientation = new Subject<string>();
  public setupApp = new Subject<any>();
  public avatarProfile = new Subject<string>();
  public configValue = new Subject<any>();

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

  sendAvatarProfile(value: any) {
    this.avatarProfile.next(value);
  }

  getAvatarProfile(): Observable<any> {
    return this.avatarProfile.asObservable();
  }

  sendConfigValueEmit(value: any) {
    this.configValue.next(value);
  }

  getConfigValueEmit(): Observable<any> {
    return this.configValue.asObservable();
  }
}
