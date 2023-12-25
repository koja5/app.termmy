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
import { TimepickerComponent } from "../dynamic-fields/inputs/timepicker/timepicker.component";
import { NumericTextboxComponent } from "../dynamic-fields/inputs/numeric-textbox/numeric-textbox.component";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [
    DynamicFieldsDirective,
    TextBoxComponent,
    NumericTextboxComponent,
    LabelComponent,
    ButtonComponent,
    SwitchComponent,
    ComboboxComponent,
    MultiselectComponent,
    TimepickerComponent,
  ],
  exports: [
    DynamicFieldsDirective,
    TextBoxComponent,
    NumericTextboxComponent,
    LabelComponent,
    ButtonComponent,
    SwitchComponent,
    ComboboxComponent,
    MultiselectComponent,
    TimepickerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgSelectModule,
    TranslateModule,
  ],
  entryComponents: [
    DynamicFieldsDirective,
    TextBoxComponent,
    NumericTextboxComponent,
    LabelComponent,
    ButtonComponent,
    SwitchComponent,
    ComboboxComponent,
    MultiselectComponent,
    TimepickerComponent,
  ],
})
export class DynamicFormsModule {}
