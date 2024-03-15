import { Component } from "@angular/core";
import { FieldConfig } from "../../../models/field-config";
import { FormGroup } from "@angular/forms";
import { HelpService } from "app/services/help.service";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";

@Component({
  selector: "app-datepicker",
  templateUrl: "./datepicker.component.html",
  styleUrls: ["./datepicker.component.scss"],
})
export class DatepickerComponent {
  public config: FieldConfig;
  public group: FormGroup;
  public language: any;
  // Private
  private _unsubscribeAll: Subject<any>;

  constructor(private _helpService: HelpService) {
    this.config = new FieldConfig();
    this.group = new FormGroup({});

    // this.group.valueChanges
    //   .pipe(takeUntil(this._unsubscribeAll))
    //   .subscribe((value) => {
    //     console.log(value);
    //   });
  }

  ngOnInit(): void {}

  ngModelChange(event) {
    console.log(this.group);
  }
}
