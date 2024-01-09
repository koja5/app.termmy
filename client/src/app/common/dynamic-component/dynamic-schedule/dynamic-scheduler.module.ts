import { NgModule } from "@angular/core";
import {
  MonthAgendaService,
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
import { DynamicScheduleComponent } from "./dynamic-schedule.component";
import { CommonModule } from "@angular/common";
import { DynamicModule } from "../dynamic.module";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgSelectModule } from "@ng-select/ng-select";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [DynamicScheduleComponent],
  imports: [
    CommonModule,
    NgbModule,
    NgSelectModule,
    ScheduleModule,
    DynamicModule,
    FormsModule,
    TranslateModule,
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
  ],
  exports: [DynamicScheduleComponent],
  entryComponents: [DynamicScheduleComponent],
})
export class DynamicSchedulerModule {}
