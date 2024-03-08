import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DynamicModule } from "app/common/dynamic-component/dynamic.module";
import { OnlinePaymentComponent } from "./online-payment/online-payment.component";
import { TranslateModule } from "@ngx-translate/core";
import { BookingSettingsComponent } from "./booking-settings/booking-settings.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CommonCustomModule } from "app/common/common-custom.module";
import { RemindersComponent } from "./reminders/reminders.component";
import { EmailReminderComponent } from "./reminders/email-reminder/email-reminder.component";
import { SmsReminderComponent } from "./reminders/sms-reminder/sms-reminder.component";
import { SmsReminderCardComponent } from "./reminders/sms-reminder/sms-reminder-card/sms-reminder-card.component";
import { FormsModule } from "@angular/forms";
import { EmailReminderCardComponent } from "./reminders/email-reminder/email-reminder-card/email-reminder-card.component";
import { LicenseComponent } from "./license/license.component";
import { AdminCommonModule } from "../common/admin-common.module";

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
    path: "reminders",
    component: RemindersComponent,
  },
  {
    path: "license",
    component: LicenseComponent,
  },
];

@NgModule({
  declarations: [
    OnlinePaymentComponent,
    BookingSettingsComponent,
    SmsReminderComponent,
    SmsReminderCardComponent,
    RemindersComponent,
    EmailReminderComponent,
    EmailReminderCardComponent,
    LicenseComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule,
    FormsModule,
    DynamicModule,
    NgbModule,
    CommonCustomModule,
    AdminCommonModule,
  ],
  providers: [],
  exports: [RouterModule, DynamicModule],
})
export class AdminSettingsModule {}
