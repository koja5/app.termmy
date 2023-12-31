import { Component } from "@angular/core";
import { FieldConfig } from "../../../models/field-config";
import { FormGroup } from "@angular/forms";
import { HelpService } from "app/services/help.service";

@Component({
  selector: "app-datepicker",
  templateUrl: "./datepicker.component.html",
  styleUrls: ["./datepicker.component.scss"],
})
export class DatepickerComponent {
  public config: FieldConfig;
  public group: FormGroup;
  public language: any;

  constructor(private _helpService: HelpService) {
    this.config = new FieldConfig();
    this.group = new FormGroup({});
  }

  ngOnInit(): void {}
}
