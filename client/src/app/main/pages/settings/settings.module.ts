import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { WorktimeComponent } from "./worktime/worktime.component";
import { FormsModule } from "app/common/forms/forms.module";
import { FormElementsModule } from "app/common/forms/form-elements/form-elements.module";
import { DateTimePickerModule } from "app/common/forms/form-elements/date-time-picker/date-time-picker.module";
import { DatePickerI18nModule } from "app/common/forms/form-elements/date-time-picker/date-picker-i18n/date-picker-i18n.module";

const routes = [{ path: "worktime", component: WorktimeComponent }];

@NgModule({
  declarations: [WorktimeComponent],
  imports: [RouterModule.forChild(routes), DatePickerI18nModule],
  providers: [],
  exports: [RouterModule, DatePickerI18nModule],
})
export class SettingsModule {}
