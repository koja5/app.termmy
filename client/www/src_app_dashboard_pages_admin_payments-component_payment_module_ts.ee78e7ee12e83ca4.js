"use strict";
(self["webpackChunktermmy"] = self["webpackChunktermmy"] || []).push([["src_app_dashboard_pages_admin_payments-component_payment_module_ts"],{

/***/ 42806:
/*!*************************************************************************************************!*\
  !*** ./src/app/dashboard/pages/admin/payments-component/buy-more-sms/buy-more-sms.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuyMoreSmsComponent": () => (/* binding */ BuyMoreSmsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_services_call_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/services/call-api.service */ 79992);
/* harmony import */ var app_services_help_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/services/help.service */ 59993);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _common_payment_processing_payment_processing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../common/payment-processing/payment-processing.component */ 19274);
/* harmony import */ var _common_dynamic_component_dynamic_grid_dynamic_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../common/dynamic-component/dynamic-grid/dynamic-grid.component */ 99361);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 33935);









function BuyMoreSmsComponent_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td")(8, "div", 13)(9, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function BuyMoreSmsComponent_tr_27_Template_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.selectedSmsPrice = $event);
    })("click", function BuyMoreSmsComponent_tr_27_Template_input_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const item_r2 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.selectSmsPackage(item_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r2.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r2.count, " SMS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r2.price, " \u20AC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("id", item_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", item_r2.price)("ngModel", ctx_r0.selectedSmsPrice)("checked", ctx_r0.selectedSmsPrice == item_r2.price ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("for", item_r2.name);
  }
}
function BuyMoreSmsComponent_div_28_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19)(1, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r6._helpService.replaceText(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, "buyMoreSms.successfullyBoughtNewSms"), "#count", ctx_r6.selectedSmsPackage.count));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 4, "buyMoreSms.backToSmsReminder"));
  }
}
function BuyMoreSmsComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16)(1, "app-payment-processing", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("executeMethodEmitter", function BuyMoreSmsComponent_div_28_Template_app_payment_processing_executeMethodEmitter_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r7.executeMethod($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, BuyMoreSmsComponent_div_28_div_3_Template, 8, 6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("amount", ctx_r1.selectedSmsPrice)("buttonText", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 3, "buyMoreSms.buySmsButton"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.successfullyBoughtNewSms);
  }
}
class BuyMoreSmsComponent {
  constructor(_service, _helpService) {
    this._service = _service;
    this._helpService = _helpService;
    this.path = "grids/admin";
    this.file = "sms-payments.json";
    this.successfullyBoughtNewSms = false;
  }
  ngOnInit() {
    this._service.callGetMethod("/api/getSmsPackages", "").subscribe(data => {
      this.smsPackages = data;
      if (data.length) {
        this.selectedSmsPackage = data[0];
        this.selectedSmsPrice = data[0].price;
      }
    });
  }
  selectSmsPackage(item) {
    this.selectedSmsPackage = item;
    this.selectedSmsPrice = item.price;
  }
  executeMethod(event) {
    this.successfullyBoughtNewSms = true;
    this.updateNumberOfSms();
    this.createSmsPayment();
  }
  updateNumberOfSms() {
    this._service.callPostMethod("/api/updateNumberOfSms", {
      count: this.selectedSmsPackage.count
    }).subscribe(data => {});
  }
  createSmsPayment() {
    this._service.callPostMethod("/api/createSmsPayment", this.selectedSmsPackage).subscribe(data => {});
  }
  static #_ = this.ɵfac = function BuyMoreSmsComponent_Factory(t) {
    return new (t || BuyMoreSmsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_services_call_api_service__WEBPACK_IMPORTED_MODULE_0__.CallApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_services_help_service__WEBPACK_IMPORTED_MODULE_1__.HelpService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: BuyMoreSmsComponent,
    selectors: [["app-buy-more-sms"]],
    decls: 37,
    vars: 22,
    consts: [[1, "card", "p-1"], [1, "row"], [1, "col-12"], [1, "align-items-center", "mb-2", "border-bottom"], ["data-feather", "link", 1, "font-medium-3"], [1, "ml-75"], [1, "col-lg-6", "col-12"], [1, "table", "table-hover"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["class", "col-lg-6 col-12 payment", 4, "ngIf"], [1, "row", "mt-3"], [3, "path", "file"], [1, "custom-control", "custom-checkbox"], ["type", "radio", "name", "amount", 1, "custom-control-input", 3, "id", "value", "ngModel", "checked", "ngModelChange", "click"], [1, "custom-control-label", 3, "for"], [1, "col-lg-6", "col-12", "payment"], [3, "amount", "buttonText", "executeMethodEmitter"], ["class", "text-center mt-4", 4, "ngIf"], [1, "text-center", "mt-4"], [1, "badge", "badge-success", "mb-1"], ["routerLink", "/dashboard/admin/admin-settings/reminders"]],
    template: function BuyMoreSmsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 1)(12, "div", 6)(13, "table", 7)(14, "thead")(15, "tr")(16, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, BuyMoreSmsComponent_tr_27_Template, 11, 8, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, BuyMoreSmsComponent_div_28_Template, 4, 5, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 11)(30, "div", 2)(31, "div", 3)(32, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "app-dynamic-grid", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 10, "buyMoreSms.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 12, "buyMoreSms.text"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](18, 14, "buyMoreSms.package"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](21, 16, "buyMoreSms.numberOfSms"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](24, 18, "buyMoreSms.price"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.smsPackages);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selectedSmsPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](34, 20, "buyMoreSms.previousPayments"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("path", ctx.path)("file", ctx.file);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _common_payment_processing_payment_processing_component__WEBPACK_IMPORTED_MODULE_2__.PaymentProcessingComponent, _common_dynamic_component_dynamic_grid_dynamic_grid_component__WEBPACK_IMPORTED_MODULE_3__.DynamicGridComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe],
    styles: ["@media (max-width: 992px) {\n  .payment[_ngcontent-%COMP%] {\n    margin-top: 45px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL3BhZ2VzL2FkbWluL3BheW1lbnRzLWNvbXBvbmVudC9idXktbW9yZS1zbXMvYnV5LW1vcmUtc21zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7SUFDSSxnQkFBQTtFQUNOO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgLnBheW1lbnQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDQ1cHg7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 64090:
/*!*********************************************************************************************************!*\
  !*** ./src/app/dashboard/pages/admin/payments-component/license-packages/license-packages.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LicensePackagesComponent": () => (/* binding */ LicensePackagesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var app_services_call_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/services/call-api.service */ 79992);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _common_license_status_license_status_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/license-status/license-status.component */ 60912);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);






function LicensePackagesComponent_div_22_div_3_li_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const plan_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](plan_r7);
  }
}
function LicensePackagesComponent_div_22_div_3_button_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "licensePackages.currentPlan"));
  }
}
function LicensePackagesComponent_div_22_div_3_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LicensePackagesComponent_div_22_div_3_button_20_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.selectPackage(item_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "licensePackages.upgrade"));
  }
}
function LicensePackagesComponent_div_22_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 26)(2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 30)(9, "div", 31)(10, "sup", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "$");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "sub", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "small", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "ul", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, LicensePackagesComponent_div_22_div_3_li_18_Template, 2, 1, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, LicensePackagesComponent_div_22_div_3_button_19_Template, 3, 3, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, LicensePackagesComponent_div_22_div_3_button_20_Template, 3, 3, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("col-12 col-md-", ctx_r2.licenseNumberClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", item_r3.icon, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r3.slogan);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.annualSubscription ? item_r3.annual_price : item_r3.monthly_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.annualSubscription ? "/year" : "/month");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item_r3.plans);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.license.license_id === item_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.license.license_id !== item_r3.id);
  }
}
function LicensePackagesComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23)(1, "div", 24)(2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, LicensePackagesComponent_div_22_div_3_Template, 21, 11, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.licensePackages);
  }
}
function LicensePackagesComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-license-status", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("currentStatus", false)("data", ctx_r1.license);
  }
}
class LicensePackagesComponent {
  constructor(_translate, _service) {
    this._translate = _translate;
    this._service = _service;
    // false if is Monthly, true if Annual
    this.annualSubscription = false;
  }
  ngOnInit() {
    if (this._translate.instant("licensePackagePlans")) {
      this.licensePackages = this._translate.instant("licensePackagePlans");
    }
    this._service.callGetMethod("/api/getMyLicense", "").subscribe(data => {
      this.license = data[0];
      this.removeFreePlan();
    });
  }
  removeFreePlan() {
    if (this.license.annual_price || this.license.monthly_price) {
      for (let i = 0; i < this.licensePackages.length; i++) {
        if (!Number(this.licensePackages[i].monthly_price) || !Number(this.licensePackages[i].annual_price)) {
          this.licensePackages.splice(i, 1);
        }
      }
    }
    this.licenseNumberClass = 12 / this.licensePackages.length;
  }
  selectPackage(item) {
    this.license = item;
    this.license.license_id = item.id;
  }
  static #_ = this.ɵfac = function LicensePackagesComponent_Factory(t) {
    return new (t || LicensePackagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](app_services_call_api_service__WEBPACK_IMPORTED_MODULE_0__.CallApiService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: LicensePackagesComponent,
    selectors: [["app-license-packages"]],
    decls: 39,
    vars: 24,
    consts: [[1, "content-wrapper", "container-xxl", "p-0"], [1, "content-header", "row"], [1, "content-body"], ["id", "pricing-plan"], [1, "text-center"], [1, "mt-5"], [1, "mb-2", "pb-75"], [1, "d-flex", "align-items-center", "justify-content-center", "mb-5", "pb-50"], [1, "me-1", "mb-0"], [1, "form-check", "form-switch", "subscription-duration"], ["type", "checkbox", "id", "priceSwitch", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "priceSwitch", 1, "form-check-label"], [1, "ms-50", "mb-0"], ["class", "row pricing-card", 4, "ngIf"], ["class", "col-12 col-sm-offset-2 col-sm-10 col-md-12 col-lg-offset-2 col-lg-8 mx-auto p-0", 4, "ngIf"], [1, "pricing-free-trial"], [1, "row"], [1, "col-12", "col-lg-10", "col-lg-offset-3", "mx-auto"], [1, "pricing-trial-content", "d-flex", "justify-content-between"], [1, "text-center", "text-md-start", "mt-3"], [1, "text-primary"], [1, "btn", "btn-primary", "mt-2", "mt-lg-3"], ["src", "../../../../../../assets/images/illustration/pricing-Illustration.svg", "alt", "svg img", 1, "pricing-trial-img", "img-fluid"], [1, "row", "pricing-card"], [1, "col-12", "col-sm-offset-2", "col-sm-10", "col-md-12", "col-lg-offset-2", "col-lg-8", "mx-auto"], [3, "class", 4, "ngFor", "ngForOf"], [1, "card", "basic-pricing", "text-center"], [1, "card-body"], ["alt", "svg img", 1, "mb-2", "mt-5", "package-icon", 3, "src"], [1, "card-text"], [1, "annual-plan"], [1, "plan-price", "mt-2"], [1, "font-medium-1", "fw-bold", "text-primary"], [1, "pricing-basic-value", "fw-bolder", "text-primary"], [1, "pricing-duration", "text-body", "font-medium-1", "fw-bold"], [1, "annual-pricing", "d-none", "text-muted"], [1, "list-group", "list-group-circle", "text-start"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], ["class", "btn w-100 btn-outline-success mt-2", 4, "ngIf"], ["class", "btn w-100 btn-primary mt-2", 3, "click", 4, "ngIf"], [1, "list-group-item"], [1, "btn", "w-100", "btn-outline-success", "mt-2"], [1, "btn", "w-100", "btn-primary", "mt-2", 3, "click"], [1, "col-12", "col-sm-offset-2", "col-sm-10", "col-md-12", "col-lg-offset-2", "col-lg-8", "mx-auto", "p-0"], [3, "currentStatus", "data"]],
    template: function LicensePackagesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2)(4, "section", 3)(5, "div", 4)(6, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 7)(13, "h6", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 9)(17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LicensePackagesComponent_Template_input_ngModelChange_17_listener($event) {
          return ctx.annualSubscription = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "h6", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, LicensePackagesComponent_div_22_Template, 4, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, LicensePackagesComponent_div_23_Template, 2, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 15)(25, "div", 16)(26, "div", 17)(27, "div", 18)(28, "div", 19)(29, "h3", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 10, "licensePackages.pricingPlansTitle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 12, "licensePackages.pricingPlansText"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 14, "licensePackages.monthly"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.annualSubscription);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](21, 16, "licensePackages.annualy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.license);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.license && (ctx.license.monthly_price || ctx.license.annual_price));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](31, 18, "licensePackages.additionalFunctionalities"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](34, 20, "licensePackages.contactUsForSolvingProblem"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](37, 22, "licensePackages.contactUsButton"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _common_license_status_license_status_component__WEBPACK_IMPORTED_MODULE_1__.LicenseStatusComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
    styles: [".form-check[_ngcontent-%COMP%] {\n  display: block;\n  min-height: 1.45rem;\n  padding-left: 0;\n  margin-bottom: 0;\n}\n\n.form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  float: left;\n  margin-left: -1.785rem;\n}\n\n.form-check-input[_ngcontent-%COMP%] {\n  width: 1.285rem;\n  height: 1.285rem;\n  margin-top: 0.0825rem;\n  vertical-align: top;\n  background-color: #fff;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n  border: 1px solid #d8d6de;\n  -webkit-appearance: none;\n          appearance: none;\n  -webkit-print-color-adjust: exact;\n          color-adjust: exact;\n}\n\n.form-check-input[type=checkbox][_ngcontent-%COMP%] {\n  border-radius: 3px;\n}\n\n.form-check-input[type=radio][_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n\n.form-check-input[_ngcontent-%COMP%]:active {\n  filter: brightness(90%);\n}\n\n.form-check-input[_ngcontent-%COMP%]:focus {\n  border-color: #7367f0;\n  outline: 0;\n  box-shadow: 0 2px 4px 0 rgba(115, 103, 240, 0.4);\n}\n\n.form-check-input[_ngcontent-%COMP%]:checked {\n  background-color: #7367f0;\n  border-color: #7367f0;\n}\n\n.form-check-input[_ngcontent-%COMP%]:checked[type=checkbox] {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9.5 7.5'%3e%3cpolyline points='0.75 4.35 4.18 6.75 8.75 0.75' style='fill:none;stroke:%23fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px'/%3e%3c/svg%3e\");\n}\n\n.form-check-input[_ngcontent-%COMP%]:checked[type=radio] {\n  background-image: none;\n}\n\n.form-check-input[type=checkbox][_ngcontent-%COMP%]:indeterminate {\n  background-color: #7367f0;\n  border-color: #7367f0;\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-minus'%3e%3cline x1='5' y1='12' x2='19' y2='12'%3e%3c/line%3e%3c/svg%3e\");\n}\n\n.form-check-input[_ngcontent-%COMP%]:disabled {\n  pointer-events: none;\n  filter: none;\n  opacity: 0.65;\n}\n\n.form-check-input[disabled][_ngcontent-%COMP%]    ~ .form-check-label[_ngcontent-%COMP%], .form-check-input[_ngcontent-%COMP%]:disabled    ~ .form-check-label[_ngcontent-%COMP%] {\n  opacity: 0.65;\n}\n\n.form-check-label[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.form-switch[_ngcontent-%COMP%] {\n  padding-left: 3.5rem;\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  width: 3rem;\n  margin-left: -3.5rem;\n  background-image: url(\"data:image/svg+xml,%3csvg width='26px' height='26px' viewBox='0 0 26 27' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3ccircle id='path-1' cx='8' cy='8' r='8'%3e%3c/circle%3e%3cfilter x='-40.6%' y='-21.9%' width='168.8%' height='168.8%' filterUnits='objectBoundingBox' id='filter-2'%3e%3cfeOffset dx='-1' dy='2' in='SourceAlpha' result='shadowOffsetOuter1'%3e%3c/feOffset%3e%3cfeGaussianBlur stdDeviation='1.5' in='shadowOffsetOuter1' result='shadowBlurOuter1'%3e%3c/feGaussianBlur%3e%3cfeColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0' type='matrix' in='shadowBlurOuter1'%3e%3c/feColorMatrix%3e%3c/filter%3e%3c/defs%3e%3cg id='Artboard' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3e%3cg id='switches-dot' transform='translate%285.000000, 5.000000%29' fill-rule='nonzero'%3e%3cg id='Oval'%3e%3cuse fill='black' fill-opacity='1' filter='url%28%23filter-2%29' xlink:href='%23path-1'%3e%3c/use%3e%3cuse fill='%23fff' xlink:href='%23path-1'%3e%3c/use%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e\");\n  background-position: left center;\n  border-radius: 3rem;\n  transition: background-position 0.15s ease-in-out, background-color 0.1s ease;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n.form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:focus {\n  background-image: url(\"data:image/svg+xml,%3csvg width='26px' height='26px' viewBox='0 0 26 27' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3ccircle id='path-1' cx='8' cy='8' r='8'%3e%3c/circle%3e%3cfilter x='-40.6%' y='-21.9%' width='168.8%' height='168.8%' filterUnits='objectBoundingBox' id='filter-2'%3e%3cfeOffset dx='-1' dy='2' in='SourceAlpha' result='shadowOffsetOuter1'%3e%3c/feOffset%3e%3cfeGaussianBlur stdDeviation='1.5' in='shadowOffsetOuter1' result='shadowBlurOuter1'%3e%3c/feGaussianBlur%3e%3cfeColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0' type='matrix' in='shadowBlurOuter1'%3e%3c/feColorMatrix%3e%3c/filter%3e%3c/defs%3e%3cg id='Artboard' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3e%3cg id='switches-dot' transform='translate%285.000000, 5.000000%29' fill-rule='nonzero'%3e%3cg id='Oval'%3e%3cuse fill='black' fill-opacity='1' filter='url%28%23filter-2%29' xlink:href='%23path-1'%3e%3c/use%3e%3cuse fill='%23fff' xlink:href='%23path-1'%3e%3c/use%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e\");\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked {\n  background-position: right center;\n  background-image: url(\"data:image/svg+xml,%3csvg width='26px' height='26px' viewBox='0 0 26 27' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3ccircle id='path-1' cx='8' cy='8' r='8'%3e%3c/circle%3e%3cfilter x='-40.6%' y='-21.9%' width='168.8%' height='168.8%' filterUnits='objectBoundingBox' id='filter-2'%3e%3cfeOffset dx='-1' dy='2' in='SourceAlpha' result='shadowOffsetOuter1'%3e%3c/feOffset%3e%3cfeGaussianBlur stdDeviation='1.5' in='shadowOffsetOuter1' result='shadowBlurOuter1'%3e%3c/feGaussianBlur%3e%3cfeColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0' type='matrix' in='shadowBlurOuter1'%3e%3c/feColorMatrix%3e%3c/filter%3e%3c/defs%3e%3cg id='Artboard' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3e%3cg id='switches-dot' transform='translate%285.000000, 5.000000%29' fill-rule='nonzero'%3e%3cg id='Oval'%3e%3cuse fill='black' fill-opacity='1' filter='url%28%23filter-2%29' xlink:href='%23path-1'%3e%3c/use%3e%3cuse fill='%23fff' xlink:href='%23path-1'%3e%3c/use%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e\");\n}\n\n.form-check-inline[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 1rem;\n}\n\n.form-check[_ngcontent-%COMP%]:not(.form-switch)   .form-check-input[type=checkbox][_ngcontent-%COMP%]:checked {\n  background-size: 65%;\n}\n\n.form-check[_ngcontent-%COMP%]:not(.form-switch)   .form-check-input[_ngcontent-%COMP%]:disabled:not(:checked) {\n  background-color: #efefef;\n  border-color: #efefef;\n  opacity: 1;\n}\n\n.form-check-input[_ngcontent-%COMP%]:not(:disabled):checked {\n  box-shadow: 0 2px 4px 0 rgba(115, 103, 240, 0.4);\n}\n\n.form-check-input[_ngcontent-%COMP%]:not(:disabled):indeterminate {\n  background-size: 85%;\n}\n\n\n.form-switch[_ngcontent-%COMP%] {\n  position: relative;\n  \n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  height: 1.7rem;\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked {\n  box-shadow: none !important;\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:not(:checked) {\n  background-color: #e2e2e2;\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:active {\n  filter: none;\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:not(:disabled):checked, .form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:not(:disabled):focus {\n  box-shadow: none !important;\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%] {\n  line-height: 1.7rem;\n  \n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   .switch-text-left[_ngcontent-%COMP%], .form-switch[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   .switch-text-right[_ngcontent-%COMP%], .form-switch[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   .switch-icon-left[_ngcontent-%COMP%], .form-switch[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   .switch-icon-right[_ngcontent-%COMP%] {\n  position: absolute;\n  -webkit-user-select: none;\n          user-select: none;\n  line-height: 1.65;\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   .switch-text-left[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .form-switch[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   .switch-text-left[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .form-switch[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   .switch-text-right[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .form-switch[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   .switch-text-right[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .form-switch[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   .switch-icon-left[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .form-switch[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   .switch-icon-left[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .form-switch[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   .switch-icon-right[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .form-switch[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   .switch-icon-right[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 13px;\n  width: 13px;\n  font-size: 13px;\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   .switch-text-left[_ngcontent-%COMP%], .form-switch[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   .switch-icon-left[_ngcontent-%COMP%] {\n  left: 6px;\n  top: 0;\n  color: #fff;\n  opacity: 0;\n  transform: translateX(8px);\n  transition: opacity 0.1s ease, transform 0.15s ease;\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   .switch-text-right[_ngcontent-%COMP%], .form-switch[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   .switch-icon-right[_ngcontent-%COMP%] {\n  left: 25px;\n  top: 0;\n  opacity: 1;\n  transform: translateX(0px);\n  transition: opacity 0.08s ease, transform 0.15s ease;\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked    ~ .form-check-label[_ngcontent-%COMP%]::before {\n  box-shadow: none;\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked    ~ .form-check-label[_ngcontent-%COMP%]::after {\n  transform: translateX(1.4rem);\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked    ~ .form-check-label[_ngcontent-%COMP%]   .switch-text-left[_ngcontent-%COMP%], .form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked    ~ .form-check-label[_ngcontent-%COMP%]   .switch-icon-left[_ngcontent-%COMP%] {\n  transform: translateX(0);\n  opacity: 1;\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked    ~ .form-check-label[_ngcontent-%COMP%]   .switch-text-right[_ngcontent-%COMP%], .form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked    ~ .form-check-label[_ngcontent-%COMP%]   .switch-icon-right[_ngcontent-%COMP%] {\n  transform: translateX(-8px);\n  opacity: 0;\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:not(:checked)    ~ .form-check-label[_ngcontent-%COMP%]   .switch-text-left[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:not(:checked)    ~ .form-check-label[_ngcontent-%COMP%]   .switch-text-right[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked    ~ .form-check-label[_ngcontent-%COMP%]   .switch-text-right[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked    ~ .form-check-label[_ngcontent-%COMP%]   .switch-text-left[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.pricing-card[_ngcontent-%COMP%]   .card.popular[_ngcontent-%COMP%] {\n  border: 1px solid #7367f0;\n}\n\n.pricing-card[_ngcontent-%COMP%]   .list-group-circle[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #5e5873;\n}\n\n.pricing-card[_ngcontent-%COMP%]   .annual-plan[_ngcontent-%COMP%] {\n  margin-bottom: 1.7rem;\n}\n\n.pricing-card[_ngcontent-%COMP%]   .annual-plan[_ngcontent-%COMP%]   .plan-price[_ngcontent-%COMP%]   sup[_ngcontent-%COMP%] {\n  top: -1.5rem;\n  right: 0.2rem;\n}\n\n.pricing-card[_ngcontent-%COMP%]   .annual-plan[_ngcontent-%COMP%]   .plan-price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  line-height: 0.8;\n}\n\n.pricing-card[_ngcontent-%COMP%]   .annual-plan[_ngcontent-%COMP%]   .plan-price[_ngcontent-%COMP%]   sub[_ngcontent-%COMP%] {\n  bottom: 0;\n  left: 0.14rem;\n}\n\n.pricing-card[_ngcontent-%COMP%]   .annual-plan[_ngcontent-%COMP%]   .annual-pricing[_ngcontent-%COMP%] {\n  position: absolute;\n  margin: auto;\n  right: 0;\n  left: 0;\n}\n\n.pricing-free-trial[_ngcontent-%COMP%] {\n  height: 16.71rem;\n  background-color: rgba(186, 191, 199, 0.12);\n  margin-left: -2rem;\n  margin-right: -2rem;\n  margin-top: 7.5rem;\n  margin-bottom: 6.3rem;\n}\n\n.pricing-free-trial[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.pricing-free-trial[_ngcontent-%COMP%]   .pricing-trial-content[_ngcontent-%COMP%] {\n  padding: 0 1rem;\n}\n\n.pricing-free-trial[_ngcontent-%COMP%]   .pricing-trial-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  top: -3.1rem;\n}\n\n@media (max-width: 767.98px) {\n  .pricing-free-trial[_ngcontent-%COMP%] {\n    height: auto;\n  }\n  .pricing-free-trial[_ngcontent-%COMP%]   .pricing-trial-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .pricing-free-trial[_ngcontent-%COMP%]   .pricing-trial-content[_ngcontent-%COMP%]   .pricing-trial-img[_ngcontent-%COMP%] {\n    top: 0;\n    margin-top: 2rem;\n    height: 150px;\n  }\n}\n@media (max-width: 575.98px) {\n  .pricing-free-trial[_ngcontent-%COMP%] {\n    margin-left: -1.2rem;\n    margin-right: -1.2rem;\n  }\n}\n.basic-pricing[_ngcontent-%COMP%] {\n  border: 1px solid var(--light);\n}\n\n.subscription-duration[_ngcontent-%COMP%] {\n  margin-bottom: 6px;\n  margin-left: 6px;\n}\n\n.package-icon[_ngcontent-%COMP%] {\n  width: 33px;\n  height: 65px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AY29yZS9zY3NzL2Jhc2Uvc3dpdGNoLWJ1dHRvbi5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9kYXNoYm9hcmQvcGFnZXMvYWRtaW4vcGF5bWVudHMtY29tcG9uZW50L2xpY2Vuc2UtcGFja2FnZXMvbGljZW5zZS1wYWNrYWdlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO1VBQUEsZ0JBQUE7RUFDQSxpQ0FBQTtVQUFBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxnREFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UseVJBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esd1VBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTs7RUFFRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLG9CQUFBO0VBQ0Esb2xDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLDZFQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNFLGdCQUFBO0VDQ0Y7QUFDRjtBREVBO0VBQ0Usb2xDQUFBO0FDQUY7O0FER0E7RUFDRSxpQ0FBQTtFQUNBLG9sQ0FBQTtBQ0FGOztBREdBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREdBO0VBQ0Usb0JBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0FDQUY7O0FER0E7RUFDRSxnREFBQTtBQ0FGOztBREdBO0VBQ0Usb0JBQUE7QUNBRjs7QURHQSxhQUFBO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLDhCQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0FDQUY7O0FER0E7RUFDRSwyQkFBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtBQ0FGOztBREdBO0VBQ0UseUJBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7QUNBRjs7QURHQTs7RUFFRSwyQkFBQTtBQ0FGOztBREdBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREdBOzs7O0VBSUUsa0JBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTs7Ozs7Ozs7RUFRRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNBRjs7QURHQTs7RUFFRSxTQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSxtREFBQTtBQ0FGOztBREdBOztFQUVFLFVBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0Esb0RBQUE7QUNBRjs7QURHQTtFQUNFLFVBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0FDQUY7O0FER0E7RUFDRSw2QkFBQTtBQ0FGOztBREdBOztFQUVFLHdCQUFBO0VBQ0EsVUFBQTtBQ0FGOztBREdBOztFQUVFLDJCQUFBO0VBQ0EsVUFBQTtBQ0FGOztBREdBO0VBSUUsVUFBQTtBQ0hGOztBRE1BO0VBSUUsVUFBQTtBQ05GOztBRFNBO0VBQ0UsVUFBQTtBQ05GOztBRFNBO0VBQ0UsVUFBQTtBQ05GOztBQWpQQTtFQUNFLHlCQUFBO0FBb1BGOztBQWpQQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQW9QRjs7QUFqUEE7RUFDRSxxQkFBQTtBQW9QRjs7QUFqUEE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQW9QRjs7QUFqUEE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBb1BGOztBQWpQQTtFQUNFLFNBQUE7RUFDQSxhQUFBO0FBb1BGOztBQWpQQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0FBb1BGOztBQWpQQTtFQUNFLGdCQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQW9QRjs7QUFqUEE7RUFDRSxTQUFBO0FBb1BGOztBQWpQQTtFQUNFLGVBQUE7QUFvUEY7O0FBalBBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FBb1BGOztBQWpQQTtFQUNFO0lBQ0UsWUFBQTtFQW9QRjtFQWxQQTtJQUtFLHNCQUFBO0lBSUEsbUJBQUE7RUFvUEY7RUFsUEE7SUFDRSxNQUFBO0lBQ0EsZ0JBQUE7SUFDQSxhQUFBO0VBb1BGO0FBQ0Y7QUFqUEE7RUFDRTtJQUNFLG9CQUFBO0lBQ0EscUJBQUE7RUFtUEY7QUFDRjtBQWhQQTtFQUNFLDhCQUFBO0FBa1BGOztBQS9PQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFrUEY7O0FBL09BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFrUEYiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jaGVjayB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWluLWhlaWdodDogMS40NXJlbTtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmZvcm0tY2hlY2sgLmZvcm0tY2hlY2staW5wdXQge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMS43ODVyZW07XHJcbn1cclxuXHJcbi5mb3JtLWNoZWNrLWlucHV0IHtcclxuICB3aWR0aDogMS4yODVyZW07XHJcbiAgaGVpZ2h0OiAxLjI4NXJlbTtcclxuICBtYXJnaW4tdG9wOiAwLjA4MjVyZW07XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZDhkNmRlO1xyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgY29sb3ItYWRqdXN0OiBleGFjdDtcclxufVxyXG5cclxuLmZvcm0tY2hlY2staW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbi5mb3JtLWNoZWNrLWlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uZm9ybS1jaGVjay1pbnB1dDphY3RpdmUge1xyXG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg5MCUpO1xyXG59XHJcblxyXG4uZm9ybS1jaGVjay1pbnB1dDpmb2N1cyB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNzM2N2YwO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgxMTUsIDEwMywgMjQwLCAwLjQpO1xyXG59XHJcblxyXG4uZm9ybS1jaGVjay1pbnB1dDpjaGVja2VkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzM2N2YwO1xyXG4gIGJvcmRlci1jb2xvcjogIzczNjdmMDtcclxufVxyXG5cclxuLmZvcm0tY2hlY2staW5wdXQ6Y2hlY2tlZFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDkuNSA3LjUnJTNlJTNjcG9seWxpbmUgcG9pbnRzPScwLjc1IDQuMzUgNC4xOCA2Ljc1IDguNzUgMC43NScgc3R5bGU9J2ZpbGw6bm9uZTtzdHJva2U6JTIzZmZmO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MS41cHgnLyUzZSUzYy9zdmclM2VcIik7XHJcbn1cclxuXHJcbi5mb3JtLWNoZWNrLWlucHV0OmNoZWNrZWRbdHlwZT1cInJhZGlvXCJdIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG59XHJcblxyXG4uZm9ybS1jaGVjay1pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06aW5kZXRlcm1pbmF0ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzczNjdmMDtcclxuICBib3JkZXItY29sb3I6ICM3MzY3ZjA7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjNmZmYnIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLW1pbnVzJyUzZSUzY2xpbmUgeDE9JzUnIHkxPScxMicgeDI9JzE5JyB5Mj0nMTInJTNlJTNjL2xpbmUlM2UlM2Mvc3ZnJTNlXCIpO1xyXG59XHJcblxyXG4uZm9ybS1jaGVjay1pbnB1dDpkaXNhYmxlZCB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgZmlsdGVyOiBub25lO1xyXG4gIG9wYWNpdHk6IDAuNjU7XHJcbn1cclxuXHJcbi5mb3JtLWNoZWNrLWlucHV0W2Rpc2FibGVkXSB+IC5mb3JtLWNoZWNrLWxhYmVsLFxyXG4uZm9ybS1jaGVjay1pbnB1dDpkaXNhYmxlZCB+IC5mb3JtLWNoZWNrLWxhYmVsIHtcclxuICBvcGFjaXR5OiAwLjY1O1xyXG59XHJcblxyXG4uZm9ybS1jaGVjay1sYWJlbCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZm9ybS1zd2l0Y2gge1xyXG4gIHBhZGRpbmctbGVmdDogMy41cmVtO1xyXG59XHJcblxyXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2staW5wdXQge1xyXG4gIHdpZHRoOiAzcmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMy41cmVtO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2Nzdmcgd2lkdGg9JzI2cHgnIGhlaWdodD0nMjZweCcgdmlld0JveD0nMCAwIDI2IDI3JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnJTNlJTNjZGVmcyUzZSUzY2NpcmNsZSBpZD0ncGF0aC0xJyBjeD0nOCcgY3k9JzgnIHI9JzgnJTNlJTNjL2NpcmNsZSUzZSUzY2ZpbHRlciB4PSctNDAuNiUnIHk9Jy0yMS45JScgd2lkdGg9JzE2OC44JScgaGVpZ2h0PScxNjguOCUnIGZpbHRlclVuaXRzPSdvYmplY3RCb3VuZGluZ0JveCcgaWQ9J2ZpbHRlci0yJyUzZSUzY2ZlT2Zmc2V0IGR4PSctMScgZHk9JzInIGluPSdTb3VyY2VBbHBoYScgcmVzdWx0PSdzaGFkb3dPZmZzZXRPdXRlcjEnJTNlJTNjL2ZlT2Zmc2V0JTNlJTNjZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPScxLjUnIGluPSdzaGFkb3dPZmZzZXRPdXRlcjEnIHJlc3VsdD0nc2hhZG93Qmx1ck91dGVyMSclM2UlM2MvZmVHYXVzc2lhbkJsdXIlM2UlM2NmZUNvbG9yTWF0cml4IHZhbHVlcz0nMCAwIDAgMCAwICAgMCAwIDAgMCAwICAgMCAwIDAgMCAwICAwIDAgMCAwLjIgMCcgdHlwZT0nbWF0cml4JyBpbj0nc2hhZG93Qmx1ck91dGVyMSclM2UlM2MvZmVDb2xvck1hdHJpeCUzZSUzYy9maWx0ZXIlM2UlM2MvZGVmcyUzZSUzY2cgaWQ9J0FydGJvYXJkJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyUzZSUzY2cgaWQ9J3N3aXRjaGVzLWRvdCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUlMjg1LjAwMDAwMCwgNS4wMDAwMDAlMjknIGZpbGwtcnVsZT0nbm9uemVybyclM2UlM2NnIGlkPSdPdmFsJyUzZSUzY3VzZSBmaWxsPSdibGFjaycgZmlsbC1vcGFjaXR5PScxJyBmaWx0ZXI9J3VybCUyOCUyM2ZpbHRlci0yJTI5JyB4bGluazpocmVmPSclMjNwYXRoLTEnJTNlJTNjL3VzZSUzZSUzY3VzZSBmaWxsPSclMjNmZmYnIHhsaW5rOmhyZWY9JyUyM3BhdGgtMSclM2UlM2MvdXNlJTNlJTNjL2clM2UlM2MvZyUzZSUzYy9nJTNlJTNjL3N2ZyUzZVwiKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAzcmVtO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtcG9zaXRpb24gMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xcyBlYXNlO1xyXG59XHJcblxyXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xyXG4gIC5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1pbnB1dCB7XHJcbiAgICB0cmFuc2l0aW9uOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWlucHV0OmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHdpZHRoPScyNnB4JyBoZWlnaHQ9JzI2cHgnIHZpZXdCb3g9JzAgMCAyNiAyNycgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyUzZSUzY2RlZnMlM2UlM2NjaXJjbGUgaWQ9J3BhdGgtMScgY3g9JzgnIGN5PSc4JyByPSc4JyUzZSUzYy9jaXJjbGUlM2UlM2NmaWx0ZXIgeD0nLTQwLjYlJyB5PSctMjEuOSUnIHdpZHRoPScxNjguOCUnIGhlaWdodD0nMTY4LjglJyBmaWx0ZXJVbml0cz0nb2JqZWN0Qm91bmRpbmdCb3gnIGlkPSdmaWx0ZXItMiclM2UlM2NmZU9mZnNldCBkeD0nLTEnIGR5PScyJyBpbj0nU291cmNlQWxwaGEnIHJlc3VsdD0nc2hhZG93T2Zmc2V0T3V0ZXIxJyUzZSUzYy9mZU9mZnNldCUzZSUzY2ZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMS41JyBpbj0nc2hhZG93T2Zmc2V0T3V0ZXIxJyByZXN1bHQ9J3NoYWRvd0JsdXJPdXRlcjEnJTNlJTNjL2ZlR2F1c3NpYW5CbHVyJTNlJTNjZmVDb2xvck1hdHJpeCB2YWx1ZXM9JzAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgMCAwIDAgMC4yIDAnIHR5cGU9J21hdHJpeCcgaW49J3NoYWRvd0JsdXJPdXRlcjEnJTNlJTNjL2ZlQ29sb3JNYXRyaXglM2UlM2MvZmlsdGVyJTNlJTNjL2RlZnMlM2UlM2NnIGlkPSdBcnRib2FyZCcgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCclM2UlM2NnIGlkPSdzd2l0Y2hlcy1kb3QnIHRyYW5zZm9ybT0ndHJhbnNsYXRlJTI4NS4wMDAwMDAsIDUuMDAwMDAwJTI5JyBmaWxsLXJ1bGU9J25vbnplcm8nJTNlJTNjZyBpZD0nT3ZhbCclM2UlM2N1c2UgZmlsbD0nYmxhY2snIGZpbGwtb3BhY2l0eT0nMScgZmlsdGVyPSd1cmwlMjglMjNmaWx0ZXItMiUyOScgeGxpbms6aHJlZj0nJTIzcGF0aC0xJyUzZSUzYy91c2UlM2UlM2N1c2UgZmlsbD0nJTIzZmZmJyB4bGluazpocmVmPSclMjNwYXRoLTEnJTNlJTNjL3VzZSUzZSUzYy9nJTNlJTNjL2clM2UlM2MvZyUzZSUzYy9zdmclM2VcIik7XHJcbn1cclxuXHJcbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1pbnB1dDpjaGVja2VkIHtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB3aWR0aD0nMjZweCcgaGVpZ2h0PScyNnB4JyB2aWV3Qm94PScwIDAgMjYgMjcnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayclM2UlM2NkZWZzJTNlJTNjY2lyY2xlIGlkPSdwYXRoLTEnIGN4PSc4JyBjeT0nOCcgcj0nOCclM2UlM2MvY2lyY2xlJTNlJTNjZmlsdGVyIHg9Jy00MC42JScgeT0nLTIxLjklJyB3aWR0aD0nMTY4LjglJyBoZWlnaHQ9JzE2OC44JScgZmlsdGVyVW5pdHM9J29iamVjdEJvdW5kaW5nQm94JyBpZD0nZmlsdGVyLTInJTNlJTNjZmVPZmZzZXQgZHg9Jy0xJyBkeT0nMicgaW49J1NvdXJjZUFscGhhJyByZXN1bHQ9J3NoYWRvd09mZnNldE91dGVyMSclM2UlM2MvZmVPZmZzZXQlM2UlM2NmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzEuNScgaW49J3NoYWRvd09mZnNldE91dGVyMScgcmVzdWx0PSdzaGFkb3dCbHVyT3V0ZXIxJyUzZSUzYy9mZUdhdXNzaWFuQmx1ciUzZSUzY2ZlQ29sb3JNYXRyaXggdmFsdWVzPScwIDAgMCAwIDAgICAwIDAgMCAwIDAgICAwIDAgMCAwIDAgIDAgMCAwIDAuMiAwJyB0eXBlPSdtYXRyaXgnIGluPSdzaGFkb3dCbHVyT3V0ZXIxJyUzZSUzYy9mZUNvbG9yTWF0cml4JTNlJTNjL2ZpbHRlciUzZSUzYy9kZWZzJTNlJTNjZyBpZD0nQXJ0Ym9hcmQnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnJTNlJTNjZyBpZD0nc3dpdGNoZXMtZG90JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSUyODUuMDAwMDAwLCA1LjAwMDAwMCUyOScgZmlsbC1ydWxlPSdub256ZXJvJyUzZSUzY2cgaWQ9J092YWwnJTNlJTNjdXNlIGZpbGw9J2JsYWNrJyBmaWxsLW9wYWNpdHk9JzEnIGZpbHRlcj0ndXJsJTI4JTIzZmlsdGVyLTIlMjknIHhsaW5rOmhyZWY9JyUyM3BhdGgtMSclM2UlM2MvdXNlJTNlJTNjdXNlIGZpbGw9JyUyM2ZmZicgeGxpbms6aHJlZj0nJTIzcGF0aC0xJyUzZSUzYy91c2UlM2UlM2MvZyUzZSUzYy9nJTNlJTNjL2clM2UlM2Mvc3ZnJTNlXCIpO1xyXG59XHJcblxyXG4uZm9ybS1jaGVjay1pbmxpbmUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbi5mb3JtLWNoZWNrOm5vdCguZm9ybS1zd2l0Y2gpIC5mb3JtLWNoZWNrLWlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDY1JTtcclxufVxyXG5cclxuLmZvcm0tY2hlY2s6bm90KC5mb3JtLXN3aXRjaCkgLmZvcm0tY2hlY2staW5wdXQ6ZGlzYWJsZWQ6bm90KDpjaGVja2VkKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcclxuICBib3JkZXItY29sb3I6ICNlZmVmZWY7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmZvcm0tY2hlY2staW5wdXQ6bm90KDpkaXNhYmxlZCk6Y2hlY2tlZCB7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgxMTUsIDEwMywgMjQwLCAwLjQpO1xyXG59XHJcblxyXG4uZm9ybS1jaGVjay1pbnB1dDpub3QoOmRpc2FibGVkKTppbmRldGVybWluYXRlIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDg1JTtcclxufVxyXG5cclxuLyogU3dpdGNoZXMgKi9cclxuLmZvcm0tc3dpdGNoIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLypGb3IgU3dpdGNoIEhhbmRsZSBBbmltYXRpb24qL1xyXG59XHJcblxyXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2staW5wdXQge1xyXG4gIGhlaWdodDogMS43cmVtO1xyXG59XHJcblxyXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2staW5wdXQ6Y2hlY2tlZCB7XHJcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2staW5wdXQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWlucHV0Om5vdCg6Y2hlY2tlZCkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmUyZTI7XHJcbn1cclxuXHJcbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1pbnB1dDphY3RpdmUge1xyXG4gIGZpbHRlcjogbm9uZTtcclxufVxyXG5cclxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWlucHV0Om5vdCg6ZGlzYWJsZWQpOmNoZWNrZWQsXHJcbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1pbnB1dDpub3QoOmRpc2FibGVkKTpmb2N1cyB7XHJcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2stbGFiZWwge1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjdyZW07XHJcbiAgLypGb3IgU3dpdGNoIHRleHQqL1xyXG59XHJcblxyXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2stbGFiZWwgLnN3aXRjaC10ZXh0LWxlZnQsXHJcbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1sYWJlbCAuc3dpdGNoLXRleHQtcmlnaHQsXHJcbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1sYWJlbCAuc3dpdGNoLWljb24tbGVmdCxcclxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWxhYmVsIC5zd2l0Y2gtaWNvbi1yaWdodCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY1O1xyXG59XHJcblxyXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2stbGFiZWwgLnN3aXRjaC10ZXh0LWxlZnQgaSxcclxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWxhYmVsIC5zd2l0Y2gtdGV4dC1sZWZ0IHN2ZyxcclxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWxhYmVsIC5zd2l0Y2gtdGV4dC1yaWdodCBpLFxyXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2stbGFiZWwgLnN3aXRjaC10ZXh0LXJpZ2h0IHN2ZyxcclxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWxhYmVsIC5zd2l0Y2gtaWNvbi1sZWZ0IGksXHJcbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1sYWJlbCAuc3dpdGNoLWljb24tbGVmdCBzdmcsXHJcbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1sYWJlbCAuc3dpdGNoLWljb24tcmlnaHQgaSxcclxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWxhYmVsIC5zd2l0Y2gtaWNvbi1yaWdodCBzdmcge1xyXG4gIGhlaWdodDogMTNweDtcclxuICB3aWR0aDogMTNweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1sYWJlbCAuc3dpdGNoLXRleHQtbGVmdCxcclxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWxhYmVsIC5zd2l0Y2gtaWNvbi1sZWZ0IHtcclxuICBsZWZ0OiA2cHg7XHJcbiAgdG9wOiAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDhweCk7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjFzIGVhc2UsIHRyYW5zZm9ybSAwLjE1cyBlYXNlO1xyXG59XHJcblxyXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2stbGFiZWwgLnN3aXRjaC10ZXh0LXJpZ2h0LFxyXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2stbGFiZWwgLnN3aXRjaC1pY29uLXJpZ2h0IHtcclxuICBsZWZ0OiAyNXB4O1xyXG4gIHRvcDogMDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4wOHMgZWFzZSwgdHJhbnNmb3JtIDAuMTVzIGVhc2U7XHJcbn1cclxuXHJcbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1sYWJlbDpmb2N1cyB7XHJcbiAgb3V0bGluZTogMDtcclxufVxyXG5cclxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWlucHV0OmNoZWNrZWQgfiAuZm9ybS1jaGVjay1sYWJlbDo6YmVmb3JlIHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2staW5wdXQ6Y2hlY2tlZCB+IC5mb3JtLWNoZWNrLWxhYmVsOjphZnRlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEuNHJlbSk7XHJcbn1cclxuXHJcbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1pbnB1dDpjaGVja2VkIH4gLmZvcm0tY2hlY2stbGFiZWwgLnN3aXRjaC10ZXh0LWxlZnQsXHJcbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1pbnB1dDpjaGVja2VkIH4gLmZvcm0tY2hlY2stbGFiZWwgLnN3aXRjaC1pY29uLWxlZnQge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2staW5wdXQ6Y2hlY2tlZCB+IC5mb3JtLWNoZWNrLWxhYmVsIC5zd2l0Y2gtdGV4dC1yaWdodCxcclxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWlucHV0OmNoZWNrZWQgfiAuZm9ybS1jaGVjay1sYWJlbCAuc3dpdGNoLWljb24tcmlnaHQge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtOHB4KTtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uZm9ybS1zd2l0Y2hcclxuICAuZm9ybS1jaGVjay1pbnB1dDpub3QoOmNoZWNrZWQpXHJcbiAgfiAuZm9ybS1jaGVjay1sYWJlbFxyXG4gIC5zd2l0Y2gtdGV4dC1sZWZ0IHtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uZm9ybS1zd2l0Y2hcclxuICAuZm9ybS1jaGVjay1pbnB1dDpub3QoOmNoZWNrZWQpXHJcbiAgfiAuZm9ybS1jaGVjay1sYWJlbFxyXG4gIC5zd2l0Y2gtdGV4dC1yaWdodCB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWlucHV0OmNoZWNrZWQgfiAuZm9ybS1jaGVjay1sYWJlbCAuc3dpdGNoLXRleHQtcmlnaHQge1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1pbnB1dDpjaGVja2VkIH4gLmZvcm0tY2hlY2stbGFiZWwgLnN3aXRjaC10ZXh0LWxlZnQge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuIiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uLy4uL0Bjb3JlL3Njc3MvYmFzZS9zd2l0Y2gtYnV0dG9uLnNjc3NcIjtcclxuXHJcbi5wcmljaW5nLWNhcmQgLmNhcmQucG9wdWxhciB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzczNjdmMDtcclxufVxyXG5cclxuLnByaWNpbmctY2FyZCAubGlzdC1ncm91cC1jaXJjbGUge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICM1ZTU4NzM7XHJcbn1cclxuXHJcbi5wcmljaW5nLWNhcmQgLmFubnVhbC1wbGFuIHtcclxuICBtYXJnaW4tYm90dG9tOiAxLjdyZW07XHJcbn1cclxuXHJcbi5wcmljaW5nLWNhcmQgLmFubnVhbC1wbGFuIC5wbGFuLXByaWNlIHN1cCB7XHJcbiAgdG9wOiAtMS41cmVtO1xyXG4gIHJpZ2h0OiAwLjJyZW07XHJcbn1cclxuXHJcbi5wcmljaW5nLWNhcmQgLmFubnVhbC1wbGFuIC5wbGFuLXByaWNlIHNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMy41cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAwLjg7XHJcbn1cclxuXHJcbi5wcmljaW5nLWNhcmQgLmFubnVhbC1wbGFuIC5wbGFuLXByaWNlIHN1YiB7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDAuMTRyZW07XHJcbn1cclxuXHJcbi5wcmljaW5nLWNhcmQgLmFubnVhbC1wbGFuIC5hbm51YWwtcHJpY2luZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICByaWdodDogMDtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4ucHJpY2luZy1mcmVlLXRyaWFsIHtcclxuICBoZWlnaHQ6IDE2LjcxcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg2LCAxOTEsIDE5OSwgMC4xMik7XHJcbiAgbWFyZ2luLWxlZnQ6IC0ycmVtO1xyXG4gIG1hcmdpbi1yaWdodDogLTJyZW07XHJcbiAgbWFyZ2luLXRvcDogNy41cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDYuM3JlbTtcclxufVxyXG5cclxuLnByaWNpbmctZnJlZS10cmlhbCAucm93IHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5wcmljaW5nLWZyZWUtdHJpYWwgLnByaWNpbmctdHJpYWwtY29udGVudCB7XHJcbiAgcGFkZGluZzogMCAxcmVtO1xyXG59XHJcblxyXG4ucHJpY2luZy1mcmVlLXRyaWFsIC5wcmljaW5nLXRyaWFsLWNvbnRlbnQgaW1nIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAtMy4xcmVtO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxuICAucHJpY2luZy1mcmVlLXRyaWFsIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbiAgLnByaWNpbmctZnJlZS10cmlhbCAucHJpY2luZy10cmlhbC1jb250ZW50IHtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgLnByaWNpbmctZnJlZS10cmlhbCAucHJpY2luZy10cmlhbC1jb250ZW50IC5wcmljaW5nLXRyaWFsLWltZyB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xyXG4gIC5wcmljaW5nLWZyZWUtdHJpYWwge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xLjJyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0xLjJyZW07XHJcbiAgfVxyXG59XHJcblxyXG4uYmFzaWMtcHJpY2luZyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlnaHQpO1xyXG59XHJcblxyXG4uc3Vic2NyaXB0aW9uLWR1cmF0aW9uIHtcclxuICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDZweDtcclxufVxyXG5cclxuLnBhY2thZ2UtaWNvbiB7XHJcbiAgd2lkdGg6IDMzcHg7XHJcbiAgaGVpZ2h0OiA2NXB4O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 69845:
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/pages/admin/payments-component/payment.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentModule": () => (/* binding */ PaymentModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _buy_more_sms_buy_more_sms_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buy-more-sms/buy-more-sms.component */ 42806);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var app_common_common_custom_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/common/common-custom.module */ 21709);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var app_common_dynamic_component_dynamic_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/common/dynamic-component/dynamic.module */ 99641);
/* harmony import */ var _license_packages_license_packages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./license-packages/license-packages.component */ 64090);
/* harmony import */ var _common_admin_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/admin-common.module */ 60930);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);











