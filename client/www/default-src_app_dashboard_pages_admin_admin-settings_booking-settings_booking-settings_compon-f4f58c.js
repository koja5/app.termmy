"use strict";
(self["webpackChunktermmy"] = self["webpackChunktermmy"] || []).push([["default-src_app_dashboard_pages_admin_admin-settings_booking-settings_booking-settings_compon-f4f58c"],{

/***/ 47007:
/*!*****************************************************************************************************!*\
  !*** ./src/app/dashboard/pages/admin/admin-settings/booking-settings/booking-settings.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingSettingsComponent": () => (/* binding */ BookingSettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_services_call_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/services/call-api.service */ 79992);
/* harmony import */ var app_common_toastr_toastr_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/common/toastr/toastr.component */ 84329);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var app_services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/storage.service */ 71188);
/* harmony import */ var app_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/message.service */ 42684);
/* harmony import */ var _common_dynamic_component_dynamic_forms_dynamic_forms_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../common/dynamic-component/dynamic-forms/dynamic-forms.component */ 83793);







class BookingSettingsComponent {
  constructor(_service, _toastr, _translate, _storageService, _messageService) {
    this._service = _service;
    this._toastr = _toastr;
    this._translate = _translate;
    this._storageService = _storageService;
    this._messageService = _messageService;
    this.path = "pages/admin/admin-settings";
    this.file = "booking-settings.json";
    this.disableEdit = false;
  }
  onChangeData(event) {
    if (event.active) {
      this.disableEdit = true;
    }
  }
  handleSubmit(event) {
    this._service.callPostMethod("/api/booking/setBookingConfig", event).subscribe(data => {
      if (data === "exists") {
        this._toastr.showWarningCustom(this._translate.instant("bookingSettings.bookingLinkExists"), "");
      } else if (data) {
        this.sendInfoForSetupApp(event);
        this._toastr.showSuccess();
      } else {
        this._toastr.showError();
      }
    });
  }
  sendInfoForSetupApp(event) {
    if (this._storageService.getSessionStorage("setup")) {
      let setup = this._storageService.getSessionStorage("setup");
      if (event.active) {
        setup.booking = true;
      } else {
        setup.booking = false;
      }
      this._messageService.sendSetupApp(setup);
    }
  }
  static #_ = this.ɵfac = function BookingSettingsComponent_Factory(t) {
    return new (t || BookingSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_services_call_api_service__WEBPACK_IMPORTED_MODULE_0__.CallApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_common_toastr_toastr_component__WEBPACK_IMPORTED_MODULE_1__.ToastrComponent), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_services_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_services_message_service__WEBPACK_IMPORTED_MODULE_3__.MessageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: BookingSettingsComponent,
    selectors: [["app-booking-settings"]],
    decls: 1,
    vars: 3,
    consts: [[3, "path", "file", "disableEdit", "onChangeData", "submit"]],
    template: function BookingSettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-dynamic-forms", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onChangeData", function BookingSettingsComponent_Template_app_dynamic_forms_onChangeData_0_listener($event) {
          return ctx.onChangeData($event);
        })("submit", function BookingSettingsComponent_Template_app_dynamic_forms_submit_0_listener($event) {
          return ctx.handleSubmit($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("path", ctx.path)("file", ctx.file)("disableEdit", ctx.disableEdit);
      }
    },
    dependencies: [_common_dynamic_component_dynamic_forms_dynamic_forms_component__WEBPACK_IMPORTED_MODULE_4__.DynamicFormsComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 86505:
/*!*************************************************************************************!*\
  !*** ./src/app/dashboard/pages/admin/admin-settings/holidays/holidays.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HolidaysComponent": () => (/* binding */ HolidaysComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_services_configuration_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/services/configuration.service */ 74937);
/* harmony import */ var app_services_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/services/storage.service */ 71188);
/* harmony import */ var app_services_call_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/call-api.service */ 79992);
/* harmony import */ var app_common_toastr_toastr_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/common/toastr/toastr.component */ 84329);
/* harmony import */ var app_services_help_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/help.service */ 59993);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _common_dynamic_component_dynamic_grid_dynamic_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../common/dynamic-component/dynamic-grid/dynamic-grid.component */ 99361);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ 90413);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 33935);











function HolidaysComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 13)(1, "h6", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "app-dynamic-grid", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 4, "holidays.listOfHolidays"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx_r0.holidays)("path", ctx_r0.path)("file", ctx_r0.file);
  }
}
class HolidaysComponent {
  constructor(_configurationService, _storageService, _service, _toastr, _helpService) {
    this._configurationService = _configurationService;
    this._storageService = _storageService;
    this._service = _service;
    this._toastr = _toastr;
    this._helpService = _helpService;
    this.path = "grids/admin";
    this.file = "holidays.json";
    this.selectedCountry = {
      id: null,
      code: null
    };
  }
  ngOnInit() {
    this.getMyHolidays();
    this.getCountryList();
  }
  getMyHolidays() {
    this._service.callGetMethod("/api/getMyHolidays", "").subscribe(data => {
      if (data.length) {
        this.selectedCountry = data[0];
      } else {
        this.selectedCountry.code = "RS";
      }
      this.getHolidaysForSelectedCountry(this.selectedCountry.code);
    });
  }
  getCountryList() {
    this._configurationService.getFromAssets("data/countries-list", this._storageService.getSelectedLanguage() + ".json").subscribe(data => {
      this.countries = data;
    }, err => {
      this._configurationService.getFromAssets("data/countries-list", "en.json").subscribe(data => {
        this.countries = data;
      });
    });
  }
  getHolidaysForSelectedCountry(code) {
    this.holidays = this._helpService.getHolidaysForSelectedCountry(code);
  }
  onChangeCountry(event) {
    this.holidays = null;
    setTimeout(() => {
      if (event) {
        this.getHolidaysForSelectedCountry(event.code);
      } else {
        this.holidays = [];
      }
    }, 20);
  }
  saveHoliday() {
    this._service.callPostMethod("/api/setHoliday", this.selectedCountry).subscribe(data => {
      if (data) {
        this.selectedCountry.id = data;
        this._toastr.showSuccess();
      }
    });
  }
  static #_ = this.ɵfac = function HolidaysComponent_Factory(t) {
    return new (t || HolidaysComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_services_configuration_service__WEBPACK_IMPORTED_MODULE_0__.ConfigurationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_services_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_services_call_api_service__WEBPACK_IMPORTED_MODULE_2__.CallApiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_common_toastr_toastr_component__WEBPACK_IMPORTED_MODULE_3__.ToastrComponent), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_services_help_service__WEBPACK_IMPORTED_MODULE_4__.HelpService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: HolidaysComponent,
    selectors: [["app-holidays"]],
    decls: 25,
    vars: 19,
    consts: [[1, "validate-form"], [1, "row"], [1, "col-12"], [1, "align-items-center", "mb-2", "border-bottom"], ["data-feather", "link", 1, "font-medium-3"], [1, "ml-75"], [1, "card"], [1, "pt-2"], [1, "col-12", "mb-1"], ["id", "country", "name", "country", 3, "items", "bindLabel", "bindValue", "closeOnSelect", "searchable", "ngModel", "ngModelChange", "change"], ["class", "archive mt-4", 4, "ngIf"], [1, "text-right"], [1, "btn", "btn-primary", 3, "click"], [1, "archive", "mt-4"], [1, "border-bottom", "pb-1"], [3, "data", "path", "file"]],
    template: function HolidaysComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 1)(12, "div", 2)(13, "div", 6)(14, "div", 7)(15, "div", 8)(16, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "ng-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function HolidaysComponent_Template_ng_select_ngModelChange_19_listener($event) {
          return ctx.selectedCountry.code = $event;
        })("change", function HolidaysComponent_Template_ng_select_change_19_listener($event) {
          return ctx.onChangeCountry($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, HolidaysComponent_div_20_Template, 5, 6, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 11)(22, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HolidaysComponent_Template_button_click_22_listener() {
          return ctx.saveHoliday();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 11, "holidays.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](10, 13, "holidays.text"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](18, 15, "holidays.countryHoliday"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("items", ctx.countries)("bindLabel", "country")("bindValue", "code")("closeOnSelect", true)("searchable", true)("ngModel", ctx.selectedCountry.code);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.holidays);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](24, 17, "general.save"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, _common_dynamic_component_dynamic_grid_dynamic_grid_component__WEBPACK_IMPORTED_MODULE_5__.DynamicGridComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 51892:
/*!***********************************************************************************!*\
  !*** ./src/app/dashboard/pages/admin/admin-settings/license/license.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LicenseComponent": () => (/* binding */ LicenseComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _common_license_status_license_status_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/license-status/license-status.component */ 60912);


class LicenseComponent {
  static #_ = this.ɵfac = function LicenseComponent_Factory(t) {
    return new (t || LicenseComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: LicenseComponent,
    selectors: [["app-license"]],
    decls: 1,
    vars: 0,
    template: function LicenseComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-license-status");
      }
    },
    dependencies: [_common_license_status_license_status_component__WEBPACK_IMPORTED_MODULE_0__.LicenseStatusComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 82974:
/*!*************************************************************************************************!*\
  !*** ./src/app/dashboard/pages/admin/admin-settings/online-payment/online-payment.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnlinePaymentComponent": () => (/* binding */ OnlinePaymentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_services_call_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/services/call-api.service */ 79992);
/* harmony import */ var app_services_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/services/storage.service */ 71188);
/* harmony import */ var app_services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/message.service */ 42684);
/* harmony import */ var app_services_help_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/help.service */ 59993);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 33935);








function OnlinePaymentComponent_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "general.connected"));
  }
}
function OnlinePaymentComponent_button_30_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "span", 22);
  }
}
function OnlinePaymentComponent_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OnlinePaymentComponent_button_30_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.connectToStripe());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, OnlinePaymentComponent_button_30_span_1_Template, 1, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, "general.setUp"));
  }
}
function OnlinePaymentComponent_button_31_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "span", 22);
  }
}
function OnlinePaymentComponent_button_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OnlinePaymentComponent_button_31_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r7.cancelStripe());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, OnlinePaymentComponent_button_31_span_1_Template, 1, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, "general.cancel"));
  }
}
class OnlinePaymentComponent {
  constructor(_service, _storageService, _messageService, _helpService) {
    this._service = _service;
    this._storageService = _storageService;
    this._messageService = _messageService;
    this._helpService = _helpService;
    this.loading = false;
  }
  ngOnInit() {
    this._service.callGetMethod("api/getExternalAccountAdmin", "").subscribe(data => {
      if (data.length) {
        this.data = data[0];
        this.sendInfoForSetupApp();
      }
    });
  }
  connectToStripe() {
    this.loading = true;
    this._service.callPostMethod("/api/payment/stripe/connect", {
      admin_id: this._storageService.getAdminIdSha1()
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
      this.sendInfoForSetupApp();
    });
  }
  sendInfoForSetupApp() {
    if (this._storageService.getSessionStorage("setup")) {
      let setup = this._storageService.getSessionStorage("setup");
      let setupOld = this._helpService.copyObject(setup);
      if (this.data && this.data.stripe) {
        setup.payment = true;
      } else {
        setup.payment = false;
      }
      if (setup.payment != setupOld.payment) {
        this._messageService.sendSetupApp(setup);
      }
    }
  }
  static #_ = this.ɵfac = function OnlinePaymentComponent_Factory(t) {
    return new (t || OnlinePaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_services_call_api_service__WEBPACK_IMPORTED_MODULE_0__.CallApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_services_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_services_message_service__WEBPACK_IMPORTED_MODULE_2__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_services_help_service__WEBPACK_IMPORTED_MODULE_3__.HelpService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: OnlinePaymentComponent,
    selectors: [["app-online-payment"]],
    decls: 32,
    vars: 15,
    consts: [[1, "validate-form"], [1, "row"], [1, "col-12"], [1, "align-items-center", "mb-2", "border-bottom"], ["data-feather", "link", 1, "font-medium-3"], [1, "ml-75"], [1, "card"], [1, "pt-2"], [1, "d-md-flex", "mt-2"], [1, "d-flex", "flex-shrink-0"], ["src", "../../../../../../assets/images/icons/stripe.svg", "alt", "stripe", "height", "38", "width", "38", 1, "me-1"], [1, "me-1", "ml-1"], [1, "fw-bolder", "mb-0"], ["type", "button", "class", "badge badge-light-success ml-75", 4, "ngIf"], [1, "flex-grow-1", "text-right"], [1, "mt-50", "mt-sm-0"], [1, "form-check", "form-switch", "form-check-primary"], ["type", "button", "class", "btn btn-outline-primary", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-outline-danger", 3, "click", 4, "ngIf"], ["type", "button", 1, "badge", "badge-light-success", "ml-75"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "mr-1"], ["type", "button", 1, "btn", "btn-outline-danger", 3, "click"]],
    template: function OnlinePaymentComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 1)(12, "div", 2)(13, "div", 6)(14, "div", 7)(15, "div", 8)(16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 11)(19, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, OnlinePaymentComponent_span_22_Template, 3, 3, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 14)(27, "div", 15)(28, "div", 16)(29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, OnlinePaymentComponent_button_30_Template, 4, 4, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, OnlinePaymentComponent_button_31_Template, 4, 4, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 7, "onlinePayment.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 9, "onlinePayment.text"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](21, 11, "onlinePayment.stripeTitle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.data && ctx.data.stripe);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](25, 13, "onlinePayment.stripeText"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.data || !ctx.data.stripe);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.data && ctx.data.stripe);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 88221:
/*!************************************************************************************************************************************!*\
  !*** ./src/app/dashboard/pages/admin/admin-settings/reminders/email-reminder/email-reminder-card/email-reminder-card.component.ts ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailReminderCardComponent": () => (/* binding */ EmailReminderCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_services_call_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/services/call-api.service */ 79992);
/* harmony import */ var app_common_toastr_toastr_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/common/toastr/toastr.component */ 84329);
/* harmony import */ var app_services_help_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/help.service */ 59993);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _common_dynamic_component_dynamic_forms_dynamic_fields_common_explanation_mark_explanation_mark_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../common/dynamic-component/dynamic-forms/dynamic-fields/common/explanation-mark/explanation-mark.component */ 64168);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);









function EmailReminderCardComponent_span_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "emailReminder.active"));
  }
}
function EmailReminderCardComponent_span_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "emailReminder.inactive"));
  }
}
class EmailReminderCardComponent {
  constructor(_service, _toastr, _helpService, _translate) {
    this._service = _service;
    this._toastr = _toastr;
    this._helpService = _helpService;
    this._translate = _translate;
    this.changeValue = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
  }
  modelChangeFn(event) {
    console.log(this.item);
  }
  ngOnChanges() {
    console.log(this.item);
  }
  change() {
    this.changeValue.emit(this.item);
  }
  sendTestMessage() {
    this._service.callPostMethod("api/email-reminder/sendTestEmailMessage", this.item).subscribe(data => {
      if (data) {
        this._toastr.showSuccessCustom(this._helpService.replaceText(this._translate.instant("emailReminder.sentTestEmailTo"), "#email", data));
      }
    });
  }
  static #_ = this.ɵfac = function EmailReminderCardComponent_Factory(t) {
    return new (t || EmailReminderCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_services_call_api_service__WEBPACK_IMPORTED_MODULE_0__.CallApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_common_toastr_toastr_component__WEBPACK_IMPORTED_MODULE_1__.ToastrComponent), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_services_help_service__WEBPACK_IMPORTED_MODULE_2__.HelpService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: EmailReminderCardComponent,
    selectors: [["app-email-reminder-card"]],
    inputs: {
      item: "item"
    },
    outputs: {
      changeValue: "changeValue"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
    decls: 33,
    vars: 28,
    consts: [[1, "card-header", "d-flex", "justify-content-between", "align-items-center", "pb-1", "border-bottom"], [1, "card-title"], [3, "explanation"], ["ngbDropdown", ""], ["aria-hidden", "true", "ngbDropdownToggle", "", "id", "dropdownMenuButton", 1, "fa", "fa-cog", "config-icon"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownMenuButton"], ["ngbDropdownItem", "", 3, "click"], [1, "fa", "fa-comment-o"], [1, "card-body", "mt-2", "font-italic"], [1, "text-right", "status"], ["class", "badge badge-light-success", 4, "ngIf"], ["class", "badge badge-light-danger", 4, "ngIf"], [1, "badge", "badge-light-success"], [1, "badge", "badge-light-danger"]],
    template: function EmailReminderCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "div")(3, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "app-explanation-mark", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 5)(10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmailReminderCardComponent_Template_a_click_10_listener() {
          ctx.item.active = !ctx.item.active;
          return ctx.change();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmailReminderCardComponent_Template_a_click_15_listener() {
          return ctx.sendTestMessage();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 8)(20, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "br")(25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, EmailReminderCardComponent_span_31_Template, 3, 3, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, EmailReminderCardComponent_span_32_Template, 3, 3, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("card border ", !ctx.item.active ? "inactive" : "", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx.item.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("explanation", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 16, ctx.item.text));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("fa fa-", ctx.item.active ? "pause" : "play", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.item.active ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 18, "emailReminder.deactiveNotification") : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 20, "emailReminder.activeNotification"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](18, 22, "emailReminder.testMessage"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](22, 24, "emailReminder.subject"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.item.subject, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](28, 26, "emailReminder.message"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.item.message, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.item.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.item.active);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _common_dynamic_component_dynamic_forms_dynamic_fields_common_explanation_mark_explanation_mark_component__WEBPACK_IMPORTED_MODULE_3__.ExplanationMarkComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdownItem, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
    styles: [".config-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  cursor: pointer;\n}\n\n.status[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.inactive[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.card-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: none !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL3BhZ2VzL2FkbWluL2FkbWluLXNldHRpbmdzL3JlbWluZGVycy9lbWFpbC1yZW1pbmRlci9lbWFpbC1yZW1pbmRlci1jYXJkL2VtYWlsLXJlbWluZGVyLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLHdCQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuY29uZmlnLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zdGF0dXMge1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmluYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG59XHJcblxyXG4uY2FyZC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uY2FyZC10ZXh0IHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcclxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 52634:
/*!*********************************************************************************************************!*\
  !*** ./src/app/dashboard/pages/admin/admin-settings/reminders/email-reminder/email-reminder-initial.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailReminderInitial": () => (/* binding */ EmailReminderInitial)
/* harmony export */ });
class EmailReminderInitial {
  constructor() {
    this.active = false;
    this.config = {
      clientImmediatelyReminder: {
        title: "Confirmation of booking",
        text: "Immediately upon appointment",
        subject: "Your appointment is confirmed",
        message: "Your appointment #date at #time has been confirmed. Our address is #address. #company",
        active: true
      },
      clientDayBeforeReminder: {
        title: "Day before",
        text: "Day before at 8 p.m",
        subject: "Reminder for tomorrow appointment",
        message: "Reminder: You have an appointment with us at #company tomorrow at #time. Our address is #address. Greeting",
        active: true
      },
      clientHappyBirthday: {
        title: "Birthday card",
        text: "It is sent on a birthday",
        subject: "Happy birthday!",
        message: "Lots of happiness and laughter. Greetings from #company",
        active: false
      },
      clientThankForCommingToUs: {
        title: "Thanks for comming",
        text: "It is sent 1 hour after the appointment",
        subject: "Thank you!",
        message: "Thank you for your visit, we hope you enjoyed the service. Thank you for your trust! #company",
        active: false
      },
      employeeImmediatelyReminder: {
        title: "Confirmation of booking",
        text: "Immediately upon appointment",
        subject: "Your have new appointment",
        message: "New appointment #date at #time has been confirmed. #company",
        active: true
      },
      employeeDayBeforeReminder: {
        title: "Day before",
        text: "Day before at 8 p.m",
        subject: "Reminder for tomorrow appointment",
        message: "Reminder: You have an appointment tomorrow at #time. Greeting",
        active: true
      }
    };
  }
}

/***/ }),

/***/ 14332:
/*!***********************************************************************************************************!*\
  !*** ./src/app/dashboard/pages/admin/admin-settings/reminders/email-reminder/email-reminder.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailReminderComponent": () => (/* binding */ EmailReminderComponent)
