import { Component } from "@angular/core";

@Component({
  selector: "app-general",
  templateUrl: "./general.component.html",
  styleUrls: ["./general.component.scss"],
})
export class GeneralComponent {
  public path = "pages/account-settings";
  public file = "general.json";

  public avatarImage: any =
    "../../../../../assets/images/portrait/small/avatar-s-11.jpg";

  // uploadImage(event: any) {
  //   if (event.target.files && event.target.files[0]) {
  //     let reader = new FileReader();

  //     reader.onload = (event: any) => {
  //       this.avatarImage = event.target.result;
  //     };

  //     reader.readAsDataURL(event.target.files[0]);
  //   }
  // }
}
