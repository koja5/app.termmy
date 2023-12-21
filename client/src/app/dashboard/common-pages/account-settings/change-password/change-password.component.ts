import { Component } from "@angular/core";

@Component({
  selector: "app-change-password",
  templateUrl: "./change-password.component.html",
  styleUrls: ["./change-password.component.scss"],
})
export class ChangePasswordComponent {
  public path = "pages/account-settings";
  public file = "change-password.json";
}
