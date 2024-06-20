import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { DynamicFormsComponent } from "app/common/dynamic-component/dynamic-forms/dynamic-forms.component";
import { ComponentCanDeactivate } from "app/interfaces/component-can-deactivate";
import { Observable } from "rxjs";

export interface CanComponentDeactivate {
  unsavedChanges(): boolean;
}

@Injectable({
  providedIn: "root",
})
export class DirtycheckGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(
    component: CanComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (component.unsavedChanges()) {
      return confirm("You have unsaved changes?");
    }
    // return component.canDeactivate();
  }
}
