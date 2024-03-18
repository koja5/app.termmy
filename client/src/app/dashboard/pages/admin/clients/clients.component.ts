import { Component } from "@angular/core";
import { CallApiService } from "app/services/call-api.service";

@Component({
  selector: "app-clients",
  templateUrl: "./clients.component.html",
  styleUrls: ["./clients.component.scss"],
})
export class ClientsComponent {
  public path = "grids/admin";
  public file = "my-clients.json";
  public externalAccounts: any;

  constructor(private _service: CallApiService) {}

  ngOnInit() {
    this._service
      .callGetMethod("/api/getExternalAccounts", "")
      .subscribe((data: any) => {
        if (data.length) {
          this.externalAccounts = data[0];
        }
      });
  }
}
