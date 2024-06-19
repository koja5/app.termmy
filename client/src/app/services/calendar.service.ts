import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HelpService } from "./help.service";
import { CallApiService } from "./call-api.service";
import { StorageService } from "./storage.service";
import { CalendarSettings } from "app/models/calendar-settings";

@Injectable({
  providedIn: "root",
})
export class CalendarService {
  private headers: HttpHeaders;

  constructor(
    private http: HttpClient,
    private helpService: HelpService,
    private _service: CallApiService,
    private _storageService: StorageService
  ) {
    this.headers = new HttpHeaders();
  }

  //#region GOOGLE SERVICES

  updateTermineForGoogleCalendar(event) {
    return this._service.callPostMethod("/api/google/updateTermine", event);
  }

  //#endregion

  //#region MICROSOFT SERVICES

  createTermineForMicrosoftCalendar(termine) {
    return this._service.callPostMethod(
      "/api/microsoft/createTermine",
      termine
    );
  }

  updateTermineForMicrosoftCalendar(termine) {
    return this._service.callPostMethod(
      "/api/microsoft/updateTermine",
      termine
    );
  }

  getMyTerminesFromMicrosoftCalendar(id: string) {
    return this._service.callGetMethod("/api/microsoft/getTermines", id);
  }

  packTerminesFromMicrosoftCalendar(
    termines: any,
    calendarSettings: CalendarSettings,
    employeeId?: number
  ) {
    let prepactedTermines = [];
    for (let i = 0; i < termines.length; i++) {
      const data = this.getMoreDetails(termines[i].body.content);

      prepactedTermines.push({
        Subject: data.Subject
          ? data.Subject
          : termines[i].subject
          ? termines[i].subject
          : "",
        StartTime: termines[i].start.date
          ? termines[i].start.date
          : this.convertUTCDateToLocalDate(
              new Date(
                data.StartTime != termines[i].start.dateTime
                  ? new Date(termines[i].start.dateTime).toLocaleString("en-US")
                  : data.StartTime
              )
            ),
        EndTime: termines[i].end.date
          ? termines[i].end.date
          : this.convertUTCDateToLocalDate(
              new Date(
                data.EndTime != termines[i].end.dateTime
                  ? new Date(termines[i].end.dateTime).toLocaleString("en-US")
                  : data.EndTime
              )
            ),
        description: data.description,
        id: termines[i].id,
        employeeId: data.employeeId
          ? data.employeeId
          : this._storageService.getUserId(),
        externalCalendar: data.externalCalendar
          ? data.externalCalendar
          : calendarSettings.externalAccounts[employeeId]
          ? calendarSettings.externalAccounts[employeeId].google
          : calendarSettings.externalAccounts.google,
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

    return prepactedTermines;
  }

  convertUTCDateToLocalDate(date) {
    var newDate = new Date(
      date.getTime() + date.getTimezoneOffset() * 60 * 1000
    );

    var offset = date.getTimezoneOffset() / 60;
    var hours = date.getHours();

    newDate.setHours(hours - offset);

    return newDate;
  }

  //#endregion

  //#region HEPFUL FUNCTION

  getMoreDetails(details: any) {
    if (details && typeof details === "object") {
      return details;
    } else if (details && details.startsWith("{") && details.endsWith("}")) {
      return JSON.parse(details);
    } else {
      return {};
    }
  }

  //#endregion
}
