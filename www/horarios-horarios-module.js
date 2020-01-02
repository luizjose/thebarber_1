(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["horarios-horarios-module"],{

/***/ "./src/app/horarios/horarios.module.ts":
/*!*********************************************!*\
  !*** ./src/app/horarios/horarios.module.ts ***!
  \*********************************************/
/*! exports provided: HorariosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorariosPageModule", function() { return HorariosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _horarios_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./horarios.page */ "./src/app/horarios/horarios.page.ts");







var routes = [
    {
        path: '',
        component: _horarios_page__WEBPACK_IMPORTED_MODULE_6__["HorariosPage"]
    }
];
var HorariosPageModule = /** @class */ (function () {
    function HorariosPageModule() {
    }
    HorariosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_horarios_page__WEBPACK_IMPORTED_MODULE_6__["HorariosPage"]]
        })
    ], HorariosPageModule);
    return HorariosPageModule;
}());



/***/ }),

/***/ "./src/app/horarios/horarios.page.html":
/*!*********************************************!*\
  !*** ./src/app/horarios/horarios.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"nav\">\n  <ion-toolbar>\n    <ion-title><h1>Meus Horarios</h1></ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n    <p>Nome*</p> \n    <ion-item>\n    <ion-input type=\"text\" name=\"nome\" [(ngModel)]=\"nome\"></ion-input>\n  </ion-item>\n  <p>Telefone*</p>\n  <ion-item>\n  <ion-input type=\"tel\"  placeholder=\"00 0000-0000\" name=\"telef\" [(ngModel)]=\"telef\"></ion-input>\n  </ion-item>\n  <p>Selecione a data</p>\n  <ion-item>\n  <ion-input type=\"date\" name=\"datacad\" [(ngModel)]=\"datacad\"></ion-input>\n  </ion-item>\n  <ion-item>\n      <ion-button class=\"agendar\" (click)=\"consulta()\" color=\"black\">Carregar horarios</ion-button>\n    </ion-item> <div class=\"consulta\">\n        <h4 *ngFor=\"let consulta of consr\">{{consulta.nome}} Te esperamos ás {{consulta.hora}} no dia {{consulta.data}}!!</h4>\n    \n   \n    </div>\n    </ion-content>\n"

/***/ }),

/***/ "./src/app/horarios/horarios.page.scss":
/*!*********************************************!*\
  !*** ./src/app/horarios/horarios.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav {\n  --background-color: black;\n  --color: black;\n  border-radius: 10px;\n  text-align: center; }\n\nion-title {\n  background-color: black;\n  border-radius: 10px; }\n\ndiv {\n  --background-color: gray; }\n\nh1 {\n  font-weight: bold;\n  color: white; }\n\nion-item {\n  font-size: 13px;\n  --background: rgba(255, 255, 255, 0.2);\n  --border-radius: 10px; }\n\nion-item ion-input {\n    --color: black;\n    --background-color: black; }\n\nion-item ion-button {\n    border-radius: 10px;\n    background-color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9yYXJpb3MvQzpcXHhhbXBwXFxodGRvY3NcXGxqY1xcbHVpei9zcmNcXGFwcFxcaG9yYXJpb3NcXGhvcmFyaW9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFtQjtFQUNuQixjQUFRO0VBQ1IsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSx3QkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxpQkFBaUI7RUFDakIsWUFBWSxFQUFBOztBQUdoQjtFQUNJLGVBQWU7RUFDakIsc0NBQWE7RUFDYixxQkFBZ0IsRUFBQTs7QUFIbEI7SUFLTSxjQUFRO0lBQ1IseUJBQW1CLEVBQUE7O0FBTnpCO0lBU0ksbUJBQW1CO0lBQ25CLHVCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9yYXJpb3MvaG9yYXJpb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdiB7XHJcbiAgICAtLWJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgLS1jb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmlvbi10aXRsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuZGl2IHtcclxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxufVxyXG5oMXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgXHJcbn1cclxuaW9uLWl0ZW0ge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBpb24taW5wdXQge1xyXG4gICAgICAtLWNvbG9yOiBibGFjaztcclxuICAgICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufSBcclxuaW9uLWJ1dHRvbntcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIFxyXG59XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/horarios/horarios.page.ts":
/*!*******************************************!*\
  !*** ./src/app/horarios/horarios.page.ts ***!
  \*******************************************/
/*! exports provided: HorariosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorariosPage", function() { return HorariosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers.service */ "./src/app/providers.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var HorariosPage = /** @class */ (function () {
    function HorariosPage(navCtrl, alertController, serviDor, http) {
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.serviDor = serviDor;
        this.http = http;
    }
    HorariosPage.prototype.consulta = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var consulta, headers, options;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                consulta = {
                    nome: this.nome,
                    telef: this.telef,
                    datacad: this.datacad
                };
                headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]();
                headers.append("Accept", "Access-Control-Allow-Origin: *");
                headers.append('Content-type', 'application/json');
                headers.append('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept', 'application/json');
                options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
                console.log(this.datacad);
                this.http.post(this.serviDor.urlGet() + 'consulta.php?' + options, consulta)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) { return res.json(); }))
                    .subscribe(function (data) {
                    return _this.consr = data;
                }
                //   console.log(data)
                );
                return [2 /*return*/];
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("consr"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HorariosPage.prototype, "consr", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("nome"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HorariosPage.prototype, "nome", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("telef"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HorariosPage.prototype, "telef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("datacad"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HorariosPage.prototype, "datacad", void 0);
    HorariosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-horarios',
            template: __webpack_require__(/*! ./horarios.page.html */ "./src/app/horarios/horarios.page.html"),
            styles: [__webpack_require__(/*! ./horarios.page.scss */ "./src/app/horarios/horarios.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _providers_service__WEBPACK_IMPORTED_MODULE_2__["ProvidersService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"]])
    ], HorariosPage);
    return HorariosPage;
}());



/***/ })

}]);
//# sourceMappingURL=horarios-horarios-module.js.map