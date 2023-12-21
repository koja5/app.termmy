import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CoreCommonModule } from "@core/common.module";

import { ErrorComponent } from "app/dashboard/pages/miscellaneous/error/error.component";
import { NotAuthorizedComponent } from "./not-authorized/not-authorized.component";
import { MaintenanceComponent } from "./maintenance/maintenance.component";

// routing
const routes: Routes = [
  {
    path: "miscellaneous/error",
    component: ErrorComponent,
    data: { animation: "misc" },
  },
  {
    path: "miscellaneous/not-authorized",
    component: NotAuthorizedComponent,
    data: { animation: "misc" },
  },
  {
    path: "miscellaneous/maintenance",
    component: MaintenanceComponent,
    data: { animation: "misc" },
  },
  {
    path: "miscellaneous/error",
    component: ErrorComponent,
    data: { animation: "misc" },
  },
];

@NgModule({
  declarations: [
    ErrorComponent,
    NotAuthorizedComponent,
    MaintenanceComponent,
    ErrorComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), CoreCommonModule],
})
export class MiscellaneousModule {}
