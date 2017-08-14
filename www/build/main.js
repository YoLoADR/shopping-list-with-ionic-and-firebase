webpackJsonp([0],{

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_shopping_add_shopping__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_shopping_item_edit_shopping_item__ = __webpack_require__(395);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShoppingListPage = (function () {
    function ShoppingListPage(navCtrl, navParams, angularFireDatabase, actionSheetController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.angularFireDatabase = angularFireDatabase;
        this.actionSheetController = actionSheetController;
        /**
         * shoppingListRef pointe vers Firbase -> 'shopping-list'.
         * Pas seulement pour lire mais aussi pour ecrire (via .push)
         */
        this.shoppingListRef$ = this.angularFireDatabase.list('shopping-list');
        this.shoppingListRef$.subscribe(function (data) { return console.log("data", data); });
    }
    /**
     * A la section affiche différentes option grace à ActionSheet
     * 1. Edit un item
     * 2. Supprime un item
     * 3. Cancel selection
     *
     * @memberof ShoppingListPage
     */
    ShoppingListPage.prototype.selectShoppingItem = function (shoppingItem) {
        var _this = this;
        this.actionSheetController.create({
            title: "" + shoppingItem.itemName,
            buttons: [
                {
                    text: 'Edit',
                    handler: function () {
                        // Send the user to EditShoppingItemPage et la clés en paramètre
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__edit_shopping_item_edit_shopping_item__["a" /* EditShoppingItemPage */], { shoppingItemId: shoppingItem.$key });
                        /**
                         * Navigation
                         *  ['ShoppingListPage',
                         * 'EditShoppingItemPage',
                         *  {shoppingItemId : -KrUL2bRVBPeMAkBBtlV}]
                         */
                    }
                },
                {
                    text: 'Delete',
                    role: 'destructive',
                    handler: function () {
                        // Supprime le shoppingItem courant grace à la clés passé en paramètre
                        _this.shoppingListRef$.remove(shoppingItem.$key);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        // Send the user to EditShoppingItemPage et la clés en paramètre
                        console.log("L'utilisateur a selectionner le bouton cancel");
                    }
                },
            ]
        }).present();
    };
    ShoppingListPage.prototype.navigateToAddShoppingPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_shopping_add_shopping__["a" /* AddShoppingPage */]);
    };
    return ShoppingListPage;
}());
ShoppingListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-shopping-list',template:/*ion-inline-start:"/Users/yatticot/Documents/laboratoire/shopping-list-with-ionic-and-firebase/src/pages/shopping-list/shopping-list.html"*/'<!--\n  Generated template for the ShoppingListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Shopping List</ion-title>\n    <!--attribut "end"  pour qu\'il se trouve à la fin de la navbar-->\n    <ion-buttons end>\n      <button ion-button icon-only (click)="navigateToAddShoppingPage()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <!-- (+) Comme c\'est un observable on a besoin de mettre le "async" pipe-->\n    <ion-item *ngFor="let item of shoppingListRef$ | async" (click)="selectShoppingItem(item)">\n      <h2> Item Name : {{item.itemName}}</h2>\n      <h3> Amount  : {{item.itemNumber}}</h3>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/yatticot/Documents/laboratoire/shopping-list-with-ionic-and-firebase/src/pages/shopping-list/shopping-list.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _d || Object])
], ShoppingListPage);

var _a, _b, _c, _d;
//# sourceMappingURL=shopping-list.js.map

/***/ }),

/***/ 145:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 145;

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 186;

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddShoppingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shopping_list_shopping_list__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//(!) c'est pas le même import AngularFireDatabaseModule - AngularFireDatabase


var AddShoppingPage = (function () {
    function AddShoppingPage(navCtrl, navParams, angularFireDatabase) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.angularFireDatabase = angularFireDatabase;
        this.shoppingItem = {};
        this.shoppingItemRef$ = this.angularFireDatabase.list('shopping-list');
    }
    AddShoppingPage.prototype.addShoppingItem = function (shoppingItem) {
        /**
         * Crée un objet anonyme et on s'assure de convertir itemNumber en type number
         * Et le Push dans notre Firebase database à l'interieure de 'shopping-list' node.
         */
        this.shoppingItemRef$.push({
            itemName: this.shoppingItem.itemName,
            itemNumber: Number(this.shoppingItem.itemNumber)
        });
        //Reset notre shoppingItem
        this.shoppingItem = {};
        //Nous redirige vers notre page de liste de shopping
        this.navCtrl.pop(__WEBPACK_IMPORTED_MODULE_3__shopping_list_shopping_list__["a" /* ShoppingListPage */]);
    };
    return AddShoppingPage;
}());
AddShoppingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-add-shopping',template:/*ion-inline-start:"/Users/yatticot/Documents/laboratoire/shopping-list-with-ionic-and-firebase/src/pages/add-shopping/add-shopping.html"*/'<!--\n  Generated template for the AddShoppingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Add Shopping</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item>\n    <!--floating permet d\'ajouter un effet sympa sur les labels-->\n    <ion-label floating> Item Name </ion-label>\n    <ion-input type="text" [(ngModel)]="shoppingItem.itemName"></ion-input>\n  </ion-item>\n\n   <ion-item>\n    <ion-label floating> Number </ion-label>\n    <ion-input type="number" [(ngModel)]="shoppingItem.itemNumber"></ion-input>\n  </ion-item>\n\n  <button ion-button block (click)="addShoppingItem(shoppingItem)">Add item</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/yatticot/Documents/laboratoire/shopping-list-with-ionic-and-firebase/src/pages/add-shopping/add-shopping.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
], AddShoppingPage);

