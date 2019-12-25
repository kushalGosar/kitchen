(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component-kitchen-display-kitchen-display-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/kitchen-display/dashboard/dashboard.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/kitchen-display/dashboard/dashboard.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"btnpostion\">\n  <button class=\"btn btn-primary\" (mousedown)=\"onDownload()\">\n    <i class=\"fa fa-download\" aria-hidden=\"true\"></i>\n    &nbsp; CSV Download</button>\n</div>\n\n<table class=\"table\">\n  <thead class=\"thead-dark\">\n    <tr>\n      <th>Name</th>\n      <th>Quantity</th>\n      <th>Created Till Now</th>\n      <th>Predicted</th>\n      <th>Status</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let item of listOrders\">\n      <td>{{item.name}}</td>\n      <td>{{item.totalqunatity}}</td>\n      <td>{{item.created}}</td>\n      <td>{{item.predicted}}</td>\n      <td><button (click)=\"onDone(item)\" class=\"bt btn-success\"> <i class=\"fa fa-check-circle-o\" aria-hidden=\"true\"></i>\n          Done</button></td>\n    </tr>\n    <tr *ngIf=\"isEmpty\">\n      <td colspan=\"5\" style=\"text-align: center;\">No Data Found</td>\n    </tr>\n  </tbody>\n</table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/kitchen-display/prediction/prediction.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/kitchen-display/prediction/prediction.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-group\">\n\n    <form #predictionForm=\"ngForm\">\n        <div class=\"row\">\n            <div class=\"col-md-6 position\" *ngFor=\"let item of listFood,let i =index\">\n                <div class=\"form-group\">\n                    <label for=\"exampleInputEmail1\">{{item.name}}</label>\n                    <input type=\"number\" class=\"form-control\" name=\"predicted\" placeholder=\"Enter prediction\"\n                        [(ngModel)]=\"item.predicted\">\n                </div>\n            </div>\n        </div>\n\n        <br>\n        <div class=\"btnpostion\">\n            <button class=\"btn btn-primary\" (mousedown)=\"onClickSubmit(predictionForm.value)\">\n                <i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i>\n                Submit</button> &nbsp;\n            <button (mousedown)=\"predictionForm.reset()\" class=\"btn btn-warning\">\n                <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n                Clear</button>\n        </div>\n    </form>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/kitchen-display/quantity/quantity.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/kitchen-display/quantity/quantity.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-group\" *ngIf=\"!isEmpty\">\n\n    <form #orderForm=\"ngForm\">\n        <div class=\"row\">\n            <div class=\"col-md-6 position\" *ngFor=\"let item of listOrders,let i =index\">\n                <div class=\"form-group\">\n                    <label for=\"exampleInputEmail1\">{{item.name}}</label>\n                    <input type=\"number\" class=\"form-control\" name=\"predicted\" placeholder=\"Enter quantity\"\n                        [(ngModel)]=\"item.qunatity\">\n                </div>\n            </div>\n        </div>\n\n        <br>\n        <div class=\"btnpostion\">\n            <button class=\"btn btn-primary\" (mousedown)=\"onClickSubmit(orderForm.value)\">\n                <i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i>\n                Submit</button> &nbsp;\n            <button (mousedown)=\"orderForm.reset()\" class=\"btn btn-warning\">\n                <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n                Clear</button>\n        </div>\n    </form>\n\n</div>\n\n<div *ngIf=\"isEmpty\">\n    No Prediction Made\n</div>");

/***/ }),

/***/ "./src/app/component/kitchen-display/dashboard/dashboard.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/component/kitchen-display/dashboard/dashboard.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btnpostion {\n  padding: 20px;\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2tpdGNoZW4tZGlzcGxheS9kYXNoYm9hcmQvRDpcXFByb2plY3RzIEt1c2hhbFxcS2l0Y2hlbiBBcHBsaWNhdGlvblxca2l0Y2hlbkFKL3NyY1xcYXBwXFxjb21wb25lbnRcXGtpdGNoZW4tZGlzcGxheVxcZGFzaGJvYXJkXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9raXRjaGVuLWRpc3BsYXkvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQva2l0Y2hlbi1kaXNwbGF5L2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRucG9zdGlvbntcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn0iLCIuYnRucG9zdGlvbiB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZsb2F0OiByaWdodDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/component/kitchen-display/dashboard/dashboard.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/component/kitchen-display/dashboard/dashboard.component.ts ***!
  \****************************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared-http.service */ "./src/app/shared/shared-http.service.ts");