/* harmony export */ });
/* harmony import */ var _email_reminder_initial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email-reminder-initial */ 52634);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/services/call-api.service */ 79992);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _common_dynamic_component_dynamic_forms_dynamic_fields_common_explanation_mark_explanation_mark_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../common/dynamic-component/dynamic-forms/dynamic-fields/common/explanation-mark/explanation-mark.component */ 64168);
/* harmony import */ var _email_reminder_card_email_reminder_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./email-reminder-card/email-reminder-card.component */ 88221);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 33935);








function EmailReminderComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div")(2, "div", 1)(3, "div", 2)(4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "app-explanation-mark", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "h6", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 2)(15, "div", 7)(16, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function EmailReminderComponent_div_0_Template_input_ngModelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.reminderConfig.active = $event);
    })("change", function EmailReminderComponent_div_0_Template_input_change_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.setEmailReminderConfig($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div")(18, "h5", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 10)(22, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div")(26, "div", 11)(27, "div", 12)(28, "app-email-reminder-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("changeValue", function EmailReminderComponent_div_0_Template_app_email_reminder_card_changeValue_28_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.setEmailReminderConfig($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 12)(30, "app-email-reminder-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("changeValue", function EmailReminderComponent_div_0_Template_app_email_reminder_card_changeValue_30_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.setEmailReminderConfig($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 11)(35, "div", 12)(36, "app-email-reminder-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("changeValue", function EmailReminderComponent_div_0_Template_app_email_reminder_card_changeValue_36_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.setEmailReminderConfig($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](39, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 11)(41, "div", 12)(42, "app-email-reminder-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("changeValue", function EmailReminderComponent_div_0_Template_app_email_reminder_card_changeValue_42_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r7.setEmailReminderConfig($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 12)(44, "app-email-reminder-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("changeValue", function EmailReminderComponent_div_0_Template_app_email_reminder_card_changeValue_44_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.setEmailReminderConfig($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 13, "emailReminder.title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("explanation", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 15, "emailReminder.explanation"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 17, "emailReminder.text"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r0.reminderConfig.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](20, 19, "emailReminder.activeEmailReminder"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](24, 21, "emailReminder.reminderClientTitle"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("item", ctx_r0.reminderConfig.config.clientImmediatelyReminder);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("item", ctx_r0.reminderConfig.config.clientDayBeforeReminder);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](33, 23, "emailReminder.clientLoyalityTitle"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("item", ctx_r0.reminderConfig.config.clientHappyBirthday);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](39, 25, "emailReminder.reminderEmployeeTitle"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("item", ctx_r0.reminderConfig.config.employeeImmediatelyReminder);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("item", ctx_r0.reminderConfig.config.employeeDayBeforeReminder);
  }
}
class EmailReminderComponent {
  constructor(_service) {
    this._service = _service;
    this.loader = true;
  }
  ngOnInit() {
    this.initialize();
  }
  initialize() {
    this.getEmailReminderConfig();
  }
  getEmailReminderConfig() {
    this.loader = true;
    this._service.callGetMethod("/api/email-reminder/getEmailReminderConfig", "").subscribe(data => {
      this.loader = false;
      if (data) {
        this.reminderConfig = data;
      } else {
        this.reminderConfig = new _email_reminder_initial__WEBPACK_IMPORTED_MODULE_0__.EmailReminderInitial();
      }
    });
  }
  setEmailReminderConfig(event) {
    this._service.callPostMethod("/api/email-reminder/setEmailReminderConfig", this.reminderConfig).subscribe(data => {
      console.log(data);
    });
  }
  static #_ = this.ɵfac = function EmailReminderComponent_Factory(t) {
    return new (t || EmailReminderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__.CallApiService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: EmailReminderComponent,
    selectors: [["app-email-reminder"]],
    inputs: {
      reminderNotification: "reminderNotification"
    },
    decls: 1,
    vars: 1,
    consts: [[4, "ngIf"], [1, "row"], [1, "col-12"], [1, "align-items-center", "mb-2", "border-bottom"], ["data-feather", "link", 1, "font-medium-3"], [1, "ml-75"], [3, "explanation"], [1, "form-check", "form-switch", "d-flex", "align-items-center", "mb-3"], ["type", "checkbox", "name", "sms-reminder", 1, "form-check-input", 3, "ngModel", "ngModelChange", "change"], ["for", "sms-reminder", 1, "form-check-label", "d-block"], [1, "card"], [1, "row", "mt-2"], [1, "col-lg-4", "col-12"], [3, "item", "changeValue"]],
    template: function EmailReminderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, EmailReminderComponent_div_0_Template, 45, 27, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.reminderConfig);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _common_dynamic_component_dynamic_forms_dynamic_fields_common_explanation_mark_explanation_mark_component__WEBPACK_IMPORTED_MODULE_2__.ExplanationMarkComponent, _email_reminder_card_email_reminder_card_component__WEBPACK_IMPORTED_MODULE_3__.EmailReminderCardComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
    styles: [".form-check[_ngcontent-%COMP%] {\n  display: block;\n  min-height: 1.45rem;\n  padding-left: 0;\n  margin-bottom: 0;\n}\n\n.form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  float: left;\n  margin-left: -1.785rem;\n}\n\n.form-check-input[_ngcontent-%COMP%] {\n  width: 1.285rem;\n  height: 1.285rem;\n  margin-top: 0.0825rem;\n  vertical-align: top;\n  background-color: #fff;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n  border: 1px solid #d8d6de;\n  -webkit-appearance: none;\n          appearance: none;\n  -webkit-print-color-adjust: exact;\n          color-adjust: exact;\n}\n\n.form-check-input[type=checkbox][_ngcontent-%COMP%] {\n  border-radius: 3px;\n}\n\n.form-check-input[type=radio][_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n\n.form-check-input[_ngcontent-%COMP%]:active {\n  filter: brightness(90%);\n}\n\n.form-check-input[_ngcontent-%COMP%]:focus {\n  border-color: #7367f0;\n  outline: 0;\n  box-shadow: 0 2px 4px 0 rgba(115, 103, 240, 0.4);\n}\n\n.form-check-input[_ngcontent-%COMP%]:checked {\n  background-color: #7367f0;\n  border-color: #7367f0;\n}\n\n.form-check-input[_ngcontent-%COMP%]:checked[type=checkbox] {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9.5 7.5'%3e%3cpolyline points='0.75 4.35 4.18 6.75 8.75 0.75' style='fill:none;stroke:%23fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px'/%3e%3c/svg%3e\");\n}\n\n.form-check-input[_ngcontent-%COMP%]:checked[type=radio] {\n  background-image: none;\n}\n\n.form-check-input[type=checkbox][_ngcontent-%COMP%]:indeterminate {\n  background-color: #7367f0;\n  border-color: #7367f0;\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-minus'%3e%3cline x1='5' y1='12' x2='19' y2='12'%3e%3c/line%3e%3c/svg%3e\");\n}\n\n.form-check-input[_ngcontent-%COMP%]:disabled {\n  pointer-events: none;\n  filter: none;\n  opacity: 0.65;\n}\n\n.form-check-input[disabled][_ngcontent-%COMP%]    ~ .form-check-label[_ngcontent-%COMP%], .form-check-input[_ngcontent-%COMP%]:disabled    ~ .form-check-label[_ngcontent-%COMP%] {\n  opacity: 0.65;\n}\n\n.form-check-label[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.form-switch[_ngcontent-%COMP%] {\n  padding-left: 3.5rem;\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  width: 3rem;\n  margin-left: -3.5rem;\n  background-image: url(\"data:image/svg+xml,%3csvg width='26px' height='26px' viewBox='0 0 26 27' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3ccircle id='path-1' cx='8' cy='8' r='8'%3e%3c/circle%3e%3cfilter x='-40.6%' y='-21.9%' width='168.8%' height='168.8%' filterUnits='objectBoundingBox' id='filter-2'%3e%3cfeOffset dx='-1' dy='2' in='SourceAlpha' result='shadowOffsetOuter1'%3e%3c/feOffset%3e%3cfeGaussianBlur stdDeviation='1.5' in='shadowOffsetOuter1' result='shadowBlurOuter1'%3e%3c/feGaussianBlur%3e%3cfeColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0' type='matrix' in='shadowBlurOuter1'%3e%3c/feColorMatrix%3e%3c/filter%3e%3c/defs%3e%3cg id='Artboard' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3e%3cg id='switches-dot' transform='translate%285.000000, 5.000000%29' fill-rule='nonzero'%3e%3cg id='Oval'%3e%3cuse fill='black' fill-opacity='1' filter='url%28%23filter-2%29' xlink:href='%23path-1'%3e%3c/use%3e%3cuse fill='%23fff' xlink:href='%23path-1'%3e%3c/use%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e\");\n  background-position: left center;\n  border-radius: 3rem;\n  transition: background-position 0.15s ease-in-out, background-color 0.1s ease;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n.form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:focus {\n  background-image: url(\"data:image/svg+xml,%3csvg width='26px' height='26px' viewBox='0 0 26 27' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3ccircle id='path-1' cx='8' cy='8' r='8'%3e%3c/circle%3e%3cfilter x='-40.6%' y='-21.9%' width='168.8%' height='168.8%' filterUnits='objectBoundingBox' id='filter-2'%3e%3cfeOffset dx='-1' dy='2' in='SourceAlpha' result='shadowOffsetOuter1'%3e%3c/feOffset%3e%3cfeGaussianBlur stdDeviation='1.5' in='shadowOffsetOuter1' result='shadowBlurOuter1'%3e%3c/feGaussianBlur%3e%3cfeColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0' type='matrix' in='shadowBlurOuter1'%3e%3c/feColorMatrix%3e%3c/filter%3e%3c/defs%3e%3cg id='Artboard' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3e%3cg id='switches-dot' transform='translate%285.000000, 5.000000%29' fill-rule='nonzero'%3e%3cg id='Oval'%3e%3cuse fill='black' fill-opacity='1' filter='url%28%23filter-2%29' xlink:href='%23path-1'%3e%3c/use%3e%3cuse fill='%23fff' xlink:href='%23path-1'%3e%3c/use%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e\");\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked {\n  background-position: right center;\n  background-image: url(\"data:image/svg+xml,%3csvg width='26px' height='26px' viewBox='0 0 26 27' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3ccircle id='path-1' cx='8' cy='8' r='8'%3e%3c/circle%3e%3cfilter x='-40.6%' y='-21.9%' width='168.8%' height='168.8%' filterUnits='objectBoundingBox' id='filter-2'%3e%3cfeOffset dx='-1' dy='2' in='SourceAlpha' result='shadowOffsetOuter1'%3e%3c/feOffset%3e%3cfeGaussianBlur stdDeviation='1.5' in='shadowOffsetOuter1' result='shadowBlurOuter1'%3e%3c/feGaussianBlur%3e%3cfeColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0' type='matrix' in='shadowBlurOuter1'%3e%3c/feColorMatrix%3e%3c/filter%3e%3c/defs%3e%3cg id='Artboard' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3e%3cg id='switches-dot' transform='translate%285.000000, 5.000000%29' fill-rule='nonzero'%3e%3cg id='Oval'%3e%3cuse fill='black' fill-opacity='1' filter='url%28%23filter-2%29' xlink:href='%23path-1'%3e%3c/use%3e%3cuse fill='%23fff' xlink:href='%23path-1'%3e%3c/use%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e\");\n}\n\n.form-check-inline[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 1rem;\n}\n\n.form-check[_ngcontent-%COMP%]:not(.form-switch)   .form-check-input[type=checkbox][_ngcontent-%COMP%]:checked {\n  background-size: 65%;\n}\n\n.form-check[_ngcontent-%COMP%]:not(.form-switch)   .form-check-input[_ngcontent-%COMP%]:disabled:not(:checked) {\n  background-color: #efefef;\n  border-color: #efefef;\n  opacity: 1;\n}\n\n.form-check-input[_ngcontent-%COMP%]:not(:disabled):checked {\n  box-shadow: 0 2px 4px 0 rgba(115, 103, 240, 0.4);\n}\n\n.form-check-input[_ngcontent-%COMP%]:not(:disabled):indeterminate {\n  background-size: 85%;\n}\n\n\n.form-switch[_ngcontent-%COMP%] {\n  position: relative;\n  \n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  height: 1.7rem;\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked {\n  box-shadow: none !important;\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:not(:checked) {\n  background-color: #e2e2e2;\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:active {\n  filter: none;\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:not(:disabled):checked, .form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:not(:disabled):focus {\n  box-shadow: none !important;\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%] {\n  line-height: 1.7rem;\n  \n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   .switch-text-left[_ngcontent-%COMP%], .form-switch[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   .switch-text-right[_ngcontent-%COMP%], .form-switch[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   .switch-icon-left[_ngcontent-%COMP%], .form-switch[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   .switch-icon-right[_ngcontent-%COMP%] {\n  position: absolute;\n  -webkit-user-select: none;\n          user-select: none;\n  line-height: 1.65;\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   .switch-text-left[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .form-switch[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   .switch-text-left[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .form-switch[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   .switch-text-right[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .form-switch[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   .switch-text-right[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .form-switch[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   .switch-icon-left[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .form-switch[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   .switch-icon-left[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .form-switch[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   .switch-icon-right[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .form-switch[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   .switch-icon-right[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 13px;\n  width: 13px;\n  font-size: 13px;\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   .switch-text-left[_ngcontent-%COMP%], .form-switch[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   .switch-icon-left[_ngcontent-%COMP%] {\n  left: 6px;\n  top: 0;\n  color: #fff;\n  opacity: 0;\n  transform: translateX(8px);\n  transition: opacity 0.1s ease, transform 0.15s ease;\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   .switch-text-right[_ngcontent-%COMP%], .form-switch[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   .switch-icon-right[_ngcontent-%COMP%] {\n  left: 25px;\n  top: 0;\n  opacity: 1;\n  transform: translateX(0px);\n  transition: opacity 0.08s ease, transform 0.15s ease;\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked    ~ .form-check-label[_ngcontent-%COMP%]::before {\n  box-shadow: none;\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked    ~ .form-check-label[_ngcontent-%COMP%]::after {\n  transform: translateX(1.4rem);\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked    ~ .form-check-label[_ngcontent-%COMP%]   .switch-text-left[_ngcontent-%COMP%], .form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked    ~ .form-check-label[_ngcontent-%COMP%]   .switch-icon-left[_ngcontent-%COMP%] {\n  transform: translateX(0);\n  opacity: 1;\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked    ~ .form-check-label[_ngcontent-%COMP%]   .switch-text-right[_ngcontent-%COMP%], .form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked    ~ .form-check-label[_ngcontent-%COMP%]   .switch-icon-right[_ngcontent-%COMP%] {\n  transform: translateX(-8px);\n  opacity: 0;\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:not(:checked)    ~ .form-check-label[_ngcontent-%COMP%]   .switch-text-left[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:not(:checked)    ~ .form-check-label[_ngcontent-%COMP%]   .switch-text-right[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked    ~ .form-check-label[_ngcontent-%COMP%]   .switch-text-right[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked    ~ .form-check-label[_ngcontent-%COMP%]   .switch-text-left[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AY29yZS9zY3NzL2Jhc2Uvc3dpdGNoLWJ1dHRvbi5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9kYXNoYm9hcmQvcGFnZXMvYWRtaW4vYWRtaW4tc2V0dGluZ3MvcmVtaW5kZXJzL2VtYWlsLXJlbWluZGVyL2VtYWlsLXJlbWluZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7VUFBQSxnQkFBQTtFQUNBLGlDQUFBO1VBQUEsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsdUJBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGdEQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5UkFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSx3VUFBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBOztFQUVFLGFBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxvbENBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsNkVBQUE7QUNDRjs7QURFQTtFQUNFO0lBQ0UsZ0JBQUE7RUNDRjtBQUNGO0FERUE7RUFDRSxvbENBQUE7QUNBRjs7QURHQTtFQUNFLGlDQUFBO0VBQ0Esb2xDQUFBO0FDQUY7O0FER0E7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FDQUY7O0FER0E7RUFDRSxvQkFBQTtBQ0FGOztBREdBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7QUNBRjs7QURHQTtFQUNFLGdEQUFBO0FDQUY7O0FER0E7RUFDRSxvQkFBQTtBQ0FGOztBREdBLGFBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsOEJBQUE7QUNBRjs7QURHQTtFQUNFLGNBQUE7QUNBRjs7QURHQTtFQUNFLDJCQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FER0E7RUFDRSx5QkFBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtBQ0FGOztBREdBOztFQUVFLDJCQUFBO0FDQUY7O0FER0E7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FDQUY7O0FER0E7Ozs7RUFJRSxrQkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBOzs7Ozs7OztFQVFFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0FGOztBREdBOztFQUVFLFNBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtFQUNBLG1EQUFBO0FDQUY7O0FER0E7O0VBRUUsVUFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSxvREFBQTtBQ0FGOztBREdBO0VBQ0UsVUFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLDZCQUFBO0FDQUY7O0FER0E7O0VBRUUsd0JBQUE7RUFDQSxVQUFBO0FDQUY7O0FER0E7O0VBRUUsMkJBQUE7RUFDQSxVQUFBO0FDQUY7O0FER0E7RUFJRSxVQUFBO0FDSEY7O0FETUE7RUFJRSxVQUFBO0FDTkY7O0FEU0E7RUFDRSxVQUFBO0FDTkY7O0FEU0E7RUFDRSxVQUFBO0FDTkYiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jaGVjayB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWluLWhlaWdodDogMS40NXJlbTtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmZvcm0tY2hlY2sgLmZvcm0tY2hlY2staW5wdXQge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMS43ODVyZW07XHJcbn1cclxuXHJcbi5mb3JtLWNoZWNrLWlucHV0IHtcclxuICB3aWR0aDogMS4yODVyZW07XHJcbiAgaGVpZ2h0OiAxLjI4NXJlbTtcclxuICBtYXJnaW4tdG9wOiAwLjA4MjVyZW07XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZDhkNmRlO1xyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgY29sb3ItYWRqdXN0OiBleGFjdDtcclxufVxyXG5cclxuLmZvcm0tY2hlY2staW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbi5mb3JtLWNoZWNrLWlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uZm9ybS1jaGVjay1pbnB1dDphY3RpdmUge1xyXG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg5MCUpO1xyXG59XHJcblxyXG4uZm9ybS1jaGVjay1pbnB1dDpmb2N1cyB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNzM2N2YwO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgxMTUsIDEwMywgMjQwLCAwLjQpO1xyXG59XHJcblxyXG4uZm9ybS1jaGVjay1pbnB1dDpjaGVja2VkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzM2N2YwO1xyXG4gIGJvcmRlci1jb2xvcjogIzczNjdmMDtcclxufVxyXG5cclxuLmZvcm0tY2hlY2staW5wdXQ6Y2hlY2tlZFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDkuNSA3LjUnJTNlJTNjcG9seWxpbmUgcG9pbnRzPScwLjc1IDQuMzUgNC4xOCA2Ljc1IDguNzUgMC43NScgc3R5bGU9J2ZpbGw6bm9uZTtzdHJva2U6JTIzZmZmO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MS41cHgnLyUzZSUzYy9zdmclM2VcIik7XHJcbn1cclxuXHJcbi5mb3JtLWNoZWNrLWlucHV0OmNoZWNrZWRbdHlwZT1cInJhZGlvXCJdIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG59XHJcblxyXG4uZm9ybS1jaGVjay1pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06aW5kZXRlcm1pbmF0ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzczNjdmMDtcclxuICBib3JkZXItY29sb3I6ICM3MzY3ZjA7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjNmZmYnIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLW1pbnVzJyUzZSUzY2xpbmUgeDE9JzUnIHkxPScxMicgeDI9JzE5JyB5Mj0nMTInJTNlJTNjL2xpbmUlM2UlM2Mvc3ZnJTNlXCIpO1xyXG59XHJcblxyXG4uZm9ybS1jaGVjay1pbnB1dDpkaXNhYmxlZCB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgZmlsdGVyOiBub25lO1xyXG4gIG9wYWNpdHk6IDAuNjU7XHJcbn1cclxuXHJcbi5mb3JtLWNoZWNrLWlucHV0W2Rpc2FibGVkXSB+IC5mb3JtLWNoZWNrLWxhYmVsLFxyXG4uZm9ybS1jaGVjay1pbnB1dDpkaXNhYmxlZCB+IC5mb3JtLWNoZWNrLWxhYmVsIHtcclxuICBvcGFjaXR5OiAwLjY1O1xyXG59XHJcblxyXG4uZm9ybS1jaGVjay1sYWJlbCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZm9ybS1zd2l0Y2gge1xyXG4gIHBhZGRpbmctbGVmdDogMy41cmVtO1xyXG59XHJcblxyXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2staW5wdXQge1xyXG4gIHdpZHRoOiAzcmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMy41cmVtO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2Nzdmcgd2lkdGg9JzI2cHgnIGhlaWdodD0nMjZweCcgdmlld0JveD0nMCAwIDI2IDI3JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnJTNlJTNjZGVmcyUzZSUzY2NpcmNsZSBpZD0ncGF0aC0xJyBjeD0nOCcgY3k9JzgnIHI9JzgnJTNlJTNjL2NpcmNsZSUzZSUzY2ZpbHRlciB4PSctNDAuNiUnIHk9Jy0yMS45JScgd2lkdGg9JzE2OC44JScgaGVpZ2h0PScxNjguOCUnIGZpbHRlclVuaXRzPSdvYmplY3RCb3VuZGluZ0JveCcgaWQ9J2ZpbHRlci0yJyUzZSUzY2ZlT2Zmc2V0IGR4PSctMScgZHk9JzInIGluPSdTb3VyY2VBbHBoYScgcmVzdWx0PSdzaGFkb3dPZmZzZXRPdXRlcjEnJTNlJTNjL2ZlT2Zmc2V0JTNlJTNjZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPScxLjUnIGluPSdzaGFkb3dPZmZzZXRPdXRlcjEnIHJlc3VsdD0nc2hhZG93Qmx1ck91dGVyMSclM2UlM2MvZmVHYXVzc2lhbkJsdXIlM2UlM2NmZUNvbG9yTWF0cml4IHZhbHVlcz0nMCAwIDAgMCAwICAgMCAwIDAgMCAwICAgMCAwIDAgMCAwICAwIDAgMCAwLjIgMCcgdHlwZT0nbWF0cml4JyBpbj0nc2hhZG93Qmx1ck91dGVyMSclM2UlM2MvZmVDb2xvck1hdHJpeCUzZSUzYy9maWx0ZXIlM2UlM2MvZGVmcyUzZSUzY2cgaWQ9J0FydGJvYXJkJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyUzZSUzY2cgaWQ9J3N3aXRjaGVzLWRvdCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUlMjg1LjAwMDAwMCwgNS4wMDAwMDAlMjknIGZpbGwtcnVsZT0nbm9uemVybyclM2UlM2NnIGlkPSdPdmFsJyUzZSUzY3VzZSBmaWxsPSdibGFjaycgZmlsbC1vcGFjaXR5PScxJyBmaWx0ZXI9J3VybCUyOCUyM2ZpbHRlci0yJTI5JyB4bGluazpocmVmPSclMjNwYXRoLTEnJTNlJTNjL3VzZSUzZSUzY3VzZSBmaWxsPSclMjNmZmYnIHhsaW5rOmhyZWY9JyUyM3BhdGgtMSclM2UlM2MvdXNlJTNlJTNjL2clM2UlM2MvZyUzZSUzYy9nJTNlJTNjL3N2ZyUzZVwiKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAzcmVtO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtcG9zaXRpb24gMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xcyBlYXNlO1xyXG59XHJcblxyXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xyXG4gIC5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1pbnB1dCB7XHJcbiAgICB0cmFuc2l0aW9uOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWlucHV0OmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHdpZHRoPScyNnB4JyBoZWlnaHQ9JzI2cHgnIHZpZXdCb3g9JzAgMCAyNiAyNycgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyUzZSUzY2RlZnMlM2UlM2NjaXJjbGUgaWQ9J3BhdGgtMScgY3g9JzgnIGN5PSc4JyByPSc4JyUzZSUzYy9jaXJjbGUlM2UlM2NmaWx0ZXIgeD0nLTQwLjYlJyB5PSctMjEuOSUnIHdpZHRoPScxNjguOCUnIGhlaWdodD0nMTY4LjglJyBmaWx0ZXJVbml0cz0nb2JqZWN0Qm91bmRpbmdCb3gnIGlkPSdmaWx0ZXItMiclM2UlM2NmZU9mZnNldCBkeD0nLTEnIGR5PScyJyBpbj0nU291cmNlQWxwaGEnIHJlc3VsdD0nc2hhZG93T2Zmc2V0T3V0ZXIxJyUzZSUzYy9mZU9mZnNldCUzZSUzY2ZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMS41JyBpbj0nc2hhZG93T2Zmc2V0T3V0ZXIxJyByZXN1bHQ9J3NoYWRvd0JsdXJPdXRlcjEnJTNlJTNjL2ZlR2F1c3NpYW5CbHVyJTNlJTNjZmVDb2xvck1hdHJpeCB2YWx1ZXM9JzAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgMCAwIDAgMC4yIDAnIHR5cGU9J21hdHJpeCcgaW49J3NoYWRvd0JsdXJPdXRlcjEnJTNlJTNjL2ZlQ29sb3JNYXRyaXglM2UlM2MvZmlsdGVyJTNlJTNjL2RlZnMlM2UlM2NnIGlkPSdBcnRib2FyZCcgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCclM2UlM2NnIGlkPSdzd2l0Y2hlcy1kb3QnIHRyYW5zZm9ybT0ndHJhbnNsYXRlJTI4NS4wMDAwMDAsIDUuMDAwMDAwJTI5JyBmaWxsLXJ1bGU9J25vbnplcm8nJTNlJTNjZyBpZD0nT3ZhbCclM2UlM2N1c2UgZmlsbD0nYmxhY2snIGZpbGwtb3BhY2l0eT0nMScgZmlsdGVyPSd1cmwlMjglMjNmaWx0ZXItMiUyOScgeGxpbms6aHJlZj0nJTIzcGF0aC0xJyUzZSUzYy91c2UlM2UlM2N1c2UgZmlsbD0nJTIzZmZmJyB4bGluazpocmVmPSclMjNwYXRoLTEnJTNlJTNjL3VzZSUzZSUzYy9nJTNlJTNjL2clM2UlM2MvZyUzZSUzYy9zdmclM2VcIik7XHJcbn1cclxuXHJcbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1pbnB1dDpjaGVja2VkIHtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB3aWR0aD0nMjZweCcgaGVpZ2h0PScyNnB4JyB2aWV3Qm94PScwIDAgMjYgMjcnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayclM2UlM2NkZWZzJTNlJTNjY2lyY2xlIGlkPSdwYXRoLTEnIGN4PSc4JyBjeT0nOCcgcj0nOCclM2UlM2MvY2lyY2xlJTNlJTNjZmlsdGVyIHg9Jy00MC42JScgeT0nLTIxLjklJyB3aWR0aD0nMTY4LjglJyBoZWlnaHQ9JzE2OC44JScgZmlsdGVyVW5pdHM9J29iamVjdEJvdW5kaW5nQm94JyBpZD0nZmlsdGVyLTInJTNlJTNjZmVPZmZzZXQgZHg9Jy0xJyBkeT0nMicgaW49J1NvdXJjZUFscGhhJyByZXN1bHQ9J3NoYWRvd09mZnNldE91dGVyMSclM2UlM2MvZmVPZmZzZXQlM2UlM2NmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzEuNScgaW49J3NoYWRvd09mZnNldE91dGVyMScgcmVzdWx0PSdzaGFkb3dCbHVyT3V0ZXIxJyUzZSUzYy9mZUdhdXNzaWFuQmx1ciUzZSUzY2ZlQ29sb3JNYXRyaXggdmFsdWVzPScwIDAgMCAwIDAgICAwIDAgMCAwIDAgICAwIDAgMCAwIDAgIDAgMCAwIDAuMiAwJyB0eXBlPSdtYXRyaXgnIGluPSdzaGFkb3dCbHVyT3V0ZXIxJyUzZSUzYy9mZUNvbG9yTWF0cml4JTNlJTNjL2ZpbHRlciUzZSUzYy9kZWZzJTNlJTNjZyBpZD0nQXJ0Ym9hcmQnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnJTNlJTNjZyBpZD0nc3dpdGNoZXMtZG90JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSUyODUuMDAwMDAwLCA1LjAwMDAwMCUyOScgZmlsbC1ydWxlPSdub256ZXJvJyUzZSUzY2cgaWQ9J092YWwnJTNlJTNjdXNlIGZpbGw9J2JsYWNrJyBmaWxsLW9wYWNpdHk9JzEnIGZpbHRlcj0ndXJsJTI4JTIzZmlsdGVyLTIlMjknIHhsaW5rOmhyZWY9JyUyM3BhdGgtMSclM2UlM2MvdXNlJTNlJTNjdXNlIGZpbGw9JyUyM2ZmZicgeGxpbms6aHJlZj0nJTIzcGF0aC0xJyUzZSUzYy91c2UlM2UlM2MvZyUzZSUzYy9nJTNlJTNjL2clM2UlM2Mvc3ZnJTNlXCIpO1xyXG59XHJcblxyXG4uZm9ybS1jaGVjay1pbmxpbmUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbi5mb3JtLWNoZWNrOm5vdCguZm9ybS1zd2l0Y2gpIC5mb3JtLWNoZWNrLWlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDY1JTtcclxufVxyXG5cclxuLmZvcm0tY2hlY2s6bm90KC5mb3JtLXN3aXRjaCkgLmZvcm0tY2hlY2staW5wdXQ6ZGlzYWJsZWQ6bm90KDpjaGVja2VkKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcclxuICBib3JkZXItY29sb3I6ICNlZmVmZWY7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmZvcm0tY2hlY2staW5wdXQ6bm90KDpkaXNhYmxlZCk6Y2hlY2tlZCB7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgxMTUsIDEwMywgMjQwLCAwLjQpO1xyXG59XHJcblxyXG4uZm9ybS1jaGVjay1pbnB1dDpub3QoOmRpc2FibGVkKTppbmRldGVybWluYXRlIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDg1JTtcclxufVxyXG5cclxuLyogU3dpdGNoZXMgKi9cclxuLmZvcm0tc3dpdGNoIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLypGb3IgU3dpdGNoIEhhbmRsZSBBbmltYXRpb24qL1xyXG59XHJcblxyXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2staW5wdXQge1xyXG4gIGhlaWdodDogMS43cmVtO1xyXG59XHJcblxyXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2staW5wdXQ6Y2hlY2tlZCB7XHJcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2staW5wdXQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWlucHV0Om5vdCg6Y2hlY2tlZCkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmUyZTI7XHJcbn1cclxuXHJcbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1pbnB1dDphY3RpdmUge1xyXG4gIGZpbHRlcjogbm9uZTtcclxufVxyXG5cclxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWlucHV0Om5vdCg6ZGlzYWJsZWQpOmNoZWNrZWQsXHJcbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1pbnB1dDpub3QoOmRpc2FibGVkKTpmb2N1cyB7XHJcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2stbGFiZWwge1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjdyZW07XHJcbiAgLypGb3IgU3dpdGNoIHRleHQqL1xyXG59XHJcblxyXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2stbGFiZWwgLnN3aXRjaC10ZXh0LWxlZnQsXHJcbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1sYWJlbCAuc3dpdGNoLXRleHQtcmlnaHQsXHJcbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1sYWJlbCAuc3dpdGNoLWljb24tbGVmdCxcclxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWxhYmVsIC5zd2l0Y2gtaWNvbi1yaWdodCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY1O1xyXG59XHJcblxyXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2stbGFiZWwgLnN3aXRjaC10ZXh0LWxlZnQgaSxcclxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWxhYmVsIC5zd2l0Y2gtdGV4dC1sZWZ0IHN2ZyxcclxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWxhYmVsIC5zd2l0Y2gtdGV4dC1yaWdodCBpLFxyXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2stbGFiZWwgLnN3aXRjaC10ZXh0LXJpZ2h0IHN2ZyxcclxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWxhYmVsIC5zd2l0Y2gtaWNvbi1sZWZ0IGksXHJcbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1sYWJlbCAuc3dpdGNoLWljb24tbGVmdCBzdmcsXHJcbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1sYWJlbCAuc3dpdGNoLWljb24tcmlnaHQgaSxcclxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWxhYmVsIC5zd2l0Y2gtaWNvbi1yaWdodCBzdmcge1xyXG4gIGhlaWdodDogMTNweDtcclxuICB3aWR0aDogMTNweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1sYWJlbCAuc3dpdGNoLXRleHQtbGVmdCxcclxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWxhYmVsIC5zd2l0Y2gtaWNvbi1sZWZ0IHtcclxuICBsZWZ0OiA2cHg7XHJcbiAgdG9wOiAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDhweCk7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjFzIGVhc2UsIHRyYW5zZm9ybSAwLjE1cyBlYXNlO1xyXG59XHJcblxyXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2stbGFiZWwgLnN3aXRjaC10ZXh0LXJpZ2h0LFxyXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2stbGFiZWwgLnN3aXRjaC1pY29uLXJpZ2h0IHtcclxuICBsZWZ0OiAyNXB4O1xyXG4gIHRvcDogMDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4wOHMgZWFzZSwgdHJhbnNmb3JtIDAuMTVzIGVhc2U7XHJcbn1cclxuXHJcbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1sYWJlbDpmb2N1cyB7XHJcbiAgb3V0bGluZTogMDtcclxufVxyXG5cclxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWlucHV0OmNoZWNrZWQgfiAuZm9ybS1jaGVjay1sYWJlbDo6YmVmb3JlIHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2staW5wdXQ6Y2hlY2tlZCB+IC5mb3JtLWNoZWNrLWxhYmVsOjphZnRlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEuNHJlbSk7XHJcbn1cclxuXHJcbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1pbnB1dDpjaGVja2VkIH4gLmZvcm0tY2hlY2stbGFiZWwgLnN3aXRjaC10ZXh0LWxlZnQsXHJcbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1pbnB1dDpjaGVja2VkIH4gLmZvcm0tY2hlY2stbGFiZWwgLnN3aXRjaC1pY29uLWxlZnQge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2staW5wdXQ6Y2hlY2tlZCB+IC5mb3JtLWNoZWNrLWxhYmVsIC5zd2l0Y2gtdGV4dC1yaWdodCxcclxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWlucHV0OmNoZWNrZWQgfiAuZm9ybS1jaGVjay1sYWJlbCAuc3dpdGNoLWljb24tcmlnaHQge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtOHB4KTtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uZm9ybS1zd2l0Y2hcclxuICAuZm9ybS1jaGVjay1pbnB1dDpub3QoOmNoZWNrZWQpXHJcbiAgfiAuZm9ybS1jaGVjay1sYWJlbFxyXG4gIC5zd2l0Y2gtdGV4dC1sZWZ0IHtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uZm9ybS1zd2l0Y2hcclxuICAuZm9ybS1jaGVjay1pbnB1dDpub3QoOmNoZWNrZWQpXHJcbiAgfiAuZm9ybS1jaGVjay1sYWJlbFxyXG4gIC5zd2l0Y2gtdGV4dC1yaWdodCB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWlucHV0OmNoZWNrZWQgfiAuZm9ybS1jaGVjay1sYWJlbCAuc3dpdGNoLXRleHQtcmlnaHQge1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1pbnB1dDpjaGVja2VkIH4gLmZvcm0tY2hlY2stbGFiZWwgLnN3aXRjaC10ZXh0LWxlZnQge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuIiwiLmZvcm0tY2hlY2sge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWluLWhlaWdodDogMS40NXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uZm9ybS1jaGVjayAuZm9ybS1jaGVjay1pbnB1dCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogLTEuNzg1cmVtO1xufVxuXG4uZm9ybS1jaGVjay1pbnB1dCB7XG4gIHdpZHRoOiAxLjI4NXJlbTtcbiAgaGVpZ2h0OiAxLjI4NXJlbTtcbiAgbWFyZ2luLXRvcDogMC4wODI1cmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q4ZDZkZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgY29sb3ItYWRqdXN0OiBleGFjdDtcbn1cblxuLmZvcm0tY2hlY2staW5wdXRbdHlwZT1jaGVja2JveF0ge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5mb3JtLWNoZWNrLWlucHV0W3R5cGU9cmFkaW9dIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uZm9ybS1jaGVjay1pbnB1dDphY3RpdmUge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoOTAlKTtcbn1cblxuLmZvcm0tY2hlY2staW5wdXQ6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICM3MzY3ZjA7XG4gIG91dGxpbmU6IDA7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMTE1LCAxMDMsIDI0MCwgMC40KTtcbn1cblxuLmZvcm0tY2hlY2staW5wdXQ6Y2hlY2tlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MzY3ZjA7XG4gIGJvcmRlci1jb2xvcjogIzczNjdmMDtcbn1cblxuLmZvcm0tY2hlY2staW5wdXQ6Y2hlY2tlZFt0eXBlPWNoZWNrYm94XSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDkuNSA3LjUnJTNlJTNjcG9seWxpbmUgcG9pbnRzPScwLjc1IDQuMzUgNC4xOCA2Ljc1IDguNzUgMC43NScgc3R5bGU9J2ZpbGw6bm9uZTtzdHJva2U6JTIzZmZmO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MS41cHgnLyUzZSUzYy9zdmclM2VcIik7XG59XG5cbi5mb3JtLWNoZWNrLWlucHV0OmNoZWNrZWRbdHlwZT1yYWRpb10ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xufVxuXG4uZm9ybS1jaGVjay1pbnB1dFt0eXBlPWNoZWNrYm94XTppbmRldGVybWluYXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzczNjdmMDtcbiAgYm9yZGVyLWNvbG9yOiAjNzM2N2YwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9JyUyM2ZmZicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItbWludXMnJTNlJTNjbGluZSB4MT0nNScgeTE9JzEyJyB4Mj0nMTknIHkyPScxMiclM2UlM2MvbGluZSUzZSUzYy9zdmclM2VcIik7XG59XG5cbi5mb3JtLWNoZWNrLWlucHV0OmRpc2FibGVkIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGZpbHRlcjogbm9uZTtcbiAgb3BhY2l0eTogMC42NTtcbn1cblxuLmZvcm0tY2hlY2staW5wdXRbZGlzYWJsZWRdIH4gLmZvcm0tY2hlY2stbGFiZWwsXG4uZm9ybS1jaGVjay1pbnB1dDpkaXNhYmxlZCB+IC5mb3JtLWNoZWNrLWxhYmVsIHtcbiAgb3BhY2l0eTogMC42NTtcbn1cblxuLmZvcm0tY2hlY2stbGFiZWwge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5mb3JtLXN3aXRjaCB7XG4gIHBhZGRpbmctbGVmdDogMy41cmVtO1xufVxuXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2staW5wdXQge1xuICB3aWR0aDogM3JlbTtcbiAgbWFyZ2luLWxlZnQ6IC0zLjVyZW07XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2Nzdmcgd2lkdGg9JzI2cHgnIGhlaWdodD0nMjZweCcgdmlld0JveD0nMCAwIDI2IDI3JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnJTNlJTNjZGVmcyUzZSUzY2NpcmNsZSBpZD0ncGF0aC0xJyBjeD0nOCcgY3k9JzgnIHI9JzgnJTNlJTNjL2NpcmNsZSUzZSUzY2ZpbHRlciB4PSctNDAuNiUnIHk9Jy0yMS45JScgd2lkdGg9JzE2OC44JScgaGVpZ2h0PScxNjguOCUnIGZpbHRlclVuaXRzPSdvYmplY3RCb3VuZGluZ0JveCcgaWQ9J2ZpbHRlci0yJyUzZSUzY2ZlT2Zmc2V0IGR4PSctMScgZHk9JzInIGluPSdTb3VyY2VBbHBoYScgcmVzdWx0PSdzaGFkb3dPZmZzZXRPdXRlcjEnJTNlJTNjL2ZlT2Zmc2V0JTNlJTNjZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPScxLjUnIGluPSdzaGFkb3dPZmZzZXRPdXRlcjEnIHJlc3VsdD0nc2hhZG93Qmx1ck91dGVyMSclM2UlM2MvZmVHYXVzc2lhbkJsdXIlM2UlM2NmZUNvbG9yTWF0cml4IHZhbHVlcz0nMCAwIDAgMCAwICAgMCAwIDAgMCAwICAgMCAwIDAgMCAwICAwIDAgMCAwLjIgMCcgdHlwZT0nbWF0cml4JyBpbj0nc2hhZG93Qmx1ck91dGVyMSclM2UlM2MvZmVDb2xvck1hdHJpeCUzZSUzYy9maWx0ZXIlM2UlM2MvZGVmcyUzZSUzY2cgaWQ9J0FydGJvYXJkJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyUzZSUzY2cgaWQ9J3N3aXRjaGVzLWRvdCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUlMjg1LjAwMDAwMCwgNS4wMDAwMDAlMjknIGZpbGwtcnVsZT0nbm9uemVybyclM2UlM2NnIGlkPSdPdmFsJyUzZSUzY3VzZSBmaWxsPSdibGFjaycgZmlsbC1vcGFjaXR5PScxJyBmaWx0ZXI9J3VybCUyOCUyM2ZpbHRlci0yJTI5JyB4bGluazpocmVmPSclMjNwYXRoLTEnJTNlJTNjL3VzZSUzZSUzY3VzZSBmaWxsPSclMjNmZmYnIHhsaW5rOmhyZWY9JyUyM3BhdGgtMSclM2UlM2MvdXNlJTNlJTNjL2clM2UlM2MvZyUzZSUzYy9nJTNlJTNjL3N2ZyUzZVwiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDNyZW07XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtcG9zaXRpb24gMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xcyBlYXNlO1xufVxuXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xuICAuZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2staW5wdXQge1xuICAgIHRyYW5zaXRpb246IG5vbmU7XG4gIH1cbn1cbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1pbnB1dDpmb2N1cyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2Nzdmcgd2lkdGg9JzI2cHgnIGhlaWdodD0nMjZweCcgdmlld0JveD0nMCAwIDI2IDI3JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnJTNlJTNjZGVmcyUzZSUzY2NpcmNsZSBpZD0ncGF0aC0xJyBjeD0nOCcgY3k9JzgnIHI9JzgnJTNlJTNjL2NpcmNsZSUzZSUzY2ZpbHRlciB4PSctNDAuNiUnIHk9Jy0yMS45JScgd2lkdGg9JzE2OC44JScgaGVpZ2h0PScxNjguOCUnIGZpbHRlclVuaXRzPSdvYmplY3RCb3VuZGluZ0JveCcgaWQ9J2ZpbHRlci0yJyUzZSUzY2ZlT2Zmc2V0IGR4PSctMScgZHk9JzInIGluPSdTb3VyY2VBbHBoYScgcmVzdWx0PSdzaGFkb3dPZmZzZXRPdXRlcjEnJTNlJTNjL2ZlT2Zmc2V0JTNlJTNjZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPScxLjUnIGluPSdzaGFkb3dPZmZzZXRPdXRlcjEnIHJlc3VsdD0nc2hhZG93Qmx1ck91dGVyMSclM2UlM2MvZmVHYXVzc2lhbkJsdXIlM2UlM2NmZUNvbG9yTWF0cml4IHZhbHVlcz0nMCAwIDAgMCAwICAgMCAwIDAgMCAwICAgMCAwIDAgMCAwICAwIDAgMCAwLjIgMCcgdHlwZT0nbWF0cml4JyBpbj0nc2hhZG93Qmx1ck91dGVyMSclM2UlM2MvZmVDb2xvck1hdHJpeCUzZSUzYy9maWx0ZXIlM2UlM2MvZGVmcyUzZSUzY2cgaWQ9J0FydGJvYXJkJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyUzZSUzY2cgaWQ9J3N3aXRjaGVzLWRvdCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUlMjg1LjAwMDAwMCwgNS4wMDAwMDAlMjknIGZpbGwtcnVsZT0nbm9uemVybyclM2UlM2NnIGlkPSdPdmFsJyUzZSUzY3VzZSBmaWxsPSdibGFjaycgZmlsbC1vcGFjaXR5PScxJyBmaWx0ZXI9J3VybCUyOCUyM2ZpbHRlci0yJTI5JyB4bGluazpocmVmPSclMjNwYXRoLTEnJTNlJTNjL3VzZSUzZSUzY3VzZSBmaWxsPSclMjNmZmYnIHhsaW5rOmhyZWY9JyUyM3BhdGgtMSclM2UlM2MvdXNlJTNlJTNjL2clM2UlM2MvZyUzZSUzYy9nJTNlJTNjL3N2ZyUzZVwiKTtcbn1cblxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWlucHV0OmNoZWNrZWQge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjZW50ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2Nzdmcgd2lkdGg9JzI2cHgnIGhlaWdodD0nMjZweCcgdmlld0JveD0nMCAwIDI2IDI3JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnJTNlJTNjZGVmcyUzZSUzY2NpcmNsZSBpZD0ncGF0aC0xJyBjeD0nOCcgY3k9JzgnIHI9JzgnJTNlJTNjL2NpcmNsZSUzZSUzY2ZpbHRlciB4PSctNDAuNiUnIHk9Jy0yMS45JScgd2lkdGg9JzE2OC44JScgaGVpZ2h0PScxNjguOCUnIGZpbHRlclVuaXRzPSdvYmplY3RCb3VuZGluZ0JveCcgaWQ9J2ZpbHRlci0yJyUzZSUzY2ZlT2Zmc2V0IGR4PSctMScgZHk9JzInIGluPSdTb3VyY2VBbHBoYScgcmVzdWx0PSdzaGFkb3dPZmZzZXRPdXRlcjEnJTNlJTNjL2ZlT2Zmc2V0JTNlJTNjZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPScxLjUnIGluPSdzaGFkb3dPZmZzZXRPdXRlcjEnIHJlc3VsdD0nc2hhZG93Qmx1ck91dGVyMSclM2UlM2MvZmVHYXVzc2lhbkJsdXIlM2UlM2NmZUNvbG9yTWF0cml4IHZhbHVlcz0nMCAwIDAgMCAwICAgMCAwIDAgMCAwICAgMCAwIDAgMCAwICAwIDAgMCAwLjIgMCcgdHlwZT0nbWF0cml4JyBpbj0nc2hhZG93Qmx1ck91dGVyMSclM2UlM2MvZmVDb2xvck1hdHJpeCUzZSUzYy9maWx0ZXIlM2UlM2MvZGVmcyUzZSUzY2cgaWQ9J0FydGJvYXJkJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyUzZSUzY2cgaWQ9J3N3aXRjaGVzLWRvdCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUlMjg1LjAwMDAwMCwgNS4wMDAwMDAlMjknIGZpbGwtcnVsZT0nbm9uemVybyclM2UlM2NnIGlkPSdPdmFsJyUzZSUzY3VzZSBmaWxsPSdibGFjaycgZmlsbC1vcGFjaXR5PScxJyBmaWx0ZXI9J3VybCUyOCUyM2ZpbHRlci0yJTI5JyB4bGluazpocmVmPSclMjNwYXRoLTEnJTNlJTNjL3VzZSUzZSUzY3VzZSBmaWxsPSclMjNmZmYnIHhsaW5rOmhyZWY9JyUyM3BhdGgtMSclM2UlM2MvdXNlJTNlJTNjL2clM2UlM2MvZyUzZSUzYy9nJTNlJTNjL3N2ZyUzZVwiKTtcbn1cblxuLmZvcm0tY2hlY2staW5saW5lIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG5cbi5mb3JtLWNoZWNrOm5vdCguZm9ybS1zd2l0Y2gpIC5mb3JtLWNoZWNrLWlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQge1xuICBiYWNrZ3JvdW5kLXNpemU6IDY1JTtcbn1cblxuLmZvcm0tY2hlY2s6bm90KC5mb3JtLXN3aXRjaCkgLmZvcm0tY2hlY2staW5wdXQ6ZGlzYWJsZWQ6bm90KDpjaGVja2VkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gIGJvcmRlci1jb2xvcjogI2VmZWZlZjtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmZvcm0tY2hlY2staW5wdXQ6bm90KDpkaXNhYmxlZCk6Y2hlY2tlZCB7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMTE1LCAxMDMsIDI0MCwgMC40KTtcbn1cblxuLmZvcm0tY2hlY2staW5wdXQ6bm90KDpkaXNhYmxlZCk6aW5kZXRlcm1pbmF0ZSB7XG4gIGJhY2tncm91bmQtc2l6ZTogODUlO1xufVxuXG4vKiBTd2l0Y2hlcyAqL1xuLmZvcm0tc3dpdGNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvKkZvciBTd2l0Y2ggSGFuZGxlIEFuaW1hdGlvbiovXG59XG5cbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1pbnB1dCB7XG4gIGhlaWdodDogMS43cmVtO1xufVxuXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2staW5wdXQ6Y2hlY2tlZCB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2staW5wdXQ6bm90KDpjaGVja2VkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmUyZTI7XG59XG5cbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1pbnB1dDphY3RpdmUge1xuICBmaWx0ZXI6IG5vbmU7XG59XG5cbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1pbnB1dDpub3QoOmRpc2FibGVkKTpjaGVja2VkLFxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWlucHV0Om5vdCg6ZGlzYWJsZWQpOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2stbGFiZWwge1xuICBsaW5lLWhlaWdodDogMS43cmVtO1xuICAvKkZvciBTd2l0Y2ggdGV4dCovXG59XG5cbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1sYWJlbCAuc3dpdGNoLXRleHQtbGVmdCxcbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1sYWJlbCAuc3dpdGNoLXRleHQtcmlnaHQsXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2stbGFiZWwgLnN3aXRjaC1pY29uLWxlZnQsXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2stbGFiZWwgLnN3aXRjaC1pY29uLXJpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDEuNjU7XG59XG5cbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1sYWJlbCAuc3dpdGNoLXRleHQtbGVmdCBpLFxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWxhYmVsIC5zd2l0Y2gtdGV4dC1sZWZ0IHN2Zyxcbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1sYWJlbCAuc3dpdGNoLXRleHQtcmlnaHQgaSxcbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1sYWJlbCAuc3dpdGNoLXRleHQtcmlnaHQgc3ZnLFxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWxhYmVsIC5zd2l0Y2gtaWNvbi1sZWZ0IGksXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2stbGFiZWwgLnN3aXRjaC1pY29uLWxlZnQgc3ZnLFxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWxhYmVsIC5zd2l0Y2gtaWNvbi1yaWdodCBpLFxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWxhYmVsIC5zd2l0Y2gtaWNvbi1yaWdodCBzdmcge1xuICBoZWlnaHQ6IDEzcHg7XG4gIHdpZHRoOiAxM3B4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1sYWJlbCAuc3dpdGNoLXRleHQtbGVmdCxcbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1sYWJlbCAuc3dpdGNoLWljb24tbGVmdCB7XG4gIGxlZnQ6IDZweDtcbiAgdG9wOiAwO1xuICBjb2xvcjogI2ZmZjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDhweCk7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xcyBlYXNlLCB0cmFuc2Zvcm0gMC4xNXMgZWFzZTtcbn1cblxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWxhYmVsIC5zd2l0Y2gtdGV4dC1yaWdodCxcbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1sYWJlbCAuc3dpdGNoLWljb24tcmlnaHQge1xuICBsZWZ0OiAyNXB4O1xuICB0b3A6IDA7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMDhzIGVhc2UsIHRyYW5zZm9ybSAwLjE1cyBlYXNlO1xufVxuXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2stbGFiZWw6Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2staW5wdXQ6Y2hlY2tlZCB+IC5mb3JtLWNoZWNrLWxhYmVsOjpiZWZvcmUge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2staW5wdXQ6Y2hlY2tlZCB+IC5mb3JtLWNoZWNrLWxhYmVsOjphZnRlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxLjRyZW0pO1xufVxuXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2staW5wdXQ6Y2hlY2tlZCB+IC5mb3JtLWNoZWNrLWxhYmVsIC5zd2l0Y2gtdGV4dC1sZWZ0LFxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWlucHV0OmNoZWNrZWQgfiAuZm9ybS1jaGVjay1sYWJlbCAuc3dpdGNoLWljb24tbGVmdCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWlucHV0OmNoZWNrZWQgfiAuZm9ybS1jaGVjay1sYWJlbCAuc3dpdGNoLXRleHQtcmlnaHQsXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2staW5wdXQ6Y2hlY2tlZCB+IC5mb3JtLWNoZWNrLWxhYmVsIC5zd2l0Y2gtaWNvbi1yaWdodCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtOHB4KTtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWlucHV0Om5vdCg6Y2hlY2tlZCkgfiAuZm9ybS1jaGVjay1sYWJlbCAuc3dpdGNoLXRleHQtbGVmdCB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1pbnB1dDpub3QoOmNoZWNrZWQpIH4gLmZvcm0tY2hlY2stbGFiZWwgLnN3aXRjaC10ZXh0LXJpZ2h0IHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWlucHV0OmNoZWNrZWQgfiAuZm9ybS1jaGVjay1sYWJlbCAuc3dpdGNoLXRleHQtcmlnaHQge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2staW5wdXQ6Y2hlY2tlZCB+IC5mb3JtLWNoZWNrLWxhYmVsIC5zd2l0Y2gtdGV4dC1sZWZ0IHtcbiAgb3BhY2l0eTogMTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 23225:
/*!***************************************************************************************!*\
  !*** ./src/app/dashboard/pages/admin/admin-settings/reminders/reminders.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemindersComponent": () => (/* binding */ RemindersComponent)
/* harmony export */ });
/* harmony import */ var app_enums_send_via__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/enums/send-via */ 66310);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/services/call-api.service */ 79992);
/* harmony import */ var app_common_toastr_toastr_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/common/toastr/toastr.component */ 84329);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _common_dynamic_component_dynamic_forms_dynamic_fields_common_explanation_mark_explanation_mark_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../common/dynamic-component/dynamic-forms/dynamic-fields/common/explanation-mark/explanation-mark.component */ 64168);
/* harmony import */ var _sms_reminder_sms_reminder_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sms-reminder/sms-reminder.component */ 1497);
/* harmony import */ var _email_reminder_email_reminder_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./email-reminder/email-reminder.component */ 14332);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 33935);









