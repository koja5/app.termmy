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
import { AdminSettingsComponent } from "./admin-settings/admin-settings.component";
import { SettingsComponent } from "./settings/settings.component";
import { BuyMoreSmsComponent } from "./payments-component/buy-more-sms/buy-more-sms.component";
import {
  DragAndDropService,
  MonthAgendaService,
  ResizeService,
  ScheduleModule,
  TimelineMonthService,
  TimelineViewsService,
} from "@syncfusion/ej2-angular-schedule";
import {
  DayService,
  WeekService,
  WorkWeekService,
  MonthService,
  AgendaService,
} from "@syncfusion/ej2-angular-schedule";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { CommonCustomModule } from "app/common/common-custom.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgSelectModule } from "@ng-select/ng-select";
import { DateTimePickerModule } from "@syncfusion/ej2-angular-calendars";
import { LicenseStatusComponent } from "./common/license-status/license-status.component";
import { RecommendedComponent } from "./settings/recommended/recommended.component";
import { HttpLoaderFactory } from "app/services/httpLoaderFactory";
import { HttpClient } from "@angular/common/http";

type PathMatch = "full" | "prefix" | undefined;

const routes = [
  {
    path: "admin-settings",
    component: AdminSettingsComponent,
    loadChildren: () =>
      import("./admin-settings/admin-settings.module").then(
        (m) => m.AdminSettingsModule
      ),
  },
  {
    path: "settings",
    component: SettingsComponent,
    loadChildren: () =>
      import("./settings/settings.module").then((m) => m.SettingsModule),
  },
  {
    path: "",
    redirectTo: "my-calendar",
    pathMatch: "full" as PathMatch,
  },
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
  {
    path: "recommended",
    canActivate: [AdminGuardService],
    component: RecommendedComponent,
  },
  {
    path: "payment",
    loadChildren: () =>
      import("./payments-component/payment.module").then(
        (m) => m.PaymentModule
      ),
  },
];

@NgModule({
  declarations: [
    LocationsComponent,
    ServicesComponent,
    CalendarComponent,
    EmployeesComponent,
    LocationViewComponent,
    ClientsComponent,
    AdminSettingsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UserModule,
    DynamicModule,
    DynamicSchedulerModule,
    ScheduleModule,
    TranslateModule.forChild({
      defaultLanguage: "de",
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      extend: true,
    }),
    CommonCustomModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    DateTimePickerModule
  ],
  providers: [
    DayService,
    WeekService,
    WorkWeekService,
    MonthService,
    AgendaService,
    MonthAgendaService,
    TimelineViewsService,
    TimelineMonthService,
    ResizeService,
    DragAndDropService,
  ],
  exports: [RouterModule, DynamicSchedulerModule],
})
export class AdminModule {}
