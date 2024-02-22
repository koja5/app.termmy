import { Component } from "@angular/core";

@Component({
  selector: "app-booking-settings",
  templateUrl: "./booking-settings.component.html",
  styleUrls: ["./booking-settings.component.scss"],
})
export class BookingSettingsComponent {
  public path = "pages/admin/admin-settings";
  public file = "booking-settings.json";
  public disableEdit = false;

  onChangeData(event: any) {
    if(event.active) {
      this.disableEdit = true;
    }
  }
}
