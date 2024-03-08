import { NgModule } from "@angular/core";
import { LicenseStatusComponent } from "./license-status/license-status.component";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { CommonCustomModule } from "app/common/common-custom.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [LicenseStatusComponent],
  imports: [CommonModule, TranslateModule, CommonCustomModule, RouterModule],
  providers: [],
  exports: [LicenseStatusComponent],
})
export class AdminCommonModule {}
