"use strict";
(self["webpackChunktermmy"] = self["webpackChunktermmy"] || []).push([["default-src_app_dashboard_pages_miscellaneous_miscellaneous_module_ts"],{

/***/ 83756:
/*!************************************************************************!*\
  !*** ./src/app/dashboard/pages/miscellaneous/error/error.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorComponent": () => (/* binding */ ErrorComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/config.service */ 52553);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/directives/core-ripple-effect/core-ripple-effect.directive */ 75287);






class ErrorComponent {
  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   */
  constructor(_coreConfigService) {
    this._coreConfigService = _coreConfigService;
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    // Configure the layout
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
  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    // Subscribe to config changes
    this._coreConfigService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this._unsubscribeAll)).subscribe(config => {
      this.coreConfig = config;
    });
  }
  /**
   * On destroy
   */
  ngOnDestroy() {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
  static #_ = this.ɵfac = function ErrorComponent_Factory(t) {
    return new (t || ErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.CoreConfigService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ErrorComponent,
    selectors: [["app-error"]],
    decls: 14,
    vars: 3,
    consts: [[1, "misc-wrapper"], ["href", "javascript:void(0);", 1, "brand-logo"], ["alt", "brand-logo", "height", "28", 3, "src"], [1, "brand-text", "text-primary", "ml-1"], [1, "misc-inner", "p-2", "p-sm-3"], [1, "w-100", "text-center"], [1, "mb-1"], [1, "mb-2"], ["routerLink", "/", "rippleEffect", "", 1, "btn", "btn-primary", "mb-2", "btn-sm-block"], ["alt", "Error page", 1, "img-fluid", 3, "src"]],
    template: function ErrorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Page Not Found \uD83D\uDD75\uD83C\uDFFB\u200D\u2640\uFE0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Oops! \uD83D\uDE16 The requested URL was not found on this server.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Back to Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx.coreConfig.app.appLogoImage, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.coreConfig.app.appName);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx.coreConfig.layout.skin === "dark" ? "assets/images/pages/error-dark.svg" : "assets/images/pages/error.svg", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_1__.RippleEffectDirective],
    styles: [".misc-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-basis: 100%;\n  min-height: 100vh;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n}\n.misc-wrapper[_ngcontent-%COMP%]   .misc-inner[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 750px;\n}\n.misc-wrapper[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  top: 2rem;\n  left: 2rem;\n  margin: 0;\n}\n.misc-wrapper[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n@media (max-height: 625px) {\n  .misc-wrapper[_ngcontent-%COMP%]   .misc-inner[_ngcontent-%COMP%] {\n    margin-top: 4rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AY29yZS9zY3NzL2Jhc2UvcGFnZXMvcGFnZS1taXNjLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL2Rhc2hib2FyZC9wYWdlcy9taXNjZWxsYW5lb3VzL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ1ZGO0FEWUU7RUFDRSxrQkFBQTtFQUNBLGdCQVptQjtBQ0V2QjtBRGFFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNYSjtBRFlJO0VBQ0UsZ0JBQUE7QUNWTjs7QURlQTtFQUNFO0lBQ0UsZ0JBQUE7RUNaRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vICAgICBGaWxlIE5hbWU6IHBhZ2UtbWlzYy5zY3NzXHJcbi8vICAgICBEZXNjcmlwdGlvbjogQ29taW5nIFNvb24gcGFnZXMgY3VzdG9tIHNjc3NcclxuLy8gICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gICAgIEl0ZW0gTmFtZTogVGVybW15IC0gVnVlanMsIFJlYWN0LCBBbmd1bGFyLCBIVE1MICYgTGFyYXZlbCBBZG1pbiBEYXNoYm9hcmQgVGVtcGxhdGVcclxuLy8gICAgIEF1dGhvcjogUElYSU5WRU5UXHJcbi8vICAgICBBdXRob3IgVVJMOiBodHRwOi8vd3d3LnRoZW1lZm9yZXN0Lm5ldC91c2VyL3BpeGludmVudFxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiRtaXNjLWlubmVyLW1heC13aWR0aDogNzUwcHg7XHJcblxyXG4ubWlzYy13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgLm1pc2MtaW5uZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWF4LXdpZHRoOiAkbWlzYy1pbm5lci1tYXgtd2lkdGg7XHJcbiAgfVxyXG5cclxuICAuYnJhbmQtbG9nbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDJyZW07XHJcbiAgICBsZWZ0OiAycmVtO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgLmJyYW5kLXRleHQge1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtaGVpZ2h0OiA2MjVweCkge1xyXG4gIC5taXNjLXdyYXBwZXIgLm1pc2MtaW5uZXIge1xyXG4gICAgbWFyZ2luLXRvcDogNHJlbTtcclxuICB9XHJcbn1cclxuIiwiLm1pc2Mtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtYmFzaXM6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubWlzYy13cmFwcGVyIC5taXNjLWlubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDc1MHB4O1xufVxuLm1pc2Mtd3JhcHBlciAuYnJhbmQtbG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMnJlbTtcbiAgbGVmdDogMnJlbTtcbiAgbWFyZ2luOiAwO1xufVxuLm1pc2Mtd3JhcHBlciAuYnJhbmQtbG9nbyAuYnJhbmQtdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbkBtZWRpYSAobWF4LWhlaWdodDogNjI1cHgpIHtcbiAgLm1pc2Mtd3JhcHBlciAubWlzYy1pbm5lciB7XG4gICAgbWFyZ2luLXRvcDogNHJlbTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 95490:
/*!************************************************************************************!*\
  !*** ./src/app/dashboard/pages/miscellaneous/maintenance/maintenance.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaintenanceComponent": () => (/* binding */ MaintenanceComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/config.service */ 52553);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/directives/core-ripple-effect/core-ripple-effect.directive */ 75287);






