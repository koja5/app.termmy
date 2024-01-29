import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { CoreCommonModule } from "@core/common.module";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { TranslateModule } from "@ngx-translate/core";
import { VerifiedMailComponent } from "./other-auth-pages/verified-mail/verified-mail.component";

// routing
const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "login",
    component: LoginComponent,
    data: { animation: "auth" },
  },
  {
    path: "signup",
    component: SignupComponent,
    data: { animation: "auth" },
  },
  {
    path: "forgot-password",
    component: ForgotPasswordComponent,
  },
  {
    path: "reset-password/:email",
    component: ResetPasswordComponent,
  },
  {
    path: "verified-mail/:email",
    component: VerifiedMailComponent,
  },
];

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    VerifiedMailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CoreCommonModule,
    TranslateModule,
  ],
  providers: [],
})
export class AuthenticationModule {}
