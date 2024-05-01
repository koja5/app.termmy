import { Component, ViewEncapsulation } from "@angular/core";
import { CallApiService } from "app/services/call-api.service";

@Component({
  selector: "app-clients-mobile-view",
  templateUrl: "./clients-mobile-view.component.html",
  styleUrls: ["./clients-mobile-view.component.scss"],
})
export class ClientsMobileViewComponent {
  public data: any;

  constructor(private _service: CallApiService) {}

  ngOnInit() {
    this._service.callGetMethod("api/getMyClients", "").subscribe((data) => {
      this.data = data;
    });
  }
}
