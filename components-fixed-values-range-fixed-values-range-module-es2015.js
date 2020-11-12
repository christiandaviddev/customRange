(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-fixed-values-range-fixed-values-range-module"],{

/***/ "BjmD":
/*!************************************************************************************!*\
  !*** ./src/app/components/fixed-values-range/fixed-values-range-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: FixedValuesRangeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedValuesRangeRoutingModule", function() { return FixedValuesRangeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fixed_values_range_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fixed-values-range.component */ "Huit");





const routes = [{ path: '', component: _fixed_values_range_component__WEBPACK_IMPORTED_MODULE_2__["FixedValuesRangeComponent"] }];
class FixedValuesRangeRoutingModule {
}
FixedValuesRangeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FixedValuesRangeRoutingModule });
FixedValuesRangeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FixedValuesRangeRoutingModule_Factory(t) { return new (t || FixedValuesRangeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FixedValuesRangeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FixedValuesRangeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Huit":
/*!*******************************************************************************!*\
  !*** ./src/app/components/fixed-values-range/fixed-values-range.component.ts ***!
  \*******************************************************************************/
/*! exports provided: FixedValuesRangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedValuesRangeComponent", function() { return FixedValuesRangeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_range_range_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/range/range.component */ "j8Zf");



class FixedValuesRangeComponent {
    constructor() { }
    ngOnInit() {
    }
}
FixedValuesRangeComponent.ɵfac = function FixedValuesRangeComponent_Factory(t) { return new (t || FixedValuesRangeComponent)(); };
FixedValuesRangeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FixedValuesRangeComponent, selectors: [["ngc-fixed-values-range"]], decls: 3, vars: 3, consts: [[3, "min", "max", "type"]], template: function FixedValuesRangeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "fixed-values-range");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngc-range", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", 1)("max", 1000)("type", "fided");
    } }, directives: [_shared_components_range_range_component__WEBPACK_IMPORTED_MODULE_1__["RangeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaXhlZC12YWx1ZXMtcmFuZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FixedValuesRangeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngc-fixed-values-range',
                templateUrl: './fixed-values-range.component.html',
                styleUrls: ['./fixed-values-range.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ubMR":
/*!****************************************************************************!*\
  !*** ./src/app/components/fixed-values-range/fixed-values-range.module.ts ***!
  \****************************************************************************/
/*! exports provided: FixedValuesRangeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedValuesRangeModule", function() { return FixedValuesRangeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fixed_values_range_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fixed-values-range-routing.module */ "BjmD");
/* harmony import */ var _fixed_values_range_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fixed-values-range.component */ "Huit");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");






class FixedValuesRangeModule {
}
FixedValuesRangeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FixedValuesRangeModule });
FixedValuesRangeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FixedValuesRangeModule_Factory(t) { return new (t || FixedValuesRangeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _fixed_values_range_routing_module__WEBPACK_IMPORTED_MODULE_2__["FixedValuesRangeRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FixedValuesRangeModule, { declarations: [_fixed_values_range_component__WEBPACK_IMPORTED_MODULE_3__["FixedValuesRangeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _fixed_values_range_routing_module__WEBPACK_IMPORTED_MODULE_2__["FixedValuesRangeRoutingModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FixedValuesRangeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_fixed_values_range_component__WEBPACK_IMPORTED_MODULE_3__["FixedValuesRangeComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _fixed_values_range_routing_module__WEBPACK_IMPORTED_MODULE_2__["FixedValuesRangeRoutingModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-fixed-values-range-fixed-values-range-module-es2015.js.map