class MaintenanceComponent {
  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   */
  constructor(_coreConfigService) {
    this._coreConfigService = _coreConfigService;
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    // Configure the layout
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
  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    // Subscribe to config changes
    this._coreConfigService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this._unsubscribeAll)).subscribe(config => {
      this.coreConfig = config;
    });
  }
  /**
   * On destroy
   */
  ngOnDestroy() {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
  static #_ = this.ɵfac = function MaintenanceComponent_Factory(t) {
    return new (t || MaintenanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.CoreConfigService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: MaintenanceComponent,
    selectors: [["app-maintenance"]],
    decls: 16,
    vars: 3,
    consts: [[1, "misc-wrapper"], ["href", "javascript:void(0);", 1, "brand-logo"], ["alt", "brand-logo", "height", "28", 3, "src"], [1, "brand-text", "text-primary", "ml-1"], [1, "misc-inner", "p-2", "p-sm-3"], [1, "w-100", "text-center"], [1, "mb-1"], [1, "mb-3"], ["action", "javascript:void(0);", 1, "form-inline", "justify-content-center", "row", "m-0", "mb-2"], ["id", "notify-email", "type", "text", "placeholder", "john@example.com", 1, "form-control", "col-12", "col-md-5", "mb-1", "mr-md-2"], ["type", "submit", "rippleEffect", "", 1, "btn", "btn-primary", "mb-1", "btn-sm-block"], ["alt", "Under maintenance page", 1, "img-fluid", 3, "src"]],
    template: function MaintenanceComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Under Maintenance \uD83D\uDEE0");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Sorry for the inconvenience but we're performing some maintenance at the moment");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Notify");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx.coreConfig.app.appLogoImage, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.coreConfig.app.appName);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx.coreConfig.layout.skin === "dark" ? "assets/images/pages/under-maintenance-dark.svg" : "assets/images/pages/under-maintenance.svg", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_1__.RippleEffectDirective],
    styles: [".misc-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-basis: 100%;\n  min-height: 100vh;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n}\n.misc-wrapper[_ngcontent-%COMP%]   .misc-inner[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 750px;\n}\n.misc-wrapper[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  top: 2rem;\n  left: 2rem;\n  margin: 0;\n}\n.misc-wrapper[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n@media (max-height: 625px) {\n  .misc-wrapper[_ngcontent-%COMP%]   .misc-inner[_ngcontent-%COMP%] {\n    margin-top: 4rem;\n  }\n}\n.misc-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-basis: 100%;\n  min-height: 100vh;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n}\n.misc-wrapper[_ngcontent-%COMP%]   .misc-inner[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 750px;\n}\n.misc-wrapper[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  top: 2rem;\n  left: 2rem;\n  margin: 0;\n}\n.misc-wrapper[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n@media (max-height: 625px) {\n  .misc-wrapper[_ngcontent-%COMP%]   .misc-inner[_ngcontent-%COMP%] {\n    margin-top: 4rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AY29yZS9zY3NzL2Jhc2UvcGFnZXMvcGFnZS1taXNjLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL2Rhc2hib2FyZC9wYWdlcy9taXNjZWxsYW5lb3VzL21haW50ZW5hbmNlL21haW50ZW5hbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ1ZGO0FEWUU7RUFDRSxrQkFBQTtFQUNBLGdCQVptQjtBQ0V2QjtBRGFFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNYSjtBRFlJO0VBQ0UsZ0JBQUE7QUNWTjs7QURlQTtFQUNFO0lBQ0UsZ0JBQUE7RUNaRjtBQUNGO0FEakJBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ21CRjtBRGpCRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBWm1CO0FDK0J2QjtBRGhCRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDa0JKO0FEakJJO0VBQ0UsZ0JBQUE7QUNtQk47O0FEZEE7RUFDRTtJQUNFLGdCQUFBO0VDaUJGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gICAgIEZpbGUgTmFtZTogcGFnZS1taXNjLnNjc3NcclxuLy8gICAgIERlc2NyaXB0aW9uOiBDb21pbmcgU29vbiBwYWdlcyBjdXN0b20gc2Nzc1xyXG4vLyAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgICAgSXRlbSBOYW1lOiBUZXJtbXkgLSBWdWVqcywgUmVhY3QsIEFuZ3VsYXIsIEhUTUwgJiBMYXJhdmVsIEFkbWluIERhc2hib2FyZCBUZW1wbGF0ZVxyXG4vLyAgICAgQXV0aG9yOiBQSVhJTlZFTlRcclxuLy8gICAgIEF1dGhvciBVUkw6IGh0dHA6Ly93d3cudGhlbWVmb3Jlc3QubmV0L3VzZXIvcGl4aW52ZW50XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuJG1pc2MtaW5uZXItbWF4LXdpZHRoOiA3NTBweDtcclxuXHJcbi5taXNjLXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1iYXNpczogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAubWlzYy1pbm5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXgtd2lkdGg6ICRtaXNjLWlubmVyLW1heC13aWR0aDtcclxuICB9XHJcblxyXG4gIC5icmFuZC1sb2dvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMnJlbTtcclxuICAgIGxlZnQ6IDJyZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICAuYnJhbmQtdGV4dCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDYyNXB4KSB7XHJcbiAgLm1pc2Mtd3JhcHBlciAubWlzYy1pbm5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xyXG4gIH1cclxufVxyXG4iLCIubWlzYy13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1iYXNpczogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5taXNjLXdyYXBwZXIgLm1pc2MtaW5uZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogNzUwcHg7XG59XG4ubWlzYy13cmFwcGVyIC5icmFuZC1sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAycmVtO1xuICBsZWZ0OiAycmVtO1xuICBtYXJnaW46IDA7XG59XG4ubWlzYy13cmFwcGVyIC5icmFuZC1sb2dvIC5icmFuZC10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuQG1lZGlhIChtYXgtaGVpZ2h0OiA2MjVweCkge1xuICAubWlzYy13cmFwcGVyIC5taXNjLWlubmVyIHtcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xuICB9XG59XG4ubWlzYy13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1iYXNpczogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5taXNjLXdyYXBwZXIgLm1pc2MtaW5uZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogNzUwcHg7XG59XG4ubWlzYy13cmFwcGVyIC5icmFuZC1sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAycmVtO1xuICBsZWZ0OiAycmVtO1xuICBtYXJnaW46IDA7XG59XG4ubWlzYy13cmFwcGVyIC5icmFuZC1sb2dvIC5icmFuZC10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuQG1lZGlhIChtYXgtaGVpZ2h0OiA2MjVweCkge1xuICAubWlzYy13cmFwcGVyIC5taXNjLWlubmVyIHtcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 67011:
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/pages/miscellaneous/miscellaneous.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MiscellaneousModule": () => (/* binding */ MiscellaneousModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/common.module */ 75078);
/* harmony import */ var app_dashboard_pages_miscellaneous_error_error_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/dashboard/pages/miscellaneous/error/error.component */ 83756);
/* harmony import */ var _not_authorized_not_authorized_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-authorized/not-authorized.component */ 69095);
/* harmony import */ var _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maintenance/maintenance.component */ 95490);
/* harmony import */ var _something_happened_something_happened_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./something-happened/something-happened.component */ 4906);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);










