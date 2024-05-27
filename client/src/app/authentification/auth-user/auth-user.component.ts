import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { StorageService } from "app/services/storage.service";

@Component({
  selector: "app-auth-user",
  templateUrl: "./auth-user.component.html",
  styleUrls: ["./auth-user.component.scss"],
})
export class AuthUserComponent {
  constructor(
    private _activatedRouter: ActivatedRoute,
    private _storageService: StorageService,
    private _router: Router
  ) {}

  ngOnInit() {
    const token = this._activatedRouter.snapshot.params.token;
    // console.log(token);
    if (token) {
      this._storageService.setToken(token);
      // this._router.navigate(["dashboard/admin"]);
      window.open("dashboard/admin", "_self");
    }
  }
}
