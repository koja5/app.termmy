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
  public selectLocation: any;
  public allEmployees: any;
  public selectEmployees: any;
  public externalAccounts: any;
  public workTimes: any;

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
    this.checkCalendarConfigurations();
    this.getWorkTimes();
    this.getTermines();
    this.getAdminLocations();
    this.getAdminEmployees();
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
    if (this.config.filters.employees) {
      this._service
        .callApi(null, this.config.filters.employees.request)
        .subscribe((data) => {
          this.allEmployees = data;
        });
    }
  }

  checkExternalAccounts() {
    this.externalAccounts = this._storageService.getExternalAccountSettings();
  }

  //#endregion

  //#region Google Calendar

  executeActionForGoogleCalendar(event: any) {
    if (event.requestType === "eventRemove") {
      this.deleteTerminForGoogleCalendar(event.data[0].ExternalId);
    } else if (event.requestType === "eventChange") {
      this.setValue(
        this.config.config,
        JSON.parse(event.changedRecords[0].Description)
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
    if (event && event.data.Description) {
      setTimeout(() => {
        this.setValue(
          this.config.config,
          event.data.Description ? JSON.parse(event.data.Description) : []
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
        if (data) {
          this.calendar.eventSettings.dataSource =
            this.packTerminesFromGoogleCalendar(data.data.items);
          console.log(this.calendar.eventSettings.dataSource);
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
        ExternalId: termines[i].id,
        CreatorId:
          termines[i].description && termines[i].description.indexOf("{") != -1
            ? JSON.parse(termines[i].description).creator_id
            : null,
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
        this.getTermines();
        // this.calendar?.refreshTemplates("cellTemplate");
      });
  }

  updateTermineForGoogleCalendar(data: any) {
    this._service
      .callPostMethod("/api/google/updateTermine", data)
      .subscribe((data) => {
        this._toastr.showSuccess();
        this.getTermines();
        // this.calendar?.refreshTemplates("cellTemplate");
      });
  }

  deleteTerminForGoogleCalendar(id) {
    this._service
      .callGetMethod("/api/google/deleteTermine", id)
      .subscribe((data) => {
        this.getTermines();
        // this.calendar?.refreshTemplates("cellTemplate");
      });
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
        this.calendar.setWorkHours(
          days,
          this.workHours1[dayIndex].startHour,
          this.workHours1[dayIndex].endHour
        );
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
  //#endregion

  //#region Helpful functions
  isValidForm() {
    return this.form && this.form.form.valid;
  }

  setCreatorId() {
    this.form.setValue(
      "employee_id",
      this._storageService.getUserId(),
      "numeric"
    );
    this.form.setValue(
      "ResourcesIndex",
      this._storageService.getUserId(),
      "numeric"
    );
  }

  setWorkTimeInCalendar(args) {
    const day = args.date.getDay();
    const hour = args.date.getHours();
    const minutes = args.date.getMinutes();
    const workTimeForDay = this.getWorkTimeForDay(day);
    if (workTimeForDay.active && this.workTimes.color) {
      let notWorkTime = true;
      for (let i = 0; i < workTimeForDay.times.length; i++) {
        if (
          (hour >= workTimeForDay.times[i].start.hour &&
            hour < workTimeForDay.times[i].end.hour) ||
          (hour === workTimeForDay.times[i].start.hour &&
            minutes > workTimeForDay.times[i].start.minutes &&
            hour === workTimeForDay.times[i].end.hour &&
            minutes < workTimeForDay.times[i].end.minutes)
        ) {
          args.element.style.backgroundColor = this.workTimes.color;
          notWorkTime = false;
          break;
        }
      }
      if (notWorkTime) {
        args.element.classList.add("pointer-event-none");
      }
    } else {
      args.element.classList.add("pointer-event-none");
    }
  }

  getWorkTimeForDay(day) {
    for (let i = 0; i < this.workTimes.value.length; i++) {
      if (this.workTimes.value[i].id == day) {
        return this.workTimes.value[i];
      }
    }
  }

  getWorkTimes() {
    this._service.callGetMethod("/api/getWorktime", "").subscribe((data) => {
      if (data) {
        this.workTimes = {
          color: data[0].color,
          value: JSON.parse(data[0].value),
        };
      }
    });
  }

  checkCalendarConfigurations() {
    this.checkIfPersonalOrGroupCalendar();
  }

  checkIfPersonalOrGroupCalendar() {
    const token = this._storageService.getDecodeToken();
    if (this.config.showOtherCalendar) {
    } else {
      this.resourceDataSource.push({
        text: "Aleksandar Kojic",
        id: token.id,
      });
    }
  }
  //#endregion
}
