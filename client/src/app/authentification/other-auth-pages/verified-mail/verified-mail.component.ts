import { Component, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CoreConfigService } from "@core/services/config.service";
import { CallApiService } from "app/services/call-api.service";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-verified-mail",
  templateUrl: "./verified-mail.component.html",
  styleUrls: ["./verified-mail.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class VerifiedMailComponent {
  // Public
  public coreConfig: any;
  public display = false;

  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   * @param {FormBuilder} _formBuilder
   */
  constructor(
    private _coreConfigService: CoreConfigService,
    private _service: CallApiService,
    private _activateRouter: ActivatedRoute,
    private _router: Router
  ) {
    this._unsubscribeAll = new Subject();

    // Configure the layout
    this._coreConfigService.config = {
      layout: {
        navbar: {
          hidden: true,
        },
        menu: {
          hidden: true,
        },
        footer: {
          hidden: true,
        },
        customizer: false,
        enableLocalStorage: false,
      },
    };
  }

  ngOnInit() {
    // Subscribe to config changes
    this._coreConfigService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((config) => {
        this.coreConfig = config;
      });

    this._service
      .callGetMethod(
        "/api/checkIfMailVerified",
        this._activateRouter.snapshot.params.email
      )
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(
        (data) => {
          this.display = true;
          if (data) {
            return;
          } else {
            this._router.navigate(["/miscellaneous/something-happened"]);
          }
        },
        (error) => {
          this._router.navigate(["/miscellaneous/something-happened"]);
        }
      );
  }
}
