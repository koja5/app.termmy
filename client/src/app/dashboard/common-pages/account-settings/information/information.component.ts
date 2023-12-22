import { Component } from "@angular/core";

@Component({
  selector: "app-information",
  templateUrl: "./information.component.html",
  styleUrls: ["./information.component.scss"],
})
export class InformationComponent {
  public path = "pages/account-settings";
  public file = "information.json";
}
