import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HelpService } from '../help.service';
import { StorageService } from '../storage.service';

@Injectable({
  providedIn: 'root',
})
export class LoggedAnyService {
  constructor(
    public _router: Router,
    public _storageService: StorageService,
    public _helpService: HelpService
  ) {}

  canActivate() {
    if (this._storageService.getToken()) {
      return true;
    } else {
      this._helpService.setLocalStorage('previousLink', window.location.hash);
      this._router.navigate(['/']);
      return false;
    }
  }
}
