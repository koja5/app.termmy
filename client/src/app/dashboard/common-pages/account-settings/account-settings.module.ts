import { Injectable, NgModule, inject } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  CanDeactivateFn,
  RouterModule,
  RouterStateSnapshot,
} from "@angular/router";
import { DatePickerI18nModule } from "app/common/forms/form-elements/date-time-picker/date-picker-i18n/date-picker-i18n.module";
import { CommonModule } from "@angular/common";
import { TimePickerI18nModule } from "app/common/forms/form-elements/date-time-picker/time-picker-i18n/time-picker-i18n.module";
import { ToastrComponent } from "app/common/toastr/toastr.component";
import { GeneralComponent } from "./general/general.component";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { InformationComponent } from "./information/information.component";
import { AccountSettingsComponent } from "./account-settings.component";
import { DynamicModule } from "app/common/dynamic-component/dynamic.module";
import { AdminCommonModule } from "app/dashboard/pages/admin/common/admin-common.module";
import { CommonCustomModule } from "app/common/common-custom.module";
import { DirtycheckGuard } from "app/services/guards/dirtycheck.guard";

const routes = [
  {
    path: "general",
    component: GeneralComponent,
    canDeactivate: [DirtycheckGuard],
  },
  {
    path: "change-password",
    component: ChangePasswordComponent,
    canDeactivate: [DirtycheckGuard],
  },
  {
    path: "information",
    component: InformationComponent,
    canDeactivate: [DirtycheckGuard],
  },
];

@NgModule({
  declarations: [
    GeneralComponent,
    ChangePasswordComponent,
    InformationComponent,
    AccountSettingsComponent,
  ],
  imports: [
    CommonModule,
    DatePickerI18nModule,
    TimePickerI18nModule,
    RouterModule.forChild(routes),
    DynamicModule,
    AdminCommonModule,
    CommonCustomModule,
  ],
  providers: [ToastrComponent],
  exports: [
    GeneralComponent,
    RouterModule,
    DatePickerI18nModule,
    TimePickerI18nModule,
    DynamicModule,
  ],
})
export class AccountSettingsModule {}
