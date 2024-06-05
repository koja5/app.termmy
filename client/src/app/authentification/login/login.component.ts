import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from "@angular/forms";
import { takeUntil } from "rxjs/operators";
import { Subject, Subscription } from "rxjs";
import { Router } from "@angular/router";
import { CoreConfigService } from "@core/services/config.service";
import { CallApiService } from "app/services/call-api.service";
import { StorageService } from "app/services/storage.service";
import { SocialAuthService } from "@abacritt/angularx-social-login";
import { GoogleLoginProvider } from "@abacritt/angularx-social-login";
import { MsalService } from "@azure/msal-angular";
import {
  AuthenticationResult,
  PublicClientApplication,
} from "@azure/msal-browser";
import { LangChangeEvent, TranslateService } from "@ngx-translate/core";
import { environment } from "../../../environments/environment";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
  //  Public
  public GOOGLE_AUTH_URL = environment.GOOGLE_AUTH_URL;
  public coreConfig: any;
  public loginForm: UntypedFormGroup;
  public loading = false;
  public submitted = false;
  public returnUrl: string;
  public error = "";
  public passwordTextType: boolean;
  public lang: string;
  public authSubscription!: Subscription;

  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   */
  constructor(
    private _coreConfigService: CoreConfigService,
    private _formBuilder: UntypedFormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private _service: CallApiService,
    private _storageService: StorageService,
    private authService: SocialAuthService,
    private msalService: MsalService,
    private _translate: TranslateService
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

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  /**
   * Toggle password
   */
  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    // Login
    this.loading = true;

    this._service
      .callPostMethod("/api/login", this.loginForm.value)
      .subscribe((data: any) => {
        if (data && data.token) {
          this._storageService.setToken(data.token);
          window.open("dashboard/admin", "_self");
          // const user = this._storageService.getDecodeToken();
          // if (!user.firstname || !user.lastname) {
          //   // this._router.navigate(["wizard"]);
          //   window.open("wizard", "_self");
          // } else {
          //   // this._router.navigate(["dashboard/admin"]);
          //   window.open("dashboard/admin", "_self");
          // }
          this.loading = false;
        } else {
          this.error = data.type;
          this.loading = false;
        }
      });
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  async ngOnInit() {
    this.loginForm = this._formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this._route.snapshot.queryParams["returnUrl"] || "/";

    // Subscribe to config changes
    this._coreConfigService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((config) => {
        this.coreConfig = config;
      });

    this._translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.lang = event.lang;
    });

    this.authSubscription = this.authService.authState.subscribe((user) => {
      this._service
        .callPostMethod("api/google/auth", { idToken: user.idToken })
        .subscribe((data) => {
          this._router.navigate([data]);
        });
    });

    this.lang = this._storageService.getSelectedLanguage();

    await this.msalService.instance.initialize();
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
    this.authSubscription.unsubscribe();
  }

  isLoggedIn(): boolean {
    return this.msalService.instance.getActiveAccount() != null;
  }

  loginWithMicrosoft() {
    this.msalService
      .loginPopup()
      .subscribe((response: AuthenticationResult) => {
        console.log(response);
        if (response && response.account) {
          this._service
            .callPostMethod("api/microsoft/findOrCreateUserViaMicrosoft", {
              email: response.account.username,
            })
            .subscribe((route) => {
              this._router.navigate([route]);
            });
        }
      });
  }

  googleSignin(googleWrapper: any) {
    googleWrapper.click();
  }
}
