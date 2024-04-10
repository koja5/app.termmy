"use strict";
(self["webpackChunktermmy"] = self["webpackChunktermmy"] || []).push([["src_app_wizard_wizard_module_ts"],{

/***/ 84394:
/*!********************************************!*\
  !*** ./src/app/wizard/wizard.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WizardComponent": () => (/* binding */ WizardComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/config.service */ 52553);
/* harmony import */ var app_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/services/call-api.service */ 79992);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _common_dynamic_component_dynamic_forms_dynamic_forms_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/dynamic-component/dynamic-forms/dynamic-forms.component */ 83793);








function WizardComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Welcome to Termmy!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Please fill required data to complete your account information!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "app-dynamic-forms", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("submit", function WizardComponent_div_6_Template_app_dynamic_forms_submit_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.submit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("path", ctx_r0.path)("file", ctx_r0.file);
  }
}
function WizardComponent_div_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15)(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "W");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "e");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "l");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "c");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "o");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "m");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "e");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "t");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "o");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function WizardComponent_div_7_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15)(1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "T");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "e");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "r");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "m");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "m");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "y");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function WizardComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12)(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, WizardComponent_div_7_div_2_Template, 21, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, WizardComponent_div_7_div_3_Template, 13, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.welcomeText === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.welcomeText === 1);
  }
}
const _c0 = function () {
  return ["/"];
};
class WizardComponent {
  constructor(_coreConfigService, _service, _router) {
    this._coreConfigService = _coreConfigService;
    this._service = _service;
    this._router = _router;
    this.path = "pages/account-settings";
    this.file = "wizard-user-data.json";
    this.welcomeText = -1;
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this._coreConfigService.config = {
      layout: {
        navbar: {
          hidden: true
        },
        footer: {
          hidden: true
        },
        menu: {
          hidden: true
        },
        customizer: false,
        enableLocalStorage: false
      }
    };
  }
  ngOnInit() {
    this._coreConfigService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._unsubscribeAll)).subscribe(config => {
      this.coreConfig = config;
    });
  }
  submit(event) {
    console.log(event);
    if (event.type != "submit") {
      this._service.callPostMethod("api/saveProfileInfo", event).subscribe(data => {
        if (data) {
          this.welcomeText = 0;
          setTimeout(() => {
            this.welcomeText++;
          }, 3000);
          setTimeout(() => {
            this._router.navigate(["dashboard/admin"]);
          }, 6000);
        }
      });
    }
  }
  static #_ = this.ɵfac = function WizardComponent_Factory(t) {
    return new (t || WizardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.CoreConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](app_services_call_api_service__WEBPACK_IMPORTED_MODULE_1__.CallApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: WizardComponent,
    selectors: [["app-wizard"]],
    decls: 8,
    vars: 6,
    consts: [[1, "logo-container", "text-center"], [1, "navbar-brand", 3, "routerLink"], [1, "brand-logo"], ["alt", "brand-logo", 3, "src"], [1, "brand-text", "mb-0"], ["class", "wizard-container", 4, "ngIf"], ["class", "page-loader", 4, "ngIf"], [1, "wizard-container"], [1, "card", "p-2"], [1, "text-center", "mb-2"], [1, "font-weight-bolder"], [3, "path", "file", "submit"], [1, "page-loader"], [1, "page-loading-wrapper"], ["class", "loading loading07", 4, "ngIf"], [1, "loading", "loading07"], ["data-text", "W"], ["data-text", "e"], ["data-text", "l"], ["data-text", "c"], ["data-text", "o"], ["data-text", "m"], ["data-text", ""], ["data-text", "t"], ["data-text", "T"], ["data-text", "r"], ["data-text", "y"]],
    template: function WizardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "a", 1)(2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, WizardComponent_div_6_Template, 8, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, WizardComponent_div_7_Template, 4, 2, "div", 6);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx.coreConfig.app.appLogoImage, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.coreConfig.app.appName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.welcomeText === -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.welcomeText != -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _common_dynamic_component_dynamic_forms_dynamic_forms_component__WEBPACK_IMPORTED_MODULE_2__.DynamicFormsComponent],
    styles: ["@media (min-width: 993px) {\n  .wizard-container[_ngcontent-%COMP%] {\n    width: 992px;\n    height: 90vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: auto;\n  }\n}\n@media (max-width: 992px) {\n  .wizard-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .logo-container[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .card[_ngcontent-%COMP%] {\n    height: 100vh;\n  }\n  .loading[_ngcontent-%COMP%] {\n    font-size: 52px !important;\n  }\n}\n.navbar-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: 1.35rem;\n  font-size: inherit;\n  justify-content: center;\n}\n\n.brand-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n}\n\n.brand-text[_ngcontent-%COMP%] {\n  color: #7367f0;\n  padding-left: 1rem;\n  margin-bottom: 0;\n  font-weight: 600;\n  letter-spacing: 0.01rem;\n  font-size: 1.45rem;\n  animation: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) 0s normal forwards 1 fadein;\n}\n\n.page-loader[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 99999999;\n}\n\n.page-loader[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n}\n\n.page-loading-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 100vh;\n}\n\n.page-loading-wrapper[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 0;\n  height: 0;\n}\n\n.goo1[_ngcontent-%COMP%] {\n  -webkit-filter: url(#goo);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.loading[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  background: #1abf68;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n}\n\n.goo1[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform-origin: -50% -50%;\n  animation: _ngcontent-%COMP%_circle 2.5s infinite cubic-bezier(0.57, 0, 0.52, 1);\n}\n\n.goo1[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: 0.25s;\n}\n\n.goo1[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.5s;\n}\n\n.goo1[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.75s;\n}\n\n.goo1[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 1s;\n}\n\n.goo1[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: 1.25s;\n}\n\n.goo2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  transform: translateX(0);\n  animation: _ngcontent-%COMP%_sideways 2.5s infinite ease;\n}\n\n.goo2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: 0.25s;\n}\n\n.goo2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.5s;\n}\n\n.goo2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.75s;\n}\n\n.goo2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 1s;\n}\n\n.goo2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: 1.25s;\n}\n\n.goo2[_ngcontent-%COMP%] {\n  padding-left: 40px;\n  width: 200px;\n  height: 100px;\n}\n\n@keyframes _ngcontent-%COMP%_circle {\n  50% {\n    width: 25px;\n    height: 25px;\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_sideways {\n  33% {\n    transform: translateX(50px);\n  }\n  66% {\n    transform: translateX(-50px);\n  }\n}\n.loading[_ngcontent-%COMP%] {\n  font-size: 84px;\n  font-weight: 800;\n  text-align: center;\n  width: 100%;\n  line-height: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: static !important;\n}\n\n.loading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  color: rgba(0, 0, 0, 0.2);\n  display: inline-block;\n}\n\n.loading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  content: attr(data-text);\n  color: var(--primary);\n  opacity: 0;\n  transform: scale(1.5);\n  animation: _ngcontent-%COMP%_loading 3s infinite;\n}\n\n.loading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2)::after {\n  animation-delay: 0.1s;\n}\n\n.loading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3)::after {\n  animation-delay: 0.2s;\n}\n\n.loading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4)::after {\n  animation-delay: 0.3s;\n}\n\n.loading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(5)::after {\n  animation-delay: 0.4s;\n}\n\n.loading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(6)::after {\n  animation-delay: 0.5s;\n}\n\n.loading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(7)::after {\n  animation-delay: 0.6s;\n}\n@keyframes _ngcontent-%COMP%_loading {\n  0%, 75%, 100% {\n    transform: scale(1.5);\n    opacity: 0;\n  }\n  25%, 50% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvd2l6YXJkL3dpemFyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7RUFDRjtBQUNGO0FBRUE7RUFDRTtJQUNFLFdBQUE7RUFBRjtFQUdBO0lBQ0Usd0JBQUE7RUFERjtFQUlBO0lBQ0UsYUFBQTtFQUZGO0VBS0E7SUFDRSwwQkFBQTtFQUhGO0FBQ0Y7QUFNQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQUpGOztBQU9BO0VBQ0UsV0FBQTtBQUpGOztBQU9BO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0RUFBQTtBQUpGOztBQU9BO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtBQUpGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUdBLGdDQUFBO0VBQ0EsV0FBQTtBQUhGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUhGOztBQUtBO0VBQ0UsUUFBQTtFQUNBLFNBQUE7QUFGRjs7QUFLQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUdBLGdDQUFBO0FBRkY7O0FBS0E7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFGRjs7QUFLQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUdBLDJCQUFBO0VBRUEsOERBQUE7QUFGRjs7QUFLQTtFQUVFLHNCQUFBO0FBRkY7O0FBS0E7RUFFRSxxQkFBQTtBQUZGOztBQUtBO0VBRUUsc0JBQUE7QUFGRjs7QUFLQTtFQUVFLG1CQUFBO0FBRkY7O0FBS0E7RUFFRSxzQkFBQTtBQUZGOztBQUtBO0VBR0Usd0JBQUE7RUFFQSxzQ0FBQTtBQUZGOztBQUtBO0VBRUUsc0JBQUE7QUFGRjs7QUFLQTtFQUVFLHFCQUFBO0FBRkY7O0FBS0E7RUFFRSxzQkFBQTtBQUZGOztBQUtBO0VBRUUsbUJBQUE7QUFGRjs7QUFLQTtFQUVFLHNCQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBRkY7O0FBS0E7RUFDRTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VBRkY7RUFJQTtJQUVFLHlCQUFBO0VBRkY7QUFDRjtBQWNBO0VBQ0U7SUFFRSwyQkFBQTtFQUZGO0VBSUE7SUFFRSw0QkFBQTtFQUZGO0FBQ0Y7QUFLQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0FBSEY7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUFGRjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUdBLHFCQUFBO0VBRUEsOEJBQUE7QUFERjs7QUFHQTtFQUVFLHFCQUFBO0FBQUY7O0FBRUE7RUFFRSxxQkFBQTtBQUNGOztBQUNBO0VBRUUscUJBQUE7QUFFRjs7QUFBQTtFQUVFLHFCQUFBO0FBR0Y7O0FBREE7RUFFRSxxQkFBQTtBQUlGOztBQUZBO0VBRUUscUJBQUE7QUFLRjtBQWNBO0VBQ0U7SUFJRSxxQkFBQTtJQUNBLFVBQUE7RUFERjtFQUdBO0lBR0UsbUJBQUE7SUFDQSxVQUFBO0VBRkY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWluLXdpZHRoOiA5OTNweCkge1xyXG4gIC53aXphcmQtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA5OTJweDtcclxuICAgIGhlaWdodDogOTB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAud2l6YXJkLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5sb2dvLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuY2FyZCB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gIH1cclxuXHJcbiAgLmxvYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiA1MnB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4ubmF2YmFyLWJyYW5kIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMS4zNXJlbTtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5icmFuZC1sb2dvIGltZyB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbn1cclxuXHJcbi5icmFuZC10ZXh0IHtcclxuICBjb2xvcjogIzczNjdmMDtcclxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogMS40NXJlbTtcclxuICBhbmltYXRpb246IDAuM3MgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSkgMHMgbm9ybWFsIGZvcndhcmRzIDEgZmFkZWluO1xyXG59XHJcblxyXG4ucGFnZS1sb2FkZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogOTk5OTk5OTk7XHJcbn1cclxuLnBhZ2UtbG9hZGVyIC5sb2FkZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5wYWdlLWxvYWRpbmctd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuLnBhZ2UtbG9hZGluZy13cmFwcGVyIHN2ZyB7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG59XHJcblxyXG4uZ29vMSB7XHJcbiAgLXdlYmtpdC1maWx0ZXI6IHVybCgjZ29vKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4ubG9hZGluZyBkaXYge1xyXG4gIGJhY2tncm91bmQ6ICMxYWJmNjg7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmdvbzEgPiBkaXYge1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gIGhlaWdodDogMTVweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogLTUwJSAtNTAlO1xyXG4gIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAtNTAlIC01MCU7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogLTUwJSAtNTAlO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBjaXJjbGUgMi41cyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC41NywgMCwgMC41MiwgMSk7XHJcbiAgYW5pbWF0aW9uOiBjaXJjbGUgMi41cyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC41NywgMCwgMC41MiwgMSk7XHJcbn1cclxuXHJcbi5nb28xID4gZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMjVzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMC4yNXM7XHJcbn1cclxuXHJcbi5nb28xID4gZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNXM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjVzO1xyXG59XHJcblxyXG4uZ29vMSA+IGRpdjpudGgtY2hpbGQoMykge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjc1cztcclxuICBhbmltYXRpb24tZGVsYXk6IDAuNzVzO1xyXG59XHJcblxyXG4uZ29vMSA+IGRpdjpudGgtY2hpbGQoNCkge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxcztcclxuICBhbmltYXRpb24tZGVsYXk6IDFzO1xyXG59XHJcblxyXG4uZ29vMSA+IGRpdjpudGgtY2hpbGQoNSkge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxLjI1cztcclxuICBhbmltYXRpb24tZGVsYXk6IDEuMjVzO1xyXG59XHJcblxyXG4uZ29vMiA+IGRpdiB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHNpZGV3YXlzIDIuNXMgaW5maW5pdGUgZWFzZTtcclxuICBhbmltYXRpb246IHNpZGV3YXlzIDIuNXMgaW5maW5pdGUgZWFzZTtcclxufVxyXG5cclxuLmdvbzIgPiBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4yNXM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjI1cztcclxufVxyXG5cclxuLmdvbzIgPiBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC41cztcclxuICBhbmltYXRpb24tZGVsYXk6IDAuNXM7XHJcbn1cclxuXHJcbi5nb28yID4gZGl2Om50aC1jaGlsZCgzKSB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNzVzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMC43NXM7XHJcbn1cclxuXHJcbi5nb28yID4gZGl2Om50aC1jaGlsZCg0KSB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDFzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMXM7XHJcbn1cclxuXHJcbi5nb28yID4gZGl2Om50aC1jaGlsZCg1KSB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDEuMjVzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMS4yNXM7XHJcbn1cclxuXHJcbi5nb28yIHtcclxuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgY2lyY2xlIHtcclxuICA1MCUge1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNpZGV3YXlzIHtcclxuICAzMyUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTBweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTBweCk7XHJcbiAgfVxyXG4gIDY2JSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTBweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwcHgpO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIHNpZGV3YXlzIHtcclxuICAzMyUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTBweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTBweCk7XHJcbiAgfVxyXG4gIDY2JSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTBweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwcHgpO1xyXG4gIH1cclxufVxyXG5cclxuLmxvYWRpbmcge1xyXG4gIGZvbnQtc2l6ZTogODRweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHN0YXRpYyAhaW1wb3J0YW50O1xyXG59XHJcbi5sb2FkaW5nIHNwYW4ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4ubG9hZGluZyBzcGFuOjphZnRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS10ZXh0KTtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgb3BhY2l0eTogMDtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS41KTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZGluZyAzcyBpbmZpbml0ZTtcclxuICBhbmltYXRpb246IGxvYWRpbmcgM3MgaW5maW5pdGU7XHJcbn1cclxuLmxvYWRpbmcgc3BhbjpudGgtY2hpbGQoMik6OmFmdGVyIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4xcztcclxuICBhbmltYXRpb24tZGVsYXk6IDAuMXM7XHJcbn1cclxuLmxvYWRpbmcgc3BhbjpudGgtY2hpbGQoMyk6OmFmdGVyIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4ycztcclxuICBhbmltYXRpb24tZGVsYXk6IDAuMnM7XHJcbn1cclxuLmxvYWRpbmcgc3BhbjpudGgtY2hpbGQoNCk6OmFmdGVyIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4zcztcclxuICBhbmltYXRpb24tZGVsYXk6IDAuM3M7XHJcbn1cclxuLmxvYWRpbmcgc3BhbjpudGgtY2hpbGQoNSk6OmFmdGVyIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC40cztcclxuICBhbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbn1cclxuLmxvYWRpbmcgc3BhbjpudGgtY2hpbGQoNik6OmFmdGVyIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC41cztcclxuICBhbmltYXRpb24tZGVsYXk6IDAuNXM7XHJcbn1cclxuLmxvYWRpbmcgc3BhbjpudGgtY2hpbGQoNyk6OmFmdGVyIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC42cztcclxuICBhbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBsb2FkaW5nIHtcclxuICAwJSxcclxuICA3NSUsXHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS41KTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIDI1JSxcclxuICA1MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGxvYWRpbmcge1xyXG4gIDAlLFxyXG4gIDc1JSxcclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgMjUlLFxyXG4gIDUwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 66319:
/*!*****************************************!*\
  !*** ./src/app/wizard/wizard.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WizardModule": () => (/* binding */ WizardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/common.module */ 75078);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _wizard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wizard.component */ 84394);
/* harmony import */ var app_common_dynamic_component_dynamic_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/common/dynamic-component/dynamic.module */ 99641);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);








// routing
const routes = [{
  path: "",
  component: _wizard_component__WEBPACK_IMPORTED_MODULE_1__.WizardComponent,
  data: {
    animation: "misc"
  }
}];
class WizardModule {
  static #_ = this.ɵfac = function WizardModule_Factory(t) {
    return new (t || WizardModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: WizardModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _core_common_module__WEBPACK_IMPORTED_MODULE_0__.CoreCommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, app_common_dynamic_component_dynamic_module__WEBPACK_IMPORTED_MODULE_2__.DynamicModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](WizardModule, {
    declarations: [_wizard_component__WEBPACK_IMPORTED_MODULE_1__.WizardComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _core_common_module__WEBPACK_IMPORTED_MODULE_0__.CoreCommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, app_common_dynamic_component_dynamic_module__WEBPACK_IMPORTED_MODULE_2__.DynamicModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_wizard_wizard_module_ts.js.map