import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DatePickerI18nModule } from "app/common/forms/form-elements/date-time-picker/date-picker-i18n/date-picker-i18n.module";
import { CommonModule } from "@angular/common";
import { TimePickerI18nModule } from "app/common/forms/form-elements/date-time-picker/time-picker-i18n/time-picker-i18n.module";
import { ToastrComponent } from "app/common/toastr/toastr.component";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";

@NgModule({
  declarations: [AccountSettingsComponent],
  imports: [CommonModule, DatePickerI18nModule, TimePickerI18nModule],
  providers: [ToastrComponent],
  exports: [RouterModule, DatePickerI18nModule, TimePickerI18nModule],
})
export class CommonPagesModule {}
