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
import { ExecuteAction } from "app/enums/execute-action";
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
  public externalAccountForEmployees: any = {};
  public workTimes: any = {};
  public calendarSettings = new CalendarSettings();
  public calendarRights: any;
  public employeeId: number;
  public loader = false;
  public multiCalendar = false;
  public popupOpen = false;

  constructor(
    private _configurationService: ConfigurationService,
    private _service: CallApiService,
    private _toastr: ToastrComponent,
    private _storageService: StorageService
  ) {}

  ngOnInit() {
    this.getConfigurations();
  }

  initialize() {
    if (this.multiCalendar) {
      this.checkStorage();
      this.getWorktimeForEmployees();
      this.getExternalAccountsForMultiCalendar();
    } else {
      this.getMyLocation();
      this.getMyWorkTime();
      this.getMyExternalAccounts();
    }
  }

  //#region  INIT FUNCTION

  getTermines() {
    // check for all other users
    if (this.multiCalendar) {
      this.getTerminesForMultiCalendar();
    } else {
      //check for my calendar
      this.getMyTermines();
    }
  }

  getTerminesForMultiCalendar() {
    this.getTerminesFromGoogleCalendar();
    this.getTerminesFromSQL();
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

  getDataForMultiCalendar() {
    this.getAdminLocations(); // get locations for selection
    this.getAdminEmployees(); // get employee for selection
  }

  //#endregion

  //#region CALENDAR SETTINGS(rights and other configurations)

  getConfigurations() {
    this.loader = true;
    this._configurationService.getConfiguration(this.path, this.file).subscribe(
      (data) => {
        this.config = data;
        this.getCalendarRights();
      },
      (error) => {
        this.loader = false;
      }
    );
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

  checkCalendarRights() {
    this.multiCalendar = this.checkMultiCalendarRights();

    this.initialize();

    if (this.multiCalendar) {
      this.getDataForMultiCalendar();
    }
    this.packResourceData();
  }

  checkStorage() {
    this.calendarSettings = this._storageService.getCalendarConfig();
  }

  //#endregion

  //#region PERSONAL

  getMyWorkTime() {
    this._service.callGetMethod("/api/getMyWorktime", "").subscribe((data) => {
      if (data) {
        this.workTimes[0] = {
          color: data[0].color,
          value: JSON.parse(data[0].value),
        };
      }
    });
  }

  getMyLocation() {
    this._service
      .callGetMethod("/api/getUserLocation", "")
      .subscribe((data) => {
        if (data) {
          this.calendarSettings.location_data = data[0];
        }
      });
  }

  getMyExternalAccounts() {
    this._service
      .callGetMethod("/api/getExternalAccounts", "")
      .subscribe((data: any) => {
        this.calendarSettings.externalAccounts = data[0];
        this.getTermines();
      });
  }

  getMyTermines() {
    if (this.checkExternalAccountForGoogle()) {
      this.getMyTerminesFromGoogleCalendar();
    } else {
      this.getMyTerminesFromSQL();
    }
  }

  //#endregion

  //#region MULTI

  getWorktimeForEmployees() {
    if (this.calendarSettings.selectedEmployees) {
      let br = 0;
      this.workTimes = {};
      this.loader = true;
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
              br++;
              if (br === this.calendarSettings.selectedEmployees.length) {
                this.loader = false;
              }
            } else {
              this.workTimes[i] = null;
              this.loader = false;
            }
          });
      }
    }
  }
  //#endregion

  //#region GOOGLE CALENDAR

  executeActionForGoogleCalendar(event: any) {
    if (event.requestType === "eventRemove") {
      this.deleteTermineFromGoogleCalendar(
        event.data.length ? event.data[0].id : event.data.id
      );
    } else if (event.requestType === "eventChange") {
      if (this.popupOpen && this.isValidForm()) {
        event.data = this.getValueFromForm(this.config.config, event.data);
      }
      this.updateTermineForGoogleCalendar(event.data);
    } else if (event.requestType === "eventCreate") {
      if (this.isValidForm()) {
        this.createTermineForGoogleCalendar();
      } else {
        this._toastr.showError();
      }
    }

    this.popupOpen = false;
  }

  getMyTerminesFromGoogleCalendar() {
    this.loader = true;
    this._service
      .callGetMethod("/api/google/getMyTermines", "")
      .subscribe((data: any) => {
        this.loader = false;
        setTimeout(() => {
          if (this.calendar) {
            if (data) {
              this.calendar.eventSettings.dataSource =
                this.packTerminesFromGoogleCalendar(data);
            } else {
              this.calendar.eventSettings.dataSource = [];
            }
          }
        }, 10);
      });
  }

  getTerminesFromGoogleCalendar() {
    const employees = this.getEmployeeWhoHaveConnectedGoogleCalendar();

    this._service
      .callPostMethod("/api/google/getTerminesForMultiCalendar", employees)
      .subscribe(
        (data: any) => {
          if (this.calendar) {
            if (data) {
              if ((this.calendar.eventSettings.dataSource as []).length) {
                this.calendar.eventSettings.dataSource = (
                  this.calendar.eventSettings.dataSource as any[]
                ).concat(this.packTerminesFromGoogleCalendar(data));
              } else {
                this.calendar.eventSettings.dataSource =
                  this.packTerminesFromGoogleCalendar(data);
              }
            } else {
              this.calendar.eventSettings.dataSource = [];
            }
          }
          this.calendar.showSpinner();
        },
        (error) => {
          this.loader = false;
        }
      );
  }

  packTerminesFromGoogleCalendar(termines) {
    let prepactedTermines = [];
    for (let i = 0; i < termines.length; i++) {
      const data =
        typeof termines[i].description === "object"
          ? termines[i].description
          : JSON.parse(termines[i].description);
      prepactedTermines.push({
        Subject: data.Subject
          ? data.Subject
          : termines[i].summary
          ? termines[i].summary
          : "",
        StartTime: new Date(data.StartTime),
        EndTime: new Date(data.EndTime),
        id: termines[i].id,
        employeeId: data.employeeId,
        externalCalendar: data.externalCalendar,
        service_id: data.service_id,
        client_id: data.client_id,
      });
    }

    return prepactedTermines;
  }

  createTermineForGoogleCalendar() {
    this.setAdditionalData();
    this.setAdditionalDataForGoogleCalendar();
    this._service
      .callPostMethod("/api/google/createTermine", this.form.form.value)
      .subscribe(
        (data) => {
          this._toastr.showSuccess();
          this.calendar.showSpinner();
          this.getTermines();
        },
        (error) => {
          this._toastr.showError();
        }
      );
  }

  updateTermineForGoogleCalendar(event: any) {
    this.refreshTermine(event, ExecuteAction.update);
    if (this.popupOpen && this.isValidForm()) {
      event = this.getValueFromForm(this.config.config, event);
    }
    this._service.callPostMethod("/api/google/updateTermine", event).subscribe(
      (data) => {
        this._toastr.showSuccess();
      },
      (error) => {
        this._toastr.showError();
        this.getTermines();
      }
    );
  }

  deleteTermineFromGoogleCalendar(id) {
    this.calendar.showSpinner();
    this._service
      .callPostMethod("/api/google/deleteTermine", {
        id: id,
        externalCalendar:
          this.calendarSettings.externalAccounts[this.employeeId].google,
      })
      .subscribe(
        (data) => {
          this.getTermines();
          this._toastr.showSuccess();
        },
        (error) => {
          this._toastr.showError();
        }
      );
  }

  getEmployeeWhoHaveConnectedGoogleCalendar() {
    let array = [];
    for (let i = 0; i < this.calendarSettings.selectedEmployees.length; i++) {
      if (
        this.checkExternalAccountForGoogle(
          this.calendarSettings.selectedEmployees[i]
        )
      ) {
        array.push(this.calendarSettings.selectedEmployees[i]);
      }
    }

    return array;
  }

  //#endregion

  //#region SQL

  getTerminesFromSQL() {
    this._service
      .callPostMethod(
        "/api/calendar/getTermines",
        this.calendarSettings.selectedEmployees
      )
      .subscribe((data) => {
        if ((this.calendar.eventSettings.dataSource as []).length) {
          this.calendar.eventSettings.dataSource = (
            this.calendar.eventSettings.dataSource as any[]
          ).concat(this.packTerminesFromSQL(data));
        } else {
          this.calendar.eventSettings.dataSource =
            this.packTerminesFromSQL(data);
        }
      });
  }

  executeActionForSQL(event) {
    if (event.requestType === "eventRemove") {
      this.deleteTermineFromSQL(event.data[0]);
    } else if (event.requestType === "eventChange") {
      if (this.popupOpen && this.isValidForm()) {
        event.data = this.getValueFromForm(this.config.config, event.data);
      }
      this.updateTermineForSQL(event.data);
    } else if (event.requestType === "eventCreate") {
      this.createTermineForSQL();
    }
    this.popupOpen = false;
  }

  createTermineForSQL() {
    this.setAdditionalData();
    this._service
      .callApi(this.config.editSettingsRequest.add, {
        body: this.form.form.value,
      })
      .subscribe(
        (data) => {
          this.form.form.value["id"] = data;
          this.refreshTermine(this.form.form.value, ExecuteAction.create);
          this._toastr.showSuccess();
        },
        (error) => {
          this._toastr.showError();
        }
      );
  }

  updateTermineForSQL(event: any) {
    this.setAdditionalData();
    this.refreshTermine(event, ExecuteAction.update);
    this._service
      .callApi(this.config.editSettingsRequest.edit, {
        body: event,
      })
      .subscribe(
        (data) => {
          this._toastr.showSuccess();
        },
        (error) => {
          this._toastr.showError();
          this.getTermines();
        }
      );
  }

  deleteTermineFromSQL(event: any) {
    this.refreshTermine(event, ExecuteAction.delete);
    this._service
      .callServerMethod(this.config.editSettingsRequest.delete, event.id)
      .subscribe(
        (data) => {
          this._toastr.showSuccess();
        },
        (error) => {
          this._toastr.showError();
        }
      );
  }

  getMyTerminesFromSQL() {
    this._service
      .callServerMethod(this.config.request, "")
      .subscribe((data: any) => {
        this.loader = false;
        setTimeout(() => {
          this.calendar.eventSettings.dataSource =
            this.packTerminesFromSQL(data);
        }, 10);
      });
  }

  packTerminesFromSQL(termines) {
    let prepactedTermines = [];
    for (let i = 0; i < termines.length; i++) {
      prepactedTermines.push({
        Subject: termines[i].Subject,
        StartTime: new Date(termines[i].StartTime),
        EndTime: new Date(termines[i].EndTime),
        id: termines[i].id,
        employeeId: termines[i].employee_id,
        service_id: termines[i].service_id,
        client_id: termines[i].client_id,
        admin_id: termines[i].admin_id,
      });
    }

    return prepactedTermines;
  }

  getEventIndexForUpdateLocally(event: any) {
    if (event.id) {
      for (
        let i = 0;
        i < this.calendar.eventSettings.dataSource["length"];
        i++
      ) {
        if (this.calendar.eventSettings.dataSource[i].id === event.id) {
          return i;
        }
      }
    } else {
      return (this.calendar.eventSettings.dataSource as []).length - 1;
    }
  }

  refreshTerminesAfterUpdate(event: any, index: number) {
    this.calendar.eventSettings.dataSource[index].Subject = event.Subject;
    this.calendar.eventSettings.dataSource[index].StartTime = event.StartTime;
    this.calendar.eventSettings.dataSource[index].EndTime = event.EndTime;
    this.calendar.eventSettings.dataSource[index].service_id = event.service_id;
    this.calendar.eventSettings.dataSource[index].client_id = event.client_id;
    this.calendar.eventSettings.dataSource[index].employeeId = event.employeeId
      ? event.employeeId
      : event.employee_id;
    if (this.calendar.eventSettings.dataSource[index].description) {
      this.calendar.eventSettings.dataSource[index].description =
        this.form.form.value;
    }
    this.calendar.refreshEvents();
  }

  refreshTerminesAfterDelete(index: number) {
    (this.calendar.eventSettings.dataSource as []).splice(index, 1);
    this.calendar.refreshEvents();
  }

  refreshTerminesAfterCreate(event: any) {
    // event.employeeId = event.employee_id;
    // (this.calendar.eventSettings.dataSource as any[]).push(event);
    // this.calendar.refreshEvents();
    this.getTermines();
  }

  refreshTermine(event: any, type: ExecuteAction) {
    const index = this.getEventIndexForUpdateLocally(event);
    if (type === ExecuteAction.update) {
      this.refreshTerminesAfterUpdate(event, index);
    } else if (type === ExecuteAction.delete) {
      this.refreshTerminesAfterDelete(index);
    } else if (type === ExecuteAction.create) {
      this.refreshTerminesAfterCreate(event);
    }
  }

  //#endregion

  //#region EVENTS

  submitEmitter(event: any) {}

  onActionBegin(event: any) {
    if (
      event.requestType === "eventCreate" ||
      event.requestType === "eventChange" ||
      event.requestType === "eventRemove"
    ) {
      this.executeActionForCalendar(event);
    }
  }

  executeActionForCalendar(event) {
    if (
      this.checkExternalAccountForGoogle(
        event.data.length ? event.data[0].employeeId : event.data.employeeId
      )
    ) {
      this.executeActionForGoogleCalendar(event);
    } else {
      this.executeActionForSQL(event);
    }
  }

  onPopupOpen(event: any) {
    this.employeeId = event.data.employeeId;
    if (event.type === "Editor") {
      this.popupOpen = true;

      setTimeout(() => {
        this.setValue(this.config.config, event.data);
      }, 50);
    }
  }

  onPopupClose(event: any) {
    if (event.type === "Editor" && !event.data) {
      this.popupOpen = false;
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

  getValueFromForm(fields: any, event: any) {
    for (let i = 0; i < fields.length; i++) {
      event[fields[i]["name"]] = this.form.form.value[fields[i]["name"]];
    }
    return event;
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
    this.packResourceData();
    this.getWorktimeForEmployees();
    this.getTermines();
  }
  //#endregion

  //#region API FUNCTIONS

  getExternalAccountsForMultiCalendar() {
    if (this.multiCalendar) {
      this._service
        .callPostMethod(
          "/api/getExternalAccountsForMultiCalendar",
          this.calendarSettings.selectedEmployees
        )
        .subscribe((data) => {
          this.packExternalAccountsForMultiCalendar(data);
          this.getTermines();
        });
    }
  }

  //#endregion

  //#region HELPFUL FUNCTION
  isValidForm() {
    return this.form && this.form.form.valid;
  }

  setAdditionalData() {
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

  setAdditionalDataForGoogleCalendar() {
    this.form.setValue(
      "externalCalendar",
      this.checkExternalAccountForGoogle(),
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

  packResourceData() {
    this.resourceDataSource = [];
    const token = this._storageService.getDecodeToken();
    if (this.multiCalendar) {
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

  checkMultiCalendarRights() {
    return (
      this.config.multiCalendar &&
      this.calendarSettings.rights &&
      this.calendarSettings.rights.multi_calendar
    );
  }

  checkCalendarVisibility() {
    return (
      Object.keys(this.workTimes).length &&
      ((this.calendarSettings.rights &&
        this.calendarSettings.rights.multi_calendar &&
        this.calendarSettings.selectedEmployees &&
        this.calendarSettings.selectedEmployees.length) ||
        !this.calendarSettings.rights ||
        !this.calendarSettings.rights.multi_calendar)
    );
  }

  getStartHourForLocation() {
    if (this.calendarSettings.location_data) {
      const time = this.calendarSettings.location_data.worktime_from;
      return time.hour + ":" + time.minute;
    } else {
      return null;
    }
  }

  getEndHourForLocation() {
    if (this.calendarSettings.location_data) {
      const time = this.calendarSettings.location_data.worktime_to;
      return time.hour + ":" + time.minute;
    } else {
      return null;
    }
  }

  packExternalAccountsForMultiCalendar(data: any) {
    this.calendarSettings.externalAccounts = {};
    for (let i = 0; i < data.length; i++) {
      this.calendarSettings.externalAccounts[data[i].user_id] = data[i];
    }
  }

  checkExternalAccountForGoogle(id?) {
    if (this.calendarSettings.externalAccounts) {
      if (this.calendarSettings.externalAccounts[id]) {
        return this.calendarSettings.externalAccounts[id].google;
      } else if (this.calendarSettings.externalAccounts[this.employeeId]) {
        return this.calendarSettings.externalAccounts[this.employeeId].google;
      } else if (this.calendarSettings.externalAccounts.google) {
        return this.calendarSettings.externalAccounts.google;
      } else {
        return false;
      }
    }
  }

  //#endregion
}
