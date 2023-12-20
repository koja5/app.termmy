import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "time-picker-i18n",
  templateUrl: "./time-picker-i18n.component.html",
})
export class TimePickerI18nComponent implements OnInit {
  @Input() public meridian!: boolean;
  @Input() value: any;
  @Input() disabled: boolean;
  @Output() changeValue = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onDateSelected(event) {
    if (event) {
      this.changeValue.emit(event);
    }
  }
}
