import { Component, ViewChild } from "@angular/core";
import { ConfigurationService } from "app/services/configuration.service";
import { CallApiService } from "app/services/call-api.service";
import { ToastrComponent } from "app/common/toastr/toastr.component";
import {
  CellClickEventArgs,
  EventClickArgs,
  EventRenderedArgs,
  EventSettingsModel,
  GroupModel,
  RenderCellEventArgs,
  ScheduleComponent,
} from "@syncfusion/ej2-angular-schedule";
import { StorageService } from "app/services/storage.service";
import { CalendarSettings } from "app/models/calendar-settings";
import { ExecuteAction } from "app/enums/execute-action";
import { HelpService } from "app/services/help.service";
import {
  FormControl,
  FormGroup,
  UntypedFormGroup,
  Validators,
} from "@angular/forms";
import {
  loadCldr,
  L10n,
  setCulture,
  setCurrencyCode,
} from "@syncfusion/ej2-base";
import { DefaultCalendarLanguages } from "./default-calendar-languages";
import { LangChangeEvent, TranslateService } from "@ngx-translate/core";
import { CoreSidebarService } from "@core/components/core-sidebar/core-sidebar.service";
import { CalendarService } from "app/services/calendar.service";
import { CalendarType } from "app/enums/calendar-type";
import { DialogConfirmComponent } from "app/common/dialog-confirm/dialog-confirm.component";
declare var require: any;

new DefaultCalendarLanguages();

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.scss"],
})
export class CalendarComponent {
  public path = "calendars";
  public file = "my-calendar.json";

  @ViewChild("calendar") calendar: ScheduleComponent;
  @ViewChild("dialogUnsavedContentConfirm")
  dialogUnsavedContentConfirm: DialogConfirmComponent;

  //CALENDAR VARIABLES
  public resourceDataSource: Object[] = [];

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
  public employeeId: number;
  public loader = false;
  public loaderContent = false;
  public multiCalendar = false;
  public popupOpen = false;
  public mobileDevice: boolean = false;
  public appointment: any;
  public allClients: any;
  public allServices: any;
  public servicesColor: any = {};
  public servicesColorText: any = {};
  public schedulerHeight: string;
  public currentView = "WorkWeek";
  public googleAdditionalCalendarsList = [];
  public calendarType: CalendarType;
  public isDirty = false;
  public calendarEditor: any;
  public limitClientsForFreeLicenses = 30;
  public minDate: any;
  public maxDate: any;

  constructor(
    private _configurationService: ConfigurationService,
    private _service: CallApiService,
    private _toastr: ToastrComponent,
    private _storageService: StorageService,
    public _helpService: HelpService,
    private _translate: TranslateService,
    private _coreSidebarService: CoreSidebarService,
    private _calendarService: CalendarService
  ) {}

  ngOnInit() {
    this.mobileDevice = this._helpService.checkIsMobileDevices();
    if (this.mobileDevice || window.innerWidth < 993) {
      this.schedulerHeight = "calc(100vh - 12vh)";
    } else {
      this.schedulerHeight = "calc(100vh - 19vh)";
    }
    this.setCalendarLanguage();
    this.getPersonalInfo();
    this.getConfigurations();
  }

  initialize() {
    this.executeFunctionForPopup();
    this.initializeForm();
    this.checkStorage();
    if (this.multiCalendar) {
      this.getExternalAccountsForMultiCalendar();
    } else {
      this.getMyExternalAccounts();
    }
  }

  getPersonalInfo() {
    if (this.multiCalendar) {
      this.getWorktimeForEmployees();
    } else {
      this.getMyLocation();
      this.getMyWorkTime();
    }
  }

  //#region  INIT FUNCTION

  setCalendarLanguage() {
    // set current language
    setCulture(this._storageService.getSelectedLanguage(true));

    // detect change language
    this._translate.onLangChange.subscribe((event: LangChangeEvent) => {
      if (event.lang === "rs") {
        setCulture("sr-Latn");
      } else {
        setCulture(event.lang);
      }
    });
  }

