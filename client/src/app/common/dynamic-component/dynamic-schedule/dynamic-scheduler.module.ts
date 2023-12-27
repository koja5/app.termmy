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

@NgModule({
  declarations: [DynamicScheduleComponent],
  imports: [CommonModule, ScheduleModule, DynamicModule],
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
