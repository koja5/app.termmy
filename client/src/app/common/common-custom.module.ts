import { NgModule } from "@angular/core";
import { LoaderComponent } from "./loader/loader.component";
import { Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { PaymentProcessingComponent } from "./payment-processing/payment-processing.component";
import { NgxStripeModule } from "ngx-stripe";
import { environment } from "environments/environment";
import { TranslateModule } from "@ngx-translate/core";
import { FormsModule } from "@angular/forms";

const appRoutes: Routes = [];

@NgModule({
  declarations: [LoaderComponent, PaymentProcessingComponent],
  imports: [
    CommonModule,
    TranslateModule,
    NgxStripeModule.forRoot(environment.STRIPE_KEY),
    FormsModule
  ],
  providers: [],
  bootstrap: [],
  exports: [LoaderComponent, PaymentProcessingComponent],
})
export class CommonCustomModule {}
