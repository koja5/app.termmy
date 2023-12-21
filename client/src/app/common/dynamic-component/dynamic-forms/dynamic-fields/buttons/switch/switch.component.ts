import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../../models/field-config";
import { HelpService } from "app/services/help.service";

@Component({
  selector: "app-switch",
  templateUrl: "./switch.component.html",
  styleUrls: ["./switch.component.scss"],
})
export class SwitchComponent implements OnInit {
  public config: FieldConfig;
  public group: FormGroup;
  public language: any;

  constructor(private helpService: HelpService) {
    this.config = new FieldConfig();
    this.group = new FormGroup({});
  }

  ngOnInit(): void {
    this.language = this.helpService.getLanguage();
    console.log(this.config);
    console.log(this.group.get("active"));
  }

  checkRights() {
    return this.helpService.checkRights(this.config?.rights);
  }
}
