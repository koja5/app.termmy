import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { WorktimeComponent } from "./worktime/worktime.component";
import { DatePickerI18nModule } from "app/common/forms/form-elements/date-time-picker/date-picker-i18n/date-picker-i18n.module";
import { CommonModule } from "@angular/common";
import { TimePickerI18nModule } from "app/common/forms/form-elements/date-time-picker/time-picker-i18n/time-picker-i18n.module";
import { DynamicModule } from "app/common/dynamic-component/dynamic.module";
import { UserModule } from "app/common/dynamic-component/user/user.module";
import { ToastrComponent } from "app/common/toastr/toastr.component";

const routes = [{ path: "worktime", component: WorktimeComponent }];

@NgModule({
  declarations: [WorktimeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DatePickerI18nModule,
    TimePickerI18nModule,
    DynamicModule,
    UserModule,
  ],
  providers: [ToastrComponent],
  exports: [
    RouterModule,
    DatePickerI18nModule,
    TimePickerI18nModule,
    UserModule,
  ],
})
export class SettingsModule {}