  initializeForm() {
    this.appointment = new UntypedFormGroup({
      id: new FormControl(""),
      client_id: new FormControl("", Validators.required),
      service_id: new FormControl("", [Validators.required]),
      StartTime: new FormControl("", [Validators.required]),
      EndTime: new FormControl("", [Validators.required]),
      description: new FormControl(""),
      Subject: new FormControl(""),
      employee_id: new FormControl(""),
      ResourcesIndex: new FormControl(),
      externalCalendar: new FormControl(),
      externalCalendarId: new FormControl(),
    });
  }

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

  //#region FUNCTION FOR POPUP

  executeFunctionForPopup() {
    if (!this.allClients) {
      this.getMyClients();
    }

    if (!this.allServices) {
      this.getMyServices();
    }
  }

  onChangeClient(event: any) {
    this.isDirty = true;
    this.appointment.controls.client_id.setValue(event.id);
    this.appointment.controls.Subject.setValue(
      event.firstname + " " + event.lastname
    );
  }

  onChangeService(event: any) {
    this.isDirty = true;
    this.appointment.controls.service_id.setValue(event.id);
    this.appointment.controls.EndTime.setValue(
      this._helpService.addMinutes(
        this.appointment.controls.StartTime.value,
        event.time_blocked
      )
    );
  }

  getMyClients() {
    this._service
      .callGetMethod("/api/getMyClients", "")
      .subscribe((data: any) => {
        this.allClients = data;
      });
  }

  getMyServices() {
    this._service
      .callGetMethod("/api/getMyServices", "")
      .subscribe((data: any) => {
        this.allServices = data;
        this.packServices();
      });
  }

  packServices() {
    for (let i = 0; i < this.allServices.length; i++) {
      this.servicesColor[this.allServices[i].id] = this.allServices[i].color;
      this.servicesColorText[this.allServices[i].id] =
        this.allServices[i].color_text;
    }
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
        } else {
          this.calendarSettings.rights = null;
        }
        // this._storageService.setCalendarConfig(this.calendarSettings);
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
    this._service
      .callGetMethod("/api/getMyWorktime", "")
      .subscribe((data: any) => {
        if (data && data.length) {
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
        if (data.length) {
          this.calendarSettings.externalAccounts = data[0];
          this.packGoogleAdditionalCalendarsForUser(
            JSON.parse(
              this.calendarSettings.externalAccounts.google_additional_calendars
            )
          );
        } else {
          this.calendarSettings.externalAccounts = [];
        }
        this._storageService.setCalendarConfig(this.calendarSettings);
        this.getTermines();
      });
  }

  packGoogleAdditionalCalendarsForUser(googleAdditionalCalendars: any) {
    this.googleAdditionalCalendarsList = [];
    if (googleAdditionalCalendars) {
      for (const [key, value] of Object.entries(googleAdditionalCalendars)) {
        if ((value as any).active && (value as any).accessRole === "owner") {
          this.googleAdditionalCalendarsList.push(value);
        }
      }
    }
  }

