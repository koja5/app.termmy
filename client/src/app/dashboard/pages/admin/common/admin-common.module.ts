import { NgModule } from "@angular/core";
import { LicenseStatusComponent } from "./license-status/license-status.component";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { CommonCustomModule } from "app/common/common-custom.module";
import { RouterModule } from "@angular/router";
import { SetupAppComponent } from './setup-app/setup-app.component';

@NgModule({
  declarations: [LicenseStatusComponent, SetupAppComponent],
  imports: [CommonModule, TranslateModule, CommonCustomModule, RouterModule],
  providers: [],
  exports: [LicenseStatusComponent, SetupAppComponent],
})
export class AdminCommonModule {}
