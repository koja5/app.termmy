import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DynamicModule } from "app/common/dynamic-component/dynamic.module";
import { OnlinePaymentComponent } from "./online-payment/online-payment.component";
import { TranslateModule } from "@ngx-translate/core";

const routes = [
  {
    path: "online-payment",
    component: OnlinePaymentComponent,
  },
];

@NgModule({
  declarations: [OnlinePaymentComponent],
  imports: [CommonModule, RouterModule.forChild(routes), TranslateModule],
  providers: [],
  exports: [RouterModule, DynamicModule],
})
export class AdminSettingsModule {}
