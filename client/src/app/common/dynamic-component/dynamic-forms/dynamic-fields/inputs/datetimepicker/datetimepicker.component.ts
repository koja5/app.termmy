import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../../models/field-config";
import { HelpService } from "app/services/help.service";

@Component({
  selector: "app-datetimepicker",
  templateUrl: "./datetimepicker.component.html",
  styleUrls: ["./datetimepicker.component.scss"],
})
export class DatetimepickerComponent implements OnInit {
  public config: FieldConfig;
  public group: FormGroup;
  public language: any;

  constructor(private helpService: HelpService) {
    this.config = new FieldConfig();
    this.group = new FormGroup({});
  }

  ngOnInit(): void {
    this.language = this.helpService.getLanguage();
    this.initialization();
  }

  initialization() {}
}
