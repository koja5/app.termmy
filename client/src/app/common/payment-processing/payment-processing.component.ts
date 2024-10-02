import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from "@angular/core";
import { Appearance, StripeElementsOptions } from "@stripe/stripe-js";
import { StripePaymentElementComponent, injectStripe } from "ngx-stripe";
import { environment } from "environments/environment";
import { CallApiService } from "app/services/call-api.service";
import { HelpService } from "app/services/help.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { StorageService } from "app/services/storage.service";
import { LangChangeEvent, TranslateService } from "@ngx-translate/core";
import { ToastrComponent } from "../toastr/toastr.component";
import { VoucherPartnerModel } from "app/models/voucher-partner.model";
import { VoucherUsedModel } from "app/models/voucher-used.model";
// import {
//   CountryISO,
//   PhoneNumberFormat,
//   SearchCountryField,
// } from "ngx-intl-tel-input";

@Component({
  selector: "app-payment-processing",
  templateUrl: "./payment-processing.component.html",
  styleUrls: ["./payment-processing.component.scss"],
})
export class PaymentProcessingComponent {
  @ViewChild(StripePaymentElementComponent)
  paymentElement!: StripePaymentElementComponent;
  @Input() amount: number;
  @Input() buttonText!: string;
  @Input() stripeAccount!: string;
  @Output() executeMethodEmitter = new EventEmitter<null>();

  public elementsOptions: StripeElementsOptions = {
    locale: "en",
  };
  public stripe = this.stripeAccount
    ? injectStripe(environment.STRIPE_KEY, {
        stripeAccount: this.stripeAccount,
      })
    : injectStripe(environment.STRIPE_KEY);
  appearance: Appearance = {
    theme: "stripe",
    labels: "floating",
    variables: {
      colorPrimary: "#673ab7",
    },
  };
  public paying = false;
  public accept = false;
  public clientData = new FormGroup({
    firstname: new FormControl("", Validators.required),
    lastname: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    telephone: new FormControl("", [Validators.required]),
  });
  public voucherCode: string;
  public appliedCodeMessage: any = {
    disabled: false,
  };
  public voucher: VoucherPartnerModel;
  public loader = false;
  public paymentId: string;
  public originalAmount: number;
  public termmyCoinCount: number = 0;
  public convertedTermmyCoin: number = 0;
  public usedTermmyCoin = false;

  constructor(
    private _service: CallApiService,
    public _helpService: HelpService,
    private _storageService: StorageService,
    private _translate: TranslateService,
    private _toastr: ToastrComponent
  ) {}

  ngOnInit() {
    this.setPaymentProcessingLanguage();
    this.getTermmyCoin();
  }

  ngOnChanges(event: Event) {
    this.getProfileInfo();
    this.createPaymentIntent();
    this.originalAmount = this.amount;
  }

  ngOnDestroy() {
    this._service
      .callPostMethod("api/payment/stripe/cancelPaymentIntent", {
        paymentId: this.paymentId,
      })
      .subscribe((data: any) => {});
  }

  setPaymentProcessingLanguage() {
    // set current language
    if (this._storageService.getSelectedLanguage(true) === "sr-Latn") {
      this.elementsOptions.locale = "hr";
    } else {
      this.elementsOptions.locale =
        this._storageService.getSelectedLanguage(true);
    }

    // detect change language
    this._translate.onLangChange.subscribe((event: LangChangeEvent) => {
      if (event.lang === "sr-Latn") {
        this.elementsOptions.locale = "hr";
      } else {
        this.elementsOptions.locale =
          this._storageService.getSelectedLanguage(true);
      }
    });
  }

  getProfileInfo() {
    this._service
      .callGetMethod("/api/getProfileInfo", "")
      .subscribe((data: any) => {
        if (data.length) {
          const clientData = data[0];
          this.clientData.setValue({
            firstname: clientData.firstname,
            lastname: clientData.lastname,
            email: clientData.email,
            telephone: null,
          });
        }
      });
  }

