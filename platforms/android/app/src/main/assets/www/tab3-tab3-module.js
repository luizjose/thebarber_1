(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");







var Tab3PageModule = /** @class */ (function () {
    function Tab3PageModule() {
    }
    Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }])
            ],
            declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
        })
    ], Tab3PageModule);
    return Tab3PageModule;
}());



/***/ }),

/***/ "./src/app/tab3/tab3.page.html":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"nav\">\r\n    <ion-toolbar>\r\n     <ion-title>\r\n      <h1>  Agendamento\r\n      </h1>\r\n    </ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content class=\"Agendamento\">\r\n      <p>Nome*</p> \r\n    <ion-item>\r\n    <ion-input type=\"text\" name=\"nome\" [(ngModel)]=\"nome\"></ion-input>\r\n  </ion-item>\r\n  <p>Telefone*</p>\r\n  <ion-item>\r\n  <ion-input type=\"tel\"  placeholder=\"00 0000-0000\" name=\"telef\" [(ngModel)]=\"telef\"></ion-input>\r\n  </ion-item>\r\n  <p>Como gostaria de ser chamado*</p>\r\n  <ion-item>\r\n  \r\n    <ion-input type=\"text\" name=\"apelido\" [(ngModel)]=\"apelido\" ></ion-input>\r\n  </ion-item>\r\n  <p>Selecione a data</p>\r\n  <ion-item>\r\n  <ion-input type=\"date\" name=\"datacad\" [(ngModel)]=\"datacad\"></ion-input>\r\n  </ion-item>\r\n    <ion-item>\r\n  <ion-button class=\"agendar\" (click)=\"gethoras()\" color=\"black\">Carregar horarios</ion-button></ion-item>\r\n  <p>Selecione o horario desejado</p>\r\n  <ion-item>\r\n      <ion-select  name=\"horacad\" [(ngModel)]=\"horacad\"  placeholder=\"selecione a hora\">\r\n         <ion-select-option  *ngFor=\"let hora of phoras\">{{hora.horarios}}</ion-select-option>\r\n        </ion-select>      \r\n  </ion-item>\r\n  <ion-item>\r\n      <ion-button class=\"agendar\" (click)=\"Agendar()\" color=\"black\">Agendar</ion-button>\r\n    </ion-item>\r\n        \r\n  \r\n  </ion-content>\r\n  "

/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav {\n  --background-color: black;\n  --color: black;\n  border-radius: 10px;\n  text-align: center; }\n\nion-title {\n  background-color: black;\n  border-radius: 10px; }\n\nh1 {\n  font-weight: bold;\n  color: white; }\n\nion-item {\n  font-size: 13px;\n  --background: rgba(255, 255, 255, 0.2);\n  --border-radius: 10px; }\n\nion-item ion-input {\n    --color: black;\n    --background-color: black; }\n\nion-item ion-select, ion-item ion-select-option {\n    --border-radius: 15px;\n    --color:black;\n    --background: rgba(255, 255, 255, 0.2); }\n\nion-item ion-button {\n    border-radius: 10px;\n    background-color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMy9DOlxceGFtcHBcXGh0ZG9jc1xcbGpjXFxsdWl6L3NyY1xcYXBwXFx0YWIzXFx0YWIzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFtQjtFQUNuQixjQUFRO0VBQ1IsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxpQkFBaUI7RUFDakIsWUFBWSxFQUFBOztBQUVoQjtFQUNVLGVBQWU7RUFDakIsc0NBQWE7RUFDYixxQkFBZ0IsRUFBQTs7QUFIeEI7SUFLWSxjQUFRO0lBQ1IseUJBQW1CLEVBQUE7O0FBTi9CO0lBU1EscUJBQWdCO0lBQ2hCLGFBQVE7SUFDUixzQ0FBYSxFQUFBOztBQVhyQjtJQWNRLG1CQUFtQjtJQUNuQix1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2IHtcbiAgICAtLWJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIC0tY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLXRpdGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuaDEge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbmlvbi1pdGVtIHtcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgICAgICAtLWNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59ICBcbiAgICBpb24tc2VsZWN0LCBpb24tc2VsZWN0LW9wdGlvbiB7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgLS1jb2xvcjpibGFjaztcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgfVxuICAgIGlvbi1idXR0b257XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICBcbiAgICB9XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _providers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers.service */ "./src/app/providers.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var Tab3Page = /** @class */ (function () {
    function Tab3Page(navCtrl, alertController, serviDor, http) {
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.serviDor = serviDor;
        this.http = http;
        this.resposta = [];
    }
    Tab3Page.prototype.gethoras = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var headers, options;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                headers.append("Accept", "Access-Control-Allow-Origin: *");
                headers.append('Content-type', 'application/json');
                headers.append('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept', 'application/json');
                options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: headers });
                console.log(this.datacad);
                this.http.post(this.serviDor.urlGet() + 'dados.php?' + options, this.datacad)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) { return res.json(); }))
                    .subscribe(function (data) {
                    return _this.phoras = (data);
                }
                //console.log(data)
                );
                return [2 /*return*/];
            });
        });
    };
    Tab3Page.prototype.Agendar = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var agendar, headers, options;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                agendar = {
                    nome: this.nome,
                    telef: this.telef,
                    apelido: this.apelido,
                    datacad: this.datacad,
                    horacad: this.horacad
                };
                headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                headers.append("Accept", "Access-Control-Allow-Origin: *");
                headers.append('Content-type', 'application/json');
                headers.append('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept', 'application/json');
                options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: headers });
                console.log(agendar);
                this.http.post(this.serviDor.urlGet() + 'agendamento.php?' + options, agendar)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) { return res.json(); }))
                    .subscribe(function (data) {
                    return console.log(data);
                });
                return [2 /*return*/];
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("phoras"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], Tab3Page.prototype, "phoras", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("nome"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], Tab3Page.prototype, "nome", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("telef"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], Tab3Page.prototype, "telef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("apelido"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], Tab3Page.prototype, "apelido", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("datacad"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], Tab3Page.prototype, "datacad", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("horacad"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], Tab3Page.prototype, "horacad", void 0);
    Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab3',
            template: __webpack_require__(/*! ./tab3.page.html */ "./src/app/tab3/tab3.page.html"),
            styles: [__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _providers_service__WEBPACK_IMPORTED_MODULE_3__["ProvidersService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], Tab3Page);
    return Tab3Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module.js.map