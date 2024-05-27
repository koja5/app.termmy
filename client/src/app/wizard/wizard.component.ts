import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CoreConfigService } from "@core/services/config.service";
import { TranslateService } from "@ngx-translate/core";
import { CallApiService } from "app/services/call-api.service";
import { StorageService } from "app/services/storage.service";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-wizard",
  templateUrl: "./wizard.component.html",
  styleUrls: ["./wizard.component.scss"],
})
export class WizardComponent {
  public path = "pages/account-settings";
  public file = "wizard-user-data.json";
  public coreConfig: any;
  public welcomeText = -1;
  private _unsubscribeAll: Subject<any>;
  public welcomeTranslation!: string;
  public toTranslation!: string;

  constructor(
    private _coreConfigService: CoreConfigService,
    private _service: CallApiService,
    private _router: Router,
    private _translate: TranslateService,
    private _storageService: StorageService,
    private _activatedRouter: ActivatedRoute
  ) {
    this._unsubscribeAll = new Subject();

    this._coreConfigService.config = {
      layout: {
        navbar: {
          hidden: true,
        },
        footer: {
          hidden: true,
        },
        menu: {
          hidden: true,
        },
        customizer: false,
        enableLocalStorage: false,
      },
    };

    this.welcomeTranslation = this._translate
      .instant("wizard.welcome")
      .split("");
    this.toTranslation = this._translate.instant("wizard.to").split("");
  }

  ngOnInit() {
    this._coreConfigService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((config) => {
        this.coreConfig = config;
      });

    const token = this._activatedRouter.snapshot.params.token;
    if (token) {
      this._storageService.setToken(token);
    }
  }

  submit(event: any) {
    console.log(event);
    if (event.type != "submit") {
      this._service
        .callPostMethod("api/saveProfileInfo", event)
        .subscribe((data) => {
          if (data) {
            this.welcomeText = 0;
            setTimeout(() => {
              this.welcomeText++;
            }, 3000);

            setTimeout(() => {
              this._router.navigate(["dashboard/admin"]);
            }, 6000);
          }
        });
    }
  }
}