//# sourceMappingURL=add-shopping.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(284);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__firebase_credentials__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_shopping_list_shopping_list__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_add_shopping_add_shopping__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_edit_shopping_item_edit_shopping_item__ = __webpack_require__(395);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_shopping_list_shopping_list__["a" /* ShoppingListPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_add_shopping_add_shopping__["a" /* AddShoppingPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_edit_shopping_item_edit_shopping_item__["a" /* EditShoppingItemPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */]),
            // Initialise Angularfire avec le identifiant de connexion du dashborad de Firebase
            __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_7__firebase_credentials__["a" /* FIREBASE_CREDENTIALS */]),
            // Initialise le module pour interragir avec la base de données AngularFireDatabaseModule
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["b" /* AngularFireDatabaseModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_shopping_list_shopping_list__["a" /* ShoppingListPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_add_shopping_add_shopping__["a" /* AddShoppingPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_edit_shopping_item_edit_shopping_item__["a" /* EditShoppingItemPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CREDENTIALS; });
var FIREBASE_CREDENTIALS = {
    apiKey: "AIzaSyA-PBP4YP6VC_ABkowg0KnjuerwOhjHGt0",
    authDomain: "fir-crud-b3737.firebaseapp.com",
    databaseURL: "https://fir-crud-b3737.firebaseio.com",
    projectId: "fir-crud-b3737",
    storageBucket: "fir-crud-b3737.appspot.com",
    messagingSenderId: "987557318967"
};
//# sourceMappingURL=firebase.credentials.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_shopping_list_shopping_list__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_shopping_list_shopping_list__["a" /* ShoppingListPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/yatticot/Documents/laboratoire/shopping-list-with-ionic-and-firebase/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/yatticot/Documents/laboratoire/shopping-list-with-ionic-and-firebase/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditShoppingItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shopping_list_shopping_list__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditShoppingItemPage = (function () {
    function EditShoppingItemPage(navCtrl, navParams, angularFireDatabase) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.angularFireDatabase = angularFireDatabase;
        this.shoppingItem = {};
        // Caputre l'id du shoppingItem dans le NavParameter => shoppingItemId
        var shoppingItemId = this.navParams.get('shoppingItemId');
        console.log("shoppingItemId", shoppingItemId);
        this.shoppingItemRef$ = this.angularFireDatabase.object("shopping-list/" + shoppingItemId);
        this.shoppingItemSubscription = this.shoppingItemRef$.subscribe(function (shoppingItem) { return _this.shoppingItem = shoppingItem; });
    }
    EditShoppingItemPage.prototype.editShoppingItem = function (shoppingItem) {
        //Mis à jour de notre item
        this.shoppingItemRef$.update(shoppingItem);
        //Reset notre shoppingItem
        this.shoppingItem = {};
        //Nous redirige vers notre page de liste de shopping
        this.navCtrl.pop(__WEBPACK_IMPORTED_MODULE_3__shopping_list_shopping_list__["a" /* ShoppingListPage */]);
    };
    EditShoppingItemPage.prototype.ionViewWillLeave = function () {
        // Unsubscribe à l'observable quand on quitte la page
        this.shoppingItemSubscription.unsubscribe();
    };
    return EditShoppingItemPage;
}());
EditShoppingItemPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-edit-shopping-item',template:/*ion-inline-start:"/Users/yatticot/Documents/laboratoire/shopping-list-with-ionic-and-firebase/src/pages/edit-shopping-item/edit-shopping-item.html"*/'<!--\n  Generated template for the EditShoppingItemPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{shoppingItem.itemName}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    <!--floating permet d\'ajouter un effet sympa sur les labels-->\n    <ion-label floating> Item Name </ion-label>\n    <ion-input type="text" [(ngModel)]="shoppingItem.itemName"></ion-input>\n  </ion-item>\n\n   <ion-item>\n    <ion-label floating> Number </ion-label>\n    <ion-input type="number" [(ngModel)]="shoppingItem.itemNumber"></ion-input>\n  </ion-item>\n\n  <button ion-button block (click)="editShoppingItem(shoppingItem)">Edit item</button>\n</ion-content>\n'/*ion-inline-end:"/Users/yatticot/Documents/laboratoire/shopping-list-with-ionic-and-firebase/src/pages/edit-shopping-item/edit-shopping-item.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _c || Object])
], EditShoppingItemPage);

var _a, _b, _c;
//# sourceMappingURL=edit-shopping-item.js.map

/***/ })

},[267]);
//# sourceMappingURL=main.js.map