/* harmony import */ var _shared_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/socket.service */ "./src/app/shared/socket.service.ts");
/* harmony import */ var src_app_shared_json2csv_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/json2csv.service */ "./src/app/shared/json2csv.service.ts");





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(http, socket, j2c) {
        var _this = this;
        this.http = http;
        this.socket = socket;
        this.j2c = j2c;
        this.socket.listOfData.subscribe(function (data) {
            if (data) {
                _this.getPrediction();
            }
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getPrediction();
    };
    DashboardComponent.prototype.getPrediction = function () {
        var _this = this;
        this.http.get('/order', null).subscribe(function (response) {
            if (response.length !== 0) {
                _this.Orders = response[0];
                _this.listOrders = _this.Orders.dailyorders.filter(function (element) { return element.totalqunatity > 0 || element.created > 0; });
                _this.listOrders.length > 0 ? _this.isEmpty = false : _this.isEmpty = true;
            }
            else {
                _this.isEmpty = true;
            }
        });
    };
    DashboardComponent.prototype.onDone = function (item) {
        var obj = {
            _id: this.Orders._id,
            data: item
        };
        if (item.totalqunatity < 1) {
            alert('No pending quantity');
        }
        else {
            this.socket.addData(obj);
        }
    };
    DashboardComponent.prototype.onDownload = function () {
        this.j2c.downloadFile(this.listOrders, 'Report', ['name', 'created', 'predicted']);
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: src_app_shared_shared_http_service__WEBPACK_IMPORTED_MODULE_2__["SharedHttpService"] },
        { type: _shared_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"] },
        { type: src_app_shared_json2csv_service__WEBPACK_IMPORTED_MODULE_4__["Json2csvService"] }
    ]; };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/kitchen-display/dashboard/dashboard.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/component/kitchen-display/dashboard/dashboard.component.scss")).default]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/component/kitchen-display/kitchen-display.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/component/kitchen-display/kitchen-display.module.ts ***!
  \*********************************************************************/
/*! exports provided: KitchenDisplayModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KitchenDisplayModule", function() { return KitchenDisplayModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/component/kitchen-display/dashboard/dashboard.component.ts");
/* harmony import */ var _prediction_prediction_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prediction/prediction.component */ "./src/app/component/kitchen-display/prediction/prediction.component.ts");
/* harmony import */ var _quantity_quantity_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quantity/quantity.component */ "./src/app/component/kitchen-display/quantity/quantity.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var routes = [{
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    }, {
        path: 'prediction',
        component: _prediction_prediction_component__WEBPACK_IMPORTED_MODULE_4__["PredictionComponent"]
    }, {
        path: 'quantity',
        component: _quantity_quantity_component__WEBPACK_IMPORTED_MODULE_5__["QuantityComponent"]
    }
];
var KitchenDisplayModule = /** @class */ (function () {
    function KitchenDisplayModule() {
    }
    KitchenDisplayModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], _prediction_prediction_component__WEBPACK_IMPORTED_MODULE_4__["PredictionComponent"], _quantity_quantity_component__WEBPACK_IMPORTED_MODULE_5__["QuantityComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)
            ]
        })
    ], KitchenDisplayModule);
    return KitchenDisplayModule;
}());



/***/ }),

