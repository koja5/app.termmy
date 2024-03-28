import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CoreCommonModule } from "@core/common.module";
import { TranslateModule } from "@ngx-translate/core";
import { WizardComponent } from "./wizard.component";
import { AccountSettingsModule } from "app/dashboard/common-pages/account-settings/account-settings.module";
import { AdminSettingsModule } from "app/dashboard/pages/admin/admin-settings/admin-settings.module";
import { DynamicModule } from "app/common/dynamic-component/dynamic.module";

// routing
const routes: Routes = [
  {
    path: "",
    component: WizardComponent,
    data: { animation: "misc" },
  },
];

@NgModule({
  declarations: [WizardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CoreCommonModule,
    TranslateModule,
    DynamicModule
  ],
})
export class WizardModule {}
