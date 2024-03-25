import { Component } from "@angular/core";

@Component({
  selector: "app-licenses",
  templateUrl: "./licenses.component.html",
  styleUrls: ["./licenses.component.scss"],
})
export class LicensesComponent {
  public path = "grids/superadmin";
  public file = "licenses.json";
}
