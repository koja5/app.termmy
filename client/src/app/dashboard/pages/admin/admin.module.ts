import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { UserModule } from "app/common/dynamic-component/user/user.module";
import { SuperadminGuardService } from "app/services/guards/superadmin-guard.service";
import { DynamicModule } from "app/common/dynamic-component/dynamic.module";
import { AllUsersComponent } from "../superadmin/all-users/all-users.component";
import { LocationsComponent } from "./locations/locations.component";
import { AdminGuardService } from "app/services/guards/admin-guard.service";
import { ToastrComponent } from "app/common/toastr/toastr.component";
import { ServicesComponent } from "./services/services.component";

const routes = [
  {
    path: "my-locations",
    canActivate: [AdminGuardService],
    component: LocationsComponent,
  },
  {
    path: "my-services",
    canActivate: [AdminGuardService],
    component: ServicesComponent,
  },
];

@NgModule({
  declarations: [LocationsComponent, ServicesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UserModule,
    DynamicModule,
  ],
  providers: [],
  exports: [RouterModule],
})
export class AdminModule {}
