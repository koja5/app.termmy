import { Component, Input } from "@angular/core";

@Component({
  selector: "app-letter-profile",
  templateUrl: "./letter-profile.component.html",
  styleUrls: ["./letter-profile.component.scss"],
})
export class LetterProfileComponent {
  @Input() firstname: string;
  @Input() lastname: string;

  public initiale!: string;

  ngOnInit() {
    this.generateInitial();
  }

  ngOnChanges() {
    this.generateInitial();
  }

  generateInitial() {
    if (this.firstname && this.lastname) {
      this.initiale =
        this.firstname.charAt(0).toUpperCase() +
        this.lastname.charAt(0).toUpperCase();
    } else if (this.firstname && !this.lastname) {
      this.initiale =
        this.firstname.charAt(0).toUpperCase() +
        this.firstname.charAt(1).toUpperCase();
    } else if (!this.firstname && this.lastname) {
      this.initiale =
        this.lastname.charAt(0).toUpperCase() +
        this.lastname.charAt(1).toUpperCase();
    } else {
      this.initiale = "NN";
    }
  }
}
