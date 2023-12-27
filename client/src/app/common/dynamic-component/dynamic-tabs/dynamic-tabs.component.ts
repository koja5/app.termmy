import {
  Component,
  OnInit,
  OnDestroy,
  ViewEncapsulation,
  Input,
} from "@angular/core";

import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { FlatpickrOptions } from "ng2-flatpickr";
import { ActivatedRoute, Router } from "@angular/router";
import { ConfigurationService } from "app/services/configuration.service";

@Component({
  selector: "app-dynamic-tabs",
  templateUrl: "./dynamic-tabs.component.html",
  styleUrls: ["./dynamic-tabs.component.scss"],
})
export class DynamicTabsComponent {
  @Input() path!: string;
  @Input() file!: string;
  public contentHeader: object;
  public data: any;

  // private
  private _unsubscribeAll: Subject<any>;
  public router: string;
  public config: any;

  /**
   * Constructor
   *
   * @param {AccountSettingsService} _accountSettingsService
   */
  constructor(private _configurationService: ConfigurationService) {
    this._unsubscribeAll = new Subject();
  }

  /**
   * On init
   */
  ngOnInit() {
    this.router = window.location.pathname;

    this._configurationService
      .getConfiguration(this.path, this.file)
      .subscribe((config) => {
        this.config = config;
      });

    // content header
    this.contentHeader = {
      headerTitle: "Account Settings",
      actionButton: true,
      breadcrumb: {
        type: "",
        links: [
          {
            name: "Home",
            isLink: true,
            link: "/",
          },
          {
            name: "Pages",
            isLink: true,
            link: "/",
          },
          {
            name: "Account Settings",
            isLink: false,
          },
        ],
      },
    };
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  changeRouter(router: string) {
    this.router = router;
  }
}
