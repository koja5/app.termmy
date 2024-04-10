"use strict";
(self["webpackChunktermmy"] = self["webpackChunktermmy"] || []).push([["src_app_dashboard_pages_admin_admin-settings_admin-settings_module_ts"],{

/***/ 46676:
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/pages/admin/admin-settings/admin-settings.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminSettingsModule": () => (/* binding */ AdminSettingsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var app_common_dynamic_component_dynamic_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/common/dynamic-component/dynamic.module */ 99641);
/* harmony import */ var _online_payment_online_payment_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./online-payment/online-payment.component */ 82974);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _booking_settings_booking_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./booking-settings/booking-settings.component */ 47007);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var app_common_common_custom_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/common/common-custom.module */ 21709);
/* harmony import */ var _reminders_reminders_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reminders/reminders.component */ 23225);
/* harmony import */ var _reminders_email_reminder_email_reminder_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reminders/email-reminder/email-reminder.component */ 14332);
/* harmony import */ var _reminders_sms_reminder_sms_reminder_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reminders/sms-reminder/sms-reminder.component */ 1497);
/* harmony import */ var _reminders_sms_reminder_sms_reminder_card_sms_reminder_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reminders/sms-reminder/sms-reminder-card/sms-reminder-card.component */ 99563);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _reminders_email_reminder_email_reminder_card_email_reminder_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reminders/email-reminder/email-reminder-card/email-reminder-card.component */ 88221);
/* harmony import */ var _license_license_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./license/license.component */ 51892);
/* harmony import */ var _common_admin_common_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/admin-common.module */ 60930);
/* harmony import */ var _holidays_holidays_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./holidays/holidays.component */ 86505);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-select/ng-select */ 90413);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);




















const routes = [{
  path: "online-payment",
  component: _online_payment_online_payment_component__WEBPACK_IMPORTED_MODULE_1__.OnlinePaymentComponent
}, {
  path: "booking-settings",
  component: _booking_settings_booking_settings_component__WEBPACK_IMPORTED_MODULE_2__.BookingSettingsComponent
}, {
  path: "reminders",
  component: _reminders_reminders_component__WEBPACK_IMPORTED_MODULE_4__.RemindersComponent
}, {
  path: "license",
  component: _license_license_component__WEBPACK_IMPORTED_MODULE_9__.LicenseComponent
}, {
  path: "holidays",
  component: _holidays_holidays_component__WEBPACK_IMPORTED_MODULE_11__.HolidaysComponent
}];
class AdminSettingsModule {
  static #_ = this.ɵfac = function AdminSettingsModule_Factory(t) {
    return new (t || AdminSettingsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
    type: AdminSettingsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, app_common_dynamic_component_dynamic_module__WEBPACK_IMPORTED_MODULE_0__.DynamicModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbModule, app_common_common_custom_module__WEBPACK_IMPORTED_MODULE_3__.CommonCustomModule, _common_admin_common_module__WEBPACK_IMPORTED_MODULE_10__.AdminCommonModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__.NgSelectModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule, app_common_dynamic_component_dynamic_module__WEBPACK_IMPORTED_MODULE_0__.DynamicModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AdminSettingsModule, {
    declarations: [_online_payment_online_payment_component__WEBPACK_IMPORTED_MODULE_1__.OnlinePaymentComponent, _booking_settings_booking_settings_component__WEBPACK_IMPORTED_MODULE_2__.BookingSettingsComponent, _reminders_sms_reminder_sms_reminder_component__WEBPACK_IMPORTED_MODULE_6__.SmsReminderComponent, _reminders_sms_reminder_sms_reminder_card_sms_reminder_card_component__WEBPACK_IMPORTED_MODULE_7__.SmsReminderCardComponent, _reminders_reminders_component__WEBPACK_IMPORTED_MODULE_4__.RemindersComponent, _reminders_email_reminder_email_reminder_component__WEBPACK_IMPORTED_MODULE_5__.EmailReminderComponent, _reminders_email_reminder_email_reminder_card_email_reminder_card_component__WEBPACK_IMPORTED_MODULE_8__.EmailReminderCardComponent, _license_license_component__WEBPACK_IMPORTED_MODULE_9__.LicenseComponent, _holidays_holidays_component__WEBPACK_IMPORTED_MODULE_11__.HolidaysComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, app_common_dynamic_component_dynamic_module__WEBPACK_IMPORTED_MODULE_0__.DynamicModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbModule, app_common_common_custom_module__WEBPACK_IMPORTED_MODULE_3__.CommonCustomModule, _common_admin_common_module__WEBPACK_IMPORTED_MODULE_10__.AdminCommonModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__.NgSelectModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule, app_common_dynamic_component_dynamic_module__WEBPACK_IMPORTED_MODULE_0__.DynamicModule, _online_payment_online_payment_component__WEBPACK_IMPORTED_MODULE_1__.OnlinePaymentComponent, _booking_settings_booking_settings_component__WEBPACK_IMPORTED_MODULE_2__.BookingSettingsComponent, _reminders_sms_reminder_sms_reminder_component__WEBPACK_IMPORTED_MODULE_6__.SmsReminderComponent, _reminders_sms_reminder_sms_reminder_card_sms_reminder_card_component__WEBPACK_IMPORTED_MODULE_7__.SmsReminderCardComponent, _reminders_reminders_component__WEBPACK_IMPORTED_MODULE_4__.RemindersComponent, _reminders_email_reminder_email_reminder_component__WEBPACK_IMPORTED_MODULE_5__.EmailReminderComponent, _reminders_email_reminder_email_reminder_card_email_reminder_card_component__WEBPACK_IMPORTED_MODULE_8__.EmailReminderCardComponent, _license_license_component__WEBPACK_IMPORTED_MODULE_9__.LicenseComponent, _holidays_holidays_component__WEBPACK_IMPORTED_MODULE_11__.HolidaysComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_pages_admin_admin-settings_admin-settings_module_ts.js.map