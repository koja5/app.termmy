import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import {
  NgbDateAdapter,
  NgbDateNativeAdapter,
  NgbDatepickerI18n,
  NgbModal,
} from "@ng-bootstrap/ng-bootstrap";
import { CustomDatepickerI18n } from "app/common/forms/form-elements/date-time-picker/date-picker-i18n/date-picker-i18n.service";
import { I18n } from "app/common/forms/form-elements/date-time-picker/time-picker-i18n/time-picker-i18n.service";
import { HelpService } from "app/services/help.service";
import { CallApiService } from "app/services/call-api.service";
import { ToastrComponent } from "app/common/toastr/toastr.component";
import { FieldConfig } from "app/common/dynamic-component/dynamic-forms/models/field-config";
import { StorageService } from "app/services/storage.service";
import { MessageService } from "app/services/message.service";
import { CanComponentDeactivate } from "app/services/guards/dirtycheck.guard";
import { DialogConfirmComponent } from "app/common/dialog-confirm/dialog-confirm.component";
import { WorkTimeEmpty } from "./work-time-empty";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-worktime",
  templateUrl: "./worktime.component.html",
  styleUrls: ["./worktime.component.scss"],
  providers: [{ provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }],
})
export class WorktimeComponent implements OnInit, CanComponentDeactivate {
  @ViewChild("dialogConfirm") dialogConfirm: DialogConfirmComponent;
  @ViewChild("modalForm") modalForm: TemplateRef<any>;
  public modalDialog: any;
  public value: any;
  public data: any = {};
  public model: any;
  public notCorrectTime = [];
  public worktimeColor = "#000";
  public loader = false;
  public config = new FieldConfig();
  public isDirty = false;
  public allData: any;
  public selectedWorkTime: any;
  public newValidFromDate: any;
  public loader1 = false;
  public user: any;

  constructor(
    private _helpService: HelpService,
    private _service: CallApiService,
    private _toastr: ToastrComponent,
    private _storageService: StorageService,
    private _messageService: MessageService,
    private _modalService: NgbModal,
    private _activatedRouter: ActivatedRoute
  ) {}

  unsavedChanges(): boolean {
    return this.isDirty;
  }

  setIsDirty() {
    this.isDirty = true;
  }

  ngOnInit(): void {
    this.getUserById();
    this.getWorktimeForEmployee();
    this.config.minuteStep = 30;
  }

  getWorktimeForEmployee() {
    this.loader = true;
    this._service
      .callGetMethod(
        "/api/getWorktimeForEmployee",
        this._activatedRouter.snapshot.params.id
      )
      .subscribe((data: any) => {
        if (data && data.length) {
          this.allData = data;
          this.setActiveWorkTime();
        } else {
          this.allData = [];
          this.data = new WorkTimeEmpty();
        }
        this.loader = false;
      });
  }

  getUserById() {
    this._service
      .callGetMethod(
        "/api/getUserById",
        this._activatedRouter.snapshot.params.id
      )
      .subscribe((data) => {
        this.user = data;
      });
  }

  setActiveWorkTime() {
    let ind = 1;
    if (this.allData) {
      for (let i = 0; i < this.allData.length; i++) {
        if (this.allData[i].active) {
          this.data = this.allData[i];
          this.data.value = this._helpService.convertStringToJson(
            this.allData[i].value
          );
          ind = 0;
          break;
        }
      }
    }
    if (ind) {
      this.data = new WorkTimeEmpty();
    }
  }

  changeValue(event: any) {
    this.value = event;
  }

  addNewWorkTimeForDay(index: number) {
    this.setIsDirty();
    this.data.value[index].times.push({ start: null, end: null });
  }

  removeWorkTimeForDay(i: number, j: number) {
    this.setIsDirty();
    if (this.data.value[i].times.length > 1) {
      this.data.value[i].times.splice(j, 1);
    }
  }

  validateEntry(i: number, j: number) {
    this.setIsDirty();
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
    this.isDirty = false;
    if (this.validBeforeSave()) {
      this.data.user_id = this._activatedRouter.snapshot.params.id;
      this._service
        .callPostMethod("/api/setWorktimeForEmployee", this.data)
        .subscribe(
          (data) => {
            if (data) {
              this._toastr.showSuccess();
              this.sendInfoForSetupApp();
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

  sendInfoForSetupApp() {
    if (this._storageService.getSessionStorage("setup")) {
      let setup = this._storageService.getSessionStorage("setup");
      let setupOld = this._helpService.copyObject(setup);
      setup.worktime = true;
      if (JSON.stringify(this.data) !== JSON.stringify(new WorkTimeEmpty())) {
        this._messageService.sendSetupApp(setup);
      }
    }
  }

  onChange(event: any) {
    this.data = event;
    this.data.value = this._helpService.convertStringToJson(event.value);
  }

  deleteWorkTime() {
    this._service
      .callPostMethod("/api/deleteWorkTime", this.data)
      .subscribe((data) => {
        if (data) {
          this.ngOnInit();
          this._toastr.showSuccess();
        }
      });
  }

  changeNewValidFromDate(event: any) {
    console.log(event);
    this.newValidFromDate = event.value;
  }

  addNewValidFormWorktime() {
    this.modalDialog = this._modalService.open(this.modalForm, {
      centered: true,
      windowClass: "modal modal-default",
      size: "sm",
    });
  }

  startWithNewValidFromDate() {
    this.loader1 = true;
    setTimeout(() => {
      this.data = new WorkTimeEmpty();
      this.data["valid_from"] = this.newValidFromDate;
      this.allData.push(this.data);
      this.loader1 = false;
      this.modalDialog.close();
    }, 10);
  }
}
