import { Component, OnInit } from "@angular/core";
import {
  NgbDateAdapter,
  NgbDateNativeAdapter,
  NgbDatepickerI18n,
} from "@ng-bootstrap/ng-bootstrap";
import { CustomDatepickerI18n } from "app/common/forms/form-elements/date-time-picker/date-picker-i18n/date-picker-i18n.service";
import { I18n } from "app/common/forms/form-elements/date-time-picker/time-picker-i18n/time-picker-i18n.service";
import { WorkTimeEmpty } from "./work-time-empty";
import { HelpService } from "app/services/help.service";
import { CallApiService } from "app/services/call-api.service";
import { ToastrComponent } from "app/common/toastr/toastr.component";

@Component({
  selector: "app-worktime",
  templateUrl: "./worktime.component.html",
  styleUrls: ["./worktime.component.scss"],
  providers: [{ provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }],
})
export class WorktimeComponent implements OnInit {
  public value: any;
  public data: any = {};
  public model: any;
  public notCorrectTime = [];
  public worktimeColor = '#000';

  constructor(
    private _helpService: HelpService,
    private _service: CallApiService,
    private _toastr: ToastrComponent
  ) {}

  ngOnInit(): void {
    this._service
      .callGetMethod("/api/getWorktime", "")
      .subscribe((data: any) => {
        if (data && data.length) {
          this.data = data[0];
          this.data.value = this._helpService.convertStringToJson(
            data[0].value
          );
        } else {
          this.data = WorkTimeEmpty;
        }
      });
  }

  changeValue(event: any) {
    this.value = event;
  }

  addNewWorkTimeForDay(index: number) {
    this.data.value[index].times.push({ start: null, end: null });
  }

  removeWorkTimeForDay(i: number, j: number) {
    if (this.data.value[i].times.length > 1) {
      this.data.value[i].times.splice(j, 1);
    }
  }

  validateEntry(i: number, j: number) {
    if (
      this.data.value[i].times[j].start.hour &&
      this.data.value[i].times[j].end
    ) {
      if (
        this._helpService.converToMiliseconds(
          this.data.value[i].times[j].start.hour,
          this.data.value[i].times[j].start.minute,
          this.data.value[i].times[j].start.seconds
        ) >
        this._helpService.converToMiliseconds(
          this.data.value[i].times[j].end.hour,
          this.data.value[i].times[j].end.minute,
          this.data.value[i].times[j].end.seconds
        )
      ) {
        this.notCorrectTime[i] = "NOT CORRECT";
      } else {
        this.notCorrectTime[i] = null;
      }
    } else if (j > 0) {
      if (
        this._helpService.converToMiliseconds(
          this.data.value[i].times[j - 1].end.hour,
          this.data.value[i].times[j - 1].end.minute,
          this.data.value[i].times[j - 1].end.seconds
        ) >
        this._helpService.converToMiliseconds(
          this.data.value[i].times[j].start.hour,
          this.data.value[i].times[j].start.minute,
          this.data.value[i].times[j].start.seconds
        )
      ) {
        this.notCorrectTime[i] = "NOT CORRECT";
      } else {
        this.notCorrectTime[i] = null;
      }
    } else {
      this.notCorrectTime[i] = null;
    }
  }

  validBeforeSave() {
    for (let i = 0; i < this.notCorrectTime.length; i++) {
      if (this.notCorrectTime[i]) {
        return false;
      }
    }
    return true;
  }

  saveWorkTime() {
    if (this.validBeforeSave()) {
      this._service.callPostMethod("/api/setWorktime", this.data).subscribe(
        (data) => {
          console.log(data);
          if (data) {
            this._toastr.showSuccess();
          }
        },
        (error) => {
          this._toastr.showError();
        }
      );
    } else {
      this._toastr.showWarning();
    }
  }
}
