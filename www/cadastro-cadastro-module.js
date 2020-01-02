(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cadastro-cadastro-module"],{

/***/ "./src/app/cadastro/cadastro.module.ts":
/*!*********************************************!*\
  !*** ./src/app/cadastro/cadastro.module.ts ***!
  \*********************************************/
/*! exports provided: CadastroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroPageModule", function() { return CadastroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cadastro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cadastro.page */ "./src/app/cadastro/cadastro.page.ts");







var routes = [
    {
        path: '',
        component: _cadastro_page__WEBPACK_IMPORTED_MODULE_6__["CadastroPage"]
    }
];
var CadastroPageModule = /** @class */ (function () {
    function CadastroPageModule() {
    }
    CadastroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_cadastro_page__WEBPACK_IMPORTED_MODULE_6__["CadastroPage"]]
        })
    ], CadastroPageModule);
    return CadastroPageModule;
}());



/***/ }),

/***/ "./src/app/cadastro/cadastro.page.html":
/*!*********************************************!*\
  !*** ./src/app/cadastro/cadastro.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n    <div class=\"logo\" [hidden]=\"Keyboard.isVisible\">\n        <ion-img src=\"/assets/logobarber.png\"></ion-img>\n      </div>\n      <ion-slides>\n          <ion-slide>\n              <div class=\"slide-inner\">\n                  <h1>Cadastro</h1>\n \n        <ion-item>\n            <ion-input type=\"text\" placeholder=\"Nome\" name=\"nome\" #nome></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-input type=\"text\" placeholder=\"Telefone\" name=\"celular\" #celular></ion-input>\n            </ion-item>\n    <ion-item>\n      <ion-input type=\"text\" placeholder=\"E-mail\" name=\"email\" #email></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-input type=\"password\" placeholder=\"Senha\" name=\"senha\" #senha></ion-input>\n    </ion-item>\n \n    <ion-button class=\"ion-margin-top\" (click)=\"cadastrarUser()\" color=\"light\" expand=\"block\">Cadastrar</ion-button>\n    <ion-button class=\"ion-margin-top\" (click)=\"pagelogin()\" color=\"light\" expand=\"block\">Fazer Login</ion-button>\n  \n  </div>\n</ion-slide>\n</ion-slides>\n<div class=\"fundo\"></div>\n  </ion-content>"

/***/ }),

/***/ "./src/app/cadastro/cadastro.page.scss":
/*!*********************************************!*\
  !*** ./src/app/cadastro/cadastro.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  top: 5%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  width: 75%;\n  margin: 0 auto;\n  z-index: 2; }\n\nion-slides {\n  opacity: 0.9;\n  top: 5%;\n  height: 100%; }\n\nion-slides .slide-inner {\n    width: 80%;\n    color: white;\n    background-color: black;\n    border-radius: 10px; }\n\nion-slides .slide-inner ion-item {\n      --background: rgba(255, 255, 255, 0.2);\n      --border-radius: 10px; }\n\nion-slides .slide-inner ion-item ion-input {\n        --color:white; }\n\n.fundo {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n  width: 100%;\n  background-image: url(\"/assets/fundo.jpg\");\n  background-size: 100% 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FkYXN0cm8vQzpcXHhhbXBwXFxodGRvY3NcXGxqY1xcbHVpei9zcmNcXGFwcFxcY2FkYXN0cm9cXGNhZGFzdHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLE9BQU07RUFDTixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixVQUFVO0VBQ1YsY0FBYztFQUNkLFVBQVUsRUFBQTs7QUFHZDtFQUNJLFlBQVk7RUFDWixPQUFNO0VBQ04sWUFBWSxFQUFBOztBQUhoQjtJQUtRLFVBQVU7SUFDVixZQUFZO0lBQ1osdUJBQXNCO0lBQ3RCLG1CQUFtQixFQUFBOztBQVIzQjtNQVdZLHNDQUFhO01BQ2IscUJBQWdCLEVBQUE7O0FBWjVCO1FBZWdCLGFBQVEsRUFBQTs7QUFLeEI7RUFDSSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1QsWUFBWTtFQUNaLFdBQVc7RUFDWCwwQ0FBMEM7RUFDMUMsMEJBQTBCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jYWRhc3Ryby9jYWRhc3Ryby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb3tcclxuICAgIHRvcDo1JTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbmlvbi1zbGlkZXMge1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG4gICAgdG9wOjUlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLnNsaWRlLWlubmVyIHtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4gICAgICAgICAgICBpb24taW5wdXQge1xyXG4gICAgICAgICAgICAgICAgLS1jb2xvcjp3aGl0ZTtcclxufVxyXG4gICAgICAgIH1cclxuICAgICAgICB9XHJcbn1cclxuLmZ1bmRvIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2Z1bmRvLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/cadastro/cadastro.page.ts":
/*!*******************************************!*\
  !*** ./src/app/cadastro/cadastro.page.ts ***!
  \*******************************************/
/*! exports provided: CadastroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroPage", function() { return CadastroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers.service */ "./src/app/providers.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");








var CadastroPage = /** @class */ (function () {
    // nome:any[];
    // celular:any[];
    // email:any[];
    //senha:any[];
    function CadastroPage(router, serviDor, navCtrl, alertController, http, loading, Keyboard) {
        this.router = router;
        this.serviDor = serviDor;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.http = http;
        this.loading = loading;
        this.Keyboard = Keyboard;
    }
    CadastroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroPage');
    };
    CadastroPage.prototype.cadastrarUser = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data, headers, options;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                data = {
                    nome: this.nome.value,
                    celular: this.celular.value,
                    email: this.email.value,
                    senha: this.senha.value
                };
                if (this.nome == undefined) {
                    this.serviDor.alertas('Atenção', 'Prencher todos os campos');
                }
                else {
                    headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
                    headers.append("Accept", 'application/json');
                    headers.append('Content-type', 'application/json');
                    options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
                    this.http.post(this.serviDor.urlGet() + 'cadastro.php', data, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) { return res.json(); }))
                        .subscribe(function (dados) {
                        if (dados == "sucesso") {
                            if (dados == "sucesso") {
                                _this.router.navigateByUrl('/login');
                            }
                        }
                        else {
                            _this.serviDor.alertas('Atenção', 'Usuario ja cadastrado');
                        }
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    CadastroPage.prototype.pagelogin = function () {
        this.router.navigateByUrl('/login');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("nome"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CadastroPage.prototype, "nome", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("celular"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CadastroPage.prototype, "celular", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("email"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CadastroPage.prototype, "email", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("senha"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CadastroPage.prototype, "senha", void 0);
    CadastroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cadastro',
            template: __webpack_require__(/*! ./cadastro.page.html */ "./src/app/cadastro/cadastro.page.html"),
            styles: [__webpack_require__(/*! ./cadastro.page.scss */ "./src/app/cadastro/cadastro.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _providers_service__WEBPACK_IMPORTED_MODULE_3__["ProvidersService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_7__["Keyboard"]])
    ], CadastroPage);
    return CadastroPage;
}());



/***/ })

}]);
//# sourceMappingURL=cadastro-cadastro-module.js.map