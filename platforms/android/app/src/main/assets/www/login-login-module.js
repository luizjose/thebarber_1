(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content padding>\n  <div class=\"logo\" [hidden]=\"Keyboard.isVisible\">\n    <ion-img src=\"/assets/logobarber.png\"></ion-img>\n  </div>\n  <ion-slides>\n    <ion-slide>\n    <div class=\"slide-inner\">\n        <h1>Login</h1>\n    <ion-item class=\"ion-margin-top\" lines=\"none\">\n      <ion-input type=\"text\" placeholder=\"E-mail\" [(ngModel)]=\"email\"></ion-input>\n    </ion-item>\n    <ion-item class=\"ion-margin-top\" lines=\"none\">\n        <ion-input type=\"password\" placeholder=\"Senha\" [(ngModel)]=\"senha\"></ion-input>\n    </ion-item>\n  <ion-button class=\"ion-margin-top\" (click)=\"presentAlertlogar()\" color=\"light\" expand=\"block\">Entrar</ion-button>\n  <ion-button class=\"ion-margin-top\" (click)=\"pagecadastro()\" color=\"light\" expand=\"block\">Cadastrar</ion-button>\n  </div>\n</ion-slide>\n</ion-slides>\n<div class=\"fundo\"></div>\n  </ion-content>"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  top: 7%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  width: 75%;\n  margin: 0 auto;\n  z-index: 2; }\n\nion-slides {\n  opacity: 0.9;\n  top: 10%;\n  height: 100%; }\n\nion-slides .slide-inner {\n    width: 80%;\n    color: white;\n    background-color: black;\n    border-radius: 10px; }\n\nion-slides .slide-inner ion-item {\n      --background: rgba(255, 255, 255, 0.2);\n      --border-radius: 10px; }\n\nion-slides .slide-inner ion-item ion-input {\n        --color:white; }\n\n.fundo {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n  width: 100%;\n  background-image: url(\"/assets/fundo.jpg\");\n  background-size: 100% 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXHhhbXBwXFxodGRvY3NcXGxqY1xcbHVpei9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLE9BQU07RUFDTixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixVQUFVO0VBQ1YsY0FBYztFQUNkLFVBQVUsRUFBQTs7QUFHZDtFQUNJLFlBQVk7RUFDWixRQUFPO0VBQ1AsWUFBWSxFQUFBOztBQUhoQjtJQUtRLFVBQVU7SUFDVixZQUFZO0lBQ1osdUJBQXNCO0lBQ3RCLG1CQUFtQixFQUFBOztBQVIzQjtNQVdZLHNDQUFhO01BQ2IscUJBQWdCLEVBQUE7O0FBWjVCO1FBZWdCLGFBQVEsRUFBQTs7QUFLeEI7RUFDSSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1QsWUFBWTtFQUNaLFdBQVc7RUFDWCwwQ0FBMEM7RUFDMUMsMEJBQTBCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb3tcclxuICAgIHRvcDo3JTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbmlvbi1zbGlkZXMge1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG4gICAgdG9wOjEwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIC5zbGlkZS1pbm5lciB7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgaW9uLWlucHV0IHtcclxuICAgICAgICAgICAgICAgIC0tY29sb3I6d2hpdGU7XHJcbn1cclxuICAgICAgICB9XHJcbiAgICAgICAgfVxyXG59XHJcbi5mdW5kbyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9mdW5kby5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _providers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers.service */ "./src/app/providers.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");








var LoginPage = /** @class */ (function () {
    function LoginPage(router, navCtrl, alertController, serviDor, http, Keyboard) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.serviDor = serviDor;
        this.http = http;
        this.Keyboard = Keyboard;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.presentAlertlogar = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (this.email == undefined || this.senha == undefined) {
                    this.serviDor.alertas('atenção', 'prencher todos os campos');
                }
                else {
                    this.http.get(this.serviDor.urlGet() + 'login.php?email=' + this.email + '&senha=' + this.senha).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }))
                        .subscribe(function (dados) {
                        if (dados.msg.logado == "sim") {
                            if (dados.dados.status == "ativo") {
                                if (dados.dados.nivel == "2") {
                                    _this.router.navigateByUrl('/admagenda');
                                }
                                else {
                                    _this.router.navigateByUrl('/tabs');
                                }
                            }
                            else {
                                _this.serviDor.alertas('atenção', 'usuario não cadastrado');
                            }
                        }
                        else {
                            _this.serviDor.alertas('atenção', 'usuario ou senha não cadastrado');
                        }
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    LoginPage.prototype.pagecadastro = function () {
        this.router.navigateByUrl('/cadastro');
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _providers_service__WEBPACK_IMPORTED_MODULE_5__["ProvidersService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"],
            _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_7__["Keyboard"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map