import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DynamicFieldsDirective } from "../dynamic-fields/dynamic-fields.directive";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { TextBoxComponent } from "../dynamic-fields/inputs/text-box/text-box.component";
import { LabelComponent } from "../dynamic-fields/label/label.component";
import { ButtonComponent } from "../dynamic-fields/buttons/button/button.component";
import { SwitchComponent } from "../dynamic-fields/buttons/switch/switch.component";
import { ComboboxComponent } from "../dynamic-fields/dropdowns/combobox/combobox.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgSelectModule } from "@ng-select/ng-select";
import { MultiselectComponent } from "../dynamic-fields/dropdowns/multiselect/multiselect.component";

@NgModule({
  declarations: [
    DynamicFieldsDirective,
    TextBoxComponent,
    LabelComponent,
    ButtonComponent,
    SwitchComponent,
    ComboboxComponent,
    MultiselectComponent,
  ],
  exports: [
    DynamicFieldsDirective,
    TextBoxComponent,
    LabelComponent,
    ButtonComponent,
    SwitchComponent,
    ComboboxComponent,
    MultiselectComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgSelectModule,
  ],
  entryComponents: [
    DynamicFieldsDirective,
    TextBoxComponent,
    LabelComponent,
    ButtonComponent,
    SwitchComponent,
    ComboboxComponent,
    MultiselectComponent,
  ],
})
export class DynamicFormsModule {}
