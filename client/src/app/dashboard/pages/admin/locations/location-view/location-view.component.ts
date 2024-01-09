import { Component } from "@angular/core";

@Component({
  selector: "app-location-view",
  templateUrl: "./location-view.component.html",
  styleUrls: ["./location-view.component.scss"],
})
export class LocationViewComponent {
  // public
  public path = "pages/admin";
  public file = "location-view.json";
}
