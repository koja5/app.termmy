import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { UserModule } from "app/common/dynamic-component/user/user.module";
import { DynamicModule } from "app/common/dynamic-component/dynamic.module";
import { DynamicSchedulerModule } from "app/common/dynamic-component/dynamic-schedule/dynamic-scheduler.module";
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
import { HttpLoaderFactory } from "app/services/httpLoaderFactory";
import { HttpClient } from "@angular/common/http";
import { CoreSidebarModule } from "@core/components";
import { DirtycheckGuard } from "app/services/guards/dirtycheck.guard";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CalendarComponent } from "../admin/calendar/calendar.component";
import { ClientsComponent } from "../admin/clients/clients.component";
import { EmployeeGuardService } from "app/services/guards/employee-guard.service";
import { SettingsComponent } from "./settings/settings.component";

type PathMatch = "full" | "prefix" | undefined;

const routes = [
  {
    path: "",
    redirectTo: "my-calendar",
    pathMatch: "full" as PathMatch,
  },
  {
    path: "my-calendar",
    canActivate: [EmployeeGuardService],
    component: CalendarComponent,
  },
  {
    path: "my-clients",
    canActivate: [EmployeeGuardService],
    canDeactivate: [DirtycheckGuard],
    component: ClientsComponent,
  },
  {
    path: "settings",
    component: SettingsComponent,
    loadChildren: () =>
      import("./settings/settings.module").then((m) => m.SettingsModule),
  },
];

@NgModule({
  declarations: [],
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
    DateTimePickerModule,
    CoreSidebarModule,
    NgbModule,
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
export class EmployeeModule {}