const routes = [{
  path: "buy-more-sms",
  component: _buy_more_sms_buy_more_sms_component__WEBPACK_IMPORTED_MODULE_0__.BuyMoreSmsComponent
}, {
  path: "license-packages",
  component: _license_packages_license_packages_component__WEBPACK_IMPORTED_MODULE_3__.LicensePackagesComponent
}];
class PaymentModule {
  static #_ = this.ɵfac = function PaymentModule_Factory(t) {
    return new (t || PaymentModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: PaymentModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, app_common_common_custom_module__WEBPACK_IMPORTED_MODULE_1__.CommonCustomModule, app_common_dynamic_component_dynamic_module__WEBPACK_IMPORTED_MODULE_2__.DynamicModule, _common_admin_common_module__WEBPACK_IMPORTED_MODULE_4__.AdminCommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](PaymentModule, {
    declarations: [_buy_more_sms_buy_more_sms_component__WEBPACK_IMPORTED_MODULE_0__.BuyMoreSmsComponent, _license_packages_license_packages_component__WEBPACK_IMPORTED_MODULE_3__.LicensePackagesComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, app_common_common_custom_module__WEBPACK_IMPORTED_MODULE_1__.CommonCustomModule, app_common_dynamic_component_dynamic_module__WEBPACK_IMPORTED_MODULE_2__.DynamicModule, _common_admin_common_module__WEBPACK_IMPORTED_MODULE_4__.AdminCommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_pages_admin_payments-component_payment_module_ts.ee78e7ee12e83ca4.js.map