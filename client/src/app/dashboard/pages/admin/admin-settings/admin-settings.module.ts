import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DynamicModule } from "app/common/dynamic-component/dynamic.module";
import { OnlinePaymentComponent } from "./online-payment/online-payment.component";
import { TranslateModule } from "@ngx-translate/core";
import { BookingSettingsComponent } from "./booking-settings/booking-settings.component";

const routes = [
  {
    path: "online-payment",
    component: OnlinePaymentComponent,
  },
  {
    path: "booking-settings",
    component: BookingSettingsComponent,
  },
];

@NgModule({
  declarations: [OnlinePaymentComponent, BookingSettingsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), TranslateModule, DynamicModule],
  providers: [],
  exports: [RouterModule, DynamicModule],
})
export class AdminSettingsModule {}
