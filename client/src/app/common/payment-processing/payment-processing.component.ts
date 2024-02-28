import { Component } from "@angular/core";
import { Appearance, StripeElementsOptions } from "@stripe/stripe-js";
// import { StripePaymentElementComponent, injectStripe } from "ngx-stripe";
import { environment } from "environments/environment";

@Component({
  selector: "app-payment-processing",
  templateUrl: "./payment-processing.component.html",
  styleUrls: ["./payment-processing.component.scss"],
})
export class PaymentProcessingComponent {
  // public elementsOptions: StripeElementsOptions = {
  //   locale: "en",
  // };
  // readonly stripe = injectStripe(environment.STRIPE_KEY, {
  //   stripeAccount: "acct_1OhSOVPwkZNY6HKT",
  // });
  // appearance: Appearance = {
  //   theme: "stripe",
  //   labels: "floating",
  //   variables: {
  //     colorPrimary: "#673ab7",
  //   },
  // };
}
