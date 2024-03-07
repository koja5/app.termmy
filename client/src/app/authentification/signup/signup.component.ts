import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from "@angular/forms";

import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";

import { CoreConfigService } from "@core/services/config.service";
import { CallApiService } from "app/services/call-api.service";
import { ResponseModel } from "app/models/response-model";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrComponent } from "app/common/toastr/toastr.component";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class SignupComponent implements OnInit {
  // Public
  public coreConfig: any;
  public passwordTextType: boolean;
  public registerForm: UntypedFormGroup;
  public submitted = false;
  public response = new ResponseModel();
  public loading = false;

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
    private _formBuilder: UntypedFormBuilder,
    private _service: CallApiService,
    private _router: Router,
    private _activatedRouter: ActivatedRoute,
    private _toastr: ToastrComponent,
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
    return this.registerForm.controls;
  }

  /**
   * Toggle password
   */
  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

  /**
   * On Submit
   */
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.signUp(this.registerForm.value);
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    this.registerForm = this._formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
      rePassword: ["", Validators.required],
    });

    // Subscribe to config changes
    this._coreConfigService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((config) => {
        this.coreConfig = config;
      });
    this.validateRecommenedBonusLink();
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  //#region

  signUp(data: any) {
    this.response = new ResponseModel();
    this.loading = true;
    if (data.password === data.rePassword) {
      this._service.callPostMethod("/api/signUp", data).subscribe((data) => {
        if (data) {
          this.response.verifyYourMail = true;
          this.loading = false;
          this.createRecommendedBonus();
          setTimeout(() => {
            this._router.navigate(["/auth/login"]);
          }, 6000);
        } else {
          this.loading = false;
          this.response.mailExists = true;
        }
      });
    } else {
      this.loading = false;
      this.response.passwordNotMatch = true;
    }
  }

  validateRecommenedBonusLink() {
    const id = this._activatedRouter.snapshot.queryParams.id;
    if (id) {
      this._service
        .callGetMethod("/api/validateRecommenedBonusLink", id)
        .subscribe((data) => {
          if (!data) {
            this._router.navigate(["/auth/signup"]);
            this._toastr.showErrorCustom(
              this._translate.instant("recommended.wrongRecommendedBonusLink")
            );
          }
        });
    }
  }

  createRecommendedBonus() {
    const id = this._activatedRouter.snapshot.queryParams.id;
    if (id) {
      this._service
        .callPostMethod("/api/createRecommendedBonus", { id: id })
        .subscribe((data) => {});
    }
  }

  //#endregion
}
