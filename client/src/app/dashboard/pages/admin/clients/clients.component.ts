import { Component } from "@angular/core";

@Component({
  selector: "app-clients",
  templateUrl: "./clients.component.html",
  styleUrls: ["./clients.component.scss"],
})
export class ClientsComponent {
  public path = "grids/admin";
  public file = "my-clients.json";
}
