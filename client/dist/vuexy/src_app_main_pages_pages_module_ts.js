"use strict";
(self["webpackChunkvuexy"] = self["webpackChunkvuexy"] || []).push([["src_app_main_pages_pages_module_ts"],{

/***/ 5025:
/*!****************************************************************************************!*\
  !*** ./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgSelectComponent": function() { return /* binding */ NgSelectComponent; },
/* harmony export */   "NgSelectConfig": function() { return /* binding */ NgSelectConfig; },
/* harmony export */   "NgSelectModule": function() { return /* binding */ NgSelectModule; },
/* harmony export */   "SELECTION_MODEL_FACTORY": function() { return /* binding */ SELECTION_MODEL_FACTORY; },
/* harmony export */   "ɵb": function() { return /* binding */ DefaultSelectionModelFactory; },
/* harmony export */   "ɵc": function() { return /* binding */ DefaultSelectionModel; },
/* harmony export */   "ɵd": function() { return /* binding */ NgDropdownPanelService; },
/* harmony export */   "ɵe": function() { return /* binding */ NgItemLabelDirective; },
/* harmony export */   "ɵf": function() { return /* binding */ NgOptionTemplateDirective; },
/* harmony export */   "ɵg": function() { return /* binding */ NgOptgroupTemplateDirective; },
/* harmony export */   "ɵh": function() { return /* binding */ NgLabelTemplateDirective; },
/* harmony export */   "ɵi": function() { return /* binding */ NgMultiLabelTemplateDirective; },
/* harmony export */   "ɵj": function() { return /* binding */ NgHeaderTemplateDirective; },
/* harmony export */   "ɵk": function() { return /* binding */ NgFooterTemplateDirective; },
/* harmony export */   "ɵl": function() { return /* binding */ NgNotFoundTemplateDirective; },
/* harmony export */   "ɵm": function() { return /* binding */ NgTypeToSearchTemplateDirective; },
/* harmony export */   "ɵn": function() { return /* binding */ NgLoadingTextTemplateDirective; },
/* harmony export */   "ɵo": function() { return /* binding */ NgTagTemplateDirective; },
/* harmony export */   "ɵp": function() { return /* binding */ NgLoadingSpinnerTemplateDirective; },
/* harmony export */   "ɵq": function() { return /* binding */ NgDropdownPanelComponent; },
/* harmony export */   "ɵr": function() { return /* binding */ NgOptionComponent; },
/* harmony export */   "ɵs": function() { return /* binding */ ConsoleService; }
/* harmony export */ });
/* harmony import */ var D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ 9341);
/* harmony import */ var D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ 7990);
/* harmony import */ var D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ 5724);
/* harmony import */ var D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ 8035);
/* harmony import */ var D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 4058);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 5887);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 4172);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 5029);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 9820);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 8027);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 8377);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 919);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 981);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 4008);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 878);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 4850);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 8267);













var _c0 = ["content"];
var _c1 = ["scroll"];
var _c2 = ["padding"];

var _c3 = function _c3(a0) {
  return {
    searchTerm: a0
  };
};

function NgDropdownPanelComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](1, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.headerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c3, ctx_r0.filterValue));
  }
}

function NgDropdownPanelComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](1, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.footerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c3, ctx_r4.filterValue));
  }
}

var _c4 = ["*"];
var _c5 = ["searchInput"];

function NgSelectComponent_ng_container_4_div_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NgSelectComponent_ng_container_4_div_1_ng_template_1_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13);
      var item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r11.unselect(item_r7);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\xD7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "span", 16);
  }

  if (rf & 2) {
    var item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngItemLabel", item_r7.label)("escape", ctx_r9.escapeHTML);
  }
}

function NgSelectComponent_ng_container_4_div_1_ng_template_3_Template(rf, ctx) {}

var _c6 = function _c6(a0, a1, a2) {
  return {
    item: a0,
    clear: a1,
    label: a2
  };
};

function NgSelectComponent_ng_container_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, NgSelectComponent_ng_container_4_div_1_ng_template_1_Template, 3, 2, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, NgSelectComponent_ng_container_4_div_1_ng_template_3_Template, 0, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var item_r7 = ctx.$implicit;

    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2);

    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("ng-value-disabled", item_r7.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", ctx_r6.labelTemplate || _r8)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction3"](4, _c6, item_r7.value, ctx_r6.clearItem, item_r7.label));
  }
}

function NgSelectComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, NgSelectComponent_ng_container_4_div_1_Template, 4, 8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.selectedItems)("ngForTrackBy", ctx_r0.trackByOption);
  }
}

function NgSelectComponent_5_ng_template_0_Template(rf, ctx) {}

var _c7 = function _c7(a0, a1) {
  return {
    items: a0,
    clear: a1
  };
};

function NgSelectComponent_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, NgSelectComponent_5_ng_template_0_Template, 0, 0, "ng-template", 14);
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.multiLabelTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](2, _c7, ctx_r1.selectedValues, ctx_r1.clearItem));
  }
}

function NgSelectComponent_ng_container_9_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 19);
  }
}

function NgSelectComponent_ng_container_9_ng_template_3_Template(rf, ctx) {}

function NgSelectComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, NgSelectComponent_ng_container_9_ng_template_1_Template, 1, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, NgSelectComponent_ng_container_9_ng_template_3_Template, 0, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2);

    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.loadingSpinnerTemplate || _r16);
  }
}

function NgSelectComponent_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\xD7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("title", ctx_r4.clearAllText);
  }
}

function NgSelectComponent_ng_dropdown_panel_13_div_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "span", 27);
  }

  if (rf & 2) {
    var item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngItemLabel", item_r24.label)("escape", ctx_r26.escapeHTML);
  }
}

function NgSelectComponent_ng_dropdown_panel_13_div_2_ng_template_3_Template(rf, ctx) {}

var _c8 = function _c8(a0, a1, a2, a3) {
  return {
    item: a0,
    item$: a1,
    index: a2,
    searchTerm: a3
  };
};

function NgSelectComponent_ng_dropdown_panel_13_div_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NgSelectComponent_ng_dropdown_panel_13_div_2_Template_div_click_0_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30);
      var item_r24 = restoredCtx.$implicit;
      var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r29.toggleItem(item_r24);
    })("mouseover", function NgSelectComponent_ng_dropdown_panel_13_div_2_Template_div_mouseover_0_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30);
      var item_r24 = restoredCtx.$implicit;
      var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r31.onItemHover(item_r24);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_div_2_ng_template_1_Template, 1, 2, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_div_2_ng_template_3_Template, 0, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var item_r24 = ctx.$implicit;

    var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2);

    var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("ng-option-disabled", item_r24.disabled)("ng-option-selected", item_r24.selected)("ng-optgroup", item_r24.children)("ng-option", !item_r24.children)("ng-option-child", !!item_r24.parent)("ng-option-marked", item_r24 === ctx_r19.itemsList.markedItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("role", item_r24.children ? "group" : "option")("aria-selected", item_r24.selected)("id", item_r24 == null ? null : item_r24.htmlId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", item_r24.children ? ctx_r19.optgroupTemplate || _r25 : ctx_r19.optionTemplate || _r25)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction4"](17, _c8, item_r24.value, item_r24, item_r24.index, ctx_r19.searchTerm));
  }
}

function NgSelectComponent_ng_dropdown_panel_13_div_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r33.addTagText);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\"", ctx_r33.searchTerm, "\"");
  }
}

function NgSelectComponent_ng_dropdown_panel_13_div_3_ng_template_3_Template(rf, ctx) {}

function NgSelectComponent_ng_dropdown_panel_13_div_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("mouseover", function NgSelectComponent_ng_dropdown_panel_13_div_3_Template_div_mouseover_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r36);
      var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r35.itemsList.unmarkItem();
    })("click", function NgSelectComponent_ng_dropdown_panel_13_div_3_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r36);
      var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r37.selectTag();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_div_3_ng_template_1_Template, 4, 2, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_div_3_ng_template_3_Template, 0, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2);

    var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("ng-option-marked", !ctx_r20.itemsList.markedItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", ctx_r20.tagTemplate || _r32)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](4, _c3, ctx_r20.searchTerm));
  }
}

function NgSelectComponent_ng_dropdown_panel_13_ng_container_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r39.notFoundText);
  }
}

function NgSelectComponent_ng_dropdown_panel_13_ng_container_4_ng_template_3_Template(rf, ctx) {}

function NgSelectComponent_ng_dropdown_panel_13_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_ng_container_4_ng_template_1_Template, 2, 1, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_ng_container_4_ng_template_3_Template, 0, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2);

    var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", ctx_r21.notFoundTemplate || _r38)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c3, ctx_r21.searchTerm));
  }
}

function NgSelectComponent_ng_dropdown_panel_13_ng_container_5_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r42.typeToSearchText);
  }
}

function NgSelectComponent_ng_dropdown_panel_13_ng_container_5_ng_template_3_Template(rf, ctx) {}

function NgSelectComponent_ng_dropdown_panel_13_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_ng_container_5_ng_template_1_Template, 2, 1, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_ng_container_5_ng_template_3_Template, 0, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2);

    var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", ctx_r22.typeToSearchTemplate || _r41);
  }
}

function NgSelectComponent_ng_dropdown_panel_13_ng_container_6_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r45.loadingText);
  }
}

function NgSelectComponent_ng_dropdown_panel_13_ng_container_6_ng_template_3_Template(rf, ctx) {}

function NgSelectComponent_ng_dropdown_panel_13_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_ng_container_6_ng_template_1_Template, 2, 1, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_ng_container_6_ng_template_3_Template, 0, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2);

    var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", ctx_r23.loadingTextTemplate || _r44)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c3, ctx_r23.searchTerm));
  }
}

function NgSelectComponent_ng_dropdown_panel_13_Template(rf, ctx) {
  if (rf & 1) {
    var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ng-dropdown-panel", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("update", function NgSelectComponent_ng_dropdown_panel_13_Template_ng_dropdown_panel_update_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r48);
      var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r47.viewPortItems = $event;
    })("scroll", function NgSelectComponent_ng_dropdown_panel_13_Template_ng_dropdown_panel_scroll_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r48);
      var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r49.scroll.emit($event);
    })("scrollToEnd", function NgSelectComponent_ng_dropdown_panel_13_Template_ng_dropdown_panel_scrollToEnd_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r48);
      var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r50.scrollToEnd.emit($event);
    })("outsideClick", function NgSelectComponent_ng_dropdown_panel_13_Template_ng_dropdown_panel_outsideClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r48);
      var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r51.close();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, NgSelectComponent_ng_dropdown_panel_13_div_2_Template, 4, 22, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_div_3_Template, 4, 6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, NgSelectComponent_ng_dropdown_panel_13_ng_container_4_Template, 4, 4, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, NgSelectComponent_ng_dropdown_panel_13_ng_container_5_Template, 4, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, NgSelectComponent_ng_dropdown_panel_13_ng_container_6_Template, 4, 4, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("ng-select-multiple", ctx_r5.multiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("virtualScroll", ctx_r5.virtualScroll)("bufferAmount", ctx_r5.bufferAmount)("appendTo", ctx_r5.appendTo)("position", ctx_r5.dropdownPosition)("headerTemplate", ctx_r5.headerTemplate)("footerTemplate", ctx_r5.footerTemplate)("filterValue", ctx_r5.searchTerm)("items", ctx_r5.itemsList.filteredItems)("markedItem", ctx_r5.itemsList.markedItem)("ngClass", ctx_r5.appendTo ? ctx_r5.classes : null)("id", ctx_r5.dropdownId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r5.viewPortItems)("ngForTrackBy", ctx_r5.trackByOption);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.showAddTag);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.showNoItemsFound());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.showTypeToSearch());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.loading && ctx_r5.itemsList.filteredItems.length === 0);
  }
}

var unescapedHTMLExp = /[&<>"']/g;
var hasUnescapedHTMLExp = RegExp(unescapedHTMLExp.source);
var htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  '\'': '&#39;'
};

function escapeHTML(string) {
  return string && hasUnescapedHTMLExp.test(string) ? string.replace(unescapedHTMLExp, function (chr) {
    return htmlEscapes[chr];
  }) : string;
}

function isDefined(value) {
  return value !== undefined && value !== null;
}

function isObject(value) {
  return typeof value === 'object' && isDefined(value);
}

function isPromise(value) {
  return value instanceof Promise;
}

function isFunction(value) {
  return value instanceof Function;
}

var NgItemLabelDirective = /*#__PURE__*/function () {
  function NgItemLabelDirective(element) {
    (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NgItemLabelDirective);

    this.element = element;
    this.escape = true;
  }

  (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(NgItemLabelDirective, [{
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      this.element.nativeElement.innerHTML = this.escape ? escapeHTML(this.ngItemLabel) : this.ngItemLabel;
    }
  }]);

  return NgItemLabelDirective;
}();

NgItemLabelDirective.ɵfac = function NgItemLabelDirective_Factory(t) {
  return new (t || NgItemLabelDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef));
};

NgItemLabelDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: NgItemLabelDirective,
  selectors: [["", "ngItemLabel", ""]],
  inputs: {
    escape: "escape",
    ngItemLabel: "ngItemLabel"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]]
});

NgItemLabelDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef
  }];
};

NgItemLabelDirective.propDecorators = {
  ngItemLabel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  escape: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](NgItemLabelDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Directive,
    args: [{
      selector: '[ngItemLabel]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef
    }];
  }, {
    escape: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    ngItemLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }]
  });
})();

var NgOptionTemplateDirective = /*#__PURE__*/(0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(function NgOptionTemplateDirective(template) {
  (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NgOptionTemplateDirective);

  this.template = template;
});

NgOptionTemplateDirective.ɵfac = function NgOptionTemplateDirective_Factory(t) {
  return new (t || NgOptionTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef));
};

NgOptionTemplateDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: NgOptionTemplateDirective,
  selectors: [["", "ng-option-tmp", ""]]
});

NgOptionTemplateDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](NgOptionTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Directive,
    args: [{
      selector: '[ng-option-tmp]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef
    }];
  }, null);
})();

var NgOptgroupTemplateDirective = /*#__PURE__*/(0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(function NgOptgroupTemplateDirective(template) {
  (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NgOptgroupTemplateDirective);

  this.template = template;
});

NgOptgroupTemplateDirective.ɵfac = function NgOptgroupTemplateDirective_Factory(t) {
  return new (t || NgOptgroupTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef));
};

NgOptgroupTemplateDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: NgOptgroupTemplateDirective,
  selectors: [["", "ng-optgroup-tmp", ""]]
});

NgOptgroupTemplateDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](NgOptgroupTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Directive,
    args: [{
      selector: '[ng-optgroup-tmp]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef
    }];
  }, null);
})();

var NgLabelTemplateDirective = /*#__PURE__*/(0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(function NgLabelTemplateDirective(template) {
  (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NgLabelTemplateDirective);

  this.template = template;
});

NgLabelTemplateDirective.ɵfac = function NgLabelTemplateDirective_Factory(t) {
  return new (t || NgLabelTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef));
};

NgLabelTemplateDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: NgLabelTemplateDirective,
  selectors: [["", "ng-label-tmp", ""]]
});

NgLabelTemplateDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](NgLabelTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Directive,
    args: [{
      selector: '[ng-label-tmp]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef
    }];
  }, null);
})();

var NgMultiLabelTemplateDirective = /*#__PURE__*/(0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(function NgMultiLabelTemplateDirective(template) {
  (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NgMultiLabelTemplateDirective);

  this.template = template;
});

NgMultiLabelTemplateDirective.ɵfac = function NgMultiLabelTemplateDirective_Factory(t) {
  return new (t || NgMultiLabelTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef));
};

NgMultiLabelTemplateDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: NgMultiLabelTemplateDirective,
  selectors: [["", "ng-multi-label-tmp", ""]]
});

NgMultiLabelTemplateDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](NgMultiLabelTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Directive,
    args: [{
      selector: '[ng-multi-label-tmp]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef
    }];
  }, null);
})();

var NgHeaderTemplateDirective = /*#__PURE__*/(0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(function NgHeaderTemplateDirective(template) {
  (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NgHeaderTemplateDirective);

  this.template = template;
});

NgHeaderTemplateDirective.ɵfac = function NgHeaderTemplateDirective_Factory(t) {
  return new (t || NgHeaderTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef));
};

NgHeaderTemplateDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: NgHeaderTemplateDirective,
  selectors: [["", "ng-header-tmp", ""]]
});

NgHeaderTemplateDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](NgHeaderTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Directive,
    args: [{
      selector: '[ng-header-tmp]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef
    }];
  }, null);
})();

var NgFooterTemplateDirective = /*#__PURE__*/(0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(function NgFooterTemplateDirective(template) {
  (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NgFooterTemplateDirective);

  this.template = template;
});

NgFooterTemplateDirective.ɵfac = function NgFooterTemplateDirective_Factory(t) {
  return new (t || NgFooterTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef));
};

NgFooterTemplateDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: NgFooterTemplateDirective,
  selectors: [["", "ng-footer-tmp", ""]]
});

NgFooterTemplateDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](NgFooterTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Directive,
    args: [{
      selector: '[ng-footer-tmp]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef
    }];
  }, null);
})();

var NgNotFoundTemplateDirective = /*#__PURE__*/(0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(function NgNotFoundTemplateDirective(template) {
  (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NgNotFoundTemplateDirective);

  this.template = template;
});

NgNotFoundTemplateDirective.ɵfac = function NgNotFoundTemplateDirective_Factory(t) {
  return new (t || NgNotFoundTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef));
};

NgNotFoundTemplateDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: NgNotFoundTemplateDirective,
  selectors: [["", "ng-notfound-tmp", ""]]
});

NgNotFoundTemplateDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](NgNotFoundTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Directive,
    args: [{
      selector: '[ng-notfound-tmp]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef
    }];
  }, null);
})();

var NgTypeToSearchTemplateDirective = /*#__PURE__*/(0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(function NgTypeToSearchTemplateDirective(template) {
  (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NgTypeToSearchTemplateDirective);

  this.template = template;
});

NgTypeToSearchTemplateDirective.ɵfac = function NgTypeToSearchTemplateDirective_Factory(t) {
  return new (t || NgTypeToSearchTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef));
};

NgTypeToSearchTemplateDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: NgTypeToSearchTemplateDirective,
  selectors: [["", "ng-typetosearch-tmp", ""]]
});

NgTypeToSearchTemplateDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](NgTypeToSearchTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Directive,
    args: [{
      selector: '[ng-typetosearch-tmp]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef
    }];
  }, null);
})();

var NgLoadingTextTemplateDirective = /*#__PURE__*/(0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(function NgLoadingTextTemplateDirective(template) {
  (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NgLoadingTextTemplateDirective);

  this.template = template;
});

NgLoadingTextTemplateDirective.ɵfac = function NgLoadingTextTemplateDirective_Factory(t) {
  return new (t || NgLoadingTextTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef));
};

NgLoadingTextTemplateDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: NgLoadingTextTemplateDirective,
  selectors: [["", "ng-loadingtext-tmp", ""]]
});

NgLoadingTextTemplateDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](NgLoadingTextTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Directive,
    args: [{
      selector: '[ng-loadingtext-tmp]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef
    }];
  }, null);
})();

var NgTagTemplateDirective = /*#__PURE__*/(0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(function NgTagTemplateDirective(template) {
  (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NgTagTemplateDirective);

  this.template = template;
});

NgTagTemplateDirective.ɵfac = function NgTagTemplateDirective_Factory(t) {
  return new (t || NgTagTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef));
};

NgTagTemplateDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: NgTagTemplateDirective,
  selectors: [["", "ng-tag-tmp", ""]]
});

NgTagTemplateDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](NgTagTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Directive,
    args: [{
      selector: '[ng-tag-tmp]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef
    }];
  }, null);
})();

var NgLoadingSpinnerTemplateDirective = /*#__PURE__*/(0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(function NgLoadingSpinnerTemplateDirective(template) {
  (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NgLoadingSpinnerTemplateDirective);

  this.template = template;
});

NgLoadingSpinnerTemplateDirective.ɵfac = function NgLoadingSpinnerTemplateDirective_Factory(t) {
  return new (t || NgLoadingSpinnerTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef));
};

NgLoadingSpinnerTemplateDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: NgLoadingSpinnerTemplateDirective,
  selectors: [["", "ng-loadingspinner-tmp", ""]]
});

NgLoadingSpinnerTemplateDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](NgLoadingSpinnerTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Directive,
    args: [{
      selector: '[ng-loadingspinner-tmp]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef
    }];
  }, null);
})();

var ConsoleService = /*#__PURE__*/function () {
  function ConsoleService() {
    (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, ConsoleService);
  }

  (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(ConsoleService, [{
    key: "warn",
    value: function warn(message) {
      console.warn(message);
    }
  }]);

  return ConsoleService;
}();

ConsoleService.ɵfac = function ConsoleService_Factory(t) {
  return new (t || ConsoleService)();
};

ConsoleService.ɵprov = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"])({
  factory: function ConsoleService_Factory() {
    return new ConsoleService();
  },
  token: ConsoleService,
  providedIn: "root"
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](ConsoleService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();

function newId() {
  // First character is an 'a', it's good practice to tag id to begin with a letter
  return 'axxxxxxxxxxx'.replace(/[x]/g, function (_) {
    // tslint:disable-next-line:no-bitwise
    var val = Math.random() * 16 | 0;
    return val.toString(16);
  });
}

var diacritics = {
  "\u24B6": 'A',
  "\uFF21": 'A',
  "\xC0": 'A',
  "\xC1": 'A',
  "\xC2": 'A',
  "\u1EA6": 'A',
  "\u1EA4": 'A',
  "\u1EAA": 'A',
  "\u1EA8": 'A',
  "\xC3": 'A',
  "\u0100": 'A',
  "\u0102": 'A',
  "\u1EB0": 'A',
  "\u1EAE": 'A',
  "\u1EB4": 'A',
  "\u1EB2": 'A',
  "\u0226": 'A',
  "\u01E0": 'A',
  "\xC4": 'A',
  "\u01DE": 'A',
  "\u1EA2": 'A',
  "\xC5": 'A',
  "\u01FA": 'A',
  "\u01CD": 'A',
  "\u0200": 'A',
  "\u0202": 'A',
  "\u1EA0": 'A',
  "\u1EAC": 'A',
  "\u1EB6": 'A',
  "\u1E00": 'A',
  "\u0104": 'A',
  "\u023A": 'A',
  "\u2C6F": 'A',
  "\uA732": 'AA',
  "\xC6": 'AE',
  "\u01FC": 'AE',
  "\u01E2": 'AE',
  "\uA734": 'AO',
  "\uA736": 'AU',
  "\uA738": 'AV',
  "\uA73A": 'AV',
  "\uA73C": 'AY',
  "\u24B7": 'B',
  "\uFF22": 'B',
  "\u1E02": 'B',
  "\u1E04": 'B',
  "\u1E06": 'B',
  "\u0243": 'B',
  "\u0182": 'B',
  "\u0181": 'B',
  "\u24B8": 'C',
  "\uFF23": 'C',
  "\u0106": 'C',
  "\u0108": 'C',
  "\u010A": 'C',
  "\u010C": 'C',
  "\xC7": 'C',
  "\u1E08": 'C',
  "\u0187": 'C',
  "\u023B": 'C',
  "\uA73E": 'C',
  "\u24B9": 'D',
  "\uFF24": 'D',
  "\u1E0A": 'D',
  "\u010E": 'D',
  "\u1E0C": 'D',
  "\u1E10": 'D',
  "\u1E12": 'D',
  "\u1E0E": 'D',
  "\u0110": 'D',
  "\u018B": 'D',
  "\u018A": 'D',
  "\u0189": 'D',
  "\uA779": 'D',
  "\u01F1": 'DZ',
  "\u01C4": 'DZ',
  "\u01F2": 'Dz',
  "\u01C5": 'Dz',
  "\u24BA": 'E',
  "\uFF25": 'E',
  "\xC8": 'E',
  "\xC9": 'E',
  "\xCA": 'E',
  "\u1EC0": 'E',
  "\u1EBE": 'E',
  "\u1EC4": 'E',
  "\u1EC2": 'E',
  "\u1EBC": 'E',
  "\u0112": 'E',
  "\u1E14": 'E',
  "\u1E16": 'E',
  "\u0114": 'E',
  "\u0116": 'E',
  "\xCB": 'E',
  "\u1EBA": 'E',
  "\u011A": 'E',
  "\u0204": 'E',
  "\u0206": 'E',
  "\u1EB8": 'E',
  "\u1EC6": 'E',
  "\u0228": 'E',
  "\u1E1C": 'E',
  "\u0118": 'E',
  "\u1E18": 'E',
  "\u1E1A": 'E',
  "\u0190": 'E',
  "\u018E": 'E',
  "\u24BB": 'F',
  "\uFF26": 'F',
  "\u1E1E": 'F',
  "\u0191": 'F',
  "\uA77B": 'F',
  "\u24BC": 'G',
  "\uFF27": 'G',
  "\u01F4": 'G',
  "\u011C": 'G',
  "\u1E20": 'G',
  "\u011E": 'G',
  "\u0120": 'G',
  "\u01E6": 'G',
  "\u0122": 'G',
  "\u01E4": 'G',
  "\u0193": 'G',
  "\uA7A0": 'G',
  "\uA77D": 'G',
  "\uA77E": 'G',
  "\u24BD": 'H',
  "\uFF28": 'H',
  "\u0124": 'H',
  "\u1E22": 'H',
  "\u1E26": 'H',
  "\u021E": 'H',
  "\u1E24": 'H',
  "\u1E28": 'H',
  "\u1E2A": 'H',
  "\u0126": 'H',
  "\u2C67": 'H',
  "\u2C75": 'H',
  "\uA78D": 'H',
  "\u24BE": 'I',
  "\uFF29": 'I',
  "\xCC": 'I',
  "\xCD": 'I',
  "\xCE": 'I',
  "\u0128": 'I',
  "\u012A": 'I',
  "\u012C": 'I',
  "\u0130": 'I',
  "\xCF": 'I',
  "\u1E2E": 'I',
  "\u1EC8": 'I',
  "\u01CF": 'I',
  "\u0208": 'I',
  "\u020A": 'I',
  "\u1ECA": 'I',
  "\u012E": 'I',
  "\u1E2C": 'I',
  "\u0197": 'I',
  "\u24BF": 'J',
  "\uFF2A": 'J',
  "\u0134": 'J',
  "\u0248": 'J',
  "\u24C0": 'K',
  "\uFF2B": 'K',
  "\u1E30": 'K',
  "\u01E8": 'K',
  "\u1E32": 'K',
  "\u0136": 'K',
  "\u1E34": 'K',
  "\u0198": 'K',
  "\u2C69": 'K',
  "\uA740": 'K',
  "\uA742": 'K',
  "\uA744": 'K',
  "\uA7A2": 'K',
  "\u24C1": 'L',
  "\uFF2C": 'L',
  "\u013F": 'L',
  "\u0139": 'L',
  "\u013D": 'L',
  "\u1E36": 'L',
  "\u1E38": 'L',
  "\u013B": 'L',
  "\u1E3C": 'L',
  "\u1E3A": 'L',
  "\u0141": 'L',
  "\u023D": 'L',
  "\u2C62": 'L',
  "\u2C60": 'L',
  "\uA748": 'L',
  "\uA746": 'L',
  "\uA780": 'L',
  "\u01C7": 'LJ',
  "\u01C8": 'Lj',
  "\u24C2": 'M',
  "\uFF2D": 'M',
  "\u1E3E": 'M',
  "\u1E40": 'M',
  "\u1E42": 'M',
  "\u2C6E": 'M',
  "\u019C": 'M',
  "\u24C3": 'N',
  "\uFF2E": 'N',
  "\u01F8": 'N',
  "\u0143": 'N',
  "\xD1": 'N',
  "\u1E44": 'N',
  "\u0147": 'N',
  "\u1E46": 'N',
  "\u0145": 'N',
  "\u1E4A": 'N',
  "\u1E48": 'N',
  "\u0220": 'N',
  "\u019D": 'N',
  "\uA790": 'N',
  "\uA7A4": 'N',
  "\u01CA": 'NJ',
  "\u01CB": 'Nj',
  "\u24C4": 'O',
  "\uFF2F": 'O',
  "\xD2": 'O',
  "\xD3": 'O',
  "\xD4": 'O',
  "\u1ED2": 'O',
  "\u1ED0": 'O',
  "\u1ED6": 'O',
  "\u1ED4": 'O',
  "\xD5": 'O',
  "\u1E4C": 'O',
  "\u022C": 'O',
  "\u1E4E": 'O',
  "\u014C": 'O',
  "\u1E50": 'O',
  "\u1E52": 'O',
  "\u014E": 'O',
  "\u022E": 'O',
  "\u0230": 'O',
  "\xD6": 'O',
  "\u022A": 'O',
  "\u1ECE": 'O',
  "\u0150": 'O',
  "\u01D1": 'O',
  "\u020C": 'O',
  "\u020E": 'O',
  "\u01A0": 'O',
  "\u1EDC": 'O',
  "\u1EDA": 'O',
  "\u1EE0": 'O',
  "\u1EDE": 'O',
  "\u1EE2": 'O',
  "\u1ECC": 'O',
  "\u1ED8": 'O',
  "\u01EA": 'O',
  "\u01EC": 'O',
  "\xD8": 'O',
  "\u01FE": 'O',
  "\u0186": 'O',
  "\u019F": 'O',
  "\uA74A": 'O',
  "\uA74C": 'O',
  "\u01A2": 'OI',
  "\uA74E": 'OO',
  "\u0222": 'OU',
  "\u24C5": 'P',
  "\uFF30": 'P',
  "\u1E54": 'P',
  "\u1E56": 'P',
  "\u01A4": 'P',
  "\u2C63": 'P',
  "\uA750": 'P',
  "\uA752": 'P',
  "\uA754": 'P',
  "\u24C6": 'Q',
  "\uFF31": 'Q',
  "\uA756": 'Q',
  "\uA758": 'Q',
  "\u024A": 'Q',
  "\u24C7": 'R',
  "\uFF32": 'R',
  "\u0154": 'R',
  "\u1E58": 'R',
  "\u0158": 'R',
  "\u0210": 'R',
  "\u0212": 'R',
  "\u1E5A": 'R',
  "\u1E5C": 'R',
  "\u0156": 'R',
  "\u1E5E": 'R',
  "\u024C": 'R',
  "\u2C64": 'R',
  "\uA75A": 'R',
  "\uA7A6": 'R',
  "\uA782": 'R',
  "\u24C8": 'S',
  "\uFF33": 'S',
  "\u1E9E": 'S',
  "\u015A": 'S',
  "\u1E64": 'S',
  "\u015C": 'S',
  "\u1E60": 'S',
  "\u0160": 'S',
  "\u1E66": 'S',
  "\u1E62": 'S',
  "\u1E68": 'S',
  "\u0218": 'S',
  "\u015E": 'S',
  "\u2C7E": 'S',
  "\uA7A8": 'S',
  "\uA784": 'S',
  "\u24C9": 'T',
  "\uFF34": 'T',
  "\u1E6A": 'T',
  "\u0164": 'T',
  "\u1E6C": 'T',
  "\u021A": 'T',
  "\u0162": 'T',
  "\u1E70": 'T',
  "\u1E6E": 'T',
  "\u0166": 'T',
  "\u01AC": 'T',
  "\u01AE": 'T',
  "\u023E": 'T',
  "\uA786": 'T',
  "\uA728": 'TZ',
  "\u24CA": 'U',
  "\uFF35": 'U',
  "\xD9": 'U',
  "\xDA": 'U',
  "\xDB": 'U',
  "\u0168": 'U',
  "\u1E78": 'U',
  "\u016A": 'U',
  "\u1E7A": 'U',
  "\u016C": 'U',
  "\xDC": 'U',
  "\u01DB": 'U',
  "\u01D7": 'U',
  "\u01D5": 'U',
  "\u01D9": 'U',
  "\u1EE6": 'U',
  "\u016E": 'U',
  "\u0170": 'U',
  "\u01D3": 'U',
  "\u0214": 'U',
  "\u0216": 'U',
  "\u01AF": 'U',
  "\u1EEA": 'U',
  "\u1EE8": 'U',
  "\u1EEE": 'U',
  "\u1EEC": 'U',
  "\u1EF0": 'U',
  "\u1EE4": 'U',
  "\u1E72": 'U',
  "\u0172": 'U',
  "\u1E76": 'U',
  "\u1E74": 'U',
  "\u0244": 'U',
  "\u24CB": 'V',
  "\uFF36": 'V',
  "\u1E7C": 'V',
  "\u1E7E": 'V',
  "\u01B2": 'V',
  "\uA75E": 'V',
  "\u0245": 'V',
  "\uA760": 'VY',
  "\u24CC": 'W',
  "\uFF37": 'W',
  "\u1E80": 'W',
  "\u1E82": 'W',
  "\u0174": 'W',
  "\u1E86": 'W',
  "\u1E84": 'W',
  "\u1E88": 'W',
  "\u2C72": 'W',
  "\u24CD": 'X',
  "\uFF38": 'X',
  "\u1E8A": 'X',
  "\u1E8C": 'X',
  "\u24CE": 'Y',
  "\uFF39": 'Y',
  "\u1EF2": 'Y',
  "\xDD": 'Y',
  "\u0176": 'Y',
  "\u1EF8": 'Y',
  "\u0232": 'Y',
  "\u1E8E": 'Y',
  "\u0178": 'Y',
  "\u1EF6": 'Y',
  "\u1EF4": 'Y',
  "\u01B3": 'Y',
  "\u024E": 'Y',
  "\u1EFE": 'Y',
  "\u24CF": 'Z',
  "\uFF3A": 'Z',
  "\u0179": 'Z',
  "\u1E90": 'Z',
  "\u017B": 'Z',
  "\u017D": 'Z',
  "\u1E92": 'Z',
  "\u1E94": 'Z',
  "\u01B5": 'Z',
  "\u0224": 'Z',
  "\u2C7F": 'Z',
  "\u2C6B": 'Z',
  "\uA762": 'Z',
  "\u24D0": 'a',
  "\uFF41": 'a',
  "\u1E9A": 'a',
  "\xE0": 'a',
  "\xE1": 'a',
  "\xE2": 'a',
  "\u1EA7": 'a',
  "\u1EA5": 'a',
  "\u1EAB": 'a',
  "\u1EA9": 'a',
  "\xE3": 'a',
  "\u0101": 'a',
  "\u0103": 'a',
  "\u1EB1": 'a',
  "\u1EAF": 'a',
  "\u1EB5": 'a',
  "\u1EB3": 'a',
  "\u0227": 'a',
  "\u01E1": 'a',
  "\xE4": 'a',
  "\u01DF": 'a',
  "\u1EA3": 'a',
  "\xE5": 'a',
  "\u01FB": 'a',
  "\u01CE": 'a',
  "\u0201": 'a',
  "\u0203": 'a',
  "\u1EA1": 'a',
  "\u1EAD": 'a',
  "\u1EB7": 'a',
  "\u1E01": 'a',
  "\u0105": 'a',
  "\u2C65": 'a',
  "\u0250": 'a',
  "\uA733": 'aa',
  "\xE6": 'ae',
  "\u01FD": 'ae',
  "\u01E3": 'ae',
  "\uA735": 'ao',
  "\uA737": 'au',
  "\uA739": 'av',
  "\uA73B": 'av',
  "\uA73D": 'ay',
  "\u24D1": 'b',
  "\uFF42": 'b',
  "\u1E03": 'b',
  "\u1E05": 'b',
  "\u1E07": 'b',
  "\u0180": 'b',
  "\u0183": 'b',
  "\u0253": 'b',
  "\u24D2": 'c',
  "\uFF43": 'c',
  "\u0107": 'c',
  "\u0109": 'c',
  "\u010B": 'c',
  "\u010D": 'c',
  "\xE7": 'c',
  "\u1E09": 'c',
  "\u0188": 'c',
  "\u023C": 'c',
  "\uA73F": 'c',
  "\u2184": 'c',
  "\u24D3": 'd',
  "\uFF44": 'd',
  "\u1E0B": 'd',
  "\u010F": 'd',
  "\u1E0D": 'd',
  "\u1E11": 'd',
  "\u1E13": 'd',
  "\u1E0F": 'd',
  "\u0111": 'd',
  "\u018C": 'd',
  "\u0256": 'd',
  "\u0257": 'd',
  "\uA77A": 'd',
  "\u01F3": 'dz',
  "\u01C6": 'dz',
  "\u24D4": 'e',
  "\uFF45": 'e',
  "\xE8": 'e',
  "\xE9": 'e',
  "\xEA": 'e',
  "\u1EC1": 'e',
  "\u1EBF": 'e',
  "\u1EC5": 'e',
  "\u1EC3": 'e',
  "\u1EBD": 'e',
  "\u0113": 'e',
  "\u1E15": 'e',
  "\u1E17": 'e',
  "\u0115": 'e',
  "\u0117": 'e',
  "\xEB": 'e',
  "\u1EBB": 'e',
  "\u011B": 'e',
  "\u0205": 'e',
  "\u0207": 'e',
  "\u1EB9": 'e',
  "\u1EC7": 'e',
  "\u0229": 'e',
  "\u1E1D": 'e',
  "\u0119": 'e',
  "\u1E19": 'e',
  "\u1E1B": 'e',
  "\u0247": 'e',
  "\u025B": 'e',
  "\u01DD": 'e',
  "\u24D5": 'f',
  "\uFF46": 'f',
  "\u1E1F": 'f',
  "\u0192": 'f',
  "\uA77C": 'f',
  "\u24D6": 'g',
  "\uFF47": 'g',
  "\u01F5": 'g',
  "\u011D": 'g',
  "\u1E21": 'g',
  "\u011F": 'g',
  "\u0121": 'g',
  "\u01E7": 'g',
  "\u0123": 'g',
  "\u01E5": 'g',
  "\u0260": 'g',
  "\uA7A1": 'g',
  "\u1D79": 'g',
  "\uA77F": 'g',
  "\u24D7": 'h',
  "\uFF48": 'h',
  "\u0125": 'h',
  "\u1E23": 'h',
  "\u1E27": 'h',
  "\u021F": 'h',
  "\u1E25": 'h',
  "\u1E29": 'h',
  "\u1E2B": 'h',
  "\u1E96": 'h',
  "\u0127": 'h',
  "\u2C68": 'h',
  "\u2C76": 'h',
  "\u0265": 'h',
  "\u0195": 'hv',
  "\u24D8": 'i',
  "\uFF49": 'i',
  "\xEC": 'i',
  "\xED": 'i',
  "\xEE": 'i',
  "\u0129": 'i',
  "\u012B": 'i',
  "\u012D": 'i',
  "\xEF": 'i',
  "\u1E2F": 'i',
  "\u1EC9": 'i',
  "\u01D0": 'i',
  "\u0209": 'i',
  "\u020B": 'i',
  "\u1ECB": 'i',
  "\u012F": 'i',
  "\u1E2D": 'i',
  "\u0268": 'i',
  "\u0131": 'i',
  "\u24D9": 'j',
  "\uFF4A": 'j',
  "\u0135": 'j',
  "\u01F0": 'j',
  "\u0249": 'j',
  "\u24DA": 'k',
  "\uFF4B": 'k',
  "\u1E31": 'k',
  "\u01E9": 'k',
  "\u1E33": 'k',
  "\u0137": 'k',
  "\u1E35": 'k',
  "\u0199": 'k',
  "\u2C6A": 'k',
  "\uA741": 'k',
  "\uA743": 'k',
  "\uA745": 'k',
  "\uA7A3": 'k',
  "\u24DB": 'l',
  "\uFF4C": 'l',
  "\u0140": 'l',
  "\u013A": 'l',
  "\u013E": 'l',
  "\u1E37": 'l',
  "\u1E39": 'l',
  "\u013C": 'l',
  "\u1E3D": 'l',
  "\u1E3B": 'l',
  "\u017F": 'l',
  "\u0142": 'l',
  "\u019A": 'l',
  "\u026B": 'l',
  "\u2C61": 'l',
  "\uA749": 'l',
  "\uA781": 'l',
  "\uA747": 'l',
  "\u01C9": 'lj',
  "\u24DC": 'm',
  "\uFF4D": 'm',
  "\u1E3F": 'm',
  "\u1E41": 'm',
  "\u1E43": 'm',
  "\u0271": 'm',
  "\u026F": 'm',
  "\u24DD": 'n',
  "\uFF4E": 'n',
  "\u01F9": 'n',
  "\u0144": 'n',
  "\xF1": 'n',
  "\u1E45": 'n',
  "\u0148": 'n',
  "\u1E47": 'n',
  "\u0146": 'n',
  "\u1E4B": 'n',
  "\u1E49": 'n',
  "\u019E": 'n',
  "\u0272": 'n',
  "\u0149": 'n',
  "\uA791": 'n',
  "\uA7A5": 'n',
  "\u01CC": 'nj',
  "\u24DE": 'o',
  "\uFF4F": 'o',
  "\xF2": 'o',
  "\xF3": 'o',
  "\xF4": 'o',
  "\u1ED3": 'o',
  "\u1ED1": 'o',
  "\u1ED7": 'o',
  "\u1ED5": 'o',
  "\xF5": 'o',
  "\u1E4D": 'o',
  "\u022D": 'o',
  "\u1E4F": 'o',
  "\u014D": 'o',
  "\u1E51": 'o',
  "\u1E53": 'o',
  "\u014F": 'o',
  "\u022F": 'o',
  "\u0231": 'o',
  "\xF6": 'o',
  "\u022B": 'o',
  "\u1ECF": 'o',
  "\u0151": 'o',
  "\u01D2": 'o',
  "\u020D": 'o',
  "\u020F": 'o',
  "\u01A1": 'o',
  "\u1EDD": 'o',
  "\u1EDB": 'o',
  "\u1EE1": 'o',
  "\u1EDF": 'o',
  "\u1EE3": 'o',
  "\u1ECD": 'o',
  "\u1ED9": 'o',
  "\u01EB": 'o',
  "\u01ED": 'o',
  "\xF8": 'o',
  "\u01FF": 'o',
  "\u0254": 'o',
  "\uA74B": 'o',
  "\uA74D": 'o',
  "\u0275": 'o',
  "\u01A3": 'oi',
  "\u0223": 'ou',
  "\uA74F": 'oo',
  "\u24DF": 'p',
  "\uFF50": 'p',
  "\u1E55": 'p',
  "\u1E57": 'p',
  "\u01A5": 'p',
  "\u1D7D": 'p',
  "\uA751": 'p',
  "\uA753": 'p',
  "\uA755": 'p',
  "\u24E0": 'q',
  "\uFF51": 'q',
  "\u024B": 'q',
  "\uA757": 'q',
  "\uA759": 'q',
  "\u24E1": 'r',
  "\uFF52": 'r',
  "\u0155": 'r',
  "\u1E59": 'r',
  "\u0159": 'r',
  "\u0211": 'r',
  "\u0213": 'r',
  "\u1E5B": 'r',
  "\u1E5D": 'r',
  "\u0157": 'r',
  "\u1E5F": 'r',
  "\u024D": 'r',
  "\u027D": 'r',
  "\uA75B": 'r',
  "\uA7A7": 'r',
  "\uA783": 'r',
  "\u24E2": 's',
  "\uFF53": 's',
  "\xDF": 's',
  "\u015B": 's',
  "\u1E65": 's',
  "\u015D": 's',
  "\u1E61": 's',
  "\u0161": 's',
  "\u1E67": 's',
  "\u1E63": 's',
  "\u1E69": 's',
  "\u0219": 's',
  "\u015F": 's',
  "\u023F": 's',
  "\uA7A9": 's',
  "\uA785": 's',
  "\u1E9B": 's',
  "\u24E3": 't',
  "\uFF54": 't',
  "\u1E6B": 't',
  "\u1E97": 't',
  "\u0165": 't',
  "\u1E6D": 't',
  "\u021B": 't',
  "\u0163": 't',
  "\u1E71": 't',
  "\u1E6F": 't',
  "\u0167": 't',
  "\u01AD": 't',
  "\u0288": 't',
  "\u2C66": 't',
  "\uA787": 't',
  "\uA729": 'tz',
  "\u24E4": 'u',
  "\uFF55": 'u',
  "\xF9": 'u',
  "\xFA": 'u',
  "\xFB": 'u',
  "\u0169": 'u',
  "\u1E79": 'u',
  "\u016B": 'u',
  "\u1E7B": 'u',
  "\u016D": 'u',
  "\xFC": 'u',
  "\u01DC": 'u',
  "\u01D8": 'u',
  "\u01D6": 'u',
  "\u01DA": 'u',
  "\u1EE7": 'u',
  "\u016F": 'u',
  "\u0171": 'u',
  "\u01D4": 'u',
  "\u0215": 'u',
  "\u0217": 'u',
  "\u01B0": 'u',
  "\u1EEB": 'u',
  "\u1EE9": 'u',
  "\u1EEF": 'u',
  "\u1EED": 'u',
  "\u1EF1": 'u',
  "\u1EE5": 'u',
  "\u1E73": 'u',
  "\u0173": 'u',
  "\u1E77": 'u',
  "\u1E75": 'u',
  "\u0289": 'u',
  "\u24E5": 'v',
  "\uFF56": 'v',
  "\u1E7D": 'v',
  "\u1E7F": 'v',
  "\u028B": 'v',
  "\uA75F": 'v',
  "\u028C": 'v',
  "\uA761": 'vy',
  "\u24E6": 'w',
  "\uFF57": 'w',
  "\u1E81": 'w',
  "\u1E83": 'w',
  "\u0175": 'w',
  "\u1E87": 'w',
  "\u1E85": 'w',
  "\u1E98": 'w',
  "\u1E89": 'w',
  "\u2C73": 'w',
  "\u24E7": 'x',
  "\uFF58": 'x',
  "\u1E8B": 'x',
  "\u1E8D": 'x',
  "\u24E8": 'y',
  "\uFF59": 'y',
  "\u1EF3": 'y',
  "\xFD": 'y',
  "\u0177": 'y',
  "\u1EF9": 'y',
  "\u0233": 'y',
  "\u1E8F": 'y',
  "\xFF": 'y',
  "\u1EF7": 'y',
  "\u1E99": 'y',
  "\u1EF5": 'y',
  "\u01B4": 'y',
  "\u024F": 'y',
  "\u1EFF": 'y',
  "\u24E9": 'z',
  "\uFF5A": 'z',
  "\u017A": 'z',
  "\u1E91": 'z',
  "\u017C": 'z',
  "\u017E": 'z',
  "\u1E93": 'z',
  "\u1E95": 'z',
  "\u01B6": 'z',
  "\u0225": 'z',
  "\u0240": 'z',
  "\u2C6C": 'z',
  "\uA763": 'z',
  "\u0386": "\u0391",
  "\u0388": "\u0395",
  "\u0389": "\u0397",
  "\u038A": "\u0399",
  "\u03AA": "\u0399",
  "\u038C": "\u039F",
  "\u038E": "\u03A5",
  "\u03AB": "\u03A5",
  "\u038F": "\u03A9",
  "\u03AC": "\u03B1",
  "\u03AD": "\u03B5",
  "\u03AE": "\u03B7",
  "\u03AF": "\u03B9",
  "\u03CA": "\u03B9",
  "\u0390": "\u03B9",
  "\u03CC": "\u03BF",
  "\u03CD": "\u03C5",
  "\u03CB": "\u03C5",
  "\u03B0": "\u03C5",
  "\u03C9": "\u03C9",
  "\u03C2": "\u03C3"
};

function stripSpecialChars(text) {
  var match = function match(a) {
    return diacritics[a] || a;
  };

  return text.replace(/[^\u0000-\u007E]/g, match);
}

var ItemsList = /*#__PURE__*/function () {
  function ItemsList(_ngSelect, _selectionModel) {
    (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, ItemsList);

    this._ngSelect = _ngSelect;
    this._selectionModel = _selectionModel;
    this._items = [];
    this._filteredItems = [];
    this._markedIndex = -1;
  }

  (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(ItemsList, [{
    key: "items",
    get: function get() {
      return this._items;
    }
  }, {
    key: "filteredItems",
    get: function get() {
      return this._filteredItems;
    }
  }, {
    key: "markedIndex",
    get: function get() {
      return this._markedIndex;
    }
  }, {
    key: "selectedItems",
    get: function get() {
      return this._selectionModel.value;
    }
  }, {
    key: "markedItem",
    get: function get() {
      return this._filteredItems[this._markedIndex];
    }
  }, {
    key: "noItemsToSelect",
    get: function get() {
      return this._ngSelect.hideSelected && this._items.length === this.selectedItems.length;
    }
  }, {
    key: "maxItemsSelected",
    get: function get() {
      return this._ngSelect.multiple && this._ngSelect.maxSelectedItems <= this.selectedItems.length;
    }
  }, {
    key: "lastSelectedItem",
    get: function get() {
      var i = this.selectedItems.length - 1;

      for (; i >= 0; i--) {
        var item = this.selectedItems[i];

        if (!item.disabled) {
          return item;
        }
      }

      return null;
    }
  }, {
    key: "setItems",
    value: function setItems(items) {
      var _this = this;

      this._items = items.map(function (item, index) {
        return _this.mapItem(item, index);
      });

      if (this._ngSelect.groupBy) {
        this._groups = this._groupBy(this._items, this._ngSelect.groupBy);
        this._items = this._flatten(this._groups);
      } else {
        this._groups = new Map();

        this._groups.set(undefined, this._items);
      }

      this._filteredItems = (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(this._items);
    }
  }, {
    key: "select",
    value: function select(item) {
      if (item.selected || this.maxItemsSelected) {
        return;
      }

      var multiple = this._ngSelect.multiple;

      if (!multiple) {
        this.clearSelected();
      }

      this._selectionModel.select(item, multiple, this._ngSelect.selectableGroupAsModel);

      if (this._ngSelect.hideSelected) {
        this._hideSelected(item);
      }
    }
  }, {
    key: "unselect",
    value: function unselect(item) {
      if (!item.selected) {
        return;
      }

      this._selectionModel.unselect(item, this._ngSelect.multiple);

      if (this._ngSelect.hideSelected && isDefined(item.index) && this._ngSelect.multiple) {
        this._showSelected(item);
      }
    }
  }, {
    key: "findItem",
    value: function findItem(value) {
      var _this2 = this;

      var findBy;

      if (this._ngSelect.compareWith) {
        findBy = function findBy(item) {
          return _this2._ngSelect.compareWith(item.value, value);
        };
      } else if (this._ngSelect.bindValue) {
        findBy = function findBy(item) {
          return !item.children && _this2.resolveNested(item.value, _this2._ngSelect.bindValue) === value;
        };
      } else {
        findBy = function findBy(item) {
          return item.value === value || !item.children && item.label && item.label === _this2.resolveNested(value, _this2._ngSelect.bindLabel);
        };
      }

      return this._items.find(function (item) {
        return findBy(item);
      });
    }
  }, {
    key: "addItem",
    value: function addItem(item) {
      var option = this.mapItem(item, this._items.length);

      this._items.push(option);

      this._filteredItems.push(option);

      return option;
    }
  }, {
    key: "clearSelected",
    value: function clearSelected() {
      var keepDisabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      this._selectionModel.clear(keepDisabled);

      this._items.forEach(function (item) {
        item.selected = keepDisabled && item.selected && item.disabled;
        item.marked = false;
      });

      if (this._ngSelect.hideSelected) {
        this.resetFilteredItems();
      }
    }
  }, {
    key: "findByLabel",
    value: function findByLabel(term) {
      term = stripSpecialChars(term).toLocaleLowerCase();
      return this.filteredItems.find(function (item) {
        var label = stripSpecialChars(item.label).toLocaleLowerCase();
        return label.substr(0, term.length) === term;
      });
    }
  }, {
    key: "filter",
    value: function filter(term) {
      var _this3 = this;

      if (!term) {
        this.resetFilteredItems();
        return;
      }

      this._filteredItems = [];
      term = this._ngSelect.searchFn ? term : stripSpecialChars(term).toLocaleLowerCase();
      var match = this._ngSelect.searchFn || this._defaultSearchFn;
      var hideSelected = this._ngSelect.hideSelected;

      var _loop = function _loop() {
        var key = _Array$from[_i];
        var matchedItems = [];

        var _iterator = (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__["default"])(_this3._groups.get(key)),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;

            if (hideSelected && (item.parent && item.parent.selected || item.selected)) {
              continue;
            }

            var searchItem = _this3._ngSelect.searchFn ? item.value : item;

            if (match(term, searchItem)) {
              matchedItems.push(item);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        if (matchedItems.length > 0) {
          var _this3$_filteredItems;

          var _matchedItems$slice = matchedItems.slice(-1),
              _matchedItems$slice2 = (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_matchedItems$slice, 1),
              last = _matchedItems$slice2[0];

          if (last.parent) {
            var head = _this3._items.find(function (x) {
              return x === last.parent;
            });

            _this3._filteredItems.push(head);
          }

          (_this3$_filteredItems = _this3._filteredItems).push.apply(_this3$_filteredItems, matchedItems);
        }
      };

      for (var _i = 0, _Array$from = Array.from(this._groups.keys()); _i < _Array$from.length; _i++) {
        _loop();
      }
    }
  }, {
    key: "resetFilteredItems",
    value: function resetFilteredItems() {
      if (this._filteredItems.length === this._items.length) {
        return;
      }

      if (this._ngSelect.hideSelected && this.selectedItems.length > 0) {
        this._filteredItems = this._items.filter(function (x) {
          return !x.selected;
        });
      } else {
        this._filteredItems = this._items;
      }
    }
  }, {
    key: "unmarkItem",
    value: function unmarkItem() {
      this._markedIndex = -1;
    }
  }, {
    key: "markNextItem",
    value: function markNextItem() {
      this._stepToItem(+1);
    }
  }, {
    key: "markPreviousItem",
    value: function markPreviousItem() {
      this._stepToItem(-1);
    }
  }, {
    key: "markItem",
    value: function markItem(item) {
      this._markedIndex = this._filteredItems.indexOf(item);
    }
  }, {
    key: "markSelectedOrDefault",
    value: function markSelectedOrDefault(markDefault) {
      if (this._filteredItems.length === 0) {
        return;
      }

      var lastMarkedIndex = this._getLastMarkedIndex();

      if (lastMarkedIndex > -1) {
        this._markedIndex = lastMarkedIndex;
      } else {
        this._markedIndex = markDefault ? this.filteredItems.findIndex(function (x) {
          return !x.disabled;
        }) : -1;
      }
    }
  }, {
    key: "resolveNested",
    value: function resolveNested(option, key) {
      if (!isObject(option)) {
        return option;
      }

      if (key.indexOf('.') === -1) {
        return option[key];
      } else {
        var keys = key.split('.');
        var value = option;

        for (var i = 0, len = keys.length; i < len; ++i) {
          if (value == null) {
            return null;
          }

          value = value[keys[i]];
        }

        return value;
      }
    }
  }, {
    key: "mapItem",
    value: function mapItem(item, index) {
      var label = isDefined(item.$ngOptionLabel) ? item.$ngOptionLabel : this.resolveNested(item, this._ngSelect.bindLabel);
      var value = isDefined(item.$ngOptionValue) ? item.$ngOptionValue : item;
      return {
        index: index,
        label: isDefined(label) ? label.toString() : '',
        value: value,
        disabled: item.disabled,
        htmlId: "".concat(this._ngSelect.dropdownId, "-").concat(index)
      };
    }
  }, {
    key: "mapSelectedItems",
    value: function mapSelectedItems() {
      var _this4 = this;

      var multiple = this._ngSelect.multiple;

      var _iterator2 = (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__["default"])(this.selectedItems),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var selected = _step2.value;
          var value = this._ngSelect.bindValue ? this.resolveNested(selected.value, this._ngSelect.bindValue) : selected.value;
          var item = isDefined(value) ? this.findItem(value) : null;

          this._selectionModel.unselect(selected, multiple);

          this._selectionModel.select(item || selected, multiple, this._ngSelect.selectableGroupAsModel);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      if (this._ngSelect.hideSelected) {
        this._filteredItems = this.filteredItems.filter(function (x) {
          return _this4.selectedItems.indexOf(x) === -1;
        });
      }
    }
  }, {
    key: "_showSelected",
    value: function _showSelected(item) {
      this._filteredItems.push(item);

      if (item.parent) {
        var parent = item.parent;

        var parentExists = this._filteredItems.find(function (x) {
          return x === parent;
        });

        if (!parentExists) {
          this._filteredItems.push(parent);
        }
      } else if (item.children) {
        var _iterator3 = (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__["default"])(item.children),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var child = _step3.value;
            child.selected = false;

            this._filteredItems.push(child);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }

      this._filteredItems = (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(this._filteredItems.sort(function (a, b) {
        return a.index - b.index;
      }));
    }
  }, {
    key: "_hideSelected",
    value: function _hideSelected(item) {
      this._filteredItems = this._filteredItems.filter(function (x) {
        return x !== item;
      });

      if (item.parent) {
        var children = item.parent.children;

        if (children.every(function (x) {
          return x.selected;
        })) {
          this._filteredItems = this._filteredItems.filter(function (x) {
            return x !== item.parent;
          });
        }
      } else if (item.children) {
        this._filteredItems = this.filteredItems.filter(function (x) {
          return x.parent !== item;
        });
      }
    }
  }, {
    key: "_defaultSearchFn",
    value: function _defaultSearchFn(search, opt) {
      var label = stripSpecialChars(opt.label).toLocaleLowerCase();
      return label.indexOf(search) > -1;
    }
  }, {
    key: "_getNextItemIndex",
    value: function _getNextItemIndex(steps) {
      if (steps > 0) {
        return this._markedIndex >= this._filteredItems.length - 1 ? 0 : this._markedIndex + 1;
      }

      return this._markedIndex <= 0 ? this._filteredItems.length - 1 : this._markedIndex - 1;
    }
  }, {
    key: "_stepToItem",
    value: function _stepToItem(steps) {
      if (this._filteredItems.length === 0 || this._filteredItems.every(function (x) {
        return x.disabled;
      })) {
        return;
      }

      this._markedIndex = this._getNextItemIndex(steps);

      if (this.markedItem.disabled) {
        this._stepToItem(steps);
      }
    }
  }, {
    key: "_getLastMarkedIndex",
    value: function _getLastMarkedIndex() {
      if (this._ngSelect.hideSelected) {
        return -1;
      }

      if (this._markedIndex > -1 && this.markedItem === undefined) {
        return -1;
      }

      var selectedIndex = this._filteredItems.indexOf(this.lastSelectedItem);

      if (this.lastSelectedItem && selectedIndex < 0) {
        return -1;
      }

      return Math.max(this.markedIndex, selectedIndex);
    }
  }, {
    key: "_groupBy",
    value: function _groupBy(items, prop) {
      var _this5 = this;

      var groups = new Map();

      if (items.length === 0) {
        return groups;
      } // Check if items are already grouped by given key.


      if (Array.isArray(items[0].value[prop])) {
        var _iterator4 = (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__["default"])(items),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var item = _step4.value;
            var children = (item.value[prop] || []).map(function (x, index) {
              return _this5.mapItem(x, index);
            });
            groups.set(item, children);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }

        return groups;
      }

      var isFnKey = isFunction(this._ngSelect.groupBy);

      var keyFn = function keyFn(item) {
        var key = isFnKey ? prop(item.value) : item.value[prop];
        return isDefined(key) ? key : undefined;
      }; // Group items by key.


      var _iterator5 = (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__["default"])(items),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var _item = _step5.value;
          var key = keyFn(_item);
          var group = groups.get(key);

          if (group) {
            group.push(_item);
          } else {
            groups.set(key, [_item]);
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      return groups;
    }
  }, {
    key: "_flatten",
    value: function _flatten(groups) {
      var _this6 = this;

      var isGroupByFn = isFunction(this._ngSelect.groupBy);
      var items = [];

      var _loop2 = function _loop2() {
        var key = _Array$from2[_i2];
        var i = items.length;

        if (key === undefined) {
          var withoutGroup = groups.get(undefined) || [];
          items.push.apply(items, (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(withoutGroup.map(function (x) {
            x.index = i++;
            return x;
          })));
          return 1; // continue
        }

        var isObjectKey = isObject(key);
        var parent = {
          label: isObjectKey ? '' : String(key),
          children: undefined,
          parent: null,
          index: i++,
          disabled: !_this6._ngSelect.selectableGroup,
          htmlId: newId()
        };
        var groupKey = isGroupByFn ? _this6._ngSelect.bindLabel : _this6._ngSelect.groupBy;

        var groupValue = _this6._ngSelect.groupValue || function () {
          if (isObjectKey) {
            return key.value;
          }

          return (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, groupKey, key);
        };

        var children = groups.get(key).map(function (x) {
          x.parent = parent;
          x.children = undefined;
          x.index = i++;
          return x;
        });
        parent.children = children;
        parent.value = groupValue(key, children.map(function (x) {
          return x.value;
        }));
        items.push(parent);
        items.push.apply(items, (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(children));
      };

      for (var _i2 = 0, _Array$from2 = Array.from(groups.keys()); _i2 < _Array$from2.length; _i2++) {
        if (_loop2()) continue;
      }

      return items;
    }
  }]);

  return ItemsList;
}();

var KeyCode;

(function (KeyCode) {
  KeyCode[KeyCode["Tab"] = 9] = "Tab";
  KeyCode[KeyCode["Enter"] = 13] = "Enter";
  KeyCode[KeyCode["Esc"] = 27] = "Esc";
  KeyCode[KeyCode["Space"] = 32] = "Space";
  KeyCode[KeyCode["ArrowUp"] = 38] = "ArrowUp";
  KeyCode[KeyCode["ArrowDown"] = 40] = "ArrowDown";
  KeyCode[KeyCode["Backspace"] = 8] = "Backspace";
})(KeyCode || (KeyCode = {}));

var NgDropdownPanelService = /*#__PURE__*/function () {
  function NgDropdownPanelService() {
    (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NgDropdownPanelService);

    this._dimensions = {
      itemHeight: 0,
      panelHeight: 0,
      itemsPerViewport: 0
    };
  }

  (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(NgDropdownPanelService, [{
    key: "dimensions",
    get: function get() {
      return this._dimensions;
    }
  }, {
    key: "calculateItems",
    value: function calculateItems(scrollPos, itemsLength, buffer) {
      var d = this._dimensions;
      var scrollHeight = d.itemHeight * itemsLength;
      var scrollTop = Math.max(0, scrollPos);
      var indexByScrollTop = scrollTop / scrollHeight * itemsLength;
      var end = Math.min(itemsLength, Math.ceil(indexByScrollTop) + (d.itemsPerViewport + 1));
      var maxStartEnd = end;
      var maxStart = Math.max(0, maxStartEnd - d.itemsPerViewport);
      var start = Math.min(maxStart, Math.floor(indexByScrollTop));
      var topPadding = d.itemHeight * Math.ceil(start) - d.itemHeight * Math.min(start, buffer);
      topPadding = !isNaN(topPadding) ? topPadding : 0;
      start = !isNaN(start) ? start : -1;
      end = !isNaN(end) ? end : -1;
      start -= buffer;
      start = Math.max(0, start);
      end += buffer;
      end = Math.min(itemsLength, end);
      return {
        topPadding: topPadding,
        scrollHeight: scrollHeight,
        start: start,
        end: end
      };
    }
  }, {
    key: "setDimensions",
    value: function setDimensions(itemHeight, panelHeight) {
      var itemsPerViewport = Math.max(1, Math.floor(panelHeight / itemHeight));
      this._dimensions = {
        itemHeight: itemHeight,
        panelHeight: panelHeight,
        itemsPerViewport: itemsPerViewport
      };
    }
  }, {
    key: "getScrollTo",
    value: function getScrollTo(itemTop, itemHeight, lastScroll) {
      var panelHeight = this.dimensions.panelHeight;
      var itemBottom = itemTop + itemHeight;
      var top = lastScroll;
      var bottom = top + panelHeight;

      if (panelHeight >= itemBottom && lastScroll === itemTop) {
        return null;
      }

      if (itemBottom > bottom) {
        return top + itemBottom - bottom;
      } else if (itemTop <= top) {
        return itemTop;
      }

      return null;
    }
  }]);

  return NgDropdownPanelService;
}();

NgDropdownPanelService.ɵfac = function NgDropdownPanelService_Factory(t) {
  return new (t || NgDropdownPanelService)();
};

NgDropdownPanelService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: NgDropdownPanelService,
  factory: NgDropdownPanelService.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](NgDropdownPanelService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable
  }], function () {
    return [];
  }, null);
})();

var TOP_CSS_CLASS = 'ng-select-top';
var BOTTOM_CSS_CLASS = 'ng-select-bottom';
var SCROLL_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? rxjs__WEBPACK_IMPORTED_MODULE_7__.animationFrameScheduler : rxjs__WEBPACK_IMPORTED_MODULE_8__.asapScheduler;

var NgDropdownPanelComponent = /*#__PURE__*/function () {
  function NgDropdownPanelComponent(_renderer, _zone, _panelService, _elementRef, _document) {
    (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NgDropdownPanelComponent);

    this._renderer = _renderer;
    this._zone = _zone;
    this._panelService = _panelService;
    this._document = _document;
    this.items = [];
    this.position = 'auto';
    this.virtualScroll = false;
    this.filterValue = null;
    this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.scrollToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.outsideClick = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
    this._scrollToEndFired = false;
    this._updateScrollHeight = false;
    this._lastScrollPosition = 0;
    this._dropdown = _elementRef.nativeElement;
  }

  (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(NgDropdownPanelComponent, [{
    key: "currentPosition",
    get: function get() {
      return this._currentPosition;
    }
  }, {
    key: "itemsLength",
    get: function get() {
      return this._itemsLength;
    },
    set: function set(value) {
      if (value !== this._itemsLength) {
        this._itemsLength = value;

        this._onItemsLengthChanged();
      }
    }
  }, {
    key: "_startOffset",
    get: function get() {
      if (this.markedItem) {
        var _this$_panelService$d = this._panelService.dimensions,
            itemHeight = _this$_panelService$d.itemHeight,
            panelHeight = _this$_panelService$d.panelHeight;
        var offset = this.markedItem.index * itemHeight;
        return panelHeight > offset ? 0 : offset;
      }

      return 0;
    }
  }, {
    key: "handleMousedown",
    value: function handleMousedown($event) {
      var target = $event.target;

      if (target.tagName === 'INPUT') {
        return;
      }

      $event.preventDefault();
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      this._select = this._dropdown.parentElement;
      this._virtualPadding = this.paddingElementRef.nativeElement;
      this._scrollablePanel = this.scrollElementRef.nativeElement;
      this._contentPanel = this.contentElementRef.nativeElement;

      this._handleScroll();

      this._handleOutsideClick();

      this._appendDropdown();
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (changes.items) {
        var change = changes.items;

        this._onItemsChange(change.currentValue, change.firstChange);
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._destroy$.next();

      this._destroy$.complete();

      this._destroy$.unsubscribe();

      if (this.appendTo) {
        this._renderer.removeChild(this._dropdown.parentNode, this._dropdown);
      }
    }
  }, {
    key: "scrollTo",
    value: function scrollTo(option) {
      var startFromOption = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!option) {
        return;
      }

      var index = this.items.indexOf(option);

      if (index < 0 || index >= this.itemsLength) {
        return;
      }

      var scrollTo;

      if (this.virtualScroll) {
        var itemHeight = this._panelService.dimensions.itemHeight;
        scrollTo = this._panelService.getScrollTo(index * itemHeight, itemHeight, this._lastScrollPosition);
      } else {
        var item = this._dropdown.querySelector("#".concat(option.htmlId));

        var lastScroll = startFromOption ? item.offsetTop : this._lastScrollPosition;
        scrollTo = this._panelService.getScrollTo(item.offsetTop, item.clientHeight, lastScroll);
      }

      if (isDefined(scrollTo)) {
        this._scrollablePanel.scrollTop = scrollTo;
      }
    }
  }, {
    key: "scrollToTag",
    value: function scrollToTag() {
      var panel = this._scrollablePanel;
      panel.scrollTop = panel.scrollHeight - panel.clientHeight;
    }
  }, {
    key: "adjustPosition",
    value: function adjustPosition() {
      this._updateYPosition();
    }
  }, {
    key: "_handleDropdownPosition",
    value: function _handleDropdownPosition() {
      this._currentPosition = this._calculateCurrentPosition(this._dropdown);

      if (this._currentPosition === 'top') {
        this._renderer.addClass(this._dropdown, TOP_CSS_CLASS);

        this._renderer.removeClass(this._dropdown, BOTTOM_CSS_CLASS);

        this._renderer.addClass(this._select, TOP_CSS_CLASS);

        this._renderer.removeClass(this._select, BOTTOM_CSS_CLASS);
      } else {
        this._renderer.addClass(this._dropdown, BOTTOM_CSS_CLASS);

        this._renderer.removeClass(this._dropdown, TOP_CSS_CLASS);

        this._renderer.addClass(this._select, BOTTOM_CSS_CLASS);

        this._renderer.removeClass(this._select, TOP_CSS_CLASS);
      }

      if (this.appendTo) {
        this._updateYPosition();
      }

      this._dropdown.style.opacity = '1';
    }
  }, {
    key: "_handleScroll",
    value: function _handleScroll() {
      var _this7 = this;

      this._zone.runOutsideAngular(function () {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.fromEvent)(_this7.scrollElementRef.nativeElement, 'scroll').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(_this7._destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.auditTime)(0, SCROLL_SCHEDULER)).subscribe(function (e) {
          var path = e.path || e.composedPath && e.composedPath();
          var scrollTop = !path || path.length === 0 ? e.target.scrollTop : path[0].scrollTop;

          _this7._onContentScrolled(scrollTop);
        });
      });
    }
  }, {
    key: "_handleOutsideClick",
    value: function _handleOutsideClick() {
      var _this8 = this;

      if (!this._document) {
        return;
      }

      this._zone.runOutsideAngular(function () {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.fromEvent)(_this8._document, 'touchstart', {
          capture: true
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.fromEvent)(_this8._document, 'mousedown', {
          capture: true
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(_this8._destroy$)).subscribe(function ($event) {
          return _this8._checkToClose($event);
        });
      });
    }
  }, {
    key: "_checkToClose",
    value: function _checkToClose($event) {
      var _this9 = this;

      if (this._select.contains($event.target) || this._dropdown.contains($event.target)) {
        return;
      }

      var path = $event.path || $event.composedPath && $event.composedPath();

      if ($event.target && $event.target.shadowRoot && path && path[0] && this._select.contains(path[0])) {
        return;
      }

      this._zone.run(function () {
        return _this9.outsideClick.emit();
      });
    }
  }, {
    key: "_onItemsChange",
    value: function _onItemsChange(items, firstChange) {
      this.items = items || [];
      this._scrollToEndFired = false;
      this.itemsLength = items.length;

      if (this.virtualScroll) {
        this._updateItemsRange(firstChange);
      } else {
        this._setVirtualHeight();

        this._updateItems(firstChange);
      }
    }
  }, {
    key: "_updateItems",
    value: function _updateItems(firstChange) {
      var _this10 = this;

      this.update.emit(this.items);

      if (firstChange === false) {
        return;
      }

      this._zone.runOutsideAngular(function () {
        Promise.resolve().then(function () {
          var panelHeight = _this10._scrollablePanel.clientHeight;

          _this10._panelService.setDimensions(0, panelHeight);

          _this10._handleDropdownPosition();

          _this10.scrollTo(_this10.markedItem, firstChange);
        });
      });
    }
  }, {
    key: "_updateItemsRange",
    value: function _updateItemsRange(firstChange) {
      var _this11 = this;

      this._zone.runOutsideAngular(function () {
        _this11._measureDimensions().then(function () {
          if (firstChange) {
            _this11._renderItemsRange(_this11._startOffset);

            _this11._handleDropdownPosition();
          } else {
            _this11._renderItemsRange();
          }
        });
      });
    }
  }, {
    key: "_onContentScrolled",
    value: function _onContentScrolled(scrollTop) {
      if (this.virtualScroll) {
        this._renderItemsRange(scrollTop);
      }

      this._lastScrollPosition = scrollTop;

      this._fireScrollToEnd(scrollTop);
    }
  }, {
    key: "_updateVirtualHeight",
    value: function _updateVirtualHeight(height) {
      if (this._updateScrollHeight) {
        this._virtualPadding.style.height = "".concat(height, "px");
        this._updateScrollHeight = false;
      }
    }
  }, {
    key: "_setVirtualHeight",
    value: function _setVirtualHeight() {
      if (!this._virtualPadding) {
        return;
      }

      this._virtualPadding.style.height = "0px";
    }
  }, {
    key: "_onItemsLengthChanged",
    value: function _onItemsLengthChanged() {
      this._updateScrollHeight = true;
    }
  }, {
    key: "_renderItemsRange",
    value: function _renderItemsRange() {
      var _this12 = this;

      var scrollTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (scrollTop && this._lastScrollPosition === scrollTop) {
        return;
      }

      scrollTop = scrollTop || this._scrollablePanel.scrollTop;

      var range = this._panelService.calculateItems(scrollTop, this.itemsLength, this.bufferAmount);

      this._updateVirtualHeight(range.scrollHeight);

      this._contentPanel.style.transform = "translateY(".concat(range.topPadding, "px)");

      this._zone.run(function () {
        _this12.update.emit(_this12.items.slice(range.start, range.end));

        _this12.scroll.emit({
          start: range.start,
          end: range.end
        });
      });

      if (isDefined(scrollTop) && this._lastScrollPosition === 0) {
        this._scrollablePanel.scrollTop = scrollTop;
        this._lastScrollPosition = scrollTop;
      }
    }
  }, {
    key: "_measureDimensions",
    value: function _measureDimensions() {
      var _this13 = this;

      if (this._panelService.dimensions.itemHeight > 0 || this.itemsLength === 0) {
        return Promise.resolve(this._panelService.dimensions);
      }

      var _this$items = (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(this.items, 1),
          first = _this$items[0];

      this.update.emit([first]);
      return Promise.resolve().then(function () {
        var option = _this13._dropdown.querySelector("#".concat(first.htmlId));

        var optionHeight = option.clientHeight;
        _this13._virtualPadding.style.height = "".concat(optionHeight * _this13.itemsLength, "px");
        var panelHeight = _this13._scrollablePanel.clientHeight;

        _this13._panelService.setDimensions(optionHeight, panelHeight);

        return _this13._panelService.dimensions;
      });
    }
  }, {
    key: "_fireScrollToEnd",
    value: function _fireScrollToEnd(scrollTop) {
      var _this14 = this;

      if (this._scrollToEndFired || scrollTop === 0) {
        return;
      }

      var padding = this.virtualScroll ? this._virtualPadding : this._contentPanel;

      if (scrollTop + this._dropdown.clientHeight >= padding.clientHeight) {
        this._zone.run(function () {
          return _this14.scrollToEnd.emit();
        });

        this._scrollToEndFired = true;
      }
    }
  }, {
    key: "_calculateCurrentPosition",
    value: function _calculateCurrentPosition(dropdownEl) {
      if (this.position !== 'auto') {
        return this.position;
      }

      var selectRect = this._select.getBoundingClientRect();

      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      var offsetTop = selectRect.top + window.pageYOffset;
      var height = selectRect.height;
      var dropdownHeight = dropdownEl.getBoundingClientRect().height;

      if (offsetTop + height + dropdownHeight > scrollTop + document.documentElement.clientHeight) {
        return 'top';
      } else {
        return 'bottom';
      }
    }
  }, {
    key: "_appendDropdown",
    value: function _appendDropdown() {
      if (!this.appendTo) {
        return;
      }

      this._parent = document.querySelector(this.appendTo);

      if (!this._parent) {
        throw new Error("appendTo selector ".concat(this.appendTo, " did not found any parent element"));
      }

      this._updateXPosition();

      this._parent.appendChild(this._dropdown);
    }
  }, {
    key: "_updateXPosition",
    value: function _updateXPosition() {
      var select = this._select.getBoundingClientRect();

      var parent = this._parent.getBoundingClientRect();

      var offsetLeft = select.left - parent.left;
      this._dropdown.style.left = offsetLeft + 'px';
      this._dropdown.style.width = select.width + 'px';
      this._dropdown.style.minWidth = select.width + 'px';
    }
  }, {
    key: "_updateYPosition",
    value: function _updateYPosition() {
      var select = this._select.getBoundingClientRect();

      var parent = this._parent.getBoundingClientRect();

      var delta = select.height;

      if (this._currentPosition === 'top') {
        var offsetBottom = parent.bottom - select.bottom;
        this._dropdown.style.bottom = offsetBottom + delta + 'px';
        this._dropdown.style.top = 'auto';
      } else if (this._currentPosition === 'bottom') {
        var offsetTop = select.top - parent.top;
        this._dropdown.style.top = offsetTop + delta + 'px';
        this._dropdown.style.bottom = 'auto';
      }
    }
  }]);

  return NgDropdownPanelComponent;
}();

NgDropdownPanelComponent.ɵfac = function NgDropdownPanelComponent_Factory(t) {
  return new (t || NgDropdownPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](NgDropdownPanelService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_14__.DOCUMENT, 8));
};

NgDropdownPanelComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: NgDropdownPanelComponent,
  selectors: [["ng-dropdown-panel"]],
  viewQuery: function NgDropdownPanelComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c1, 7, _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c2, 7, _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.contentElementRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.scrollElementRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paddingElementRef = _t.first);
    }
  },
  hostBindings: function NgDropdownPanelComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("mousedown", function NgDropdownPanelComponent_mousedown_HostBindingHandler($event) {
        return ctx.handleMousedown($event);
      });
    }
  },
  inputs: {
    items: "items",
    position: "position",
    virtualScroll: "virtualScroll",
    filterValue: "filterValue",
    markedItem: "markedItem",
    appendTo: "appendTo",
    bufferAmount: "bufferAmount",
    headerTemplate: "headerTemplate",
    footerTemplate: "footerTemplate"
  },
  outputs: {
    update: "update",
    scroll: "scroll",
    scrollToEnd: "scrollToEnd",
    outsideClick: "outsideClick"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c4,
  decls: 9,
  vars: 6,
  consts: [["class", "ng-dropdown-header", 4, "ngIf"], [1, "ng-dropdown-panel-items", "scroll-host"], ["scroll", ""], ["padding", ""], ["content", ""], ["class", "ng-dropdown-footer", 4, "ngIf"], [1, "ng-dropdown-header"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ng-dropdown-footer"]],
  template: function NgDropdownPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, NgDropdownPanelComponent_div_0_Template, 2, 4, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "div", null, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", null, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojection"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, NgDropdownPanelComponent_div_8_Template, 2, 4, "div", 5);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.headerTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("total-padding", ctx.virtualScroll);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("scrollable-content", ctx.virtualScroll && ctx.items.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.footerTemplate);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});

NgDropdownPanelComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Renderer2
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone
  }, {
    type: NgDropdownPanelService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.DOCUMENT]
    }]
  }];
};

NgDropdownPanelComponent.propDecorators = {
  items: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  markedItem: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  position: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  appendTo: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  bufferAmount: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  virtualScroll: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  headerTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  footerTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  filterValue: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  update: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output
  }],
  scroll: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output
  }],
  scrollToEnd: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output
  }],
  outsideClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output
  }],
  contentElementRef: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
    args: ['content', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef,
      static: true
    }]
  }],
  scrollElementRef: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
    args: ['scroll', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef,
      static: true
    }]
  }],
  paddingElementRef: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
    args: ['padding', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef,
      static: true
    }]
  }],
  handleMousedown: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.HostListener,
    args: ['mousedown', ['$event']]
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](NgDropdownPanelComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewEncapsulation.None,
      selector: 'ng-dropdown-panel',
      template: "\n        <div *ngIf=\"headerTemplate\" class=\"ng-dropdown-header\">\n            <ng-container [ngTemplateOutlet]=\"headerTemplate\" [ngTemplateOutletContext]=\"{ searchTerm: filterValue }\"></ng-container>\n        </div>\n        <div #scroll class=\"ng-dropdown-panel-items scroll-host\">\n            <div #padding [class.total-padding]=\"virtualScroll\"></div>\n            <div #content [class.scrollable-content]=\"virtualScroll && items.length\">\n                <ng-content></ng-content>\n            </div>\n        </div>\n        <div *ngIf=\"footerTemplate\" class=\"ng-dropdown-footer\">\n            <ng-container [ngTemplateOutlet]=\"footerTemplate\" [ngTemplateOutletContext]=\"{ searchTerm: filterValue }\"></ng-container>\n        </div>\n    "
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone
    }, {
      type: NgDropdownPanelService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.DOCUMENT]
      }]
    }];
  }, {
    items: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    virtualScroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    filterValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    update: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output
    }],
    scroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output
    }],
    scrollToEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output
    }],
    outsideClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output
    }],
    handleMousedown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.HostListener,
      args: ['mousedown', ['$event']]
    }],
    markedItem: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    appendTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    bufferAmount: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    headerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    footerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    contentElementRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
      args: ['content', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef,
        static: true
      }]
    }],
    scrollElementRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
      args: ['scroll', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef,
        static: true
      }]
    }],
    paddingElementRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
      args: ['padding', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef,
        static: true
      }]
    }]
  });
})();

var NgOptionComponent = /*#__PURE__*/function () {
  function NgOptionComponent(elementRef) {
    (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NgOptionComponent);

    this.elementRef = elementRef;
    this.stateChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
    this._disabled = false;
  }

  (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(NgOptionComponent, [{
    key: "disabled",
    get: function get() {
      return this._disabled;
    },
    set: function set(value) {
      this._disabled = this._isDisabled(value);
    }
  }, {
    key: "label",
    get: function get() {
      return (this.elementRef.nativeElement.textContent || '').trim();
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (changes.disabled) {
        this.stateChange$.next({
          value: this.value,
          disabled: this._disabled
        });
      }
    }
  }, {
    key: "ngAfterViewChecked",
    value: function ngAfterViewChecked() {
      if (this.label !== this._previousLabel) {
        this._previousLabel = this.label;
        this.stateChange$.next({
          value: this.value,
          disabled: this._disabled,
          label: this.elementRef.nativeElement.innerHTML
        });
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.stateChange$.complete();
    }
  }, {
    key: "_isDisabled",
    value: function _isDisabled(value) {
      return value != null && "".concat(value) !== 'false';
    }
  }]);

  return NgOptionComponent;
}();

NgOptionComponent.ɵfac = function NgOptionComponent_Factory(t) {
  return new (t || NgOptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef));
};

NgOptionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: NgOptionComponent,
  selectors: [["ng-option"]],
  inputs: {
    disabled: "disabled",
    value: "value"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c4,
  decls: 1,
  vars: 0,
  template: function NgOptionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojection"](0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});

NgOptionComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef
  }];
};

NgOptionComponent.propDecorators = {
  value: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](NgOptionComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component,
    args: [{
      selector: 'ng-option',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>"
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef
    }];
  }, {
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }]
  });
})();

var NgSelectConfig = /*#__PURE__*/(0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(function NgSelectConfig() {
  (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NgSelectConfig);

  this.notFoundText = 'No items found';
  this.typeToSearchText = 'Type to search';
  this.addTagText = 'Add item';
  this.loadingText = 'Loading...';
  this.clearAllText = 'Clear all';
  this.disableVirtualScroll = true;
  this.openOnEnter = true;
  this.appearance = 'underline';
});

NgSelectConfig.ɵfac = function NgSelectConfig_Factory(t) {
  return new (t || NgSelectConfig)();
};

NgSelectConfig.ɵprov = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"])({
  factory: function NgSelectConfig_Factory() {
    return new NgSelectConfig();
  },
  token: NgSelectConfig,
  providedIn: "root"
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](NgSelectConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();

var SELECTION_MODEL_FACTORY = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.InjectionToken('ng-select-selection-model');

var NgSelectComponent = /*#__PURE__*/function () {
  function NgSelectComponent(classes, autoFocus, config, newSelectionModel, _elementRef, _cd, _console) {
    var _this15 = this;

    (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NgSelectComponent);

    this.classes = classes;
    this.autoFocus = autoFocus;
    this._cd = _cd;
    this._console = _console;
    this.markFirst = true;
    this.dropdownPosition = 'auto';
    this.loading = false;
    this.closeOnSelect = true;
    this.hideSelected = false;
    this.selectOnTab = false;
    this.bufferAmount = 4;
    this.selectableGroup = false;
    this.selectableGroupAsModel = true;
    this.searchFn = null;
    this.trackByFn = null;
    this.clearOnBackspace = true;
    this.labelForId = null;
    this.inputAttrs = {};
    this.readonly = false;
    this.searchWhileComposing = true;
    this.minTermLength = 0;
    this.editableSearchTerm = false;

    this.keyDownFn = function (_) {
      return true;
    };

    this.multiple = false;
    this.addTag = false;
    this.searchable = true;
    this.clearable = true;
    this.isOpen = false; // output events

    this.blurEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.focusEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.openEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.closeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.searchEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.clearEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.addEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.removeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.scrollToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.viewPortItems = [];
    this.searchTerm = null;
    this.dropdownId = newId();
    this.escapeHTML = true;
    this.useDefaultClass = true;
    this._items = [];
    this._defaultLabel = 'label';
    this._pressedKeys = [];
    this._isComposing = false;
    this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
    this._keyPress$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();

    this._onChange = function (_) {};

    this._onTouched = function () {};

    this.clearItem = function (item) {
      var option = _this15.selectedItems.find(function (x) {
        return x.value === item;
      });

      _this15.unselect(option);
    };

    this.trackByOption = function (_, item) {
      if (_this15.trackByFn) {
        return _this15.trackByFn(item.value);
      }

      return item;
    };

    this._mergeGlobalConfig(config);

    this.itemsList = new ItemsList(this, newSelectionModel());
    this.element = _elementRef.nativeElement;
  }

  (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(NgSelectComponent, [{
    key: "items",
    get: function get() {
      return this._items;
    },
    set: function set(value) {
      this._itemsAreUsed = true;
      this._items = value;
    }
  }, {
    key: "compareWith",
    get: function get() {
      return this._compareWith;
    },
    set: function set(fn) {
      if (fn !== undefined && fn !== null && !isFunction(fn)) {
        throw Error('`compareWith` must be a function.');
      }

      this._compareWith = fn;
    }
  }, {
    key: "clearSearchOnAdd",
    get: function get() {
      return isDefined(this._clearSearchOnAdd) ? this._clearSearchOnAdd : this.closeOnSelect;
    },
    set: function set(value) {
      this._clearSearchOnAdd = value;
    }
  }, {
    key: "disabled",
    get: function get() {
      return this.readonly || this._disabled;
    }
  }, {
    key: "filtered",
    get: function get() {
      return !!this.searchTerm && this.searchable || this._isComposing;
    }
  }, {
    key: "_editableSearchTerm",
    get: function get() {
      return this.editableSearchTerm && !this.multiple;
    }
  }, {
    key: "selectedItems",
    get: function get() {
      return this.itemsList.selectedItems;
    }
  }, {
    key: "selectedValues",
    get: function get() {
      return this.selectedItems.map(function (x) {
        return x.value;
      });
    }
  }, {
    key: "hasValue",
    get: function get() {
      return this.selectedItems.length > 0;
    }
  }, {
    key: "currentPanelPosition",
    get: function get() {
      if (this.dropdownPanel) {
        return this.dropdownPanel.currentPosition;
      }

      return undefined;
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      this._handleKeyPresses();

      this._setInputAttributes();
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (changes.multiple) {
        this.itemsList.clearSelected();
      }

      if (changes.items) {
        this._setItems(changes.items.currentValue || []);
      }

      if (changes.isOpen) {
        this._manualOpen = isDefined(changes.isOpen.currentValue);
      }
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      if (!this._itemsAreUsed) {
        this.escapeHTML = false;

        this._setItemsFromNgOptions();
      }

      if (isDefined(this.autoFocus)) {
        this.focus();
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._destroy$.next();

      this._destroy$.complete();
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown($event) {
      var keyCode = KeyCode[$event.which];

      if (keyCode) {
        if (this.keyDownFn($event) === false) {
          return;
        }

        this.handleKeyCode($event);
      } else if ($event.key && $event.key.length === 1) {
        this._keyPress$.next($event.key.toLocaleLowerCase());
      }
    }
  }, {
    key: "handleKeyCode",
    value: function handleKeyCode($event) {
      switch ($event.which) {
        case KeyCode.ArrowDown:
          this._handleArrowDown($event);

          break;

        case KeyCode.ArrowUp:
          this._handleArrowUp($event);

          break;

        case KeyCode.Space:
          this._handleSpace($event);

          break;

        case KeyCode.Enter:
          this._handleEnter($event);

          break;

        case KeyCode.Tab:
          this._handleTab($event);

          break;

        case KeyCode.Esc:
          this.close();
          $event.preventDefault();
          break;

        case KeyCode.Backspace:
          this._handleBackspace();

          break;
      }
    }
  }, {
    key: "handleMousedown",
    value: function handleMousedown($event) {
      var target = $event.target;

      if (target.tagName !== 'INPUT') {
        $event.preventDefault();
      }

      if (target.classList.contains('ng-clear-wrapper')) {
        this.handleClearClick();
        return;
      }

      if (target.classList.contains('ng-arrow-wrapper')) {
        this.handleArrowClick();
        return;
      }

      if (target.classList.contains('ng-value-icon')) {
        return;
      }

      if (!this.focused) {
        this.focus();
      }

      if (this.searchable) {
        this.open();
      } else {
        this.toggle();
      }
    }
  }, {
    key: "handleArrowClick",
    value: function handleArrowClick() {
      if (this.isOpen) {
        this.close();
      } else {
        this.open();
      }
    }
  }, {
    key: "handleClearClick",
    value: function handleClearClick() {
      if (this.hasValue) {
        this.itemsList.clearSelected(true);

        this._updateNgModel();
      }

      this._clearSearch();

      this.focus();
      this.clearEvent.emit();

      this._onSelectionChanged();
    }
  }, {
    key: "clearModel",
    value: function clearModel() {
      if (!this.clearable) {
        return;
      }

      this.itemsList.clearSelected();

      this._updateNgModel();
    }
  }, {
    key: "writeValue",
    value: function writeValue(value) {
      this.itemsList.clearSelected();

      this._handleWriteValue(value);

      this._cd.markForCheck();
    }
  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this._onChange = fn;
    }
  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this._onTouched = fn;
    }
  }, {
    key: "setDisabledState",
    value: function setDisabledState(state) {
      this._disabled = state;

      this._cd.markForCheck();
    }
  }, {
    key: "toggle",
    value: function toggle() {
      if (!this.isOpen) {
        this.open();
      } else {
        this.close();
      }
    }
  }, {
    key: "open",
    value: function open() {
      if (this.disabled || this.isOpen || this.itemsList.maxItemsSelected || this._manualOpen) {
        return;
      }

      if (!this._isTypeahead && !this.addTag && this.itemsList.noItemsToSelect) {
        return;
      }

      this.isOpen = true;
      this.itemsList.markSelectedOrDefault(this.markFirst);
      this.openEvent.emit();

      if (!this.searchTerm) {
        this.focus();
      }

      this.detectChanges();
    }
  }, {
    key: "close",
    value: function close() {
      if (!this.isOpen || this._manualOpen) {
        return;
      }

      this.isOpen = false;
      this._isComposing = false;

      if (!this._editableSearchTerm) {
        this._clearSearch();
      } else {
        this.itemsList.resetFilteredItems();
      }

      this.itemsList.unmarkItem();

      this._onTouched();

      this.closeEvent.emit();

      this._cd.markForCheck();
    }
  }, {
    key: "toggleItem",
    value: function toggleItem(item) {
      if (!item || item.disabled || this.disabled) {
        return;
      }

      if (this.multiple && item.selected) {
        this.unselect(item);
      } else {
        this.select(item);
      }

      if (this._editableSearchTerm) {
        this._setSearchTermFromItems();
      }

      this._onSelectionChanged();
    }
  }, {
    key: "select",
    value: function select(item) {
      if (!item.selected) {
        this.itemsList.select(item);

        if (this.clearSearchOnAdd && !this._editableSearchTerm) {
          this._clearSearch();
        }

        this._updateNgModel();

        if (this.multiple) {
          this.addEvent.emit(item.value);
        }
      }

      if (this.closeOnSelect || this.itemsList.noItemsToSelect) {
        this.close();
      }
    }
  }, {
    key: "focus",
    value: function focus() {
      this.searchInput.nativeElement.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.searchInput.nativeElement.blur();
    }
  }, {
    key: "unselect",
    value: function unselect(item) {
      if (!item) {
        return;
      }

      this.itemsList.unselect(item);
      this.focus();

      this._updateNgModel();

      this.removeEvent.emit(item);
    }
  }, {
    key: "selectTag",
    value: function selectTag() {
      var _this16 = this;

      var tag;

      if (isFunction(this.addTag)) {
        tag = this.addTag(this.searchTerm);
      } else {
        tag = this._primitive ? this.searchTerm : (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.bindLabel, this.searchTerm);
      }

      var handleTag = function handleTag(item) {
        return _this16._isTypeahead || !_this16.isOpen ? _this16.itemsList.mapItem(item, null) : _this16.itemsList.addItem(item);
      };

      if (isPromise(tag)) {
        tag.then(function (item) {
          return _this16.select(handleTag(item));
        }).catch(function () {});
      } else if (tag) {
        this.select(handleTag(tag));
      }
    }
  }, {
    key: "showClear",
    value: function showClear() {
      return this.clearable && (this.hasValue || this.searchTerm) && !this.disabled;
    }
  }, {
    key: "showAddTag",
    get: function get() {
      if (!this._validTerm) {
        return false;
      }

      var term = this.searchTerm.toLowerCase().trim();
      return this.addTag && !this.itemsList.filteredItems.some(function (x) {
        return x.label.toLowerCase() === term;
      }) && (!this.hideSelected && this.isOpen || !this.selectedItems.some(function (x) {
        return x.label.toLowerCase() === term;
      })) && !this.loading;
    }
  }, {
    key: "showNoItemsFound",
    value: function showNoItemsFound() {
      var empty = this.itemsList.filteredItems.length === 0;
      return (empty && !this._isTypeahead && !this.loading || empty && this._isTypeahead && this._validTerm && !this.loading) && !this.showAddTag;
    }
  }, {
    key: "showTypeToSearch",
    value: function showTypeToSearch() {
      var empty = this.itemsList.filteredItems.length === 0;
      return empty && this._isTypeahead && !this._validTerm && !this.loading;
    }
  }, {
    key: "onCompositionStart",
    value: function onCompositionStart() {
      this._isComposing = true;
    }
  }, {
    key: "onCompositionEnd",
    value: function onCompositionEnd(term) {
      this._isComposing = false;

      if (this.searchWhileComposing) {
        return;
      }

      this.filter(term);
    }
  }, {
    key: "filter",
    value: function filter(term) {
      if (this._isComposing && !this.searchWhileComposing) {
        return;
      }

      this.searchTerm = term;

      if (this._isTypeahead && (this._validTerm || this.minTermLength === 0)) {
        this.typeahead.next(term);
      }

      if (!this._isTypeahead) {
        this.itemsList.filter(this.searchTerm);

        if (this.isOpen) {
          this.itemsList.markSelectedOrDefault(this.markFirst);
        }
      }

      this.searchEvent.emit({
        term: term,
        items: this.itemsList.filteredItems.map(function (x) {
          return x.value;
        })
      });
      this.open();
    }
  }, {
    key: "onInputFocus",
    value: function onInputFocus($event) {
      if (this.focused) {
        return;
      }

      if (this._editableSearchTerm) {
        this._setSearchTermFromItems();
      }

      this.element.classList.add('ng-select-focused');
      this.focusEvent.emit($event);
      this.focused = true;
    }
  }, {
    key: "onInputBlur",
    value: function onInputBlur($event) {
      this.element.classList.remove('ng-select-focused');
      this.blurEvent.emit($event);

      if (!this.isOpen && !this.disabled) {
        this._onTouched();
      }

      if (this._editableSearchTerm) {
        this._setSearchTermFromItems();
      }

      this.focused = false;
    }
  }, {
    key: "onItemHover",
    value: function onItemHover(item) {
      if (item.disabled) {
        return;
      }

      this.itemsList.markItem(item);
    }
  }, {
    key: "detectChanges",
    value: function detectChanges() {
      if (!this._cd.destroyed) {
        this._cd.detectChanges();
      }
    }
  }, {
    key: "_setSearchTermFromItems",
    value: function _setSearchTermFromItems() {
      var selected = this.selectedItems && this.selectedItems[0];
      this.searchTerm = selected && selected.label || null;
    }
  }, {
    key: "_setItems",
    value: function _setItems(items) {
      var firstItem = items[0];
      this.bindLabel = this.bindLabel || this._defaultLabel;
      this._primitive = isDefined(firstItem) ? !isObject(firstItem) : this._primitive || this.bindLabel === this._defaultLabel;
      this.itemsList.setItems(items);

      if (items.length > 0 && this.hasValue) {
        this.itemsList.mapSelectedItems();
      }

      if (this.isOpen && isDefined(this.searchTerm) && !this._isTypeahead) {
        this.itemsList.filter(this.searchTerm);
      }

      if (this._isTypeahead || this.isOpen) {
        this.itemsList.markSelectedOrDefault(this.markFirst);
      }
    }
  }, {
    key: "_setItemsFromNgOptions",
    value: function _setItemsFromNgOptions() {
      var _this17 = this;

      var mapNgOptions = function mapNgOptions(options) {
        _this17.items = options.map(function (option) {
          return {
            $ngOptionValue: option.value,
            $ngOptionLabel: option.elementRef.nativeElement.innerHTML,
            disabled: option.disabled
          };
        });

        _this17.itemsList.setItems(_this17.items);

        if (_this17.hasValue) {
          _this17.itemsList.mapSelectedItems();
        }

        _this17.detectChanges();
      };

      var handleOptionChange = function handleOptionChange() {
        var changedOrDestroyed = (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.merge)(_this17.ngOptions.changes, _this17._destroy$);
        rxjs__WEBPACK_IMPORTED_MODULE_13__.merge.apply(void 0, (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_this17.ngOptions.map(function (option) {
          return option.stateChange$;
        }))).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(changedOrDestroyed)).subscribe(function (option) {
          var item = _this17.itemsList.findItem(option.value);

          item.disabled = option.disabled;
          item.label = option.label || item.label;

          _this17._cd.detectChanges();
        });
      };

      this.ngOptions.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.startWith)(this.ngOptions), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this._destroy$)).subscribe(function (options) {
        _this17.bindLabel = _this17._defaultLabel;
        mapNgOptions(options);
        handleOptionChange();
      });
    }
  }, {
    key: "_isValidWriteValue",
    value: function _isValidWriteValue(value) {
      var _this18 = this;

      if (!isDefined(value) || this.multiple && value === '' || Array.isArray(value) && value.length === 0) {
        return false;
      }

      var validateBinding = function validateBinding(item) {
        if (!isDefined(_this18.compareWith) && isObject(item) && _this18.bindValue) {
          _this18._console.warn("Setting object(".concat(JSON.stringify(item), ") as your model with bindValue is not allowed unless [compareWith] is used."));

          return false;
        }

        return true;
      };

      if (this.multiple) {
        if (!Array.isArray(value)) {
          this._console.warn('Multiple select ngModel should be array.');

          return false;
        }

        return value.every(function (item) {
          return validateBinding(item);
        });
      } else {
        return validateBinding(value);
      }
    }
  }, {
    key: "_handleWriteValue",
    value: function _handleWriteValue(ngModel) {
      var _this19 = this;

      if (!this._isValidWriteValue(ngModel)) {
        return;
      }

      var select = function select(val) {
        var item = _this19.itemsList.findItem(val);

        if (item) {
          _this19.itemsList.select(item);
        } else {
          var isValObject = isObject(val);
          var isPrimitive = !isValObject && !_this19.bindValue;

          if (isValObject || isPrimitive) {
            _this19.itemsList.select(_this19.itemsList.mapItem(val, null));
          } else if (_this19.bindValue) {
            item = (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])((0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this19.bindLabel, null), _this19.bindValue, val);

            _this19.itemsList.select(_this19.itemsList.mapItem(item, null));
          }
        }
      };

      if (this.multiple) {
        ngModel.forEach(function (item) {
          return select(item);
        });
      } else {
        select(ngModel);
      }
    }
  }, {
    key: "_handleKeyPresses",
    value: function _handleKeyPresses() {
      var _this20 = this;

      if (this.searchable) {
        return;
      }

      this._keyPress$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this._destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.tap)(function (letter) {
        return _this20._pressedKeys.push(letter);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.debounceTime)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.filter)(function () {
        return _this20._pressedKeys.length > 0;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.map)(function () {
        return _this20._pressedKeys.join('');
      })).subscribe(function (term) {
        var item = _this20.itemsList.findByLabel(term);

        if (item) {
          if (_this20.isOpen) {
            _this20.itemsList.markItem(item);

            _this20._scrollToMarked();

            _this20._cd.markForCheck();
          } else {
            _this20.select(item);
          }
        }

        _this20._pressedKeys = [];
      });
    }
  }, {
    key: "_setInputAttributes",
    value: function _setInputAttributes() {
      var input = this.searchInput.nativeElement;
      var attributes = Object.assign({
        type: 'text',
        autocorrect: 'off',
        autocapitalize: 'off',
        autocomplete: this.labelForId ? 'off' : this.dropdownId
      }, this.inputAttrs);

      for (var _i3 = 0, _Object$keys = Object.keys(attributes); _i3 < _Object$keys.length; _i3++) {
        var key = _Object$keys[_i3];
        input.setAttribute(key, attributes[key]);
      }
    }
  }, {
    key: "_updateNgModel",
    value: function _updateNgModel() {
      var model = [];

      var _iterator6 = (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__["default"])(this.selectedItems),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var item = _step6.value;

          if (this.bindValue) {
            var value = null;

            if (item.children) {
              var groupKey = this.groupValue ? this.bindValue : this.groupBy;
              value = item.value[groupKey || this.groupBy];
            } else {
              value = this.itemsList.resolveNested(item.value, this.bindValue);
            }

            model.push(value);
          } else {
            model.push(item.value);
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }

      var selected = this.selectedItems.map(function (x) {
        return x.value;
      });

      if (this.multiple) {
        this._onChange(model);

        this.changeEvent.emit(selected);
      } else {
        this._onChange(isDefined(model[0]) ? model[0] : null);

        this.changeEvent.emit(selected[0]);
      }

      this._cd.markForCheck();
    }
  }, {
    key: "_clearSearch",
    value: function _clearSearch() {
      if (!this.searchTerm) {
        return;
      }

      this._changeSearch(null);

      this.itemsList.resetFilteredItems();
    }
  }, {
    key: "_changeSearch",
    value: function _changeSearch(searchTerm) {
      this.searchTerm = searchTerm;

      if (this._isTypeahead) {
        this.typeahead.next(searchTerm);
      }
    }
  }, {
    key: "_scrollToMarked",
    value: function _scrollToMarked() {
      if (!this.isOpen || !this.dropdownPanel) {
        return;
      }

      this.dropdownPanel.scrollTo(this.itemsList.markedItem);
    }
  }, {
    key: "_scrollToTag",
    value: function _scrollToTag() {
      if (!this.isOpen || !this.dropdownPanel) {
        return;
      }

      this.dropdownPanel.scrollToTag();
    }
  }, {
    key: "_onSelectionChanged",
    value: function _onSelectionChanged() {
      if (this.isOpen && this.multiple && this.appendTo) {
        // Make sure items are rendered.
        this._cd.detectChanges();

        this.dropdownPanel.adjustPosition();
      }
    }
  }, {
    key: "_handleTab",
    value: function _handleTab($event) {
      if (this.isOpen === false && !this.addTag) {
        return;
      }

      if (this.selectOnTab) {
        if (this.itemsList.markedItem) {
          this.toggleItem(this.itemsList.markedItem);
          $event.preventDefault();
        } else if (this.showAddTag) {
          this.selectTag();
          $event.preventDefault();
        } else {
          this.close();
        }
      } else {
        this.close();
      }
    }
  }, {
    key: "_handleEnter",
    value: function _handleEnter($event) {
      if (this.isOpen || this._manualOpen) {
        if (this.itemsList.markedItem) {
          this.toggleItem(this.itemsList.markedItem);
        } else if (this.showAddTag) {
          this.selectTag();
        }
      } else if (this.openOnEnter) {
        this.open();
      } else {
        return;
      }

      $event.preventDefault();
    }
  }, {
    key: "_handleSpace",
    value: function _handleSpace($event) {
      if (this.isOpen || this._manualOpen) {
        return;
      }

      this.open();
      $event.preventDefault();
    }
  }, {
    key: "_handleArrowDown",
    value: function _handleArrowDown($event) {
      if (this._nextItemIsTag(+1)) {
        this.itemsList.unmarkItem();

        this._scrollToTag();
      } else {
        this.itemsList.markNextItem();

        this._scrollToMarked();
      }

      this.open();
      $event.preventDefault();
    }
  }, {
    key: "_handleArrowUp",
    value: function _handleArrowUp($event) {
      if (!this.isOpen) {
        return;
      }

      if (this._nextItemIsTag(-1)) {
        this.itemsList.unmarkItem();

        this._scrollToTag();
      } else {
        this.itemsList.markPreviousItem();

        this._scrollToMarked();
      }

      $event.preventDefault();
    }
  }, {
    key: "_nextItemIsTag",
    value: function _nextItemIsTag(nextStep) {
      var nextIndex = this.itemsList.markedIndex + nextStep;
      return this.addTag && this.searchTerm && this.itemsList.markedItem && (nextIndex < 0 || nextIndex === this.itemsList.filteredItems.length);
    }
  }, {
    key: "_handleBackspace",
    value: function _handleBackspace() {
      if (this.searchTerm || !this.clearable || !this.clearOnBackspace || !this.hasValue) {
        return;
      }

      if (this.multiple) {
        this.unselect(this.itemsList.lastSelectedItem);
      } else {
        this.clearModel();
      }
    }
  }, {
    key: "_isTypeahead",
    get: function get() {
      return this.typeahead && this.typeahead.observers.length > 0;
    }
  }, {
    key: "_validTerm",
    get: function get() {
      var term = this.searchTerm && this.searchTerm.trim();
      return term && term.length >= this.minTermLength;
    }
  }, {
    key: "_mergeGlobalConfig",
    value: function _mergeGlobalConfig(config) {
      this.placeholder = this.placeholder || config.placeholder;
      this.notFoundText = this.notFoundText || config.notFoundText;
      this.typeToSearchText = this.typeToSearchText || config.typeToSearchText;
      this.addTagText = this.addTagText || config.addTagText;
      this.loadingText = this.loadingText || config.loadingText;
      this.clearAllText = this.clearAllText || config.clearAllText;
      this.virtualScroll = isDefined(this.virtualScroll) ? this.virtualScroll : isDefined(config.disableVirtualScroll) ? !config.disableVirtualScroll : false;
      this.openOnEnter = isDefined(this.openOnEnter) ? this.openOnEnter : config.openOnEnter;
      this.appendTo = this.appendTo || config.appendTo;
      this.bindValue = this.bindValue || config.bindValue;
      this.bindLabel = this.bindLabel || config.bindLabel;
      this.appearance = this.appearance || config.appearance;
    }
  }]);

  return NgSelectComponent;
}();

NgSelectComponent.ɵfac = function NgSelectComponent_Factory(t) {
  return new (t || NgSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinjectAttribute"]('class'), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinjectAttribute"]('autofocus'), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](NgSelectConfig), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](SELECTION_MODEL_FACTORY), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ConsoleService));
};

NgSelectComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: NgSelectComponent,
  selectors: [["ng-select"]],
  contentQueries: function NgSelectComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵcontentQuery"](dirIndex, NgOptionTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵcontentQuery"](dirIndex, NgOptgroupTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵcontentQuery"](dirIndex, NgLabelTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵcontentQuery"](dirIndex, NgMultiLabelTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵcontentQuery"](dirIndex, NgHeaderTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵcontentQuery"](dirIndex, NgFooterTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵcontentQuery"](dirIndex, NgNotFoundTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵcontentQuery"](dirIndex, NgTypeToSearchTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵcontentQuery"](dirIndex, NgLoadingTextTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵcontentQuery"](dirIndex, NgTagTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵcontentQuery"](dirIndex, NgLoadingSpinnerTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵcontentQuery"](dirIndex, NgOptionComponent, 5);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.optionTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.optgroupTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.labelTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.multiLabelTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.headerTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.footerTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.notFoundTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.typeToSearchTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.loadingTextTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.tagTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.loadingSpinnerTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.ngOptions = _t);
    }
  },
  viewQuery: function NgSelectComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](NgDropdownPanelComponent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c5, 7);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.dropdownPanel = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
    }
  },
  hostVars: 20,
  hostBindings: function NgSelectComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keydown", function NgSelectComponent_keydown_HostBindingHandler($event) {
        return ctx.handleKeyDown($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("ng-select", ctx.useDefaultClass)("ng-select-single", !ctx.multiple)("ng-select-multiple", ctx.multiple)("ng-select-taggable", ctx.addTag)("ng-select-searchable", ctx.searchable)("ng-select-clearable", ctx.clearable)("ng-select-opened", ctx.isOpen)("ng-select-disabled", ctx.disabled)("ng-select-filtered", ctx.filtered)("ng-select-typeahead", ctx.typeahead);
    }
  },
  inputs: {
    markFirst: "markFirst",
    dropdownPosition: "dropdownPosition",
    loading: "loading",
    closeOnSelect: "closeOnSelect",
    hideSelected: "hideSelected",
    selectOnTab: "selectOnTab",
    bufferAmount: "bufferAmount",
    selectableGroup: "selectableGroup",
    selectableGroupAsModel: "selectableGroupAsModel",
    searchFn: "searchFn",
    trackByFn: "trackByFn",
    clearOnBackspace: "clearOnBackspace",
    labelForId: "labelForId",
    inputAttrs: "inputAttrs",
    readonly: "readonly",
    searchWhileComposing: "searchWhileComposing",
    minTermLength: "minTermLength",
    editableSearchTerm: "editableSearchTerm",
    keyDownFn: "keyDownFn",
    multiple: "multiple",
    addTag: "addTag",
    searchable: "searchable",
    clearable: "clearable",
    isOpen: "isOpen",
    items: "items",
    compareWith: "compareWith",
    clearSearchOnAdd: "clearSearchOnAdd",
    bindLabel: "bindLabel",
    placeholder: "placeholder",
    notFoundText: "notFoundText",
    typeToSearchText: "typeToSearchText",
    addTagText: "addTagText",
    loadingText: "loadingText",
    clearAllText: "clearAllText",
    virtualScroll: "virtualScroll",
    openOnEnter: "openOnEnter",
    appendTo: "appendTo",
    bindValue: "bindValue",
    appearance: "appearance",
    maxSelectedItems: "maxSelectedItems",
    groupBy: "groupBy",
    groupValue: "groupValue",
    tabIndex: "tabIndex",
    typeahead: "typeahead"
  },
  outputs: {
    blurEvent: "blur",
    focusEvent: "focus",
    changeEvent: "change",
    openEvent: "open",
    closeEvent: "close",
    searchEvent: "search",
    clearEvent: "clear",
    addEvent: "add",
    removeEvent: "remove",
    scroll: "scroll",
    scrollToEnd: "scrollToEnd"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.forwardRef)(function () {
      return NgSelectComponent;
    }),
    multi: true
  }, NgDropdownPanelService]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]],
  decls: 14,
  vars: 19,
  consts: [[1, "ng-select-container", 3, "mousedown"], [1, "ng-value-container"], [1, "ng-placeholder"], [4, "ngIf"], ["role", "combobox", "aria-haspopup", "listbox", 1, "ng-input"], ["aria-autocomplete", "list", 3, "readOnly", "disabled", "value", "input", "compositionstart", "compositionend", "focus", "blur", "change"], ["searchInput", ""], ["class", "ng-clear-wrapper", 3, "title", 4, "ngIf"], [1, "ng-arrow-wrapper"], [1, "ng-arrow"], ["class", "ng-dropdown-panel", "role", "listbox", "aria-label", "Options list", 3, "virtualScroll", "bufferAmount", "appendTo", "position", "headerTemplate", "footerTemplate", "filterValue", "items", "markedItem", "ng-select-multiple", "ngClass", "id", "update", "scroll", "scrollToEnd", "outsideClick", 4, "ngIf"], ["class", "ng-value", 3, "ng-value-disabled", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ng-value"], ["defaultLabelTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["aria-hidden", "true", 1, "ng-value-icon", "left", 3, "click"], [1, "ng-value-label", 3, "ngItemLabel", "escape"], ["defaultLoadingSpinnerTemplate", ""], [3, "ngTemplateOutlet"], [1, "ng-spinner-loader"], [1, "ng-clear-wrapper", 3, "title"], ["aria-hidden", "true", 1, "ng-clear"], ["role", "listbox", "aria-label", "Options list", 1, "ng-dropdown-panel", 3, "virtualScroll", "bufferAmount", "appendTo", "position", "headerTemplate", "footerTemplate", "filterValue", "items", "markedItem", "ngClass", "id", "update", "scroll", "scrollToEnd", "outsideClick"], ["class", "ng-option", 3, "ng-option-disabled", "ng-option-selected", "ng-optgroup", "ng-option", "ng-option-child", "ng-option-marked", "click", "mouseover", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "ng-option", "role", "option", 3, "ng-option-marked", "mouseover", "click", 4, "ngIf"], [1, "ng-option", 3, "click", "mouseover"], ["defaultOptionTemplate", ""], [1, "ng-option-label", 3, "ngItemLabel", "escape"], ["role", "option", 1, "ng-option", 3, "mouseover", "click"], ["defaultTagTemplate", ""], [1, "ng-tag-label"], ["defaultNotFoundTemplate", ""], [1, "ng-option", "ng-option-disabled"], ["defaultTypeToSearchTemplate", ""], ["defaultLoadingTextTemplate", ""]],
  template: function NgSelectComponent_Template(rf, ctx) {
    if (rf & 1) {
      var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("mousedown", function NgSelectComponent_Template_div_mousedown_0_listener($event) {
        return ctx.handleMousedown($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, NgSelectComponent_ng_container_4_Template, 2, 2, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, NgSelectComponent_5_Template, 1, 5, undefined, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "input", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("input", function NgSelectComponent_Template_input_input_7_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r52);

        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](8);

        return ctx.filter(_r2.value);
      })("compositionstart", function NgSelectComponent_Template_input_compositionstart_7_listener() {
        return ctx.onCompositionStart();
      })("compositionend", function NgSelectComponent_Template_input_compositionend_7_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r52);

        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](8);

        return ctx.onCompositionEnd(_r2.value);
      })("focus", function NgSelectComponent_Template_input_focus_7_listener($event) {
        return ctx.onInputFocus($event);
      })("blur", function NgSelectComponent_Template_input_blur_7_listener($event) {
        return ctx.onInputBlur($event);
      })("change", function NgSelectComponent_Template_input_change_7_listener($event) {
        return $event.stopPropagation();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, NgSelectComponent_ng_container_9_Template, 4, 1, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, NgSelectComponent_span_10_Template, 3, 1, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, NgSelectComponent_ng_dropdown_panel_13_Template, 7, 19, "ng-dropdown-panel", 10);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("ng-appearance-outline", ctx.appearance === "outline")("ng-has-value", ctx.hasValue);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.placeholder);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (!ctx.multiLabelTemplate || !ctx.multiple) && ctx.selectedItems.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.multiple && ctx.multiLabelTemplate && ctx.selectedValues.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-expanded", ctx.isOpen)("aria-owns", ctx.isOpen ? ctx.dropdownId : null);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("readOnly", !ctx.searchable || ctx.itemsList.maxItemsSelected)("disabled", ctx.disabled)("value", ctx.searchTerm ? ctx.searchTerm : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("id", ctx.labelForId)("tabindex", ctx.tabIndex)("aria-activedescendant", ctx.isOpen ? ctx.itemsList == null ? null : ctx.itemsList.markedItem == null ? null : ctx.itemsList.markedItem.htmlId : null)("aria-controls", ctx.isOpen ? ctx.dropdownId : null);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showClear());
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isOpen);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgTemplateOutlet, NgItemLabelDirective, NgDropdownPanelComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass],
  styles: [".ng-select{display:block;position:relative}.ng-select,.ng-select div,.ng-select input,.ng-select span{box-sizing:border-box}.ng-select [hidden]{display:none}.ng-select.ng-select-searchable .ng-select-container .ng-value-container .ng-input{opacity:1}.ng-select.ng-select-opened .ng-select-container{z-index:1001}.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-placeholder,.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-value{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:default;user-select:none}.ng-select.ng-select-disabled .ng-arrow-wrapper{cursor:default}.ng-select.ng-select-filtered .ng-placeholder{display:none}.ng-select .ng-select-container{cursor:default;display:flex;outline:none;overflow:hidden;position:relative;width:100%}.ng-select .ng-select-container .ng-value-container{display:flex;flex:1}.ng-select .ng-select-container .ng-value-container .ng-input{opacity:0}.ng-select .ng-select-container .ng-value-container .ng-input>input{background:none transparent;border:0;box-shadow:none;box-sizing:content-box;cursor:default;outline:none;padding:0;width:100%}.ng-select .ng-select-container .ng-value-container .ng-input>input::-ms-clear{display:none}.ng-select .ng-select-container .ng-value-container .ng-input>input[readonly]{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;padding:0;user-select:none;width:0}.ng-select.ng-select-single.ng-select-filtered .ng-select-container .ng-value-container .ng-value{visibility:hidden}.ng-select.ng-select-single .ng-select-container .ng-value-container,.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{left:0;position:absolute;width:100%}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{flex-wrap:wrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{position:absolute}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{white-space:nowrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{cursor:pointer}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{flex:1;z-index:2}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{z-index:1}.ng-select .ng-clear-wrapper{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:pointer;position:relative;user-select:none;width:17px}.ng-select .ng-clear-wrapper .ng-clear{display:inline-block;font-size:18px;line-height:1;pointer-events:none}.ng-select .ng-spinner-loader{-webkit-animation:load8 .8s linear infinite;animation:load8 .8s linear infinite;border:2px solid rgba(66,66,66,.2);border-left-color:#424242;border-radius:50%;font-size:10px;height:17px;margin-right:5px;position:relative;text-indent:-9999em;transform:translateZ(0);width:17px}.ng-select .ng-spinner-loader:after{border-radius:50%;height:17px;width:17px}@-webkit-keyframes load8{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes load8{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.ng-select .ng-arrow-wrapper{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:pointer;position:relative;text-align:center;user-select:none}.ng-select .ng-arrow-wrapper .ng-arrow{display:inline-block;height:0;pointer-events:none;position:relative;width:0}.ng-dropdown-panel{-webkit-overflow-scrolling:touch;box-sizing:border-box;opacity:0;position:absolute;width:100%;z-index:1050}.ng-dropdown-panel .ng-dropdown-panel-items{box-sizing:border-box;display:block;height:auto;max-height:240px;overflow-y:auto}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup,.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{box-sizing:border-box;cursor:pointer;display:block}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-option-label:empty:before{content:\"\\200b\"}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .highlighted{font-weight:700;text-decoration:underline}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.disabled{cursor:default}.ng-dropdown-panel .scroll-host{-webkit-overflow-scrolling:touch;display:block;overflow:hidden;overflow-y:auto;position:relative}.ng-dropdown-panel .scrollable-content{height:100%;left:0;position:absolute;top:0;width:100%}.ng-dropdown-panel .total-padding{opacity:0;width:1px}"],
  encapsulation: 2,
  changeDetection: 0
});

NgSelectComponent.ctorParameters = function () {
  return [{
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Attribute,
      args: ['class']
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Attribute,
      args: ['autofocus']
    }]
  }, {
    type: NgSelectConfig
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Inject,
      args: [SELECTION_MODEL_FACTORY]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef
  }, {
    type: ConsoleService
  }];
};

NgSelectComponent.propDecorators = {
  bindLabel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  bindValue: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  markFirst: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  placeholder: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  notFoundText: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  typeToSearchText: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  addTagText: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  loadingText: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  clearAllText: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  appearance: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  dropdownPosition: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  appendTo: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  loading: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  closeOnSelect: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  hideSelected: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  selectOnTab: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  openOnEnter: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  maxSelectedItems: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  groupBy: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  groupValue: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  bufferAmount: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  virtualScroll: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  selectableGroup: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  selectableGroupAsModel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  searchFn: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  trackByFn: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  clearOnBackspace: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  labelForId: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  inputAttrs: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  tabIndex: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  readonly: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  searchWhileComposing: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  minTermLength: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  editableSearchTerm: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  keyDownFn: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  typeahead: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.HostBinding,
    args: ['class.ng-select-typeahead']
  }],
  multiple: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.HostBinding,
    args: ['class.ng-select-multiple']
  }],
  addTag: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.HostBinding,
    args: ['class.ng-select-taggable']
  }],
  searchable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.HostBinding,
    args: ['class.ng-select-searchable']
  }],
  clearable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.HostBinding,
    args: ['class.ng-select-clearable']
  }],
  isOpen: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.HostBinding,
    args: ['class.ng-select-opened']
  }],
  items: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  compareWith: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  clearSearchOnAdd: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  blurEvent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output,
    args: ['blur']
  }],
  focusEvent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output,
    args: ['focus']
  }],
  changeEvent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output,
    args: ['change']
  }],
  openEvent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output,
    args: ['open']
  }],
  closeEvent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output,
    args: ['close']
  }],
  searchEvent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output,
    args: ['search']
  }],
  clearEvent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output,
    args: ['clear']
  }],
  addEvent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output,
    args: ['add']
  }],
  removeEvent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output,
    args: ['remove']
  }],
  scroll: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output,
    args: ['scroll']
  }],
  scrollToEnd: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output,
    args: ['scrollToEnd']
  }],
  optionTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ContentChild,
    args: [NgOptionTemplateDirective, {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef
    }]
  }],
  optgroupTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ContentChild,
    args: [NgOptgroupTemplateDirective, {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef
    }]
  }],
  labelTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ContentChild,
    args: [NgLabelTemplateDirective, {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef
    }]
  }],
  multiLabelTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ContentChild,
    args: [NgMultiLabelTemplateDirective, {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef
    }]
  }],
  headerTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ContentChild,
    args: [NgHeaderTemplateDirective, {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef
    }]
  }],
  footerTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ContentChild,
    args: [NgFooterTemplateDirective, {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef
    }]
  }],
  notFoundTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ContentChild,
    args: [NgNotFoundTemplateDirective, {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef
    }]
  }],
  typeToSearchTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ContentChild,
    args: [NgTypeToSearchTemplateDirective, {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef
    }]
  }],
  loadingTextTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ContentChild,
    args: [NgLoadingTextTemplateDirective, {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef
    }]
  }],
  tagTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ContentChild,
    args: [NgTagTemplateDirective, {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef
    }]
  }],
  loadingSpinnerTemplate: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ContentChild,
    args: [NgLoadingSpinnerTemplateDirective, {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef
    }]
  }],
  dropdownPanel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
    args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.forwardRef)(function () {
      return NgDropdownPanelComponent;
    })]
  }],
  searchInput: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
    args: ['searchInput', {
      static: true
    }]
  }],
  ngOptions: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ContentChildren,
    args: [NgOptionComponent, {
      descendants: true
    }]
  }],
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.HostBinding,
    args: ['class.ng-select-disabled']
  }],
  filtered: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.HostBinding,
    args: ['class.ng-select-filtered']
  }],
  handleKeyDown: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.HostListener,
    args: ['keydown', ['$event']]
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](NgSelectComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component,
    args: [{
      selector: 'ng-select',
      template: "<div\n    (mousedown)=\"handleMousedown($event)\"\n    [class.ng-appearance-outline]=\"appearance === 'outline'\"\n    [class.ng-has-value]=\"hasValue\"\n    class=\"ng-select-container\">\n\n    <div class=\"ng-value-container\">\n        <div class=\"ng-placeholder\">{{placeholder}}</div>\n\n        <ng-container *ngIf=\"(!multiLabelTemplate  || !multiple ) && selectedItems.length > 0\">\n            <div [class.ng-value-disabled]=\"item.disabled\" class=\"ng-value\" *ngFor=\"let item of selectedItems; trackBy: trackByOption\">\n                <ng-template #defaultLabelTemplate>\n                    <span class=\"ng-value-icon left\" (click)=\"unselect(item);\" aria-hidden=\"true\">\xD7</span>\n                    <span class=\"ng-value-label\" [ngItemLabel]=\"item.label\" [escape]=\"escapeHTML\"></span>\n                </ng-template>\n\n                <ng-template\n                    [ngTemplateOutlet]=\"labelTemplate || defaultLabelTemplate\"\n                    [ngTemplateOutletContext]=\"{ item: item.value, clear: clearItem, label: item.label }\">\n                </ng-template>\n            </div>\n        </ng-container>\n\n        <ng-template *ngIf=\"multiple && multiLabelTemplate && selectedValues.length > 0\"\n                [ngTemplateOutlet]=\"multiLabelTemplate\"\n                [ngTemplateOutletContext]=\"{ items: selectedValues, clear: clearItem }\">\n        </ng-template>\n\n        <div class=\"ng-input\"\n            role=\"combobox\" \n            [attr.aria-expanded]=\"isOpen\" \n            [attr.aria-owns]=\"isOpen ? dropdownId : null\" \n            aria-haspopup=\"listbox\">\n\n            <input #searchInput\n                   [attr.id]=\"labelForId\"\n                   [attr.tabindex]=\"tabIndex\"\n                   [readOnly]=\"!searchable || itemsList.maxItemsSelected\"\n                   [disabled]=\"disabled\"\n                   [value]=\"searchTerm ? searchTerm : ''\"\n                   (input)=\"filter(searchInput.value)\"\n                   (compositionstart)=\"onCompositionStart()\"\n                   (compositionend)=\"onCompositionEnd(searchInput.value)\"\n                   (focus)=\"onInputFocus($event)\"\n                   (blur)=\"onInputBlur($event)\"\n                   (change)=\"$event.stopPropagation()\"\n                   [attr.aria-activedescendant]=\"isOpen ? itemsList?.markedItem?.htmlId : null\"\n                   aria-autocomplete=\"list\"\n                   [attr.aria-controls]=\"isOpen ? dropdownId : null\">\n        </div>\n    </div>\n\n    <ng-container *ngIf=\"loading\">\n        <ng-template #defaultLoadingSpinnerTemplate>\n            <div class=\"ng-spinner-loader\"></div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"loadingSpinnerTemplate || defaultLoadingSpinnerTemplate\">\n        </ng-template>\n    </ng-container>\n\n    <span *ngIf=\"showClear()\" class=\"ng-clear-wrapper\" title=\"{{clearAllText}}\">\n        <span class=\"ng-clear\" aria-hidden=\"true\">\xD7</span>\n    </span>\n\n    <span class=\"ng-arrow-wrapper\">\n        <span class=\"ng-arrow\"></span>\n    </span>\n</div>\n\n<ng-dropdown-panel *ngIf=\"isOpen\"\n                   class=\"ng-dropdown-panel\"\n                   [virtualScroll]=\"virtualScroll\"\n                   [bufferAmount]=\"bufferAmount\"\n                   [appendTo]=\"appendTo\"\n                   [position]=\"dropdownPosition\"\n                   [headerTemplate]=\"headerTemplate\"\n                   [footerTemplate]=\"footerTemplate\"\n                   [filterValue]=\"searchTerm\"\n                   [items]=\"itemsList.filteredItems\"\n                   [markedItem]=\"itemsList.markedItem\"\n                   (update)=\"viewPortItems = $event\"\n                   (scroll)=\"scroll.emit($event)\"\n                   (scrollToEnd)=\"scrollToEnd.emit($event)\"\n                   (outsideClick)=\"close()\"\n                   [class.ng-select-multiple]=\"multiple\"\n                   [ngClass]=\"appendTo ? classes : null\"\n                   [id]=\"dropdownId\"\n                   role=\"listbox\"\n                   aria-label=\"Options list\">\n\n    <ng-container>\n        <div class=\"ng-option\" [attr.role]=\"item.children ? 'group' : 'option'\" (click)=\"toggleItem(item)\" (mouseover)=\"onItemHover(item)\"\n                *ngFor=\"let item of viewPortItems; trackBy: trackByOption\"\n                [class.ng-option-disabled]=\"item.disabled\"\n                [class.ng-option-selected]=\"item.selected\"\n                [class.ng-optgroup]=\"item.children\"\n                [class.ng-option]=\"!item.children\"\n                [class.ng-option-child]=\"!!item.parent\"\n                [class.ng-option-marked]=\"item === itemsList.markedItem\"\n                [attr.aria-selected]=\"item.selected\"\n                [attr.id]=\"item?.htmlId\">\n\n            <ng-template #defaultOptionTemplate>\n                <span class=\"ng-option-label\" [ngItemLabel]=\"item.label\" [escape]=\"escapeHTML\"></span>\n            </ng-template>\n\n            <ng-template\n                [ngTemplateOutlet]=\"item.children ? (optgroupTemplate || defaultOptionTemplate) : (optionTemplate || defaultOptionTemplate)\"\n                [ngTemplateOutletContext]=\"{ item: item.value, item$:item, index: item.index, searchTerm: searchTerm }\">\n            </ng-template>\n        </div>\n\n        <div class=\"ng-option\" [class.ng-option-marked]=\"!itemsList.markedItem\" (mouseover)=\"itemsList.unmarkItem()\" role=\"option\" (click)=\"selectTag()\" *ngIf=\"showAddTag\">\n            <ng-template #defaultTagTemplate>\n                <span><span class=\"ng-tag-label\">{{addTagText}}</span>\"{{searchTerm}}\"</span>\n            </ng-template>\n\n            <ng-template\n                [ngTemplateOutlet]=\"tagTemplate || defaultTagTemplate\"\n                [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n            </ng-template>\n        </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"showNoItemsFound()\">\n        <ng-template #defaultNotFoundTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{notFoundText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"notFoundTemplate || defaultNotFoundTemplate\"\n            [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n        </ng-template>\n    </ng-container>\n\n    <ng-container *ngIf=\"showTypeToSearch()\">\n        <ng-template #defaultTypeToSearchTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{typeToSearchText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"typeToSearchTemplate || defaultTypeToSearchTemplate\">\n        </ng-template>\n    </ng-container>\n\n    <ng-container *ngIf=\"loading && itemsList.filteredItems.length === 0\">\n        <ng-template #defaultLoadingTextTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{loadingText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"loadingTextTemplate || defaultLoadingTextTemplate\"\n            [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n        </ng-template>\n    </ng-container>\n\n</ng-dropdown-panel>\n",
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.forwardRef)(function () {
          return NgSelectComponent;
        }),
        multi: true
      }, NgDropdownPanelService],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectionStrategy.OnPush,
      host: {
        '[class.ng-select]': 'useDefaultClass',
        '[class.ng-select-single]': '!multiple'
      },
      styles: [".ng-select{display:block;position:relative}.ng-select,.ng-select div,.ng-select input,.ng-select span{box-sizing:border-box}.ng-select [hidden]{display:none}.ng-select.ng-select-searchable .ng-select-container .ng-value-container .ng-input{opacity:1}.ng-select.ng-select-opened .ng-select-container{z-index:1001}.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-placeholder,.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-value{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:default;user-select:none}.ng-select.ng-select-disabled .ng-arrow-wrapper{cursor:default}.ng-select.ng-select-filtered .ng-placeholder{display:none}.ng-select .ng-select-container{cursor:default;display:flex;outline:none;overflow:hidden;position:relative;width:100%}.ng-select .ng-select-container .ng-value-container{display:flex;flex:1}.ng-select .ng-select-container .ng-value-container .ng-input{opacity:0}.ng-select .ng-select-container .ng-value-container .ng-input>input{background:none transparent;border:0;box-shadow:none;box-sizing:content-box;cursor:default;outline:none;padding:0;width:100%}.ng-select .ng-select-container .ng-value-container .ng-input>input::-ms-clear{display:none}.ng-select .ng-select-container .ng-value-container .ng-input>input[readonly]{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;padding:0;user-select:none;width:0}.ng-select.ng-select-single.ng-select-filtered .ng-select-container .ng-value-container .ng-value{visibility:hidden}.ng-select.ng-select-single .ng-select-container .ng-value-container,.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{left:0;position:absolute;width:100%}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{flex-wrap:wrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{position:absolute}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{white-space:nowrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{cursor:pointer}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{flex:1;z-index:2}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{z-index:1}.ng-select .ng-clear-wrapper{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:pointer;position:relative;user-select:none;width:17px}.ng-select .ng-clear-wrapper .ng-clear{display:inline-block;font-size:18px;line-height:1;pointer-events:none}.ng-select .ng-spinner-loader{-webkit-animation:load8 .8s linear infinite;animation:load8 .8s linear infinite;border:2px solid rgba(66,66,66,.2);border-left-color:#424242;border-radius:50%;font-size:10px;height:17px;margin-right:5px;position:relative;text-indent:-9999em;transform:translateZ(0);width:17px}.ng-select .ng-spinner-loader:after{border-radius:50%;height:17px;width:17px}@-webkit-keyframes load8{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes load8{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.ng-select .ng-arrow-wrapper{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:pointer;position:relative;text-align:center;user-select:none}.ng-select .ng-arrow-wrapper .ng-arrow{display:inline-block;height:0;pointer-events:none;position:relative;width:0}.ng-dropdown-panel{-webkit-overflow-scrolling:touch;box-sizing:border-box;opacity:0;position:absolute;width:100%;z-index:1050}.ng-dropdown-panel .ng-dropdown-panel-items{box-sizing:border-box;display:block;height:auto;max-height:240px;overflow-y:auto}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup,.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{box-sizing:border-box;cursor:pointer;display:block}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-option-label:empty:before{content:\"\\200b\"}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .highlighted{font-weight:700;text-decoration:underline}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.disabled{cursor:default}.ng-dropdown-panel .scroll-host{-webkit-overflow-scrolling:touch;display:block;overflow:hidden;overflow-y:auto;position:relative}.ng-dropdown-panel .scrollable-content{height:100%;left:0;position:absolute;top:0;width:100%}.ng-dropdown-panel .total-padding{opacity:0;width:1px}"]
    }]
  }], function () {
    return [{
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Attribute,
        args: ['class']
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Attribute,
        args: ['autofocus']
      }]
    }, {
      type: NgSelectConfig
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Inject,
        args: [SELECTION_MODEL_FACTORY]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef
    }, {
      type: ConsoleService
    }];
  }, {
    markFirst: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    dropdownPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    loading: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    closeOnSelect: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    hideSelected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    selectOnTab: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    bufferAmount: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    selectableGroup: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    selectableGroupAsModel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    searchFn: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    trackByFn: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    clearOnBackspace: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    labelForId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    inputAttrs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    readonly: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    searchWhileComposing: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    minTermLength: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    editableSearchTerm: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    keyDownFn: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    multiple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.HostBinding,
      args: ['class.ng-select-multiple']
    }],
    addTag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.HostBinding,
      args: ['class.ng-select-taggable']
    }],
    searchable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.HostBinding,
      args: ['class.ng-select-searchable']
    }],
    clearable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.HostBinding,
      args: ['class.ng-select-clearable']
    }],
    isOpen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.HostBinding,
      args: ['class.ng-select-opened']
    }],
    blurEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output,
      args: ['blur']
    }],
    focusEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output,
      args: ['focus']
    }],
    changeEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output,
      args: ['change']
    }],
    openEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output,
      args: ['open']
    }],
    closeEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output,
      args: ['close']
    }],
    searchEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output,
      args: ['search']
    }],
    clearEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output,
      args: ['clear']
    }],
    addEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output,
      args: ['add']
    }],
    removeEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output,
      args: ['remove']
    }],
    scroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output,
      args: ['scroll']
    }],
    scrollToEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output,
      args: ['scrollToEnd']
    }],
    items: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    compareWith: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    clearSearchOnAdd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.HostBinding,
      args: ['class.ng-select-disabled']
    }],
    filtered: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.HostBinding,
      args: ['class.ng-select-filtered']
    }],
    handleKeyDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.HostListener,
      args: ['keydown', ['$event']]
    }],
    bindLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    notFoundText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    typeToSearchText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    addTagText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    loadingText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    clearAllText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    virtualScroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    openOnEnter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    appendTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    bindValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    appearance: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    maxSelectedItems: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    groupBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    groupValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    tabIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }],
    typeahead: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.HostBinding,
      args: ['class.ng-select-typeahead']
    }],
    optionTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ContentChild,
      args: [NgOptionTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef
      }]
    }],
    optgroupTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ContentChild,
      args: [NgOptgroupTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef
      }]
    }],
    labelTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ContentChild,
      args: [NgLabelTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef
      }]
    }],
    multiLabelTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ContentChild,
      args: [NgMultiLabelTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef
      }]
    }],
    headerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ContentChild,
      args: [NgHeaderTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef
      }]
    }],
    footerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ContentChild,
      args: [NgFooterTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef
      }]
    }],
    notFoundTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ContentChild,
      args: [NgNotFoundTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef
      }]
    }],
    typeToSearchTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ContentChild,
      args: [NgTypeToSearchTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef
      }]
    }],
    loadingTextTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ContentChild,
      args: [NgLoadingTextTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef
      }]
    }],
    tagTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ContentChild,
      args: [NgTagTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef
      }]
    }],
    loadingSpinnerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ContentChild,
      args: [NgLoadingSpinnerTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_6__.TemplateRef
      }]
    }],
    dropdownPanel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
      args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.forwardRef)(function () {
        return NgDropdownPanelComponent;
      })]
    }],
    searchInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
      args: ['searchInput', {
        static: true
      }]
    }],
    ngOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ContentChildren,
      args: [NgOptionComponent, {
        descendants: true
      }]
    }]
  });
})();

function DefaultSelectionModelFactory() {
  return new DefaultSelectionModel();
}

var DefaultSelectionModel = /*#__PURE__*/function () {
  function DefaultSelectionModel() {
    (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, DefaultSelectionModel);

    this._selected = [];
  }

  (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(DefaultSelectionModel, [{
    key: "value",
    get: function get() {
      return this._selected;
    }
  }, {
    key: "select",
    value: function select(item, multiple, groupAsModel) {
      item.selected = true;

      if (!item.children || !multiple && groupAsModel) {
        this._selected.push(item);
      }

      if (multiple) {
        if (item.parent) {
          var childrenCount = item.parent.children.length;
          var selectedCount = item.parent.children.filter(function (x) {
            return x.selected;
          }).length;
          item.parent.selected = childrenCount === selectedCount;
        } else if (item.children) {
          this._setChildrenSelectedState(item.children, true);

          this._removeChildren(item);

          if (groupAsModel && this._activeChildren(item)) {
            this._selected = [].concat((0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(this._selected.filter(function (x) {
              return x.parent !== item;
            })), [item]);
          } else {
            this._selected = [].concat((0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(this._selected), (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(item.children.filter(function (x) {
              return !x.disabled;
            })));
          }
        }
      }
    }
  }, {
    key: "unselect",
    value: function unselect(item, multiple) {
      this._selected = this._selected.filter(function (x) {
        return x !== item;
      });
      item.selected = false;

      if (multiple) {
        if (item.parent && item.parent.selected) {
          var _this$_selected;

          var children = item.parent.children;

          this._removeParent(item.parent);

          this._removeChildren(item.parent);

          (_this$_selected = this._selected).push.apply(_this$_selected, (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(children.filter(function (x) {
            return x !== item && !x.disabled;
          })));

          item.parent.selected = false;
        } else if (item.children) {
          this._setChildrenSelectedState(item.children, false);

          this._removeChildren(item);
        }
      }
    }
  }, {
    key: "clear",
    value: function clear(keepDisabled) {
      this._selected = keepDisabled ? this._selected.filter(function (x) {
        return x.disabled;
      }) : [];
    }
  }, {
    key: "_setChildrenSelectedState",
    value: function _setChildrenSelectedState(children, selected) {
      var _iterator7 = (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_2__["default"])(children),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var child = _step7.value;

          if (child.disabled) {
            continue;
          }

          child.selected = selected;
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }

      ;
    }
  }, {
    key: "_removeChildren",
    value: function _removeChildren(parent) {
      this._selected = [].concat((0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(this._selected.filter(function (x) {
        return x.parent !== parent;
      })), (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(parent.children.filter(function (x) {
        return x.parent === parent && x.disabled && x.selected;
      })));
    }
  }, {
    key: "_removeParent",
    value: function _removeParent(parent) {
      this._selected = this._selected.filter(function (x) {
        return x !== parent;
      });
    }
  }, {
    key: "_activeChildren",
    value: function _activeChildren(item) {
      return item.children.every(function (x) {
        return !x.disabled || x.selected;
      });
    }
  }]);

  return DefaultSelectionModel;
}();

var ɵ0 = DefaultSelectionModelFactory;

var NgSelectModule = /*#__PURE__*/(0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(function NgSelectModule() {
  (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, NgSelectModule);
});

NgSelectModule.ɵfac = function NgSelectModule_Factory(t) {
  return new (t || NgSelectModule)();
};

NgSelectModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: NgSelectModule
});
NgSelectModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  providers: [{
    provide: SELECTION_MODEL_FACTORY,
    useValue: ɵ0
  }],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](NgSelectModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule,
    args: [{
      declarations: [NgDropdownPanelComponent, NgOptionComponent, NgSelectComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective, NgItemLabelDirective],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule],
      exports: [NgSelectComponent, NgOptionComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective],
      providers: [{
        provide: SELECTION_MODEL_FACTORY,
        useValue: ɵ0
      }]
    }]
  }], null, null);
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](NgSelectModule, {
    declarations: function declarations() {
      return [NgDropdownPanelComponent, NgOptionComponent, NgSelectComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective, NgItemLabelDirective];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule];
    },
    exports: function exports() {
      return [NgSelectComponent, NgOptionComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective];
    }
  });
})();
/*
 * Public API Surface of ng-select
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 9801:
/*!*******************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AnimationFrameAction.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimationFrameAction": function() { return /* binding */ AnimationFrameAction; }
/* harmony export */ });
/* harmony import */ var D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/get */ 1389);
/* harmony import */ var D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ 1413);
/* harmony import */ var D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ 5738);
/* harmony import */ var D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ 9664);
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AsyncAction */ 2530);







var AnimationFrameAction = /*#__PURE__*/function (_AsyncAction) {
  (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AnimationFrameAction, _AsyncAction);

  var _super = (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(AnimationFrameAction);

  function AnimationFrameAction(scheduler, work) {
    var _this;

    (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AnimationFrameAction);

    _this = _super.call(this, scheduler, work);
    _this.scheduler = scheduler;
    _this.work = work;
    return _this;
  }

  (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AnimationFrameAction, [{
    key: "requestAsyncId",
    value: function requestAsyncId(scheduler, id) {
      var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      if (delay !== null && delay > 0) {
        return (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AnimationFrameAction.prototype), "requestAsyncId", this).call(this, scheduler, id, delay);
      }

      scheduler.actions.push(this);
      return scheduler.scheduled || (scheduler.scheduled = requestAnimationFrame(function () {
        return scheduler.flush(null);
      }));
    }
  }, {
    key: "recycleAsyncId",
    value: function recycleAsyncId(scheduler, id) {
      var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      if (delay !== null && delay > 0 || delay === null && this.delay > 0) {
        return (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AnimationFrameAction.prototype), "recycleAsyncId", this).call(this, scheduler, id, delay);
      }

      if (scheduler.actions.length === 0) {
        cancelAnimationFrame(id);
        scheduler.scheduled = undefined;
      }

      return undefined;
    }
  }]);

  return AnimationFrameAction;
}(_AsyncAction__WEBPACK_IMPORTED_MODULE_6__.AsyncAction);

/***/ }),

/***/ 1697:
/*!**********************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AnimationFrameScheduler.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimationFrameScheduler": function() { return /* binding */ AnimationFrameScheduler; }
/* harmony export */ });
/* harmony import */ var D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ 5738);
/* harmony import */ var D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ 9664);
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AsyncScheduler */ 7821);





var AnimationFrameScheduler = /*#__PURE__*/function (_AsyncScheduler) {
  (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(AnimationFrameScheduler, _AsyncScheduler);

  var _super = (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(AnimationFrameScheduler);

  function AnimationFrameScheduler() {
    (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AnimationFrameScheduler);

    return _super.apply(this, arguments);
  }

  (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AnimationFrameScheduler, [{
    key: "flush",
    value: function flush(action) {
      this.active = true;
      this.scheduled = undefined;
      var actions = this.actions;
      var error;
      var index = -1;
      var count = actions.length;
      action = action || actions.shift();

      do {
        if (error = action.execute(action.state, action.delay)) {
          break;
        }
      } while (++index < count && (action = actions.shift()));

      this.active = false;

      if (error) {
        while (++index < count && (action = actions.shift())) {
          action.unsubscribe();
        }

        throw error;
      }
    }
  }]);

  return AnimationFrameScheduler;
}(_AsyncScheduler__WEBPACK_IMPORTED_MODULE_4__.AsyncScheduler);

/***/ }),

/***/ 919:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/animationFrame.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animationFrameScheduler": function() { return /* binding */ animationFrameScheduler; },
/* harmony export */   "animationFrame": function() { return /* binding */ animationFrame; }
/* harmony export */ });
/* harmony import */ var _AnimationFrameAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnimationFrameAction */ 9801);
/* harmony import */ var _AnimationFrameScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnimationFrameScheduler */ 1697);


var animationFrameScheduler = new _AnimationFrameScheduler__WEBPACK_IMPORTED_MODULE_0__.AnimationFrameScheduler(_AnimationFrameAction__WEBPACK_IMPORTED_MODULE_1__.AnimationFrameAction);
var animationFrame = animationFrameScheduler;

/***/ }),

/***/ 690:
/*!************************************************************************************!*\
  !*** ./src/app/main/pages/authentication/auth-login-v2/auth-login-v2.component.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthLoginV2Component": function() { return /* binding */ AuthLoginV2Component; }
/* harmony export */ });
/* harmony import */ var D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 4058);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 4008);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/config.service */ 8726);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3479);
/* harmony import */ var _core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/directives/core-ripple-effect/core-ripple-effect.directive */ 3113);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 9850);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 914);















function AuthLoginV2Component_ngb_alert_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ngb-alert", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", "danger")("dismissible", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.error);
  }
}

function AuthLoginV2Component_div_21_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function AuthLoginV2Component_div_21_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Email must be a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function AuthLoginV2Component_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AuthLoginV2Component_div_21_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AuthLoginV2Component_div_21_div_2_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.f.email.errors.email);
  }
}

function AuthLoginV2Component_div_34_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

var _c0 = function _c0(a0) {
  return {
    "d-block": a0
  };
};

function AuthLoginV2Component_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AuthLoginV2Component_div_34_div_1_Template, 2, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](2, _c0, ctx_r2.submitted && ctx_r2.f.password.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.f.password.errors.required);
  }
}

function AuthLoginV2Component_span_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "span", 50);
  }
}

var _c1 = function _c1(a0) {
  return {
    "is-invalid": a0
  };
};

var _c2 = function _c2(a0) {
  return {
    "is-invalid error": a0
  };
};

var _c3 = function _c3(a0, a1) {
  return {
    "icon-eye-off": a0,
    "icon-eye": a1
  };
};

var AuthLoginV2Component = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   */
  function AuthLoginV2Component(_coreConfigService, _formBuilder, _route, _router) {
    (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AuthLoginV2Component);

    this._coreConfigService = _coreConfigService;
    this._formBuilder = _formBuilder;
    this._route = _route;
    this._router = _router;
    this.loading = false;
    this.submitted = false;
    this.error = '';
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject(); // Configure the layout

    this._coreConfigService.config = {
      layout: {
        navbar: {
          hidden: true
        },
        menu: {
          hidden: true
        },
        footer: {
          hidden: true
        },
        customizer: false,
        enableLocalStorage: false
      }
    };
  } // convenience getter for easy access to form fields


  (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AuthLoginV2Component, [{
    key: "f",
    get: function get() {
      return this.loginForm.controls;
    }
    /**
     * Toggle password
     */

  }, {
    key: "togglePasswordTextType",
    value: function togglePasswordTextType() {
      this.passwordTextType = !this.passwordTextType;
    }
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      var _this = this;

      this.submitted = true; // stop here if form is invalid

      if (this.loginForm.invalid) {
        return;
      } // Login


      this.loading = true; // redirect to home page

      setTimeout(function () {
        _this._router.navigate(['/']);
      }, 100);
    } // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */

  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this2 = this;

      this.loginForm = this._formBuilder.group({
        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.email]],
        password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
      }); // get return url from route parameters or default to '/'

      this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/'; // Subscribe to config changes

      this._coreConfigService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
        _this2.coreConfig = config;
      });
    }
    /**
     * On destroy
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      // Unsubscribe from all subscriptions
      this._unsubscribeAll.next();

      this._unsubscribeAll.complete();
    }
  }]);

  return AuthLoginV2Component;
}();

AuthLoginV2Component.ɵfac = function AuthLoginV2Component_Factory(t) {
  return new (t || AuthLoginV2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_2__.CoreConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router));
};

AuthLoginV2Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: AuthLoginV2Component,
  selectors: [["app-auth-login-v2"]],
  decls: 61,
  vars: 19,
  consts: [[1, "auth-wrapper", "auth-v2"], [1, "auth-inner", "row", "m-0"], ["href", "javascript:void(0);", 1, "brand-logo"], ["alt", "brand-logo", "height", "28", 3, "src"], [1, "brand-text", "text-primary", "ml-1"], [1, "d-none", "d-lg-flex", "col-lg-8", "align-items-center", "p-5"], [1, "w-100", "d-lg-flex", "align-items-center", "justify-content-center", "px-5"], ["alt", "Login V2", 1, "img-fluid", 3, "src"], [1, "d-flex", "col-lg-4", "align-items-center", "auth-bg", "px-2", "p-lg-5"], [1, "col-12", "col-sm-8", "col-md-6", "col-lg-12", "px-xl-2", "mx-auto"], [1, "card-title", "font-weight-bold", "mb-1"], [1, "card-text", "mb-2"], [3, "type", "dismissible", 4, "ngIf"], [1, "auth-login-form", "mt-2", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "login-email", 1, "form-label"], ["type", "text", "formControlName", "email", "placeholder", "admin@demo.com", "aria-describedby", "login-email", "autofocus", "", "tabindex", "1", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "d-flex", "justify-content-between"], ["for", "login-password"], ["routerLink", "/pages/authentication/forgot-password-v2"], [1, "input-group", "input-group-merge", "form-password-toggle"], ["formControlName", "password", "placeholder", "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7", "aria-describedby", "login-password", "tabindex", "2", 1, "form-control", "form-control-merge", 3, "type", "ngClass"], [1, "input-group-append"], [1, "input-group-text", "cursor-pointer"], [1, "feather", "font-small-4", 3, "ngClass", "click"], ["class", "invalid-feedback", 3, "ngClass", 4, "ngIf"], [1, "custom-control", "custom-checkbox"], ["id", "remember-me", "type", "checkbox", "tabindex", "3", 1, "custom-control-input"], ["for", "remember-me", 1, "custom-control-label"], ["tabindex", "4", "rippleEffect", "", 1, "btn", "btn-primary", "btn-block", 3, "disabled"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], [1, "text-center", "mt-2"], ["routerLink", "/pages/authentication/register-v2"], [1, "divider", "my-2"], [1, "divider-text"], [1, "auth-footer-btn", "d-flex", "justify-content-center"], ["href", "javascript:void(0)", 1, "btn", "btn-facebook"], ["data-feather", "facebook"], ["href", "javascript:void(0)", 1, "btn", "btn-twitter", "white"], ["data-feather", "twitter"], ["href", "javascript:void(0)", 1, "btn", "btn-google"], ["data-feather", "mail"], ["href", "javascript:void(0)", 1, "btn", "btn-github"], ["data-feather", "github"], [3, "type", "dismissible"], [1, "alert-body"], [1, "invalid-feedback"], [4, "ngIf"], [1, "invalid-feedback", 3, "ngClass"], [1, "spinner-border", "spinner-border-sm", "mr-1"]],
  template: function AuthLoginV2Component_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "h2", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Vuexy");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "h2", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Welcome to Vuexy! \uD83D\uDC4B");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "p", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Please sign-in to your account and start the adventure");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, AuthLoginV2Component_ngb_alert_15_Template, 4, 3, "ngb-alert", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "form", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function AuthLoginV2Component_Template_form_ngSubmit_16_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, AuthLoginV2Component_div_21_Template, 3, 2, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Forgot Password?");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "span", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "i", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AuthLoginV2Component_Template_i_click_33_listener() {
        return ctx.togglePasswordTextType();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, AuthLoginV2Component_div_34_Template, 2, 4, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "input", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "label", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, " Remember Me");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "button", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, AuthLoginV2Component_span_41_Template, 1, 0, "span", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "Sign in ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "p", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "New on our platform?");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "\xA0Create an account");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "or");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "a", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](54, "i", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](56, "i", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "a", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](58, "i", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "a", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](60, "i", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx.coreConfig.app.appLogoImage, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx.coreConfig.layout.skin === "dark" ? "assets/images/pages/login-v2-dark.svg" : "assets/images/pages/login-v2.svg", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.error);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.loginForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](12, _c1, ctx.submitted && ctx.f.email.errors));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", ctx.passwordTextType ? "text" : "password")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](14, _c2, ctx.submitted && ctx.f.password.errors));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](16, _c3, ctx.passwordTextType, !ctx.passwordTextType));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loading);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__.DefaultClassDirective, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, _core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_3__.RippleEffectDirective, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_4__.FeatherIconDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbAlert],
  styles: [".auth-wrapper {\n  display: flex;\n  flex-basis: 100%;\n  min-height: 100vh;\n  min-height: calc(1vh * 100);\n  min-height: calc(var(--vh, 1vh) * 100);\n  width: 100%;\n}\n.auth-wrapper .auth-inner {\n  width: 100%;\n  position: relative;\n}\n.auth-wrapper.auth-v1 {\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.auth-wrapper.auth-v1 .auth-inner:before {\n  width: 244px;\n  height: 243px;\n  content: \" \";\n  position: absolute;\n  top: -54px;\n  left: -46px;\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPQAAADzCAMAAACG9Mt0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAA9KADAAQAAAABAAAA8wAAAADhQHfUAAAAyVBMVEUAAAD///+AgP+AgP9mZv+AgNWAgP9tbf9gYP+AgP9xcf9mZv+AZuaAgP9dXf90dOhiYv92dv9mZu5mZv93d+53d/9paf94afCAcfFrXvJra/9mZvJzZvJzc/JoaP96b/Rqav91aupsYvV2bOt2bPVxaPZ7cfZqavZyau1waPd4aO9xafBxafh4afB1bfh4avFuZ/F2afJzZvJzZ/N0aPN0bvN3bPR0ae5yZ/R3be93bfR1au9zafBxbPVzavV0a/F0a/ZyafFwaPKZm3nTAAAAQ3RSTlMAAQIEBQYGBwgICQoKCgsLDQ0PDw8PERESExMUFBQWFxgYGhoaGxsdHSAgIiIiIyQlJygqLCwtLi8vLzAzNDU3Nzg7h9vbHgAAA9RJREFUeNrt3ftS2kAUx/Fc1gSyWsErtuJdRDQiiteolb7/QzUoTm07k4AzObuu3/MCez45yWbzT36eZ6b8erO1e1B97baadd+zocJWmg0HaXe/+uqmg2GWtkLT5Lle1m9LdhG2+1lvzuiUO1knEF81yFc1N+35m15kZOGodz1vyLx+v2Lseq/erxtZd/NuweCTtfiwaWLOD5FnsqI7+VnP3y8afnEs3Es/1+H1qvETwuq18B7e6VlwLup1ZM8kWWQBOsrmHL7GVtxvYRZYgQ4ywae61ffsqH5Lbq20bQm6ncp9P2ehJegwE/u+rl95ttSwLrVSc2ANetAU28dSa9Cp2E623bUG3d2VWmn/wBq0XCugQYMGLdVKoOJaoiuok1NdXSW1WAUfRPtRUllflaJf5ZE/O9pXVbZUPTov5c+IDqvtRwStdTgLutoxy6GnGfYb2o+1I2gd+1OiqzfLocvVE7TSDqG1mgodaqfQZbvZC9rXjqG1X45WzqFVKVpk0LLo4lGP0ZGD6KgMnTiITkrQgXYQrYNitHISrYrRsZPouBhdcxJdK0YnTqKTYrR2Eq1BgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRoh9DH59ag86ACoSYOL61B55EUQk1s3VqDzsNHhJpYe7QGncfMSHUxaliCHgcKSXVxeWQJehwdJdXF4dAS9DgkTKqLxuibFeiXODixNi7OrEC/BP+JtbE0WrYA/RrxKNfH2YUF6NegSbk+Gk87xtErN6EsWm88fzeMXpwE9EruLns/l42io4dJFLPo2/Po1w+D6IW7t9Bt2SPx3vOOMfS7eHVZtN54ulg2go56138Ct4XRunE2Ovsmjg46WeddUoUWr6WL0fCoIYgO2/2s91fstDZQjcPL0ePt5flpdXUwqW46uMrS1j95JNpQrW0dHp9UV/uT2m416/8HVGg3qzhpBjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KC/FDpx0pwUo2tOomvF6NhJdFyMVk6iVTE6cBIdeF9vJyvZx/I/AzuIjsrQvoNovwzt4FamSs0Ojrp80PmvoB0zh940pb7azf1yg7t0LIt978uppzbnalfucDW92ZndLPRmKweGPduYJ+zoM5/Dk+gD5NdvLhXXPp88qcUqmEH5G5JZRs6cuxwIAAAAAElFTkSuQmCC\");\n}\n@media (max-width: 575.98px) {\n  .auth-wrapper.auth-v1 .auth-inner:before {\n    display: none;\n  }\n}\n.auth-wrapper.auth-v1 .auth-inner:after {\n  width: 272px;\n  height: 272px;\n  content: \" \";\n  position: absolute;\n  bottom: -55px;\n  right: -75px;\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARAAAAEQCAMAAABP1NsnAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABEKADAAQAAAABAAABEAAAAAAQWxS2AAAAwFBMVEUAAAD///+AgICAgP9VVaqqVf+qqv+AgL+AgP9mZsxmZv+ZZv+AgNWAgP9tbdttbf+Sbf+AYN+AgN+AgP9xceNmZv+AZuaAZv90dOh0dP9qav+AauqAav+AgP92dv9tbf+Abe2Abf93Zu53d+6AcO94afCAcfF5a+R5a/JzZuaAZvKAc/J5bed5bfOAaPN6b/R1auqAavR6ZvV6cPV2bOuAbPV7aPZ2be2AbfZ7au17avZ3Zu53b+57a+97a/d4aO9J6CoeAAAAQHRSTlMAAQICAwMDBAQFBQUGBgcHBwgICAkKCgoLCwwMDAwNDg4ODw8QERITExQUFBUVFhcYGBkZGhobHBwdHR4eHx8gJ5uMWwAAA/FJREFUeNrt2G1XEkEYxvHZNk2xHGzdbKFl0cTwgdSkCKzu7/+t4pw6sAjtjIueE/f8r3fMO35nZnbuy5gVGcvfzJe0rnTfGI+MggGJRUZnbpPIhJKt88nU53JnFULvyISY6KAv8vPj0vr2rYwiE2Z2B9J+uNYcyyQxwWZvaeGH3G4bMjsvI/kcwTC/V+7kLoahlITzQojP3ZFgsJCh7IJQzpX0QFj4uMiY18eDMZ9bZCF9OQahnK6cm/Y7js0sh/LF3Auv1PlQd3MxbdXYIQspV44EEEAAAWTNDAYYkKdJbNMsLzYueZbaZ2iM46RVbHBaiZ9Js+nHEdli42N9XuSen5hGp1CQTuOJQDRsD99N4gMSpYWapNH6IJo83CIeILZQFesEaber79NCWRoukOpNEnW0gXQqD81w6ACxhbrYde7VuFCYeA2QRCNIsgZISyNIqz6IyhPjOjNVIFYniK3dmKU6QdLaJUimEySrDZLrBMlrgxRKU7sxCw/EMe0CAggggADySJCqxixIkKpNEh6IozELD8RxjQACCCCAAPJIkKrGLEgQXqqAAEJjxrQLCCCAAEJjRmNGY8a0CwgggABCYwYIfQgggNCYMe0CAggggNCY0ZjRmDHtAgIIIIAAQmNGHwIIIDRmTLuAAAIIIDRmNGY0Zky7gAACCCCA0JjRhwACCI0Z0y4ggAACCI0ZjRmNGdMuIIAAAgggNGb0IYAAQmPGtAsIIIAAQmNGY0ZjxrQLCCCAAAIIjRl9CCCA0Jgx7QICCCCA0JjRmNGYMe0CAggggABCY0YfAgggNGZMu4AAAgggNGY0ZjRmTLuAAAIIIIDQmNGHAAIIjRnTLiCAAAIIjRmNGY0ZIEy7gAACCCA0ZvQhgABCY8a0CwgggABCY0ZjBgiNGdMuIIAAAgiN2f/Sh+Q6PfLaIJlOkKw2SKoTJK3dmFmdILb2tBvrBIlrg5iWRo+WqQ+SaARJ1gCJAzsxThCN16p1vNurGjNjoo42j07kAHFskoY2kEbl33U0ZgoPjXW+Rl0gkarnahqtDaJKxMPDDWIiNafGenh4gExvVhXfmk7Da6L1AVGxSby2h6MxK79Zk42ea1pJbJ48sU2zDezQ8iy1z6BBwoyjMQsvXp8YQAAhgADilRfyy+wf8WqZZUfGZihvgZiB3FybC+kCUU5XLkAo50C+gbBQdUzkAIVyejIAYfFTI1solHP2HgNCnHn5AYNy4jvpoVB6fVzL91cwzLJ9Lfd7S0jhehxO5H5/yePr1W6gHonI7fJ5ORSR/n6Q2yQanq763zuXU5LJZRKiyD/W9/pjkdPZz0/yJ8fqVyry+qQZDMjJKoDfy8bRVhHhQTwAAAAASUVORK5CYII=\");\n  z-index: -1;\n}\n@media (max-width: 575.98px) {\n  .auth-wrapper.auth-v1 .auth-inner:after {\n    display: none;\n  }\n}\n.auth-wrapper.auth-v2 {\n  align-items: flex-start;\n}\n.auth-wrapper.auth-v2 .auth-inner {\n  height: 100vh;\n  overflow-y: auto;\n  height: calc(1vh * 100);\n  height: calc(var(--vh, 1vh) * 100);\n}\n.auth-wrapper.auth-v2 .brand-logo {\n  position: absolute;\n  top: 2rem;\n  left: 2rem;\n  margin: 0;\n  z-index: 1;\n}\n.auth-wrapper.auth-v1 .auth-inner {\n  max-width: 400px;\n}\n.auth-wrapper .brand-logo {\n  display: flex;\n  justify-content: center;\n  margin: 1rem 0 2rem 0;\n}\n.auth-wrapper .brand-logo .brand-text {\n  font-weight: 600;\n}\n.auth-wrapper .auth-footer-btn .btn {\n  padding: 0.6rem !important;\n}\n.auth-wrapper .auth-footer-btn .btn:not(:last-child) {\n  margin-right: 1rem;\n}\n@media (min-width: 1200px) {\n  .auth-wrapper.auth-v2 .auth-card {\n    width: 400px;\n  }\n}\n.auth-wrapper .auth-bg {\n  background-color: #fff;\n}\n.dark-layout .auth-wrapper .auth-bg {\n  background-color: #283046;\n}\n@media (max-height: 625px) {\n  .dark-layout .auth-wrapper .auth-inner {\n    background-color: #283046;\n  }\n\n  .auth-wrapper .auth-bg {\n    padding-top: 3rem;\n  }\n  .auth-wrapper .auth-inner {\n    background-color: #fff;\n    padding-bottom: 1rem;\n  }\n  .auth-wrapper.auth-v2 .brand-logo {\n    width: 100%;\n    display: flex;\n    justify-content: unset;\n    position: relative;\n    left: 0;\n    padding-left: 1.5rem;\n  }\n}\n.auth-help-icon {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcQGNvcmVcXHNjc3NcXGJhc2VcXHBhZ2VzXFxwYWdlLWF1dGguc2NzcyIsImF1dGgtbG9naW4tdjIuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXGJvb3RzdHJhcFxcc2Nzc1xcbWl4aW5zXFxfYnJlYWtwb2ludHMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcQGNvcmVcXHNjc3NcXGJhc2VcXGJvb3RzdHJhcC1leHRlbmRlZFxcX3ZhcmlhYmxlcy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxAY29yZVxcc2Nzc1xcYmFzZVxcY29tcG9uZW50c1xcX3ZhcmlhYmxlcy1kYXJrLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQUEsc0NBQUE7RUFDQSxXQUFBO0FDSkY7QURNRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0pKO0FET0U7RUFDRSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNMSjtBRE9NO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHU1REFBQTtBQ0xSO0FDaURJO0VGbkRFO0lBU0ksYUFBQTtFQ0hSO0FBQ0Y7QURLTTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSwrNkRBQUE7RUFDQSxXQUFBO0FDSFI7QUNrQ0k7RUZ2Q0U7SUFVSSxhQUFBO0VDRFI7QUFDRjtBRE1FO0VBQ0UsdUJBQUE7QUNKSjtBREtJO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQ0FBQTtBQ0hOO0FES0k7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNITjtBRE9FO0VBQ0UsZ0JBaEVxQjtBQzJEekI7QURRRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FDTko7QURPSTtFQUNFLGdCQUFBO0FDTE47QURVSTtFQUNFLDBCQUFBO0FDUk47QURTTTtFQUNFLGtCQUFBO0FDUFI7QURhQTtFQUVJO0lBQ0UsWUF6Rm1CO0VDOEV2QjtBQUNGO0FEZUE7RUFDRSxzQkd2Rk07QUYwRVI7QURpQkU7RUFDRSx5QkkzRWlCO0FINkRyQjtBRGtCQTtFQUVJO0lBQ0UseUJJbEZlO0VIa0VuQjs7RURvQkU7SUFDRSxpQkFBQTtFQ2pCSjtFRG1CRTtJQUNFLHNCRzNHRTtJSDRHRixvQkFBQTtFQ2pCSjtFRG1CRTtJQUNFLFdBQUE7SUFDQSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxrQkFBQTtJQUNBLE9BQUE7SUFDQSxvQkFBQTtFQ2pCSjtBQUNGO0FBNUdBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQThHRiIsImZpbGUiOiJhdXRoLWxvZ2luLXYyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vYm9vdHN0cmFwLWV4dGVuZGVkL2luY2x1ZGUnOyAvLyBCb290c3RyYXAgaW5jbHVkZXNcclxuQGltcG9ydCAnLi4vY29tcG9uZW50cy9pbmNsdWRlJzsgLy8gQ29tcG9uZW50cyBpbmNsdWRlc1xyXG5cclxuJGF1dGgtMS1pbm5lci1tYXgtd2lkdGg6IDQwMHB4ICFkZWZhdWx0O1xyXG5cclxuLmF1dGgtd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWJhc2lzOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIG1pbi1oZWlnaHQ6IGNhbGModmFyKC0tdmgsIDF2aCkgKiAxMDApO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAuYXV0aC1pbm5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gICYuYXV0aC12MSB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuOyAvLyBGb3IgdjEgc2Nyb2xsIGZvciBsb25nIGF1dGggZm9ybVxyXG4gICAgLmF1dGgtaW5uZXIge1xyXG4gICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgd2lkdGg6IDI0NHB4O1xyXG4gICAgICAgIGhlaWdodDogMjQzcHg7XHJcbiAgICAgICAgY29udGVudDogJyAnO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IC01NHB4O1xyXG4gICAgICAgIGxlZnQ6IC00NnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFQUUFBQUR6Q0FNQUFBQ0c5TXQwQUFBQUFYTlNSMElBcnM0YzZRQUFBRVJsV0VsbVRVMEFLZ0FBQUFnQUFZZHBBQVFBQUFBQkFBQUFHZ0FBQUFBQUE2QUJBQU1BQUFBQkFBRUFBS0FDQUFRQUFBQUJBQUFBOUtBREFBUUFBQUFCQUFBQTh3QUFBQURoUUhmVUFBQUF5VkJNVkVVQUFBRC8vLytBZ1ArQWdQOW1aditBZ05XQWdQOXRiZjlnWVArQWdQOXhjZjltWnYrQVp1YUFnUDlkWGY5MGRPaGlZdjkyZHY5bVp1NW1adjkzZCs1M2QvOXBhZjk0YWZDQWNmRnJYdkpyYS85bVp2Snpadkp6Yy9Kb2FQOTZiL1JxYXY5MWF1cHNZdlYyYk90MmJQVnhhUFo3Y2ZacWF2WnlhdTF3YVBkNGFPOXhhZkJ4YWZoNGFmQjFiZmg0YXZGdVovRjJhZkp6WnZKelovTjBhUE4wYnZOM2JQUjBhZTV5Wi9SM2JlOTNiZlIxYXU5emFmQnhiUFZ6YXZWMGEvRjBhL1p5YWZGd2FQS1ptM25UQUFBQVEzUlNUbE1BQVFJRUJRWUdCd2dJQ1FvS0Nnc0xEUTBQRHc4UEVSRVNFeE1VRkJRV0Z4Z1lHaG9hR3hzZEhTQWdJaUlpSXlRbEp5Z3FMQ3d0TGk4dkx6QXpORFUzTnpnN2g5dmJIZ0FBQTlSSlJFRlVlTnJ0M2Z0UzJrQVV4L0ZjMWdTeVdzRXJ0dUpkUkRRaWl0ZW9sYjcvUXpVb1RtMDdrNEF6T2J1dTMvTUNlejQ1eVdielQzNmVaNmI4ZXJPMWUxQjk3YmFhZGQrem9jSldtZzBIYVhlLyt1cW1nMkdXdGtMVDVMbGUxbTlMZGhHMisxbHZ6dWlVTzFrbkVGODF5RmMxTiszNW0xNWtaT0dvZHoxdnlMeCt2MkxzZXEvZXJ4dFpkL051d2VDVHRmaXdhV0xPRDVGbnNxSTcrVm5QM3k4YWZuRXMzRXMvMStIMXF2RVR3dXExOEI3ZTZWbHdMdXAxWk04a1dXUUJPc3JtSEw3R1Z0eHZZUlpZZ1E0eXdhZTYxZmZzcUg1TGJxMjBiUW02bmNwOVAyZWhKZWd3RS91K3JsOTV0dFN3THJWU2MyQU5ldEFVMjhkU2E5Q3AyRTYyM2JVRzNkMlZXbW4vd0JxMFhDdWdRWU1HTGRWS29PSmFvaXVvazFOZFhTVzFXQVVmUlB0UlVsbGZsYUpmNVpFL085cFhWYlpVUFRvdjVjK0lEcXZ0UndTdGRUZ0x1dG94eTZHbkdmWWIybysxSTJnZCsxT2lxemZMb2N2VkU3VFNEcUcxbWdvZGFxZlFaYnZaQzlyWGpxRzFYNDVXenFGVktWcGswTExvNGxHUDBaR0Q2S2dNblRpSVRrclFnWFlRcllOaXRISVNyWXJSc1pQb3VCaGRjeEpkSzBZblRxS1RZclIyRXExQmd3WU5HalJvMEtCQmd3WU5HalJvMEtCQmd3WU5HalJvMEtCQmd3WU5HalJvMEtCQmd3WU5HalJvMEtCQmd3WU5HalJvMEtCQmd3WU5HalJvMEtCQmd3WU5HalJvMEtCQmd3WU5HalJvaDlESDU5YWc4NkFDb1NZT0w2MUI1NUVVUWsxczNWcUR6c05IaEpwWWU3UUduY2ZNU0hVeGFsaUNIZ2NLU1hWeGVXUUplaHdkSmRYRjRkQVM5RGdrVEtxTHh1aWJGZWlYT0RpeE5pN09yRUMvQlArSnRiRTBXcllBL1JyeEtOZkgyWVVGNk5lZ1NiaytHazg3eHRFck42RXNXbTg4ZnplTVhwd0U5RXJ1TG5zL2w0MmlvNGRKRkxQbzIvUG8xdytENklXN3Q5QnQyU1B4M3ZPT01mUzdlSFZadE41NHVsZzJnbzU2MTM4Q3Q0WFJ1bkUyT3ZzbWpnNDZXZWRkVW9VV3I2V0wwZkNvSVlnTzIvMnM5MWZzdERaUWpjUEwwZVB0NWZscGRYVXdxVzQ2dU1yUzFqOTVKTnBRclcwZEhwOVVWL3VUMm00MTYvOEhWR2czcXpocEJqUm8wS0JCZ3dZTkdqUm8wS0JCZ3dZTkdqUm8wS0JCZ3dZTkdqUm8wS0JCZ3dZTkdqUm8wS0JCZ3dZTkdqUm8wS0JCZ3dZTkdqUm8wS0JCZ3dZTkdqUm8wS0JCZ3dZTkdqUm8wS0JCZ3dZTkdqUm8wS0MvRkRweDBwd1VvMnRPb212RjZOaEpkRnlNVms2aVZURTZjQklkZUY5dkp5dlp4L0kvQXp1SWpzclF2b05vdnd6dDRGYW1TczBPanJwODBQbXZvQjB6aDk0MHBiN2F6ZjF5Zzd0MExJdDk3OHVwcHpibmFsZnVjRFc5MlpuZExQUm1Ld2VHUGR1WUorem9NNS9EaytnRDVOZHZMaFhYUHA4OHFjVXFtRUg1RzVKWlJzNmN1eHdJQUFBQUFFbEZUa1N1UW1DQycpO1xyXG4gICAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bih4cykge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgd2lkdGg6IDI3MnB4O1xyXG4gICAgICAgIGhlaWdodDogMjcycHg7XHJcbiAgICAgICAgY29udGVudDogJyAnO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IC01NXB4O1xyXG4gICAgICAgIHJpZ2h0OiAtNzVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBUkFBQUFFUUNBTUFBQUJQMU5zbkFBQUFBWE5TUjBJQXJzNGM2UUFBQUVSbFdFbG1UVTBBS2dBQUFBZ0FBWWRwQUFRQUFBQUJBQUFBR2dBQUFBQUFBNkFCQUFNQUFBQUJBQUVBQUtBQ0FBUUFBQUFCQUFBQkVLQURBQVFBQUFBQkFBQUJFQUFBQUFBUVd4UzJBQUFBd0ZCTVZFVUFBQUQvLy8rQWdJQ0FnUDlWVmFxcVZmK3FxditBZ0wrQWdQOW1ac3htWnYrWlp2K0FnTldBZ1A5dGJkdHRiZitTYmYrQVlOK0FnTitBZ1A5eGNlTm1aditBWnVhQVp2OTBkT2gwZFA5cWF2K0FhdXFBYXYrQWdQOTJkdjl0YmYrQWJlMkFiZjkzWnU1M2QrNkFjTzk0YWZDQWNmRjVhK1I1YS9Kelp1YUFadktBYy9KNWJlZDViZk9BYVBONmIvUjFhdXFBYXZSNlp2VjZjUFYyYk91QWJQVjdhUFoyYmUyQWJmWjdhdTE3YXZaM1p1NTNiKzU3YSs5N2EvZDRhTzlKNkNvZUFBQUFRSFJTVGxNQUFRSUNBd01EQkFRRkJRVUdCZ2NIQndnSUNBa0tDZ29MQ3d3TURBd05EZzRPRHc4UUVSSVRFeFFVRkJVVkZoY1lHQmtaR2hvYkhCd2RIUjRlSHg4Z0o1dU1Xd0FBQS9GSlJFRlVlTnJ0MkcxWEVrRVl4dkhaTmsyeEhHemRiS0ZsMGNUd2dkU2tDS3p1Ny8rdDRwdzZzQWp0akl1ZUUvZjhyM2ZNTzM1blpuYnV5NWdWR2N2ZnpKZTByblRmR0krTWdnR0pSVVpuYnBQSWhKS3Q4OG5VNTNKbkZVTHZ5SVNZNktBdjh2UGowdnIycll3aUUyWjJCOUordU5ZY3l5UXh3V1p2YWVHSDNHNGJNanN2SS9rY3dUQy9WKzdrTG9haGxJVHpRb2pQM1pGZ3NKQ2g3SUpRenBYMFFGajR1TWlZMThlRE1aOWJaQ0Y5T1FhaG5LNmNtL1k3anMwc2gvTEYzQXV2MVBsUWQzTXhiZFhZSVFzcFY0NEVFRUFBQVdUTkRBWVlrS2RKYk5Nc0x6WXVlWmJhWjJpTTQ2UlZiSEJhaVo5SnMrbkhFZGxpNDJOOVh1U2VuNWhHcDFDUVR1T0pRRFJzRDk5TjRnTVNwWVdhcE5INklKbzgzQ0llSUxaUUZlc0VhYmVyNzlOQ1dSb3VrT3BORW5XMGdYUXFEODF3NkFDeGhicllkZTdWdUZDWWVBMlFSQ05Jc2daSVN5TklxejZJeWhQak9qTlZJRlluaUszZG1LVTZRZExhSlVpbUV5U3JEWkxyQk1scmd4UktVN3N4Q3cvRU1lMENBZ2dnZ0FEeVNKQ3F4aXhJa0twTkVoNklvekVMRDhSeGpRQUNDQ0NBQVBKSWtLckdMRWdRWHFxQUFFSmp4clFMQ0NDQUFFSmpSbU5HWThhMEN3Z2dnQUJDWXdZSWZRZ2dnTkNZTWUwQ0FnZ2dnTkNZMFpqUm1ESHRBZ0lJSUlBQVFtTkdId0lJSURSbVRMdUFBQUlJSURSbU5HWTBaa3k3Z0FBQ0NDQ0EwSmpSaHdBQ0NJMFoweTRnZ0FBQ0NJMFpqUm1OR2RNdUlJQUFBZ2dnTkdiMElZQUFRbVBHdEFzSUlJQUFRbU5HWTBaanhyUUxDQ0NBQUFJSWpSbDlDQ0NBMEpneDdRSUNDQ0NBMEpqUm1OR1lNZTBDQWdnZ2dBQkNZMFlmQWdnZ05HWk11NEFBQWdnZ05HWTBaalJtVEx1QUFBSUlJSURRbU5HSEFBSUlqUm5UTGlDQUFBSUlqUm1OR1kwWklFeTdnQUFDQ0NBMFp2UWhnQUJDWThhMEN3Z2dnQUJDWTBaakJnaU5HZE11SUlBQUFnaU4yZi9TaCtRNlBmTGFJSmxPa0t3MlNLb1RKSzNkbUZtZElMYjJ0QnZyQklscmc1aVdSbytXcVErU2FBUkoxZ0NKQXpzeFRoQ04xNnAxdk51ckdqTmpvbzQyajA3a0FIRnNrb1kya0VibDMzVTBaZ29QalhXK1JsMGdrYXJuYWhxdERhSkt4TVBERFdJaU5hZkdlbmg0Z0V4dlZoWGZtazdEYTZMMUFWR3hTYnkyaDZNeEs3OVprNDJlYTFwSmJKNDhzVTJ6RGV6UThpeTF6NkJCd295ak1Rc3ZYcDhZUUFBaGdBRGlsUmZ5eSt3ZjhXcVpaVWZHWmlodmdaaUIzRnliQytrQ1VVNVhMa0FvNTBDK2diQlFkVXprQUlWeWVqSUFZZkZUSTFzb2xIUDJIZ05DbkhuNUFZTnk0anZwb1ZCNmZWekw5MWN3ekxKOUxmZDdTMGpoZWh4TzVINS95ZVByMVc2Z0hvbkk3Zko1T1JTUi9uNlEyeVFhbnE3NjN6dVhVNUxKWlJLaXlEL1c5L3Bqa2RQWnowL3lKOGZxVnlyeStxUVpETWpKS29EZnk4YlJWaEhoUVR3QUFBQUFTVVZPUks1Q1lJST0nKTtcclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oeHMpIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmF1dGgtdjIge1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAuYXV0aC1pbm5lciB7XHJcbiAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87IC8vIEZvciB2MiBzY3JvbGwgZm9yIGxvbmcgYXV0aCBmb3JtXHJcbiAgICAgIGhlaWdodDogY2FsYyh2YXIoLS12aCwgMXZoKSAqIDEwMCk7XHJcbiAgICB9XHJcbiAgICAuYnJhbmQtbG9nbyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAycmVtO1xyXG4gICAgICBsZWZ0OiAycmVtO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmF1dGgtdjEgLmF1dGgtaW5uZXIge1xyXG4gICAgbWF4LXdpZHRoOiAkYXV0aC0xLWlubmVyLW1heC13aWR0aDtcclxuICB9XHJcblxyXG4gIC5icmFuZC1sb2dvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMXJlbSAwIDJyZW0gMDtcclxuICAgIC5icmFuZC10ZXh0IHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hdXRoLWZvb3Rlci1idG4ge1xyXG4gICAgLmJ0biB7XHJcbiAgICAgIHBhZGRpbmc6IDAuNnJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIC5hdXRoLXdyYXBwZXIge1xyXG4gICAgJi5hdXRoLXYyIC5hdXRoLWNhcmQge1xyXG4gICAgICB3aWR0aDogJGF1dGgtMS1pbm5lci1tYXgtd2lkdGg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYXV0aC13cmFwcGVyIC5hdXRoLWJnIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbn1cclxuXHJcbi5kYXJrLWxheW91dCB7XHJcbiAgLmF1dGgtd3JhcHBlciAuYXV0aC1iZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWUtZGFyay1jYXJkLWJnO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtaGVpZ2h0OiA2MjVweCkge1xyXG4gIC5kYXJrLWxheW91dCB7XHJcbiAgICAuYXV0aC13cmFwcGVyIC5hdXRoLWlubmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lLWRhcmstY2FyZC1iZztcclxuICAgIH1cclxuICB9XHJcbiAgLmF1dGgtd3JhcHBlciB7XHJcbiAgICAuYXV0aC1iZyB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAzcmVtO1xyXG4gICAgfVxyXG4gICAgLmF1dGgtaW5uZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgJi5hdXRoLXYyIC5icmFuZC1sb2dvIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogdW5zZXQ7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5hdXRoLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWJhc2lzOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgbWluLWhlaWdodDogY2FsYyh2YXIoLS12aCwgMXZoKSAqIDEwMCk7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmF1dGgtd3JhcHBlciAuYXV0aC1pbm5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYXV0aC13cmFwcGVyLmF1dGgtdjEge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5hdXRoLXdyYXBwZXIuYXV0aC12MSAuYXV0aC1pbm5lcjpiZWZvcmUge1xuICB3aWR0aDogMjQ0cHg7XG4gIGhlaWdodDogMjQzcHg7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTU0cHg7XG4gIGxlZnQ6IC00NnB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQVBRQUFBRHpDQU1BQUFDRzlNdDBBQUFBQVhOU1IwSUFyczRjNlFBQUFFUmxXRWxtVFUwQUtnQUFBQWdBQVlkcEFBUUFBQUFCQUFBQUdnQUFBQUFBQTZBQkFBTUFBQUFCQUFFQUFLQUNBQVFBQUFBQkFBQUE5S0FEQUFRQUFBQUJBQUFBOHdBQUFBRGhRSGZVQUFBQXlWQk1WRVVBQUFELy8vK0FnUCtBZ1A5bVp2K0FnTldBZ1A5dGJmOWdZUCtBZ1A5eGNmOW1aditBWnVhQWdQOWRYZjkwZE9oaVl2OTJkdjltWnU1bVp2OTNkKzUzZC85cGFmOTRhZkNBY2ZGclh2SnJhLzltWnZKelp2SnpjL0pvYVA5NmIvUnFhdjkxYXVwc1l2VjJiT3QyYlBWeGFQWjdjZlpxYXZaeWF1MXdhUGQ0YU85eGFmQnhhZmg0YWZCMWJmaDRhdkZ1Wi9GMmFmSnpadkp6Wi9OMGFQTjBidk4zYlBSMGFlNXlaL1IzYmU5M2JmUjFhdTl6YWZCeGJQVnphdlYwYS9GMGEvWnlhZkZ3YVBLWm0zblRBQUFBUTNSU1RsTUFBUUlFQlFZR0J3Z0lDUW9LQ2dzTERRMFBEdzhQRVJFU0V4TVVGQlFXRnhnWUdob2FHeHNkSFNBZ0lpSWlJeVFsSnlncUxDd3RMaTh2THpBek5EVTNOemc3aDl2YkhnQUFBOVJKUkVGVWVOcnQzZnRTMmtBVXgvRmMxZ1N5V3NFcnR1SmRSRFFpaXRlb2xiNy9RelVvVG0wN2s0QXpPYnV1My9NQ2V6NDV5V2J6VDM2ZVo2Yjhlck8xZTFCOTdiYWFkZCt6b2NKV21nMEhhWGUvK3VxbWcyR1d0a0xUNUxsZTFtOUxkaEcyKzFsdnp1aVVPMWtuRUY4MXlGYzFOKzM1bTE1a1pPR29kejF2eUx4K3YyTHNlcS9lcnh0WmQvTnV3ZUNUdGZpd2FXTE9ENUZuc3FJNytWblAzeThhZm5FczNFcy8xK0gxcXZFVHd1cTE4QjdlNlZsd0x1cDFaTThrV1dRQk9zcm1ITDdHVnR4dllSWllnUTR5d2FlNjFmZnNxSDVMYnEyMGJRbTZuY3A5UDJlaEplZ3dFL3Urcmw5NXR0U3dMclZTYzJBTmV0QVUyOGRTYTlDcDJFNjIzYlVHM2QyVldtbi93QnEwWEN1Z1FZTUdMZFZLb09KYW9pdW9rMU5kWFNXMVdBVWZSUHRSVWxsZmxhSmY1WkUvTzlwWFZiWlVQVG92NWMrSURxdnRSd1N0ZFRnTHV0b3h5NkduR2ZZYjJvKzFJMmdkKzFPaXF6ZkxvY3ZWRTdUU0RxRzFtZ29kYXFmUVpidlpDOXJYanFHMVg0NVd6cUZWS1ZwazBMTG80bEdQMFpHRDZLZ01uVGlJVGtyUWdYWVFyWU5pdEhJU3JZclJzWlBvdUJoZGN4SmRLMFluVHFLVFlyUjJFcTFCZ3dZTkdqUm8wS0JCZ3dZTkdqUm8wS0JCZ3dZTkdqUm8wS0JCZ3dZTkdqUm8wS0JCZ3dZTkdqUm8wS0JCZ3dZTkdqUm8wS0JCZ3dZTkdqUm8wS0JCZ3dZTkdqUm8wS0JCZ3dZTkdqUm9oOURINTlhZzg2QUNvU1lPTDYxQjU1RVVRazFzM1ZxRHpzTkhoSnBZZTdRR25jZk1TSFV4YWxpQ0hnY0tTWFZ4ZVdRSmVod2RKZFhGNGRBUzlEZ2tUS3FMeHVpYkZlaVhPRGl4Tmk3T3JFQy9CUCtKdGJFMFdyWUEvUnJ4S05mSDJZVUY2TmVnU2JrK0drODd4dEVyTjZFc1dtODhmemVNWHB3RTlFcnVMbnMvbDQyaW80ZEpGTFBvMi9QbzF3K0Q2SVc3dDlCdDJTUHgzdk9PTWZTN2VIVlp0TjU0dWxnMmdvNTYxMzhDdDRYUnVuRTJPdnNtamc0NldlZGRVb1VXcjZXTDBmQ29JWWdPMi8yczkxZnN0RFpRamNQTDBlUHQ1ZmxwZFhVd3FXNDZ1TXJTMWo5NUpOcFFyVzBkSHA5VVYvdVQybTQxNi84SFZHZzNxemhwQmpSbzBLQkJnd1lOR2pSbzBLQkJnd1lOR2pSbzBLQkJnd1lOR2pSbzBLQkJnd1lOR2pSbzBLQkJnd1lOR2pSbzBLQkJnd1lOR2pSbzBLQkJnd1lOR2pSbzBLQkJnd1lOR2pSbzBLQkJnd1lOR2pSbzBLQy9GRHB4MHB3VW8ydE9vbXZGNk5oSmRGeU1WazZpVlRFNmNCSWRlRjl2Snl2WngvSS9BenVJanNyUXZvTm92d3p0NEZhbVNzME9qcnA4MFBtdm9CMHpoOTQwcGI3YXpmMXlnN3QwTEl0OTc4dXBwemJuYWxmdWNEVzkyWm5kTFBSbUt3ZUdQZHVZSit6b001L0RrK2dENU5kdkxoWFhQcDg4cWNVcW1FSDVHNUpaUnM2Y3V4d0lBQUFBQUVsRlRrU3VRbUNDXCIpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XG4gIC5hdXRoLXdyYXBwZXIuYXV0aC12MSAuYXV0aC1pbm5lcjpiZWZvcmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5hdXRoLXdyYXBwZXIuYXV0aC12MSAuYXV0aC1pbm5lcjphZnRlciB7XG4gIHdpZHRoOiAyNzJweDtcbiAgaGVpZ2h0OiAyNzJweDtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtNTVweDtcbiAgcmlnaHQ6IC03NXB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQVJBQUFBRVFDQU1BQUFCUDFOc25BQUFBQVhOU1IwSUFyczRjNlFBQUFFUmxXRWxtVFUwQUtnQUFBQWdBQVlkcEFBUUFBQUFCQUFBQUdnQUFBQUFBQTZBQkFBTUFBQUFCQUFFQUFLQUNBQVFBQUFBQkFBQUJFS0FEQUFRQUFBQUJBQUFCRUFBQUFBQVFXeFMyQUFBQXdGQk1WRVVBQUFELy8vK0FnSUNBZ1A5VlZhcXFWZitxcXYrQWdMK0FnUDltWnN4bVp2K1paditBZ05XQWdQOXRiZHR0YmYrU2JmK0FZTitBZ04rQWdQOXhjZU5tWnYrQVp1YUFadjkwZE9oMGRQOXFhditBYXVxQWF2K0FnUDkyZHY5dGJmK0FiZTJBYmY5M1p1NTNkKzZBY085NGFmQ0FjZkY1YStSNWEvSnpadWFBWnZLQWMvSjViZWQ1YmZPQWFQTjZiL1IxYXVxQWF2UjZadlY2Y1BWMmJPdUFiUFY3YVBaMmJlMkFiZlo3YXUxN2F2WjNadTUzYis1N2ErOTdhL2Q0YU85SjZDb2VBQUFBUUhSU1RsTUFBUUlDQXdNREJBUUZCUVVHQmdjSEJ3Z0lDQWtLQ2dvTEN3d01EQXdORGc0T0R3OFFFUklURXhRVUZCVVZGaGNZR0JrWkdob2JIQndkSFI0ZUh4OGdKNXVNV3dBQUEvRkpSRUZVZU5ydDJHMVhFa0VZeHZIWk5rMnhIR3pkYktGbDBjVHdnZFNrQ0t6dTcvK3Q0cHc2c0FqdGpJdWVFL2Y4cjNmTU8zNW5abmJ1eTVnVkdjdmZ6SmUwcm5UZkdJK01nZ0dKUlVabmJwUEloSkt0ODhuVTUzSm5GVUx2eUlTWTZLQXY4dlBqMHZyMnJZd2lFMloyQjlKK3VOWWN5eVF4d1dadmFlR0gzRzRiTWpzdkkva2N3VEMvVis3a0xvYWhsSVR6UW9qUDNaRmdzSkNoN0lKUXpwWDBRRmo0dU1pWTE4ZURNWjliWkNGOU9RYWhuSzZjbS9ZN2pzMHNoL0xGM0F1djFQbFFkM014YmRYWUlRc3BWNDRFRUVBQUFXVE5EQVlZa0tkSmJOTXNMell1ZVpiYVoyaU00NlJWYkhCYWlaOUpzK25IRWRsaTQyTjlYdVNlbjVoR3AxQ1FUdU9KUURSc0Q5OU40Z01TcFlXYXBOSDZJSm84M0NJZUlMWlFGZXNFYWJlcjc5TkNXUm91a09wTkVuVzBnWFFxRDgxdzZBQ3hoYnJZZGU3VnVGQ1llQTJRUkNOSXNnWklTeU5JcXo2SXloUGpPak5WSUZZbmlLM2RtS1U2UWRMYUpVaW1FeVNyRFpMckJNbHJneFJLVTdzeEN3L0VNZTBDQWdnZ2dBRHlTSkNxeGl4SWtLcE5FaDZJb3pFTEQ4UnhqUUFDQ0NDQUFQSklrS3JHTEVnUVhxcUFBRUpqeHJRTENDQ0FBRUpqUm1OR1k4YTBDd2dnZ0FCQ1l3WUlmUWdnZ05DWU1lMENBZ2dnZ05DWTBaalJtREh0QWdJSUlJQUFRbU5HSHdJSUlEUm1UTHVBQUFJSUlEUm1OR1kwWmt5N2dBQUNDQ0NBMEpqUmh3QUNDSTBaMHk0Z2dBQUNDSTBaalJtTkdkTXVJSUFBQWdnZ05HYjBJWUFBUW1QR3RBc0lJSUFBUW1OR1kwWmp4clFMQ0NDQUFBSUlqUmw5Q0NDQTBKZ3g3UUlDQ0NDQTBKalJtTkdZTWUwQ0FnZ2dnQUJDWTBZZkFnZ2dOR1pNdTRBQUFnZ2dOR1kwWmpSbVRMdUFBQUlJSUlEUW1OR0hBQUlJalJuVExpQ0FBQUlJalJtTkdZMFpJRXk3Z0FBQ0NDQTBadlFoZ0FCQ1k4YTBDd2dnZ0FCQ1kwWmpCZ2lOR2RNdUlJQUFBZ2lOMmYvU2grUTZQZkxhSUpsT2tLdzJTS29USkszZG1GbWRJTGIydEJ2ckJJbHJnNWlXUm8rV3FRK1NhQVJKMWdDSkF6c3hUaENOMTZwMXZOdXJHak5qb280MmowN2tBSEZza29ZMmtFYmwzM1UwWmdvUGpYVytSbDBna2FybmFocXREYUpLeE1QRERXSWlOYWZHZW5oNGdFeHZWaFhmbWs3RGE2TDFBVkd4U2J5Mmg2TXhLNzlaazQyZWExcEpiSjQ4c1UyekRlelE4aXkxejZCQndveWpNUXN2WHA4WVFBQWhnQURpbFJmeXkrd2Y4V3FaWlVmR1ppaHZnWmlCM0Z5YkMra0NVVTVYTGtBbzUwQytnYkJRZFV6a0FJVnllaklBWWZGVEkxc29sSFAySGdOQ25IbjVBWU55NGp2cG9WQjZmVnpMOTFjd3pMSjlMZmQ3UzBqaGVoeE81SDUveWVQcjFXNmdIb25JN2ZKNU9SU1IvbjZRMnlRYW5xNzYzenVYVTVMSlpSS2l5RC9XOS9wamtkUFp6MC95SjhmcVZ5cnkrcVFaRE1qSktvRGZ5OGJSVmhIaFFUd0FBQUFBU1VWT1JLNUNZSUk9XCIpO1xuICB6LWluZGV4OiAtMTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xuICAuYXV0aC13cmFwcGVyLmF1dGgtdjEgLmF1dGgtaW5uZXI6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5hdXRoLXdyYXBwZXIuYXV0aC12MiB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLmF1dGgtd3JhcHBlci5hdXRoLXYyIC5hdXRoLWlubmVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLXZoLCAxdmgpICogMTAwKTtcbn1cbi5hdXRoLXdyYXBwZXIuYXV0aC12MiAuYnJhbmQtbG9nbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAycmVtO1xuICBsZWZ0OiAycmVtO1xuICBtYXJnaW46IDA7XG4gIHotaW5kZXg6IDE7XG59XG4uYXV0aC13cmFwcGVyLmF1dGgtdjEgLmF1dGgtaW5uZXIge1xuICBtYXgtd2lkdGg6IDQwMHB4O1xufVxuLmF1dGgtd3JhcHBlciAuYnJhbmQtbG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDFyZW0gMCAycmVtIDA7XG59XG4uYXV0aC13cmFwcGVyIC5icmFuZC1sb2dvIC5icmFuZC10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5hdXRoLXdyYXBwZXIgLmF1dGgtZm9vdGVyLWJ0biAuYnRuIHtcbiAgcGFkZGluZzogMC42cmVtICFpbXBvcnRhbnQ7XG59XG4uYXV0aC13cmFwcGVyIC5hdXRoLWZvb3Rlci1idG4gLmJ0bjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5hdXRoLXdyYXBwZXIuYXV0aC12MiAuYXV0aC1jYXJkIHtcbiAgICB3aWR0aDogNDAwcHg7XG4gIH1cbn1cbi5hdXRoLXdyYXBwZXIgLmF1dGgtYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uZGFyay1sYXlvdXQgLmF1dGgtd3JhcHBlciAuYXV0aC1iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyODMwNDY7XG59XG5cbkBtZWRpYSAobWF4LWhlaWdodDogNjI1cHgpIHtcbiAgLmRhcmstbGF5b3V0IC5hdXRoLXdyYXBwZXIgLmF1dGgtaW5uZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODMwNDY7XG4gIH1cblxuICAuYXV0aC13cmFwcGVyIC5hdXRoLWJnIHtcbiAgICBwYWRkaW5nLXRvcDogM3JlbTtcbiAgfVxuICAuYXV0aC13cmFwcGVyIC5hdXRoLWlubmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICB9XG4gIC5hdXRoLXdyYXBwZXIuYXV0aC12MiAuYnJhbmQtbG9nbyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2V0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xuICB9XG59XG4uYXV0aC1oZWxwLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG59IiwiLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRncmlkLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiAhPSBudWxsIGFuZCAkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBsYXJnZXN0IChsYXN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgY2FsY3VsYXRlZCBhcyB0aGUgbWluaW11bSBvZiB0aGUgbmV4dCBvbmUgbGVzcyAwLjAycHhcbi8vIHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZiBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAcmV0dXJuIGlmKCRuZXh0LCBicmVha3BvaW50LW1pbigkbmV4dCwgJGJyZWFrcG9pbnRzKSAtIC4wMiwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW4gZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgdGhhdCBzcGFucyBtdWx0aXBsZSBicmVha3BvaW50IHdpZHRocy5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heCBicmVha3BvaW50c1xuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkbG93ZXIsICR1cHBlciwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbG93ZXIsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCR1cHBlciwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbG93ZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCR1cHBlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gTWVkaWEgYmV0d2VlbiB0aGUgYnJlYWtwb2ludCdzIG1pbmltdW0gYW5kIG1heGltdW0gd2lkdGhzLlxuLy8gTm8gbWluaW11bSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQsIGFuZCBubyBtYXhpbXVtIGZvciB0aGUgbGFyZ2VzdCBvbmUuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgb25seSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCwgbm90IHZpZXdwb3J0cyBhbnkgd2lkZXIgb3IgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1vbmx5KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iLCIvLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vICBGaWxlIE5hbWU6IHZhcmlhYmxlcy5zY3NzXHJcbi8vICBEZXNjcmlwdGlvbjogQ3VzdG9tIG92ZXJyaWRlcyBvZiBCb290c3RyYXAgdmFyaWFibGVzXHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICBJdGVtIE5hbWU6IFZ1ZXh5IC0gVnVlanMsIFJlYWN0LCBBbmd1bGFyLCBIVE1MICYgTGFyYXZlbCBBZG1pbiBEYXNoYm9hcmQgVGVtcGxhdGVcclxuLy8gIEF1dGhvcjogUElYSU5WRU5UXHJcbi8vICBBdXRob3IgVVJMOiBodHRwOi8vd3d3LnRoZW1lZm9yZXN0Lm5ldC91c2VyL3BpeGludmVudFxyXG4vLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyBDb2xvciBzeXN0ZW1cclxuXHJcbiR3aGl0ZTogI2ZmZiAhZGVmYXVsdDtcclxuJGdyYXktNTA6ICNmNmY2ZjYgIWRlZmF1bHQ7XHJcbiRncmF5LTEwMDogI2JhYmZjNyAhZGVmYXVsdDsgLy8gJGdyYXktbGlnaHRlc3RcclxuJGdyYXktMjAwOiAjZWRlZGVkICFkZWZhdWx0OyAvLyAkZ3JheS1saWdodGVyXHJcbiRncmF5LTMwMDogI2RhZTFlNyAhZGVmYXVsdDsgLy8gJGdyYXktbGlnaHRcclxuJGdyYXktNDAwOiAjNjM2MzYzICFkZWZhdWx0O1xyXG4kZ3JheS01MDA6ICNhZGI1YmQgIWRlZmF1bHQ7XHJcbiRncmF5LTYwMDogI2I4YzJjYyAhZGVmYXVsdDsgLy8gJGdyYXlcclxuJGdyYXktNzAwOiAjNGU1MTU0ICFkZWZhdWx0O1xyXG4kZ3JheS04MDA6ICMxZTFlMWUgIWRlZmF1bHQ7IC8vICRncmF5LWRhcmtcclxuJGdyYXktOTAwOiAjMmEyZTMwICFkZWZhdWx0O1xyXG4kYmxhY2s6ICMyMjI5MmYgIWRlZmF1bHQ7IC8vIDIzMWY0OCAyMjI5MmZcclxuXHJcbiRwdXJwbGU6ICM3MzY3ZjAgIWRlZmF1bHQ7IC8vJHByaW1hcnlcclxuJGdyZWVuOiAjMjhjNzZmICFkZWZhdWx0OyAvLyRzdWNjZXNzXHJcbiRibHVlOiAjMDBjZmU4ICFkZWZhdWx0OyAvLyRpbmZvXHJcbiRvcmFuZ2U6ICNmZjlmNDMgIWRlZmF1bHQ7IC8vJHdhcm5pbmdcclxuJHJlZDogI2VhNTQ1NSAhZGVmYXVsdDsgLy8kZGFuZ2VyXHJcblxyXG4kcHJpbWFyeTogJHB1cnBsZSAhZGVmYXVsdDtcclxuJHNlY29uZGFyeTogIzgyODY4YiAhZGVmYXVsdDtcclxuJGluZm86ICRibHVlICFkZWZhdWx0O1xyXG4kd2FybmluZzogJG9yYW5nZSAhZGVmYXVsdDtcclxuJGxpZ2h0OiAkZ3JheS01MCAhZGVmYXVsdDtcclxuJGRhcms6ICM0YjRiNGIgIWRlZmF1bHQ7XHJcblxyXG4vLyBTcGFjaW5nXHJcbi8vXHJcbi8vIENvbnRyb2wgdGhlIGRlZmF1bHQgc3R5bGluZyBvZiBtb3N0IEJvb3RzdHJhcCBlbGVtZW50cyBieSBtb2RpZnlpbmcgdGhlc2VcclxuLy8gdmFyaWFibGVzLiBNb3N0bHkgZm9jdXNlZCBvbiBzcGFjaW5nLlxyXG4vLyBZb3UgY2FuIGFkZCBtb3JlIGVudHJpZXMgdG8gdGhlICRzcGFjZXJzIG1hcCwgc2hvdWxkIHlvdSBuZWVkIG1vcmUgdmFyaWF0aW9uLlxyXG5cclxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGNvbnRhaW5lci1tYXgtd2lkdGhzXHJcbiRncmlkLWJyZWFrcG9pbnRzOiAoXHJcbiAgeHM6IDAsXHJcbiAgc206IDU3NnB4LFxyXG4gIG1kOiA3NjhweCxcclxuICBsZzogOTkycHgsXHJcbiAgeGw6IDEyMDBweCxcclxuICB4eGw6IDE0NDBweCAvLyBDdXN0b20geHhsIHNpemVcclxuKSAhZGVmYXVsdDtcclxuXHJcbiRjb250YWluZXItbWF4LXdpZHRoczogKFxyXG4gIHhzOiAwLFxyXG4gIHNtOiA1NzZweCxcclxuICBtZDogNzY4cHgsXHJcbiAgbGc6IDk5MnB4LFxyXG4gIHhsOiAxMjAwcHgsXHJcbiAgeHhsOiAxNDQwcHggLy8gQ3VzdG9tIHh4bCBzaXplXHJcbikgIWRlZmF1bHQ7XHJcbi8vIHNjc3MtZG9jcy1lbmQgY29udGFpbmVyLW1heC13aWR0aHNcclxuXHJcbi8vIHN0eWxlbGludC1kaXNhYmxlXHJcbiRzcGFjZXI6IDFyZW0gIWRlZmF1bHQ7XHJcbiRzcGFjZXJzOiAoKSAhZGVmYXVsdDtcclxuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcclxuJHNwYWNlcnM6IG1hcC1tZXJnZShcclxuICAoXHJcbiAgICAwOiAwLFxyXG4gICAgMjU6IChcclxuICAgICAgJHNwYWNlciAqIDAuMjVcclxuICAgICksXHJcbiAgICA1MDogKFxyXG4gICAgICAkc3BhY2VyICogMC41XHJcbiAgICApLFxyXG4gICAgNzU6IChcclxuICAgICAgJHNwYWNlciAqIDAuNzVcclxuICAgICksXHJcbiAgICAxOiAoXHJcbiAgICAgICRzcGFjZXJcclxuICAgICksXHJcbiAgICAyOiAoXHJcbiAgICAgICRzcGFjZXIgKiAxLjVcclxuICAgICksXHJcbiAgICAzOiAoXHJcbiAgICAgICRzcGFjZXIgKiAzXHJcbiAgICApLFxyXG4gICAgNDogKFxyXG4gICAgICAkc3BhY2VyICogMy41XHJcbiAgICApLFxyXG4gICAgNTogKFxyXG4gICAgICAkc3BhY2VyICogNFxyXG4gICAgKVxyXG4gICksXHJcbiAgJHNwYWNlcnNcclxuKTtcclxuXHJcbi8vIEJvZHlcclxuLy9cclxuLy8gU2V0dGluZ3MgZm9yIHRoZSBgPGJvZHk+YCBlbGVtZW50LlxyXG4kYm9keS1iZzogI2Y4ZjhmOCAhZGVmYXVsdDtcclxuJGJvZHktY29sb3I6ICM2ZTZiN2IgIWRlZmF1bHQ7XHJcblxyXG4vLyBMaW5rc1xyXG4vL1xyXG4vLyBTdHlsZSBhbmNob3IgZWxlbWVudHMuXHJcblxyXG4kbGluay1jb2xvcjogJHByaW1hcnkgIWRlZmF1bHQ7XHJcbiRsaW5rLWhvdmVyLWNvbG9yOiBkYXJrZW4oJGxpbmstY29sb3IsIDUlKSAhZGVmYXVsdDtcclxuJGxpbmstaG92ZXItZGVjb3JhdGlvbjogbm9uZSAhZGVmYXVsdDtcclxuXHJcbi8vIEdyaWQgY29sdW1uc1xyXG4vL1xyXG4vLyBTZXQgdGhlIG51bWJlciBvZiBjb2x1bW5zIGFuZCBzcGVjaWZ5IHRoZSB3aWR0aCBvZiB0aGUgZ3V0dGVycy5cclxuXHJcbiRncmlkLWd1dHRlci13aWR0aDogMnJlbSAhZGVmYXVsdDtcclxuXHJcbi8vIENvbXBvbmVudHNcclxuLy9cclxuLy8gRGVmaW5lIGNvbW1vbiBwYWRkaW5nIGFuZCBib3JkZXIgcmFkaXVzIHNpemVzIGFuZCBtb3JlLlxyXG5cclxuJGxpbmUtaGVpZ2h0LWxnOiAxLjI1ICFkZWZhdWx0O1xyXG4kbGluZS1oZWlnaHQtc206IDEgIWRlZmF1bHQ7XHJcblxyXG4kYm9yZGVyLXdpZHRoOiAxcHggIWRlZmF1bHQ7XHJcbiRib3JkZXItY29sb3I6ICNlYmU5ZjEgIWRlZmF1bHQ7XHJcbiRib3JkZXItcmFkaXVzOiAwLjM1N3JlbSAhZGVmYXVsdDtcclxuJGJvcmRlci1yYWRpdXMtbGc6IDAuNnJlbSAhZGVmYXVsdDtcclxuJGJvcmRlci1yYWRpdXMtc206IDAuMjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyBzaGFkb3dcclxuJGJveC1zaGFkb3c6IDAgNHB4IDI0cHggMCByZ2JhKCRibGFjaywgMC4xKSAhZGVmYXVsdDtcclxuLy8gVHlwb2dyYXBoeVxyXG5cclxuLy9cclxuLy8gRm9udCwgbGluZS1oZWlnaHQsIGFuZCBjb2xvciBmb3IgYm9keSB0ZXh0LCBoZWFkaW5ncywgYW5kIG1vcmUuXHJcblxyXG4vLyBzdHlsZWxpbnQtZGlzYWJsZSB2YWx1ZS1rZXl3b3JkLWNhc2VcclxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICdNb250c2VycmF0JywgSGVsdmV0aWNhLCBBcmlhbCwgc2VyaWYgIWRlZmF1bHQ7XHJcbiRmb250LWZhbWlseS1tb25vc3BhY2U6ICdNb250c2VycmF0JywgSGVsdmV0aWNhLCBBcmlhbCwgc2VyaWYgIWRlZmF1bHQ7XHJcblxyXG4vLyBzdHlsZWxpbnQtZW5hYmxlIHZhbHVlLWtleXdvcmQtY2FzZVxyXG4kZm9udC1zaXplLWJhc2U6IDFyZW0gIWRlZmF1bHQ7XHJcbiRmb250LXNpemUtbGc6IGNlaWwoJGZvbnQtc2l6ZS1iYXNlICogMS4yNSkgIWRlZmF1bHQ7XHJcbiRmb250LXNpemUtc206IGNlaWwoJGZvbnQtc2l6ZS1iYXNlICogMC44NSkgIWRlZmF1bHQ7XHJcblxyXG4kZm9udC13ZWlnaHQtbm9ybWFsOiA0MDAgIWRlZmF1bHQ7XHJcbiRmb250LXdlaWdodC1ib2xkOiA1MDAgIWRlZmF1bHQ7XHJcbiRmb250LXdlaWdodC1ib2xkZXI6IDYwMCAhZGVmYXVsdDtcclxuXHJcbiRsaW5lLWhlaWdodC1iYXNlOiAxLjQ1ICFkZWZhdWx0O1xyXG5cclxuJGgxLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMiAhZGVmYXVsdDtcclxuJGgyLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMS43MTQgIWRlZmF1bHQ7XHJcbiRoMy1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDEuNSAhZGVmYXVsdDtcclxuJGg0LWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMS4yODYgIWRlZmF1bHQ7XHJcbiRoNS1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDEuMDcgIWRlZmF1bHQ7XHJcblxyXG4kaGVhZGluZ3MtZm9udC1mYW1pbHk6IGluaGVyaXQgIWRlZmF1bHQ7XHJcbiRoZWFkaW5ncy1jb2xvcjogIzVlNTg3MyAhZGVmYXVsdDtcclxuXHJcbiRkaXNwbGF5MS13ZWlnaHQ6ICRmb250LXdlaWdodC1ub3JtYWwgIWRlZmF1bHQ7XHJcbiRkaXNwbGF5Mi13ZWlnaHQ6ICRmb250LXdlaWdodC1ub3JtYWwgIWRlZmF1bHQ7XHJcbiRkaXNwbGF5My13ZWlnaHQ6ICRmb250LXdlaWdodC1ub3JtYWwgIWRlZmF1bHQ7XHJcbiRkaXNwbGF5NC13ZWlnaHQ6ICRmb250LXdlaWdodC1ub3JtYWwgIWRlZmF1bHQ7XHJcblxyXG4kbGVhZC1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDEuMTQgIWRlZmF1bHQ7XHJcbiRsZWFkLWZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtbm9ybWFsICFkZWZhdWx0O1xyXG5cclxuJHNtYWxsLWZvbnQtc2l6ZTogMC44NTdyZW0gIWRlZmF1bHQ7XHJcblxyXG4kdGV4dC1tdXRlZDogI2I5YjljMyAhZGVmYXVsdDtcclxuJGhyLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuXHJcbiRibG9ja3F1b3RlLXNtYWxsLWNvbG9yOiAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcclxuXHJcbi8vIFRhYmxlc1xyXG5cclxuJHRhYmxlLWNlbGwtcGFkZGluZzogMC43MnJlbSAhZGVmYXVsdDtcclxuXHJcbiR0YWJsZS1hY2NlbnQtYmc6ICNmYWZhZmMgIWRlZmF1bHQ7XHJcbiR0YWJsZS1ob3Zlci1iZzogI2Y2ZjZmOSAhZGVmYXVsdDtcclxuXHJcbiR0YWJsZS1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4kdGFibGUtaGVhZC1iZzogI2YzZjJmNyAhZGVmYXVsdDtcclxuJHRhYmxlLWhlYWQtY29sb3I6ICRoZWFkaW5ncy1jb2xvciAhZGVmYXVsdDtcclxuXHJcbiR0YWJsZS1kYXJrLWJnOiAkZGFyayAhZGVmYXVsdDtcclxuJHRhYmxlLWRhcmstYm9yZGVyLWNvbG9yOiAjNDA0MDQwICFkZWZhdWx0O1xyXG5cclxuJHRhYmxlLXRoLWZvbnQtc2l6ZTogMC44NTdyZW0gIWRlZmF1bHQ7IC8vIGN1c3RvbVxyXG5cclxuLy8gQnV0dG9ucyArIEZvcm1zXHJcbiRidG4tcGFkZGluZy15OiAwLjc4NnJlbSAhZGVmYXVsdDtcclxuJGJ0bi1wYWRkaW5nLXg6IDEuNXJlbSAhZGVmYXVsdDtcclxuJGlucHV0LWJ0bi1wYWRkaW5nLXk6IDAuNzVyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1idG4tcGFkZGluZy14OiAycmVtICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWJ0bi1wYWRkaW5nLXktc206IDAuNDg2cmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtYnRuLXBhZGRpbmcteC1zbTogMXJlbSAhZGVmYXVsdDtcclxuJGlucHV0LWJ0bi1mb250LXNpemUtc206ICRmb250LXNpemUtYmFzZSAqIDAuOSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1idG4tcGFkZGluZy15LWxnOiAwLjhyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1idG4tcGFkZGluZy14LWxnOiAycmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtYnRuLWZvbnQtc2l6ZS1sZzogJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcclxuJGJ0bi1saW5lLWhlaWdodDogMSAhZGVmYXVsdDtcclxuJGJ0bi1ib3JkZXItcmFkaXVzOiAwLjM1OHJlbSAhZGVmYXVsdDtcclxuJGJ0bi1ib3JkZXItcmFkaXVzLWxnOiAwLjM1OHJlbSAhZGVmYXVsdDtcclxuJGJ0bi1ib3JkZXItcmFkaXVzLXNtOiAwLjM1OHJlbSAhZGVmYXVsdDtcclxuXHJcbiRidG4tdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCxcclxuICBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kIDBzLCBib3JkZXIgMHMgIWRlZmF1bHQ7XHJcblxyXG4vLyBGb3Jtc1xyXG4kY3VzdG9tLWNvbnRyb2wtYm9yZGVyLWNvbG9yOiAjZDhkNmRlO1xyXG4kbGFiZWwtbWFyZ2luLWJvdHRvbTogMC4yODU3cmVtICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LXBhZGRpbmcteTogMC40MzhyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1wYWRkaW5nLXg6IDFyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1mb250LXNpemU6IDFyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1saW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LWJhc2UgIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtcGFkZGluZy15LXNtOiAwLjE4OHJlbSAhZGVmYXVsdDtcclxuJGlucHV0LXBhZGRpbmcteC1zbTogMC44NTdyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1mb250LXNpemUtc206IDAuODU3cmVtICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LXBhZGRpbmcteS1sZzogMC43NXJlbSAhZGVmYXVsdDtcclxuJGlucHV0LXBhZGRpbmcteC1sZzogMS4xNDNyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1mb250LXNpemUtbGc6IDEuMTQzcmVtICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWRpc2FibGVkLWJnOiAjZWZlZmVmICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWNvbG9yOiAkYm9keS1jb2xvciAhZGVmYXVsdDtcclxuJGlucHV0LWJvcmRlci1jb2xvcjogJGN1c3RvbS1jb250cm9sLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuJGlucHV0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKCRibGFjaywgMC4wNzUpICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1sZzogJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcbiRpbnB1dC1ib3JkZXItcmFkaXVzLXNtOiAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3I6ICRwcmltYXJ5ICFkZWZhdWx0O1xyXG4kaW5wdXQtZm9jdXMtYm94LXNoYWRvdzogMCAzcHggMTBweCAwIHJnYmEoJGJsYWNrLCAwLjEpICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LXBsYWNlaG9sZGVyLWNvbG9yOiAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcclxuJGlucHV0LXBsYWludGV4dC1jb2xvcjogJGJvZHktY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtaGVpZ2h0OiAyLjcxNHJlbSAhZGVmYXVsdDtcclxuJGlucHV0LWhlaWdodC1zbTogMi4xNDJyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1oZWlnaHQtbGc6IDMuMjg1N3JlbSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1ncm91cC1hZGRvbi1iZzogd2hpdGUgIWRlZmF1bHQ7XHJcbiRjdXN0b20tZm9ybXMtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LFxyXG4gIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQgMHMsIGJvcmRlci1jb2xvciAwcyAhZGVmYXVsdDtcclxuXHJcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm9yZGVyLWNvbG9yOiAkY3VzdG9tLWNvbnRyb2wtYm9yZGVyLWNvbG9yO1xyXG5cclxuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1czogM3B4ICFkZWZhdWx0O1xyXG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1jaGVja2VkLWNvbG9yOiB3aGl0ZSAhZGVmYXVsdDtcclxuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1jb2xvcjogd2hpdGUgIWRlZmF1bHQ7XHJcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWljb24tY2hlY2tlZDogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgOS41IDcuNSclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzAuNzUgNC4zNSA0LjE4IDYuNzUgOC43NSAwLjc1JyBzdHlsZT0nZmlsbDpub25lO3N0cm9rZTolMjNmZmY7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDoxLjVweCcvJTNFJTNDL3N2ZyUzRVwiKTtcclxuXHJcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWljb24taW5kZXRlcm1pbmF0ZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPScjeyRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtY29sb3J9JyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1taW51cyclM0UlM0NsaW5lIHgxPSc1JyB5MT0nMTInIHgyPScxOScgeTI9JzEyJyUzRSUzQy9saW5lJTNFJTNDL3N2ZyUzRVwiKTtcclxuXHJcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1kaXNhYmxlZC1iZzogcmdiYSgkcHJpbWFyeSwgMC42NSk7XHJcblxyXG4kY3VzdG9tLXJhZGlvLWluZGljYXRvci1pY29uLWNoZWNrZWQ6IG5vbmU7XHJcblxyXG4kY3VzdG9tLWZpbGUtaGVpZ2h0LWlubmVyOiAkaW5wdXQtaGVpZ2h0ICFkZWZhdWx0O1xyXG5cclxuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLXBhZGRpbmc6IDFyZW0gIWRlZmF1bHQ7IC8vIEV4dHJhIHBhZGRpbmcgdG8gYWNjb3VudCBmb3IgdGhlIHByZXNlbmNlIG9mIHRoZSBiYWNrZ3JvdW5kLWltYWdlIGJhc2VkIGluZGljYXRvclxyXG4kY3VzdG9tLXNlbGVjdC1kaXNhYmxlZC1iZzogJGlucHV0LWRpc2FibGVkLWJnICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1iZy1zaXplOiAxMHB4IDEwcHggIWRlZmF1bHQ7IC8vIEluIHBpeGVscyBiZWNhdXNlIGltYWdlIGRpbWVuc2lvbnNcclxuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLWNvbG9yOiAkaW5wdXQtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3I6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzQnIGhlaWdodD0nNScgdmlld0JveD0nMCAwIDQgNSc+PHBhdGggZmlsbD0nI3skY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItY29sb3J9JyBkPSdNMiAwTDAgMmg0em0wIDVMMCAzaDR6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1zZWxlY3QtZmVlZGJhY2staWNvbi1wb3NpdGlvbjogY2VudGVyIHJpZ2h0ICgkY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXggKyAkY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItcGFkZGluZykgIWRlZmF1bHQ7XHJcbi8vICRjdXN0b20tc2VsZWN0LWZlZWRiYWNrLWljb24tc2l6ZTogJGlucHV0LWhlaWdodC1pbm5lci1oYWxmICRpbnB1dC1oZWlnaHQtaW5uZXItaGFsZiAhZGVmYXVsdDtcclxuXHJcbiRjdXN0b20tc2VsZWN0LWJvcmRlci1yYWRpdXM6ICRpbnB1dC1ib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1mb2N1cy1ib3gtc2hhZG93OiAkaW5wdXQtZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcclxuXHJcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteS1zbTogJGlucHV0LXBhZGRpbmcteS1zbSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14LXNtOiAkaW5wdXQtcGFkZGluZy14LXNtICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1mb250LXNpemUtc206ICRpbnB1dC1mb250LXNpemUtc20gIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWhlaWdodC1zbTogJGlucHV0LWhlaWdodC1zbSAhZGVmYXVsdDtcclxuXHJcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteS1sZzogJGlucHV0LXBhZGRpbmcteS1sZyAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14LWxnOiAkaW5wdXQtcGFkZGluZy14LWxnICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1mb250LXNpemUtbGc6ICRpbnB1dC1mb250LXNpemUtbGcgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LWhlaWdodC1sZzogJGlucHV0LWhlaWdodC1sZyAhZGVmYXVsdDtcclxuXHJcbi8vIERyb3Bkb3duc1xyXG4vL1xyXG4vLyBEcm9wZG93biBtZW51IGNvbnRhaW5lciBhbmQgY29udGVudHMuXHJcblxyXG4kZHJvcGRvd24tYm9yZGVyLWNvbG9yOiByZ2JhKCRibGFjaywgMC4wNSkgIWRlZmF1bHQ7XHJcbiRkcm9wZG93bi1ib3JkZXItcmFkaXVzOiAwLjM1OHJlbSAhZGVmYXVsdDtcclxuJGRyb3Bkb3duLWJveC1zaGFkb3c6IDAgNXB4IDI1cHggcmdiYSgkYmxhY2ssIDAuMSkgIWRlZmF1bHQ7XHJcblxyXG4kZHJvcGRvd24tbGluay1jb2xvcjogJGJvZHktY29sb3IgIWRlZmF1bHQ7XHJcbiRkcm9wZG93bi1saW5rLWhvdmVyLWNvbG9yOiAkcHJpbWFyeSAhZGVmYXVsdDtcclxuJGRyb3Bkb3duLWxpbmstaG92ZXItYmc6IHJnYmEoJHByaW1hcnksIDAuMTIpICFkZWZhdWx0O1xyXG5cclxuJGRyb3Bkb3duLWRpdmlkZXItYmc6IHJnYmEoJGJsYWNrLCAwLjA4KSAhZGVmYXVsdDtcclxuJGRyb3Bkb3duLWZvbnQtc2l6ZTogMXJlbSAhZGVmYXVsdDtcclxuJGRyb3Bkb3duLXNwYWNlcjogMCAhZGVmYXVsdDtcclxuJHppbmRleC1kcm9wZG93bjogMTAgIWRlZmF1bHQ7XHJcblxyXG4kZHJvcGRvd24tYm94LXNoYWRvdzogMCA1cHggMjVweCAwIHJnYmEoJGJsYWNrLCAwLjEpICFkZWZhdWx0O1xyXG5cclxuJGRyb3Bkb3duLWxpbmstZGlzYWJsZWQtY29sb3I6ICR0ZXh0LW11dGVkICFkZWZhdWx0O1xyXG5cclxuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy15OiAwLjY1cmVtICFkZWZhdWx0O1xyXG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXg6IDEuMjhyZW0gIWRlZmF1bHQ7XHJcblxyXG4kZHJvcGRvd24taGVhZGVyLWNvbG9yOiAkaGVhZGluZ3MtY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4kZHJvcGRvd25fc3BhY2luZzogMC41cmVtOyAvLyBjdXN0b21cclxuXHJcbi8vIFBhZ2luYXRpb25cclxuXHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteTogMC41cmVtICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXg6IDAuODVyZW0gIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteS1sZzogMC41NTc1cmVtICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXgtbGc6IDFyZW0gIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteS1zbTogMC40NDNyZW0gIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteC1zbTogMC43NDVyZW0gIWRlZmF1bHQ7XHJcblxyXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1jb2xvcjogJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XHJcblxyXG4kcGFnaW5hdGlvbi1jb2xvcjogJGJvZHktY29sb3IgIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLWJnOiAjZjNmMmY3ICFkZWZhdWx0O1xyXG5cclxuJHBhZ2luYXRpb24taG92ZXItY29sb3I6ICRwcmltYXJ5ICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1ob3Zlci1iZzogI2YzZjJmNyAhZGVmYXVsdDtcclxuXHJcbiRwYWdpbmF0aW9uLWFjdGl2ZS1jb2xvcjogJHByaW1hcnkgIWRlZmF1bHQ7XHJcblxyXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1jb2xvcjogJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XHJcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJnOiAjZjNmMmY3ICFkZWZhdWx0O1xyXG5cclxuJHBhZ2luYXRpb24tZm9udC1zaXplLWxnOiAxLjE0cmVtICFkZWZhdWx0OyAvLyBjdXN0b21cclxuJHBhZ2luYXRpb24tZm9udC1zaXplLXNtOiAwLjg1N3JlbSAhZGVmYXVsdDsgLy8gY3VzdG9tXHJcblxyXG4vLyBDYXJkc1xyXG4kY2FyZC1zcGFjZXIteTogMS41cmVtICFkZWZhdWx0O1xyXG4kY2FyZC1zcGFjZXIteDogMS41cmVtICFkZWZhdWx0O1xyXG4kY2FyZC1ib3JkZXItcmFkaXVzOiAwLjQyOHJlbSAhZGVmYXVsdDtcclxuXHJcbi8vQWxlcnRzXHJcblxyXG4kYWxlcnQtcGFkZGluZy15OiAwLjcxcmVtICFkZWZhdWx0O1xyXG4kYWxlcnQtcGFkZGluZy14OiAxcmVtICFkZWZhdWx0O1xyXG4kYWxlcnQtYm9yZGVyLXJhZGl1czogMC4zNThyZW0gIWRlZmF1bHQ7XHJcbiRhbGVydC1saW5rLWZvbnQtd2VpZ2h0OiA3MDAgIWRlZmF1bHQ7XHJcblxyXG4vLyBMaXN0IGdyb3VwXHJcblxyXG4kbGlzdC1ncm91cC1ib3JkZXItcmFkaXVzOiAwLjM1OHJlbSAhZGVmYXVsdDtcclxuJGxpc3QtZ3JvdXAtZGlzYWJsZWQtY29sb3I6ICR0ZXh0LW11dGVkICFkZWZhdWx0O1xyXG5cclxuJGxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1jb2xvcjogJHdoaXRlICFkZWZhdWx0O1xyXG4kbGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWJnOiAkcHJpbWFyeSAhZGVmYXVsdDtcclxuXHJcbi8vIE5hdiB0YWJzXHJcblxyXG4kbmF2LWxpbmstcGFkZGluZy15OiAwLjM1OHJlbSAhZGVmYXVsdDtcclxuJG5hdi1saW5rLXBhZGRpbmcteDogMC41cmVtICFkZWZhdWx0O1xyXG4kbmF2LWxpbmstZGlzYWJsZWQtY29sb3I6ICR0ZXh0LW11dGVkICFkZWZhdWx0O1xyXG5cclxuJG5hdi10YWJzLWJvcmRlci13aWR0aDogMCAhZGVmYXVsdDtcclxuJG5hdi10YWJzLWJvcmRlci1yYWRpdXM6IDAuMjUgIWRlZmF1bHQ7XHJcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1jb2xvcjogJHByaW1hcnkgIWRlZmF1bHQ7XHJcblxyXG4kbmF2LXRhYnMtbGluay1hY3RpdmUtYmc6IHRyYW5zcGFyZW50ICFkZWZhdWx0O1xyXG5cclxuJG5hdi1waWxscy1ib3JkZXItcmFkaXVzOiAkYnRuLWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcblxyXG4vLyBuYXZiYXJcclxuXHJcbiRmbG9hdGluZy1uYXYtbWFyZ2luOiAxLjNyZW07XHJcblxyXG4vLyBUb29sdGlwc1xyXG5cclxuJHRvb2x0aXAtYmc6ICMzMjMyMzIgIWRlZmF1bHQ7XHJcbiR0b29sdGlwLXBhZGRpbmcteTogMC40cmVtICFkZWZhdWx0O1xyXG4kdG9vbHRpcC1wYWRkaW5nLXg6IDAuNzc1cmVtICFkZWZhdWx0O1xyXG4kdG9vbHRpcC1mb250LXNpemU6IDAuODU3cmVtICFkZWZhdWx0O1xyXG4kdG9vbHRpcC1ib3JkZXItcmFkaXVzOiAwLjM1OHJlbSAhZGVmYXVsdDtcclxuJHRvb2x0aXAtb3BhY2l0eTogMSAhZGVmYXVsdDtcclxuJHRvb2x0aXAtbWF4LXdpZHRoOiAyMjBweCAhZGVmYXVsdDtcclxuXHJcbi8vIFBvcG92ZXJzXHJcblxyXG4kcG9wb3Zlci1mb250LXNpemU6IDFyZW0gIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWJvcmRlci13aWR0aDogMCAhZGVmYXVsdDtcclxuJHBvcG92ZXItYm9yZGVyLXJhZGl1czogMC4zNThyZW0gIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuJHBvcG92ZXItYm94LXNoYWRvdzogMCAwIDEwcHggMCByZ2JhKCRibGFjaywgMC4xKSAhZGVmYXVsdDtcclxuXHJcbiRwb3BvdmVyLWhlYWRlci1iZzogJHByaW1hcnkgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWhlYWRlci1jb2xvcjogJHdoaXRlICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy15OiAwLjY1cmVtICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy14OiAxLjIxcmVtICFkZWZhdWx0O1xyXG5cclxuLy8gVG9hc3RzXHJcblxyXG4kdG9hc3QtbWF4LXdpZHRoOiAzODBweCAhZGVmYXVsdDtcclxuJHRvYXN0LXBhZGRpbmcteDogMS4xNHJlbSAhZGVmYXVsdDtcclxuJHRvYXN0LXBhZGRpbmcteTogMC4xNXJlbSAhZGVmYXVsdDtcclxuJHRvYXN0LWZvbnQtc2l6ZTogMC44NTdyZW0gIWRlZmF1bHQ7XHJcbiR0b2FzdC1jb2xvcjogJGJvZHktY29sb3IgIWRlZmF1bHQ7XHJcbiR0b2FzdC1ib3JkZXItd2lkdGg6IDAgIWRlZmF1bHQ7XHJcbiR0b2FzdC1ib3JkZXItcmFkaXVzOiAwLjI4NnJlbSAhZGVmYXVsdDtcclxuJHRvYXN0LWJveC1zaGFkb3c6IDAgMnB4IDIwcHggMCByZ2JhKCRibGFjaywgMC4wOCkgIWRlZmF1bHQ7XHJcblxyXG4kdG9hc3QtaGVhZGVyLWNvbG9yOiAkYm9keS1jb2xvciAhZGVmYXVsdDtcclxuJHRvYXN0LWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUgIWRlZmF1bHQ7XHJcblxyXG4vLyBQcm9ncmVzc1xyXG5cclxuJHByb2dyZXNzLWhlaWdodDogMC44NTdyZW0gIWRlZmF1bHQ7XHJcbiRwcm9ncmVzcy1ib3JkZXItcmFkaXVzOiA1cmVtICFkZWZhdWx0O1xyXG4kcHJvZ3Jlc3MtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAwLjg1NyAhZGVmYXVsdDtcclxuJHByb2dyZXNzLWJnOiByZ2JhKCRwcmltYXJ5LCAwLjEyKSAhZGVmYXVsdDtcclxuXHJcbi8vIEJyZWFkY3J1bWJzXHJcblxyXG4kYnJlYWRjcnVtYi1mb250LXNpemU6IDFyZW0gIWRlZmF1bHQ7XHJcblxyXG4kYnJlYWRjcnVtYi1wYWRkaW5nLXk6IDAuM3JlbSAhZGVmYXVsdDtcclxuJGJyZWFkY3J1bWItaXRlbS1wYWRkaW5nOiAwLjZyZW0gIWRlZmF1bHQ7XHJcblxyXG4kYnJlYWRjcnVtYi1tYXJnaW4tYm90dG9tOiAwICFkZWZhdWx0O1xyXG5cclxuJGJyZWFkY3J1bWItYmc6IHRyYW5zcGFyZW50ICFkZWZhdWx0O1xyXG4kYnJlYWRjcnVtYi1kaXZpZGVyLWNvbG9yOiAkYm9keS1jb2xvciAhZGVmYXVsdDtcclxuJGJyZWFkY3J1bWItYWN0aXZlLWNvbG9yOiAkYm9keS1jb2xvciAhZGVmYXVsdDtcclxuXHJcbiRicmVhZGNydW1iLWJvcmRlci1yYWRpdXM6IDAgIWRlZmF1bHQ7XHJcblxyXG4vLyBDYXJvdXNlbFxyXG5cclxuJGNhcm91c2VsLWNvbnRyb2wtY29sb3I6ICR3aGl0ZSAhZGVmYXVsdDtcclxuJGNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uLWJnOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjeyRjYXJvdXNlbC1jb250cm9sLWNvbG9yfVwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLWxlZnRcIj48cG9seWxpbmUgcG9pbnRzPVwiMTUgMTggOSAxMiAxNSA2XCI+PC9wb2x5bGluZT48L3N2Zz4nKSAhZGVmYXVsdDtcclxuJGNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uLWJnOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjeyRjYXJvdXNlbC1jb250cm9sLWNvbG9yfVwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLXJpZ2h0XCI+PHBvbHlsaW5lIHBvaW50cz1cIjkgMTggMTUgMTIgOSA2XCI+PC9wb2x5bGluZT48L3N2Zz4nKSAhZGVmYXVsdDtcclxuXHJcbi8vIEJhZGdlc1xyXG5cclxuJGJhZGdlLWZvbnQtc2l6ZTogODUlICFkZWZhdWx0O1xyXG4kYmFkZ2UtcGFkZGluZy15OiAwLjNyZW0gIWRlZmF1bHQ7XHJcbiRiYWRnZS1wYWRkaW5nLXg6IDAuNXJlbSAhZGVmYXVsdDtcclxuJGJhZGdlLWZvbnQtd2VpZ2h0OiA2MDAgIWRlZmF1bHQ7XHJcbiRiYWRnZS1ib3JkZXItcmFkaXVzOiAwLjM1OHJlbSAhZGVmYXVsdDtcclxuXHJcbiRiYWRnZS1waWxsLXBhZGRpbmcteDogMC41cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gTW9kYWxcclxuJG1vZGFsLWlubmVyLXBhZGRpbmc6IDAuOHJlbSAxLjRyZW0gIWRlZmF1bHQ7XHJcblxyXG4kbW9kYWwtZm9vdGVyLWJvcmRlci1jb2xvcjogcmdiYSgkYmxhY2ssIDAuMDUpICFkZWZhdWx0O1xyXG5cclxuJG1vZGFsLWhlYWRlci1wYWRkaW5nLXk6IDAuOHJlbSAhZGVmYXVsdDtcclxuJG1vZGFsLWhlYWRlci1wYWRkaW5nLXg6IDEuNHJlbSAhZGVmYXVsdDtcclxuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXJhZGl1czogMC4zNThyZW0gIWRlZmF1bHQ7XHJcblxyXG4kbW9kYWwteGw6IDk0JSAhZGVmYXVsdDtcclxuJG1vZGFsLXNtOiA0MDBweCAhZGVmYXVsdDtcclxuXHJcbi8vICAgIFNsaWRlIEluIE1vZGFsXHJcbiRtb2RhbC1zbGlkZS1pbi13aWR0aC1zbTogMjVyZW0gIWRlZmF1bHQ7IC8vIGN1c3RvbVxyXG4kbW9kYWwtc2xpZGUtaW4td2lkdGg6IDI4cmVtICFkZWZhdWx0OyAvLyBjdXN0b21cclxuJG1vZGFsLXNsaWRlLWluLXdpZHRoLWxnOiAzMHJlbSAhZGVmYXVsdDsgLy8gY3VzdG9tXHJcblxyXG4vLyBDbG9zZVxyXG5cclxuJGNsb3NlLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMiAhZGVmYXVsdDtcclxuJGNsb3NlLWZvbnQtd2VpZ2h0OiA0MDAgIWRlZmF1bHQ7XHJcbiRjbG9zZS1jb2xvcjogJGhlYWRpbmdzLWNvbG9yICFkZWZhdWx0O1xyXG5cclxuLy8gQ29kZVxyXG5cclxuJGNvZGUtZm9udC1zaXplOiA5MCUgIWRlZmF1bHQ7XHJcbiRrYmQtYmc6ICNlZWUgIWRlZmF1bHQ7XHJcblxyXG4vLyBTd2l0Y2hcclxuJGN1c3RvbS1zd2l0Y2gtd2lkdGg6IDNyZW0gIWRlZmF1bHQ7XHJcbiRjdXN0b20tc3dpdGNoLWluZGljYXRvci1ib3JkZXItcmFkaXVzOiAxcmVtICFkZWZhdWx0O1xyXG4kY3VzdG9tLXN3aXRjaC1pbmRpY2F0b3Itc2l6ZTogMXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vc3ZnIGNvbG9yXHJcbiRzdmctY29sb3ItbGlnaHQ6ICM2MjYyNjIgIWRlZmF1bHQ7XHJcblxyXG4vLyBTVkcgaWNvbnNcclxuLy8gRm9yIEJyZWFkY3J1bWJcclxuJGRvdWJsZS1jaGV2cm9uLXJpZ2h0OiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9ucy1yaWdodCclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzEzIDE3IDE4IDEyIDEzIDcnJTNFJTNDL3BvbHlsaW5lJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc2IDE3IDExIDEyIDYgNyclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCI7XHJcbi8vIENoZXZyb24gSWNvbnNcclxuJGNoZXZyb24tbGVmdDogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1sZWZ0JyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nMTUgMTggOSAxMiAxNSA2JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIjtcclxuJGNoZXZyb24tcmlnaHQ6IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tcmlnaHQnJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc5IDE4IDE1IDEyIDkgNiclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCI7XHJcbiRjaGV2cm9uLXVwOiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLXVwJyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nMTggMTUgMTIgOSA2IDE1JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIjtcclxuJGNoZXZyb24tZG93bjogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1kb3duJyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nNiA5IDEyIDE1IDE4IDknJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiO1xyXG5cclxuJGRvd25sb2FkOiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1kb3dubG9hZCclM0UlM0NwYXRoIGQ9J00yMSAxNXY0YTIgMiAwIDAgMS0yIDJINWEyIDIgMCAwIDEtMi0ydi00JyUzRSUzQy9wYXRoJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc3IDEwIDEyIDE1IDE3IDEwJyUzRSUzQy9wb2x5bGluZSUzRSUzQ2xpbmUgeDE9JzEyJyB5MT0nMTUnIHgyPScxMicgeTI9JzMnJTNFJTNDL2xpbmUlM0UlM0Mvc3ZnJTNFXCI7XHJcbiRyZW1vdmU6IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLXgnJTNFJTNDbGluZSB4MT0nMTgnIHkxPSc2JyB4Mj0nNicgeTI9JzE4JyUzRSUzQy9saW5lJTNFJTNDbGluZSB4MT0nNicgeTE9JzYnIHgyPScxOCcgeTI9JzE4JyUzRSUzQy9saW5lJTNFJTNDL3N2ZyUzRVwiO1xyXG4kY2hlY2s6IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hlY2snJTNFJTNDcG9seWxpbmUgcG9pbnRzPScyMCA2IDkgMTcgNCAxMiclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCI7XHJcbiRjaXJjbGU6IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2lyY2xlJyUzRSUzQ2NpcmNsZSBjeD0nMTInIGN5PScxMicgcj0nMTAnJTNFJTNDL2NpcmNsZSUzRSUzQy9zdmclM0VcIjtcclxuJGluZm9JY29uOiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWluZm8nJTNFJTNDY2lyY2xlIGN4PScxMicgY3k9JzEyJyByPScxMCclM0UlM0MvY2lyY2xlJTNFJTNDbGluZSB4MT0nMTInIHkxPScxNicgeDI9JzEyJyB5Mj0nMTInJTNFJTNDL2xpbmUlM0UlM0NsaW5lIHgxPScxMicgeTE9JzgnIHgyPScxMi4wMScgeTI9JzgnJTNFJTNDL2xpbmUlM0UlM0Mvc3ZnJTNFXCI7XHJcbiR3YXJuaW5nSWNvbjogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1hbGVydC10cmlhbmdsZSclM0UlM0NwYXRoIGQ9J00xMC4yOSAzLjg2TDEuODIgMThhMiAyIDAgMCAwIDEuNzEgM2gxNi45NGEyIDIgMCAwIDAgMS43MS0zTDEzLjcxIDMuODZhMiAyIDAgMCAwLTMuNDIgMHonJTNFJTNDL3BhdGglM0UlM0NsaW5lIHgxPScxMicgeTE9JzknIHgyPScxMicgeTI9JzEzJyUzRSUzQy9saW5lJTNFJTNDbGluZSB4MT0nMTInIHkxPScxNycgeDI9JzEyLjAxJyB5Mj0nMTcnJTNFJTNDL2xpbmUlM0UlM0Mvc3ZnJTNFXCI7XHJcbiRtZW51OiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgZmlsbD0nbm9uZScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nY3NzLWk2ZHpxMSclM0UlM0NsaW5lIHgxPSczJyB5MT0nMTInIHgyPScyMScgeTI9JzEyJyUzRSUzQy9saW5lJTNFJTNDbGluZSB4MT0nMycgeTE9JzYnIHgyPScyMScgeTI9JzYnJTNFJTNDL2xpbmUlM0UlM0NsaW5lIHgxPSczJyB5MT0nMTgnIHgyPScyMScgeTI9JzE4JyUzRSUzQy9saW5lJTNFJTNDL3N2ZyUzRVwiO1xyXG5cclxuJGNoYXQtYmctbGlnaHQ6ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlkWFJtTFRnaVB6NEtQQ0V0TFNCSFpXNWxjbUYwYjNJNklFRmtiMkpsSUVsc2JIVnpkSEpoZEc5eUlESXpMakF1TVN3Z1UxWkhJRVY0Y0c5eWRDQlFiSFZuTFVsdUlDNGdVMVpISUZabGNuTnBiMjQ2SURZdU1EQWdRblZwYkdRZ01Da2dJQzB0UGdvOGMzWm5JSFpsY25OcGIyNDlJakV1TVNJZ2FXUTlJa3hoZVdWeVh6RWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdlRzFzYm5NNmVHeHBibXM5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZlR3hwYm1zaUlIZzlJakJ3ZUNJZ2VUMGlNSEI0SWdvSklIWnBaWGRDYjNnOUlqQWdNQ0F5TmpBZ01qWXdJaUJ6ZEhsc1pUMGlaVzVoWW14bExXSmhZMnRuY205MWJtUTZibVYzSURBZ01DQXlOakFnTWpZd095SWdlRzFzT25Od1lXTmxQU0p3Y21WelpYSjJaU0krQ2p4emRIbHNaU0IwZVhCbFBTSjBaWGgwTDJOemN5SStDZ2t1YzNRd2UyWnBiR3d0Y25Wc1pUcGxkbVZ1YjJSa08yTnNhWEF0Y25Wc1pUcGxkbVZ1YjJSa08yWnBiR3c2STBVeFJUQkZPVHQ5Q2p3dmMzUjViR1UrQ2p4blBnb0pQR2NnYVdROUlta3RiR2xyWlMxbWIyOWtJajRLQ1FrOGNHRjBhQ0JqYkdGemN6MGljM1F3SWlCa1BTSk5NalF1TkN3eE5tTXdMaklzTUM0MkxEQXVOQ3d4TGpNc01DNDFMREpvTFRNdU4yd3hMaklzTWk0emJEQXVOU3d3TGpsc0xUQXVNaXd3TGpGV01qaGpNaTR5TERFdU55d3lMamNzTkM0NExERXNOd29KQ1FsakxUQXVPQ3d4TFRFdU9Td3hMamN0TXk0eUxERXVPVll6TjJNdE1DNDVMRE11TlMwMExqRXNOaTAzTGpnc05tZ3RNakJqTFRNdU5pd3dMVFl1T0MweUxqVXROeTQzTFRaMkxUQXVNV010TWk0M0xUQXVOQzAwTGpZdE15MDBMakl0TlM0M1l6QXVNaTB4TGpNc01DNDVMVEl1TlN3eExqa3RNeTR5Q2drSkNYWXROaTQ0YkMwd0xqZ3RNUzQyYkMwd0xqUXRNQzQ1YkRBdU9TMHdMalJNTFRFM0xERTRhQzB6UXkweE55NHlMRFV1TmkwMExqa3RNaTR5TERjdU5Td3dMalpETVRVdU5Dd3lMak1zTWpFdU9TdzRMaklzTWpRdU5Dd3hObm9nVFMweE1pNDBMREU0WXkwd0xqSXNNQzB3TGpNc01DMHdMalFzTUM0eENna0pDV3d0TXk0eExERXVObXd3TGprc01TNDRiREV1TXkwd0xqZGpNQzQ0TFRBdU5Dd3hMamd0TUM0MExESXVOeXd3YkRJdU1pd3hMakZqTUM0ekxEQXVNU3d3TGpZc01DNHhMREF1T1N3d2JESXVNaTB4TGpGak1DNDRMVEF1TkN3eExqZ3RNQzQwTERJdU55d3diREl1TWl3eExqRUtDUWtKWXpBdU15d3dMakVzTUM0MkxEQXVNU3d3TGprc01Hd3lMakl0TVM0eFl6QXVPQzB3TGpRc01TNDRMVEF1TkN3eUxqY3NNR3d5TGpJc01TNHhRemN1TkN3eU1pdzNMamNzTWpJc09Dd3lNUzQ1YkRJdU9TMHhMak5qTUM0NExUQXVNeXd4TGpjdE1DNHpMREl1TkN3d2JESXVPU3d4TGpNS0NRa0pZekF1TXl3d0xqRXNNQzQyTERBdU1Td3dMamtzTUd3ekxqRXRNUzQxYkMwd0xqa3RNUzQ0YkMweExqUXNNQzQzWXkwd0xqZ3NNQzQwTFRFdU55d3dMalF0TWk0MkxEQXVNV3d0TWk0NExURXVNa014TWk0ekxERTRMREV5TGpJc01UZ3NNVEl1TVN3eE9Hd3dMREFLQ1FrSll5MHdMakVzTUMwd0xqTXNNQzB3TGpRc01DNHhiQzB5TGpnc01TNHlZeTB3TGpnc01DNDBMVEV1T0N3d0xqTXRNaTQyTFRBdU1VdzBMREU0TGpGRE15NDVMREU0TERNdU55d3hPQ3d6TGpZc01UaHNNQ3d3WXkwd0xqSXNNQzB3TGpNc01DMHdMalFzTUM0eFRERXNNVGt1TWdvSkNRbGpMVEF1T0N3d0xqUXRNUzQ0TERBdU5DMHlMamNzTUV3dE5Dd3hPQzR4UXkwMExqRXNNVGd0TkM0ekxERTRMVFF1TkN3eE9Hd3dMREJqTFRBdU1pd3dMVEF1TXl3d0xUQXVOQ3d3TGpGTUxUY3NNVGt1TW1NdE1DNDRMREF1TkMweExqZ3NNQzQwTFRJdU55d3diQzB5TGpJdE1TNHhDZ2tKQ1VNdE1USXVNU3d4T0MweE1pNHpMREU0TFRFeUxqUXNNVGhNTFRFeUxqUXNNVGhNTFRFeUxqUXNNVGg2SUUwdE1USXVOQ3d4Tm1ndE5DNDVReTB4TXk0MUxEVXVNUzB4TGpVdE1DNDNMRGt1TlN3ekxqSmpOaXd5TGpFc01UQXVOeXcyTGpnc01USXVPQ3d4TWk0NGFDMHlMakZzTFRBdU1TMHdMakVLQ1FrSlRERTVMamtzTVRaSUxURXlMalJNTFRFeUxqUXNNVFo2SUUweE55NDVMREl6TGpkc01TNDBMVEF1TjJneExqTjJNbWd0TXpaMkxURXVNV3d3TGpNdE1DNHliREV1TkMwd0xqZG9NaTQyYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpnc01DNDBMREl1Tnl3d2JERXVOQzB3TGpkSUxUTUtDUWtKYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpnc01DNDBMREl1Tnl3d1RESXVNeXd5TTJneUxqWnNNUzQwTERBdU4yTXdMamNzTUM0MExERXVOeXd3TGpRc01pNDFMREJzTVM0M0xUQXVOMmd6TGpKc01TNDNMREF1TjBNeE5pNHlMREkwTGpFc01UY3VNU3d5TkM0eExERTNMamtzTWpNdU4zb0tDUWtKSUUwdE1UTXVPQ3d5TjJ3eE5pNDBMRFF1T1V3eE9DNDVMREkzU0MweE15NDRlaUJOTFRFMExqUXNNamxvTUM0emJERTJMamNzTld3eE5pNDNMVFZvTUM0ell6RXVOeXd3TERNc01TNHpMRE1zTTNNdE1TNHpMRE10TXl3emFDMHpOR010TVM0M0xEQXRNeTB4TGpNdE15MHpDZ2tKQ1VNdE1UY3VOQ3d6TUM0ekxURTJMakVzTWprdE1UUXVOQ3d5T1hvZ1RTMHhNeTR4TERNM1l6QXVPQ3d5TGpRc015NHhMRFFzTlM0M0xEUm9NakJqTWk0MUxEQXNOQzQ0TFRFdU5pdzFMamN0TkVNeE9DNHlMRE0zTFRFekxqRXNNemN0TVRNdU1Td3pOM29pTHo0S0NRazhjR0YwYUNCcFpEMGljR0YwYURaZlptbHNiQzFqYjNCNUlpQmpiR0Z6Y3owaWMzUXdJaUJrUFNKTk1qZzBMalFzTVRaak1DNHlMREF1Tml3d0xqUXNNUzR6TERBdU5Td3lhQzB6TGpkc01TNHlMREl1TTJ3d0xqVXNNQzQ1YkMwd0xqSXNNQzR4VmpJNFl6SXVNaXd4TGpjc01pNDNMRFF1T0N3eExEY0tDUWtKWXkwd0xqZ3NNUzB4TGprc01TNDNMVE11TWl3eExqbFdNemRqTFRBdU9Td3pMalV0TkM0eExEWXROeTQ0TERab0xUSXdZeTB6TGpZc01DMDJMamd0TWk0MUxUY3VOeTAyZGkwd0xqRmpMVEl1Tnkwd0xqUXROQzQyTFRNdE5DNHlMVFV1TjJNd0xqSXRNUzR6TERBdU9TMHlMalVzTVM0NUxUTXVNZ29KQ1FsMkxUWXVPR3d0TUM0NExURXVObXd0TUM0MExUQXVPV3d3TGprdE1DNDBUREkwTXl3eE9HZ3RNMk15TGpndE1USXVOQ3d4TlM0eExUSXdMaklzTWpjdU5TMHhOeTQwUXpJM05TNDBMREl1TXl3eU9ERXVPU3c0TGpJc01qZzBMalFzTVRaNklFMHlORGN1TlN3eE9Bb0pDUWxqTFRBdU1pd3dMVEF1TXl3d0xUQXVOQ3d3TGpGc0xUTXVNU3d4TGpac01DNDVMREV1T0d3eExqTXRNQzQzWXpBdU9DMHdMalFzTVM0NExUQXVOQ3d5TGpjc01Hd3lMaklzTVM0eFl6QXVNeXd3TGpFc01DNDJMREF1TVN3d0xqa3NNR3d5TGpJdE1TNHhDZ2tKQ1dNd0xqZ3RNQzQwTERFdU9DMHdMalFzTWk0M0xEQnNNaTR5TERFdU1XTXdMak1zTUM0eExEQXVOaXd3TGpFc01DNDVMREJzTWk0eUxURXVNV013TGpndE1DNDBMREV1T0Mwd0xqUXNNaTQzTERCc01pNHlMREV1TVdNd0xqTXNNQzR4TERBdU5pd3dMakVzTUM0NUxEQnNNaTQ1TFRFdU13b0pDUWxqTUM0NExUQXVNeXd4TGpjdE1DNHpMREl1TkN3d2JESXVPU3d4TGpOak1DNHpMREF1TVN3d0xqWXNNQzR4TERBdU9Td3diRE11TVMweExqVnNMVEF1T1MweExqaHNMVEV1TkN3d0xqZGpMVEF1T0N3d0xqUXRNUzQzTERBdU5DMHlMallzTUM0eGJDMHlMamd0TVM0eUNna0pDV010TUM0eExUQXVNUzB3TGpNdE1DNHhMVEF1TkMwd0xqRnNNQ3d3WXkwd0xqRXNNQzB3TGpNc01DMHdMalFzTUM0eGJDMHlMamdzTVM0eVl5MHdMamdzTUM0MExURXVPQ3d3TGpNdE1pNDJMVEF1TVd3dE1pNHpMVEV1TVdNdE1DNHhMVEF1TVMwd0xqTXRNQzR4TFRBdU5TMHdMakZzTUN3d0Nna0pDV010TUM0eUxEQXRNQzR6TERBdE1DNDBMREF1TVd3dE1pNHlMREV1TVdNdE1DNDRMREF1TkMweExqZ3NNQzQwTFRJdU55d3diQzB5TGpJdE1TNHhZeTB3TGpFdE1DNHhMVEF1TXkwd0xqRXRNQzQwTFRBdU1Xd3dMREJqTFRBdU1pd3dMVEF1TXl3d0xUQXVOQ3d3TGpGc0xUSXVNaXd4TGpFS0NRa0pZeTB3TGpnc01DNDBMVEV1T0N3d0xqUXRNaTQzTERCc0xUSXVNaTB4TGpGRE1qUTNMamtzTVRnc01qUTNMamNzTVRnc01qUTNMalVzTVRoTU1qUTNMalVzTVRoTU1qUTNMalVzTVRoNklFMHlORGN1TlN3eE5tZ3ROQzQ1WXpNdU9TMHhNQzQ1TERFMUxqa3RNVFl1Tnl3eU5pNDRMVEV5TGpnS0NRa0pZellzTWk0eExERXdMamNzTmk0NExERXlMamdzTVRJdU9HZ3RNaTR4YkMwd0xqRXRNQzR4YkMwd0xqTXNNQzR4U0RJME55NDFUREkwTnk0MUxERTJlaUJOTWpjM0xqa3NNak11TjJ3eExqUXRNQzQzYURFdU0zWXlhQzB6Tm5ZdE1TNHhiREF1TXkwd0xqSnNNUzQwTFRBdU4yZ3lMallLQ1FrSmJERXVOQ3d3TGpkak1DNDRMREF1TkN3eExqZ3NNQzQwTERJdU55d3diREV1TkMwd0xqZG9NaTQyYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpnc01DNDBMREl1Tnl3d2JERXVOQzB3TGpkb01pNDJiREV1TkN3d0xqZGpNQzQ0TERBdU5Dd3hMamNzTUM0MExESXVOaXd3TGpGc01TNDNMVEF1TndvSkNRbG9NeTR5YkRFdU55d3dMamRETWpjMkxqSXNNalF1TVN3eU56Y3VNU3d5TkM0eExESTNOeTQ1TERJekxqZE1NamMzTGprc01qTXVOM29nVFRJME5pNHlMREkzYkRFMkxqUXNOQzQ1VERJM09Td3lOMGd5TkRZdU1ub2dUVEkwTlM0MUxESTVhREF1TTJ3eE5pNDNMRFZzTVRZdU55MDFhREF1TXdvSkNRbGpNUzQzTERBc015d3hMak1zTXl3emN5MHhMak1zTXkwekxETm9MVE0wWXkweExqY3NNQzB6TFRFdU15MHpMVE5UTWpRekxqa3NNamtzTWpRMUxqVXNNamw2SUUweU5EWXVPU3d6TjJNd0xqZ3NNaTQwTERNdU1TdzBMRFV1Tml3MGFESXdZekl1TlN3d0xEUXVPQzB4TGpZc05TNDNMVFFLQ1FrSlNESTBOaTQ1ZWlJdlBnb0pDVHh3WVhSb0lHTnNZWE56UFNKemREQWlJR1E5SWsweE5Ua3VOU3d5TVdNdE1TNHpMVE11TmkwMExqY3ROaTA0TGpVdE5tZ3ROREpqTFRNdU9Dd3dMVGN1TWl3eUxqUXRPQzQxTERaakxUTXVNeXd3TGpNdE5TNDRMRE11TWkwMUxqVXNOaTQxWXpBdU1pd3lMamtzTWk0MkxEVXVNaXcxTGpVc05TNDFDZ2tKQ1dNdE1TNDNMRFF1Tnl3d0xqZ3NPUzQ0TERVdU5Dd3hNUzQxWXpFc01DNHpMRElzTUM0MUxETXNNQzQxYURReVl6VXNNQ3c1TFRRc09TMDVZekF0TVMwd0xqSXRNaTR4TFRBdU5TMHpZek11TXkwd0xqTXNOUzQ0TFRNdU1pdzFMalV0Tmk0MUNna0pDVU14TmpRdU55d3lNeTQyTERFMk1pNDBMREl4TGpNc01UVTVMalVzTWpGNklFMHhOVEVzTVRkb0xUUXlZeTB5TGpjc01DMDFMaklzTVM0MkxUWXVNeXcwYURVMExqZERNVFUyTGpJc01UZ3VOaXd4TlRNdU55d3hOeXd4TlRFc01UZDZJRTB4TkRFdU55dzBNd29KQ1Fsak1pNHhMVEV1Tnl3ekxqTXROQzR6TERNdU15MDNhQzB5WXpBc015NDVMVE11TVN3M0xUY3NOMmd0TkM0ell6SXVNUzB4TGpjc015NHpMVFF1TXl3ekxqTXROMmd0TW1Nd0xETXVPUzB6TGpFc055MDNMRGRvTFRRdU0yTXlMakV0TVM0M0xETXVNeTAwTGpNc015NHpMVGRvTFRJS0NRa0pZekFzTXk0NUxUTXVNU3czTFRjc04yZ3ROMk10TXk0NUxEQXROeTB6TGpFdE55MDNjek11TVMwM0xEY3ROMmcwTW1Nekxqa3NNQ3czTERNdU1TdzNMRGR6TFRNdU1TdzNMVGNzTjBneE5ERXVOM29nVFRFd09Td3lOMk10TXl3d0xUVXVPQ3d4TGpVdE55NDFMRFJJTVRBeENna0pDV010TWk0eUxEQXROQzB4TGpndE5DMDBjekV1T0MwMExEUXROR2cxT0dNeUxqSXNNQ3cwTERFdU9DdzBMRFJ6TFRFdU9DdzBMVFFzTkdndE1DNDFZeTB4TGpjdE1pNDFMVFF1TlMwMExUY3VOUzAwU0RFd09Yb2lMejRLQ1FrOGNHRjBhQ0JqYkdGemN6MGljM1F3SWlCa1BTSk5NemtzTVRFMVl6UXVOQ3d3TERndE15NDJMRGd0T0hNdE15NDJMVGd0T0MwNGN5MDRMRE11TmkwNExEaFRNelF1Tml3eE1UVXNNemtzTVRFMWVpQk5ORFVzTVRBM1l6QXNNeTR6TFRJdU55dzJMVFlzTm5NdE5pMHlMamN0TmkwMkNna0pDWE15TGpjdE5pdzJMVFpUTkRVc01UQXpMamNzTkRVc01UQTNlaUJOTkRJc056aDJMVEpvT0hZdE5rZzBNR010TWk0eUxEQXROQ3d4TGpndE5DdzBkakV3U0RJeWJDMHhMak1zTkV3eU1DdzVNR2d5TGpKc015NDRMRFF3YURJMmJETXVPQzAwTUVnMU9Hd3RNQzQzTFRKTU5UWXNPRFJJTkRKV056aDZDZ2tKQ1NCTk16Z3NOelIyTVRCb01sWTNOR2c0ZGkweWFDMDRRek00TGprc056SXNNemdzTnpJdU9Td3pPQ3czTkhvZ1RUUXdMRGcyYURFMExqWnNNQzQzTERKSU1qSXVPR3d3TGpjdE1rZzBNSG9nVFRVekxqZ3NPVEJJTWpRdU1td3pMallzTXpob01qSXVORXcxTXk0NExEa3dlaUl2UGdvSkNUeHdZWFJvSUdOc1lYTnpQU0p6ZERBaUlHUTlJazB4TWprc09USm9MVFoyTkdndE5uWTBhQzAyZGpFMGFDMHpiREF1TWl3eWJETXVPQ3d6TW1nek5td3pMamd0TXpKc01DNHlMVEpvTFROMkxURTBhQzAyZGkwMGFDMDJkaTAwU0RFeU9Yb2dUVEUwTnl3eE1UUjJMVEV5YUMwMGRqUm9NM1k0U0RFME53b0pDUWw2SUUweE5EUXNNVEUwZGkwMmFDMDBkalpJTVRRMGVpQk5NVE00TERFeU1IWXRNVFpvTFRSMk1Ua3VNa014TXpVdU5pd3hNakl1TlN3eE16Y3NNVEl4TGpRc01UTTRMREV5TUhvZ1RURXpNaXd4TWpNdU9GWXhNREJvTFRSMk1qTXVPQW9KQ1FsRE1USTVMak1zTVRJMExqRXNNVE13TGpjc01USTBMakVzTVRNeUxERXlNeTQ0ZWlCTk1USTJMREV5TXk0eVZqRXdOR2d0TkhZeE5rTXhNak1zTVRJeExqUXNNVEkwTGpRc01USXlMalVzTVRJMkxERXlNeTR5ZWlCTk1USXdMREV4TkhZdE5tZ3ROSFkyU0RFeU1Ib2dUVEV4TkN3eE1UUjJMVGhvTXdvSkNRbDJMVFJvTFRSMk1USklNVEUwZWlCTk1UUXhMREV3TW5ZdE5HZ3ROSFkwYUROMk5HZ3hWakV3TW5vZ1RURXpOU3d4TURKMkxUaG9MVFIyTkdnemRqUklNVE0xZWlCTk1USTVMRGs0ZGkwMGFDMDBkamhvTVhZdE5FZ3hNamw2SUUweE1qTXNNVEF5ZGkwMGFDMDBkamhvTVhZdE5FZ3hNak42Q2drSkNTQk5NVE13TERFeU5tTTFMamtzTUN3eE1DNDVMVFF1TWl3eE1TNDRMVEV3YURjdU9Xd3RNeTQxTERNd2FDMHpNaTQwYkMwekxqVXRNekJvTnk0NVF6RXhPUzR4TERFeU1TNDRMREV5TkM0eExERXlOaXd4TXpBc01USTJlaUl2UGdvSkNUeHdZWFJvSUdOc1lYTnpQU0p6ZERBaUlHUTlJazB5TVRJc09EWjJNbWd0TkhZdE1rZ3lNVEo2SUUweU1UWXNPRFpvTFRKMk1tZ3lWamcyZWlCTk1UazJMRGcyVERFNU5pdzRObU10TWk0M0xEQXVOeTAwTGpVc015NHpMVE11T1N3Mll6QXVOQ3d4TGpnc01TNDJMRE11TWl3ekxqTXNNeTQ0Q2drSkNXd3dMakVzTUM0eWJERXVNU3cwTGpWak1DNHlMREF1T1N3eExERXVOU3d4TGprc01TNDFiREFzTUd3M0xESTBMalpqTUM0eUxEQXVPU3d4TERFdU5Dd3hMamtzTVM0MGFEVmpNQzQ1TERBc01TNDNMVEF1Tml3eExqa3RNUzQwYkRjdE1qUXVObU13TGprc01Dd3hMamN0TUM0MkxERXVPUzB4TGpVS0NRa0piREV1TVMwMExqVnNNQzR4TFRBdU1tTXlMall0TUM0NUxEUXVNUzB6TGpjc015NHlMVFl1TTJNdE1DNDJMVEV1TnkweUxUTXRNeTQ0TFRNdU0xWTRObU13TFRjdU55MDJMak10TVRRdE1UUXRNVFJUTVRrMkxEYzRMak1zTVRrMkxEZzJlaUJOTWpBd0xEZzJhRFoyTW1ndE9Rb0pDUWxqTFRFdU55d3dMVE1zTVM0ekxUTXNNM014TGpNc015d3pMRE5vTWpaak1TNDNMREFzTXkweExqTXNNeTB6Y3kweExqTXRNeTB6TFROb0xUTjJMVEpvTW1Nd0xUWXVOaTAxTGpRdE1USXRNVEl0TVRKekxURXlMRFV1TkMweE1pd3hNa2d5TURCNklFMHhPVGd1Tml3eE1EQnNMVEV0TkdneU5DNDVDZ2tKQ1d3dE1TdzBTREU1T0M0MmVpQk5NakEzTGpVc01USTJiQzAyTGprdE1qUm9NVGd1TjJ3dE5pNDVMREkwU0RJd055NDFlaUJOTVRVd0xESTBNbU14TWk0eUxEQXNNakl0T1M0NExESXlMVEl5Y3kwNUxqZ3RNakl0TWpJdE1qSnpMVEl5TERrdU9DMHlNaXd5TWdvSkNRbFRNVE0zTGpnc01qUXlMREUxTUN3eU5ESjZJRTB4TnpRc01qSXdZekFzTVRNdU15MHhNQzQzTERJMExUSTBMREkwY3kweU5DMHhNQzQzTFRJMExUSTBiREFzTUdNd0xURXpMak1zTVRBdU55MHlOQ3d5TkMweU5GTXhOelFzTWpBMkxqY3NNVGMwTERJeU1Ib2dUVEUwTlM0MkxESXpOeTQzQ2drSkNXd3lMVEF1T1dNeExqVXRNQzQyTERNdU1pMHdMallzTkM0M0xEQnNNaXd3TGpsak1DNDVMREF1TkN3eUxEQXNNaTQxTFRBdU9Hd3hMakV0TVM0NVl6QXVPQzB4TGpRc01pNHlMVEl1TkN3ekxqZ3RNaTQ0YkRJdU1TMHdMalZqTVMwd0xqSXNNUzQyTFRFdU1Td3hMalV0TWk0eGJDMHdMakl0TWk0eUNna0pDV010TUM0eExURXVOaXd3TGpRdE15NHlMREV1TkMwMExqVnNNUzQwTFRFdU4yTXdMamN0TUM0NExEQXVOeTB4TGprc01DMHlMalpzTFRFdU5DMHhMamRqTFRFdU1TMHhMakl0TVM0MkxUSXVPQzB4TGpRdE5DNDFiREF1TWkweUxqSmpNQzR4TFRFdE1DNDJMVEV1T1MweExqWXRNaTR4Q2drSkNXd3RNaTR4TFRBdU5XTXRNUzQyTFRBdU5DMHpMVEV1TkMwekxqZ3RNaTQ0YkMweExqRXRNUzQ1WXkwd0xqVXRNQzQ1TFRFdU5pMHhMakl0TWk0MUxUQXVPR3d0TWl3d0xqbGpMVEV1TlN3d0xqWXRNeTR5TERBdU5pMDBMamNzTUd3dE1pMHdMamxqTFRBdU9TMHdMalF0TWl3d0xUSXVOU3d3TGpnS0NRa0piQzB4TERJdU1XTXRNQzQ0TERFdU5DMHlMaklzTWk0MExUTXVPQ3d5TGpoc0xUSXVNU3d3TGpWakxURXNNQzR5TFRFdU5pd3hMakV0TVM0MUxESXVNV3d3TGpJc01pNHlZekF1TVN3eExqWXRNQzQwTERNdU1pMHhMalFzTkM0MWJDMHhMalFzTVM0M0Nna0pDV010TUM0M0xEQXVPQzB3TGpjc01TNDVMREFzTWk0MmJERXVOQ3d4TGpkak1TNHhMREV1TWl3eExqWXNNaTQ0TERFdU5DdzBMalZzTFRBdU1pd3lMakpqTFRBdU1Td3hMREF1Tml3eExqa3NNUzQyTERJdU1Xd3lMakVzTUM0MVl6RXVOaXd3TGpRc015d3hMalFzTXk0NExESXVPR3d4TGpFc01TNDVDZ2tKQ1VNeE5ETXVOaXd5TXpjdU9Dd3hORFF1Tnl3eU16Z3VNU3d4TkRVdU5pd3lNemN1TjB3eE5EVXVOaXd5TXpjdU4zb2dUVEUwT0M0MExESXpPQzQzWXpFdE1DNDBMREl1TVMwd0xqUXNNeTR4TERCc01pd3dMamxqTVM0NExEQXVPQ3cwTERBdU1TdzFMVEV1Tm13eExqRXRNUzQ1Q2drSkNXTXdMall0TUM0NUxERXVOUzB4TGpZc01pNDFMVEV1T0d3eUxqRXRNQzQxWXpFdU9TMHdMalFzTXk0ekxUSXVNeXd6TGpFdE5DNHliQzB3TGpJdE1pNHlZeTB3TGpFdE1TNHhMREF1TXkweUxqSXNNUzB6YkRFdU5DMHhMamRqTVM0ekxURXVOU3d4TGpNdE15NDNMREF0TlM0eWJDMHhMalF0TVM0M0Nna0pDV010TUM0M0xUQXVPQzB4TGpFdE1TNDVMVEV0TTJ3d0xqSXRNaTR5WXpBdU1pMHlMVEV1TVMwekxqZ3RNeTR4TFRRdU1td3RNaTR4TFRBdU5XTXRNUzR4TFRBdU1pMHlMVEF1T1MweUxqVXRNUzQ0YkMweExqRXRNUzQ1WXkweExURXVOeTB6TGpJdE1pNDBMVFV0TVM0MmJDMHlMREF1T1FvSkNRbGpMVEVzTUM0MExUSXVNU3d3TGpRdE15NHhMREJzTFRJdE1DNDVZeTB4TGpndE1DNDRMVFF0TUM0eExUVXNNUzQyYkMweExqRXNNUzQ1WXkwd0xqWXNNQzQ1TFRFdU5Td3hMall0TWk0MUxERXVPR3d0TWk0eExEQXVOV010TVM0NUxEQXVOQzB6TGpNc01pNHpMVE11TVN3MExqSnNNQzR5TERJdU1nb0pDUWxqTUM0eExERXVNUzB3TGpNc01pNHlMVEVzTTJ3dE1TNDBMREV1TjJNdE1TNHpMREV1TlMweExqTXNNeTQzTERBc05TNHliREV1TkN3eExqZGpNQzQzTERBdU9Dd3hMakVzTVM0NUxERXNNMnd0TUM0eUxESXVNbU10TUM0eUxESXNNUzR4TERNdU9Dd3pMakVzTkM0eWJESXVNU3d3TGpVS0NRa0pZekV1TVN3d0xqSXNNaXd3TGprc01pNDFMREV1T0d3eExqRXNNUzQ1WXpFc01TNDNMRE11TWl3eUxqUXNOU3d4TGpaTU1UUTRMalFzTWpNNExqZDZJRTB4TlRJc01qQTNZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNUW9KQ1FsVE1UVXlMREl3Tnk0MkxERTFNaXd5TURkNklFMHhOVGdzTWpBNVl6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01WTXhOVGdzTWpBNUxqWXNNVFU0TERJd09Yb2dUVEUwTnl3eU1UQmpNQzB3TGpZc01DNDBMVEVzTVMweGN6RXNNQzQwTERFc01Rb0pDUWx6TFRBdU5Dd3hMVEVzTVZNeE5EY3NNakV3TGpZc01UUTNMREl4TUhvZ1RURTBNU3d5TVRCak1DMHdMallzTUM0MExURXNNUzB4Y3pFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eFV6RTBNU3d5TVRBdU5pd3hOREVzTWpFd2VpQk5NVFEwTERJd05XTXdMVEF1Tml3d0xqUXRNU3d4TFRFS0NRa0pjekVzTUM0MExERXNNWE10TUM0MExERXRNU3d4VXpFME5Dd3lNRFV1Tml3eE5EUXNNakExZWlCTk1UTTJMREl4TTJNd0xUQXVOaXd3TGpRdE1Td3hMVEZ6TVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGVE1UTTJMREl4TXk0MkxERXpOaXd5TVRONklFMHhNemtzTWpFNUNna0pDV013TFRBdU5pd3dMalF0TVN3eExURnpNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZUTVRNNUxESXhPUzQyTERFek9Td3lNVGw2SUUweE16a3NNakkxWXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVZNeE16a3NNakkxTGpZc01UTTVMREl5TlhvS0NRa0pJRTB4TkRNc01qTXlZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNVk14TkRNc01qTXlMallzTVRRekxESXpNbm9nVFRFME9Dd3lNekJqTUMwd0xqWXNNQzQwTFRFc01TMHhjekVzTUM0MExERXNNWE10TUM0MExERXRNU3d4Q2drSkNWTXhORGdzTWpNd0xqWXNNVFE0TERJek1Ib2dUVEUxTXl3eU16UmpNQzB3TGpZc01DNDBMVEVzTVMweGN6RXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hVekUxTXl3eU16UXVOaXd4TlRNc01qTTBlaUJOTVRVM0xESXlPR013TFRBdU5pd3dMalF0TVN3eExURnpNU3d3TGpRc01Td3hDZ2tKQ1hNdE1DNDBMREV0TVN3eFV6RTFOeXd5TWpndU5pd3hOVGNzTWpJNGVpQk5NVFl6TERJeU5HTXdMVEF1Tml3d0xqUXRNU3d4TFRGek1Td3dMalFzTVN3eGN5MHdMalFzTVMweExERlRNVFl6TERJeU5DNDJMREUyTXl3eU1qUjZJRTB4TlRrc01qSXhZekF0TUM0MkxEQXVOQzB4TERFdE1Rb0pDUWx6TVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGVE1UVTVMREl5TVM0MkxERTFPU3d5TWpGNklFMHhOak1zTWpFNFl6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01WTXhOak1zTWpFNExqWXNNVFl6TERJeE9Ib2dUVEUxT0N3eU1UUUtDUWtKWXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVZNeE5UZ3NNakUwTGpZc01UVTRMREl4TkhvZ1RURXpOQ3d5TWpCak1DMHdMallzTUM0MExURXNNUzB4Y3pFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eFV6RXpOQ3d5TWpBdU5pd3hNelFzTWpJd2Vnb0pDUWtnVFRFMU1Dd3lNalZqTWk0NExEQXNOUzB5TGpJc05TMDFjeTB5TGpJdE5TMDFMVFZ6TFRVc01pNHlMVFVzTlZNeE5EY3VNaXd5TWpVc01UVXdMREl5TlhvZ1RURTFOeXd5TWpCak1Dd3pMamt0TXk0eExEY3ROeXczY3kwM0xUTXVNUzAzTFRkek15NHhMVGNzTnkwM0Nna0pDVk14TlRjc01qRTJMakVzTVRVM0xESXlNSG9nVFRJME15d3hPVEZqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTW1Nd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVneU5ETjZJRTB5TmpJc01qQXdZekF0TUM0MkxEQXVOQzB4TERFdE1XZ3lDZ2tKQ1dNd0xqWXNNQ3d4TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVdndE1rTXlOakl1TkN3eU1ERXNNall5TERJd01DNDJMREkyTWl3eU1EQjZJRTB5TkRnc01qQTFZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEVLQ1FrSlNESTBPSG9nVFRJeU15d3lNRFpqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTW1Nd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVneU1qTjZJRTB5TWpnc01qRXdZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhRElLQ1FrSll6QXVOaXd3TERFdE1DNDBMREV0TVhNdE1DNDBMVEV0TVMweFNESXlPSG9nVFRJek55d3lNVEJqTUMwd0xqWXNNQzQwTFRFc01TMHhhREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRE1qTTNMalFzTWpFeExESXpOeXd5TVRBdU5pd3lNemNzTWpFd2Vnb0pDUWtnVFRJMU1pd3lNVEZqTUMwd0xqWXNNQzQwTFRFc01TMHhhREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRE1qVXlMalFzTWpFeUxESTFNaXd5TVRFdU5pd3lOVElzTWpFeGVpQk5NalkwTERJd09XTXRNQzQyTERBdE1Td3dMalF0TVN3eGN6QXVOQ3d4TERFc01XZ3lDZ2tKQ1dNd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVneU5qUjZJRTB5TlRNc01UazFZekF0TUM0MkxEQXVOQzB4TERFdE1XZ3lZekF1Tml3d0xERXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hhQzB5UXpJMU15NDBMREU1Tml3eU5UTXNNVGsxTGpZc01qVXpMREU1TlhvS0NRa0pJRTB5TXpRc01UazFZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEZJTWpNMGVpQk5NalF3TERJd01HTXdMVEF1Tml3d0xqUXRNU3d4TFRGb01tTXdMallzTUN3eExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01Rb0pDUWxvTFRKRE1qUXdMalFzTWpBeExESTBNQ3d5TURBdU5pd3lOREFzTWpBd2VpQk5NakUxTERJeE5XTXdMVEF1TlN3d0xUQXVPU3d3TFRFdU5HTXRNaTQxTFRFdU1TMHpMamN0TkMweUxqWXROaTQyWXpBdU1pMHdMalVzTUM0MUxURXNNQzQ1TFRFdU5HTXRNQzQ1TFRJc01DMDBMaklzTVM0NUxUVXVNZ29KQ1FsakxUQXVPQzB5TGpZc01DNDNMVFV1TkN3ekxqUXROaTR5YkRBc01HTXdMalF0TUM0MUxEQXVPUzB3TGprc01TNDFMVEV1TVdNd0xqVXRNaTQzTERNdU1TMDBMalVzTlM0NExUUXVNV013TGpjc01DNHhMREV1TkN3d0xqUXNNaXd3TGpoak5TNHpMVE11T0N3eE1TNDJMVFV1T1N3eE9DNHlMVFV1T1FvSkNRbGpOaTQ0TERBc01UTXVNU3d5TGpJc01UZ3VNaXcxTGpsak1pNHpMVEV1Tml3MUxqUXRNU3czTERFdU0yTXdMalFzTUM0MkxEQXVOeXd4TGpNc01DNDRMREpqTUM0MkxEQXVNaXd4TGpFc01DNDJMREV1TlN3eExqRmpNaTQzTERBdU9DdzBMaklzTXk0MUxETXVOQ3cyTGpKc01Dd3dDZ2tKQ1dNeExqa3NNU3d5TGpjc015NHlMREV1T1N3MUxqSmpNUzQ1TERJc01TNDRMRFV1TWkwd0xqSXNOMk10TUM0MExEQXVOQzB3TGprc01DNDNMVEV1TlN3eFl6QXNNQzQxTERBc01DNDVMREFzTVM0MGRqRm9MVFl5ZGkweFNESXhOWG9nVFRJeE5TNDRMREl3Tnk0NENna0pDV010TUM0ekxERXVNaTB3TGpVc01pNDBMVEF1Tml3ekxqWmpMVEV1TXkweExURXVOaTB5TGprdE1DNDJMVFF1TW13d0xEQkRNakUxTERJd055NDFMREl4TlM0MExESXdOeTQzTERJeE5TNDRMREl3Tnk0NFRESXhOUzQ0TERJd055NDRlaUJOTWpFM0xqTXNNakF6TGpJS0NRa0pZeTB3TGpRc01DNDVMVEF1Tnl3eExqZ3RNU3d5TGpkakxURXRNQzQwTFRFdU5pMHhMalV0TVM0ekxUSXVOV013TGpJdE1DNDFMREF1Tmkwd0xqa3NNUzR4TFRFdU1rTXlNVFl1TlN3eU1ESXVOaXd5TVRZdU9Td3lNREl1T1N3eU1UY3VNeXd5TURNdU1rd3lNVGN1TXl3eU1ETXVNbm9LQ1FrSklFMHlNVGt1Tml3eE9UZ3VOMk10TUM0MUxEQXVPUzB4TERFdU9DMHhMalVzTWk0M1l5MHhMak10TVMweExqVXRNaTQ1TFRBdU5TMDBMakpqTUM0eExUQXVNaXd3TGpNdE1DNHpMREF1TkMwd0xqVkRNakU0TGpNc01UazNMallzTWpFNExqa3NNVGs0TGpNc01qRTVMallzTVRrNExqY0tDUWtKVERJeE9TNDJMREU1T0M0M2VpQk5Nakl3TGpnc01UazNZekF1TkMwd0xqVXNNQzQzTFRFc01TNHhMVEV1TldNdE1DNHpMVEF1TlMwd0xqa3RNQzQzTFRFdU5DMHdMalJ6TFRBdU55d3dMamt0TUM0MExERXVORU15TWpBdU15d3hPVFl1Tnl3eU1qQXVOU3d4T1RZdU9Td3lNakF1T0N3eE9UY0tDUWtKVERJeU1DNDRMREU1TjNvZ1RUSXlOaTR4TERFNU1TNHlZeTB4TERBdU9TMHlMREV1T0MweUxqa3NNaTQ0WXkwd0xqTXRNQzR6TFRBdU55MHdMall0TVM0eExUQXVPR013TGpRdE1TNDJMREl1TVMweUxqVXNNeTQzTFRJdU1Rb0pDUWxETWpJMUxqa3NNVGt4TGpFc01qSTJMREU1TVM0eUxESXlOaTR4TERFNU1TNHlUREl5Tmk0eExERTVNUzR5ZWlCTk1qWTRMamdzTVRrMFl5MHdMamt0TVMweExqa3RNUzQ1TFRJdU9TMHlMamhqTVM0MUxUQXVOaXd6TGpNc01DNHhMRE11T1N3eExqY0tDUWtKWXpBc01DNHhMREF1TVN3d0xqSXNNQzR4TERBdU0wTXlOamt1TlN3eE9UTXVOQ3d5TmprdU1Td3hPVE11Tml3eU5qZ3VPQ3d4T1RSTU1qWTRMamdzTVRrMGVpQk5NamN3TGpFc01UazFMalZqTUM0MExEQXVOU3d3TGpnc01Td3hMakVzTVM0MENna0pDV013TGpVdE1DNHhMREF1T1Mwd0xqY3NNQzQ0TFRFdU1uTXRNQzQzTFRBdU9TMHhMakl0TUM0NFF6STNNQzQxTERFNU5TNHhMREkzTUM0ekxERTVOUzR6TERJM01DNHhMREU1TlM0MWVpQk5NamN6TGprc01qQXhMalJqTFRBdU5TMHdMamt0TVMweExqZ3RNUzQxTFRJdU53b0pDUWxqTUM0NExUQXVOQ3d4TGpRdE1TNHhMREV1TmkweVl6RXVNeXd4TGpFc01TNDBMRE1zTUM0MExEUXVNa015TnpRdU1pd3lNREV1TVN3eU56UXNNakF4TGpJc01qY3pMamtzTWpBeExqUjZJRTB5TnpVdU5pd3lNRFV1T1dNdE1DNHpMVEF1T1Mwd0xqWXRNUzQ0TFRFdE1pNDNDZ2tKQ1dNd0xqUXRNQzR6TERBdU9DMHdMallzTVM0eUxURmpNU3d3TGpVc01TNDBMREV1Tnl3eExESXVOME15TnpZdU5pd3lNRFV1TXl3eU56WXVNaXd5TURVdU55d3lOelV1Tml3eU1EVXVPWG9nVFRJM05pNDRMREl4TVM0MFl5MHdMakV0TVM0eUxUQXVOQzB5TGpRdE1DNDJMVE11TmdvSkNRbGpNQzQxTFRBdU1Td3dMamt0TUM0MExERXVNaTB3TGpaRE1qYzRMalFzTWpBNExqVXNNamM0TGpFc01qRXdMalFzTWpjMkxqZ3NNakV4TGpSTU1qYzJMamdzTWpFeExqUk1NamMyTGpnc01qRXhMalI2SUUweU56VXNNakUwWXkwd0xqVXRNVFl0TVRNdU9TMHlPQzQyTFRJNUxqa3RNamd1TVFvSkNRbGpMVEUxTGpNc01DNDFMVEkzTGpZc01USXVPQzB5T0M0eExESTRMakZJTWpjMVRESTNOU3d5TVRSNklFMDNNaTR6TERFNU9DNHhZeTB3TGpJdE1DNHpMVEF1TXkwd0xqY3RNQzR6TFRFdU1YWXRNVEpvTFRKMk1USmpNQ3d5TGpJc01TNDRMRFFzTkN3MENna0pDV014TGpJc01Dd3lMak10TUM0MUxETXVNUzB4TGpSak1DNDJMVEF1Tnl3d0xqa3RNUzQyTERBdU9TMHlMalYyTFRFeWFDMHlkakV5WXpBc01TNHhMVEF1T1N3eUxUSXNNbXd3TERCRE56TXVNeXd4T1Rrc056SXVOeXd4T1RndU55dzNNaTR6TERFNU9DNHhlaUJOTnpVc01UYzJDZ2tKQ1dNd0xqUXNNQ3d3TGpjc01Dd3hMakV0TUM0eFl6QXVOU3d5TGpJc01pNDJMRE11TlN3MExqZ3NNMk13TGpVdE1DNHhMREV0TUM0ekxERXVOQzB3TGpaak1TNHhMREl1TVN3eExqY3NOQzQwTERFdU55dzJMamQyTWpSak1Dd3pMak10TWk0M0xEWXROaXcyYUMwemRqa0tDUWtKWXpBc01pNDRMVEl1TWl3MUxUVXNOWE10TlMweUxqSXROUzAxZGkwNWFDMHpZeTB6TGpNc01DMDJMVEl1TnkwMkxUWjJMVEkwWXpBdE55NDNMRFl1TXkweE5Dd3hOQzB4TkVNM01Dd3hOek11T0N3M01pNHlMREUzTml3M05Td3hOelo2SUUwMU9Dd3hPVEYyTVRJS0NRa0pZekFzTUM0NExEQXVOU3d4TGpVc01TNHlMREV1T0dNd0xqa3NNQzQwTERFdU9Td3dMakVzTWk0MExUQXVOMk13TGpJdE1DNHpMREF1TXkwd0xqY3NNQzR6TFRFdU1YWXRNVEpvTW5ZeE1tTXdMREl1TWkweExqY3NOQzB6TGprc05HTXRNQzQxTERBdE1TMHdMakV0TVM0MExUQXVNZ29KQ1FsakxUQXVNaTB3TGpFdE1DNDBMVEF1TWkwd0xqY3RNQzR6ZGpJdU5XTXdMREl1TWl3eExqZ3NOQ3cwTERSb01UWmpNaTR5TERBc05DMHhMamdzTkMwMGRpMHlOR013TFRFdU5TMHdMakl0TWk0NUxUQXVOeTAwTGpKakxUQXVOQ3d3TGpFdE1DNDVMREF1TWkweExqTXNNQzR5Q2drSkNXTXRNaTR4TERBdE5DNHhMVEV1TVMwMUxqSXRNMk10TXkwd0xqRXROUzQyTFRJdE5pNDFMVFF1T1VNMk1pNDBMREUzTkN3MU9Dd3hOemtzTlRnc01UZzFWakU1TVhvZ1RUWTNMREl4TlhZNVl6QXNNUzQzTERFdU15d3pMRE1zTTNNekxURXVNeXd6TFROMkxUbElOamQ2SWk4K0Nna0pQSEJoZEdnZ1kyeGhjM005SW5OME1DSWdaRDBpVFMweE55d3hPVEZqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTW1Nd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVndE1UZDZJRTB5TERJd01HTXdMVEF1Tml3d0xqUXRNU3d4TFRGb01nb0pDUWxqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZJTTBNeUxqUXNNakF4TERJc01qQXdMallzTWl3eU1EQjZJRTB0TVRJc01qQTFZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEZJTFRFeWVnb0pDUWtnVFMwek55d3lNRFpqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTW1Nd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVndE16ZDZJRTB0TXpJc01qRXdZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhDZ2tKQ1hNdE1DNDBMVEV0TVMweFNDMHpNbm9nVFMweU15d3lNVEJqTUMwd0xqWXNNQzQwTFRFc01TMHhhREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRExUSXlMallzTWpFeExUSXpMREl4TUM0MkxUSXpMREl4TUhvZ1RTMDRMREl4TVdNd0xUQXVOaXd3TGpRdE1Td3hMVEVLQ1FrSmFESmpNQzQyTERBc01Td3dMalFzTVN3eGN5MHdMalFzTVMweExERm9MVEpETFRjdU5pd3lNVEl0T0N3eU1URXVOaTA0TERJeE1Yb2dUVFFzTWpBNVl5MHdMallzTUMweExEQXVOQzB4TERGek1DNDBMREVzTVN3eGFESmpNQzQyTERBc01TMHdMalFzTVMweGN5MHdMalF0TVMweExURklOSG9LQ1FrSklFMHROeXd4T1RWak1DMHdMallzTUM0MExURXNNUzB4YURKak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGb0xUSkRMVFl1Tml3eE9UWXROeXd4T1RVdU5pMDNMREU1TlhvZ1RTMHlOaXd4T1RWakxUQXVOaXd3TFRFc01DNDBMVEVzTVhNd0xqUXNNU3d4TERGb01nb0pDUWxqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEZJTFRJMmVpQk5MVEl3TERJd01HTXdMVEF1Tml3d0xqUXRNU3d4TFRGb01tTXdMallzTUN3eExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01XZ3RNa010TVRrdU5pd3lNREV0TWpBc01qQXdMall0TWpBc01qQXdlaUJOTFRRMUxESXhOUW9KQ1Fsak1DMHdMalVzTUMwd0xqa3NNQzB4TGpSakxUSXVOUzB4TGpFdE15NDNMVFF0TWk0MkxUWXVObU13TGpJdE1DNDFMREF1TlMweExEQXVPUzB4TGpSakxUQXVPUzB5TERBdE5DNHlMREV1T1MwMUxqSmpMVEF1T0MweUxqWXNNQzQzTFRVdU5Dd3pMalF0Tmk0eWJEQXNNQW9KQ1Fsak1DNDBMVEF1TlN3d0xqa3RNQzQ1TERFdU5TMHhMakZqTUM0MUxUSXVOeXd6TGpFdE5DNDFMRFV1T0MwMExqRmpNQzQzTERBdU1Td3hMalFzTUM0MExESXNNQzQ0WXpVdU15MHpMamdzTVRFdU5pMDFMamtzTVRndU1pMDFMamxqTmk0NExEQXNNVE11TVN3eUxqSXNNVGd1TWl3MUxqa0tDUWtKWXpJdU15MHhMallzTlM0MExURXNOeXd4TGpOak1DNDBMREF1Tml3d0xqY3NNUzR6TERBdU9Dd3lZekF1Tml3d0xqSXNNUzR4TERBdU5pd3hMalVzTVM0eFl6SXVOeXd3TGpnc05DNHlMRE11TlN3ekxqUXNOaTR5YkRBc01HTXhMamtzTVN3eUxqY3NNeTR5TERFdU9TdzFMaklLQ1FrSll6RXVPU3d5TERFdU9DdzFMakl0TUM0eUxEZGpMVEF1TkN3d0xqUXRNQzQ1TERBdU55MHhMalVzTVdNd0xEQXVOU3d3TERBdU9Td3dMREV1TkhZeGFDMDJNbll0TVVndE5EVjZJRTB0TkRRdU1pd3lNRGN1T0dNdE1DNHpMREV1TWkwd0xqVXNNaTQwTFRBdU5pd3pMallLQ1FrSll5MHhMak10TVMweExqWXRNaTQ1TFRBdU5pMDBMakpzTUN3d1F5MDBOU3d5TURjdU5TMDBOQzQyTERJd055NDNMVFEwTGpJc01qQTNMamhNTFRRMExqSXNNakEzTGpoNklFMHROREl1Tnl3eU1ETXVNbU10TUM0MExEQXVPUzB3TGpjc01TNDRMVEVzTWk0M0Nna0pDV010TVMwd0xqUXRNUzQyTFRFdU5TMHhMak10TWk0MVl6QXVNaTB3TGpVc01DNDJMVEF1T1N3eExqRXRNUzR5UXkwME15NDFMREl3TWk0MkxUUXpMakVzTWpBeUxqa3ROREl1Tnl3eU1ETXVNa3d0TkRJdU55d3lNRE11TW5vZ1RTMDBNQzQwTERFNU9DNDNDZ2tKQ1dNdE1DNDFMREF1T1MweExERXVPQzB4TGpVc01pNDNZeTB4TGpNdE1TMHhMalV0TWk0NUxUQXVOUzAwTGpKak1DNHhMVEF1TWl3d0xqTXRNQzR6TERBdU5DMHdMalZETFRReExqY3NNVGszTGpZdE5ERXVNU3d4T1RndU15MDBNQzQwTERFNU9DNDNlaUJOTFRNNUxqSXNNVGszQ2drSkNXTXdMak10TUM0MUxEQXVOeTB4TERFdU1TMHhMalZqTFRBdU15MHdMalV0TUM0NUxUQXVOeTB4TGpRdE1DNDBjeTB3TGpjc01DNDVMVEF1TkN3eExqUkRMVE01TGpjc01UazJMamN0TXprdU5Td3hPVFl1T1Mwek9TNHlMREU1TjB3dE16a3VNaXd4T1RkNklFMHRNek11T1N3eE9URXVNZ29KQ1FsakxURXNNQzQ1TFRJc01TNDRMVEl1T1N3eUxqaGpMVEF1TXkwd0xqTXRNQzQzTFRBdU5pMHhMakV0TUM0NFl6QXVOQzB4TGpZc01pNHhMVEl1TlN3ekxqY3RNaTR4UXkwek5DNHhMREU1TVM0eExUTTBMREU1TVM0eUxUTXpMamtzTVRreExqSk1MVE16TGprc01Ua3hMako2SUUwNExqZ3NNVGswQ2drSkNXTXRNQzQ1TFRFdE1TNDVMVEV1T1MweUxqa3RNaTQ0WXpFdU5TMHdMallzTXk0ekxEQXVNU3d6TGprc01TNDNZekFzTUM0eExEQXVNU3d3TGpJc01DNHhMREF1TTBNNUxqVXNNVGt6TGpRc09TNHhMREU1TXk0MkxEZ3VPQ3d4T1RSTU9DNDRMREU1TkhvZ1RURXdMakVzTVRrMUxqVUtDUWtKWXpBdU5Dd3dMalVzTUM0NExERXNNUzR4TERFdU5HTXdMalV0TUM0eExEQXVPUzB3TGpjc01DNDRMVEV1TW1NdE1DNHhMVEF1TlMwd0xqY3RNQzQ1TFRFdU1pMHdMamhETVRBdU5Td3hPVFV1TVN3eE1DNHpMREU1TlM0ekxERXdMakVzTVRrMUxqVjZJRTB4TXk0NUxESXdNUzQwQ2drSkNXTXRNQzQxTFRBdU9TMHdMamt0TVM0NExURXVOUzB5TGpkak1DNDRMVEF1TkN3eExqUXRNUzR4TERFdU5pMHlZekV1TXl3eExqRXNNUzQwTERNc01DNDBMRFF1TWtNeE5DNHlMREl3TVM0eExERTBMREl3TVM0eUxERXpMamtzTWpBeExqUjZJRTB4TlM0M0xESXdOUzQ1Q2drSkNXTXRNQzR6TFRBdU9TMHdMall0TVM0NExURXRNaTQzWXpBdU5DMHdMak1zTUM0NExUQXVOaXd4TGpJdE1XTXhMREF1TlN3eExqUXNNUzQzTERFc01pNDNRekUyTGpZc01qQTFMak1zTVRZdU1pd3lNRFV1Tnl3eE5TNDNMREl3TlM0NWVpQk5NVFl1T0N3eU1URXVOQW9KQ1FsakxUQXVNUzB4TGpJdE1DNDBMVEl1TkMwd0xqWXRNeTQyWXpBdU5TMHdMakVzTUM0NUxUQXVOQ3d4TGpJdE1DNDJRekU0TGpRc01qQTRMalVzTVRndU1Td3lNVEF1TkN3eE5pNDRMREl4TVM0MFRERTJMamdzTWpFeExqUk1NVFl1T0N3eU1URXVOSG9nVFRFMUxESXhOQW9KQ1FsakxUQXVOUzB4TmkweE15NDVMVEk0TGpZdE1qa3VPUzB5T0M0eFl5MHhOUzR6TERBdU5TMHlOeTQyTERFeUxqZ3RNamd1TVN3eU9DNHhTREUxVERFMUxESXhOSG9pTHo0S0NUd3ZaejRLUEM5blBnbzhMM04yWno0Syc7XHJcbiRjaGF0LWJnLWRhcms6ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlkWFJtTFRnaVB6NEtQQ0V0TFNCSFpXNWxjbUYwYjNJNklFRmtiMkpsSUVsc2JIVnpkSEpoZEc5eUlESTFMakF1TUN3Z1UxWkhJRVY0Y0c5eWRDQlFiSFZuTFVsdUlDNGdVMVpISUZabGNuTnBiMjQ2SURZdU1EQWdRblZwYkdRZ01Da2dJQzB0UGdvOGMzWm5JSFpsY25OcGIyNDlJakV1TVNJZ2FXUTlJa3hoZVdWeVh6RWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdlRzFzYm5NNmVHeHBibXM5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZlR3hwYm1zaUlIZzlJakJ3ZUNJZ2VUMGlNSEI0SWdvSklIWnBaWGRDYjNnOUlqQWdNQ0F5TmpBZ01qWXdJaUJ6ZEhsc1pUMGlaVzVoWW14bExXSmhZMnRuY205MWJtUTZibVYzSURBZ01DQXlOakFnTWpZd095SWdlRzFzT25Od1lXTmxQU0p3Y21WelpYSjJaU0krQ2p4emRIbHNaU0IwZVhCbFBTSjBaWGgwTDJOemN5SStDZ2t1YzNRd2UyWnBiR3d0Y25Wc1pUcGxkbVZ1YjJSa08yTnNhWEF0Y25Wc1pUcGxkbVZ1YjJSa08yWnBiR3c2SXpFM01VRXlORHQ5Q2p3dmMzUjViR1UrQ2p4blBnb0pQR2NnYVdROUlta3RiR2xyWlMxbWIyOWtJajRLQ1FrOGNHRjBhQ0JqYkdGemN6MGljM1F3SWlCa1BTSk5NalF1TkN3eE5tTXdMaklzTUM0MkxEQXVOQ3d4TGpNc01DNDFMREpvTFRNdU4yd3hMaklzTWk0emJEQXVOU3d3TGpsc0xUQXVNaXd3TGpGV01qaGpNaTR5TERFdU55d3lMamNzTkM0NExERXNOd29KQ1FsakxUQXVPQ3d4TFRFdU9Td3hMamN0TXk0eUxERXVPVll6TjJNdE1DNDVMRE11TlMwMExqRXNOaTAzTGpnc05tZ3RNakJqTFRNdU5pd3dMVFl1T0MweUxqVXROeTQzTFRaMkxUQXVNV010TWk0M0xUQXVOQzAwTGpZdE15MDBMakl0TlM0M1l6QXVNaTB4TGpNc01DNDVMVEl1TlN3eExqa3RNeTR5Q2drSkNYWXROaTQ0YkMwd0xqZ3RNUzQyYkMwd0xqUXRNQzQ1YkRBdU9TMHdMalJNTFRFM0xERTRhQzB6UXkweE55NHlMRFV1TmkwMExqa3RNaTR5TERjdU5Td3dMalpETVRVdU5Dd3lMak1zTWpFdU9TdzRMaklzTWpRdU5Dd3hObm9nVFMweE1pNDBMREU0WXkwd0xqSXNNQzB3TGpNc01DMHdMalFzTUM0eENna0pDV3d0TXk0eExERXVObXd3TGprc01TNDRiREV1TXkwd0xqZGpNQzQ0TFRBdU5Dd3hMamd0TUM0MExESXVOeXd3YkRJdU1pd3hMakZqTUM0ekxEQXVNU3d3TGpZc01DNHhMREF1T1N3d2JESXVNaTB4TGpGak1DNDRMVEF1TkN3eExqZ3RNQzQwTERJdU55d3diREl1TWl3eExqRUtDUWtKWXpBdU15d3dMakVzTUM0MkxEQXVNU3d3TGprc01Hd3lMakl0TVM0eFl6QXVPQzB3TGpRc01TNDRMVEF1TkN3eUxqY3NNR3d5TGpJc01TNHhRemN1TkN3eU1pdzNMamNzTWpJc09Dd3lNUzQ1YkRJdU9TMHhMak5qTUM0NExUQXVNeXd4TGpjdE1DNHpMREl1TkN3d2JESXVPU3d4TGpNS0NRa0pZekF1TXl3d0xqRXNNQzQyTERBdU1Td3dMamtzTUd3ekxqRXRNUzQxYkMwd0xqa3RNUzQ0YkMweExqUXNNQzQzWXkwd0xqZ3NNQzQwTFRFdU55d3dMalF0TWk0MkxEQXVNV3d0TWk0NExURXVNa014TWk0ekxERTRMREV5TGpJc01UZ3NNVEl1TVN3eE9Hd3dMREFLQ1FrSll5MHdMakVzTUMwd0xqTXNNQzB3TGpRc01DNHhiQzB5TGpnc01TNHlZeTB3TGpnc01DNDBMVEV1T0N3d0xqTXRNaTQyTFRBdU1VdzBMREU0TGpGRE15NDVMREU0TERNdU55d3hPQ3d6TGpZc01UaHNNQ3d3WXkwd0xqSXNNQzB3TGpNc01DMHdMalFzTUM0eFRERXNNVGt1TWdvSkNRbGpMVEF1T0N3d0xqUXRNUzQ0TERBdU5DMHlMamNzTUV3dE5Dd3hPQzR4UXkwMExqRXNNVGd0TkM0ekxERTRMVFF1TkN3eE9Hd3dMREJqTFRBdU1pd3dMVEF1TXl3d0xUQXVOQ3d3TGpGTUxUY3NNVGt1TW1NdE1DNDRMREF1TkMweExqZ3NNQzQwTFRJdU55d3diQzB5TGpJdE1TNHhDZ2tKQ1VNdE1USXVNU3d4T0MweE1pNHpMREU0TFRFeUxqUXNNVGhNTFRFeUxqUXNNVGhNTFRFeUxqUXNNVGg2SUUwdE1USXVOQ3d4Tm1ndE5DNDVReTB4TXk0MUxEVXVNUzB4TGpVdE1DNDNMRGt1TlN3ekxqSmpOaXd5TGpFc01UQXVOeXcyTGpnc01USXVPQ3d4TWk0NGFDMHlMakZzTFRBdU1TMHdMakVLQ1FrSlRERTVMamtzTVRaSUxURXlMalJNTFRFeUxqUXNNVFo2SUUweE55NDVMREl6TGpkc01TNDBMVEF1TjJneExqTjJNbWd0TXpaMkxURXVNV3d3TGpNdE1DNHliREV1TkMwd0xqZG9NaTQyYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpnc01DNDBMREl1Tnl3d2JERXVOQzB3TGpkSUxUTUtDUWtKYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpnc01DNDBMREl1Tnl3d1RESXVNeXd5TTJneUxqWnNNUzQwTERBdU4yTXdMamNzTUM0MExERXVOeXd3TGpRc01pNDFMREJzTVM0M0xUQXVOMmd6TGpKc01TNDNMREF1TjBNeE5pNHlMREkwTGpFc01UY3VNU3d5TkM0eExERTNMamtzTWpNdU4zb0tDUWtKSUUwdE1UTXVPQ3d5TjJ3eE5pNDBMRFF1T1V3eE9DNDVMREkzU0MweE15NDRlaUJOTFRFMExqUXNNamxvTUM0emJERTJMamNzTld3eE5pNDNMVFZvTUM0ell6RXVOeXd3TERNc01TNHpMRE1zTTNNdE1TNHpMRE10TXl3emFDMHpOR010TVM0M0xEQXRNeTB4TGpNdE15MHpDZ2tKQ1VNdE1UY3VOQ3d6TUM0ekxURTJMakVzTWprdE1UUXVOQ3d5T1hvZ1RTMHhNeTR4TERNM1l6QXVPQ3d5TGpRc015NHhMRFFzTlM0M0xEUm9NakJqTWk0MUxEQXNOQzQ0TFRFdU5pdzFMamN0TkVNeE9DNHlMRE0zTFRFekxqRXNNemN0TVRNdU1Td3pOM29pTHo0S0NRazhjR0YwYUNCcFpEMGljR0YwYURaZlptbHNiQzFqYjNCNUlpQmpiR0Z6Y3owaWMzUXdJaUJrUFNKTk1qZzBMalFzTVRaak1DNHlMREF1Tml3d0xqUXNNUzR6TERBdU5Td3lhQzB6TGpkc01TNHlMREl1TTJ3d0xqVXNNQzQ1YkMwd0xqSXNNQzR4VmpJNFl6SXVNaXd4TGpjc01pNDNMRFF1T0N3eExEY0tDUWtKWXkwd0xqZ3NNUzB4TGprc01TNDNMVE11TWl3eExqbFdNemRqTFRBdU9Td3pMalV0TkM0eExEWXROeTQ0TERab0xUSXdZeTB6TGpZc01DMDJMamd0TWk0MUxUY3VOeTAyZGkwd0xqRmpMVEl1Tnkwd0xqUXROQzQyTFRNdE5DNHlMVFV1TjJNd0xqSXRNUzR6TERBdU9TMHlMalVzTVM0NUxUTXVNZ29KQ1FsMkxUWXVPR3d0TUM0NExURXVObXd0TUM0MExUQXVPV3d3TGprdE1DNDBUREkwTXl3eE9HZ3RNMk15TGpndE1USXVOQ3d4TlM0eExUSXdMaklzTWpjdU5TMHhOeTQwUXpJM05TNDBMREl1TXl3eU9ERXVPU3c0TGpJc01qZzBMalFzTVRaNklFMHlORGN1TlN3eE9Bb0pDUWxqTFRBdU1pd3dMVEF1TXl3d0xUQXVOQ3d3TGpGc0xUTXVNU3d4TGpac01DNDVMREV1T0d3eExqTXRNQzQzWXpBdU9DMHdMalFzTVM0NExUQXVOQ3d5TGpjc01Hd3lMaklzTVM0eFl6QXVNeXd3TGpFc01DNDJMREF1TVN3d0xqa3NNR3d5TGpJdE1TNHhDZ2tKQ1dNd0xqZ3RNQzQwTERFdU9DMHdMalFzTWk0M0xEQnNNaTR5TERFdU1XTXdMak1zTUM0eExEQXVOaXd3TGpFc01DNDVMREJzTWk0eUxURXVNV013TGpndE1DNDBMREV1T0Mwd0xqUXNNaTQzTERCc01pNHlMREV1TVdNd0xqTXNNQzR4TERBdU5pd3dMakVzTUM0NUxEQnNNaTQ1TFRFdU13b0pDUWxqTUM0NExUQXVNeXd4TGpjdE1DNHpMREl1TkN3d2JESXVPU3d4TGpOak1DNHpMREF1TVN3d0xqWXNNQzR4TERBdU9Td3diRE11TVMweExqVnNMVEF1T1MweExqaHNMVEV1TkN3d0xqZGpMVEF1T0N3d0xqUXRNUzQzTERBdU5DMHlMallzTUM0eGJDMHlMamd0TVM0eUNna0pDV010TUM0eExUQXVNUzB3TGpNdE1DNHhMVEF1TkMwd0xqRnNNQ3d3WXkwd0xqRXNNQzB3TGpNc01DMHdMalFzTUM0eGJDMHlMamdzTVM0eVl5MHdMamdzTUM0MExURXVPQ3d3TGpNdE1pNDJMVEF1TVd3dE1pNHpMVEV1TVdNdE1DNHhMVEF1TVMwd0xqTXRNQzR4TFRBdU5TMHdMakZzTUN3d0Nna0pDV010TUM0eUxEQXRNQzR6TERBdE1DNDBMREF1TVd3dE1pNHlMREV1TVdNdE1DNDRMREF1TkMweExqZ3NNQzQwTFRJdU55d3diQzB5TGpJdE1TNHhZeTB3TGpFdE1DNHhMVEF1TXkwd0xqRXRNQzQwTFRBdU1Xd3dMREJqTFRBdU1pd3dMVEF1TXl3d0xUQXVOQ3d3TGpGc0xUSXVNaXd4TGpFS0NRa0pZeTB3TGpnc01DNDBMVEV1T0N3d0xqUXRNaTQzTERCc0xUSXVNaTB4TGpGRE1qUTNMamtzTVRnc01qUTNMamNzTVRnc01qUTNMalVzTVRoTU1qUTNMalVzTVRoTU1qUTNMalVzTVRoNklFMHlORGN1TlN3eE5tZ3ROQzQ1WXpNdU9TMHhNQzQ1TERFMUxqa3RNVFl1Tnl3eU5pNDRMVEV5TGpnS0NRa0pZellzTWk0eExERXdMamNzTmk0NExERXlMamdzTVRJdU9HZ3RNaTR4YkMwd0xqRXRNQzR4YkMwd0xqTXNNQzR4U0RJME55NDFUREkwTnk0MUxERTJlaUJOTWpjM0xqa3NNak11TjJ3eExqUXRNQzQzYURFdU0zWXlhQzB6Tm5ZdE1TNHhiREF1TXkwd0xqSnNNUzQwTFRBdU4yZ3lMallLQ1FrSmJERXVOQ3d3TGpkak1DNDRMREF1TkN3eExqZ3NNQzQwTERJdU55d3diREV1TkMwd0xqZG9NaTQyYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpnc01DNDBMREl1Tnl3d2JERXVOQzB3TGpkb01pNDJiREV1TkN3d0xqZGpNQzQ0TERBdU5Dd3hMamNzTUM0MExESXVOaXd3TGpGc01TNDNMVEF1TndvSkNRbG9NeTR5YkRFdU55d3dMamRETWpjMkxqSXNNalF1TVN3eU56Y3VNU3d5TkM0eExESTNOeTQ1TERJekxqZE1NamMzTGprc01qTXVOM29nVFRJME5pNHlMREkzYkRFMkxqUXNOQzQ1VERJM09Td3lOMGd5TkRZdU1ub2dUVEkwTlM0MUxESTVhREF1TTJ3eE5pNDNMRFZzTVRZdU55MDFhREF1TXdvSkNRbGpNUzQzTERBc015d3hMak1zTXl3emN5MHhMak1zTXkwekxETm9MVE0wWXkweExqY3NNQzB6TFRFdU15MHpMVE5UTWpRekxqa3NNamtzTWpRMUxqVXNNamw2SUUweU5EWXVPU3d6TjJNd0xqZ3NNaTQwTERNdU1TdzBMRFV1Tml3MGFESXdZekl1TlN3d0xEUXVPQzB4TGpZc05TNDNMVFFLQ1FrSlNESTBOaTQ1ZWlJdlBnb0pDVHh3WVhSb0lHTnNZWE56UFNKemREQWlJR1E5SWsweE5Ua3VOU3d5TVdNdE1TNHpMVE11TmkwMExqY3ROaTA0TGpVdE5tZ3ROREpqTFRNdU9Dd3dMVGN1TWl3eUxqUXRPQzQxTERaakxUTXVNeXd3TGpNdE5TNDRMRE11TWkwMUxqVXNOaTQxWXpBdU1pd3lMamtzTWk0MkxEVXVNaXcxTGpVc05TNDFDZ2tKQ1dNdE1TNDNMRFF1Tnl3d0xqZ3NPUzQ0TERVdU5Dd3hNUzQxWXpFc01DNHpMRElzTUM0MUxETXNNQzQxYURReVl6VXNNQ3c1TFRRc09TMDVZekF0TVMwd0xqSXRNaTR4TFRBdU5TMHpZek11TXkwd0xqTXNOUzQ0TFRNdU1pdzFMalV0Tmk0MUNna0pDVU14TmpRdU55d3lNeTQyTERFMk1pNDBMREl4TGpNc01UVTVMalVzTWpGNklFMHhOVEVzTVRkb0xUUXlZeTB5TGpjc01DMDFMaklzTVM0MkxUWXVNeXcwYURVMExqZERNVFUyTGpJc01UZ3VOaXd4TlRNdU55d3hOeXd4TlRFc01UZDZJRTB4TkRFdU55dzBNd29KQ1Fsak1pNHhMVEV1Tnl3ekxqTXROQzR6TERNdU15MDNhQzB5WXpBc015NDVMVE11TVN3M0xUY3NOMmd0TkM0ell6SXVNUzB4TGpjc015NHpMVFF1TXl3ekxqTXROMmd0TW1Nd0xETXVPUzB6TGpFc055MDNMRGRvTFRRdU0yTXlMakV0TVM0M0xETXVNeTAwTGpNc015NHpMVGRvTFRJS0NRa0pZekFzTXk0NUxUTXVNU3czTFRjc04yZ3ROMk10TXk0NUxEQXROeTB6TGpFdE55MDNjek11TVMwM0xEY3ROMmcwTW1Nekxqa3NNQ3czTERNdU1TdzNMRGR6TFRNdU1TdzNMVGNzTjBneE5ERXVOM29nVFRFd09Td3lOMk10TXl3d0xUVXVPQ3d4TGpVdE55NDFMRFJJTVRBeENna0pDV010TWk0eUxEQXROQzB4TGpndE5DMDBjekV1T0MwMExEUXROR2cxT0dNeUxqSXNNQ3cwTERFdU9DdzBMRFJ6TFRFdU9DdzBMVFFzTkdndE1DNDFZeTB4TGpjdE1pNDFMVFF1TlMwMExUY3VOUzAwU0RFd09Yb2lMejRLQ1FrOGNHRjBhQ0JqYkdGemN6MGljM1F3SWlCa1BTSk5NemtzTVRFMVl6UXVOQ3d3TERndE15NDJMRGd0T0hNdE15NDJMVGd0T0MwNGN5MDRMRE11TmkwNExEaFRNelF1Tml3eE1UVXNNemtzTVRFMWVpQk5ORFVzTVRBM1l6QXNNeTR6TFRJdU55dzJMVFlzTm5NdE5pMHlMamN0TmkwMkNna0pDWE15TGpjdE5pdzJMVFpUTkRVc01UQXpMamNzTkRVc01UQTNlaUJOTkRJc056aDJMVEpvT0hZdE5rZzBNR010TWk0eUxEQXROQ3d4TGpndE5DdzBkakV3U0RJeWJDMHhMak1zTkV3eU1DdzVNR2d5TGpKc015NDRMRFF3YURJMmJETXVPQzAwTUVnMU9Hd3RNQzQzTFRKTU5UWXNPRFJJTkRKV056aDZDZ2tKQ1NCTk16Z3NOelIyTVRCb01sWTNOR2c0ZGkweWFDMDRRek00TGprc056SXNNemdzTnpJdU9Td3pPQ3czTkhvZ1RUUXdMRGcyYURFMExqWnNNQzQzTERKSU1qSXVPR3d3TGpjdE1rZzBNSG9nVFRVekxqZ3NPVEJJTWpRdU1td3pMallzTXpob01qSXVORXcxTXk0NExEa3dlaUl2UGdvSkNUeHdZWFJvSUdOc1lYTnpQU0p6ZERBaUlHUTlJazB4TWprc09USm9MVFoyTkdndE5uWTBhQzAyZGpFMGFDMHpiREF1TWl3eWJETXVPQ3d6TW1nek5td3pMamd0TXpKc01DNHlMVEpvTFROMkxURTBhQzAyZGkwMGFDMDJkaTAwU0RFeU9Yb2dUVEUwTnl3eE1UUjJMVEV5YUMwMGRqUm9NM1k0U0RFME53b0pDUWw2SUUweE5EUXNNVEUwZGkwMmFDMDBkalpJTVRRMGVpQk5NVE00TERFeU1IWXRNVFpvTFRSMk1Ua3VNa014TXpVdU5pd3hNakl1TlN3eE16Y3NNVEl4TGpRc01UTTRMREV5TUhvZ1RURXpNaXd4TWpNdU9GWXhNREJvTFRSMk1qTXVPQW9KQ1FsRE1USTVMak1zTVRJMExqRXNNVE13TGpjc01USTBMakVzTVRNeUxERXlNeTQ0ZWlCTk1USTJMREV5TXk0eVZqRXdOR2d0TkhZeE5rTXhNak1zTVRJeExqUXNNVEkwTGpRc01USXlMalVzTVRJMkxERXlNeTR5ZWlCTk1USXdMREV4TkhZdE5tZ3ROSFkyU0RFeU1Ib2dUVEV4TkN3eE1UUjJMVGhvTXdvSkNRbDJMVFJvTFRSMk1USklNVEUwZWlCTk1UUXhMREV3TW5ZdE5HZ3ROSFkwYUROMk5HZ3hWakV3TW5vZ1RURXpOU3d4TURKMkxUaG9MVFIyTkdnemRqUklNVE0xZWlCTk1USTVMRGs0ZGkwMGFDMDBkamhvTVhZdE5FZ3hNamw2SUUweE1qTXNNVEF5ZGkwMGFDMDBkamhvTVhZdE5FZ3hNak42Q2drSkNTQk5NVE13TERFeU5tTTFMamtzTUN3eE1DNDVMVFF1TWl3eE1TNDRMVEV3YURjdU9Xd3RNeTQxTERNd2FDMHpNaTQwYkMwekxqVXRNekJvTnk0NVF6RXhPUzR4TERFeU1TNDRMREV5TkM0eExERXlOaXd4TXpBc01USTJlaUl2UGdvSkNUeHdZWFJvSUdOc1lYTnpQU0p6ZERBaUlHUTlJazB5TVRJc09EWjJNbWd0TkhZdE1rZ3lNVEo2SUUweU1UWXNPRFpvTFRKMk1tZ3lWamcyZWlCTk1UazJMRGcyVERFNU5pdzRObU10TWk0M0xEQXVOeTAwTGpVc015NHpMVE11T1N3Mll6QXVOQ3d4TGpnc01TNDJMRE11TWl3ekxqTXNNeTQ0Q2drSkNXd3dMakVzTUM0eWJERXVNU3cwTGpWak1DNHlMREF1T1N3eExERXVOU3d4TGprc01TNDFiREFzTUd3M0xESTBMalpqTUM0eUxEQXVPU3d4TERFdU5Dd3hMamtzTVM0MGFEVmpNQzQ1TERBc01TNDNMVEF1Tml3eExqa3RNUzQwYkRjdE1qUXVObU13TGprc01Dd3hMamN0TUM0MkxERXVPUzB4TGpVS0NRa0piREV1TVMwMExqVnNNQzR4TFRBdU1tTXlMall0TUM0NUxEUXVNUzB6TGpjc015NHlMVFl1TTJNdE1DNDJMVEV1TnkweUxUTXRNeTQ0TFRNdU0xWTRObU13TFRjdU55MDJMak10TVRRdE1UUXRNVFJUTVRrMkxEYzRMak1zTVRrMkxEZzJlaUJOTWpBd0xEZzJhRFoyTW1ndE9Rb0pDUWxqTFRFdU55d3dMVE1zTVM0ekxUTXNNM014TGpNc015d3pMRE5vTWpaak1TNDNMREFzTXkweExqTXNNeTB6Y3kweExqTXRNeTB6TFROb0xUTjJMVEpvTW1Nd0xUWXVOaTAxTGpRdE1USXRNVEl0TVRKekxURXlMRFV1TkMweE1pd3hNa2d5TURCNklFMHhPVGd1Tml3eE1EQnNMVEV0TkdneU5DNDVDZ2tKQ1d3dE1TdzBTREU1T0M0MmVpQk5NakEzTGpVc01USTJiQzAyTGprdE1qUm9NVGd1TjJ3dE5pNDVMREkwU0RJd055NDFlaUJOTVRVd0xESTBNbU14TWk0eUxEQXNNakl0T1M0NExESXlMVEl5Y3kwNUxqZ3RNakl0TWpJdE1qSnpMVEl5TERrdU9DMHlNaXd5TWdvSkNRbFRNVE0zTGpnc01qUXlMREUxTUN3eU5ESjZJRTB4TnpRc01qSXdZekFzTVRNdU15MHhNQzQzTERJMExUSTBMREkwY3kweU5DMHhNQzQzTFRJMExUSTBiREFzTUdNd0xURXpMak1zTVRBdU55MHlOQ3d5TkMweU5GTXhOelFzTWpBMkxqY3NNVGMwTERJeU1Ib2dUVEUwTlM0MkxESXpOeTQzQ2drSkNXd3lMVEF1T1dNeExqVXRNQzQyTERNdU1pMHdMallzTkM0M0xEQnNNaXd3TGpsak1DNDVMREF1TkN3eUxEQXNNaTQxTFRBdU9Hd3hMakV0TVM0NVl6QXVPQzB4TGpRc01pNHlMVEl1TkN3ekxqZ3RNaTQ0YkRJdU1TMHdMalZqTVMwd0xqSXNNUzQyTFRFdU1Td3hMalV0TWk0eGJDMHdMakl0TWk0eUNna0pDV010TUM0eExURXVOaXd3TGpRdE15NHlMREV1TkMwMExqVnNNUzQwTFRFdU4yTXdMamN0TUM0NExEQXVOeTB4TGprc01DMHlMalpzTFRFdU5DMHhMamRqTFRFdU1TMHhMakl0TVM0MkxUSXVPQzB4TGpRdE5DNDFiREF1TWkweUxqSmpNQzR4TFRFdE1DNDJMVEV1T1MweExqWXRNaTR4Q2drSkNXd3RNaTR4TFRBdU5XTXRNUzQyTFRBdU5DMHpMVEV1TkMwekxqZ3RNaTQ0YkMweExqRXRNUzQ1WXkwd0xqVXRNQzQ1TFRFdU5pMHhMakl0TWk0MUxUQXVPR3d0TWl3d0xqbGpMVEV1TlN3d0xqWXRNeTR5TERBdU5pMDBMamNzTUd3dE1pMHdMamxqTFRBdU9TMHdMalF0TWl3d0xUSXVOU3d3TGpnS0NRa0piQzB4TERJdU1XTXRNQzQ0TERFdU5DMHlMaklzTWk0MExUTXVPQ3d5TGpoc0xUSXVNU3d3TGpWakxURXNNQzR5TFRFdU5pd3hMakV0TVM0MUxESXVNV3d3TGpJc01pNHlZekF1TVN3eExqWXRNQzQwTERNdU1pMHhMalFzTkM0MWJDMHhMalFzTVM0M0Nna0pDV010TUM0M0xEQXVPQzB3TGpjc01TNDVMREFzTWk0MmJERXVOQ3d4TGpkak1TNHhMREV1TWl3eExqWXNNaTQ0TERFdU5DdzBMalZzTFRBdU1pd3lMakpqTFRBdU1Td3hMREF1Tml3eExqa3NNUzQyTERJdU1Xd3lMakVzTUM0MVl6RXVOaXd3TGpRc015d3hMalFzTXk0NExESXVPR3d4TGpFc01TNDVDZ2tKQ1VNeE5ETXVOaXd5TXpjdU9Dd3hORFF1Tnl3eU16Z3VNU3d4TkRVdU5pd3lNemN1TjB3eE5EVXVOaXd5TXpjdU4zb2dUVEUwT0M0MExESXpPQzQzWXpFdE1DNDBMREl1TVMwd0xqUXNNeTR4TERCc01pd3dMamxqTVM0NExEQXVPQ3cwTERBdU1TdzFMVEV1Tm13eExqRXRNUzQ1Q2drSkNXTXdMall0TUM0NUxERXVOUzB4TGpZc01pNDFMVEV1T0d3eUxqRXRNQzQxWXpFdU9TMHdMalFzTXk0ekxUSXVNeXd6TGpFdE5DNHliQzB3TGpJdE1pNHlZeTB3TGpFdE1TNHhMREF1TXkweUxqSXNNUzB6YkRFdU5DMHhMamRqTVM0ekxURXVOU3d4TGpNdE15NDNMREF0TlM0eWJDMHhMalF0TVM0M0Nna0pDV010TUM0M0xUQXVPQzB4TGpFdE1TNDVMVEV0TTJ3d0xqSXRNaTR5WXpBdU1pMHlMVEV1TVMwekxqZ3RNeTR4TFRRdU1td3RNaTR4TFRBdU5XTXRNUzR4TFRBdU1pMHlMVEF1T1MweUxqVXRNUzQ0YkMweExqRXRNUzQ1WXkweExURXVOeTB6TGpJdE1pNDBMVFV0TVM0MmJDMHlMREF1T1FvSkNRbGpMVEVzTUM0MExUSXVNU3d3TGpRdE15NHhMREJzTFRJdE1DNDVZeTB4TGpndE1DNDRMVFF0TUM0eExUVXNNUzQyYkMweExqRXNNUzQ1WXkwd0xqWXNNQzQ1TFRFdU5Td3hMall0TWk0MUxERXVPR3d0TWk0eExEQXVOV010TVM0NUxEQXVOQzB6TGpNc01pNHpMVE11TVN3MExqSnNNQzR5TERJdU1nb0pDUWxqTUM0eExERXVNUzB3TGpNc01pNHlMVEVzTTJ3dE1TNDBMREV1TjJNdE1TNHpMREV1TlMweExqTXNNeTQzTERBc05TNHliREV1TkN3eExqZGpNQzQzTERBdU9Dd3hMakVzTVM0NUxERXNNMnd0TUM0eUxESXVNbU10TUM0eUxESXNNUzR4TERNdU9Dd3pMakVzTkM0eWJESXVNU3d3TGpVS0NRa0pZekV1TVN3d0xqSXNNaXd3TGprc01pNDFMREV1T0d3eExqRXNNUzQ1WXpFc01TNDNMRE11TWl3eUxqUXNOU3d4TGpaTU1UUTRMalFzTWpNNExqZDZJRTB4TlRJc01qQTNZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNUW9KQ1FsVE1UVXlMREl3Tnk0MkxERTFNaXd5TURkNklFMHhOVGdzTWpBNVl6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01WTXhOVGdzTWpBNUxqWXNNVFU0TERJd09Yb2dUVEUwTnl3eU1UQmpNQzB3TGpZc01DNDBMVEVzTVMweGN6RXNNQzQwTERFc01Rb0pDUWx6TFRBdU5Dd3hMVEVzTVZNeE5EY3NNakV3TGpZc01UUTNMREl4TUhvZ1RURTBNU3d5TVRCak1DMHdMallzTUM0MExURXNNUzB4Y3pFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eFV6RTBNU3d5TVRBdU5pd3hOREVzTWpFd2VpQk5NVFEwTERJd05XTXdMVEF1Tml3d0xqUXRNU3d4TFRFS0NRa0pjekVzTUM0MExERXNNWE10TUM0MExERXRNU3d4VXpFME5Dd3lNRFV1Tml3eE5EUXNNakExZWlCTk1UTTJMREl4TTJNd0xUQXVOaXd3TGpRdE1Td3hMVEZ6TVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGVE1UTTJMREl4TXk0MkxERXpOaXd5TVRONklFMHhNemtzTWpFNUNna0pDV013TFRBdU5pd3dMalF0TVN3eExURnpNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZUTVRNNUxESXhPUzQyTERFek9Td3lNVGw2SUUweE16a3NNakkxWXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVZNeE16a3NNakkxTGpZc01UTTVMREl5TlhvS0NRa0pJRTB4TkRNc01qTXlZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNVk14TkRNc01qTXlMallzTVRRekxESXpNbm9nVFRFME9Dd3lNekJqTUMwd0xqWXNNQzQwTFRFc01TMHhjekVzTUM0MExERXNNWE10TUM0MExERXRNU3d4Q2drSkNWTXhORGdzTWpNd0xqWXNNVFE0TERJek1Ib2dUVEUxTXl3eU16UmpNQzB3TGpZc01DNDBMVEVzTVMweGN6RXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hVekUxTXl3eU16UXVOaXd4TlRNc01qTTBlaUJOTVRVM0xESXlPR013TFRBdU5pd3dMalF0TVN3eExURnpNU3d3TGpRc01Td3hDZ2tKQ1hNdE1DNDBMREV0TVN3eFV6RTFOeXd5TWpndU5pd3hOVGNzTWpJNGVpQk5NVFl6TERJeU5HTXdMVEF1Tml3d0xqUXRNU3d4TFRGek1Td3dMalFzTVN3eGN5MHdMalFzTVMweExERlRNVFl6TERJeU5DNDJMREUyTXl3eU1qUjZJRTB4TlRrc01qSXhZekF0TUM0MkxEQXVOQzB4TERFdE1Rb0pDUWx6TVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGVE1UVTVMREl5TVM0MkxERTFPU3d5TWpGNklFMHhOak1zTWpFNFl6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01WTXhOak1zTWpFNExqWXNNVFl6TERJeE9Ib2dUVEUxT0N3eU1UUUtDUWtKWXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVZNeE5UZ3NNakUwTGpZc01UVTRMREl4TkhvZ1RURXpOQ3d5TWpCak1DMHdMallzTUM0MExURXNNUzB4Y3pFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eFV6RXpOQ3d5TWpBdU5pd3hNelFzTWpJd2Vnb0pDUWtnVFRFMU1Dd3lNalZqTWk0NExEQXNOUzB5TGpJc05TMDFjeTB5TGpJdE5TMDFMVFZ6TFRVc01pNHlMVFVzTlZNeE5EY3VNaXd5TWpVc01UVXdMREl5TlhvZ1RURTFOeXd5TWpCak1Dd3pMamt0TXk0eExEY3ROeXczY3kwM0xUTXVNUzAzTFRkek15NHhMVGNzTnkwM0Nna0pDVk14TlRjc01qRTJMakVzTVRVM0xESXlNSG9nVFRJME15d3hPVEZqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTW1Nd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVneU5ETjZJRTB5TmpJc01qQXdZekF0TUM0MkxEQXVOQzB4TERFdE1XZ3lDZ2tKQ1dNd0xqWXNNQ3d4TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVdndE1rTXlOakl1TkN3eU1ERXNNall5TERJd01DNDJMREkyTWl3eU1EQjZJRTB5TkRnc01qQTFZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEVLQ1FrSlNESTBPSG9nVFRJeU15d3lNRFpqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTW1Nd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVneU1qTjZJRTB5TWpnc01qRXdZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhRElLQ1FrSll6QXVOaXd3TERFdE1DNDBMREV0TVhNdE1DNDBMVEV0TVMweFNESXlPSG9nVFRJek55d3lNVEJqTUMwd0xqWXNNQzQwTFRFc01TMHhhREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRE1qTTNMalFzTWpFeExESXpOeXd5TVRBdU5pd3lNemNzTWpFd2Vnb0pDUWtnVFRJMU1pd3lNVEZqTUMwd0xqWXNNQzQwTFRFc01TMHhhREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRE1qVXlMalFzTWpFeUxESTFNaXd5TVRFdU5pd3lOVElzTWpFeGVpQk5NalkwTERJd09XTXRNQzQyTERBdE1Td3dMalF0TVN3eGN6QXVOQ3d4TERFc01XZ3lDZ2tKQ1dNd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVneU5qUjZJRTB5TlRNc01UazFZekF0TUM0MkxEQXVOQzB4TERFdE1XZ3lZekF1Tml3d0xERXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hhQzB5UXpJMU15NDBMREU1Tml3eU5UTXNNVGsxTGpZc01qVXpMREU1TlhvS0NRa0pJRTB5TXpRc01UazFZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEZJTWpNMGVpQk5NalF3TERJd01HTXdMVEF1Tml3d0xqUXRNU3d4TFRGb01tTXdMallzTUN3eExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01Rb0pDUWxvTFRKRE1qUXdMalFzTWpBeExESTBNQ3d5TURBdU5pd3lOREFzTWpBd2VpQk5NakUxTERJeE5XTXdMVEF1TlN3d0xUQXVPU3d3TFRFdU5HTXRNaTQxTFRFdU1TMHpMamN0TkMweUxqWXROaTQyWXpBdU1pMHdMalVzTUM0MUxURXNNQzQ1TFRFdU5HTXRNQzQ1TFRJc01DMDBMaklzTVM0NUxUVXVNZ29KQ1FsakxUQXVPQzB5TGpZc01DNDNMVFV1TkN3ekxqUXROaTR5YkRBc01HTXdMalF0TUM0MUxEQXVPUzB3TGprc01TNDFMVEV1TVdNd0xqVXRNaTQzTERNdU1TMDBMalVzTlM0NExUUXVNV013TGpjc01DNHhMREV1TkN3d0xqUXNNaXd3TGpoak5TNHpMVE11T0N3eE1TNDJMVFV1T1N3eE9DNHlMVFV1T1FvSkNRbGpOaTQ0TERBc01UTXVNU3d5TGpJc01UZ3VNaXcxTGpsak1pNHpMVEV1Tml3MUxqUXRNU3czTERFdU0yTXdMalFzTUM0MkxEQXVOeXd4TGpNc01DNDRMREpqTUM0MkxEQXVNaXd4TGpFc01DNDJMREV1TlN3eExqRmpNaTQzTERBdU9DdzBMaklzTXk0MUxETXVOQ3cyTGpKc01Dd3dDZ2tKQ1dNeExqa3NNU3d5TGpjc015NHlMREV1T1N3MUxqSmpNUzQ1TERJc01TNDRMRFV1TWkwd0xqSXNOMk10TUM0MExEQXVOQzB3TGprc01DNDNMVEV1TlN3eFl6QXNNQzQxTERBc01DNDVMREFzTVM0MGRqRm9MVFl5ZGkweFNESXhOWG9nVFRJeE5TNDRMREl3Tnk0NENna0pDV010TUM0ekxERXVNaTB3TGpVc01pNDBMVEF1Tml3ekxqWmpMVEV1TXkweExURXVOaTB5TGprdE1DNDJMVFF1TW13d0xEQkRNakUxTERJd055NDFMREl4TlM0MExESXdOeTQzTERJeE5TNDRMREl3Tnk0NFRESXhOUzQ0TERJd055NDRlaUJOTWpFM0xqTXNNakF6TGpJS0NRa0pZeTB3TGpRc01DNDVMVEF1Tnl3eExqZ3RNU3d5TGpkakxURXRNQzQwTFRFdU5pMHhMalV0TVM0ekxUSXVOV013TGpJdE1DNDFMREF1Tmkwd0xqa3NNUzR4TFRFdU1rTXlNVFl1TlN3eU1ESXVOaXd5TVRZdU9Td3lNREl1T1N3eU1UY3VNeXd5TURNdU1rd3lNVGN1TXl3eU1ETXVNbm9LQ1FrSklFMHlNVGt1Tml3eE9UZ3VOMk10TUM0MUxEQXVPUzB4TERFdU9DMHhMalVzTWk0M1l5MHhMak10TVMweExqVXRNaTQ1TFRBdU5TMDBMakpqTUM0eExUQXVNaXd3TGpNdE1DNHpMREF1TkMwd0xqVkRNakU0TGpNc01UazNMallzTWpFNExqa3NNVGs0TGpNc01qRTVMallzTVRrNExqY0tDUWtKVERJeE9TNDJMREU1T0M0M2VpQk5Nakl3TGpnc01UazNZekF1TkMwd0xqVXNNQzQzTFRFc01TNHhMVEV1TldNdE1DNHpMVEF1TlMwd0xqa3RNQzQzTFRFdU5DMHdMalJ6TFRBdU55d3dMamt0TUM0MExERXVORU15TWpBdU15d3hPVFl1Tnl3eU1qQXVOU3d4T1RZdU9Td3lNakF1T0N3eE9UY0tDUWtKVERJeU1DNDRMREU1TjNvZ1RUSXlOaTR4TERFNU1TNHlZeTB4TERBdU9TMHlMREV1T0MweUxqa3NNaTQ0WXkwd0xqTXRNQzR6TFRBdU55MHdMall0TVM0eExUQXVPR013TGpRdE1TNDJMREl1TVMweUxqVXNNeTQzTFRJdU1Rb0pDUWxETWpJMUxqa3NNVGt4TGpFc01qSTJMREU1TVM0eUxESXlOaTR4TERFNU1TNHlUREl5Tmk0eExERTVNUzR5ZWlCTk1qWTRMamdzTVRrMFl5MHdMamt0TVMweExqa3RNUzQ1TFRJdU9TMHlMamhqTVM0MUxUQXVOaXd6TGpNc01DNHhMRE11T1N3eExqY0tDUWtKWXpBc01DNHhMREF1TVN3d0xqSXNNQzR4TERBdU0wTXlOamt1TlN3eE9UTXVOQ3d5TmprdU1Td3hPVE11Tml3eU5qZ3VPQ3d4T1RSTU1qWTRMamdzTVRrMGVpQk5NamN3TGpFc01UazFMalZqTUM0MExEQXVOU3d3TGpnc01Td3hMakVzTVM0MENna0pDV013TGpVdE1DNHhMREF1T1Mwd0xqY3NNQzQ0TFRFdU1uTXRNQzQzTFRBdU9TMHhMakl0TUM0NFF6STNNQzQxTERFNU5TNHhMREkzTUM0ekxERTVOUzR6TERJM01DNHhMREU1TlM0MWVpQk5NamN6TGprc01qQXhMalJqTFRBdU5TMHdMamt0TVMweExqZ3RNUzQxTFRJdU53b0pDUWxqTUM0NExUQXVOQ3d4TGpRdE1TNHhMREV1TmkweVl6RXVNeXd4TGpFc01TNDBMRE1zTUM0MExEUXVNa015TnpRdU1pd3lNREV1TVN3eU56UXNNakF4TGpJc01qY3pMamtzTWpBeExqUjZJRTB5TnpVdU5pd3lNRFV1T1dNdE1DNHpMVEF1T1Mwd0xqWXRNUzQ0TFRFdE1pNDNDZ2tKQ1dNd0xqUXRNQzR6TERBdU9DMHdMallzTVM0eUxURmpNU3d3TGpVc01TNDBMREV1Tnl3eExESXVOME15TnpZdU5pd3lNRFV1TXl3eU56WXVNaXd5TURVdU55d3lOelV1Tml3eU1EVXVPWG9nVFRJM05pNDRMREl4TVM0MFl5MHdMakV0TVM0eUxUQXVOQzB5TGpRdE1DNDJMVE11TmdvSkNRbGpNQzQxTFRBdU1Td3dMamt0TUM0MExERXVNaTB3TGpaRE1qYzRMalFzTWpBNExqVXNNamM0TGpFc01qRXdMalFzTWpjMkxqZ3NNakV4TGpSTU1qYzJMamdzTWpFeExqUk1NamMyTGpnc01qRXhMalI2SUUweU56VXNNakUwWXkwd0xqVXRNVFl0TVRNdU9TMHlPQzQyTFRJNUxqa3RNamd1TVFvSkNRbGpMVEUxTGpNc01DNDFMVEkzTGpZc01USXVPQzB5T0M0eExESTRMakZJTWpjMVRESTNOU3d5TVRSNklFMDNNaTR6TERFNU9DNHhZeTB3TGpJdE1DNHpMVEF1TXkwd0xqY3RNQzR6TFRFdU1YWXRNVEpvTFRKMk1USmpNQ3d5TGpJc01TNDRMRFFzTkN3MENna0pDV014TGpJc01Dd3lMak10TUM0MUxETXVNUzB4TGpSak1DNDJMVEF1Tnl3d0xqa3RNUzQyTERBdU9TMHlMalYyTFRFeWFDMHlkakV5WXpBc01TNHhMVEF1T1N3eUxUSXNNbXd3TERCRE56TXVNeXd4T1Rrc056SXVOeXd4T1RndU55dzNNaTR6TERFNU9DNHhlaUJOTnpVc01UYzJDZ2tKQ1dNd0xqUXNNQ3d3TGpjc01Dd3hMakV0TUM0eFl6QXVOU3d5TGpJc01pNDJMRE11TlN3MExqZ3NNMk13TGpVdE1DNHhMREV0TUM0ekxERXVOQzB3TGpaak1TNHhMREl1TVN3eExqY3NOQzQwTERFdU55dzJMamQyTWpSak1Dd3pMak10TWk0M0xEWXROaXcyYUMwemRqa0tDUWtKWXpBc01pNDRMVEl1TWl3MUxUVXNOWE10TlMweUxqSXROUzAxZGkwNWFDMHpZeTB6TGpNc01DMDJMVEl1TnkwMkxUWjJMVEkwWXpBdE55NDNMRFl1TXkweE5Dd3hOQzB4TkVNM01Dd3hOek11T0N3M01pNHlMREUzTml3M05Td3hOelo2SUUwMU9Dd3hPVEYyTVRJS0NRa0pZekFzTUM0NExEQXVOU3d4TGpVc01TNHlMREV1T0dNd0xqa3NNQzQwTERFdU9Td3dMakVzTWk0MExUQXVOMk13TGpJdE1DNHpMREF1TXkwd0xqY3NNQzR6TFRFdU1YWXRNVEpvTW5ZeE1tTXdMREl1TWkweExqY3NOQzB6TGprc05HTXRNQzQxTERBdE1TMHdMakV0TVM0MExUQXVNZ29KQ1FsakxUQXVNaTB3TGpFdE1DNDBMVEF1TWkwd0xqY3RNQzR6ZGpJdU5XTXdMREl1TWl3eExqZ3NOQ3cwTERSb01UWmpNaTR5TERBc05DMHhMamdzTkMwMGRpMHlOR013TFRFdU5TMHdMakl0TWk0NUxUQXVOeTAwTGpKakxUQXVOQ3d3TGpFdE1DNDVMREF1TWkweExqTXNNQzR5Q2drSkNXTXRNaTR4TERBdE5DNHhMVEV1TVMwMUxqSXRNMk10TXkwd0xqRXROUzQyTFRJdE5pNDFMVFF1T1VNMk1pNDBMREUzTkN3MU9Dd3hOemtzTlRnc01UZzFWakU1TVhvZ1RUWTNMREl4TlhZNVl6QXNNUzQzTERFdU15d3pMRE1zTTNNekxURXVNeXd6TFROMkxUbElOamQ2SWk4K0Nna0pQSEJoZEdnZ1kyeGhjM005SW5OME1DSWdaRDBpVFMweE55d3hPVEZqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTW1Nd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVndE1UZDZJRTB5TERJd01HTXdMVEF1Tml3d0xqUXRNU3d4TFRGb01nb0pDUWxqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZJTTBNeUxqUXNNakF4TERJc01qQXdMallzTWl3eU1EQjZJRTB0TVRJc01qQTFZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEZJTFRFeWVnb0pDUWtnVFMwek55d3lNRFpqTFRBdU5pd3dMVEVzTUM0MExURXNNWE13TGpRc01Td3hMREZvTW1Nd0xqWXNNQ3d4TFRBdU5Dd3hMVEZ6TFRBdU5DMHhMVEV0TVVndE16ZDZJRTB0TXpJc01qRXdZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhDZ2tKQ1hNdE1DNDBMVEV0TVMweFNDMHpNbm9nVFMweU15d3lNVEJqTUMwd0xqWXNNQzQwTFRFc01TMHhhREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRExUSXlMallzTWpFeExUSXpMREl4TUM0MkxUSXpMREl4TUhvZ1RTMDRMREl4TVdNd0xUQXVOaXd3TGpRdE1Td3hMVEVLQ1FrSmFESmpNQzQyTERBc01Td3dMalFzTVN3eGN5MHdMalFzTVMweExERm9MVEpETFRjdU5pd3lNVEl0T0N3eU1URXVOaTA0TERJeE1Yb2dUVFFzTWpBNVl5MHdMallzTUMweExEQXVOQzB4TERGek1DNDBMREVzTVN3eGFESmpNQzQyTERBc01TMHdMalFzTVMweGN5MHdMalF0TVMweExURklOSG9LQ1FrSklFMHROeXd4T1RWak1DMHdMallzTUM0MExURXNNUzB4YURKak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGb0xUSkRMVFl1Tml3eE9UWXROeXd4T1RVdU5pMDNMREU1TlhvZ1RTMHlOaXd4T1RWakxUQXVOaXd3TFRFc01DNDBMVEVzTVhNd0xqUXNNU3d4TERGb01nb0pDUWxqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEZJTFRJMmVpQk5MVEl3TERJd01HTXdMVEF1Tml3d0xqUXRNU3d4TFRGb01tTXdMallzTUN3eExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01XZ3RNa010TVRrdU5pd3lNREV0TWpBc01qQXdMall0TWpBc01qQXdlaUJOTFRRMUxESXhOUW9KQ1Fsak1DMHdMalVzTUMwd0xqa3NNQzB4TGpSakxUSXVOUzB4TGpFdE15NDNMVFF0TWk0MkxUWXVObU13TGpJdE1DNDFMREF1TlMweExEQXVPUzB4TGpSakxUQXVPUzB5TERBdE5DNHlMREV1T1MwMUxqSmpMVEF1T0MweUxqWXNNQzQzTFRVdU5Dd3pMalF0Tmk0eWJEQXNNQW9KQ1Fsak1DNDBMVEF1TlN3d0xqa3RNQzQ1TERFdU5TMHhMakZqTUM0MUxUSXVOeXd6TGpFdE5DNDFMRFV1T0MwMExqRmpNQzQzTERBdU1Td3hMalFzTUM0MExESXNNQzQ0WXpVdU15MHpMamdzTVRFdU5pMDFMamtzTVRndU1pMDFMamxqTmk0NExEQXNNVE11TVN3eUxqSXNNVGd1TWl3MUxqa0tDUWtKWXpJdU15MHhMallzTlM0MExURXNOeXd4TGpOak1DNDBMREF1Tml3d0xqY3NNUzR6TERBdU9Dd3lZekF1Tml3d0xqSXNNUzR4TERBdU5pd3hMalVzTVM0eFl6SXVOeXd3TGpnc05DNHlMRE11TlN3ekxqUXNOaTR5YkRBc01HTXhMamtzTVN3eUxqY3NNeTR5TERFdU9TdzFMaklLQ1FrSll6RXVPU3d5TERFdU9DdzFMakl0TUM0eUxEZGpMVEF1TkN3d0xqUXRNQzQ1TERBdU55MHhMalVzTVdNd0xEQXVOU3d3TERBdU9Td3dMREV1TkhZeGFDMDJNbll0TVVndE5EVjZJRTB0TkRRdU1pd3lNRGN1T0dNdE1DNHpMREV1TWkwd0xqVXNNaTQwTFRBdU5pd3pMallLQ1FrSll5MHhMak10TVMweExqWXRNaTQ1TFRBdU5pMDBMakpzTUN3d1F5MDBOU3d5TURjdU5TMDBOQzQyTERJd055NDNMVFEwTGpJc01qQTNMamhNTFRRMExqSXNNakEzTGpoNklFMHROREl1Tnl3eU1ETXVNbU10TUM0MExEQXVPUzB3TGpjc01TNDRMVEVzTWk0M0Nna0pDV010TVMwd0xqUXRNUzQyTFRFdU5TMHhMak10TWk0MVl6QXVNaTB3TGpVc01DNDJMVEF1T1N3eExqRXRNUzR5UXkwME15NDFMREl3TWk0MkxUUXpMakVzTWpBeUxqa3ROREl1Tnl3eU1ETXVNa3d0TkRJdU55d3lNRE11TW5vZ1RTMDBNQzQwTERFNU9DNDNDZ2tKQ1dNdE1DNDFMREF1T1MweExERXVPQzB4TGpVc01pNDNZeTB4TGpNdE1TMHhMalV0TWk0NUxUQXVOUzAwTGpKak1DNHhMVEF1TWl3d0xqTXRNQzR6TERBdU5DMHdMalZETFRReExqY3NNVGszTGpZdE5ERXVNU3d4T1RndU15MDBNQzQwTERFNU9DNDNlaUJOTFRNNUxqSXNNVGszQ2drSkNXTXdMak10TUM0MUxEQXVOeTB4TERFdU1TMHhMalZqTFRBdU15MHdMalV0TUM0NUxUQXVOeTB4TGpRdE1DNDBjeTB3TGpjc01DNDVMVEF1TkN3eExqUkRMVE01TGpjc01UazJMamN0TXprdU5Td3hPVFl1T1Mwek9TNHlMREU1TjB3dE16a3VNaXd4T1RkNklFMHRNek11T1N3eE9URXVNZ29KQ1FsakxURXNNQzQ1TFRJc01TNDRMVEl1T1N3eUxqaGpMVEF1TXkwd0xqTXRNQzQzTFRBdU5pMHhMakV0TUM0NFl6QXVOQzB4TGpZc01pNHhMVEl1TlN3ekxqY3RNaTR4UXkwek5DNHhMREU1TVM0eExUTTBMREU1TVM0eUxUTXpMamtzTVRreExqSk1MVE16TGprc01Ua3hMako2SUUwNExqZ3NNVGswQ2drSkNXTXRNQzQ1TFRFdE1TNDVMVEV1T1MweUxqa3RNaTQ0WXpFdU5TMHdMallzTXk0ekxEQXVNU3d6TGprc01TNDNZekFzTUM0eExEQXVNU3d3TGpJc01DNHhMREF1TTBNNUxqVXNNVGt6TGpRc09TNHhMREU1TXk0MkxEZ3VPQ3d4T1RSTU9DNDRMREU1TkhvZ1RURXdMakVzTVRrMUxqVUtDUWtKWXpBdU5Dd3dMalVzTUM0NExERXNNUzR4TERFdU5HTXdMalV0TUM0eExEQXVPUzB3TGpjc01DNDRMVEV1TW1NdE1DNHhMVEF1TlMwd0xqY3RNQzQ1TFRFdU1pMHdMamhETVRBdU5Td3hPVFV1TVN3eE1DNHpMREU1TlM0ekxERXdMakVzTVRrMUxqVjZJRTB4TXk0NUxESXdNUzQwQ2drSkNXTXRNQzQxTFRBdU9TMHdMamt0TVM0NExURXVOUzB5TGpkak1DNDRMVEF1TkN3eExqUXRNUzR4TERFdU5pMHlZekV1TXl3eExqRXNNUzQwTERNc01DNDBMRFF1TWtNeE5DNHlMREl3TVM0eExERTBMREl3TVM0eUxERXpMamtzTWpBeExqUjZJRTB4TlM0M0xESXdOUzQ1Q2drSkNXTXRNQzR6TFRBdU9TMHdMall0TVM0NExURXRNaTQzWXpBdU5DMHdMak1zTUM0NExUQXVOaXd4TGpJdE1XTXhMREF1TlN3eExqUXNNUzQzTERFc01pNDNRekUyTGpZc01qQTFMak1zTVRZdU1pd3lNRFV1Tnl3eE5TNDNMREl3TlM0NWVpQk5NVFl1T0N3eU1URXVOQW9KQ1FsakxUQXVNUzB4TGpJdE1DNDBMVEl1TkMwd0xqWXRNeTQyWXpBdU5TMHdMakVzTUM0NUxUQXVOQ3d4TGpJdE1DNDJRekU0TGpRc01qQTRMalVzTVRndU1Td3lNVEF1TkN3eE5pNDRMREl4TVM0MFRERTJMamdzTWpFeExqUk1NVFl1T0N3eU1URXVOSG9nVFRFMUxESXhOQW9KQ1FsakxUQXVOUzB4TmkweE15NDVMVEk0TGpZdE1qa3VPUzB5T0M0eFl5MHhOUzR6TERBdU5TMHlOeTQyTERFeUxqZ3RNamd1TVN3eU9DNHhTREUxVERFMUxESXhOSG9pTHo0S0NUd3ZaejRLUEM5blBnbzhMM04yWno0Syc7XHJcbiIsIi8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gIEZpbGUgTmFtZTogdmFyaWFibGVzLWRhcmsuc2Nzc1xyXG4vLyAgRGVzY3JpcHRpb246IEN1c3RvbSBkYXJrIHRoZW1lIHZhcmlhYmxlc1xyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgSXRlbSBOYW1lOiBWdWV4eSAtIFZ1ZWpzLCBSZWFjdCwgQW5ndWxhciwgSFRNTCAmIExhcmF2ZWwgQWRtaW4gRGFzaGJvYXJkIFRlbXBsYXRlXHJcbi8vICBBdXRob3I6IFBJWElOVkVOVFxyXG4vLyAgQXV0aG9yIFVSTDogaHR0cDovL3d3dy50aGVtZWZvcmVzdC5uZXQvdXNlci9waXhpbnZlbnRcclxuLy8gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyAgV0FSTklORzogUExFQVNFIERPIE5PVCBDSEFOR0UgVEhJUyBWQVJJQUJMRSBGSUxFLlxyXG4vLyAgVEhJUyBGSUxFIFdJTEwgR0VUIE9WRVJXUklUVEVOIFdJVEggRUFDSCBWVUVYWSBIVE1MIFRFTVBMQVRFIFJFTEVBU0UuXHJcbi8vICBUSVA6XHJcbi8vICBXZSBzdWdnZXN0IHlvdSB0byB1c2UgdGhpcyAoYXNzZXRzL3Njc3MvdmFyaWFibGVzL192YXJpYWJsZXMtY29tcG9uZW50cy5zY3NzKSBmaWxlIGZvciBvdmVycmlkaW5nIGNvbXBvbmVudHMgdmFyaWFibGVzLlxyXG4vLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vL0JvZHlcclxuJHRoZW1lLWRhcmstYm9keS1iZzogIzE2MWQzMSAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstYm9keS1jb2xvcjogI2I0YjdiZCAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstYm9yZGVyLWNvbG9yOiAjM2I0MjUzICFkZWZhdWx0O1xyXG4kdGhlbWUtZGFyay1jdXN0b20tY29udHJvbC1ib3JkZXItY29sb3I6ICM0NDQwNWUgIWRlZmF1bHQ7XHJcblxyXG4vL1R5cG9ncmFwaHlcclxuJHRoZW1lLWRhcmstaGVhZGluZ3MtY29sb3I6ICNkMGQyZDYgIWRlZmF1bHQ7XHJcbiR0aGVtZS1kYXJrLWxhYmVsLWNvbG9yOiAjZDBkMmQ2ICFkZWZhdWx0O1xyXG4kdGhlbWUtZGFyay10ZXh0LW11dGVkLWNvbG9yOiAjNjc2ZDdkICFkZWZhdWx0O1xyXG5cclxuLy9DYXJkXHJcbiR0aGVtZS1kYXJrLWNhcmQtYmc6ICMyODMwNDYgIWRlZmF1bHQ7XHJcbiR0aGVtZS1kYXJrLWJveC1zaGFkb3c6IDAgNHB4IDI0cHggMCByZ2JhKCRibGFjaywgMC4yNCk7XHJcblxyXG4vL0lucHV0XHJcbiR0aGVtZS1kYXJrLWlucHV0LWJnOiAjMjgzMDQ2ICFkZWZhdWx0O1xyXG4kdGhlbWUtZGFyay1pbnB1dC1wbGFjZWhvbGRlci1jb2xvcjogIzY3NmQ3ZCAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstaW5wdXQtYm9yZGVyLWNvbG9yOiAjNDA0NjU2ICFkZWZhdWx0O1xyXG4kdGhlbWUtZGFyay1pbnB1dC1kaXNhYmxlZC1iZzogIzI0MjMzYSAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstaW5wdXQtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiAjNDQ0YjYwICFkZWZhdWx0O1xyXG5cclxuLy8gU3dpdGNoXHJcbiR0aGVtZS1kYXJrLXN3aXRjaC1iZzogIzU0NWE2YTtcclxuJHRoZW1lLWRhcmstc3dpdGNoLWJnLWRpc2FibGVkOiAjMWIyMzM3O1xyXG5cclxuLy9UYWJsZVxyXG4kdGhlbWUtZGFyay10YWJsZS1iZzogIzI4MzA0NiAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstdGFibGUtaGVhZGVyLWJnOiAjMzQzZDU1ICFkZWZhdWx0O1xyXG4kdGhlbWUtZGFyay10YWJsZS1yb3ctYmc6ICMyODMwNDYgIWRlZmF1bHQ7XHJcbiR0aGVtZS1kYXJrLXRhYmxlLWhvdmVyLWJnOiAjMjQyYjNkICFkZWZhdWx0O1xyXG4kdGhlbWUtZGFyay10YWJsZS1zdHJpcGVkLWJnOiAjMjQyYjNkICFkZWZhdWx0O1xyXG5cclxuJHRoZW1lLWRhcmstbW9kYWwtaGVhZGVyLWJnOiAjMTYxZDMxICFkZWZhdWx0O1xyXG4kdGhlbWUtZGFyay1wYWdpbmF0aW9uLWJnOiAjMjQyYjNkICFkZWZhdWx0O1xyXG4kdGhlbWUtZGFyay1jaGFydC1iZzogIzM4NDA1NiAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstd2lkZ2V0LWJnOiAjMzg0MDU2ICFkZWZhdWx0O1xyXG4iXX0= */"],
  encapsulation: 2
});

/***/ }),

/***/ 5711:
/*!********************************************************************!*\
  !*** ./src/app/main/pages/authentication/authentication.module.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationModule": function() { return /* binding */ AuthenticationModule; }
/* harmony export */ });
/* harmony import */ var D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 914);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/common.module */ 1705);
/* harmony import */ var app_main_pages_authentication_auth_login_v2_auth_login_v2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/main/pages/authentication/auth-login-v2/auth-login-v2.component */ 690);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);









 // routing

var routes = [{
  path: 'authentication/login-v2',
  component: app_main_pages_authentication_auth_login_v2_auth_login_v2_component__WEBPACK_IMPORTED_MODULE_3__.AuthLoginV2Component,
  data: {
    animation: 'auth'
  }
}];
var AuthenticationModule = /*#__PURE__*/(0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function AuthenticationModule() {
  (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AuthenticationModule);
});

AuthenticationModule.ɵfac = function AuthenticationModule_Factory(t) {
  return new (t || AuthenticationModule)();
};

AuthenticationModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: AuthenticationModule
});
AuthenticationModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _core_common_module__WEBPACK_IMPORTED_MODULE_2__.CoreCommonModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AuthenticationModule, {
    declarations: [app_main_pages_authentication_auth_login_v2_auth_login_v2_component__WEBPACK_IMPORTED_MODULE_3__.AuthLoginV2Component],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _core_common_module__WEBPACK_IMPORTED_MODULE_2__.CoreCommonModule]
  });
})();

/***/ }),

/***/ 358:
/*!*******************************************************************!*\
  !*** ./src/app/main/pages/miscellaneous/error/error.component.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorComponent": function() { return /* binding */ ErrorComponent; }
/* harmony export */ });
/* harmony import */ var D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 4058);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4008);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/config.service */ 8726);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/directives/core-ripple-effect/core-ripple-effect.directive */ 3113);








var ErrorComponent = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   */
  function ErrorComponent(_coreConfigService) {
    (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ErrorComponent);

    this._coreConfigService = _coreConfigService;
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject(); // Configure the layout

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
  } // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */


  (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ErrorComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      // Subscribe to config changes
      this._coreConfigService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._unsubscribeAll)).subscribe(function (config) {
        _this.coreConfig = config;
      });
    }
    /**
     * On destroy
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      // Unsubscribe from all subscriptions
      this._unsubscribeAll.next();

      this._unsubscribeAll.complete();
    }
  }]);

  return ErrorComponent;
}();

ErrorComponent.ɵfac = function ErrorComponent_Factory(t) {
  return new (t || ErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_2__.CoreConfigService));
};

ErrorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: ErrorComponent,
  selectors: [["app-error"]],
  decls: 14,
  vars: 2,
  consts: [[1, "misc-wrapper"], ["href", "javascript:void(0);", 1, "brand-logo"], ["alt", "brand-logo", "height", "28", 3, "src"], [1, "brand-text", "text-primary", "ml-1"], [1, "misc-inner", "p-2", "p-sm-3"], [1, "w-100", "text-center"], [1, "mb-1"], [1, "mb-2"], ["routerLink", "/", "rippleEffect", "", 1, "btn", "btn-primary", "mb-2", "btn-sm-block"], ["alt", "Error page", 1, "img-fluid", 3, "src"]],
  template: function ErrorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h2", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Vuexy");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "h2", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Page Not Found \uD83D\uDD75\uD83C\uDFFB\u200D\u2640\uFE0F");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Oops! \uD83D\uDE16 The requested URL was not found on this server.");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Back to Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("src", ctx.coreConfig.app.appLogoImage, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx.coreConfig.layout.skin === "dark" ? "assets/images/pages/error-dark.svg" : "assets/images/pages/error.svg", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    }
  },
  directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_3__.RippleEffectDirective],
  styles: [".misc-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-basis: 100%;\n  min-height: 100vh;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n}\n.misc-wrapper[_ngcontent-%COMP%]   .misc-inner[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 750px;\n}\n.misc-wrapper[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  top: 2rem;\n  left: 2rem;\n  margin: 0;\n}\n.misc-wrapper[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n@media (max-height: 625px) {\n  .misc-wrapper[_ngcontent-%COMP%]   .misc-inner[_ngcontent-%COMP%] {\n    margin-top: 4rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcQGNvcmVcXHNjc3NcXGJhc2VcXHBhZ2VzXFxwYWdlLW1pc2Muc2NzcyIsImVycm9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ1ZGO0FEWUU7RUFDRSxrQkFBQTtFQUNBLGdCQVptQjtBQ0V2QjtBRGFFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNYSjtBRFlJO0VBQ0UsZ0JBQUE7QUNWTjtBRGVBO0VBQ0U7SUFDRSxnQkFBQTtFQ1pGO0FBQ0YiLCJmaWxlIjoiZXJyb3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gICAgIEZpbGUgTmFtZTogcGFnZS1taXNjLnNjc3NcclxuLy8gICAgIERlc2NyaXB0aW9uOiBDb21pbmcgU29vbiBwYWdlcyBjdXN0b20gc2Nzc1xyXG4vLyAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgICAgSXRlbSBOYW1lOiBWdWV4eSAtIFZ1ZWpzLCBSZWFjdCwgQW5ndWxhciwgSFRNTCAmIExhcmF2ZWwgQWRtaW4gRGFzaGJvYXJkIFRlbXBsYXRlXHJcbi8vICAgICBBdXRob3I6IFBJWElOVkVOVFxyXG4vLyAgICAgQXV0aG9yIFVSTDogaHR0cDovL3d3dy50aGVtZWZvcmVzdC5uZXQvdXNlci9waXhpbnZlbnRcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4kbWlzYy1pbm5lci1tYXgtd2lkdGg6IDc1MHB4O1xyXG5cclxuLm1pc2Mtd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWJhc2lzOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIC5taXNjLWlubmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1heC13aWR0aDogJG1pc2MtaW5uZXItbWF4LXdpZHRoO1xyXG4gIH1cclxuXHJcbiAgLmJyYW5kLWxvZ28ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAycmVtO1xyXG4gICAgbGVmdDogMnJlbTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIC5icmFuZC10ZXh0IHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LWhlaWdodDogNjI1cHgpIHtcclxuICAubWlzYy13cmFwcGVyIC5taXNjLWlubmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDRyZW07XHJcbiAgfVxyXG59XHJcbiIsIi5taXNjLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWJhc2lzOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLm1pc2Mtd3JhcHBlciAubWlzYy1pbm5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiA3NTBweDtcbn1cbi5taXNjLXdyYXBwZXIgLmJyYW5kLWxvZ28ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDJyZW07XG4gIGxlZnQ6IDJyZW07XG4gIG1hcmdpbjogMDtcbn1cbi5taXNjLXdyYXBwZXIgLmJyYW5kLWxvZ28gLmJyYW5kLXRleHQge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDYyNXB4KSB7XG4gIC5taXNjLXdyYXBwZXIgLm1pc2MtaW5uZXIge1xuICAgIG1hcmdpbi10b3A6IDRyZW07XG4gIH1cbn0iXX0= */"]
});

/***/ }),

/***/ 9606:
/*!******************************************************************!*\
  !*** ./src/app/main/pages/miscellaneous/miscellaneous.module.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MiscellaneousModule": function() { return /* binding */ MiscellaneousModule; }
/* harmony export */ });
/* harmony import */ var D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/common.module */ 1705);
/* harmony import */ var app_main_pages_miscellaneous_error_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/main/pages/miscellaneous/error/error.component */ 358);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);







 // routing

var routes = [{
  path: 'miscellaneous/error',
  component: app_main_pages_miscellaneous_error_error_component__WEBPACK_IMPORTED_MODULE_3__.ErrorComponent,
  data: {
    animation: 'misc'
  }
}];
var MiscellaneousModule = /*#__PURE__*/(0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function MiscellaneousModule() {
  (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MiscellaneousModule);
});

MiscellaneousModule.ɵfac = function MiscellaneousModule_Factory(t) {
  return new (t || MiscellaneousModule)();
};

MiscellaneousModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: MiscellaneousModule
});
MiscellaneousModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _core_common_module__WEBPACK_IMPORTED_MODULE_2__.CoreCommonModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](MiscellaneousModule, {
    declarations: [app_main_pages_miscellaneous_error_error_component__WEBPACK_IMPORTED_MODULE_3__.ErrorComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _core_common_module__WEBPACK_IMPORTED_MODULE_2__.CoreCommonModule]
  });
})();

/***/ }),

/***/ 9550:
/*!********************************************!*\
  !*** ./src/app/main/pages/pages.module.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesModule": function() { return /* binding */ PagesModule; }
/* harmony export */ });
/* harmony import */ var D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 914);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ 5025);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/common.module */ 1705);
/* harmony import */ var app_layout_components_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/layout/components/content-header/content-header.module */ 9079);
/* harmony import */ var _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication/authentication.module */ 5711);
/* harmony import */ var _miscellaneous_miscellaneous_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./miscellaneous/miscellaneous.module */ 9606);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);











var PagesModule = /*#__PURE__*/(0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function PagesModule() {
  (0,D_Projects_Termmy_app_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PagesModule);
});

PagesModule.ɵfac = function PagesModule_Factory(t) {
  return new (t || PagesModule)();
};

PagesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: PagesModule
});
PagesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  providers: [],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _core_common_module__WEBPACK_IMPORTED_MODULE_2__.CoreCommonModule, app_layout_components_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_3__.ContentHeaderModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_4__.AuthenticationModule, _miscellaneous_miscellaneous_module__WEBPACK_IMPORTED_MODULE_5__.MiscellaneousModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](PagesModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _core_common_module__WEBPACK_IMPORTED_MODULE_2__.CoreCommonModule, app_layout_components_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_3__.ContentHeaderModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_4__.AuthenticationModule, _miscellaneous_miscellaneous_module__WEBPACK_IMPORTED_MODULE_5__.MiscellaneousModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_main_pages_pages_module_ts.js.map