function RemindersComponent_div_0_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2)(1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "app-sms-reminder", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("reminderNotification", ctx_r1.reminderNotification);
  }
}
function RemindersComponent_div_0_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2)(1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "app-email-reminder", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("reminderNotification", ctx_r2.reminderNotification);
  }
}
function RemindersComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "div", 1)(2, "div", 2)(3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "h4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "app-explanation-mark", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "h6", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 2)(14, "ul", 7)(15, "li", 8)(16, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RemindersComponent_div_0_Template_a_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.selectedTab = 0);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "li", 8)(23, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RemindersComponent_div_0_Template_a_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r5.selectedTab = 1);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, RemindersComponent_div_0_div_29_Template, 3, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, RemindersComponent_div_0_div_30_Template, 3, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 13, "reminders.title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("explanation", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 15, "reminders.explanation"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](12, 17, "reminders.text"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"]("nav-link ", ctx_r0.selectedTab === 0 ? "active" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](21, 19, "reminders.smsConfiguration"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"]("nav-link ", ctx_r0.selectedTab === 1 ? "active" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](28, 21, "reminders.emailConfiguration"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.selectedTab === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.selectedTab === 1);
  }
}
class RemindersComponent {
  constructor(_service, _toastr) {
    this._service = _service;
    this._toastr = _toastr;
    this.selectedTab = app_enums_send_via__WEBPACK_IMPORTED_MODULE_0__.SendVia.sms;
    this.sendVia = {
      reminder_type: app_enums_send_via__WEBPACK_IMPORTED_MODULE_0__.SendVia.sms
    };
    this.reminderNotification = {};
  }
  ngOnInit() {
    this._service.callGetMethod("/api/getReminderNotification", "").subscribe(data => {
      if (data.length) {
        this.sendVia = data[0];
        this.reminderNotification = data[0];
      } else {
        this.sendVia = {
          reminder_type: app_enums_send_via__WEBPACK_IMPORTED_MODULE_0__.SendVia.sms
        };
      }
    });
  }
  getSmsEnum() {
    return app_enums_send_via__WEBPACK_IMPORTED_MODULE_0__.SendVia.sms;
  }
  getEmailEnum() {
    return app_enums_send_via__WEBPACK_IMPORTED_MODULE_0__.SendVia.email;
  }
  static #_ = this.ɵfac = function RemindersComponent_Factory(t) {
    return new (t || RemindersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__.CallApiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_common_toastr_toastr_component__WEBPACK_IMPORTED_MODULE_2__.ToastrComponent));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: RemindersComponent,
    selectors: [["app-reminders"]],
    decls: 1,
    vars: 1,
    consts: [[4, "ngIf"], [1, "row"], [1, "col-12"], [1, "align-items-center", "mb-2", "border-bottom"], ["data-feather", "link", 1, "font-medium-3"], [1, "ml-75"], [3, "explanation"], [1, "nav", "nav-pills", "mb-2"], [1, "nav-item"], [3, "click"], [1, "fa", "fa-comment"], [1, "fw-bold"], [1, "fa", "fa-envelope"], ["class", "col-12", 4, "ngIf"], [1, "card"], [3, "reminderNotification"]],
    template: function RemindersComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, RemindersComponent_div_0_Template, 31, 23, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.sendVia);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _common_dynamic_component_dynamic_forms_dynamic_fields_common_explanation_mark_explanation_mark_component__WEBPACK_IMPORTED_MODULE_3__.ExplanationMarkComponent, _sms_reminder_sms_reminder_component__WEBPACK_IMPORTED_MODULE_4__.SmsReminderComponent, _email_reminder_email_reminder_component__WEBPACK_IMPORTED_MODULE_5__.EmailReminderComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 99563:
