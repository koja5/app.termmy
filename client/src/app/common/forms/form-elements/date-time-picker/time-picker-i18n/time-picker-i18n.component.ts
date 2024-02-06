import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { NgbTimepicker } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "time-picker-i18n",
  templateUrl: "./time-picker-i18n.component.html",
})
export class TimePickerI18nComponent implements OnInit {
  @Input() public meridian!: boolean;
  @Input() value: any;
  @Input() disabled: boolean;
  @Input() minuteStep: number;
  @Output() changeValue = new EventEmitter<any>();
  @ViewChild("timepicker") timepicker: NgbTimepicker;

  constructor() {}

  ngOnInit(): void {}

  changeHour(event) {
    console.log(event);
  }

  onDateSelected(event) {
    if (event) {
      this.changeValue.emit(event);
    } else {
      this.timepicker.updateMinute("0");
    }
  }
}
