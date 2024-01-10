import { Component, Input, ViewChild, ViewEncapsulation } from "@angular/core";
import { DynamicFormsComponent } from "../dynamic-forms/dynamic-forms.component";
import { ConfigurationService } from "app/services/configuration.service";
import { CallApiService } from "app/services/call-api.service";
import { ToastrComponent } from "app/common/toastr/toastr.component";
import {
  EventRenderedArgs,
  EventSettingsModel,
  ScheduleComponent,
} from "@syncfusion/ej2-angular-schedule";
// https://stackblitz.com/edit/angular-schedule-different-work-hours-u4cpe8?file=app.component.ts
// https://www.syncfusion.com/forums/169264/setting-different-work-hours-on-different-days
@Component({
  selector: "app-dynamic-schedule",
  templateUrl: "./dynamic-schedule.component.html",
  styleUrls: ["./dynamic-schedule.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class DynamicScheduleComponent {
  @Input() path!: string;
  @Input() file!: string;
  @ViewChild(DynamicFormsComponent) form!: DynamicFormsComponent;
  @ViewChild("calendar") calendar: ScheduleComponent;

  //CALENDAR VARIABLES
  public resourceDataSource: Object[] = [
    {
      text: "Will Smith",
      id: 1,
      color: "#ea7a57",
      startHour: "08:00",
      endHour: "15:00",
    },
    {
      text: "Alice",
      id: 2,
      color: "rgb(53, 124, 210)",
      startHour: "08:00",
      endHour: "17:00",
    },
    {
      text: "Robson",
      id: 3,
      color: "#7fa900",
      startHour: "08:00",
      endHour: "16:00",
    },
  ];

  public workHours1: any = [
    { startHour: "07:00", endHour: "16:00" }, // for Sunday
    { startHour: "06:00", endHour: "17:00", groupIndex: 0 }, // for Monday
    { startHour: "05:00", endHour: "18:00", groupIndex: 1 }, // for Tuesday
    { startHour: "06:30", endHour: "19:00", groupIndex: 2 }, // for Wednesday
    { startHour: "05:30", endHour: "20:00", groupIndex: 0 }, // for Thursday
    { startHour: "10:00", endHour: "21:00", groupIndex: 1 }, // for Friday
    { startHour: "13:00", endHour: "22:00" }, // for Saturday
  ];

  //END CALENDAR VARIABLES

  public config: any;
  public allLocations: any;
  public selectLocation: any;
  public allEmployees: any;
  public selectEmployees: any;

  constructor(
    private _configurationService: ConfigurationService,
    private _service: CallApiService,
    private _toastr: ToastrComponent
  ) {}

  ngOnInit() {
    this._configurationService
      .getConfiguration(this.path, this.file)
      .subscribe((data) => {
        this.config = data;
        this.initialize();
      });
  }

  initialize() {
    this.getTerminesFromGoogleCalendar();
    this.getAdminLocations();
    this.getAdminEmployees();
  }

  getTerminesFromGoogleCalendar() {
    this._service
      .callGetMethod("/api/google/getTermines", "")
      .subscribe((data: any) => {
        if (data) {
          this.calendar.eventSettings.dataSource =
            this.packTerminesFromGoogleCalendar(data.data.items);
        }
      });
  }

  packTerminesFromGoogleCalendar(termines) {
    let prepactedTermines = [];
    for (let i = 0; i < termines.length; i++) {
      prepactedTermines.push({
        Subject: termines[i].summary ? termines[i].summary : "",
        StartTime: new Date(
          termines[i].start.dateTime
            ? termines[i].start.dateTime
            : termines[i].start.date
        ),
        EndTime: new Date(
          termines[i].end.dateTime
            ? termines[i].end.dateTime
            : termines[i].end.date
        ),
        Description: termines[i].description,
      });
    }
    return prepactedTermines;
  }

  getAdminLocations() {
    if (this.config.filters.locations) {
      this._service
        .callApi(null, this.config.filters.locations.request)
        .subscribe((data) => {
          this.allLocations = data;
        });
    }
  }

  getAdminEmployees() {
    if (this.config.filters.employees) {
      this._service
        .callApi(null, this.config.filters.employees.request)
        .subscribe((data) => {
          this.allEmployees = data;
        });
    }
  }

  submitEmitter(event: any) {}

  onActionBegin(event: any) {
    if (this.form) {
      if (this.form.form.valid) {
        this._service
          .callApi(this.config.editSettingsRequest.add, {
            body: this.form.form.value,
          })
          .subscribe((data) => {
            console.log(data);
          });

        this.createTermineToGoogleCalendar();
      } else {
        this._toastr.showError();
      }
    }
  }

  onPopupOpen(event: any) {
    if (event && event.data.Description) {
      setTimeout(() => {
        this.setValue(
          this.config.config,
          event.data.Description ? JSON.parse(event.data.Description) : []
        );
      }, 50);
    } else {
      if (event.type === "Editor" && event.data.Id) {
        event.cancel = true;
      }
    }
  }

  createTermineToGoogleCalendar() {
    this._service
      .callPostMethod("/api/google/createTermine", this.form.form.value)
      .subscribe((data) => {
        console.log(data);
      });
  }

  onChangeData(event) {
    console.log(event);
  }

  setValue(fields: any, values: any) {
    for (let i = 0; i < fields.length; i++) {
      this.form.setValue(
        fields[i]["name"],
        values[fields[i]["name"]],
        fields[i]["type"]
      );
    }
  }

  public onEventRendered(args: EventRenderedArgs): void {
    const categoryColor: string = args.data.CategoryColor as string;
    if (!args.element || !categoryColor) {
      return;
    }
    // if (this.currentView === "Agenda") {
    //   (args.element.firstChild as HTMLElement).style.borderLeftColor =
    //     categoryColor;
    // } else {
    //   args.element.style.backgroundColor = categoryColor;
    // }
  }

  onDataBound(args): void {
    var renderedDates = this.calendar.activeView.getRenderDates();
    this.calendar.resetWorkHours();
    for (var i = 0; i < renderedDates.length; i++) {
      var dayIndex = renderedDates[i].getDay();
      if (dayIndex !== 0 && dayIndex !== 6) {
        this.calendar.setWorkHours(
          [renderedDates[i]],
          this.workHours1[dayIndex].startHour,
          this.workHours1[dayIndex].endHour,
          this.workHours1[dayIndex].groupIndex
        );
      }
    }
  }
}
