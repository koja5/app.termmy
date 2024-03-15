"use strict";
(self["webpackChunktermmy"] = self["webpackChunktermmy"] || []).push([["src_app_dashboard_common-pages_account-settings_account-settings_module_ts"],{

/***/ 35026:
/*!************************************************************************************!*\
  !*** ./src/app/dashboard/common-pages/account-settings/account-settings.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountSettingsModule": () => (/* binding */ AccountSettingsModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var app_common_forms_form_elements_date_time_picker_date_picker_i18n_date_picker_i18n_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/common/forms/form-elements/date-time-picker/date-picker-i18n/date-picker-i18n.module */ 78516);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var app_common_forms_form_elements_date_time_picker_time_picker_i18n_time_picker_i18n_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/common/forms/form-elements/date-time-picker/time-picker-i18n/time-picker-i18n.module */ 72564);
/* harmony import */ var app_common_toastr_toastr_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/common/toastr/toastr.component */ 84329);
/* harmony import */ var _general_general_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./general/general.component */ 87159);
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./change-password/change-password.component */ 73927);
/* harmony import */ var _information_information_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./information/information.component */ 29912);
/* harmony import */ var _account_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account-settings.component */ 80651);
/* harmony import */ var app_common_dynamic_component_dynamic_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/common/dynamic-component/dynamic.module */ 99641);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);












const routes = [{
  path: "general",
  component: _general_general_component__WEBPACK_IMPORTED_MODULE_3__.GeneralComponent
}, {
  path: "change-password",
  component: _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_4__.ChangePasswordComponent
}, {
  path: "information",
  component: _information_information_component__WEBPACK_IMPORTED_MODULE_5__.InformationComponent
}];
class AccountSettingsModule {
  static #_ = this.ɵfac = function AccountSettingsModule_Factory(t) {
    return new (t || AccountSettingsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: AccountSettingsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    providers: [app_common_toastr_toastr_component__WEBPACK_IMPORTED_MODULE_2__.ToastrComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, app_common_forms_form_elements_date_time_picker_date_picker_i18n_date_picker_i18n_module__WEBPACK_IMPORTED_MODULE_0__.DatePickerI18nModule, app_common_forms_form_elements_date_time_picker_time_picker_i18n_time_picker_i18n_module__WEBPACK_IMPORTED_MODULE_1__.TimePickerI18nModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes), app_common_dynamic_component_dynamic_module__WEBPACK_IMPORTED_MODULE_7__.DynamicModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, app_common_forms_form_elements_date_time_picker_date_picker_i18n_date_picker_i18n_module__WEBPACK_IMPORTED_MODULE_0__.DatePickerI18nModule, app_common_forms_form_elements_date_time_picker_time_picker_i18n_time_picker_i18n_module__WEBPACK_IMPORTED_MODULE_1__.TimePickerI18nModule, app_common_dynamic_component_dynamic_module__WEBPACK_IMPORTED_MODULE_7__.DynamicModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AccountSettingsModule, {
    declarations: [_general_general_component__WEBPACK_IMPORTED_MODULE_3__.GeneralComponent, _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_4__.ChangePasswordComponent, _information_information_component__WEBPACK_IMPORTED_MODULE_5__.InformationComponent, _account_settings_component__WEBPACK_IMPORTED_MODULE_6__.AccountSettingsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, app_common_forms_form_elements_date_time_picker_date_picker_i18n_date_picker_i18n_module__WEBPACK_IMPORTED_MODULE_0__.DatePickerI18nModule, app_common_forms_form_elements_date_time_picker_time_picker_i18n_time_picker_i18n_module__WEBPACK_IMPORTED_MODULE_1__.TimePickerI18nModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, app_common_dynamic_component_dynamic_module__WEBPACK_IMPORTED_MODULE_7__.DynamicModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, app_common_forms_form_elements_date_time_picker_date_picker_i18n_date_picker_i18n_module__WEBPACK_IMPORTED_MODULE_0__.DatePickerI18nModule, app_common_forms_form_elements_date_time_picker_time_picker_i18n_time_picker_i18n_module__WEBPACK_IMPORTED_MODULE_1__.TimePickerI18nModule, app_common_dynamic_component_dynamic_module__WEBPACK_IMPORTED_MODULE_7__.DynamicModule]
  });
})();

/***/ }),

