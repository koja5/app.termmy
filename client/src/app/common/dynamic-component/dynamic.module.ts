import { NgModule } from "@angular/core";
import { UserListComponent } from "./user/user-list/user-list.component";
import { DynamicFormsModule } from "./dynamic-forms/dynamic-forms-module/dynamic-forms.module";
import { DynamicFormsComponent } from "./dynamic-forms/dynamic-forms.component";
import { DynamicGridComponent } from "./dynamic-grid/dynamic-grid.component";
import { CommonModule } from "@angular/common";
import { CoreCommonModule } from "@core/common.module";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgSelectModule } from "@ng-select/ng-select";
import { Ng2FlatpickrModule } from "ng2-flatpickr";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { CorePipesModule } from "@core/pipes/pipes.module";
import { CoreDirectivesModule } from "@core/directives/directives";
import { CoreSidebarModule } from "@core/components";
import { ToastrComponent } from "../toastr/toastr.component";
import { TranslateModule } from "@ngx-translate/core";
import { RouterModule } from "@angular/router";
import { DynamicTabsComponent } from "./dynamic-tabs/dynamic-tabs.component";
import { ContentHeaderModule } from "app/layout/components/content-header/content-header.module";
import { CommonCustomModule } from "../common-custom.module";
import { ExplanationMarkComponent } from "./dynamic-forms/dynamic-fields/common/explanation-mark/explanation-mark.component";

@NgModule({
  declarations: [
    DynamicGridComponent,
    DynamicFormsComponent,
    DynamicTabsComponent,
  ],
  imports: [
    CommonModule,
    DynamicFormsModule,
    CoreCommonModule,
    FormsModule,
    NgbModule,
    NgSelectModule,
    Ng2FlatpickrModule,
    NgxDatatableModule,
    CorePipesModule,
    CoreDirectivesModule,
    CoreSidebarModule,
    TranslateModule,
    RouterModule,
    ContentHeaderModule,
    CommonCustomModule,
  ],
  providers: [ToastrComponent],
  exports: [
    DynamicGridComponent,
    DynamicFormsComponent,
    DynamicTabsComponent,
    ExplanationMarkComponent,
  ],
  entryComponents: [
    DynamicFormsComponent,
    DynamicFormsComponent,
    DynamicTabsComponent,
  ],
})
export class DynamicModule {}
