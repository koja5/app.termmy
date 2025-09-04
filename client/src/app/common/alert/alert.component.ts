import { Component, Input } from "@angular/core";

@Component({
  selector: "app-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.scss"],
  standalone: false
})
export class AlertComponent {
  @Input() type: string;
  @Input() dismissible: boolean = false;
  @Input() title: string;
  @Input() text: string;
}