// routing
const routes = [{
  path: "error",
  component: app_dashboard_pages_miscellaneous_error_error_component__WEBPACK_IMPORTED_MODULE_1__.ErrorComponent,
  data: {
    animation: "misc"
  }
}, {
  path: "not-authorized",
  component: _not_authorized_not_authorized_component__WEBPACK_IMPORTED_MODULE_2__.NotAuthorizedComponent,
  data: {
    animation: "misc"
  }
}, {
  path: "maintenance",
  component: _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_3__.MaintenanceComponent,
  data: {
    animation: "misc"
  }
}, {
  path: "something-happened",
  component: _something_happened_something_happened_component__WEBPACK_IMPORTED_MODULE_4__.SomethingHappenedComponent,
  data: {
    animation: "misc"
  }
}];
class MiscellaneousModule {
  static #_ = this.ɵfac = function MiscellaneousModule_Factory(t) {
    return new (t || MiscellaneousModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: MiscellaneousModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), _core_common_module__WEBPACK_IMPORTED_MODULE_0__.CoreCommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](MiscellaneousModule, {
    declarations: [app_dashboard_pages_miscellaneous_error_error_component__WEBPACK_IMPORTED_MODULE_1__.ErrorComponent, _not_authorized_not_authorized_component__WEBPACK_IMPORTED_MODULE_2__.NotAuthorizedComponent, _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_3__.MaintenanceComponent, app_dashboard_pages_miscellaneous_error_error_component__WEBPACK_IMPORTED_MODULE_1__.ErrorComponent, _something_happened_something_happened_component__WEBPACK_IMPORTED_MODULE_4__.SomethingHappenedComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _core_common_module__WEBPACK_IMPORTED_MODULE_0__.CoreCommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule]
  });
})();

