import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

import "hammerjs";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TranslateModule } from "@ngx-translate/core";
import { ToastrModule } from "ngx-toastr"; // For auth after login toast

import { CoreModule } from "@core/core.module";
import { CoreCommonModule } from "@core/common.module";
import { CoreSidebarModule, CoreThemeCustomizerModule } from "@core/components";

import { coreConfig } from "app/app-config";

import { AppComponent } from "app/app.component";
import { LayoutModule } from "app/layout/layout.module";
import { SampleModule } from "app/dashboard/sample/sample.module";
import { CookieModule, CookieService } from "ngx-cookie";
import { CommonModule } from "@angular/common";
import { LoginGuardService } from "./services/login-guard/login-guard.service";
import { LoggedGuard } from "./services/login-guard/logged-guard.service";
import { SuperadminGuardService } from "./services/guards/superadmin-guard.service";

const appRoutes: Routes = [
  {
    path: "dashboard",
    canActivate: [LoginGuardService],
    loadChildren: () =>
      import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
  },
  {
    path: "auth",
    canActivate: [LoggedGuard],
    loadChildren: () =>
      import("./authentification/authentication.module").then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: "**",
    redirectTo: "/dashboard/miscellaneous/error",
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: "enabled",
    }),
    TranslateModule.forRoot(),

    //NgBootstrap
    NgbModule,
    ToastrModule.forRoot(),

    // Core modules
    CoreModule.forRoot(coreConfig),
    CoreCommonModule,
    CoreSidebarModule,
    CoreThemeCustomizerModule,

    // App modules
    LayoutModule,
    SampleModule,
    CookieModule.withOptions(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
