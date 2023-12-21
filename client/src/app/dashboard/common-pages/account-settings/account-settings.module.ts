import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DatePickerI18nModule } from "app/common/forms/form-elements/date-time-picker/date-picker-i18n/date-picker-i18n.module";
import { CommonModule } from "@angular/common";
import { TimePickerI18nModule } from "app/common/forms/form-elements/date-time-picker/time-picker-i18n/time-picker-i18n.module";
import { ToastrComponent } from "app/common/toastr/toastr.component";
import { GeneralComponent } from "./general/general.component";
import { DynamicModule } from "app/common/dynamic-component/dynamic.module";
import { ChangePasswordComponent } from "./change-password/change-password.component";

const routes = [
  { path: "general", component: GeneralComponent },
  { path: "change-password", component: ChangePasswordComponent },
];

@NgModule({
  declarations: [GeneralComponent, ChangePasswordComponent],
  imports: [
    CommonModule,
    DatePickerI18nModule,
    TimePickerI18nModule,
    RouterModule.forChild(routes),
    DynamicModule,
  ],
  providers: [ToastrComponent],
  exports: [
    RouterModule,
    DatePickerI18nModule,
    TimePickerI18nModule,
    DynamicModule,
  ],
})
export class AccountSettingsModule {}
