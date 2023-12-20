import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgSelectModule } from "@ng-select/ng-select";

import { CoreCommonModule } from "@core/common.module";
import { ContentHeaderModule } from "app/layout/components/content-header/content-header.module";

import { AuthenticationModule } from "../authentification/authentication.module";
import { MiscellaneousModule } from "./pages/error-pages/miscellaneous/miscellaneous.module";
import { HomeComponent } from "./sample/home.component";
import { SampleComponent } from "./sample/sample.component";
import { RouterModule } from "@angular/router";
import { SettingsComponent } from "./pages/settings/settings.component";
import { SuperadminModule } from "./pages/superadmin/superadmin.module";

const routes = [
  {
    path: "sample",
    component: SampleComponent,
    data: { animation: "sample" },
  },
  {
    path: "home",
    component: HomeComponent,
    data: { animation: "home" },
  },
  {
    path: "settings",
    component: SettingsComponent,
    loadChildren: () =>
      import("./pages/settings/settings.module").then((m) => m.SettingsModule),
  },
  {
    path: "superadmin",
    loadChildren: () =>
      import("./pages/superadmin/superadmin.module").then((m) => m.SuperadminModule),
  },
];

@NgModule({
  declarations: [SettingsComponent],
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
    SuperadminModule
  ],

  providers: [],
  exports: [RouterModule],
})
export class DashboardModule {}
