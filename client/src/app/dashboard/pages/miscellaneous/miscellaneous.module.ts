import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CoreCommonModule } from "@core/common.module";

import { ErrorComponent } from "app/dashboard/pages/miscellaneous/error/error.component";
import { NotAuthorizedComponent } from "./not-authorized/not-authorized.component";
import { MaintenanceComponent } from "./maintenance/maintenance.component";
import { SomethingHappenedComponent } from './something-happened/something-happened.component';
import { TranslateModule } from "@ngx-translate/core";

// routing
const routes: Routes = [
  {
    path: "error",
    component: ErrorComponent,
    data: { animation: "misc" },
  },
  {
    path: "not-authorized",
    component: NotAuthorizedComponent,
    data: { animation: "misc" },
  },
  {
    path: "maintenance",
    component: MaintenanceComponent,
    data: { animation: "misc" },
  },
  {
    path: "error",
    component: ErrorComponent,
    data: { animation: "misc" },
  },
  {
    path: "something-happened",
    component: SomethingHappenedComponent,
    data: { animation: "misc" },
  },
];

@NgModule({
  declarations: [
    ErrorComponent,
    NotAuthorizedComponent,
    MaintenanceComponent,
    ErrorComponent,
    SomethingHappenedComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), CoreCommonModule, TranslateModule],
})
export class MiscellaneousModule {}
