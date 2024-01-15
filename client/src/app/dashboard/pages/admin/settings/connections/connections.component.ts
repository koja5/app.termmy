import { Component } from "@angular/core";
import { CallApiService } from "app/services/call-api.service";

@Component({
  selector: "app-connections",
  templateUrl: "./connections.component.html",
  styleUrls: ["./connections.component.scss"],
})
export class ConnectionsComponent {
  public data: any;

  constructor(private _service: CallApiService) {}

  ngOnInit() {
    this._service
      .callGetMethod("api/getExternalAccount", "")
      .subscribe((data: any) => {
        if (data.length) {
          this.data = data[0];
        }
      });
  }

  connectToGoogle() {
    this._service
      .callGetMethod("/api/google/login", "")
      .subscribe((data: string) => {
        window.close();
        window.open(data);
      });
  }

  disconnectFromGoogle () {}
}
