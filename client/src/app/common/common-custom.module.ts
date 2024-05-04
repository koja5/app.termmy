import { NgModule } from "@angular/core";
import { LoaderComponent } from "./loader/loader.component";
import { Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { PaymentProcessingComponent } from "./payment-processing/payment-processing.component";
import { NgxStripeModule } from "ngx-stripe";
import { environment } from "environments/environment";
import { TranslateModule } from "@ngx-translate/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoaderSmallComponent } from "./loader-small/loader-small.component";
import { DialogConfirmComponent } from "./dialog-confirm/dialog-confirm.component";
import { CoreCommonModule } from "@core/common.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { LetterProfileComponent } from "./letter-profile/letter-profile.component";
import { CardTemplateComponent } from "./card-template/card-template.component";
import { NoDataComponent } from "./no-data/no-data.component";

const appRoutes: Routes = [];

@NgModule({
  declarations: [
    LoaderComponent,
    PaymentProcessingComponent,
    LoaderSmallComponent,
    DialogConfirmComponent,
    LetterProfileComponent,
    CardTemplateComponent,
    NoDataComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    NgxStripeModule.forRoot(environment.STRIPE_KEY),
    FormsModule,
    ReactiveFormsModule,
    CoreCommonModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [],
  exports: [
    LoaderComponent,
    PaymentProcessingComponent,
    LoaderSmallComponent,
    DialogConfirmComponent,
    LetterProfileComponent,
    CardTemplateComponent,
    NoDataComponent,
  ],
})
export class CommonCustomModule {}
