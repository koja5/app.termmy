import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "app/common/dynamic-component/dynamic-forms/models/field-config";

@Component({
  selector: "app-password-box",
  templateUrl: "./password-box.component.html",
  styleUrls: ["./password-box.component.scss"],
})
export class PasswordBoxComponent {
  public config: FieldConfig;
  public group: FormGroup;
  public basicPwdShow = false;
  constructor() {
    this.config = new FieldConfig();
    this.group = new FormGroup({});
  }

  ngOnInit(): void {}
}
