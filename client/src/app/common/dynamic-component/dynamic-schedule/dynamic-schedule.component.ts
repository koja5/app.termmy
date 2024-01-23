import { Component, Input, ViewChild, ViewEncapsulation } from "@angular/core";
import { DynamicFormsComponent } from "../dynamic-forms/dynamic-forms.component";
import { ConfigurationService } from "app/services/configuration.service";
import { CallApiService } from "app/services/call-api.service";
import { ToastrComponent } from "app/common/toastr/toastr.component";
import {
  EventRenderedArgs,
  EventSettingsModel,
  GroupModel,
  RenderCellEventArgs,
  ScheduleComponent,
} from "@syncfusion/ej2-angular-schedule";
import { StorageService } from "app/services/storage.service";
import { CalendarSettings } from "app/models/calendar-settings";
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
  public resourceDataSource: Object[] = [];

  public group: GroupModel = { byDate: false, resources: ["Doctors"] };

  public workHours1: any = [
    { startHour: "07:00", endHour: "16:00" }, // for Sunday
    { startHour: "06:00", endHour: "17:00", groupIndex: 12 }, // for Monday
    { startHour: "05:00", endHour: "18:00", groupIndex: 1 }, // for Tuesday
    { startHour: "06:30", endHour: "19:00", groupIndex: 2 }, // for Wednesday
    { startHour: "05:30", endHour: "20:00", groupIndex: 0 }, // for Thursday
    { startHour: "10:00", endHour: "21:00", groupIndex: 1 }, // for Friday
    { startHour: "13:00", endHour: "22:00" }, // for Saturday
  ];

  //END CALENDAR VARIABLES

  public config: any;
  public allLocations: any;
  public selectedLocation: any;
  public allEmployees: any;
  public selectedEmployees: any;
  public externalAccounts: any;
  public workTimes: any = {};
  public calendarSettings = new CalendarSettings();
  public calendarRights: any;
  public employeeId: number;
  public loader = false;

  constructor(
    private _configurationService: ConfigurationService,
    private _service: CallApiService,
    private _toastr: ToastrComponent,
    private _storageService: StorageService
  ) {}

  ngOnInit() {
    this.checkExternalAccounts();
    this.getConfigurations();
  }

  initialize() {
    this.checkStorage();
    this.getCalendarRights();
    this.getWorkTimes();
    this.getTermines();
  }

  //#region  Initialize functions

  getConfigurations() {
    this._configurationService
      .getConfiguration(this.path, this.file)
      .subscribe((data) => {
        this.config = data;
        this.initialize();
      });
  }

  getTermines() {
    if (this.externalAccounts.google) {
      this.getTerminesFromGoogleCalendar();
    }
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
    if (this.config.filters.employees && this.calendarSettings.location_id) {
      this.config.filters.employees.body = this.calendarSettings.location_id;
      this._service
        .callServerMethod(
          this.config.filters.employees.request,
          this.calendarSettings.location_id
        )
        .subscribe((data) => {
          this.allEmployees = data;
        });
    }
  }

  checkExternalAccounts() {
    this.externalAccounts = this._storageService.getExternalAccountSettings();
  }

  getCalendarRights() {
    this._service
      .callGetMethod("/api/getCalendarRights", "")
      .subscribe((data: any) => {
        if (data.length) {
          this.calendarSettings.rights = data[0];
        }
        this.checkCalendarRights();
      });
  }

  checkStorage() {
    this.calendarSettings = this._storageService.getCalendarConfig();
  }

  //#endregion

  //#region Google Calendar

  executeActionForGoogleCalendar(event: any) {
    if (event.requestType === "eventRemove") {
      this.deleteTerminForGoogleCalendar(event.data[0].externalId);
    } else if (event.requestType === "eventChange") {
      this.setValue(
        this.config.config,
        typeof event.data.description === "object"
          ? event.data.description
          : JSON.parse(event.data.description)
      );
      if (this.isValidForm()) {
        this.updateTermineForGoogleCalendar(event.data);
      } else {
        this._toastr.showError();
      }
    } else if (event.requestType === "eventCreate") {
      if (this.isValidForm()) {
        this.createTermineForGoogleCalendar();
      } else {
        this._toastr.showError();
      }
    }
  }

  onPopupForGoogleCalendar(event: any) {
    if (event && event.data.description) {
      setTimeout(() => {
        this.setValue(
          this.config.config,
          typeof event.data.description === "object"
            ? event.data.description
            : JSON.parse(event.data.description)
        );
      }, 50);
    } else {
      setTimeout(() => {
        this.setValue(this.config.config, event.data);
      }, 50);
    }
  }

  getTerminesFromGoogleCalendar() {
    this._service
      .callGetMethod("/api/google/getTermines", "")
      .subscribe((data: any) => {
        if (this.calendar) {
          if (data) {
            this.calendar.eventSettings.dataSource =
              this.packTerminesFromGoogleCalendar(data.data.items);
          } else {
            this.calendar.eventSettings.dataSource = [];
          }
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
        description: termines[i].description,
        externalId: termines[i].id,
        employeeId:
          typeof termines[i].description === "object"
            ? typeof termines[i].description.employee_id
            : JSON.parse(termines[i].description).employee_id,
      });
    }
    return prepactedTermines;
  }

  createTermineForGoogleCalendar() {
    this.setCreatorId();
    this._service
      .callPostMethod("/api/google/createTermine", this.form.form.value)
      .subscribe((data) => {
        this._toastr.showSuccess();
        // this.getTermines();
        // this.calendar?.refreshTemplates("cellTemplate");
      });
  }

  updateTermineForGoogleCalendar(value: any) {
    this.updateGoogleTermineLocally(value);
    this.setNewValueForGoogleUpdate(value);
    this._service.callPostMethod("/api/google/updateTermine", value).subscribe(
      (data) => {
        this._toastr.showSuccess();
      },
      (error) => {
        this._toastr.showError();
        this.getTermines();
      }
    );
  }

  deleteTerminForGoogleCalendar(id) {
    this._service
      .callGetMethod("/api/google/deleteTermine", id)
      .subscribe((data) => {
        this.getTermines();
        // this.calendar?.refreshTemplates("cellTemplate");
      });
  }

  updateGoogleTermineLocally(event: any) {
    for (let i = 0; i < this.calendar.eventSettings.dataSource["length"]; i++) {
      if (
        this.calendar.eventSettings.dataSource[i].externalId ===
        event.externalId
      ) {
        this.calendar.eventSettings.dataSource[i].StartTime = event.StartTime;
        this.calendar.eventSettings.dataSource[i].EndTime = event.EndTime;
        this.calendar.eventSettings.dataSource[i].description =
          this.form.form.value;
        this.calendar.eventSettings.dataSource[i].employeeId = event.employeeId
          ? event.employeeId
          : event.employee_id;
        this.calendar.eventSettings.dataSource[i].description.employee_id =
          event.employeeId ? event.employeeId : event.employee_id;
        this.calendar.refreshEvents();
      }
    }
  }

  setNewValueForGoogleUpdate(value: any) {
    value.description = this.form.form.value;
    value.description.StartTime = value.StartTime;
    value.description.EndTime = value.EndTime;
    value.description.employee_id = value.employeeId
      ? value.employeeId
      : value.employee_id;
  }
  //#endregion

  //#region SQL

  createTermineInSql() {
    this._service
      .callApi(this.config.editSettingsRequest.add, {
        body: this.form.form.value,
      })
      .subscribe((data) => {
        console.log(data);
      });
  }

  //#endregion

  //#region Events

  submitEmitter(event: any) {}

  onActionBegin(event: any) {
    if (this.externalAccounts.google) {
      this.executeActionForGoogleCalendar(event);
    }
  }

  onPopupOpen(event: any) {
    this.employeeId = event.data.employeeId;
    if (this.externalAccounts.google) {
      this.onPopupForGoogleCalendar(event);
    }
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
    // const categoryColor: string = args.data.CategoryColor as string;
    // if (!args.element || !categoryColor) {
    //   return;
    // }
    //SET COLOR FOR EVENT
    // args.element.style.backgroundColor = "#000";
  }

  onDataBound(args): void {
    var renderedDates = this.calendar.activeView.getRenderDates();
    this.calendar.resetWorkHours();
    var days: Date[] = [];
    for (var i = 0; i < renderedDates.length; i++) {
      var dayIndex = renderedDates[i].getDay();
      if (dayIndex !== 0 && dayIndex !== 6) {
        days.push(renderedDates[i]);
        // this.calendar.setWorkHours(
        //   days,
        //   this.workHours1[dayIndex].startHour,
        //   this.workHours1[dayIndex].endHour
        // );
      }
    }
  }

  onRenderCell(args: any): void {
    if (args.date! < new Date()) {
      args.element.classList.add("e-disable-dates");
    } else if (args.elementType === "workCells") {
      this.setWorkTimeInCalendar(args);
    }

    // args.date
  }

  changeLocation(event: any) {
    // get employees for this location
    // this.calendarSettings.location = event;
    this.calendarSettings.selectedEmployees = [];
    this.calendarSettings.selectedEmployeesFullInfo = [];
    this.calendarSettings.location_data = event;
    this._storageService.setCalendarConfig(this.calendarSettings);
    this._service
      .callGetMethod(
        "/api/getEmployeesForLocation",
        this.calendarSettings.location_id
      )
      .subscribe((data) => {
        this.allEmployees = data;
      });
  }

  changeEmployees(event: any) {
    this.calendarSettings.selectedEmployeesFullInfo = event;
    this._storageService.setCalendarConfig(this.calendarSettings);
    this.checkIfPersonalOrGroupCalendar();
    this.getWorkTimes();
    this.getTermines();
  }
  //#endregion

  //#region API functions

  getWorkTimes() {
    this.workTimes = {};
    this.loader = true;
    if (this.calendarSettings.selectedEmployees.length) {
      for (let i = 0; i < this.calendarSettings.selectedEmployees.length; i++) {
        this._service
          .callGetMethod(
            "/api/getWorktimeForEmployee",
            this.calendarSettings.selectedEmployees[i]
          )
          .subscribe((data: any) => {
            if (data && data.length) {
              this.workTimes[i] = {
                color: data[0].color,
                value: JSON.parse(data[0].value),
              };
              this.loader = false;
            } else {
              this.workTimes[i] = null;
              this.loader = false;
            }
          });
      }
    } else {
      this._service
        .callGetMethod("/api/getMyWorktime", "")
        .subscribe((data) => {
          if (data) {
            this.workTimes[0] = {
              color: data[0].color,
              value: JSON.parse(data[0].value),
            };
          }

          this.loader = false;
        });
    }
  }

  //#endregion

  //#region Helpful functions
  isValidForm() {
    return this.form && this.form.form.valid;
  }

  setCreatorId() {
    this.form.setValue(
      "employee_id",
      this.employeeId ? this.employeeId : this._storageService.getUserId(),
      "numeric"
    );
    this.form.setValue(
      "ResourcesIndex",
      this.employeeId ? this.employeeId : this._storageService.getUserId(),
      "numeric"
    );
  }

  setWorkTimeInCalendar(args) {
    const day = args.date.getDay();
    const hour = args.date.getHours();
    const minutes = args.date.getMinutes();
    const workTimeForDay = this.getWorkTimeForDay(day, args.groupIndex);
    if (
      workTimeForDay &&
      workTimeForDay.active &&
      this.workTimes[args.groupIndex] &&
      this.workTimes[args.groupIndex].color
    ) {
      let notWorkTime = true;
      for (let i = 0; i < workTimeForDay.times.length; i++) {
        if (workTimeForDay.times[i].start && workTimeForDay.times[i].end) {
          if (
            (hour >= workTimeForDay.times[i].start.hour &&
              hour < workTimeForDay.times[i].end.hour) ||
            (hour === workTimeForDay.times[i].start.hour &&
              minutes > workTimeForDay.times[i].start.minutes &&
              hour === workTimeForDay.times[i].end.hour &&
              minutes < workTimeForDay.times[i].end.minutes)
          ) {
            args.element.style.backgroundColor =
              this.workTimes[args.groupIndex].color;
            notWorkTime = false;
            break;
          }
        }
      }
      if (notWorkTime) {
        args.element.classList.add("pointer-event-none");
      }
    } else {
      args.element.classList.add("pointer-event-none");
    }
  }

  getWorkTimeForDay(day, groupIndex) {
    if (this.workTimes[groupIndex]) {
      for (let j = 0; j < this.workTimes[groupIndex].value.length; j++) {
        if (this.workTimes[groupIndex].value[j].id == day) {
          return this.workTimes[groupIndex].value[j];
        }
      }
    }
    return null;
  }

  checkCalendarConfigurations() {
    this.checkIfPersonalOrGroupCalendar();
  }

  checkIfPersonalOrGroupCalendar() {
    this.resourceDataSource = [];
    const token = this._storageService.getDecodeToken();
    if (
      this.config.showOtherCalendar &&
      this.calendarSettings.rights &&
      this.calendarSettings.rights.show_other_calendar
    ) {
      if (this.calendarSettings.selectedEmployeesFullInfo) {
        for (
          let i = 0;
          i < this.calendarSettings.selectedEmployeesFullInfo.length;
          i++
        ) {
          this.resourceDataSource.push({
            text:
              this.calendarSettings.selectedEmployeesFullInfo[i].firstname +
              " " +
              this.calendarSettings.selectedEmployeesFullInfo[i].lastname,
            id: this.calendarSettings.selectedEmployeesFullInfo[i].id,
            position:
              this.calendarSettings.selectedEmployeesFullInfo[i].position,
            groupIndex: i,
          });
        }
      }
    } else {
      this.resourceDataSource.push({
        text: token.firstname + " " + token.lastname,
        id: token.id,
        groupIndex: 0,
      });
    }
  }

  checkCalendarRights() {
    if (
      this.config.showOtherCalendar &&
      this.calendarSettings.rights.show_other_calendar
    ) {
      this.getAdminLocations();
      this.getAdminEmployees();
    }

    this.checkCalendarConfigurations();
  }

  checkCalendarVisibility() {
    return (
      Object.keys(this.workTimes).length &&
      ((this.calendarSettings.rights &&
        this.calendarSettings.rights.show_other_calendar &&
        this.calendarSettings.selectedEmployees &&
        this.calendarSettings.selectedEmployees.length) ||
        !this.calendarSettings.rights ||
        !this.calendarSettings.rights.show_other_calendar)
    );
  }

  getStartHourForLocation() {
    const time = this.calendarSettings.location_data.worktime_from
      ? JSON.parse(this.calendarSettings.location_data.worktime_from)
      : null;
    if (time) {
      return time.hour + ":" + time.minute;
    } else {
      return null;
    }
  }

  getEndHourForLocation() {
    const time = this.calendarSettings.location_data.worktime_to
      ? JSON.parse(this.calendarSettings.location_data.worktime_to)
      : null;
    if (time) {
      return time.hour + ":" + time.minute;
    } else {
      return null;
    }
  }

  //#endregion
}
