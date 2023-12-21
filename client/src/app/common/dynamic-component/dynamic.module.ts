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

@NgModule({
  declarations: [DynamicGridComponent, DynamicFormsComponent],
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
  ],
  providers: [],
  exports: [DynamicGridComponent, DynamicFormsComponent],
  entryComponents: [DynamicFormsComponent, DynamicFormsComponent],
})
export class DynamicModule {}
