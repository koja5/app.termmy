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

@NgModule({
  declarations: [DynamicScheduleComponent],
  imports: [ScheduleModule],
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
