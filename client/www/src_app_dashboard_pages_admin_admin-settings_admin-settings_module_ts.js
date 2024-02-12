"use strict";
(self["webpackChunktermmy"] = self["webpackChunktermmy"] || []).push([["src_app_dashboard_pages_admin_admin-settings_admin-settings_module_ts"],{

/***/ 6676:
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/pages/admin/admin-settings/admin-settings.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminSettingsModule": () => (/* binding */ AdminSettingsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var app_common_dynamic_component_dynamic_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/common/dynamic-component/dynamic.module */ 9641);
/* harmony import */ var _online_payment_online_payment_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./online-payment/online-payment.component */ 2974);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _booking_settings_booking_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./booking-settings/booking-settings.component */ 7007);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);








const routes = [{
  path: "online-payment",
  component: _online_payment_online_payment_component__WEBPACK_IMPORTED_MODULE_1__.OnlinePaymentComponent
}, {
  path: "booking-settings",
  component: _booking_settings_booking_settings_component__WEBPACK_IMPORTED_MODULE_2__.BookingSettingsComponent
}];
class AdminSettingsModule {
  static #_ = this.ɵfac = function AdminSettingsModule_Factory(t) {
    return new (t || AdminSettingsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: AdminSettingsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, app_common_dynamic_component_dynamic_module__WEBPACK_IMPORTED_MODULE_0__.DynamicModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, app_common_dynamic_component_dynamic_module__WEBPACK_IMPORTED_MODULE_0__.DynamicModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AdminSettingsModule, {
    declarations: [_online_payment_online_payment_component__WEBPACK_IMPORTED_MODULE_1__.OnlinePaymentComponent, _booking_settings_booking_settings_component__WEBPACK_IMPORTED_MODULE_2__.BookingSettingsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, app_common_dynamic_component_dynamic_module__WEBPACK_IMPORTED_MODULE_0__.DynamicModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, app_common_dynamic_component_dynamic_module__WEBPACK_IMPORTED_MODULE_0__.DynamicModule]
  });
})();

/***/ }),

/***/ 7007:
/*!*****************************************************************************************************!*\
  !*** ./src/app/dashboard/pages/admin/admin-settings/booking-settings/booking-settings.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingSettingsComponent": () => (/* binding */ BookingSettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _common_dynamic_component_dynamic_forms_dynamic_forms_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../common/dynamic-component/dynamic-forms/dynamic-forms.component */ 3793);


class BookingSettingsComponent {
  constructor() {
    this.path = "pages/admin/admin-settings";
    this.file = "booking-settings.json";
    this.disableEdit = false;
  }
  onChangeData(event) {
    console.log(event);
    if (event.active) {
      this.disableEdit = true;
    }
  }
  static #_ = this.ɵfac = function BookingSettingsComponent_Factory(t) {
    return new (t || BookingSettingsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: BookingSettingsComponent,
    selectors: [["app-booking-settings"]],
    decls: 1,
    vars: 3,
    consts: [[3, "path", "file", "disableEdit", "onChangeData"]],
    template: function BookingSettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-dynamic-forms", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onChangeData", function BookingSettingsComponent_Template_app_dynamic_forms_onChangeData_0_listener($event) {
          return ctx.onChangeData($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("path", ctx.path)("file", ctx.file)("disableEdit", ctx.disableEdit);
      }
    },
    dependencies: [_common_dynamic_component_dynamic_forms_dynamic_forms_component__WEBPACK_IMPORTED_MODULE_0__.DynamicFormsComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2974:
/*!*************************************************************************************************!*\
  !*** ./src/app/dashboard/pages/admin/admin-settings/online-payment/online-payment.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnlinePaymentComponent": () => (/* binding */ OnlinePaymentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var app_services_call_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/services/call-api.service */ 9992);
/* harmony import */ var app_services_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/services/storage.service */ 1188);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 3935);





function OnlinePaymentComponent_span_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "general.connected"));
  }
}
function OnlinePaymentComponent_button_32_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 23);
  }
}
function OnlinePaymentComponent_button_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OnlinePaymentComponent_button_32_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.connectToStripe());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, OnlinePaymentComponent_button_32_span_1_Template, 1, 0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 2, "general.setUp"));
  }
}
function OnlinePaymentComponent_button_33_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 23);
  }
}
function OnlinePaymentComponent_button_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OnlinePaymentComponent_button_33_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.cancelStripe());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, OnlinePaymentComponent_button_33_span_1_Template, 1, 0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 2, "general.cancel"));
  }
}
class OnlinePaymentComponent {
  constructor(_service, _storage) {
    this._service = _service;
    this._storage = _storage;
    this.loading = false;
  }
  ngOnInit() {
    this._service.callGetMethod("api/getExternalAccountAdmin", "").subscribe(data => {
      if (data.length) {
        this.data = data[0];
      }
    });
  }
  connectToStripe() {
    this.loading = true;
    this._service.callPostMethod("/api/payment/stripe/connect", {
      admin_id: this._storage.getAdminIdSha1()
    }).subscribe(data => {
      window.open(data.url);
      this.loading = false;
    });
  }
  cancelStripe() {
    this.loading = true;
    this._service.callPostMethod("/api/payment/stripe/cancelStripeAccount", {}).subscribe(data => {
      this.data.stripe = null;
      this.loading = false;
    });
  }
  static #_ = this.ɵfac = function OnlinePaymentComponent_Factory(t) {
    return new (t || OnlinePaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](app_services_call_api_service__WEBPACK_IMPORTED_MODULE_0__.CallApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](app_services_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: OnlinePaymentComponent,
    selectors: [["app-online-payment"]],
    decls: 34,
    vars: 15,
    consts: [[1, "card"], [1, "card-body"], [1, "validate-form"], [1, "row"], [1, "col-12"], [1, "align-items-center", "mb-2", "border-bottom"], ["data-feather", "link", 1, "font-medium-3"], [1, "ml-75"], [1, "pt-2"], [1, "d-md-flex", "mt-2"], [1, "d-flex", "flex-shrink-0"], ["src", "../../../../../../assets/images/icons/stripe.svg", "alt", "stripe", "height", "38", "width", "38", 1, "me-1"], [1, "me-1", "ml-1"], [1, "fw-bolder", "mb-0"], ["type", "button", "class", "badge badge-light-success ml-75", 4, "ngIf"], [1, "flex-grow-1", "text-right"], [1, "mt-50", "mt-sm-0"], [1, "form-check", "form-switch", "form-check-primary"], ["type", "button", "class", "btn btn-outline-primary", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-outline-danger", 3, "click", 4, "ngIf"], ["type", "button", 1, "badge", "badge-light-success", "ml-75"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "mr-1"], ["type", "button", 1, "btn", "btn-outline-danger", 3, "click"]],
    template: function OnlinePaymentComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "form", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 3)(14, "div", 4)(15, "div", 0)(16, "div", 8)(17, "div", 9)(18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 12)(21, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, OnlinePaymentComponent_span_24_Template, 3, 3, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 15)(29, "div", 16)(30, "div", 17)(31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, OnlinePaymentComponent_button_32_Template, 4, 4, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, OnlinePaymentComponent_button_33_Template, 4, 4, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 7, "onlinePayment.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 9, "onlinePayment.text"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](23, 11, "onlinePayment.stripeTitle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.data && ctx.data.stripe);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](27, 13, "onlinePayment.stripeText"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.data || !ctx.data.stripe);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.data && ctx.data.stripe);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_pages_admin_admin-settings_admin-settings_module_ts.js.map