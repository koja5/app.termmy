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
import { CalendarComponent } from "./calendar/calendar.component";
import { DynamicSchedulerModule } from "app/common/dynamic-component/dynamic-schedule/dynamic-scheduler.module";
import { EmployeesComponent } from "./employees/employees.component";
import { LocationViewComponent } from "./locations/location-view/location-view.component";
import { ClientsComponent } from "./clients/clients.component";

const routes = [
  {
    path: "my-locations",
    canActivate: [AdminGuardService],
    component: LocationsComponent,
  },
  {
    path: "location-view/:id",
    canActivate: [AdminGuardService],
    component: LocationViewComponent,
    loadChildren: () =>
      import("./locations/location-view/location-view.module").then(
        (m) => m.LocationViewModule
      ),
  },
  {
    path: "my-services",
    canActivate: [AdminGuardService],
    component: ServicesComponent,
  },
  {
    path: "my-calendar",
    canActivate: [AdminGuardService],
    component: CalendarComponent,
  },
  {
    path: "my-employees",
    canActivate: [AdminGuardService],
    component: EmployeesComponent,
  },
  {
    path: "my-clients",
    canActivate: [AdminGuardService],
    component: ClientsComponent,
  },
];

@NgModule({
  declarations: [
    LocationsComponent,
    ServicesComponent,
    CalendarComponent,
    EmployeesComponent,
    LocationViewComponent,
    ClientsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UserModule,
    DynamicModule,
    DynamicSchedulerModule,
  ],
  providers: [],
  exports: [RouterModule, DynamicSchedulerModule],
})
export class AdminModule {}
