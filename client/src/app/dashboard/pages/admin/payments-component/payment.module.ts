import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { BuyMoreSmsComponent } from "./buy-more-sms/buy-more-sms.component";
import { TranslateModule } from "@ngx-translate/core";

const routes = [
  {
    path: "buy-more-sms",
    component: BuyMoreSmsComponent,
  },
];

@NgModule({
  declarations: [BuyMoreSmsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), TranslateModule],
  providers: [],
  exports: [RouterModule],
})
export class PaymentModule {}
