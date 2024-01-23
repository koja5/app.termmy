import { NgModule } from "@angular/core";
import { LoaderComponent } from "./loader/loader.component";
import { Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

const appRoutes: Routes = [];

@NgModule({
  declarations: [LoaderComponent],
  imports: [CommonModule],
  providers: [],
  bootstrap: [],
  exports: [LoaderComponent],
})
export class CommonCustomModule {}
