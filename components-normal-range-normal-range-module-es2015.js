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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _normal_range_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./normal-range-routing.module */ "OvWf");
/* harmony import */ var _normal_range_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./normal-range.component */ "u3LB");







class NormalRangeModule {
}
NormalRangeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NormalRangeModule });
NormalRangeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NormalRangeModule_Factory(t) { return new (t || NormalRangeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _normal_range_routing_module__WEBPACK_IMPORTED_MODULE_4__["NormalRangeRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NormalRangeModule, { declarations: [_normal_range_component__WEBPACK_IMPORTED_MODULE_5__["NormalRangeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _normal_range_routing_module__WEBPACK_IMPORTED_MODULE_4__["NormalRangeRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NormalRangeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_normal_range_component__WEBPACK_IMPORTED_MODULE_5__["NormalRangeComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _normal_range_routing_module__WEBPACK_IMPORTED_MODULE_4__["NormalRangeRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_services_filter_products_filter_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/filter-products/filter-products.service */ "dRiO");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_components_range_range_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/range/range.component */ "j8Zf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








class NormalRangeComponent {
    constructor(filterProductsService) {
        this.filterProductsService = filterProductsService;
    }
    ngOnInit() {
        this.getPriceValues();
    }
    getPriceValues() {
        this.filterProductsService.getPricesMinMax().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(prices => {
            var _a, _b;
            this.minPrice = (_a = prices === null || prices === void 0 ? void 0 : prices.min) !== null && _a !== void 0 ? _a : 0;
            this.maxPrice = (_b = prices === null || prices === void 0 ? void 0 : prices.max) !== null && _b !== void 0 ? _b : 0;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(err))).subscribe();
    }
}
NormalRangeComponent.ɵfac = function NormalRangeComponent_Factory(t) { return new (t || NormalRangeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_filter_products_filter_products_service__WEBPACK_IMPORTED_MODULE_3__["FilterProductsService"])); };
NormalRangeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NormalRangeComponent, selectors: [["ngc-normal-range"]], decls: 7, vars: 6, consts: [["name", "range", 3, "min", "max", "ngModel", "ngModelChange"]], template: function NormalRangeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Normal range");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ngc-range", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NormalRangeComponent_Template_ngc_range_ngModelChange_3_listener($event) { return ctx.rangeValues = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.minPrice)("max", ctx.maxPrice)("ngModel", ctx.rangeValues);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("rangeValues: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, ctx.rangeValues), "");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _shared_components_range_range_component__WEBPACK_IMPORTED_MODULE_5__["RangeComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["JsonPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3JtYWwtcmFuZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NormalRangeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngc-normal-range',
                templateUrl: './normal-range.component.html',
                styleUrls: ['./normal-range.component.scss']
            }]
    }], function () { return [{ type: src_app_services_filter_products_filter_products_service__WEBPACK_IMPORTED_MODULE_3__["FilterProductsService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=components-normal-range-normal-range-module-es2015.js.map