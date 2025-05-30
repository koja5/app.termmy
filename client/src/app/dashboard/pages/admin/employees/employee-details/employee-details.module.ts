import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DatePickerI18nModule } from "app/common/forms/form-elements/date-time-picker/date-picker-i18n/date-picker-i18n.module";
import { CommonModule } from "@angular/common";
import { TimePickerI18nModule } from "app/common/forms/form-elements/date-time-picker/time-picker-i18n/time-picker-i18n.module";
import { ToastrComponent } from "app/common/toastr/toastr.component";
import { TranslateModule } from "@ngx-translate/core";
import { DynamicModule } from "app/common/dynamic-component/dynamic.module";
import { ColorPickerModule } from "@syncfusion/ej2-angular-inputs";
import { CommonCustomModule } from "app/common/common-custom.module";
import { CoreThemeCustomizerModule } from "@core/components/theme-customizer/theme-customizer.module";
import { DirtycheckGuard } from "app/services/guards/dirtycheck.guard";
import { NgSelectModule } from "@ng-select/ng-select";
import { DatePickerModule } from "@syncfusion/ej2-angular-calendars";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { InfoComponent } from "./info/info.component";
import { EmployeeDetailsComponent } from "./employee-details.component";
import { WorktimeComponent } from "./worktime/worktime.component";

const routes = [
  {
    path: "info/:id",
    component: InfoComponent,
    canDeactivate: [DirtycheckGuard],
  },
  {
    path: "worktime/:id",
    component: WorktimeComponent,
    canDeactivate: [DirtycheckGuard],
  },
];

@NgModule({
  declarations: [EmployeeDetailsComponent, InfoComponent, WorktimeComponent],
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
    NgSelectModule,
    DatePickerModule,
    FormsModule,
    NgbModule,
  ],
  providers: [ToastrComponent],
  exports: [
    RouterModule,
    DatePickerI18nModule,
    TimePickerI18nModule,
    DynamicModule,
  ],
})
export class EmployeeDetailsModule {}
