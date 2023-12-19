import { NgModule } from "@angular/core";
import { CheckboxModule } from "./checkbox/checkbox.module";
import { DateTimePickerModule } from "./date-time-picker/date-time-picker.module";
import { InputModule } from "./input/input.module";
import { InputGroupsModule } from "./input-groups/input-groups.module";
import { NumberInputModule } from "./number-input/number-input.module";
import { RadioModule } from "./radio/radio.module";
import { SelectModule } from "./select/select.module";
import { TextareaModule } from "./textarea/textarea.module";
import { SwitchModule } from "./switch/switch.module";
import { InputMaskModule } from "./input-mask/input-mask.module";
import { FileUploaderModule } from "./file-uploader/file-uploader.module";
import { QuillEditorModule } from "./quill-editor/quill-editor.module";
import { FlatpickrModule } from "./flatpickr/flatpickr.module";

@NgModule({
  declarations: [],
  imports: [
    CheckboxModule,
    DateTimePickerModule,
    InputModule,
    InputGroupsModule,
    NumberInputModule,
    RadioModule,
    SelectModule,
    SwitchModule,
    TextareaModule,
    InputMaskModule,
    FileUploaderModule,
    QuillEditorModule,
    FlatpickrModule,
  ],
  exports: [
    CheckboxModule,
    DateTimePickerModule,
    InputModule,
    InputGroupsModule,
    NumberInputModule,
    RadioModule,
    SelectModule,
    SwitchModule,
    TextareaModule,
    InputMaskModule,
    FileUploaderModule,
    QuillEditorModule,
    FlatpickrModule,
  ],
})
export class FormElementsModule {}
