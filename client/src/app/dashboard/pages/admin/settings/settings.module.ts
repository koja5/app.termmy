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
import { BrowserModule } from "@angular/platform-browser";
import { ColorPickerModule } from "@syncfusion/ej2-angular-inputs";

const routes = [
  { path: "worktime", component: WorktimeComponent },
  { path: "connections", component: ConnectionsComponent },
];

@NgModule({
  declarations: [SettingsComponent, WorktimeComponent, ConnectionsComponent],
  imports: [
    CommonModule,
    DatePickerI18nModule,
    TimePickerI18nModule,
    RouterModule.forChild(routes),
    TranslateModule,
    DynamicModule,
    ColorPickerModule,
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
