(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admagenda-admagenda-module"],{

/***/ "./src/app/adm/menu.service.ts":
/*!*************************************!*\
  !*** ./src/app/adm/menu.service.ts ***!
  \*************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuService = /** @class */ (function () {
    function MenuService() {
        this.menu = [
            {
                "label": "admagenda",
                "icone": "calendar",
                "acao": "admagenda",
                "menu": "1",
                "exibirMenu": true
            },
            {
                "label": "admagenda1",
                "icone": "calendar",
                "acao": "admagenda1",
                "menu": "2",
                "exibirMenu": true
            }
        ];
    }
    MenuService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuService);
    return MenuService;
}());



/***/ }),

/***/ "./src/app/admagenda/admagenda.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admagenda/admagenda.module.ts ***!
  \***********************************************/
/*! exports provided: AdmagendaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmagendaPageModule", function() { return AdmagendaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _admagenda_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admagenda.page */ "./src/app/admagenda/admagenda.page.ts");







var routes = [
    {
        path: '',
        component: _admagenda_page__WEBPACK_IMPORTED_MODULE_6__["AdmagendaPage"]
    }
];
var AdmagendaPageModule = /** @class */ (function () {
    function AdmagendaPageModule() {
    }
    AdmagendaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_admagenda_page__WEBPACK_IMPORTED_MODULE_6__["AdmagendaPage"]]
        })
    ], AdmagendaPageModule);
    return AdmagendaPageModule;
}());



/***/ }),

/***/ "./src/app/admagenda/admagenda.page.html":
/*!***********************************************!*\
  !*** ./src/app/admagenda/admagenda.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"nav\">\n  <ion-toolbar >\n    <ion-title>\n     \n    <h1>Agenda Barbeiro</h1>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n <ion-content>\n  <ion-item>\n    <ion-input type=\"date\" [(ngModel)]=\"datacad\" placeholder=\"selecione a data\"></ion-input>\n\n      <ion-button class=\"agendar\" (click)=\"admagenda()\" color=\"black\">Buscar</ion-button>\n    </ion-item>\n    <ion-item  *ngFor=\"let agenda of horarios\">\n      {{agenda.nome}}\n      {{agenda.hora}}\n    </ion-item>\n </ion-content>\n"

/***/ }),

/***/ "./src/app/admagenda/admagenda.page.scss":
/*!***********************************************!*\
  !*** ./src/app/admagenda/admagenda.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav {\n  --background-color: black;\n  --color: black;\n  border-radius: 10px;\n  text-align: center; }\n\nion-title {\n  background-color: black;\n  border-radius: 10px; }\n\nh1 {\n  font-weight: bold;\n  color: white; }\n\nion-button {\n  border-radius: 10px;\n  background-color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtYWdlbmRhL0M6XFx4YW1wcFxcaHRkb2NzXFxsamNcXGx1aXovc3JjXFxhcHBcXGFkbWFnZW5kYVxcYWRtYWdlbmRhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFtQjtFQUNuQixjQUFRO0VBQ1IsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxpQkFBaUI7RUFDakIsWUFBWSxFQUFBOztBQUVkO0VBQ0UsbUJBQW1CO0VBQ25CLHVCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWRtYWdlbmRhL2FkbWFnZW5kYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2IHtcclxuICAtLWJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIC0tY29sb3I6IGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmlvbi10aXRsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5oMXtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuaW9uLWJ1dHRvbntcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/admagenda/admagenda.page.ts":
/*!*********************************************!*\
  !*** ./src/app/admagenda/admagenda.page.ts ***!
  \*********************************************/
/*! exports provided: AdmagendaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmagendaPage", function() { return AdmagendaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _adm_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../adm/menu.service */ "./src/app/adm/menu.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers.service */ "./src/app/providers.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");








var AdmagendaPage = /** @class */ (function () {
    function AdmagendaPage(router, navCtrl, menuService, serviDor, http) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.menuService = menuService;
        this.serviDor = serviDor;
        this.http = http;
    }
    AdmagendaPage.prototype.admagenda = function () {
        var _this = this;
        var consulta = {
            datacad: this.datacad
        };
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["Headers"]();
        headers.append("Accept", "Access-Control-Allow-Origin: *");
        headers.append('Content-type', 'application/json');
        headers.append('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["RequestOptions"]({ headers: headers });
        console.log(this.datacad);
        this.http.post(this.serviDor.urlGet() + 'agendaadm.php?' + options, consulta)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (res) { return res.json(); }))
            .subscribe(function (data) {
            return _this.horarios = (data);
        }
        //  console.log(data)
        );
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("horarios"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AdmagendaPage.prototype, "horarios", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("datacad"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AdmagendaPage.prototype, "datacad", void 0);
    AdmagendaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admagenda',
            template: __webpack_require__(/*! ./admagenda.page.html */ "./src/app/admagenda/admagenda.page.html"),
            styles: [__webpack_require__(/*! ./admagenda.page.scss */ "./src/app/admagenda/admagenda.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _adm_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"],
            _providers_service__WEBPACK_IMPORTED_MODULE_5__["ProvidersService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_6__["Http"]])
    ], AdmagendaPage);
    return AdmagendaPage;
}());



/***/ })

}]);
//# sourceMappingURL=admagenda-admagenda-module.js.map