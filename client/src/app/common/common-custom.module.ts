import { NgModule } from "@angular/core";
import { LoaderComponent } from "./loader/loader.component";
import { Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { PaymentProcessingComponent } from './payment-processing/payment-processing.component';

const appRoutes: Routes = [];

@NgModule({
  declarations: [LoaderComponent, PaymentProcessingComponent],
  imports: [CommonModule],
  providers: [],
  bootstrap: [],
  exports: [LoaderComponent],
})
export class CommonCustomModule {}
