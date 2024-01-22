import { Component } from "@angular/core";

@Component({
  selector: "app-admin-settings",
  templateUrl: "./admin-settings.component.html",
  styleUrls: ["./admin-settings.component.scss"],
})
export class AdminSettingsComponent {
  //public
  public path = "pages/admin";
  public file = "admin-settings.json";
}
