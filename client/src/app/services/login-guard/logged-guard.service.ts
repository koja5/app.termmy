import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { StorageService } from "../storage.service";

@Injectable({
  providedIn: "root",
})
export class LoggedGuard {
  constructor(
    private _router: Router,
    private _storageService: StorageService
  ) {}

  canActivate() {
    if (!this._storageService.getToken()) {
      return true;
    } else {
      this._router.navigate(["/dashboard/settings/worktime"]);
      return false;
    }
  }
}
