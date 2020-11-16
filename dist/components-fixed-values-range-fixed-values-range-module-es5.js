(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-fixed-values-range-fixed-values-range-module"], {
    /***/
    "BjmD":
    /*!************************************************************************************!*\
      !*** ./src/app/components/fixed-values-range/fixed-values-range-routing.module.ts ***!
      \************************************************************************************/

    /*! exports provided: FixedValuesRangeRoutingModule */

    /***/
    function BjmD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FixedValuesRangeRoutingModule", function () {
        return FixedValuesRangeRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _fixed_values_range_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./fixed-values-range.component */
      "Huit");

      var routes = [{
        path: '',
        component: _fixed_values_range_component__WEBPACK_IMPORTED_MODULE_2__["FixedValuesRangeComponent"]
      }];

      var FixedValuesRangeRoutingModule = function FixedValuesRangeRoutingModule() {
        _classCallCheck(this, FixedValuesRangeRoutingModule);
      };

      FixedValuesRangeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: FixedValuesRangeRoutingModule
      });
      FixedValuesRangeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function FixedValuesRangeRoutingModule_Factory(t) {
          return new (t || FixedValuesRangeRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FixedValuesRangeRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FixedValuesRangeRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Huit":
    /*!*******************************************************************************!*\
      !*** ./src/app/components/fixed-values-range/fixed-values-range.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: FixedValuesRangeComponent */

    /***/
    function Huit(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FixedValuesRangeComponent", function () {
        return FixedValuesRangeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_services_filter_products_filter_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/filter-products/filter-products.service */
      "dRiO");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _shared_components_range_range_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../shared/components/range/range.component */
      "j8Zf");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var FixedValuesRangeComponent = /*#__PURE__*/function () {
        function FixedValuesRangeComponent(filterProductsService) {
          _classCallCheck(this, FixedValuesRangeComponent);

          this.filterProductsService = filterProductsService;
        }

        _createClass(FixedValuesRangeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getPriceValues();
          }
        }, {
          key: "getPriceValues",
          value: function getPriceValues() {
            var _this = this;

            this.filterProductsService.getPricesValues().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (prices) {
              var _a;

              return _this.values = (_a = prices === null || prices === void 0 ? void 0 : prices.values) !== null && _a !== void 0 ? _a : [];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(err);
            })).subscribe();
          }
        }]);

        return FixedValuesRangeComponent;
      }();

      FixedValuesRangeComponent.ɵfac = function FixedValuesRangeComponent_Factory(t) {
        return new (t || FixedValuesRangeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_filter_products_filter_products_service__WEBPACK_IMPORTED_MODULE_3__["FilterProductsService"]));
      };

      FixedValuesRangeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FixedValuesRangeComponent,
        selectors: [["ngc-fixed-values-range"]],
        decls: 7,
        vars: 6,
        consts: [["name", "range", 3, "values", "type", "ngModel", "ngModelChange"]],
        template: function FixedValuesRangeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Fixed values range:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ngc-range", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FixedValuesRangeComponent_Template_ngc_range_ngModelChange_3_listener($event) {
              return ctx.rangeValues = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("values", ctx.values)("type", "fixed")("ngModel", ctx.rangeValues);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("rangeValues: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, ctx.rangeValues), "");
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _shared_components_range_range_component__WEBPACK_IMPORTED_MODULE_5__["RangeComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["JsonPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaXhlZC12YWx1ZXMtcmFuZ2UuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FixedValuesRangeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ngc-fixed-values-range',
            templateUrl: './fixed-values-range.component.html',
            styleUrls: ['./fixed-values-range.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_filter_products_filter_products_service__WEBPACK_IMPORTED_MODULE_3__["FilterProductsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ubMR":
    /*!****************************************************************************!*\
      !*** ./src/app/components/fixed-values-range/fixed-values-range.module.ts ***!
      \****************************************************************************/

    /*! exports provided: FixedValuesRangeModule */

    /***/
    function ubMR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FixedValuesRangeModule", function () {
        return FixedValuesRangeModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _fixed_values_range_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./fixed-values-range-routing.module */
      "BjmD");
      /* harmony import */


      var _fixed_values_range_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./fixed-values-range.component */
      "Huit");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "PCNd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var FixedValuesRangeModule = function FixedValuesRangeModule() {
        _classCallCheck(this, FixedValuesRangeModule);
      };

      FixedValuesRangeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: FixedValuesRangeModule
      });
      FixedValuesRangeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function FixedValuesRangeModule_Factory(t) {
          return new (t || FixedValuesRangeModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _fixed_values_range_routing_module__WEBPACK_IMPORTED_MODULE_2__["FixedValuesRangeRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FixedValuesRangeModule, {
          declarations: [_fixed_values_range_component__WEBPACK_IMPORTED_MODULE_3__["FixedValuesRangeComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _fixed_values_range_routing_module__WEBPACK_IMPORTED_MODULE_2__["FixedValuesRangeRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FixedValuesRangeModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_fixed_values_range_component__WEBPACK_IMPORTED_MODULE_3__["FixedValuesRangeComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _fixed_values_range_routing_module__WEBPACK_IMPORTED_MODULE_2__["FixedValuesRangeRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=components-fixed-values-range-fixed-values-range-module-es5.js.map