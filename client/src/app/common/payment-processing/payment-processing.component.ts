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
  readonly stripe = this.stripeAccount
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
  // separateDialCode = false;
  // SearchCountryField = SearchCountryField;
  // CountryISO = CountryISO;
  // PhoneNumberFormat = PhoneNumberFormat;
  // preferredCountries: CountryISO[] = [
  //   CountryISO.Austria,
  //   CountryISO.UnitedStates,
  //   CountryISO.UnitedKingdom,
  // ];

  constructor(
    private _service: CallApiService,
    public _helpService: HelpService
  ) {}

  ngOnChanges(event: Event) {
    this.getProfileInfo();
    this.createPaymentIntent();
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

  createPaymentIntent() {
    this._service
      .callPostMethod("api/payment/stripe/createPaymentIntent", {
        amount: this.amount,
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
          if (result.error || !this.accept) {
            this.paying = false;
          } else if (result.paymentIntent.status === "succeeded") {
            this.paying = false;
            // this.makeAppointment();
            this.executeMethodEmitter.emit();
          }
        },
        error: (err) => {
          this.paying = false;
          // this.submitted = false;
        },
      });
  }
}
