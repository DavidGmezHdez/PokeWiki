(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pokemon-pokemon-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pokemon/pokemon.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pokemon/pokemon.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"pokemons\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Pokemon</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"delete()\">\n        <ion-icon name=\"trash\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-item>\n      <ion-label position=\"stacked\">¿Cual es el nombre del pokemon?</ion-label>\n      <ion-input [(ngModel)]=\"pokemon.name\" placeholder=\"Nombre pokemon\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"stacked\">¿Cual el primer tipo del pokemon?</ion-label>\n      <ion-input [(ngModel)]=\"pokemon.tipo1\" placeholder=\"Tipo 1\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"stacked\">¿Cual el segundo tipo del pokemon?</ion-label>\n      <ion-input [(ngModel)]=\"pokemon.tipo2\" placeholder=\"Tipo 2\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"stacked\">¿Cual es su porcentaje? (escribe solo el numero)</ion-label>\n      <ion-input [(ngModel)]=\"pokemon.porcentaje\" placeholder=\"Porcentaje\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"stacked\">La URL de la imagen</ion-label>\n      <ion-input [(ngModel)]=\"pokemon.img\" placeholder=\"https://...\"></ion-input>\n    </ion-item>\n\n    <ion-button expand=\"block\" (click)=\"updatePokemon()\">Actualizar informacion Pokemon</ion-button>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/pokemon/pokemon-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/pokemon/pokemon-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: PokemonPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonPageRoutingModule", function() { return PokemonPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pokemon_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pokemon.page */ "./src/app/pages/pokemon/pokemon.page.ts");




const routes = [
    {
        path: '',
        component: _pokemon_page__WEBPACK_IMPORTED_MODULE_3__["PokemonPage"]
    }
];
let PokemonPageRoutingModule = class PokemonPageRoutingModule {
};
PokemonPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PokemonPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/pokemon/pokemon.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/pokemon/pokemon.module.ts ***!
  \*************************************************/
/*! exports provided: PokemonPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonPageModule", function() { return PokemonPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _pokemon_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pokemon-routing.module */ "./src/app/pages/pokemon/pokemon-routing.module.ts");
/* harmony import */ var _pokemon_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pokemon.page */ "./src/app/pages/pokemon/pokemon.page.ts");







let PokemonPageModule = class PokemonPageModule {
};
PokemonPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pokemon_routing_module__WEBPACK_IMPORTED_MODULE_5__["PokemonPageRoutingModule"]
        ],
        declarations: [_pokemon_page__WEBPACK_IMPORTED_MODULE_6__["PokemonPage"]]
    })
], PokemonPageModule);



/***/ }),

/***/ "./src/app/pages/pokemon/pokemon.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/pokemon/pokemon.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Bva2Vtb24vcG9rZW1vbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/pokemon/pokemon.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/pokemon/pokemon.page.ts ***!
  \***********************************************/
/*! exports provided: PokemonPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonPage", function() { return PokemonPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let PokemonPage = class PokemonPage {
    constructor(route, db, router, toast) {
        this.route = route;
        this.db = db;
        this.router = router;
        this.toast = toast;
        this.pokemon = null;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            let pokeID = params.get('id');
            this.db.getPokemon(pokeID).then(data => {
                this.pokemon = data;
            });
        });
    }
    delete() {
        this.db.deletePokemon(this.pokemon.id).then(() => {
            this.router.navigateByUrl('/');
        });
    }
    updatePokemon() {
        this.db.updatePokemon(this.pokemon).then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let toast = yield this.toast.create({
                message: 'Pokemon actualizado', duration: 3000
            });
            toast.present();
        }));
    }
};
PokemonPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
];
PokemonPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pokemon',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./pokemon.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pokemon/pokemon.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./pokemon.page.scss */ "./src/app/pages/pokemon/pokemon.page.scss")).default]
    })
], PokemonPage);



/***/ })

}]);
//# sourceMappingURL=pages-pokemon-pokemon-module-es2015.js.map