  getTermmyCoin() {
    this._service
      .callGetMethod("/api/getTermmyCoin")
      .subscribe((data: number) => {
        this.termmyCoinCount = data;
        this.convertedTermmyCoin = data * environment.TERMMY_COIN_PER_EURO;
      });
  }

  createPaymentIntent() {
    this.loader = true;
    this._service
      .callPostMethod("api/payment/stripe/createPaymentIntent", {
        amount: Number(this.amount),
        stripeAccount: this.stripeAccount,
      })
      .subscribe((data: any) => {
        this.elementsOptions.clientSecret = data.client_secret as string;
        this.paymentId = data.id;
        this.loader = false;
      });
  }

  updatePaymentIntent() {
    this._service
      .callPostMethod("api/payment/stripe/updatePaymentIntent", {
        paymentId: this.paymentId,
        amount: Number(this.amount),
        stripeAccount: this.stripeAccount,
      })
      .subscribe((data) => {
        this.elementsOptions.clientSecret = data as string;
      });
  }

  pay() {
    // if (this.paying || this.clientData.invalid) return;
    this.paying = true;
    this.stripe
      .confirmPayment({
        elements: this.paymentElement.elements,
        confirmParams: {
          payment_method_data: {
            billing_details: {
              name:
                this.clientData.value.firstname +
                " " +
                this.clientData.value.lastname,
              email: this.clientData.value.email,
              phone: this.clientData.value.telephone,
            },
          },
        },
        redirect: "if_required",
      })
      .subscribe({
        next: (result) => {
          console.log(result);
          if (result.error || !this.accept) {
            this._toastr.showErrorCustom(
              this._translate.instant("paymentProcessing.errorPayment")
            );
            this.paying = false;
          } else if (result.paymentIntent.status === "succeeded") {
            this.paying = false;
            this.usingVoucherCode();
            this.resetTermmyCoins();
            this.executeMethodEmitter.emit();
            this.voucherCode = null;
            this.amount = this.originalAmount;
            this.appliedCodeMessage.disabled = false;
            this.createPaymentIntent();
          }
        },
        error: (err) => {
          this.paying = false;
          // this.submitted = false;
        },
      });
  }

  usingVoucherCode() {
    if (this.voucher) {
      const body: VoucherUsedModel = {
        id_voucher: this.voucher.id,
        id_partner: this.voucher.id_user,
        amount: this.amount,
      };
      this._service
        .callPostMethod("/api/setVoucherUsed", body)
        .subscribe((data) => {});
    }
  }

  checkVoucherCode() {
    if (this.voucherCode) {
      this._service
        .callGetMethod("/api/checkVoucherCode", this.voucherCode)
        .subscribe((data: VoucherPartnerModel) => {
          if (data) {
            this.voucher = data;
            this.amount = Number(
              ((this.amount * (100 - data.discount)) / 100).toFixed(2)
            );
            this.appliedCodeMessage = {
              valid: true,
              disabled: true,
              message: this._translate
                .instant("paymentProcessing.voucherAppliedCode")
                .replace("#discount", data.discount)
                .replace("#discountAmount", this.amount),
            };
            this.updatePaymentIntent();
          } else {
            this.appliedCodeMessage = {
              valid: false,
              disabled: false,
              message: this._translate.instant(
                "paymentProcessing.voucherNotValid"
              ),
            };
          }
        });
    }
  }

  useTermmyCoins() {
    this.amount -= this.convertedTermmyCoin;
    this.appliedCodeMessage = {
      valid: true,
      disabled: false,
      message: this._translate
        .instant("paymentProcessing.usingTermmyCoinMessage")
        .replace("#discount", this.convertedTermmyCoin.toFixed(2))
        .replace("#discountAmount", this.amount),
    };
    this.usedTermmyCoin = true;
    this.updatePaymentIntent();
  }

  resetTermmyCoins() {
    if (this.usedTermmyCoin) {
      this.termmyCoinCount = 0;
      this.convertedTermmyCoin = 0;
      this._service.callPostMethod("api/resetTermmyCoin").subscribe((data) => {
        this.usedTermmyCoin = false;
      });
    }
  }
}
