import { Component, OnInit } from "@angular/core";
import {
  NgbDateAdapter,
  NgbDateNativeAdapter,
  NgbDatepickerI18n,
} from "@ng-bootstrap/ng-bootstrap";
import { CustomDatepickerI18n } from "app/common/forms/form-elements/date-time-picker/date-picker-i18n/date-picker-i18n.service";
import { I18n } from "app/common/forms/form-elements/date-time-picker/time-picker-i18n/time-picker-i18n.service";

@Component({
  selector: "app-worktime",
  templateUrl: "./worktime.component.html",
  styleUrls: ["./worktime.component.scss"],
  providers: [{ provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }],
})
export class WorktimeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
