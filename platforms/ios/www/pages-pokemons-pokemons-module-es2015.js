(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pokemons-pokemons-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pokemons/pokemons.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pokemons/pokemons.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Pokemons</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div *ngSwitchCase=\"'pokes'\">\n    <ion-item>\n      <ion-label position=\"stacked\">¿Cual es el nombre del pokemon?</ion-label>\n      <ion-input [(ngModel)]=\"pokemon.name\" placeholder=\"Nombre pokemon\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"stacked\">¿Cual el primer tipo del pokemon?</ion-label>\n      <ion-input [(ngModel)]=\"pokemon.tipo1\" placeholder=\"Tipo 1\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"stacked\">¿Cual el segundo tipo del pokemon?</ion-label>\n      <ion-input [(ngModel)]=\"pokemon.tipo2\" placeholder=\"Tipo 2\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"stacked\">¿Cual es su porcentaje? (escribe solo el numero)</ion-label>\n      <ion-input [(ngModel)]=\"pokemon.porcentaje\" placeholder=\"Porcentaje\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"stacked\">La URL de la imagen</ion-label>\n      <ion-input [(ngModel)]=\"pokemon.img\" placeholder=\"https://...\"></ion-input>\n    </ion-item>\n\n    <ion-list>\n      <ion-item button *ngFor=\"let poke of pokemons\" [routerLink]=\"['/', 'pokemons', poke.id]\">\n        <ion-avatar slot=\"start\">\n          <img [src]=\"poke.img\"\n        </ion-avatar>\n\n        <ion-label>\n          <h2>{{ poke.name }}</h2>\n          <p>{{ poke.tipo1 }}</p>\n          <p>{{ poke.tipo2 }}</p>\n          <p>{{ poke.porcentaje }}</p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/pokemons/pokemons-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/pokemons/pokemons-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: PokemonsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonsPageRoutingModule", function() { return PokemonsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pokemons_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pokemons.page */ "./src/app/pages/pokemons/pokemons.page.ts");




const routes = [
    {
        path: '',
        component: _pokemons_page__WEBPACK_IMPORTED_MODULE_3__["PokemonsPage"]
    }
];
let PokemonsPageRoutingModule = class PokemonsPageRoutingModule {
};
PokemonsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PokemonsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/pokemons/pokemons.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/pokemons/pokemons.module.ts ***!
  \***************************************************/
/*! exports provided: PokemonsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonsPageModule", function() { return PokemonsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _pokemons_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pokemons-routing.module */ "./src/app/pages/pokemons/pokemons-routing.module.ts");
/* harmony import */ var _pokemons_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pokemons.page */ "./src/app/pages/pokemons/pokemons.page.ts");







let PokemonsPageModule = class PokemonsPageModule {
};
PokemonsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pokemons_routing_module__WEBPACK_IMPORTED_MODULE_5__["PokemonsPageRoutingModule"]
        ],
        declarations: [_pokemons_page__WEBPACK_IMPORTED_MODULE_6__["PokemonsPage"]]
    })
], PokemonsPageModule);



/***/ }),

/***/ "./src/app/pages/pokemons/pokemons.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/pokemons/pokemons.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Bva2Vtb25zL3Bva2Vtb25zLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/pokemons/pokemons.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/pokemons/pokemons.page.ts ***!
  \*************************************************/
/*! exports provided: PokemonsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonsPage", function() { return PokemonsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/database.service */ "./src/app/services/database.service.ts");



let PokemonsPage = class PokemonsPage {
    constructor(db) {
        this.db = db;
        this.pokemons = [];
        this.pokemon = {};
    }
    ngOnInit() {
        this.db.getDatabaseState().subscribe(ready => {
            if (ready) {
                this.db.getPokemons().subscribe(pokes => {
                    console.log('Pokes cambiados: ', pokes);
                    this.pokemons = pokes;
                });
            }
        });
    }
    addPokemon() {
        this.db.addPokemon(this.pokemon['name'], this.pokemon['tipo1'], this.pokemon['tipo2'], this.pokemon['porcentaje'], this.pokemon['img'])
            .then(_ => {
            this.pokemon = {};
        });
    }
};
PokemonsPage.ctorParameters = () => [
    { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"] }
];
PokemonsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pokemons',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./pokemons.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pokemons/pokemons.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./pokemons.page.scss */ "./src/app/pages/pokemons/pokemons.page.scss")).default]
    })
], PokemonsPage);



/***/ })

}]);
//# sourceMappingURL=pages-pokemons-pokemons-module-es2015.js.map