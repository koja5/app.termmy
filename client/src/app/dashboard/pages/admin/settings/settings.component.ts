import { Component, OnInit, OnDestroy, ViewEncapsulation } from "@angular/core";

import { Subject } from "rxjs";
import { FlatpickrOptions } from "ng2-flatpickr";
import { ConfigurationService } from "app/services/configuration.service";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"],
})
export class SettingsComponent implements OnInit {
  //public
  public router: string;
  public path = "pages/settings";
  public file = "settings.json";

  // private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {AccountSettingsService} _accountSettingsService
   */
  constructor() {
    this._unsubscribeAll = new Subject();
  }

  /**
   * On init
   */
  ngOnInit() {
    this.router = window.location.pathname;
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