  getMyTermines() {
    if (this.getTokenForExternalCalendar()) {
      if (this.calendarType === CalendarType.google) {
        this.getMyTerminesFromGoogleCalendar();
      } else if (this.calendarType === CalendarType.microsoft) {
        this.getMyTerminesFromMicrosoftCalendar();
      }
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
          .subscribe(
            (data: any) => {
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
            },
            (error) => {
              this.loader = false;
            }
          );
      }
    }
  }
  //#endregion

  //#region GOOGLE CALENDAR

  executeActionForGoogleCalendar(event: any) {
    if (event.requestType === "eventRemove") {
      this.deleteTermineFromGoogleCalendar(
        event.data.length
          ? {
              id: event.data[0].id,
              externalCalendarId: event.data[0].externalCalendarId,
            }
          : {
              id: event.data.id,
              externalCalendarId: event.data.externalCalendarId,
            }
      );
      this.deleteTermineFromSQL({
        id: event.data.length ? event.data[0].uuid : event.data.uuid,
      });
    } else if (event.requestType === "eventChange") {
      if (this.popupOpen && this.isValidForm()) {
        event.data = this.getValueFromForm(this.config.config, event.data);
      }
      this.updateTermineForGoogleCalendar(event.data);
      this.updateTermineForSQL(event.data);
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
    // const selectedWeek = this.getMinAndMaxDateForSelectedWeek();

    this._service
      .callPostMethod("/api/google/getMyTermines", {
        id: this.calendarSettings.externalAccounts[this.employeeId]
          ? this.calendarSettings.externalAccounts[this.employeeId].google
          : this.calendarSettings.externalAccounts.google,
        google_additional_calendars: this.calendarSettings.externalAccounts[
          this.employeeId
        ]
          ? this.calendarSettings.externalAccounts[this.employeeId]
              .google_additional_calendars
          : this.calendarSettings.externalAccounts.google_additional_calendars,
        min: this.minDate ? this.minDate : this.getMinAndMaxDate().minDate,
        max: this.maxDate ? this.maxDate : this.getMinAndMaxDate().maxDate,
      })
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
            this.getHolidays();
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
          this.loader = false;
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
            this.getHolidays();
          }
        },
        (error) => {
          this.loader = false;
        }
      );
  }

  packTerminesFromGoogleCalendar(termines) {
    let prepactedTermines = [];
    for (let i = 0; i < termines.length; i++) {
      const data = this._calendarService.getMoreDetails(
        termines[i].description
      );

      prepactedTermines.push({
        Subject: data.Subject
          ? data.Subject
          : termines[i].summary
          ? termines[i].summary
          : "",
        StartTime: termines[i].start.date
          ? termines[i].start.date
          : new Date(
              data.StartTime != termines[i].start.dateTime
                ? new Date(termines[i].start.dateTime).toLocaleString("en-US")
                : data.StartTime
            ),
        EndTime: termines[i].end.date
          ? termines[i].end.date
          : new Date(
              data.EndTime != termines[i].end.dateTime
                ? new Date(termines[i].end.dateTime).toLocaleString("en-US")
                : data.EndTime
            ),
        description: data.description,
        id: termines[i].id,
        employeeId: data.employeeId
          ? data.employeeId
          : this._storageService.getUserId(),
        externalCalendar: data.externalCalendar
          ? data.externalCalendar
          : this.calendarSettings.externalAccounts[this.employeeId]
          ? this.calendarSettings.externalAccounts[this.employeeId].google
          : this.calendarSettings.externalAccounts.google,
        externalCalendarId: data.externalCalendarId
          ? data.externalCalendarId
          : null,
        service_id: data.service_id ? data.service_id : null,
        client_id: data.client_id ? data.client_id : null,
        is_online: data.is_online,
        amount_paid: data.amount_paid,
        uuid: data.uuid,
      });
    }

    console.log(prepactedTermines);

    return prepactedTermines;
  }

  createTermineForGoogleCalendar() {
    this.setAdditionalData();
    this.setAdditionalDataForExternalCalendar();
    this.loaderContent = true;
    this.appointment.value.StartTime =
      this.appointment.value.StartTime.toISOString();
    this.appointment.value.EndTime =
      this.appointment.value.EndTime.toISOString();
    this._service
      .callPostMethod("/api/google/createTermine", this.appointment.value)
      .subscribe(
        (data: any) => {
          if (data) {
            this.createTermineForSQL(data.uuid, data.id);
          } else {
            this.loaderContent = false;
            this._toastr.showError();
          }
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

    this._calendarService.updateTermineForGoogleCalendar(event).subscribe(
      (data) => {
        // this._toastr.showErrorCustom(
        //   this._translate.instant(
        //     "actionMessage.errorUpdateTermineOnGoogleCalendarRights"
        //   )
        // );
        // this.getTermines();
      },
      (error) => {
        this.getTermines();
      }
    );
  }

  deleteTermineFromGoogleCalendar(data: any) {
    if (data.id) {
      this.loaderContent = true;
      this.calendar.showSpinner();
      this._service
        .callPostMethod("/api/google/deleteTermine", {
          id: data.id,
          externalCalendar: this.calendarSettings.externalAccounts[
            this.employeeId
          ]
            ? this.calendarSettings.externalAccounts[this.employeeId].google
            : this.calendarSettings.externalAccounts.google,
          externalCalendarId: data.externalCalendarId,
        })
        .subscribe(
          (response) => {
            this.loaderContent = false;
            this.refreshTermine({ id: data.id }, ExecuteAction.delete);
          },
          (error) => {
            this._toastr.showError();
          }
        );
    }
  }

  getEmployeeWhoHaveConnectedGoogleCalendar() {
    let array = [];
    if (this.calendarSettings.selectedEmployees) {
      for (let i = 0; i < this.calendarSettings.selectedEmployees.length; i++) {
        if (
          this.getTokenForExternalCalendar(
            this.calendarSettings.selectedEmployees[i]
          )
        ) {
          array.push(this.calendarSettings.selectedEmployees[i]);
        }
      }
    }

    return array;
  }

  //#endregion

  //#region MICROSOFT CALENDAR

  executeActionForMicrosoftCalendar(event: any) {
    if (event.requestType === "eventRemove") {
      this.deleteTermineFromGoogleCalendar(
        event.data.length
          ? {
              id: event.data[0].id,
              externalCalendarId: event.data[0].externalCalendarId,
            }
          : {
              id: event.data.id,
              externalCalendarId: event.data.externalCalendarId,
            }
      );
      this.deleteTermineFromSQL({
        id: event.data.length ? event.data[0].uuid : event.data.uuid,
      });
    } else if (event.requestType === "eventChange") {
      if (this.popupOpen && this.isValidForm()) {
        event.data = this.getValueFromForm(this.config.config, event.data);
      }
      this.updateTermineForMicrosoftCalendar(event.data);
      this.updateTermineForSQL(event.data);
    } else if (event.requestType === "eventCreate") {
      if (this.isValidForm()) {
        this.createTermineForMicrosoftCalendar();
      } else {
        this._toastr.showError();
      }
    }

    this.popupOpen = false;
  }

  createTermineForMicrosoftCalendar() {
    this.setAdditionalData();
    this.setAdditionalDataForExternalCalendar();
    this.loaderContent = true;

    this.appointment.value.StartTime =
      this.appointment.value.StartTime.toString();
    this.appointment.value.EndTime = this.appointment.value.EndTime.toString();

    this._calendarService
      .createTermineForMicrosoftCalendar(this.appointment.value)
      .subscribe(
        (data: any) => {
          if (data) {
            this.createTermineForSQL(data.uuid, data.id);
          } else {
            this.loaderContent = false;
            this._toastr.showError();
          }
        },
        (error) => {
          this._toastr.showError();
        }
      );
  }

  updateTermineForMicrosoftCalendar(event: any) {
    this.refreshTermine(event, ExecuteAction.update);

    if (this.popupOpen && this.isValidForm()) {
      event = this.getValueFromForm(this.config.config, event);
    }

    event.StartTime = event.StartTime.toString();
    event.EndTime = event.EndTime.toString();

    this._calendarService.updateTermineForMicrosoftCalendar(event).subscribe(
      (data) => {
        // this.getTermines();
      },
      (error) => {
        this.getTermines();
      }
    );
  }

  getMyTerminesFromMicrosoftCalendar() {
    this._calendarService
      .getMyTerminesFromMicrosoftCalendar(
        this.calendarSettings.externalAccounts.microsoft
      )
      .subscribe((data) => {
        this.loader = false;
        setTimeout(() => {
          if (this.calendar) {
            if (data) {
              if ((this.calendar.eventSettings.dataSource as []).length) {
                this.calendar.eventSettings.dataSource = (
                  this.calendar.eventSettings.dataSource as any[]
                ).concat(
                  this._calendarService.packTerminesFromMicrosoftCalendar(
                    data,
                    this.calendarSettings,
                    this.employeeId
                  )
                );
              } else {
                this.calendar.eventSettings.dataSource =
                  this._calendarService.packTerminesFromMicrosoftCalendar(
                    data,
                    this.calendarSettings,
                    this.employeeId
                  );
              }
            } else {
              this.calendar.eventSettings.dataSource = [];
            }
            this.getHolidays();
          }
        }, 100);
      });
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
        this.loader = false;
        setTimeout(() => {
          if ((this.calendar.eventSettings.dataSource as []).length) {
            this.calendar.eventSettings.dataSource = (
              this.calendar.eventSettings.dataSource as any[]
            ).concat(this.packTerminesFromSQL(data));
          } else {
            this.calendar.eventSettings.dataSource =
              this.packTerminesFromSQL(data);
          }
          this.getHolidays();
        }, 10);
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

  createTermineForSQL(uuid?: any, googleId?: string) {
    this.loaderContent = true;
    this.setAdditionalData();
    if (uuid) {
      this.appointment.value.id = uuid;
      this.appointment.value.uuid = uuid;
    }
    this._service
      .callApi(this.config.editSettingsRequest.add, {
        body: this.appointment.value,
      })
      .subscribe(
        (data) => {
          if (googleId) {
            this.appointment.controls.id.setValue(googleId);
          } else if (!this.appointment.value.id) {
            this.appointment.controls.id.setValue(data);
          }
          this.refreshTermine(this.appointment.value, ExecuteAction.create);
          this.initializeForm();
          this._toastr.showSuccess();
          this.loaderContent = false;
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
          this.initializeForm();
        },
        (error) => {
          this._toastr.showError();
          this.getTermines();
        }
      );
  }

  deleteTermineFromSQL(event: any) {
    if (event && event.id) {
      this.refreshTermine(event, ExecuteAction.delete);
      this._service
        .callServerMethod(this.config.editSettingsRequest.delete, event.id)
        .subscribe(
          (data) => {
            this._toastr.showSuccess();
            this.initializeForm();
          },
          (error) => {
            this._toastr.showError();
          }
        );
    }
  }

  getMyTerminesFromSQL() {
    this._service
      .callServerMethod(this.config.request, "")
      .subscribe((data: any) => {
        this.loader = false;
        setTimeout(() => {
          this.calendar.eventSettings.dataSource =
            this.packTerminesFromSQL(data);
          this.getHolidays();
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
        description: termines[i].description,
        id: termines[i].id,
        employeeId: termines[i].employee_id,
        service_id: termines[i].service_id,
        client_id: termines[i].client_id,
        admin_id: termines[i].admin_id,
        is_online: termines[i].is_online,
        amount_paid: termines[i].amount_paid,
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

  refreshTerminesAfterUpdate(event?: any, index?: number) {
    const appointment = this.appointment.value;
    this.calendar.eventSettings.dataSource[index].Subject = appointment.Subject
      ? appointment.Subject
      : event.Subject;
    this.calendar.eventSettings.dataSource[index].service_id =
      appointment.service_id ? appointment.service_id : event.service_id;
    this.calendar.eventSettings.dataSource[index].client_id =
      appointment.client_id ? appointment.client_id : event.client_id;
    this.calendar.eventSettings.dataSource[index].StartTime =
      appointment.StartTime ? appointment.StartTime : event.StartTime;
    this.calendar.eventSettings.dataSource[index].EndTime = appointment.EndTime
      ? event.EndTime
      : event.EndTime;
    this.calendar.eventSettings.dataSource[index].description =
      appointment.description ? event.description : event.description;
    this.calendar.eventSettings.dataSource[index].employeeId =
      appointment.employeeId
        ? appointment.employeeId
        : event.employeeId
        ? event.employeeId
        : event.employee_id;
    this.calendar.refreshEvents();
  }

  refreshTerminesAfterDelete(index: number) {
    (this.calendar.eventSettings.dataSource as []).splice(index, 1);
    this.calendar.refreshEvents();
  }

  refreshTerminesAfterCreate(event: any) {
    event.employeeId = event.employee_id;
    (this.calendar.eventSettings.dataSource as any[]).push(event);
    this.calendar.refreshEvents();
    // this.getTermines();
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

  onActionBegin(event: any) {
    if (
      event.requestType === "eventCreate" ||
      event.requestType === "eventChange" ||
      event.requestType === "eventRemove"
    ) {
      if (
        this.appointment.valid ||
        event.data.id ||
        (event.data.length && event.data[0].id)
      ) {
        this.executeActionForCalendar(event);
      } else {
        this._toastr.showWarningCustom(
          this._translate.instant("commonFields.fillRequredFields")
        );
      }
    }
  }

  onActionEnd(event) {
    if (
      event.requestType === "dateNavigate" ||
      event.requestType === "viewNavigate"
    ) {
      this.minDate = this.getMinAndMaxDate().minDate;
      this.maxDate = this.getMinAndMaxDate().maxDate;
      this.getTermines();
    }
  }

  getMinAndMaxDate() {
    return {
      minDate: this.calendar
        ? this.calendar.activeView.renderDates[0]
        : undefined,
      maxDate: this.calendar
        ? new Date(
            new Date().setDate(
              this.calendar.activeView.renderDates[
                this.calendar.activeView.renderDates.length - 1
              ].getDate() + 1
            )
          ).toISOString()
        : undefined,
    };
  }

  executeActionForCalendar(event) {
    this.isDirty = false;
    if (
      this.getTokenForExternalCalendar(
        event.data.length ? event.data[0].employeeId : event.data.employeeId
      )
    ) {
      if (this.calendarType === CalendarType.google) {
        this.executeActionForGoogleCalendar(event);
      } else if (this.calendarType === CalendarType.microsoft) {
        this.executeActionForMicrosoftCalendar(event);
      }
    } else {
      this.executeActionForSQL(event);
    }
  }

  onPopupOpen(event: any) {
    this.employeeId = event.data.employeeId;
    if (event.type === "Editor") {
      this.popupOpen = true;

      if (this.checkIfExternalCretedTermine(event)) {
        event.cancel = true;
      } else {
        setTimeout(() => {
          this.setValue(this.config.config, event.data);
        }, 50);
      }
    }
  }

  onCellClick(args: CellClickEventArgs): void {
    this.calendar?.openEditor(args, "Add");
  }
  onEventClick(args: EventClickArgs): void {
    if (!(args.event as any).RecurrenceRule) {
      this.calendar?.openEditor(args.event, "Save");
    } else {
      this.calendar?.quickPopup.openRecurrenceAlert();
    }
  }

  onPopupClose(event: any) {
    setTimeout(() => {
      if (this.isDirty) {
        event.cancel = true;
        this.dialogUnsavedContentConfirm.showQuestionModal();
      }
      if (event.type === "Editor" && !event.data) {
        this.popupOpen = false;
      }
    }, 10);
  }

  confirmUnsavedContent() {
    this.isDirty = false;
    this.calendar.closeEditor();
  }

  checkIfExternalCretedTermine(event) {
    if (event.data.id && !event.data.client_id && !event.data.service_id)
      return true;
    return false;
  }

  onChangeData(event) {
    console.log(event);
  }

  setValue(fields: any, values: any) {
    for (let i = 0; i < fields.length; i++) {
      this.appointment.controls[fields[i].name].setValue(
        values[fields[i].name]
      );
    }
    if (values.Subject) {
      this.appointment.controls.Subject.setValue(values.Subject);
    }
  }

  getValueFromForm(fields: any, event: any) {
    for (let i = 0; i < fields.length; i++) {
      event[fields[i]["name"]] = this.appointment.value[fields[i]["name"]];
    }
    event.Subject = this.appointment.value.Subject;
    return event;
  }

  public onEventRendered(args: EventRenderedArgs): void {
    //SET COLOR FOR EVENT
    args.element.style.backgroundColor =
      this.servicesColor[args.data.service_id];
    args.element.style.color = this.servicesColorText[args.data.service_id];
  }

  onDataBound(args): void {
    var renderedDates = this.calendar.activeView.getRenderDates();
    this.setCurrentView(this.calendar.activeView.viewClass);
    this.calendar.resetWorkHours();
    var days: Date[] = [];
    for (var i = 0; i < renderedDates.length; i++) {
      var dayIndex = renderedDates[i].getDay();
      if (dayIndex !== 0 && dayIndex !== 6) {
        days.push(renderedDates[i]);
      }
    }
  }

  onNavigation(args): void {
    console.log(args);
  }

  onRenderCell(args: any): void {
    // disabled past tense date
    // if (args.date! < new Date()) {
    //   args.element.classList.add("e-disable-dates");
    // } else
    if (args.elementType === "workCells") {
      this.setWorkTimeInCalendar(args);
    }
  }

  changeLocation(event: any) {
    this.loader = true;
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
        this.loader = false;
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

  getHolidays() {
    this._service
      .callGetMethod("/api/getMyHolidays", "")
      .subscribe((data: any) => {
        if (data.length) {
          const holidays = this._helpService.getHolidaysForSelectedCountry(
            data[0].code
          );
          let array = this.packHolidays(holidays);
          this.calendar.eventSettings.dataSource = (
            this.calendar.eventSettings.dataSource as []
          ).concat(array as []);
        }
      });
  }

  packHolidays(holidays) {
    let array = [];
    for (let i = 0; i < holidays.length; i++) {
      array.push({
        Subject: holidays[i].name,
        StartTime: holidays[i].start,
        employeeId: this._storageService.getUserId(),
        EndTime: holidays[i].end,
        IsAllDay: true,
      });
    }
    return array;
  }

  setCurrentView(view: string) {
    let currentView = "";
    if (view === "e-day-view") {
      currentView = "Day";
    } else if (view === "e-week-view") {
      currentView = "Week";
    } else if (view === "e-work-week-view") {
      currentView = "WorkWeek";
    } else if (view === "e-month-view") {
      currentView = "Month";
    } else if (view === "e-agenda-view") {
      currentView = "Agenda";
    }
    this.calendarSettings.currentView = currentView;
    this._storageService.setCalendarConfig(this.calendarSettings);
  }

  //#endregion

  //#region HELPFUL FUNCTION
  isValidForm() {
    return this.appointment && this.appointment.valid;
  }

  setAdditionalData() {
    this.appointment.controls.employee_id.setValue(
      this.employeeId ? this.employeeId : this._storageService.getUserId()
    );
    this.appointment.controls.ResourcesIndex.setValue(
      this.employeeId ? this.employeeId : this._storageService.getUserId()
    );
  }

  setAdditionalDataForExternalCalendar() {
    this.appointment.controls.externalCalendar.setValue(
      this.getTokenForExternalCalendar()
    );
  }

  setWorkTimeInCalendar(args) {
    const day = args.date.getDay();
    const hour = args.date.getHours();
    const minutes = args.date.getMinutes();
    const convertWorkTimeToMinutes = this._helpService.converToMinutes(
      hour,
      minutes
    );
    const groupIndex = args.groupIndex != undefined ? args.groupIndex : 0;
    const workTimeForDay = this.getWorkTimeForDay(day, groupIndex);
    if (
      workTimeForDay &&
      workTimeForDay.active &&
      this.workTimes[groupIndex] &&
      this.workTimes[groupIndex].color
    ) {
      let notWorkTime = true;
      for (let i = 0; i < workTimeForDay.times.length; i++) {
        if (workTimeForDay.times[i].start && workTimeForDay.times[i].end) {
          const start = this._helpService.converToMinutes(
            workTimeForDay.times[i].start.hour,
            workTimeForDay.times[i].start.minute
          );
          const end = this._helpService.converToMinutes(
            workTimeForDay.times[i].end.hour,
            workTimeForDay.times[i].end.minute
          );
          if (
            convertWorkTimeToMinutes >= start &&
            convertWorkTimeToMinutes < end
          ) {
            args.element.style.backgroundColor =
              this.workTimes[groupIndex].color;
            notWorkTime = false;
            break;
          }
        }
      }
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
            firstname:
              this.calendarSettings.selectedEmployeesFullInfo[i].firstname,
            lastname:
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
        firstname: token.firstname,
        lastname: token.lastname,
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
      (this.calendarSettings.rights &&
        this.calendarSettings.rights.multi_calendar &&
        this.calendarSettings.selectedEmployees &&
        this.calendarSettings.selectedEmployees.length) ||
      !this.calendarSettings.rights ||
      !this.calendarSettings.rights.multi_calendar
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

  getTokenForExternalCalendar(id?) {
    if (this.calendarSettings.externalAccounts) {
      if (this.calendarSettings.externalAccounts[id]) {
        if (this.calendarSettings.externalAccounts[id].google) {
          this.calendarType = CalendarType.google;
          return this.calendarSettings.externalAccounts[id].google;
        } else if (this.calendarSettings.externalAccounts[id].microsoft) {
          this.calendarType = CalendarType.microsoft;
          return this.calendarSettings.externalAccounts[id].microsoft;
        }
      } else if (this.calendarSettings.externalAccounts[this.employeeId]) {
        if (this.calendarSettings.externalAccounts[this.employeeId].google) {
          this.calendarType = CalendarType.google;
          return this.calendarSettings.externalAccounts[this.employeeId].google;
        } else if (
          this.calendarSettings.externalAccounts[this.employeeId].microsoft
        ) {
          this.calendarType = CalendarType.microsoft;
          return this.calendarSettings.externalAccounts[this.employeeId]
            .microsoft;
        }
      } else if (this.calendarSettings.externalAccounts.google) {
        this.calendarType = CalendarType.google;
        return this.calendarSettings.externalAccounts.google;
      } else if (this.calendarSettings.externalAccounts.microsoft) {
        this.calendarType = CalendarType.microsoft;
        return this.calendarSettings.externalAccounts.microsoft;
      }
    } else {
      this.calendarType = CalendarType.termmy;
      return CalendarType.termmy;
    }
  }

  getMinAndMaxDateForSelectedWeek() {
    let currentViewDates: Date[] =
      this.calendar.getCurrentViewDates() as Date[];
    let min: Date = currentViewDates[0] as Date;
    let max: Date = currentViewDates[currentViewDates.length - 1] as Date;
    return {
      min: min,
      max: max,
    };
  }

  openSidebarForCreteClient(client?: any) {
    this.toggleSidebar("new-client");
  }

  createNewClient(event: any) {
    if (
      this._helpService.getBasicLicense() &&
      this.allClients.length >= this.limitClientsForFreeLicenses
    ) {
      this._toastr.showErrorCustom(
        this._translate.instant("licenses.licenseLimitForClients")
      );
    } else {
      this._service
        .callPostMethod("/api/setClient", event)
        .subscribe((data: any) => {
          this.allClients = null;
          this.onChangeClient(data);
          setTimeout(() => {
            this.getMyClients();
            this.openSidebarForCreteClient();
          }, 100);
        });
    }
  }

  openSidebarForCreteService() {
    this.toggleSidebar("new-service");
  }

  createNewService(event: any) {
    console.log(event);
    this._service.callPostMethod("/api/setService", event).subscribe((data) => {
      this.allServices = null;
      this.onChangeService(data);
      setTimeout(() => {
        this.getMyServices();
        this.openSidebarForCreteService();
      }, 100);
    });
  }

  toggleSidebar(name): void {
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
  }
  //#endregion

  onValueChange(event) {
    this.isDirty = true;
  }
}