/***/ "./src/app/component/kitchen-display/prediction/prediction.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/component/kitchen-display/prediction/prediction.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".position {\n  padding-left: 50px;\n  padding-top: 20px;\n}\n\n.btnpostion {\n  padding-right: 20px;\n  padding-bottom: 20px;\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2tpdGNoZW4tZGlzcGxheS9wcmVkaWN0aW9uL0Q6XFxQcm9qZWN0cyBLdXNoYWxcXEtpdGNoZW4gQXBwbGljYXRpb25cXGtpdGNoZW5BSi9zcmNcXGFwcFxcY29tcG9uZW50XFxraXRjaGVuLWRpc3BsYXlcXHByZWRpY3Rpb25cXHByZWRpY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9raXRjaGVuLWRpc3BsYXkvcHJlZGljdGlvbi9wcmVkaWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9raXRjaGVuLWRpc3BsYXkvcHJlZGljdGlvbi9wcmVkaWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvc2l0aW9ue1xyXG4gICAgcGFkZGluZy1sZWZ0OjUwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDoyMHB4O1xyXG59XHJcblxyXG4uYnRucG9zdGlvbntcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxufSIsIi5wb3NpdGlvbiB7XG4gIHBhZGRpbmctbGVmdDogNTBweDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi5idG5wb3N0aW9uIHtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGZsb2F0OiByaWdodDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/component/kitchen-display/prediction/prediction.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/component/kitchen-display/prediction/prediction.component.ts ***!
  \******************************************************************************/
/*! exports provided: PredictionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictionComponent", function() { return PredictionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared-http.service */ "./src/app/shared/shared-http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PredictionComponent = /** @class */ (function () {
    function PredictionComponent(http, router) {
        this.http = http;
        this.router = router;
    }
    PredictionComponent.prototype.ngOnInit = function () {
        this.getPrediction();
    };
    PredictionComponent.prototype.getPrediction = function () {
        var _this = this;
        this.http.get('/food', null).subscribe(function (response) {
            _this.listFood = response;
        });
    };
    PredictionComponent.prototype.onClickSubmit = function (data) {
        var _this = this;
        this.http.post('/order', null, this.listFood).subscribe(function (response) {
            _this.http.successMessage();
            _this.router.navigate(['/kitchen/dashboard']);
        }, function (err) {
            _this.http.errorMessage(err.error.message);
        });
    };
    PredictionComponent.ctorParameters = function () { return [
        { type: src_app_shared_shared_http_service__WEBPACK_IMPORTED_MODULE_2__["SharedHttpService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    PredictionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-prediction',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./prediction.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/kitchen-display/prediction/prediction.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./prediction.component.scss */ "./src/app/component/kitchen-display/prediction/prediction.component.scss")).default]
        })
    ], PredictionComponent);
    return PredictionComponent;
}());



/***/ }),

/***/ "./src/app/component/kitchen-display/quantity/quantity.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/component/kitchen-display/quantity/quantity.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".position {\n  padding-left: 50px;\n  padding-top: 20px;\n}\n\n.btnpostion {\n  padding-right: 20px;\n  padding-bottom: 20px;\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2tpdGNoZW4tZGlzcGxheS9xdWFudGl0eS9EOlxcUHJvamVjdHMgS3VzaGFsXFxLaXRjaGVuIEFwcGxpY2F0aW9uXFxraXRjaGVuQUovc3JjXFxhcHBcXGNvbXBvbmVudFxca2l0Y2hlbi1kaXNwbGF5XFxxdWFudGl0eVxccXVhbnRpdHkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9raXRjaGVuLWRpc3BsYXkvcXVhbnRpdHkvcXVhbnRpdHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2tpdGNoZW4tZGlzcGxheS9xdWFudGl0eS9xdWFudGl0eS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3NpdGlvbntcclxuICAgIHBhZGRpbmctbGVmdDo1MHB4O1xyXG4gICAgcGFkZGluZy10b3A6MjBweDtcclxufVxyXG5cclxuLmJ0bnBvc3Rpb257XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn0iLCIucG9zaXRpb24ge1xuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4uYnRucG9zdGlvbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBmbG9hdDogcmlnaHQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/component/kitchen-display/quantity/quantity.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/component/kitchen-display/quantity/quantity.component.ts ***!
  \**************************************************************************/
/*! exports provided: QuantityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuantityComponent", function() { return QuantityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared-http.service */ "./src/app/shared/shared-http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var QuantityComponent = /** @class */ (function () {
    function QuantityComponent(http, router) {
        this.http = http;
        this.router = router;
    }
    QuantityComponent.prototype.ngOnInit = function () {
        this.getPrediction();
    };
    QuantityComponent.prototype.getPrediction = function () {
        var _this = this;
        this.http.get('/order', null).subscribe(function (response) {
            if (response.length === 0) {
                _this.isEmpty = true;
            }
            else {
                _this.isEmpty = false;
                _this.Orders = response[0];
                _this.listOrders = _this.Orders.dailyorders;
            }
        });
    };
    QuantityComponent.prototype.onClickSubmit = function (data) {
        var _this = this;
        this.Orders.dailyorders = this.listOrders;
        this.http.put('/order/' + this.Orders._id, null, this.Orders).subscribe(function (response) {
            _this.http.successMessage();
            _this.router.navigate(['/kitchen/dashboard']);
        }, function (err) {
            _this.http.errorMessage();
        });
    };
    QuantityComponent.ctorParameters = function () { return [
        { type: src_app_shared_shared_http_service__WEBPACK_IMPORTED_MODULE_2__["SharedHttpService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    QuantityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quantity',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quantity.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/kitchen-display/quantity/quantity.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quantity.component.scss */ "./src/app/component/kitchen-display/quantity/quantity.component.scss")).default]
        })
    ], QuantityComponent);
    return QuantityComponent;
}());



