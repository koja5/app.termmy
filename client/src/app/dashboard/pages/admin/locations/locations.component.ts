import { Component } from "@angular/core";

@Component({
  selector: "app-locations",
  templateUrl: "./locations.component.html",
  styleUrls: ["./locations.component.scss"],
})
export class LocationsComponent {
  public path = "grids/admin";
  public file = "my-locations.json";
}
