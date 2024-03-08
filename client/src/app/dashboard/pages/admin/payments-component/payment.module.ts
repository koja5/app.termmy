import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { BuyMoreSmsComponent } from "./buy-more-sms/buy-more-sms.component";
import { TranslateModule } from "@ngx-translate/core";
import { CommonCustomModule } from "app/common/common-custom.module";
import { FormsModule } from "@angular/forms";
import { DynamicModule } from "app/common/dynamic-component/dynamic.module";
import { LicensePackagesComponent } from "./license-packages/license-packages.component";
import { AdminCommonModule } from "../common/admin-common.module";

const routes = [
  {
    path: "buy-more-sms",
    component: BuyMoreSmsComponent,
  },
  {
    path: "license-packages",
    component: LicensePackagesComponent,
  },
];

@NgModule({
  declarations: [BuyMoreSmsComponent, LicensePackagesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule,
    CommonCustomModule,
    DynamicModule,
    AdminCommonModule,
    FormsModule
  ],
  providers: [],
  exports: [RouterModule],
})
export class PaymentModule {}
