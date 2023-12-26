import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { WorktimeComponent } from "./worktime/worktime.component";
import { DatePickerI18nModule } from "app/common/forms/form-elements/date-time-picker/date-picker-i18n/date-picker-i18n.module";
import { CommonModule } from "@angular/common";
import { TimePickerI18nModule } from "app/common/forms/form-elements/date-time-picker/time-picker-i18n/time-picker-i18n.module";
import { ToastrComponent } from "app/common/toastr/toastr.component";
import { TranslateModule } from "@ngx-translate/core";

const routes = [{ path: "worktime", component: WorktimeComponent }];

@NgModule({
  declarations: [WorktimeComponent],
  imports: [
    CommonModule,
    DatePickerI18nModule,
    TimePickerI18nModule,
    RouterModule.forChild(routes),
    TranslateModule,
  ],
  providers: [ToastrComponent],
  exports: [RouterModule, DatePickerI18nModule, TimePickerI18nModule],
})
export class SettingsModule {}
