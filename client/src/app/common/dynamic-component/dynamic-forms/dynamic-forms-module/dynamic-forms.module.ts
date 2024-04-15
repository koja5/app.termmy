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
import { DatetimepickerComponent } from "../dynamic-fields/inputs/datetimepicker/datetimepicker.component";
import {
  DatePickerModule,
  DateTimePickerModule,
} from "@syncfusion/ej2-angular-calendars";
import { DatepickerComponent } from "../dynamic-fields/inputs/datepicker/datepicker.component";
import { PasswordBoxComponent } from "../dynamic-fields/inputs/text-box/password-box/password-box.component";
import { ColorPickerModule } from "@syncfusion/ej2-angular-inputs";
import { ColorPickerComponent } from "../dynamic-fields/inputs/color-picker/color-picker.component";
import { RadioComponent } from "../dynamic-fields/buttons/radio/radio.component";
import { ExplanationMarkComponent } from "../dynamic-fields/common/explanation-mark/explanation-mark.component";
import { PhonePrefixComponent } from "../dynamic-fields/inputs/phone-prefix/phone-prefix.component";
import { InternationalPhoneModule } from "ng4-intl-phone";
import { Ng2TelInputModule } from "ng2-tel-input";

@NgModule({
  declarations: [
    DynamicFieldsDirective,
    TextBoxComponent,
    PasswordBoxComponent,
    NumericTextboxComponent,
    LabelComponent,
    ButtonComponent,
    SwitchComponent,
    RadioComponent,
    ComboboxComponent,
    MultiselectComponent,
    TimepickerComponent,
    DatepickerComponent,
    DatetimepickerComponent,
    ColorPickerComponent,
    ExplanationMarkComponent,
    PhonePrefixComponent,
  ],
  exports: [
    DynamicFieldsDirective,
    TextBoxComponent,
    PasswordBoxComponent,
    NumericTextboxComponent,
    LabelComponent,
    ButtonComponent,
    SwitchComponent,
    RadioComponent,
    ComboboxComponent,
    MultiselectComponent,
    TimepickerComponent,
    DatepickerComponent,
    DatetimepickerComponent,
    ColorPickerComponent,
    ExplanationMarkComponent,
    PhonePrefixComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgSelectModule,
    TranslateModule,
    DatePickerModule,
    DateTimePickerModule,
    ColorPickerModule,
    InternationalPhoneModule,
    Ng2TelInputModule,
  ],
  entryComponents: [
    DynamicFieldsDirective,
    TextBoxComponent,
    PasswordBoxComponent,
    NumericTextboxComponent,
    LabelComponent,
    ButtonComponent,
    SwitchComponent,
    RadioComponent,
    ComboboxComponent,
    MultiselectComponent,
    TimepickerComponent,
    DatepickerComponent,
    DatetimepickerComponent,
    ColorPickerComponent,
    PhonePrefixComponent,
  ],
})
export class DynamicFormsModule {}