/***/ }),

/***/ 69095:
/*!******************************************************************************************!*\
  !*** ./src/app/dashboard/pages/miscellaneous/not-authorized/not-authorized.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotAuthorizedComponent": () => (/* binding */ NotAuthorizedComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/config.service */ 52553);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/directives/core-ripple-effect/core-ripple-effect.directive */ 75287);






class NotAuthorizedComponent {
  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   */
  constructor(_coreConfigService) {
    this._coreConfigService = _coreConfigService;
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    // Configure the layout
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
  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    // Subscribe to config changes
    this._coreConfigService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this._unsubscribeAll)).subscribe(config => {
      this.coreConfig = config;
    });
  }
  /**
   * On destroy
   */
  ngOnDestroy() {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
  static #_ = this.ɵfac = function NotAuthorizedComponent_Factory(t) {
    return new (t || NotAuthorizedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.CoreConfigService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: NotAuthorizedComponent,
    selectors: [["app-not-authorized"]],
    decls: 14,
    vars: 3,
    consts: [[1, "misc-wrapper"], ["href", "javascript:void(0);", 1, "brand-logo"], ["alt", "brand-logo", "height", "28", 3, "src"], [1, "brand-text", "text-primary", "ml-1"], [1, "misc-inner", "p-2", "p-sm-3"], [1, "w-100", "text-center"], [1, "mb-1"], [1, "mb-2"], ["routerLink", "/pages/authentication/login-v2", "rippleEffect", "", 1, "btn", "btn-primary", "mb-1", "btn-sm-block"], ["alt", "Not authorized page", 1, "img-fluid", 3, "src"]],
    template: function NotAuthorizedComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "You are not authorized! \uD83D\uDD10");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " The Webtrends Marketing Lab website in IIS uses the default IUSR account credentials to access the web pages it serves. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Back to home");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx.coreConfig.app.appLogoImage, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.coreConfig.app.appName);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx.coreConfig.layout.skin === "dark" ? "assets/images/pages/not-authorized-dark.svg" : "assets/images/pages/not-authorized.svg", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_1__.RippleEffectDirective],
    styles: [".misc-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-basis: 100%;\n  min-height: 100vh;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n}\n.misc-wrapper[_ngcontent-%COMP%]   .misc-inner[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 750px;\n}\n.misc-wrapper[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  top: 2rem;\n  left: 2rem;\n  margin: 0;\n}\n.misc-wrapper[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n@media (max-height: 625px) {\n  .misc-wrapper[_ngcontent-%COMP%]   .misc-inner[_ngcontent-%COMP%] {\n    margin-top: 4rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AY29yZS9zY3NzL2Jhc2UvcGFnZXMvcGFnZS1taXNjLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL2Rhc2hib2FyZC9wYWdlcy9taXNjZWxsYW5lb3VzL25vdC1hdXRob3JpemVkL25vdC1hdXRob3JpemVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ1ZGO0FEWUU7RUFDRSxrQkFBQTtFQUNBLGdCQVptQjtBQ0V2QjtBRGFFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNYSjtBRFlJO0VBQ0UsZ0JBQUE7QUNWTjs7QURlQTtFQUNFO0lBQ0UsZ0JBQUE7RUNaRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vICAgICBGaWxlIE5hbWU6IHBhZ2UtbWlzYy5zY3NzXHJcbi8vICAgICBEZXNjcmlwdGlvbjogQ29taW5nIFNvb24gcGFnZXMgY3VzdG9tIHNjc3NcclxuLy8gICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gICAgIEl0ZW0gTmFtZTogVGVybW15IC0gVnVlanMsIFJlYWN0LCBBbmd1bGFyLCBIVE1MICYgTGFyYXZlbCBBZG1pbiBEYXNoYm9hcmQgVGVtcGxhdGVcclxuLy8gICAgIEF1dGhvcjogUElYSU5WRU5UXHJcbi8vICAgICBBdXRob3IgVVJMOiBodHRwOi8vd3d3LnRoZW1lZm9yZXN0Lm5ldC91c2VyL3BpeGludmVudFxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiRtaXNjLWlubmVyLW1heC13aWR0aDogNzUwcHg7XHJcblxyXG4ubWlzYy13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgLm1pc2MtaW5uZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWF4LXdpZHRoOiAkbWlzYy1pbm5lci1tYXgtd2lkdGg7XHJcbiAgfVxyXG5cclxuICAuYnJhbmQtbG9nbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDJyZW07XHJcbiAgICBsZWZ0OiAycmVtO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgLmJyYW5kLXRleHQge1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtaGVpZ2h0OiA2MjVweCkge1xyXG4gIC5taXNjLXdyYXBwZXIgLm1pc2MtaW5uZXIge1xyXG4gICAgbWFyZ2luLXRvcDogNHJlbTtcclxuICB9XHJcbn1cclxuIiwiLm1pc2Mtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtYmFzaXM6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubWlzYy13cmFwcGVyIC5taXNjLWlubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDc1MHB4O1xufVxuLm1pc2Mtd3JhcHBlciAuYnJhbmQtbG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMnJlbTtcbiAgbGVmdDogMnJlbTtcbiAgbWFyZ2luOiAwO1xufVxuLm1pc2Mtd3JhcHBlciAuYnJhbmQtbG9nbyAuYnJhbmQtdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbkBtZWRpYSAobWF4LWhlaWdodDogNjI1cHgpIHtcbiAgLm1pc2Mtd3JhcHBlciAubWlzYy1pbm5lciB7XG4gICAgbWFyZ2luLXRvcDogNHJlbTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 4906:
/*!**************************************************************************************************!*\
  !*** ./src/app/dashboard/pages/miscellaneous/something-happened/something-happened.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SomethingHappenedComponent": () => (/* binding */ SomethingHappenedComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/config.service */ 52553);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/directives/core-ripple-effect/core-ripple-effect.directive */ 75287);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 33935);