/***/ 73927:
/*!******************************************************************************************************!*\
  !*** ./src/app/dashboard/common-pages/account-settings/change-password/change-password.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordComponent": () => (/* binding */ ChangePasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_services_call_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/services/call-api.service */ 79992);
/* harmony import */ var app_common_toastr_toastr_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/common/toastr/toastr.component */ 84329);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _common_dynamic_component_dynamic_forms_dynamic_forms_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/dynamic-component/dynamic-forms/dynamic-forms.component */ 83793);





class ChangePasswordComponent {
  constructor(_service, _toastr, _translate) {
    this._service = _service;
    this._toastr = _toastr;
    this._translate = _translate;
    this.path = "pages/account-settings";
    this.file = "change-password.json";
  }
  resetPassword(event) {
    console.log(event);
    if (event.oldPassword === event.newPassword) {
      this._toastr.showWarningCustom(this._translate.instant("resetPassword.oldAndNewPasswordCannotBeSame"));
    } else if (event.newPassword !== event.repeatNewPassword) {
      this._toastr.showWarningCustom(this._translate.instant("resetPassword.passwordsNeedToBeSame"));
    } else {
      this._service.callPostMethod("/api/changePassword", event).subscribe(data => {
        if (data) {
          this._toastr.showSuccessCustom(this._translate.instant("resetPassword.successfulyChangedPassword"));
        } else {
          this._toastr.showWarningCustom(this._translate.instant("resetPassword.oldPasswordIsWrong"));
        }
      });
    }
  }
  static #_ = this.ɵfac = function ChangePasswordComponent_Factory(t) {
    return new (t || ChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](app_services_call_api_service__WEBPACK_IMPORTED_MODULE_0__.CallApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](app_common_toastr_toastr_component__WEBPACK_IMPORTED_MODULE_1__.ToastrComponent), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ChangePasswordComponent,
    selectors: [["app-change-password"]],
    decls: 1,
    vars: 2,
    consts: [[3, "path", "file", "submit"]],
    template: function ChangePasswordComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-dynamic-forms", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("submit", function ChangePasswordComponent_Template_app_dynamic_forms_submit_0_listener($event) {
          return ctx.resetPassword($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("path", ctx.path)("file", ctx.file);
      }
    },
    dependencies: [_common_dynamic_component_dynamic_forms_dynamic_forms_component__WEBPACK_IMPORTED_MODULE_2__.DynamicFormsComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 87159:
/*!**************************************************************************************!*\
  !*** ./src/app/dashboard/common-pages/account-settings/general/general.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneralComponent": () => (/* binding */ GeneralComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _common_dynamic_component_dynamic_forms_dynamic_forms_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/dynamic-component/dynamic-forms/dynamic-forms.component */ 83793);


class GeneralComponent {
  constructor() {
    this.path = "pages/account-settings";
    this.file = "general.json";
    this.avatarImage = "../../../../../assets/images/portrait/small/avatar-s-11.jpg";
  }
  static #_ = this.ɵfac = function GeneralComponent_Factory(t) {
    return new (t || GeneralComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: GeneralComponent,
    selectors: [["app-general"]],
    decls: 1,
    vars: 2,
    consts: [[3, "path", "file"]],
    template: function GeneralComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-dynamic-forms", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("path", ctx.path)("file", ctx.file);
      }
    },
    dependencies: [_common_dynamic_component_dynamic_forms_dynamic_forms_component__WEBPACK_IMPORTED_MODULE_0__.DynamicFormsComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 29912:
/*!**********************************************************************************************!*\
  !*** ./src/app/dashboard/common-pages/account-settings/information/information.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InformationComponent": () => (/* binding */ InformationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _common_dynamic_component_dynamic_forms_dynamic_forms_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/dynamic-component/dynamic-forms/dynamic-forms.component */ 83793);


class InformationComponent {
  constructor() {
    this.path = "pages/account-settings";
    this.file = "information.json";
  }
  static #_ = this.ɵfac = function InformationComponent_Factory(t) {
    return new (t || InformationComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: InformationComponent,
    selectors: [["app-information"]],
    decls: 1,
    vars: 2,
    consts: [[3, "path", "file"]],
    template: function InformationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-dynamic-forms", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("path", ctx.path)("file", ctx.file);
      }
    },
    dependencies: [_common_dynamic_component_dynamic_forms_dynamic_forms_component__WEBPACK_IMPORTED_MODULE_0__.DynamicFormsComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_common-pages_account-settings_account-settings_module_ts.f2da6ceaf7c74184.js.map