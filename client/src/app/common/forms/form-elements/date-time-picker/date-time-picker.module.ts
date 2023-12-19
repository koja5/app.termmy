import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { CoreCommonModule } from "@core/common.module";
import { CardSnippetModule } from "@core/components/card-snippet/card-snippet.module";
import { ContentHeaderModule } from "app/layout/components/content-header/content-header.module";

import { DateTimePickerComponent } from "./date-time-picker.component";
import { TimePickerI18nModule } from "./time-picker-i18n/time-picker-i18n.module";
import { DatePickerI18nModule } from "./date-picker-i18n/date-picker-i18n.module";

const routes: Routes = [
  {
    path: "form-elements/date-time-picker",
    component: DateTimePickerComponent,
    data: { animation: "date-time-picker" },
  },
];

@NgModule({
  declarations: [DateTimePickerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CoreCommonModule,
    NgbModule,
    ContentHeaderModule,
    CardSnippetModule,
    FormsModule,
    TimePickerI18nModule,
    DatePickerI18nModule,
    ReactiveFormsModule,
  ],
})
export class DateTimePickerModule {}
