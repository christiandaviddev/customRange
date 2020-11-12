(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-normal-range-normal-range-module"],{

/***/ "AXZI":
/*!****************************************************************!*\
  !*** ./src/app/components/normal-range/normal-range.module.ts ***!
  \****************************************************************/
/*! exports provided: NormalRangeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NormalRangeModule", function() { return NormalRangeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _normal_range_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./normal-range-routing.module */ "OvWf");
/* harmony import */ var _normal_range_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./normal-range.component */ "u3LB");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");






class NormalRangeModule {
}
NormalRangeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NormalRangeModule });
NormalRangeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NormalRangeModule_Factory(t) { return new (t || NormalRangeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _normal_range_routing_module__WEBPACK_IMPORTED_MODULE_2__["NormalRangeRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NormalRangeModule, { declarations: [_normal_range_component__WEBPACK_IMPORTED_MODULE_3__["NormalRangeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _normal_range_routing_module__WEBPACK_IMPORTED_MODULE_2__["NormalRangeRoutingModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NormalRangeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_normal_range_component__WEBPACK_IMPORTED_MODULE_3__["NormalRangeComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _normal_range_routing_module__WEBPACK_IMPORTED_MODULE_2__["NormalRangeRoutingModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "OvWf":
/*!************************************************************************!*\
  !*** ./src/app/components/normal-range/normal-range-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: NormalRangeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NormalRangeRoutingModule", function() { return NormalRangeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _normal_range_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./normal-range.component */ "u3LB");





const routes = [{ path: '', component: _normal_range_component__WEBPACK_IMPORTED_MODULE_2__["NormalRangeComponent"] }];
class NormalRangeRoutingModule {
}
NormalRangeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NormalRangeRoutingModule });
NormalRangeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NormalRangeRoutingModule_Factory(t) { return new (t || NormalRangeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NormalRangeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NormalRangeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "u3LB":
/*!*******************************************************************!*\
  !*** ./src/app/components/normal-range/normal-range.component.ts ***!
  \*******************************************************************/
/*! exports provided: NormalRangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NormalRangeComponent", function() { return NormalRangeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_range_range_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/range/range.component */ "j8Zf");



class NormalRangeComponent {
    constructor() { }
    ngOnInit() {
    }
}
NormalRangeComponent.ɵfac = function NormalRangeComponent_Factory(t) { return new (t || NormalRangeComponent)(); };
NormalRangeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NormalRangeComponent, selectors: [["ngc-normal-range"]], decls: 3, vars: 2, consts: [[3, "min", "max"]], template: function NormalRangeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "normal-range works");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngc-range", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", 2)("max", 150);
    } }, directives: [_shared_components_range_range_component__WEBPACK_IMPORTED_MODULE_1__["RangeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3JtYWwtcmFuZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NormalRangeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngc-normal-range',
                templateUrl: './normal-range.component.html',
                styleUrls: ['./normal-range.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=components-normal-range-normal-range-module-es2015.js.map