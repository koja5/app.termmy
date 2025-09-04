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
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SmsMarketingComponent } from "./sms-marketing/sms-marketing.component";
import { EmailMarketingComponent } from "./email-marketing/email-marketing.component";

type PathMatch = "full" | "prefix" | undefined;

const routes = [
  {
    path: "",
    redirectTo: "sms-marketing",
    pathMatch: "full" as PathMatch,
  },
  {
    path: "sms-marketing",
    component: SmsMarketingComponent,
  },
  {
    path: "email-marketing",
    component: EmailMarketingComponent,
  },
];

@NgModule({
  declarations: [SmsMarketingComponent, EmailMarketingComponent],
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
  exports: [RouterModule],
})
export class MarketingModule {}
