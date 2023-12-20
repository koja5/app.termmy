import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

import { NgbDateStruct, NgbDatepickerI18n } from "@ng-bootstrap/ng-bootstrap";

import { I18n, CustomDatepickerI18n } from "./date-picker-i18n.service";

@Component({
  selector: "date-picker-i18n",
  templateUrl: "./date-picker-i18n.component.html",
  providers: [
    I18n,
    { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n },
  ],
})
export class DatePickerI18nComponent implements OnInit {
  @Input() disabled: boolean;
  @Output() changeValue = new EventEmitter<any>();
  public value: any;
  public i18nDPdata: NgbDateStruct;

  constructor() {}

  ngOnInit() {}

  onDateSelected() {
    this.changeValue.emit(this.value);
  }
}
