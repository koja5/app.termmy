import { Component } from "@angular/core";

@Component({
  selector: "app-all-users",
  templateUrl: "./all-users.component.html",
  styleUrls: ["./all-users.component.scss"],
})
export class AllUsersComponent {
  public path = "grids/superadmin";
  public file = "superadmin-all-users.json";
}
