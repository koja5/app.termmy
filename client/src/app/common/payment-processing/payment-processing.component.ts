import { Component, Input, ViewChild } from "@angular/core";
import { Appearance, StripeElementsOptions } from "@stripe/stripe-js";
import { StripePaymentElementComponent, injectStripe } from "ngx-stripe";
import { environment } from "environments/environment";
import { CallApiService } from "app/services/call-api.service";
import { HelpService } from "app/services/help.service";

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

  public elementsOptions: StripeElementsOptions = {
    locale: "en",
  };
  readonly stripe = injectStripe(environment.STRIPE_KEY, {
    stripeAccount: "acct_1OhSOVPwkZNY6HKT",
  });
  appearance: Appearance = {
    theme: "stripe",
    labels: "floating",
    variables: {
      colorPrimary: "#673ab7",
    },
  };
  public paying = false;
  public accept = false;

  constructor(
    private _service: CallApiService,
    public _helpService: HelpService
  ) {}

  ngOnInit() {
    this.createPaymentIntent();
  }

  createPaymentIntent() {
    this._service
      .callPostMethod("api/payment/stripe/createPaymentIntent", {
        amount: this.amount,
      })
      .subscribe((data) => {
        this.elementsOptions.clientSecret = data as string;
      });
  }

  pay() {
    this.stripe
      .confirmPayment({
        elements: this.paymentElement.elements,
        confirmParams: {
          payment_method_data: {
            billing_details: {
              name: "Aleksandar Kojic",
              email: "kojaaa95@gmail.com",
              phone: "0694505544",
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
            // this.submitted = false;
            // this.makeAppointment();
          }
        },
        error: (err) => {
          this.paying = false;
          // this.submitted = false;
        },
      });
  }
}
