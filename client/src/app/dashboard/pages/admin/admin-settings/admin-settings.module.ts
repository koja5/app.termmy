import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DynamicModule } from "app/common/dynamic-component/dynamic.module";
import { OnlinePaymentComponent } from "./online-payment/online-payment.component";
import { TranslateModule } from "@ngx-translate/core";
import { BookingSettingsComponent } from "./booking-settings/booking-settings.component";
import { SmsReminderComponent } from "./sms-reminder/sms-reminder.component";
import { SmsReminderCardComponent } from "./sms-reminder/sms-reminder-card/sms-reminder-card.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CommonCustomModule } from "app/common/common-custom.module";

const routes = [
  {
    path: "online-payment",
    component: OnlinePaymentComponent,
  },
  {
    path: "booking-settings",
    component: BookingSettingsComponent,
  },
  {
    path: "sms-reminder",
    component: SmsReminderComponent,
  },
];

@NgModule({
  declarations: [
    OnlinePaymentComponent,
    BookingSettingsComponent,
    SmsReminderComponent,
    SmsReminderCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule,
    DynamicModule,
    NgbModule,
    CommonCustomModule
  ],
  providers: [],
  exports: [RouterModule, DynamicModule],
})
export class AdminSettingsModule {}
