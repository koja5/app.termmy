import { Component } from "@angular/core";

@Component({
  selector: "app-sms-packages",
  templateUrl: "./sms-packages.component.html",
  styleUrls: ["./sms-packages.component.scss"],
})
export class SmsPackagesComponent {
  public path = "grids/superadmin";
  public file = "sms-packages.json";
}
