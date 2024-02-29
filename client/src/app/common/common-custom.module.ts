import { NgModule } from "@angular/core";
import { LoaderComponent } from "./loader/loader.component";
import { Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { PaymentProcessingComponent } from "./payment-processing/payment-processing.component";
import { NgxStripeModule } from "ngx-stripe";
import { environment } from "environments/environment";
import { TranslateModule } from "@ngx-translate/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoaderSmallComponent } from './loader-small/loader-small.component';

const appRoutes: Routes = [];

@NgModule({
  declarations: [LoaderComponent, PaymentProcessingComponent, LoaderSmallComponent],
  imports: [
    CommonModule,
    TranslateModule,
    NgxStripeModule.forRoot(environment.STRIPE_KEY),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  exports: [LoaderComponent, PaymentProcessingComponent],
})
export class CommonCustomModule {}
