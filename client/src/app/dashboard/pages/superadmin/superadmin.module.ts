import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { AllUsersComponent } from "./all-users/all-users.component";
import { UserModule } from "app/common/dynamic-component/user/user.module";
import { SuperadminGuardService } from "app/services/guards/superadmin-guard.service";
import { DynamicModule } from "app/common/dynamic-component/dynamic.module";
import { SmsPackagesComponent } from "./sms-packages/sms-packages.component";
import { GatewayCountryPrefixComponent } from "./gateway-country-prefix/gateway-country-prefix.component";
import { LicensesComponent } from "./licenses/licenses.component";
import { AllVoucherPartnersComponent } from "./all-voucher-partners/all-voucher-partners.component";

const routes = [
  {
    path: "all-users",
    canActivate: [SuperadminGuardService],
    component: AllUsersComponent,
  },
  {
    path: "sms-packages",
    canActivate: [SuperadminGuardService],
    component: SmsPackagesComponent,
  },
  {
    path: "gateway-country-prefix",
    canActivate: [SuperadminGuardService],
    component: GatewayCountryPrefixComponent,
  },
  {
    path: "licenses",
    canActivate: [SuperadminGuardService],
    component: LicensesComponent,
  },
  {
    path: "all-voucher-partners",
    canActivate: [SuperadminGuardService],
    component: AllVoucherPartnersComponent,
  },
];

@NgModule({
  declarations: [
    AllUsersComponent,
    SmsPackagesComponent,
    GatewayCountryPrefixComponent,
    LicensesComponent,
    AllVoucherPartnersComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UserModule,
    DynamicModule,
  ],
  providers: [],
  exports: [RouterModule],
})
export class SuperadminModule {}
