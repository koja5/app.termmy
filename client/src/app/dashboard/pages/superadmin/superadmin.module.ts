import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { AllUsersComponent } from "./all-users/all-users.component";
import { UserModule } from "app/common/dynamic-component/user/user.module";

const routes = [
  {
    path: "all-users",
    component: AllUsersComponent,
  },
];

@NgModule({
  declarations: [AllUsersComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UserModule],
  providers: [],
  exports: [RouterModule],
})
export class SuperadminModule {}