class SomethingHappenedComponent {
  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   */
  constructor(_coreConfigService) {
    this._coreConfigService = _coreConfigService;
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    // Configure the layout
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
  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    // Subscribe to config changes
    this._coreConfigService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this._unsubscribeAll)).subscribe(config => {
      this.coreConfig = config;
    });
  }
  static #_ = this.ɵfac = function SomethingHappenedComponent_Factory(t) {
    return new (t || SomethingHappenedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_0__.CoreConfigService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: SomethingHappenedComponent,
    selectors: [["app-something-happened"]],
    decls: 17,
    vars: 12,
    consts: [[1, "misc-wrapper"], ["href", "javascript:void(0);", 1, "brand-logo"], ["alt", "brand-logo", "height", "28", 3, "src"], [1, "brand-text", "text-primary", "ml-1"], [1, "misc-inner", "p-2", "p-sm-3"], [1, "w-100", "text-center"], [1, "mb-1"], [1, "mb-2"], ["routerLink", "/", "rippleEffect", "", 1, "btn", "btn-primary", "mb-2", "btn-sm-block"], ["alt", "Error page", 1, "img-fluid", 3, "src"]],
    template: function SomethingHappenedComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx.coreConfig.app.appLogoImage, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.coreConfig.app.appName);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 6, "somethingHappenedPage.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 8, "somethingHappenedPage.text"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](15, 10, "somethingHappenedPage.backToHome"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx.coreConfig.layout.skin === "dark" ? "assets/images/pages/error-dark.svg" : "assets/images/pages/error.svg", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_1__.RippleEffectDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
    styles: [".misc-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-basis: 100%;\n  min-height: 100vh;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n}\n.misc-wrapper[_ngcontent-%COMP%]   .misc-inner[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 750px;\n}\n.misc-wrapper[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  top: 2rem;\n  left: 2rem;\n  margin: 0;\n}\n.misc-wrapper[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n@media (max-height: 625px) {\n  .misc-wrapper[_ngcontent-%COMP%]   .misc-inner[_ngcontent-%COMP%] {\n    margin-top: 4rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AY29yZS9zY3NzL2Jhc2UvcGFnZXMvcGFnZS1taXNjLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL2Rhc2hib2FyZC9wYWdlcy9taXNjZWxsYW5lb3VzL3NvbWV0aGluZy1oYXBwZW5lZC9zb21ldGhpbmctaGFwcGVuZWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0E7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDVkY7QURZRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBWm1CO0FDRXZCO0FEYUU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ1hKO0FEWUk7RUFDRSxnQkFBQTtBQ1ZOOztBRGVBO0VBQ0U7SUFDRSxnQkFBQTtFQ1pGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gICAgIEZpbGUgTmFtZTogcGFnZS1taXNjLnNjc3NcclxuLy8gICAgIERlc2NyaXB0aW9uOiBDb21pbmcgU29vbiBwYWdlcyBjdXN0b20gc2Nzc1xyXG4vLyAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgICAgSXRlbSBOYW1lOiBUZXJtbXkgLSBWdWVqcywgUmVhY3QsIEFuZ3VsYXIsIEhUTUwgJiBMYXJhdmVsIEFkbWluIERhc2hib2FyZCBUZW1wbGF0ZVxyXG4vLyAgICAgQXV0aG9yOiBQSVhJTlZFTlRcclxuLy8gICAgIEF1dGhvciBVUkw6IGh0dHA6Ly93d3cudGhlbWVmb3Jlc3QubmV0L3VzZXIvcGl4aW52ZW50XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuJG1pc2MtaW5uZXItbWF4LXdpZHRoOiA3NTBweDtcclxuXHJcbi5taXNjLXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1iYXNpczogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAubWlzYy1pbm5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXgtd2lkdGg6ICRtaXNjLWlubmVyLW1heC13aWR0aDtcclxuICB9XHJcblxyXG4gIC5icmFuZC1sb2dvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMnJlbTtcclxuICAgIGxlZnQ6IDJyZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICAuYnJhbmQtdGV4dCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDYyNXB4KSB7XHJcbiAgLm1pc2Mtd3JhcHBlciAubWlzYy1pbm5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xyXG4gIH1cclxufVxyXG4iLCIubWlzYy13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1iYXNpczogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5taXNjLXdyYXBwZXIgLm1pc2MtaW5uZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogNzUwcHg7XG59XG4ubWlzYy13cmFwcGVyIC5icmFuZC1sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAycmVtO1xuICBsZWZ0OiAycmVtO1xuICBtYXJnaW46IDA7XG59XG4ubWlzYy13cmFwcGVyIC5icmFuZC1sb2dvIC5icmFuZC10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuQG1lZGlhIChtYXgtaGVpZ2h0OiA2MjVweCkge1xuICAubWlzYy13cmFwcGVyIC5taXNjLWlubmVyIHtcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_dashboard_pages_miscellaneous_miscellaneous_module_ts.f4cc419d46319399.js.map