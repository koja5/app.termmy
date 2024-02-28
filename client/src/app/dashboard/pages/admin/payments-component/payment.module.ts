import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { BuyMoreSmsComponent } from "./buy-more-sms/buy-more-sms.component";
import { TranslateModule } from "@ngx-translate/core";
import { CommonCustomModule } from "app/common/common-custom.module";
import { FormsModule } from "@angular/forms";
import { DynamicModule } from "app/common/dynamic-component/dynamic.module";

const routes = [
  {
    path: "buy-more-sms",
    component: BuyMoreSmsComponent,
  },
];

@NgModule({
  declarations: [BuyMoreSmsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule,
    CommonCustomModule,
    DynamicModule
  ],
  providers: [],
  exports: [RouterModule],
})
export class PaymentModule {}