/***/ }),

/***/ "./src/app/shared/json2csv.service.ts":
/*!********************************************!*\
  !*** ./src/app/shared/json2csv.service.ts ***!
  \********************************************/
/*! exports provided: Json2csvService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Json2csvService", function() { return Json2csvService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Json2csvService = /** @class */ (function () {
    function Json2csvService() {
    }
    Json2csvService.prototype.downloadFile = function (data, filename, headers) {
        if (filename === void 0) { filename = 'data'; }
        var csvData = this.ConvertToCSV(data, headers);
        var blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
        var dwldLink = document.createElement("a");
        var url = URL.createObjectURL(blob);
        var isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
        if (isSafariBrowser) {
            dwldLink.setAttribute("target", "_blank");
        }
        dwldLink.setAttribute("href", url);
        dwldLink.setAttribute("download", filename + '_' + new Date() + ".csv");
        dwldLink.style.visibility = "hidden";
        document.body.appendChild(dwldLink);
        dwldLink.click();
        document.body.removeChild(dwldLink);
    };
    Json2csvService.prototype.ConvertToCSV = function (objArray, headerList) {
        var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
        var str = '';
        var row = 'S.No,';
        for (var index in headerList) {
            row += headerList[index] + ',';
        }
        row = row.slice(0, -1);
        str += row + '\r\n';
        for (var i = 0; i < array.length; i++) {
            var line = (i + 1) + '';
            for (var index in headerList) {
                var head = headerList[index];
                line += ',' + array[i][head];
            }
            str += line + '\r\n';
        }
        return str;
    };
    Json2csvService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], Json2csvService);
    return Json2csvService;
}());



/***/ }),

/***/ "./src/app/shared/shared-http.service.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/shared-http.service.ts ***!
  \***********************************************/
/*! exports provided: SharedHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedHttpService", function() { return SharedHttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var SharedHttpService = /** @class */ (function () {
    function SharedHttpService(_http) {
        this._http = _http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
    }
    SharedHttpService.prototype.get = function (endpoint, params) {
        if (params === void 0) { params = null; }
        var queryString = params ? this._objectToQueryString(params) : '';
        endpoint = endpoint + (queryString ? '?' + queryString : '');
        return this._http.get(this.url + endpoint, { headers: this.headers });
    };
    SharedHttpService.prototype.post = function (endpoint, params, data) {
        if (params === void 0) { params = null; }
        var queryString = params ? this._objectToQueryString(params) : '';
        endpoint = endpoint + (queryString ? '?' + queryString : '');
        return this._http.post(this.url + endpoint, data, { headers: this.headers });
    };
    SharedHttpService.prototype.put = function (endpoint, params, data) {
        if (params === void 0) { params = null; }
        var queryString = params ? this._objectToQueryString(params) : '';
        endpoint = endpoint + (queryString ? '?' + queryString : '');
        return this._http.put(this.url + endpoint, data, { headers: this.headers });
    };
    SharedHttpService.prototype.delete = function (endpoint, params) {
        if (params === void 0) { params = null; }
        var queryString = params ? this._objectToQueryString(params) : '';
        endpoint = endpoint + (queryString ? '?' + queryString : '');
        return this._http.delete(this.url + endpoint, { headers: this.headers });
    };
    SharedHttpService.prototype._objectToQueryString = function (object) {
        return Object.keys(object).map(function (key) { return encodeURIComponent(key) + "=" + encodeURIComponent(object[key]); }).join('&');
    };
    SharedHttpService.prototype.successMessage = function () {
        alert('Record added Successfully');
    };
    SharedHttpService.prototype.errorMessage = function (msg) {
        if (msg === void 0) { msg = null; }
        alert(msg || 'Something went wrong Please try again later');
    };
    SharedHttpService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    SharedHttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], SharedHttpService);
    return SharedHttpService;
}());



/***/ }),

/***/ "./src/app/shared/socket.service.ts":
/*!******************************************!*\
  !*** ./src/app/shared/socket.service.ts ***!
  \******************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm5/ngx-socket-io.js");



var SocketService = /** @class */ (function () {
    function SocketService(socket) {
        this.socket = socket;
        this.listOfData = this.socket.fromEvent('document');
    }
    SocketService.prototype.addData = function (data) {
        this.socket.emit('addData', data);
    };
    SocketService.ctorParameters = function () { return [
        { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"] }
    ]; };
    SocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], SocketService);
    return SocketService;
}());



/***/ })

}]);
//# sourceMappingURL=component-kitchen-display-kitchen-display-module.js.map