import { Component, ViewChild } from "@angular/core";
import { DynamicFormsComponent } from "app/common/dynamic-component/dynamic-forms/dynamic-forms.component";
import { CanComponentDeactivate } from "app/services/guards/dirtycheck.guard";

@Component({
  selector: "app-information",
  templateUrl: "./information.component.html",
  styleUrls: ["./information.component.scss"],
})
export class InformationComponent implements CanComponentDeactivate {
  @ViewChild("form") form: DynamicFormsComponent;
  public path = "pages/account-settings";
  public file = "information.json";

  unsavedChanges(): boolean {
    return this.form.unsavedChanges();
  }
}