/*!******************************************************************************************************************************!*\
  !*** ./src/app/dashboard/pages/admin/admin-settings/reminders/sms-reminder/sms-reminder-card/sms-reminder-card.component.ts ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SmsReminderCardComponent": () => (/* binding */ SmsReminderCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_services_call_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/services/call-api.service */ 79992);
/* harmony import */ var app_common_toastr_toastr_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/common/toastr/toastr.component */ 84329);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var app_services_help_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/help.service */ 59993);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _common_dynamic_component_dynamic_forms_dynamic_fields_common_explanation_mark_explanation_mark_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../common/dynamic-component/dynamic-forms/dynamic-fields/common/explanation-mark/explanation-mark.component */ 64168);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);









function SmsReminderCardComponent_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "smsReminder.active"));
  }
}
function SmsReminderCardComponent_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "smsReminder.inactive"));
  }
}
class SmsReminderCardComponent {
  constructor(_service, _toastr, _translate, _helpService) {
    this._service = _service;
    this._toastr = _toastr;
    this._translate = _translate;
    this._helpService = _helpService;
    this.changeValue = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
  }
  modelChangeFn(event) {
    console.log(this.item);
  }
  change() {
    this.changeValue.emit(this.item);
  }
  sendTestSmsMessage() {
    this._service.callPostMethod("api/sms-reminder/sendTestSmsMessage", this.item).subscribe(data => {
      if (data) {
        this._toastr.showSuccessCustom(this._helpService.replaceText(this._translate.instant("smsReminder.sentTestSMSTo"), "#telephone", data));
      } else {
        this._toastr.showErrorCustom(this._translate.instant("smsReminder.needToInsertTelephoneAtSettings"));
      }
    });
  }
  static #_ = this.ɵfac = function SmsReminderCardComponent_Factory(t) {
    return new (t || SmsReminderCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_services_call_api_service__WEBPACK_IMPORTED_MODULE_0__.CallApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_common_toastr_toastr_component__WEBPACK_IMPORTED_MODULE_1__.ToastrComponent), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_services_help_service__WEBPACK_IMPORTED_MODULE_2__.HelpService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: SmsReminderCardComponent,
    selectors: [["app-sms-reminder-card"]],
    inputs: {
      item: "item"
    },
    outputs: {
      changeValue: "changeValue"
    },
    decls: 24,
    vars: 21,
    consts: [[1, "card-header", "d-flex", "justify-content-between", "align-items-center", "pb-1", "border-bottom"], [1, "card-title"], [3, "explanation"], ["ngbDropdown", ""], ["aria-hidden", "true", "ngbDropdownToggle", "", "id", "dropdownMenuButton", 1, "fa", "fa-cog", "config-icon"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownMenuButton"], ["ngbDropdownItem", "", 3, "click"], [1, "fa", "fa-comment-o"], [1, "card-body", "mt-2", "font-italic"], [1, "text-right", "status"], ["class", "badge badge-light-success", 4, "ngIf"], ["class", "badge badge-light-danger", 4, "ngIf"], [1, "badge", "badge-light-success"], [1, "badge", "badge-light-danger"]],
    template: function SmsReminderCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "div")(3, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "app-explanation-mark", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 5)(10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SmsReminderCardComponent_Template_a_click_10_listener() {
          ctx.item.active = !ctx.item.active;
          return ctx.change();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SmsReminderCardComponent_Template_a_click_15_listener() {
          return ctx.sendTestSmsMessage();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, SmsReminderCardComponent_span_22_Template, 3, 3, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, SmsReminderCardComponent_span_23_Template, 3, 3, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("card border ", !ctx.item.active ? "inactive" : "", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx.item.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("explanation", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 13, ctx.item.text));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("fa fa-", ctx.item.active ? "pause" : "play", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.item.active ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 15, "smsReminder.deactiveNotification") : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 17, "smsReminder.activeNotification"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](18, 19, "smsReminder.testMessage"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.item.message, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.item.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.item.active);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _common_dynamic_component_dynamic_forms_dynamic_fields_common_explanation_mark_explanation_mark_component__WEBPACK_IMPORTED_MODULE_3__.ExplanationMarkComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdownItem, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
    styles: [".config-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  cursor: pointer;\n}\n\n.status[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.inactive[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.card-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: none !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL3BhZ2VzL2FkbWluL2FkbWluLXNldHRpbmdzL3JlbWluZGVycy9zbXMtcmVtaW5kZXIvc21zLXJlbWluZGVyLWNhcmQvc21zLXJlbWluZGVyLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNJLHdCQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIuY29uZmlnLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zdGF0dXMge1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmluYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG59XHJcblxyXG4uY2FyZC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uY2FyZC10ZXh0IHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 93708:
/*!*****************************************************************************************************!*\
  !*** ./src/app/dashboard/pages/admin/admin-settings/reminders/sms-reminder/sms-reminder-initial.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SmsReminderInitial": () => (/* binding */ SmsReminderInitial)
/* harmony export */ });
class SmsReminderInitial {
  constructor() {
    this.active = false;
    this.config = {
      clientImmediatelyReminder: {
        title: "Confirmation of booking",
        text: "Immediately upon appointment",
        message: "Your appointment #date at #time has been confirmed. Our address is #address. #company",
        active: true
      },
      clientDayBeforeReminder: {
        title: "Day before",
        text: "Day before at 8 p.m",
        message: "Reminder: You have an appointment with us at #company tomorrow at #time. Our address is #address. Greeting",
        active: true
      },
      clientHappyBirthday: {
        title: "Birthday card",
        text: "It is sent on a birthday",
        message: "Lots of happiness and laughter. Greetings from #company",
        active: false
      },
      clientThankForCommingToUs: {
        title: "Thanks for comming",
        text: "It is sent 1 hour after the appointment",
        message: "Thank you for your visit, we hope you enjoyed the service. Thank you for your trust! #company",
        active: false
      },
      employeeImmediatelyReminder: {
        title: "Confirmation of booking",
        text: "Immediately upon appointment",
        message: "New appointment #date at #time has been confirmed. #company",
        active: true
      },
      employeeDayBeforeReminder: {
        title: "Day before",
        text: "Day before at 8 p.m",
        message: "Reminder: You have an appointment tomorrow at #time. Greeting",
        active: true
      }
    };
  }
}

/***/ }),

