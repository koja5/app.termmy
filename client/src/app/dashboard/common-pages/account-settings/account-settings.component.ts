import {
  Component,
  OnInit,
  OnDestroy,
  ViewEncapsulation,
  Input,
} from "@angular/core";

import { Subject } from "rxjs";
import { FlatpickrOptions } from "ng2-flatpickr";
import { ConfigurationService } from "app/services/configuration.service";

@Component({
  selector: "app-account-settings",
  templateUrl: "./account-settings.component.html",
  styleUrls: ["./account-settings.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class AccountSettingsComponent implements OnInit {
  // public
  public path = "pages/account-settings";
  public file = "navigation.json";

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
  ngOnInit() {}

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
