import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgSelectModule } from "@ng-select/ng-select";

import { CoreCommonModule } from "@core/common.module";
import { ContentHeaderModule } from "app/layout/components/content-header/content-header.module";

import { AuthenticationModule } from "../authentification/authentication.module";
import { MiscellaneousModule } from "./pages/miscellaneous/miscellaneous.module";
import { RouterModule } from "@angular/router";
import { SuperadminModule } from "./pages/superadmin/superadmin.module";
import { AccountSettingsComponent } from "./common-pages/account-settings/account-settings.component";
import { TranslateModule } from "@ngx-translate/core";
import { SettingsComponent } from "./pages/admin/settings/settings.component";

const routes = [
  {
    path: "settings",
    component: SettingsComponent,
    loadChildren: () =>
      import("./pages/admin/settings/settings.module").then(
        (m) => m.SettingsModule
      ),
  },
  {
    path: "account-settings",
    component: AccountSettingsComponent,
    loadChildren: () =>
      import("./common-pages/account-settings/account-settings.module").then(
        (m) => m.AccountSettingsModule
      ),
  },
  {
    path: "superadmin",
    loadChildren: () =>
      import("./pages/superadmin/superadmin.module").then(
        (m) => m.SuperadminModule
      ),
  },
  {
    path: "admin",
    loadChildren: () =>
      import("./pages/admin/admin.module").then((m) => m.AdminModule),
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreCommonModule,
    ContentHeaderModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    AuthenticationModule,
    MiscellaneousModule,
    RouterModule.forChild(routes),
    SuperadminModule,
    TranslateModule,
  ],

  providers: [],
  exports: [RouterModule],
})
export class DashboardModule {}
