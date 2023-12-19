import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgSelectModule } from "@ng-select/ng-select";

import { CoreCommonModule } from "@core/common.module";
import { ContentHeaderModule } from "app/layout/components/content-header/content-header.module";

import { AuthenticationModule } from "./pages/authentication/authentication.module";
import { MiscellaneousModule } from "./pages/miscellaneous/miscellaneous.module";
import { HomeComponent } from "./sample/home.component";
import { SampleComponent } from "./sample/sample.component";
import { RouterModule } from "@angular/router";

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
  ],

  providers: [],
  exports: [RouterModule],
})
export class DashboardModule {}