/***/ 1497:
/*!*******************************************************************************************************!*\
  !*** ./src/app/dashboard/pages/admin/admin-settings/reminders/sms-reminder/sms-reminder.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SmsReminderComponent": () => (/* binding */ SmsReminderComponent)
/* harmony export */ });
/* harmony import */ var _sms_reminder_initial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sms-reminder-initial */ 93708);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/services/call-api.service */ 79992);
/* harmony import */ var app_services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/storage.service */ 71188);
/* harmony import */ var app_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/message.service */ 42684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _common_dynamic_component_dynamic_forms_dynamic_fields_common_explanation_mark_explanation_mark_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../common/dynamic-component/dynamic-forms/dynamic-fields/common/explanation-mark/explanation-mark.component */ 64168);
/* harmony import */ var _common_sms_counter_sms_counter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/sms-counter/sms-counter.component */ 51402);
/* harmony import */ var _sms_reminder_card_sms_reminder_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sms-reminder-card/sms-reminder-card.component */ 99563);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 33935);











function SmsReminderComponent_div_0_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 18)(1, "h4", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 1, "smsReminder.warning"), " ");
  }
}
function SmsReminderComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div")(2, "div", 1)(3, "div", 2)(4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "h4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "app-explanation-mark", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "h6", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "app-sms-counter");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 7)(17, "div", 8)(18, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function SmsReminderComponent_div_0_Template_input_ngModelChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.reminderConfig.active = $event);
    })("change", function SmsReminderComponent_div_0_Template_input_change_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r4.setSmsReminderConfig($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div")(20, "h5", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "app-explanation-mark", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, SmsReminderComponent_div_0_div_28_Template, 5, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 2)(30, "div", 14)(31, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div")(35, "div", 15)(36, "div", 16)(37, "app-sms-reminder-card", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("changeValue", function SmsReminderComponent_div_0_Template_app_sms_reminder_card_changeValue_37_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r5.setSmsReminderConfig($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 16)(39, "app-sms-reminder-card", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("changeValue", function SmsReminderComponent_div_0_Template_app_sms_reminder_card_changeValue_39_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r6.setSmsReminderConfig($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](42, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 15)(44, "div", 16)(45, "app-sms-reminder-card", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("changeValue", function SmsReminderComponent_div_0_Template_app_sms_reminder_card_changeValue_45_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r7.setSmsReminderConfig($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](48, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "div", 15)(50, "div", 16)(51, "app-sms-reminder-card", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("changeValue", function SmsReminderComponent_div_0_Template_app_sms_reminder_card_changeValue_51_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r8.setSmsReminderConfig($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "div", 16)(53, "app-sms-reminder-card", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("changeValue", function SmsReminderComponent_div_0_Template_app_sms_reminder_card_changeValue_53_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r9.setSmsReminderConfig($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](8, 17, "smsReminder.title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("explanation", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](10, 19, "smsReminder.explanation"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](13, 21, "smsReminder.text"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r0.reminderConfig.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](22, 23, "smsReminder.activeSmsReminder"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](25, 25, "reminders.recommended"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("explanation", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](27, 27, "reminders.recommendedExplanation"))("fontSize", "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r0.reminderConfig.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](33, 29, "smsReminder.reminderClientTitle"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("item", ctx_r0.reminderConfig.config.clientImmediatelyReminder);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("item", ctx_r0.reminderConfig.config.clientDayBeforeReminder);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](42, 31, "smsReminder.clientLoyalityTitle"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("item", ctx_r0.reminderConfig.config.clientHappyBirthday);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](48, 33, "smsReminder.reminderEmployeeTitle"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("item", ctx_r0.reminderConfig.config.employeeImmediatelyReminder);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("item", ctx_r0.reminderConfig.config.employeeDayBeforeReminder);
  }
}
class SmsReminderComponent {
  constructor(_service, _storageService, _messageService) {
    this._service = _service;
    this._storageService = _storageService;
    this._messageService = _messageService;
    this.loader = true;
  }
  ngOnInit() {
    this.initialize();
  }
  initialize() {
    this.getSmsReminderConfig();
  }
  getSmsReminderConfig() {
    this.loader = true;
    this._service.callGetMethod("/api/sms-reminder/getSmsReminderConfig", "").subscribe(data => {
      this.loader = false;
      if (data) {
        this.reminderConfig = data;
      } else {
        this.reminderConfig = new _sms_reminder_initial__WEBPACK_IMPORTED_MODULE_0__.SmsReminderInitial();
      }
    });
  }
  setSmsReminderConfig(event) {
    this.sendInfoForSetupApp();
    this._service.callPostMethod("/api/sms-reminder/setSmsReminderConfig", this.reminderConfig).subscribe(data => {
      this.reminderConfig.id = data;
    });
  }
  sendInfoForSetupApp() {
    if (this._storageService.getSessionStorage("setup")) {
      let setup = this._storageService.getSessionStorage("setup");
      if (this.reminderConfig && this.reminderConfig.active) {
        setup.sms_reminder = true;
      } else {
        setup.sms_reminder = false;
      }
      this._messageService.sendSetupApp(setup);
    }
  }
  static #_ = this.ɵfac = function SmsReminderComponent_Factory(t) {
    return new (t || SmsReminderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__.CallApiService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_services_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_services_message_service__WEBPACK_IMPORTED_MODULE_3__.MessageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: SmsReminderComponent,
    selectors: [["app-sms-reminder"]],
    decls: 1,
    vars: 1,
    consts: [[4, "ngIf"], [1, "row"], [1, "col-12"], [1, "align-items-center", "mb-2", "border-bottom"], ["data-feather", "link", 1, "font-medium-3"], [1, "ml-75"], [3, "explanation"], [1, "mt-2", "pt-2", "border-top"], [1, "form-check", "form-switch", "d-flex", "align-items-center", "mb-3"], ["type", "checkbox", "name", "sms-reminder", 1, "form-check-input", 3, "ngModel", "ngModelChange", "change"], ["for", "sms-reminder", 1, "form-check-label", "d-block"], [1, "badge", "badge-warning", "mb-0", "recommended"], [3, "explanation", "fontSize"], ["class", "ml-1 w-75", 4, "ngIf"], [1, "card"], [1, "row", "mt-2"], [1, "col-lg-4", "col-12"], [3, "item", "changeValue"], [1, "ml-1", "w-75"], [1, "badge", "badge-danger", "pt-1", "pb-1", "text-left"], [1, "fa", "fa-exclamation-triangle"]],
    template: function SmsReminderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, SmsReminderComponent_div_0_Template, 54, 35, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.reminderConfig);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _common_dynamic_component_dynamic_forms_dynamic_fields_common_explanation_mark_explanation_mark_component__WEBPACK_IMPORTED_MODULE_4__.ExplanationMarkComponent, _common_sms_counter_sms_counter_component__WEBPACK_IMPORTED_MODULE_5__.SmsCounterComponent, _sms_reminder_card_sms_reminder_card_component__WEBPACK_IMPORTED_MODULE_6__.SmsReminderCardComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe],
    styles: [".form-check[_ngcontent-%COMP%] {\n  display: block;\n  min-height: 1.45rem;\n  padding-left: 0;\n  margin-bottom: 0;\n}\n\n.form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  float: left;\n  margin-left: -1.785rem;\n}\n\n.form-check-input[_ngcontent-%COMP%] {\n  width: 1.285rem;\n  height: 1.285rem;\n  margin-top: 0.0825rem;\n  vertical-align: top;\n  background-color: #fff;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n  border: 1px solid #d8d6de;\n  -webkit-appearance: none;\n          appearance: none;\n  -webkit-print-color-adjust: exact;\n          color-adjust: exact;\n}\n\n.form-check-input[type=checkbox][_ngcontent-%COMP%] {\n  border-radius: 3px;\n}\n\n.form-check-input[type=radio][_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n\n.form-check-input[_ngcontent-%COMP%]:active {\n  filter: brightness(90%);\n}\n\n.form-check-input[_ngcontent-%COMP%]:focus {\n  border-color: #7367f0;\n  outline: 0;\n  box-shadow: 0 2px 4px 0 rgba(115, 103, 240, 0.4);\n}\n\n.form-check-input[_ngcontent-%COMP%]:checked {\n  background-color: #7367f0;\n  border-color: #7367f0;\n}\n\n.form-check-input[_ngcontent-%COMP%]:checked[type=checkbox] {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9.5 7.5'%3e%3cpolyline points='0.75 4.35 4.18 6.75 8.75 0.75' style='fill:none;stroke:%23fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px'/%3e%3c/svg%3e\");\n}\n\n.form-check-input[_ngcontent-%COMP%]:checked[type=radio] {\n  background-image: none;\n}\n\n.form-check-input[type=checkbox][_ngcontent-%COMP%]:indeterminate {\n  background-color: #7367f0;\n  border-color: #7367f0;\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-minus'%3e%3cline x1='5' y1='12' x2='19' y2='12'%3e%3c/line%3e%3c/svg%3e\");\n}\n\n.form-check-input[_ngcontent-%COMP%]:disabled {\n  pointer-events: none;\n  filter: none;\n  opacity: 0.65;\n}\n\n.form-check-input[disabled][_ngcontent-%COMP%]    ~ .form-check-label[_ngcontent-%COMP%], .form-check-input[_ngcontent-%COMP%]:disabled    ~ .form-check-label[_ngcontent-%COMP%] {\n  opacity: 0.65;\n}\n\n.form-check-label[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.form-switch[_ngcontent-%COMP%] {\n  padding-left: 3.5rem;\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  width: 3rem;\n  margin-left: -3.5rem;\n  background-image: url(\"data:image/svg+xml,%3csvg width='26px' height='26px' viewBox='0 0 26 27' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3ccircle id='path-1' cx='8' cy='8' r='8'%3e%3c/circle%3e%3cfilter x='-40.6%' y='-21.9%' width='168.8%' height='168.8%' filterUnits='objectBoundingBox' id='filter-2'%3e%3cfeOffset dx='-1' dy='2' in='SourceAlpha' result='shadowOffsetOuter1'%3e%3c/feOffset%3e%3cfeGaussianBlur stdDeviation='1.5' in='shadowOffsetOuter1' result='shadowBlurOuter1'%3e%3c/feGaussianBlur%3e%3cfeColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0' type='matrix' in='shadowBlurOuter1'%3e%3c/feColorMatrix%3e%3c/filter%3e%3c/defs%3e%3cg id='Artboard' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3e%3cg id='switches-dot' transform='translate%285.000000, 5.000000%29' fill-rule='nonzero'%3e%3cg id='Oval'%3e%3cuse fill='black' fill-opacity='1' filter='url%28%23filter-2%29' xlink:href='%23path-1'%3e%3c/use%3e%3cuse fill='%23fff' xlink:href='%23path-1'%3e%3c/use%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e\");\n  background-position: left center;\n  border-radius: 3rem;\n  transition: background-position 0.15s ease-in-out, background-color 0.1s ease;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n.form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:focus {\n  background-image: url(\"data:image/svg+xml,%3csvg width='26px' height='26px' viewBox='0 0 26 27' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3ccircle id='path-1' cx='8' cy='8' r='8'%3e%3c/circle%3e%3cfilter x='-40.6%' y='-21.9%' width='168.8%' height='168.8%' filterUnits='objectBoundingBox' id='filter-2'%3e%3cfeOffset dx='-1' dy='2' in='SourceAlpha' result='shadowOffsetOuter1'%3e%3c/feOffset%3e%3cfeGaussianBlur stdDeviation='1.5' in='shadowOffsetOuter1' result='shadowBlurOuter1'%3e%3c/feGaussianBlur%3e%3cfeColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0' type='matrix' in='shadowBlurOuter1'%3e%3c/feColorMatrix%3e%3c/filter%3e%3c/defs%3e%3cg id='Artboard' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3e%3cg id='switches-dot' transform='translate%285.000000, 5.000000%29' fill-rule='nonzero'%3e%3cg id='Oval'%3e%3cuse fill='black' fill-opacity='1' filter='url%28%23filter-2%29' xlink:href='%23path-1'%3e%3c/use%3e%3cuse fill='%23fff' xlink:href='%23path-1'%3e%3c/use%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e\");\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked {\n  background-position: right center;\n  background-image: url(\"data:image/svg+xml,%3csvg width='26px' height='26px' viewBox='0 0 26 27' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3ccircle id='path-1' cx='8' cy='8' r='8'%3e%3c/circle%3e%3cfilter x='-40.6%' y='-21.9%' width='168.8%' height='168.8%' filterUnits='objectBoundingBox' id='filter-2'%3e%3cfeOffset dx='-1' dy='2' in='SourceAlpha' result='shadowOffsetOuter1'%3e%3c/feOffset%3e%3cfeGaussianBlur stdDeviation='1.5' in='shadowOffsetOuter1' result='shadowBlurOuter1'%3e%3c/feGaussianBlur%3e%3cfeColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0' type='matrix' in='shadowBlurOuter1'%3e%3c/feColorMatrix%3e%3c/filter%3e%3c/defs%3e%3cg id='Artboard' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3e%3cg id='switches-dot' transform='translate%285.000000, 5.000000%29' fill-rule='nonzero'%3e%3cg id='Oval'%3e%3cuse fill='black' fill-opacity='1' filter='url%28%23filter-2%29' xlink:href='%23path-1'%3e%3c/use%3e%3cuse fill='%23fff' xlink:href='%23path-1'%3e%3c/use%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e\");\n}\n\n.form-check-inline[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 1rem;\n}\n\n.form-check[_ngcontent-%COMP%]:not(.form-switch)   .form-check-input[type=checkbox][_ngcontent-%COMP%]:checked {\n  background-size: 65%;\n}\n\n.form-check[_ngcontent-%COMP%]:not(.form-switch)   .form-check-input[_ngcontent-%COMP%]:disabled:not(:checked) {\n  background-color: #efefef;\n  border-color: #efefef;\n  opacity: 1;\n}\n\n.form-check-input[_ngcontent-%COMP%]:not(:disabled):checked {\n  box-shadow: 0 2px 4px 0 rgba(115, 103, 240, 0.4);\n}\n\n.form-check-input[_ngcontent-%COMP%]:not(:disabled):indeterminate {\n  background-size: 85%;\n}\n\n\n.form-switch[_ngcontent-%COMP%] {\n  position: relative;\n  \n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  height: 1.7rem;\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked {\n  box-shadow: none !important;\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:not(:checked) {\n  background-color: #e2e2e2;\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:active {\n  filter: none;\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:not(:disabled):checked, .form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:not(:disabled):focus {\n  box-shadow: none !important;\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%] {\n  line-height: 1.7rem;\n  \n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   .switch-text-left[_ngcontent-%COMP%], .form-switch[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   .switch-text-right[_ngcontent-%COMP%], .form-switch[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   .switch-icon-left[_ngcontent-%COMP%], .form-switch[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   .switch-icon-right[_ngcontent-%COMP%] {\n  position: absolute;\n  -webkit-user-select: none;\n          user-select: none;\n  line-height: 1.65;\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   .switch-text-left[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .form-switch[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   .switch-text-left[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .form-switch[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   .switch-text-right[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .form-switch[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   .switch-text-right[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .form-switch[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   .switch-icon-left[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .form-switch[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   .switch-icon-left[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .form-switch[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   .switch-icon-right[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .form-switch[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   .switch-icon-right[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 13px;\n  width: 13px;\n  font-size: 13px;\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   .switch-text-left[_ngcontent-%COMP%], .form-switch[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   .switch-icon-left[_ngcontent-%COMP%] {\n  left: 6px;\n  top: 0;\n  color: #fff;\n  opacity: 0;\n  transform: translateX(8px);\n  transition: opacity 0.1s ease, transform 0.15s ease;\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   .switch-text-right[_ngcontent-%COMP%], .form-switch[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]   .switch-icon-right[_ngcontent-%COMP%] {\n  left: 25px;\n  top: 0;\n  opacity: 1;\n  transform: translateX(0px);\n  transition: opacity 0.08s ease, transform 0.15s ease;\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked    ~ .form-check-label[_ngcontent-%COMP%]::before {\n  box-shadow: none;\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked    ~ .form-check-label[_ngcontent-%COMP%]::after {\n  transform: translateX(1.4rem);\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked    ~ .form-check-label[_ngcontent-%COMP%]   .switch-text-left[_ngcontent-%COMP%], .form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked    ~ .form-check-label[_ngcontent-%COMP%]   .switch-icon-left[_ngcontent-%COMP%] {\n  transform: translateX(0);\n  opacity: 1;\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked    ~ .form-check-label[_ngcontent-%COMP%]   .switch-text-right[_ngcontent-%COMP%], .form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked    ~ .form-check-label[_ngcontent-%COMP%]   .switch-icon-right[_ngcontent-%COMP%] {\n  transform: translateX(-8px);\n  opacity: 0;\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:not(:checked)    ~ .form-check-label[_ngcontent-%COMP%]   .switch-text-left[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:not(:checked)    ~ .form-check-label[_ngcontent-%COMP%]   .switch-text-right[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked    ~ .form-check-label[_ngcontent-%COMP%]   .switch-text-right[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.form-switch[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked    ~ .form-check-label[_ngcontent-%COMP%]   .switch-text-left[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AY29yZS9zY3NzL2Jhc2Uvc3dpdGNoLWJ1dHRvbi5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9kYXNoYm9hcmQvcGFnZXMvYWRtaW4vYWRtaW4tc2V0dGluZ3MvcmVtaW5kZXJzL3Ntcy1yZW1pbmRlci9zbXMtcmVtaW5kZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtVQUFBLGdCQUFBO0VBQ0EsaUNBQUE7VUFBQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0RBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNFLHlSQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHdVQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7O0VBRUUsYUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxvQkFBQTtFQUNBLG9sQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSw2RUFBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSxnQkFBQTtFQ0NGO0FBQ0Y7QURFQTtFQUNFLG9sQ0FBQTtBQ0FGOztBREdBO0VBQ0UsaUNBQUE7RUFDQSxvbENBQUE7QUNBRjs7QURHQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURHQTtFQUNFLG9CQUFBO0FDQUY7O0FER0E7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtBQ0FGOztBREdBO0VBQ0UsZ0RBQUE7QUNBRjs7QURHQTtFQUNFLG9CQUFBO0FDQUY7O0FER0EsYUFBQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSw4QkFBQTtBQ0FGOztBREdBO0VBQ0UsY0FBQTtBQ0FGOztBREdBO0VBQ0UsMkJBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FER0E7O0VBRUUsMkJBQUE7QUNBRjs7QURHQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURHQTs7OztFQUlFLGtCQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7Ozs7Ozs7O0VBUUUsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQUY7O0FER0E7O0VBRUUsU0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0EsbURBQUE7QUNBRjs7QURHQTs7RUFFRSxVQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtFQUNBLG9EQUFBO0FDQUY7O0FER0E7RUFDRSxVQUFBO0FDQUY7O0FER0E7RUFDRSxnQkFBQTtBQ0FGOztBREdBO0VBQ0UsNkJBQUE7QUNBRjs7QURHQTs7RUFFRSx3QkFBQTtFQUNBLFVBQUE7QUNBRjs7QURHQTs7RUFFRSwyQkFBQTtFQUNBLFVBQUE7QUNBRjs7QURHQTtFQUlFLFVBQUE7QUNIRjs7QURNQTtFQUlFLFVBQUE7QUNORjs7QURTQTtFQUNFLFVBQUE7QUNORjs7QURTQTtFQUNFLFVBQUE7QUNORiIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNoZWNrIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtaW4taGVpZ2h0OiAxLjQ1cmVtO1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4uZm9ybS1jaGVjayAuZm9ybS1jaGVjay1pbnB1dCB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xLjc4NXJlbTtcclxufVxyXG5cclxuLmZvcm0tY2hlY2staW5wdXQge1xyXG4gIHdpZHRoOiAxLjI4NXJlbTtcclxuICBoZWlnaHQ6IDEuMjg1cmVtO1xyXG4gIG1hcmdpbi10b3A6IDAuMDgyNXJlbTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOGQ2ZGU7XHJcbiAgYXBwZWFyYW5jZTogbm9uZTtcclxuICBjb2xvci1hZGp1c3Q6IGV4YWN0O1xyXG59XHJcblxyXG4uZm9ybS1jaGVjay1pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuLmZvcm0tY2hlY2staW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5mb3JtLWNoZWNrLWlucHV0OmFjdGl2ZSB7XHJcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDkwJSk7XHJcbn1cclxuXHJcbi5mb3JtLWNoZWNrLWlucHV0OmZvY3VzIHtcclxuICBib3JkZXItY29sb3I6ICM3MzY3ZjA7XHJcbiAgb3V0bGluZTogMDtcclxuICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDExNSwgMTAzLCAyNDAsIDAuNCk7XHJcbn1cclxuXHJcbi5mb3JtLWNoZWNrLWlucHV0OmNoZWNrZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MzY3ZjA7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNzM2N2YwO1xyXG59XHJcblxyXG4uZm9ybS1jaGVjay1pbnB1dDpjaGVja2VkW3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgOS41IDcuNSclM2UlM2Nwb2x5bGluZSBwb2ludHM9JzAuNzUgNC4zNSA0LjE4IDYuNzUgOC43NSAwLjc1JyBzdHlsZT0nZmlsbDpub25lO3N0cm9rZTolMjNmZmY7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDoxLjVweCcvJTNlJTNjL3N2ZyUzZVwiKTtcclxufVxyXG5cclxuLmZvcm0tY2hlY2staW5wdXQ6Y2hlY2tlZFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbn1cclxuXHJcbi5mb3JtLWNoZWNrLWlucHV0W3R5cGU9XCJjaGVja2JveFwiXTppbmRldGVybWluYXRlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzM2N2YwO1xyXG4gIGJvcmRlci1jb2xvcjogIzczNjdmMDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9JyUyM2ZmZicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItbWludXMnJTNlJTNjbGluZSB4MT0nNScgeTE9JzEyJyB4Mj0nMTknIHkyPScxMiclM2UlM2MvbGluZSUzZSUzYy9zdmclM2VcIik7XHJcbn1cclxuXHJcbi5mb3JtLWNoZWNrLWlucHV0OmRpc2FibGVkIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBmaWx0ZXI6IG5vbmU7XHJcbiAgb3BhY2l0eTogMC42NTtcclxufVxyXG5cclxuLmZvcm0tY2hlY2staW5wdXRbZGlzYWJsZWRdIH4gLmZvcm0tY2hlY2stbGFiZWwsXHJcbi5mb3JtLWNoZWNrLWlucHV0OmRpc2FibGVkIH4gLmZvcm0tY2hlY2stbGFiZWwge1xyXG4gIG9wYWNpdHk6IDAuNjU7XHJcbn1cclxuXHJcbi5mb3JtLWNoZWNrLWxhYmVsIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5mb3JtLXN3aXRjaCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAzLjVyZW07XHJcbn1cclxuXHJcbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1pbnB1dCB7XHJcbiAgd2lkdGg6IDNyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IC0zLjVyZW07XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB3aWR0aD0nMjZweCcgaGVpZ2h0PScyNnB4JyB2aWV3Qm94PScwIDAgMjYgMjcnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayclM2UlM2NkZWZzJTNlJTNjY2lyY2xlIGlkPSdwYXRoLTEnIGN4PSc4JyBjeT0nOCcgcj0nOCclM2UlM2MvY2lyY2xlJTNlJTNjZmlsdGVyIHg9Jy00MC42JScgeT0nLTIxLjklJyB3aWR0aD0nMTY4LjglJyBoZWlnaHQ9JzE2OC44JScgZmlsdGVyVW5pdHM9J29iamVjdEJvdW5kaW5nQm94JyBpZD0nZmlsdGVyLTInJTNlJTNjZmVPZmZzZXQgZHg9Jy0xJyBkeT0nMicgaW49J1NvdXJjZUFscGhhJyByZXN1bHQ9J3NoYWRvd09mZnNldE91dGVyMSclM2UlM2MvZmVPZmZzZXQlM2UlM2NmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzEuNScgaW49J3NoYWRvd09mZnNldE91dGVyMScgcmVzdWx0PSdzaGFkb3dCbHVyT3V0ZXIxJyUzZSUzYy9mZUdhdXNzaWFuQmx1ciUzZSUzY2ZlQ29sb3JNYXRyaXggdmFsdWVzPScwIDAgMCAwIDAgICAwIDAgMCAwIDAgICAwIDAgMCAwIDAgIDAgMCAwIDAuMiAwJyB0eXBlPSdtYXRyaXgnIGluPSdzaGFkb3dCbHVyT3V0ZXIxJyUzZSUzYy9mZUNvbG9yTWF0cml4JTNlJTNjL2ZpbHRlciUzZSUzYy9kZWZzJTNlJTNjZyBpZD0nQXJ0Ym9hcmQnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnJTNlJTNjZyBpZD0nc3dpdGNoZXMtZG90JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSUyODUuMDAwMDAwLCA1LjAwMDAwMCUyOScgZmlsbC1ydWxlPSdub256ZXJvJyUzZSUzY2cgaWQ9J092YWwnJTNlJTNjdXNlIGZpbGw9J2JsYWNrJyBmaWxsLW9wYWNpdHk9JzEnIGZpbHRlcj0ndXJsJTI4JTIzZmlsdGVyLTIlMjknIHhsaW5rOmhyZWY9JyUyM3BhdGgtMSclM2UlM2MvdXNlJTNlJTNjdXNlIGZpbGw9JyUyM2ZmZicgeGxpbms6aHJlZj0nJTIzcGF0aC0xJyUzZSUzYy91c2UlM2UlM2MvZyUzZSUzYy9nJTNlJTNjL2clM2UlM2Mvc3ZnJTNlXCIpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNyZW07XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1wb3NpdGlvbiAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjFzIGVhc2U7XHJcbn1cclxuXHJcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XHJcbiAgLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWlucHV0IHtcclxuICAgIHRyYW5zaXRpb246IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2staW5wdXQ6Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2Nzdmcgd2lkdGg9JzI2cHgnIGhlaWdodD0nMjZweCcgdmlld0JveD0nMCAwIDI2IDI3JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnJTNlJTNjZGVmcyUzZSUzY2NpcmNsZSBpZD0ncGF0aC0xJyBjeD0nOCcgY3k9JzgnIHI9JzgnJTNlJTNjL2NpcmNsZSUzZSUzY2ZpbHRlciB4PSctNDAuNiUnIHk9Jy0yMS45JScgd2lkdGg9JzE2OC44JScgaGVpZ2h0PScxNjguOCUnIGZpbHRlclVuaXRzPSdvYmplY3RCb3VuZGluZ0JveCcgaWQ9J2ZpbHRlci0yJyUzZSUzY2ZlT2Zmc2V0IGR4PSctMScgZHk9JzInIGluPSdTb3VyY2VBbHBoYScgcmVzdWx0PSdzaGFkb3dPZmZzZXRPdXRlcjEnJTNlJTNjL2ZlT2Zmc2V0JTNlJTNjZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPScxLjUnIGluPSdzaGFkb3dPZmZzZXRPdXRlcjEnIHJlc3VsdD0nc2hhZG93Qmx1ck91dGVyMSclM2UlM2MvZmVHYXVzc2lhbkJsdXIlM2UlM2NmZUNvbG9yTWF0cml4IHZhbHVlcz0nMCAwIDAgMCAwICAgMCAwIDAgMCAwICAgMCAwIDAgMCAwICAwIDAgMCAwLjIgMCcgdHlwZT0nbWF0cml4JyBpbj0nc2hhZG93Qmx1ck91dGVyMSclM2UlM2MvZmVDb2xvck1hdHJpeCUzZSUzYy9maWx0ZXIlM2UlM2MvZGVmcyUzZSUzY2cgaWQ9J0FydGJvYXJkJyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJyUzZSUzY2cgaWQ9J3N3aXRjaGVzLWRvdCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUlMjg1LjAwMDAwMCwgNS4wMDAwMDAlMjknIGZpbGwtcnVsZT0nbm9uemVybyclM2UlM2NnIGlkPSdPdmFsJyUzZSUzY3VzZSBmaWxsPSdibGFjaycgZmlsbC1vcGFjaXR5PScxJyBmaWx0ZXI9J3VybCUyOCUyM2ZpbHRlci0yJTI5JyB4bGluazpocmVmPSclMjNwYXRoLTEnJTNlJTNjL3VzZSUzZSUzY3VzZSBmaWxsPSclMjNmZmYnIHhsaW5rOmhyZWY9JyUyM3BhdGgtMSclM2UlM2MvdXNlJTNlJTNjL2clM2UlM2MvZyUzZSUzYy9nJTNlJTNjL3N2ZyUzZVwiKTtcclxufVxyXG5cclxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWlucHV0OmNoZWNrZWQge1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHdpZHRoPScyNnB4JyBoZWlnaHQ9JzI2cHgnIHZpZXdCb3g9JzAgMCAyNiAyNycgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyUzZSUzY2RlZnMlM2UlM2NjaXJjbGUgaWQ9J3BhdGgtMScgY3g9JzgnIGN5PSc4JyByPSc4JyUzZSUzYy9jaXJjbGUlM2UlM2NmaWx0ZXIgeD0nLTQwLjYlJyB5PSctMjEuOSUnIHdpZHRoPScxNjguOCUnIGhlaWdodD0nMTY4LjglJyBmaWx0ZXJVbml0cz0nb2JqZWN0Qm91bmRpbmdCb3gnIGlkPSdmaWx0ZXItMiclM2UlM2NmZU9mZnNldCBkeD0nLTEnIGR5PScyJyBpbj0nU291cmNlQWxwaGEnIHJlc3VsdD0nc2hhZG93T2Zmc2V0T3V0ZXIxJyUzZSUzYy9mZU9mZnNldCUzZSUzY2ZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMS41JyBpbj0nc2hhZG93T2Zmc2V0T3V0ZXIxJyByZXN1bHQ9J3NoYWRvd0JsdXJPdXRlcjEnJTNlJTNjL2ZlR2F1c3NpYW5CbHVyJTNlJTNjZmVDb2xvck1hdHJpeCB2YWx1ZXM9JzAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgMCAwIDAgMC4yIDAnIHR5cGU9J21hdHJpeCcgaW49J3NoYWRvd0JsdXJPdXRlcjEnJTNlJTNjL2ZlQ29sb3JNYXRyaXglM2UlM2MvZmlsdGVyJTNlJTNjL2RlZnMlM2UlM2NnIGlkPSdBcnRib2FyZCcgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCclM2UlM2NnIGlkPSdzd2l0Y2hlcy1kb3QnIHRyYW5zZm9ybT0ndHJhbnNsYXRlJTI4NS4wMDAwMDAsIDUuMDAwMDAwJTI5JyBmaWxsLXJ1bGU9J25vbnplcm8nJTNlJTNjZyBpZD0nT3ZhbCclM2UlM2N1c2UgZmlsbD0nYmxhY2snIGZpbGwtb3BhY2l0eT0nMScgZmlsdGVyPSd1cmwlMjglMjNmaWx0ZXItMiUyOScgeGxpbms6aHJlZj0nJTIzcGF0aC0xJyUzZSUzYy91c2UlM2UlM2N1c2UgZmlsbD0nJTIzZmZmJyB4bGluazpocmVmPSclMjNwYXRoLTEnJTNlJTNjL3VzZSUzZSUzYy9nJTNlJTNjL2clM2UlM2MvZyUzZSUzYy9zdmclM2VcIik7XHJcbn1cclxuXHJcbi5mb3JtLWNoZWNrLWlubGluZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxufVxyXG5cclxuLmZvcm0tY2hlY2s6bm90KC5mb3JtLXN3aXRjaCkgLmZvcm0tY2hlY2staW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogNjUlO1xyXG59XHJcblxyXG4uZm9ybS1jaGVjazpub3QoLmZvcm0tc3dpdGNoKSAuZm9ybS1jaGVjay1pbnB1dDpkaXNhYmxlZDpub3QoOmNoZWNrZWQpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xyXG4gIGJvcmRlci1jb2xvcjogI2VmZWZlZjtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uZm9ybS1jaGVjay1pbnB1dDpub3QoOmRpc2FibGVkKTpjaGVja2VkIHtcclxuICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDExNSwgMTAzLCAyNDAsIDAuNCk7XHJcbn1cclxuXHJcbi5mb3JtLWNoZWNrLWlucHV0Om5vdCg6ZGlzYWJsZWQpOmluZGV0ZXJtaW5hdGUge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogODUlO1xyXG59XHJcblxyXG4vKiBTd2l0Y2hlcyAqL1xyXG4uZm9ybS1zd2l0Y2gge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvKkZvciBTd2l0Y2ggSGFuZGxlIEFuaW1hdGlvbiovXHJcbn1cclxuXHJcbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1pbnB1dCB7XHJcbiAgaGVpZ2h0OiAxLjdyZW07XHJcbn1cclxuXHJcbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1pbnB1dDpjaGVja2VkIHtcclxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1pbnB1dCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2staW5wdXQ6bm90KDpjaGVja2VkKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTJlMjtcclxufVxyXG5cclxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWlucHV0OmFjdGl2ZSB7XHJcbiAgZmlsdGVyOiBub25lO1xyXG59XHJcblxyXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2staW5wdXQ6bm90KDpkaXNhYmxlZCk6Y2hlY2tlZCxcclxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWlucHV0Om5vdCg6ZGlzYWJsZWQpOmZvY3VzIHtcclxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1sYWJlbCB7XHJcbiAgbGluZS1oZWlnaHQ6IDEuN3JlbTtcclxuICAvKkZvciBTd2l0Y2ggdGV4dCovXHJcbn1cclxuXHJcbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1sYWJlbCAuc3dpdGNoLXRleHQtbGVmdCxcclxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWxhYmVsIC5zd2l0Y2gtdGV4dC1yaWdodCxcclxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWxhYmVsIC5zd2l0Y2gtaWNvbi1sZWZ0LFxyXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2stbGFiZWwgLnN3aXRjaC1pY29uLXJpZ2h0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNjU7XHJcbn1cclxuXHJcbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1sYWJlbCAuc3dpdGNoLXRleHQtbGVmdCBpLFxyXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2stbGFiZWwgLnN3aXRjaC10ZXh0LWxlZnQgc3ZnLFxyXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2stbGFiZWwgLnN3aXRjaC10ZXh0LXJpZ2h0IGksXHJcbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1sYWJlbCAuc3dpdGNoLXRleHQtcmlnaHQgc3ZnLFxyXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2stbGFiZWwgLnN3aXRjaC1pY29uLWxlZnQgaSxcclxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWxhYmVsIC5zd2l0Y2gtaWNvbi1sZWZ0IHN2ZyxcclxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWxhYmVsIC5zd2l0Y2gtaWNvbi1yaWdodCBpLFxyXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2stbGFiZWwgLnN3aXRjaC1pY29uLXJpZ2h0IHN2ZyB7XHJcbiAgaGVpZ2h0OiAxM3B4O1xyXG4gIHdpZHRoOiAxM3B4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWxhYmVsIC5zd2l0Y2gtdGV4dC1sZWZ0LFxyXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2stbGFiZWwgLnN3aXRjaC1pY29uLWxlZnQge1xyXG4gIGxlZnQ6IDZweDtcclxuICB0b3A6IDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOHB4KTtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMXMgZWFzZSwgdHJhbnNmb3JtIDAuMTVzIGVhc2U7XHJcbn1cclxuXHJcbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1sYWJlbCAuc3dpdGNoLXRleHQtcmlnaHQsXHJcbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1sYWJlbCAuc3dpdGNoLWljb24tcmlnaHQge1xyXG4gIGxlZnQ6IDI1cHg7XHJcbiAgdG9wOiAwO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjA4cyBlYXNlLCB0cmFuc2Zvcm0gMC4xNXMgZWFzZTtcclxufVxyXG5cclxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWxhYmVsOmZvY3VzIHtcclxuICBvdXRsaW5lOiAwO1xyXG59XHJcblxyXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2staW5wdXQ6Y2hlY2tlZCB+IC5mb3JtLWNoZWNrLWxhYmVsOjpiZWZvcmUge1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1pbnB1dDpjaGVja2VkIH4gLmZvcm0tY2hlY2stbGFiZWw6OmFmdGVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMS40cmVtKTtcclxufVxyXG5cclxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWlucHV0OmNoZWNrZWQgfiAuZm9ybS1jaGVjay1sYWJlbCAuc3dpdGNoLXRleHQtbGVmdCxcclxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWlucHV0OmNoZWNrZWQgfiAuZm9ybS1jaGVjay1sYWJlbCAuc3dpdGNoLWljb24tbGVmdCB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1pbnB1dDpjaGVja2VkIH4gLmZvcm0tY2hlY2stbGFiZWwgLnN3aXRjaC10ZXh0LXJpZ2h0LFxyXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2staW5wdXQ6Y2hlY2tlZCB+IC5mb3JtLWNoZWNrLWxhYmVsIC5zd2l0Y2gtaWNvbi1yaWdodCB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC04cHgpO1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5mb3JtLXN3aXRjaFxyXG4gIC5mb3JtLWNoZWNrLWlucHV0Om5vdCg6Y2hlY2tlZClcclxuICB+IC5mb3JtLWNoZWNrLWxhYmVsXHJcbiAgLnN3aXRjaC10ZXh0LWxlZnQge1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5mb3JtLXN3aXRjaFxyXG4gIC5mb3JtLWNoZWNrLWlucHV0Om5vdCg6Y2hlY2tlZClcclxuICB+IC5mb3JtLWNoZWNrLWxhYmVsXHJcbiAgLnN3aXRjaC10ZXh0LXJpZ2h0IHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2staW5wdXQ6Y2hlY2tlZCB+IC5mb3JtLWNoZWNrLWxhYmVsIC5zd2l0Y2gtdGV4dC1yaWdodCB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWlucHV0OmNoZWNrZWQgfiAuZm9ybS1jaGVjay1sYWJlbCAuc3dpdGNoLXRleHQtbGVmdCB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4iLCIuZm9ybS1jaGVjayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtaW4taGVpZ2h0OiAxLjQ1cmVtO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5mb3JtLWNoZWNrIC5mb3JtLWNoZWNrLWlucHV0IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAtMS43ODVyZW07XG59XG5cbi5mb3JtLWNoZWNrLWlucHV0IHtcbiAgd2lkdGg6IDEuMjg1cmVtO1xuICBoZWlnaHQ6IDEuMjg1cmVtO1xuICBtYXJnaW4tdG9wOiAwLjA4MjVyZW07XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDhkNmRlO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBjb2xvci1hZGp1c3Q6IGV4YWN0O1xufVxuXG4uZm9ybS1jaGVjay1pbnB1dFt0eXBlPWNoZWNrYm94XSB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLmZvcm0tY2hlY2staW5wdXRbdHlwZT1yYWRpb10ge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5mb3JtLWNoZWNrLWlucHV0OmFjdGl2ZSB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg5MCUpO1xufVxuXG4uZm9ybS1jaGVjay1pbnB1dDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogIzczNjdmMDtcbiAgb3V0bGluZTogMDtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgxMTUsIDEwMywgMjQwLCAwLjQpO1xufVxuXG4uZm9ybS1jaGVjay1pbnB1dDpjaGVja2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzczNjdmMDtcbiAgYm9yZGVyLWNvbG9yOiAjNzM2N2YwO1xufVxuXG4uZm9ybS1jaGVjay1pbnB1dDpjaGVja2VkW3R5cGU9Y2hlY2tib3hdIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgOS41IDcuNSclM2UlM2Nwb2x5bGluZSBwb2ludHM9JzAuNzUgNC4zNSA0LjE4IDYuNzUgOC43NSAwLjc1JyBzdHlsZT0nZmlsbDpub25lO3N0cm9rZTolMjNmZmY7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDoxLjVweCcvJTNlJTNjL3N2ZyUzZVwiKTtcbn1cblxuLmZvcm0tY2hlY2staW5wdXQ6Y2hlY2tlZFt0eXBlPXJhZGlvXSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG59XG5cbi5mb3JtLWNoZWNrLWlucHV0W3R5cGU9Y2hlY2tib3hdOmluZGV0ZXJtaW5hdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzM2N2YwO1xuICBib3JkZXItY29sb3I6ICM3MzY3ZjA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzZmZmJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1taW51cyclM2UlM2NsaW5lIHgxPSc1JyB5MT0nMTInIHgyPScxOScgeTI9JzEyJyUzZSUzYy9saW5lJTNlJTNjL3N2ZyUzZVwiKTtcbn1cblxuLmZvcm0tY2hlY2staW5wdXQ6ZGlzYWJsZWQge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgZmlsdGVyOiBub25lO1xuICBvcGFjaXR5OiAwLjY1O1xufVxuXG4uZm9ybS1jaGVjay1pbnB1dFtkaXNhYmxlZF0gfiAuZm9ybS1jaGVjay1sYWJlbCxcbi5mb3JtLWNoZWNrLWlucHV0OmRpc2FibGVkIH4gLmZvcm0tY2hlY2stbGFiZWwge1xuICBvcGFjaXR5OiAwLjY1O1xufVxuXG4uZm9ybS1jaGVjay1sYWJlbCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZvcm0tc3dpdGNoIHtcbiAgcGFkZGluZy1sZWZ0OiAzLjVyZW07XG59XG5cbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1pbnB1dCB7XG4gIHdpZHRoOiAzcmVtO1xuICBtYXJnaW4tbGVmdDogLTMuNXJlbTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB3aWR0aD0nMjZweCcgaGVpZ2h0PScyNnB4JyB2aWV3Qm94PScwIDAgMjYgMjcnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayclM2UlM2NkZWZzJTNlJTNjY2lyY2xlIGlkPSdwYXRoLTEnIGN4PSc4JyBjeT0nOCcgcj0nOCclM2UlM2MvY2lyY2xlJTNlJTNjZmlsdGVyIHg9Jy00MC42JScgeT0nLTIxLjklJyB3aWR0aD0nMTY4LjglJyBoZWlnaHQ9JzE2OC44JScgZmlsdGVyVW5pdHM9J29iamVjdEJvdW5kaW5nQm94JyBpZD0nZmlsdGVyLTInJTNlJTNjZmVPZmZzZXQgZHg9Jy0xJyBkeT0nMicgaW49J1NvdXJjZUFscGhhJyByZXN1bHQ9J3NoYWRvd09mZnNldE91dGVyMSclM2UlM2MvZmVPZmZzZXQlM2UlM2NmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzEuNScgaW49J3NoYWRvd09mZnNldE91dGVyMScgcmVzdWx0PSdzaGFkb3dCbHVyT3V0ZXIxJyUzZSUzYy9mZUdhdXNzaWFuQmx1ciUzZSUzY2ZlQ29sb3JNYXRyaXggdmFsdWVzPScwIDAgMCAwIDAgICAwIDAgMCAwIDAgICAwIDAgMCAwIDAgIDAgMCAwIDAuMiAwJyB0eXBlPSdtYXRyaXgnIGluPSdzaGFkb3dCbHVyT3V0ZXIxJyUzZSUzYy9mZUNvbG9yTWF0cml4JTNlJTNjL2ZpbHRlciUzZSUzYy9kZWZzJTNlJTNjZyBpZD0nQXJ0Ym9hcmQnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnJTNlJTNjZyBpZD0nc3dpdGNoZXMtZG90JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSUyODUuMDAwMDAwLCA1LjAwMDAwMCUyOScgZmlsbC1ydWxlPSdub256ZXJvJyUzZSUzY2cgaWQ9J092YWwnJTNlJTNjdXNlIGZpbGw9J2JsYWNrJyBmaWxsLW9wYWNpdHk9JzEnIGZpbHRlcj0ndXJsJTI4JTIzZmlsdGVyLTIlMjknIHhsaW5rOmhyZWY9JyUyM3BhdGgtMSclM2UlM2MvdXNlJTNlJTNjdXNlIGZpbGw9JyUyM2ZmZicgeGxpbms6aHJlZj0nJTIzcGF0aC0xJyUzZSUzYy91c2UlM2UlM2MvZyUzZSUzYy9nJTNlJTNjL2clM2UlM2Mvc3ZnJTNlXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogM3JlbTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1wb3NpdGlvbiAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjFzIGVhc2U7XG59XG5cbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gIC5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1pbnB1dCB7XG4gICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgfVxufVxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWlucHV0OmZvY3VzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB3aWR0aD0nMjZweCcgaGVpZ2h0PScyNnB4JyB2aWV3Qm94PScwIDAgMjYgMjcnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayclM2UlM2NkZWZzJTNlJTNjY2lyY2xlIGlkPSdwYXRoLTEnIGN4PSc4JyBjeT0nOCcgcj0nOCclM2UlM2MvY2lyY2xlJTNlJTNjZmlsdGVyIHg9Jy00MC42JScgeT0nLTIxLjklJyB3aWR0aD0nMTY4LjglJyBoZWlnaHQ9JzE2OC44JScgZmlsdGVyVW5pdHM9J29iamVjdEJvdW5kaW5nQm94JyBpZD0nZmlsdGVyLTInJTNlJTNjZmVPZmZzZXQgZHg9Jy0xJyBkeT0nMicgaW49J1NvdXJjZUFscGhhJyByZXN1bHQ9J3NoYWRvd09mZnNldE91dGVyMSclM2UlM2MvZmVPZmZzZXQlM2UlM2NmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzEuNScgaW49J3NoYWRvd09mZnNldE91dGVyMScgcmVzdWx0PSdzaGFkb3dCbHVyT3V0ZXIxJyUzZSUzYy9mZUdhdXNzaWFuQmx1ciUzZSUzY2ZlQ29sb3JNYXRyaXggdmFsdWVzPScwIDAgMCAwIDAgICAwIDAgMCAwIDAgICAwIDAgMCAwIDAgIDAgMCAwIDAuMiAwJyB0eXBlPSdtYXRyaXgnIGluPSdzaGFkb3dCbHVyT3V0ZXIxJyUzZSUzYy9mZUNvbG9yTWF0cml4JTNlJTNjL2ZpbHRlciUzZSUzYy9kZWZzJTNlJTNjZyBpZD0nQXJ0Ym9hcmQnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnJTNlJTNjZyBpZD0nc3dpdGNoZXMtZG90JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSUyODUuMDAwMDAwLCA1LjAwMDAwMCUyOScgZmlsbC1ydWxlPSdub256ZXJvJyUzZSUzY2cgaWQ9J092YWwnJTNlJTNjdXNlIGZpbGw9J2JsYWNrJyBmaWxsLW9wYWNpdHk9JzEnIGZpbHRlcj0ndXJsJTI4JTIzZmlsdGVyLTIlMjknIHhsaW5rOmhyZWY9JyUyM3BhdGgtMSclM2UlM2MvdXNlJTNlJTNjdXNlIGZpbGw9JyUyM2ZmZicgeGxpbms6aHJlZj0nJTIzcGF0aC0xJyUzZSUzYy91c2UlM2UlM2MvZyUzZSUzYy9nJTNlJTNjL2clM2UlM2Mvc3ZnJTNlXCIpO1xufVxuXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2staW5wdXQ6Y2hlY2tlZCB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB3aWR0aD0nMjZweCcgaGVpZ2h0PScyNnB4JyB2aWV3Qm94PScwIDAgMjYgMjcnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayclM2UlM2NkZWZzJTNlJTNjY2lyY2xlIGlkPSdwYXRoLTEnIGN4PSc4JyBjeT0nOCcgcj0nOCclM2UlM2MvY2lyY2xlJTNlJTNjZmlsdGVyIHg9Jy00MC42JScgeT0nLTIxLjklJyB3aWR0aD0nMTY4LjglJyBoZWlnaHQ9JzE2OC44JScgZmlsdGVyVW5pdHM9J29iamVjdEJvdW5kaW5nQm94JyBpZD0nZmlsdGVyLTInJTNlJTNjZmVPZmZzZXQgZHg9Jy0xJyBkeT0nMicgaW49J1NvdXJjZUFscGhhJyByZXN1bHQ9J3NoYWRvd09mZnNldE91dGVyMSclM2UlM2MvZmVPZmZzZXQlM2UlM2NmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzEuNScgaW49J3NoYWRvd09mZnNldE91dGVyMScgcmVzdWx0PSdzaGFkb3dCbHVyT3V0ZXIxJyUzZSUzYy9mZUdhdXNzaWFuQmx1ciUzZSUzY2ZlQ29sb3JNYXRyaXggdmFsdWVzPScwIDAgMCAwIDAgICAwIDAgMCAwIDAgICAwIDAgMCAwIDAgIDAgMCAwIDAuMiAwJyB0eXBlPSdtYXRyaXgnIGluPSdzaGFkb3dCbHVyT3V0ZXIxJyUzZSUzYy9mZUNvbG9yTWF0cml4JTNlJTNjL2ZpbHRlciUzZSUzYy9kZWZzJTNlJTNjZyBpZD0nQXJ0Ym9hcmQnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnJTNlJTNjZyBpZD0nc3dpdGNoZXMtZG90JyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSUyODUuMDAwMDAwLCA1LjAwMDAwMCUyOScgZmlsbC1ydWxlPSdub256ZXJvJyUzZSUzY2cgaWQ9J092YWwnJTNlJTNjdXNlIGZpbGw9J2JsYWNrJyBmaWxsLW9wYWNpdHk9JzEnIGZpbHRlcj0ndXJsJTI4JTIzZmlsdGVyLTIlMjknIHhsaW5rOmhyZWY9JyUyM3BhdGgtMSclM2UlM2MvdXNlJTNlJTNjdXNlIGZpbGw9JyUyM2ZmZicgeGxpbms6aHJlZj0nJTIzcGF0aC0xJyUzZSUzYy91c2UlM2UlM2MvZyUzZSUzYy9nJTNlJTNjL2clM2UlM2Mvc3ZnJTNlXCIpO1xufVxuXG4uZm9ybS1jaGVjay1pbmxpbmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cblxuLmZvcm0tY2hlY2s6bm90KC5mb3JtLXN3aXRjaCkgLmZvcm0tY2hlY2staW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCB7XG4gIGJhY2tncm91bmQtc2l6ZTogNjUlO1xufVxuXG4uZm9ybS1jaGVjazpub3QoLmZvcm0tc3dpdGNoKSAuZm9ybS1jaGVjay1pbnB1dDpkaXNhYmxlZDpub3QoOmNoZWNrZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbiAgYm9yZGVyLWNvbG9yOiAjZWZlZmVmO1xuICBvcGFjaXR5OiAxO1xufVxuXG4uZm9ybS1jaGVjay1pbnB1dDpub3QoOmRpc2FibGVkKTpjaGVja2VkIHtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgxMTUsIDEwMywgMjQwLCAwLjQpO1xufVxuXG4uZm9ybS1jaGVjay1pbnB1dDpub3QoOmRpc2FibGVkKTppbmRldGVybWluYXRlIHtcbiAgYmFja2dyb3VuZC1zaXplOiA4NSU7XG59XG5cbi8qIFN3aXRjaGVzICovXG4uZm9ybS1zd2l0Y2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8qRm9yIFN3aXRjaCBIYW5kbGUgQW5pbWF0aW9uKi9cbn1cblxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWlucHV0IHtcbiAgaGVpZ2h0OiAxLjdyZW07XG59XG5cbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1pbnB1dDpjaGVja2VkIHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2staW5wdXQge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1pbnB1dDpub3QoOmNoZWNrZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTJlMjtcbn1cblxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWlucHV0OmFjdGl2ZSB7XG4gIGZpbHRlcjogbm9uZTtcbn1cblxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWlucHV0Om5vdCg6ZGlzYWJsZWQpOmNoZWNrZWQsXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2staW5wdXQ6bm90KDpkaXNhYmxlZCk6Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1sYWJlbCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjdyZW07XG4gIC8qRm9yIFN3aXRjaCB0ZXh0Ki9cbn1cblxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWxhYmVsIC5zd2l0Y2gtdGV4dC1sZWZ0LFxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWxhYmVsIC5zd2l0Y2gtdGV4dC1yaWdodCxcbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1sYWJlbCAuc3dpdGNoLWljb24tbGVmdCxcbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1sYWJlbCAuc3dpdGNoLWljb24tcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBsaW5lLWhlaWdodDogMS42NTtcbn1cblxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWxhYmVsIC5zd2l0Y2gtdGV4dC1sZWZ0IGksXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2stbGFiZWwgLnN3aXRjaC10ZXh0LWxlZnQgc3ZnLFxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWxhYmVsIC5zd2l0Y2gtdGV4dC1yaWdodCBpLFxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWxhYmVsIC5zd2l0Y2gtdGV4dC1yaWdodCBzdmcsXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2stbGFiZWwgLnN3aXRjaC1pY29uLWxlZnQgaSxcbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1sYWJlbCAuc3dpdGNoLWljb24tbGVmdCBzdmcsXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2stbGFiZWwgLnN3aXRjaC1pY29uLXJpZ2h0IGksXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2stbGFiZWwgLnN3aXRjaC1pY29uLXJpZ2h0IHN2ZyB7XG4gIGhlaWdodDogMTNweDtcbiAgd2lkdGg6IDEzcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWxhYmVsIC5zd2l0Y2gtdGV4dC1sZWZ0LFxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWxhYmVsIC5zd2l0Y2gtaWNvbi1sZWZ0IHtcbiAgbGVmdDogNnB4O1xuICB0b3A6IDA7XG4gIGNvbG9yOiAjZmZmO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOHB4KTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjFzIGVhc2UsIHRyYW5zZm9ybSAwLjE1cyBlYXNlO1xufVxuXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2stbGFiZWwgLnN3aXRjaC10ZXh0LXJpZ2h0LFxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWxhYmVsIC5zd2l0Y2gtaWNvbi1yaWdodCB7XG4gIGxlZnQ6IDI1cHg7XG4gIHRvcDogMDtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4wOHMgZWFzZSwgdHJhbnNmb3JtIDAuMTVzIGVhc2U7XG59XG5cbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1sYWJlbDpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG5cbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1pbnB1dDpjaGVja2VkIH4gLmZvcm0tY2hlY2stbGFiZWw6OmJlZm9yZSB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1pbnB1dDpjaGVja2VkIH4gLmZvcm0tY2hlY2stbGFiZWw6OmFmdGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEuNHJlbSk7XG59XG5cbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1pbnB1dDpjaGVja2VkIH4gLmZvcm0tY2hlY2stbGFiZWwgLnN3aXRjaC10ZXh0LWxlZnQsXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2staW5wdXQ6Y2hlY2tlZCB+IC5mb3JtLWNoZWNrLWxhYmVsIC5zd2l0Y2gtaWNvbi1sZWZ0IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICBvcGFjaXR5OiAxO1xufVxuXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2staW5wdXQ6Y2hlY2tlZCB+IC5mb3JtLWNoZWNrLWxhYmVsIC5zd2l0Y2gtdGV4dC1yaWdodCxcbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1pbnB1dDpjaGVja2VkIH4gLmZvcm0tY2hlY2stbGFiZWwgLnN3aXRjaC1pY29uLXJpZ2h0IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC04cHgpO1xuICBvcGFjaXR5OiAwO1xufVxuXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2staW5wdXQ6bm90KDpjaGVja2VkKSB+IC5mb3JtLWNoZWNrLWxhYmVsIC5zd2l0Y2gtdGV4dC1sZWZ0IHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmZvcm0tc3dpdGNoIC5mb3JtLWNoZWNrLWlucHV0Om5vdCg6Y2hlY2tlZCkgfiAuZm9ybS1jaGVjay1sYWJlbCAuc3dpdGNoLXRleHQtcmlnaHQge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uZm9ybS1zd2l0Y2ggLmZvcm0tY2hlY2staW5wdXQ6Y2hlY2tlZCB+IC5mb3JtLWNoZWNrLWxhYmVsIC5zd2l0Y2gtdGV4dC1yaWdodCB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5mb3JtLXN3aXRjaCAuZm9ybS1jaGVjay1pbnB1dDpjaGVja2VkIH4gLmZvcm0tY2hlY2stbGFiZWwgLnN3aXRjaC10ZXh0LWxlZnQge1xuICBvcGFjaXR5OiAxO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 66310:
/*!***********************************!*\
  !*** ./src/app/enums/send-via.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendVia": () => (/* binding */ SendVia)
/* harmony export */ });
var SendVia;
(function (SendVia) {
  SendVia[SendVia["sms"] = 0] = "sms";
  SendVia[SendVia["email"] = 1] = "email";
})(SendVia || (SendVia = {}));

/***/ })

}]);
//# sourceMappingURL=default-src_app_dashboard_pages_admin_admin-settings_booking-settings_booking-settings_compon-f4f58c.js.map