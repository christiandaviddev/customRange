function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-fixed-values-range-fixed-values-range-module~components-normal-range-normal-range-module"], {
  /***/
  "./src/app/shared/components/range/range.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/shared/components/range/range.component.ts ***!
    \************************************************************/

  /*! exports provided: RangeComponent */

  /***/
  function srcAppSharedComponentsRangeRangeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RangeComponent", function () {
      return RangeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function RangeComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.min);
      }
    }

    function RangeComponent_ng_container_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.max);
      }
    }

    var RangeComponent = /*#__PURE__*/function () {
      function RangeComponent() {
        _classCallCheck(this, RangeComponent);

        this.min = 0;
        this.max = 0;
        this.type = '';
        this.rangeSubscriptions = [];
        this.filterValue = 0;
      }

      _createClass(RangeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var body = document.body;
          this.rangeSubscriptions.push(this.setRangePointByClick()); // this.setValueRangePoint(firtsRange, 0);
          // this.setValueRangePoint(lastRange, range.offsetWidth);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.rangeSubscriptions.forEach(function (s) {
            return s.unsubscribe();
          });
        }
      }, {
        key: "setRangePointByClick",
        value: function setRangePointByClick() {
          var _this = this;

          console.log('setRangePointByClick');
          var range = document.getElementById('range');
          this.firstRangePoint = document.getElementById('first-range-point');
          this.lastRangePoint = document.getElementById('last-range-point');
          this.firtsPointValue = 0;
          this.lastPointValue = range.offsetWidth;
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(range, 'mousedown').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(180), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (event) {
            var valueX = event.pageX;
            console.log('valueX a', event.pageX);
            valueX = valueX >= range.offsetWidth ? range.offsetWidth : valueX;
            valueX = valueX < 0 ? 0 : valueX;
            console.log('valueX', valueX);
            return valueX;
          })).subscribe(function (data) {
            console.log('data', data);
            var value = _this.max * (data / 2 / 100);
            _this.filterValue = value >= _this.max ? _this.max : value; // rangePoint.style.left = data - Number(rangePoint.offsetWidth) + 'px';

            _this.checkRangePoints(data, _this.firtsPointValue, _this.lastPointValue);
          });
        }
      }, {
        key: "checkRangePoints",
        value: function checkRangePoints(newPosition, firtsPosition, lastPosition) {
          console.log('newPosition, firtsPosition, lastPosition', newPosition, firtsPosition, lastPosition);
          var restValueLeft = newPosition - firtsPosition;
          restValueLeft = restValueLeft < 0 ? restValueLeft * -1 : restValueLeft;
          var restValueRight = newPosition - lastPosition;
          restValueRight = restValueRight < 0 ? restValueRight * -1 : restValueRight;
          console.log('restValueLeft > restValueRight', restValueLeft, restValueRight);

          if (restValueLeft <= restValueRight) {
            this.firtsPointValue = newPosition;
          } else {
            this.lastPointValue = newPosition;
          }
        } // setValueRangePoint(rangePoint: HTMLDivElement, value: number) {
        //   rangePoint.style.left = value - Number(rangePoint.offsetWidth) + 'px';
        // }

      }, {
        key: "mouseDownEvent",
        value: function mouseDownEvent(evnt, id) {
          console.log('mouseDownEvent'); // this.isMouseDownEvent = true;
          // const body = document.body as HTMLElement;
          // const range = document.getElementById('range') as HTMLDivElement;
          // const firtsRange = document.getElementById(id) as HTMLDivElement;
          // this.firstRangeSubscription = fromEvent(body, 'mousemove').pipe(
          //   map((event: MouseEvent) => event.pageX),
          //   ).subscribe(data => {
          //     console.log('evnt', evnt);
          //     if ((this.max * (((data - (range.offsetWidth - (range.offsetWidth * 1))) / 2) / 100) <= this.max) &&
          //     (this.max * (((data - (range.offsetWidth )) / 2) / 100) >= (this.min - (range.offsetWidth * 1))) && this.isMouseDownEvent) {
          //       firtsRange.style.left = (data - Number(range.offsetWidth)) + 'px';
          //       console.log('VALUE ', data, this.max * ((data / 2) / 100), range.offsetWidth, firtsRange.style.left );
          //     }
          // });
        }
      }, {
        key: "mouseUpEvent",
        value: function mouseUpEvent(evnt, id) {
          console.log('fin');
          this.isMouseDownEvent = false; // this.firstRangeSubscription.unsubscribe();
        }
      }, {
        key: "firtsPointValue",
        get: function get() {
          var position = this.firstRangePoint.style.left.replace('px', '');
          console.log('firstRangePoint', position);
          return Number(position);
        },
        set: function set(v) {
          this.firstRangePoint.style.left = String(v) + 'px';
        }
      }, {
        key: "lastPointValue",
        get: function get() {
          var position = this.lastRangePoint.style.left.replace('px', '');
          console.log('firstRangePoint', position);
          return Number(position);
        },
        set: function set(v) {
          this.lastRangePoint.style.left = String(v) + 'px';
        }
      }]);

      return RangeComponent;
    }();

    RangeComponent.ɵfac = function RangeComponent_Factory(t) {
      return new (t || RangeComponent)();
    };

    RangeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RangeComponent,
      selectors: [["ngc-range"]],
      inputs: {
        min: "min",
        max: "max",
        type: "type"
      },
      decls: 17,
      vars: 11,
      consts: [[4, "ngIf"], ["id", "container-range"], ["id", "range"], ["id", "first-range-point", 1, "first-range"], ["id", "last-range-point", 1, "last-range"]],
      template: function RangeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RangeComponent_ng_container_0_Template, 3, 1, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RangeComponent_ng_container_5_Template, 3, 1, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 6, ctx.filterValue, "EUR"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 9, ctx.clickRange$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n", ctx.firtsPointValue, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n", ctx.lastPointValue, " ");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]],
      styles: ["p[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n#container-range[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  width: 200px;\n  height: 10px;\n  align-items: center;\n}\n\n#range[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 3px;\n  background-color: blue;\n  cursor: pointer;\n}\n\n#first-range-point[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: red;\n  cursor: pointer;\n  transform: translateY(-50%);\n  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n\n#last-range-point[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: green;\n  cursor: pointer;\n  transform: translateY(-50%);\n  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n\n.range-point-title[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 90%;\n  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcmFuZ2UvQzpcXFByb3llY3Rvc1xcY3VzdG9tUmFuZ2Uvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xccmFuZ2VcXHJhbmdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9yYW5nZS9yYW5nZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDRCxRQUFBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsNkRBQUE7RUFDQSx3QkFBQTtLQUFBLHFCQUFBO1VBQUEsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0QsUUFBQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLDZEQUFBO0VBQ0Esd0JBQUE7S0FBQSxxQkFBQTtVQUFBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFLQSw2REFBQTtFQUNBLHdCQUFBO0tBQUEscUJBQUE7VUFBQSxnQkFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcmFuZ2UvcmFuZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbiNjb250YWluZXItcmFuZ2Uge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI3JhbmdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDNweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI2ZpcnN0LXJhbmdlLXBvaW50IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiB0b3A6IDUwJTtcclxuICB3aWR0aDogMTBweDtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2Utb3V0LCBib3gtc2hhZG93IDAuM3MgZWFzZS1vdXQ7XHJcbiAgYXBwZWFyYW5jZTogbm9uZTtcclxufVxyXG5cclxuI2xhc3QtcmFuZ2UtcG9pbnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuIHRvcDogNTAlO1xyXG4gIHdpZHRoOiAxMHB4O1xyXG4gIGhlaWdodDogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLW91dCwgYm94LXNoYWRvdyAwLjNzIGVhc2Utb3V0O1xyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbn1cclxuXHJcbi5yYW5nZS1wb2ludC10aXRsZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogOTAlO1xyXG4gIC8vIHdpZHRoOiAxMHB4O1xyXG4gIC8vIGhlaWdodDogMTBweDtcclxuICAvLyBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2Utb3V0LCBib3gtc2hhZG93IDAuM3MgZWFzZS1vdXQ7XHJcbiAgYXBwZWFyYW5jZTogbm9uZTtcclxufVxyXG5cclxuXHJcbi8vICNjb250YWluZXItcmFuZ2Uge1xyXG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgIHdpZHRoOiAyMDBweDtcclxuLy8gICBoZWlnaHQ6IDEwcHg7XHJcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbi8vIH1cclxuXHJcbi8vICNyYW5nZSB7XHJcbi8vICAgd2lkdGg6IDkwJTtcclxuLy8gICBoZWlnaHQ6IDJweDtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4vLyB9XHJcblxyXG4vLyAjZmlyc3QtcmFuZ2UtcG9pbnQge1xyXG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gIHRvcDogNTAlO1xyXG4vLyAgIHdpZHRoOiAxMHB4O1xyXG4vLyAgIGhlaWdodDogMTBweDtcclxuLy8gICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4vLyAgIGN1cnNvcjogbW92ZTtcclxuLy8gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbi8vICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1vdXQsIGJveC1zaGFkb3cgMC4zcyBlYXNlLW91dDtcclxuLy8gICBhcHBlYXJhbmNlOiBub25lO1xyXG4vLyB9XHJcblxyXG4vLyAjbGFzdC1yYW5nZS1wb2ludCB7XHJcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgdG9wOiA1MCU7XHJcbi8vICAgd2lkdGg6IDIwcHg7XHJcbi8vICAgaGVpZ2h0OiAyMHB4O1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuLy8gICBjdXJzb3I6IG1vdmU7XHJcbi8vICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4vLyAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2Utb3V0LCBib3gtc2hhZG93IDAuM3MgZWFzZS1vdXQ7XHJcbi8vICAgYXBwZWFyYW5jZTogbm9uZTtcclxuLy8gfVxyXG4iLCJwIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4jY29udGFpbmVyLXJhbmdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI3JhbmdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNmaXJzdC1yYW5nZS1wb2ludCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1vdXQsIGJveC1zaGFkb3cgMC4zcyBlYXNlLW91dDtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuI2xhc3QtcmFuZ2UtcG9pbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1vdXQsIGJveC1zaGFkb3cgMC4zcyBlYXNlLW91dDtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLnJhbmdlLXBvaW50LXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDkwJTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1vdXQsIGJveC1zaGFkb3cgMC4zcyBlYXNlLW91dDtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RangeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ngc-range',
          templateUrl: './range.component.html',
          styleUrls: ['./range.component.scss']
        }]
      }], function () {
        return [];
      }, {
        min: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        max: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_range_range_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/range/range.component */
    "./src/app/shared/components/range/range.component.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        declarations: [_components_range_range_component__WEBPACK_IMPORTED_MODULE_2__["RangeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_components_range_range_component__WEBPACK_IMPORTED_MODULE_2__["RangeComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_range_range_component__WEBPACK_IMPORTED_MODULE_2__["RangeComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_components_range_range_component__WEBPACK_IMPORTED_MODULE_2__["RangeComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=default~components-fixed-values-range-fixed-values-range-module~components-normal-range-normal-range-module-es5.js.map