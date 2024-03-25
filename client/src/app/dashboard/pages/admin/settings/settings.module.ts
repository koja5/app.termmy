import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { WorktimeComponent } from "./worktime/worktime.component";
import { DatePickerI18nModule } from "app/common/forms/form-elements/date-time-picker/date-picker-i18n/date-picker-i18n.module";
import { CommonModule } from "@angular/common";
import { TimePickerI18nModule } from "app/common/forms/form-elements/date-time-picker/time-picker-i18n/time-picker-i18n.module";
import { ToastrComponent } from "app/common/toastr/toastr.component";
import { TranslateModule } from "@ngx-translate/core";
import { ConnectionsComponent } from "./connections/connections.component";
import { DynamicModule } from "app/common/dynamic-component/dynamic.module";
import { SettingsComponent } from "./settings.component";
import { ColorPickerModule } from "@syncfusion/ej2-angular-inputs";
import { CommonCustomModule } from "app/common/common-custom.module";
import { RecommendedComponent } from "./recommended/recommended.component";
import { PersonalizeComponent } from "./personalize/personalize.component";
import { CoreThemeCustomizerModule } from "@core/components/theme-customizer/theme-customizer.module";
import { OnlinePaymentComponent } from "../admin-settings/online-payment/online-payment.component";
import { BookingSettingsComponent } from "../admin-settings/booking-settings/booking-settings.component";
import { RemindersComponent } from "../admin-settings/reminders/reminders.component";
import { LicenseComponent } from "../admin-settings/license/license.component";
import { HolidaysComponent } from "../admin-settings/holidays/holidays.component";

const routes = [
  { path: "worktime", component: WorktimeComponent },
  { path: "connections", component: ConnectionsComponent },
  { path: "recommended", component: RecommendedComponent },
  { path: "personalize", component: PersonalizeComponent },
  { path: "online-payment", component: OnlinePaymentComponent },
  { path: "booking-settings", component: BookingSettingsComponent },
  { path: "reminders", component: RemindersComponent },
  { path: "license", component: LicenseComponent },
  { path: "holidays", component: HolidaysComponent },
];

@NgModule({
  declarations: [
    SettingsComponent,
    WorktimeComponent,
    ConnectionsComponent,
    RecommendedComponent,
    PersonalizeComponent,
  ],
  imports: [
    CommonModule,
    DatePickerI18nModule,
    TimePickerI18nModule,
    RouterModule.forChild(routes),
    TranslateModule,
    DynamicModule,
    ColorPickerModule,
    CommonCustomModule,
    CoreThemeCustomizerModule,
  ],
  providers: [ToastrComponent],
  exports: [
    RouterModule,
    DatePickerI18nModule,
    TimePickerI18nModule,
    DynamicModule,
  ],
})
export class SettingsModule {}
