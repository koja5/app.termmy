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
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { VerifiedMailComponent } from "./other-auth-pages/verified-mail/verified-mail.component";
import { ToastrComponent } from "app/common/toastr/toastr.component";
import { HttpLoaderFactory } from "app/services/httpLoaderFactory";
import { HttpClient } from "@angular/common/http";
import { SelectLanguageComponent } from "./common/select-language/select-language.component";
import { environment } from "../../environments/environment";
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from "@abacritt/angularx-social-login";
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "@abacritt/angularx-social-login";
import {
  MSAL_INSTANCE,
  MsalModule,
  MsalRedirectComponent,
  MsalService,
} from "@azure/msal-angular";
import {
  IPublicClientApplication,
  PublicClientApplication,
} from "@azure/msal-browser";

import { AuthUserComponent } from "./auth-user/auth-user.component";
import { CommonCustomModule } from "app/common/common-custom.module";

const isIE =
  window.navigator.userAgent.indexOf("MSIE ") > -1 ||
  window.navigator.userAgent.indexOf("Trident/") > -1;

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
    path: "login/:lang",
    component: LoginComponent,
    data: { animation: "auth" },
  },
  {
    path: "signup/:lang",
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
  {
    path: "user-auth/:token",
    component: AuthUserComponent,
  },
];

export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: environment.MICROSOFT_CLIENT_ID,
      redirectUri: environment.MICROSOFT_AUTH_URL,
    },
  });
}

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    VerifiedMailComponent,
    SelectLanguageComponent,
    AuthUserComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CoreCommonModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    SocialLoginModule,
    CommonCustomModule,
    MsalModule,
  ],
  providers: [
    ToastrComponent,
    {
      provide: "SocialAuthServiceConfig",
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(environment.GOOGLE_CLIENT_ID),
          },
        ],
        onError: (err) => {
          console.error(err);
        },
      } as SocialAuthServiceConfig,
    },
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory,
    },
    MsalService,
  ],
  bootstrap: [MsalRedirectComponent],
})
export class AuthenticationModule {}
