webpackJsonp([1,4],{

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(179);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import 'rxjs/add/operator/map';

var ProductService = (function () {
    function ProductService(_db) {
        this._db = _db;
    }
    ProductService.prototype.getProducts = function () {
        return this._db.list('/products')
            .catch(function () {
            // tslint:disable-next-line
            console.log("Can't load produvts");
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of([]);
        });
    };
    ProductService.prototype.getProduct = function (id) {
        return this._db.object("/products/" + id)
            .catch(function () {
            // tslint:disable-next-line
            console.log("Can't load products");
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of([]);
        });
    };
    ProductService.prototype.addProduct = function (product) {
        return this._db.list("/products").push(product)
            .catch(function () {
            // tslint:disable-next-line
            console.log("Can't add produvts");
        });
    };
    ProductService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object])
    ], ProductService);
    return ProductService;
    var _a;
}());

//# sourceMappingURL=product.service.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_create_product_create_component__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(53);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AdminModule = (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__product_create_product_create_component__["a" /* ProductCreateComponent */] }
                ])
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__product_create_product_create_component__["a" /* ProductCreateComponent */]
            ]
        })
    ], AdminModule);
    return AdminModule;
}());

//# sourceMappingURL=admin.module.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_actions_cart__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartComponent = (function () {
    function CartComponent(_store, _cartActions) {
        this._store = _store;
        this._cartActions = _cartActions;
        this.sum = 0;
        this.cart = _store.select('cart');
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._store.dispatch(this._cartActions.loadCartItems());
        this._store.select('cart').subscribe(function (cart) { return _this.calculateTotal(cart); });
    };
    CartComponent.prototype.removeItem = function (product) {
        this._store.dispatch(this._cartActions.deleteItem(product));
    };
    CartComponent.prototype.reduceItem = function (product) {
        this._store.dispatch(this._cartActions.reduceItem(product));
    };
    CartComponent.prototype.increaseItem = function (product) {
        this._store.dispatch(this._cartActions.increaseItem(product));
    };
    CartComponent.prototype.calculateTotal = function (cart) {
        var _this = this;
        this.sum = 0;
        cart.forEach(function (item) {
            _this.sum += item.amount * item.price;
        });
    };
    CartComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'app-cart',
            template: __webpack_require__(430),
            styles: [__webpack_require__(375)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__common_actions_cart__["a" /* CartActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__common_actions_cart__["a" /* CartActions */]) === "function" && _b || Object])
    ], CartComponent);
    return CartComponent;
    var _a, _b;
}());

//# sourceMappingURL=cart.component.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormDetailsComponent = (function () {
    function FormDetailsComponent(_fb) {
        this._fb = _fb;
        this.details = this._fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            phone: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            address: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required]]
        });
    }
    FormDetailsComponent.prototype.createOrder = function (order) {
        console.log(order.value);
    };
    FormDetailsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-form-details',
            template: __webpack_require__(432),
            styles: [__webpack_require__(377)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormBuilder */]) === "function" && _a || Object])
    ], FormDetailsComponent);
    return FormDetailsComponent;
    var _a;
}());

//# sourceMappingURL=form-details.component.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_actions_cart__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_product_service__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(117);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductDetailComponent = (function () {
    function ProductDetailComponent(route, _productService, _store, _cartActions) {
        this.route = route;
        this._productService = _productService;
        this._store = _store;
        this._cartActions = _cartActions;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this._productService.getProduct(params['id']); })
            .subscribe(function (product) {
            _this.product = product;
        });
    };
    ProductDetailComponent.prototype.addProduct = function (product) {
        this._store.dispatch(this._cartActions.addToCart(product));
    };
    ProductDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'app-product-detail',
            template: __webpack_require__(434),
            styles: [__webpack_require__(379)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_product_service__["a" /* ProductService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__common_actions_cart__["a" /* CartActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__common_actions_cart__["a" /* CartActions */]) === "function" && _d || Object])
    ], ProductDetailComponent);
    return ProductDetailComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=product-detail.component.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_actions_cart__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_actions_product__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductsComponent = (function () {
    function ProductsComponent(_store, _productActions, _cartActions) {
        this._store = _store;
        this._productActions = _productActions;
        this._cartActions = _cartActions;
        this.products = _store.select('product');
    }
    ProductsComponent.prototype.ngOnInit = function () {
        this._store.dispatch(this._productActions.loadProducts());
    };
    ProductsComponent.prototype.addProduct = function (product) {
        this._store.dispatch(this._cartActions.addToCart(product));
    };
    ProductsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'app-products',
            template: __webpack_require__(435),
            styles: [__webpack_require__(380)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__common_actions_product__["a" /* ProductActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common_actions_product__["a" /* ProductActions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__common_actions_cart__["a" /* CartActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__common_actions_cart__["a" /* CartActions */]) === "function" && _c || Object])
    ], ProductsComponent);
    return ProductsComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=products.component.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UtilsService = (function () {
    function UtilsService() {
        this.messages$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
    }
    UtilsService.prototype.onMessage = function () {
        return this.messages$.asObservable();
    };
    UtilsService.prototype.pushMessage = function (msg) {
        this.messages$.next(msg);
    };
    UtilsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UtilsService);
    return UtilsService;
}());

//# sourceMappingURL=utils.service.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    domain: '',
    firebase: {
        apiKey: 'AIzaSyBRZUbSWiocFly2RcEMp8ezFszk4RtT3ss',
        authDomain: 'ngx-store-1b953.firebaseapp.com',
        databaseURL: 'https://ngx-store-1b953.firebaseio.com',
        projectId: 'ngx-store-1b953',
        storageBucket: '',
        messagingSenderId: '49682187492'
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/admin/admin.module": [
		166
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 268;


/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(172);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_actions_product__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductCreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductCreateComponent = (function () {
    function ProductCreateComponent(_fb, _store, _productActions) {
        this._fb = _fb;
        this._store = _store;
        this._productActions = _productActions;
        this.types = [
            { value: 'sandwich' },
            { value: 'dessert' },
            { value: 'drink' }
        ];
    }
    ProductCreateComponent.prototype.ngOnInit = function () {
        this.product = this._fb.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            description: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            photo: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            price: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            type: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]]
        });
    };
    ProductCreateComponent.prototype.submit = function (product) {
        this._store.dispatch(this._productActions.addProduct(product));
    };
    ProductCreateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'app-product-create',
            template: __webpack_require__(428),
            styles: [__webpack_require__(373)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__common_actions_product__["a" /* ProductActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__common_actions_product__["a" /* ProductActions */]) === "function" && _c || Object])
    ], ProductCreateComponent);
    return ProductCreateComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=product-create.component.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_utils_service__ = __webpack_require__(171);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(_utilsService, snackBar, _fb) {
        this._utilsService = _utilsService;
        this.snackBar = snackBar;
        this._fb = _fb;
        this.details = this._fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            phone: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            address: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]]
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._utilsService.onMessage().subscribe(function (msg) {
            _this._showMessageBar(msg);
        });
    };
    AppComponent.prototype.createOrder = function (order) {
        console.log(order.value);
    };
    AppComponent.prototype._showMessageBar = function (msg) {
        this.snackBar.open(msg, '', {
            duration: 2000,
        });
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(429),
            styles: [__webpack_require__(374)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_utils_service__["a" /* UtilsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_utils_service__["a" /* UtilsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdSnackBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormBuilder */]) === "function" && _c || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__admin_admin_module__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routes__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_flex_layout__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_hammerjs__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__header_header_component__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__form_details_form_details_component__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__products_products_component__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__product_detail_product_detail_component__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__cart_cart_component__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__summary_summary_component__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__footer_footer_component__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_services_product_service__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_services_utils_service__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__environments_environment__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__config__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_pipes_sort_pipe__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shared_pipes_search_pipe__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__shared_pipes_category_pipe__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ngrx_store__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ngrx_effects__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__common_reducers__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__common_effects_product__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__common_actions_cart__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__common_actions_product__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_angularfire2__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_angularfire2_database__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_angularfire2_auth__ = __webpack_require__(313);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_23__shared_pipes_sort_pipe__["a" /* SortPipe */],
                __WEBPACK_IMPORTED_MODULE_13__form_details_form_details_component__["a" /* FormDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__summary_summary_component__["a" /* SummaryComponent */],
                __WEBPACK_IMPORTED_MODULE_24__shared_pipes_search_pipe__["a" /* SearchPipe */],
                __WEBPACK_IMPORTED_MODULE_14__products_products_component__["a" /* ProductsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__cart_cart_component__["a" /* CartComponent */],
                __WEBPACK_IMPORTED_MODULE_25__shared_pipes_category_pipe__["a" /* CategoryPipe */],
                __WEBPACK_IMPORTED_MODULE_15__product_detail_product_detail_component__["a" /* ProductDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_18__footer_footer_component__["a" /* FooterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_routes__["a" /* routes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_flex_layout__["FlexLayoutModule"],
                __WEBPACK_IMPORTED_MODULE_26__ngrx_store__["a" /* StoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_28__common_reducers__["a" /* reducers */], {
                    initialState: {
                        auth: {
                            loggedIn: true
                        }
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_27__ngrx_effects__["a" /* EffectsModule */].forRoot([__WEBPACK_IMPORTED_MODULE_29__common_effects_product__["a" /* ProductEffects */]]),
                __WEBPACK_IMPORTED_MODULE_0__admin_admin_module__["AdminModule"],
                __WEBPACK_IMPORTED_MODULE_32_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_21__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_33_angularfire2_database__["a" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_34_angularfire2_auth__["a" /* AngularFireAuthModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_19__shared_services_product_service__["a" /* ProductService */],
                __WEBPACK_IMPORTED_MODULE_20__shared_services_utils_service__["a" /* UtilsService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_22__config__["a" /* DOMAIN */],
                    useValue: __WEBPACK_IMPORTED_MODULE_21__environments_environment__["a" /* environment */].domain,
                },
                __WEBPACK_IMPORTED_MODULE_30__common_actions_cart__["a" /* CartActions */],
                __WEBPACK_IMPORTED_MODULE_31__common_actions_product__["a" /* ProductActions */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__product_detail_product_detail_component__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__products_products_component__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_details_form_details_component__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart_component__ = __webpack_require__(167);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });




var routes = [
    { path: '', redirectTo: 'products', pathMatch: 'full' },
    { path: 'products', component: __WEBPACK_IMPORTED_MODULE_1__products_products_component__["a" /* ProductsComponent */] },
    { path: 'product/:id', component: __WEBPACK_IMPORTED_MODULE_0__product_detail_product_detail_component__["a" /* ProductDetailComponent */] },
    { path: 'cart', component: __WEBPACK_IMPORTED_MODULE_3__cart_cart_component__["a" /* CartComponent */] },
    { path: 'form', component: __WEBPACK_IMPORTED_MODULE_2__form_details_form_details_component__["a" /* FormDetailsComponent */] },
    {
        path: 'admin/product-create',
        loadChildren: 'app/admin/admin.module#AdminModule'
    },
    { path: '**', redirectTo: 'products' }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_product_service__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_product__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_delay__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ProductEffects = (function () {
    function ProductEffects(actions$, _productActions, _productService, _mdSnackBar) {
        var _this = this;
        this.actions$ = actions$;
        this._productActions = _productActions;
        this._productService = _productService;
        this._mdSnackBar = _mdSnackBar;
        this.loadProducts$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_2__actions_product__["a" /* ProductActions */].LOAD_PRODUCTS)
            .switchMap(function () { return _this._productService.getProducts(); })
            .map(function (products) { return _this._productActions.loadProductsSuccess(products); });
        this.getProduct$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_2__actions_product__["a" /* ProductActions */].GET_PRODUCT)
            .map(function (action) { return action.payload; })
            .switchMap(function (id) { return _this._productService.getProduct(id); })
            .map(function (product) { return _this._productActions.getProductSuccess(product); });
        this.addProduct$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_2__actions_product__["a" /* ProductActions */].ADD_PRODUCT)
            .map(function (action) { return action.payload; })
            .switchMap(function (product) { return _this._productService.addProduct(product); })
            .map(function (product) { return _this._productActions.addProductSuccess(product); });
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"]) === "function" && _a || Object)
    ], ProductEffects.prototype, "loadProducts$", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"]) === "function" && _b || Object)
    ], ProductEffects.prototype, "getProduct$", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"]) === "function" && _c || Object)
    ], ProductEffects.prototype, "addProduct$", void 0);
    ProductEffects = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["c" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["c" /* Actions */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__actions_product__["a" /* ProductActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__actions_product__["a" /* ProductActions */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_product_service__["a" /* ProductService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_material__["b" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_material__["b" /* MdSnackBar */]) === "function" && _g || Object])
    ], ProductEffects);
    return ProductEffects;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_cart__ = __webpack_require__(60);
/* harmony export (immutable) */ __webpack_exports__["a"] = cartReducer;
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = [];
function cartReducer(products, action) {
    if (products === void 0) { products = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_cart__["a" /* CartActions */].LOAD_CART_ITEMS_SUCCESS: {
            return action.payload;
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_cart__["a" /* CartActions */].GET_CART_ITEM_SUCCESS: {
            return action.payload;
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_cart__["a" /* CartActions */].ADD_TO_CART: {
            var itemIndex = products.findIndex(function (product) { return product.id === action.payload.id; });
            if (itemIndex !== -1) {
                var updatedItem = __assign({}, action.payload, { amount: products[itemIndex].amount + 1 });
                products.splice(itemIndex, 1, updatedItem);
                return products.slice();
            }
            return products.concat(__assign({}, action.payload, { amount: 1 }));
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_cart__["a" /* CartActions */].DELETE_ITEM: {
            var itemIndex = products.findIndex(function (product) { return product.id === action.payload.id; });
            products.splice(itemIndex, 1);
            return products.slice();
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_cart__["a" /* CartActions */].REDUCE_ITEM: {
            var itemIndex = products.findIndex(function (product) { return product.id === action.payload.id; });
            if (action.payload.amount === 0) {
                // products.splice(itemIndex, 1);
                return products.slice();
            }
            var updatedItem = __assign({}, action.payload, { amount: action.payload.amount - 1 });
            products.splice(itemIndex, 1, updatedItem);
            return products.slice();
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_cart__["a" /* CartActions */].INCREASE_ITEM: {
            var itemIndex = products.findIndex(function (product) { return product.id === action.payload.id; });
            var updatedItem = __assign({}, action.payload, { amount: action.payload.amount + 1 });
            products.splice(itemIndex, 1, updatedItem);
            return products.slice();
        }
        default:
            return products;
    }
}
//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__product__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cart__ = __webpack_require__(301);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducers; });


// tslint:disable-next-line
var reducers = {
    product: __WEBPACK_IMPORTED_MODULE_0__product__["a" /* productReducer */],
    cart: __WEBPACK_IMPORTED_MODULE_1__cart__["a" /* cartReducer */]
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_product__ = __webpack_require__(61);
/* harmony export (immutable) */ __webpack_exports__["a"] = productReducer;

var initialState = [];
function productReducer(state, action) {
    if (state === void 0) { state = initialState; }
    console.log(action.type);
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_product__["a" /* ProductActions */].LOAD_PRODUCTS_SUCCESS: {
            return action.payload;
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_product__["a" /* ProductActions */].GET_PRODUCT_SUCCESS: {
            return action.payload;
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_product__["a" /* ProductActions */].ADD_PRODUCT_SUCCESS: {
            return state.concat([action.payload]);
        }
        default:
            return state;
    }
}
//# sourceMappingURL=product.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DOMAIN; });

var DOMAIN = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* InjectionToken */]('domain');
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__(431),
            styles: [__webpack_require__(376)]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(_store) {
        this._store = _store;
        this.amount = 0;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._store.select('cart').subscribe(function (product) { return _this.amount = product.length; });
    };
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__(433),
            styles: [__webpack_require__(378)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _a || Object])
    ], HeaderComponent);
    return HeaderComponent;
    var _a;
}());

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CategoryPipe = (function () {
    function CategoryPipe() {
    }
    CategoryPipe.prototype.transform = function (products) {
        //  return  [...new Set(products.map(item => item.type)) as any]; why???
        var types = products
            .map(function (item) { return item.type; })
            .filter(function (value, index, self) { return self.indexOf(value) === index; });
        types.push('all');
        types.sort();
        return types;
    };
    CategoryPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* Pipe */])({
            name: 'category'
        })
    ], CategoryPipe);
    return CategoryPipe;
}());

//# sourceMappingURL=category.pipe.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (products, queryString) {
        if (!queryString) {
            return products;
        }
        return products.filter(function (product) {
            return product.title.toLowerCase().indexOf(queryString.toLowerCase()) !== -1;
        });
    };
    SearchPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* Pipe */])({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
}());

//# sourceMappingURL=search.pipe.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortPipe = (function () {
    function SortPipe() {
    }
    SortPipe.prototype.transform = function (products, queryString) {
        if (!queryString || queryString === 'all') {
            return products;
        }
        return products.filter(function (product) {
            return product.type.toLowerCase().indexOf(queryString.toLowerCase()) !== -1;
        });
    };
    SortPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* Pipe */])({
            name: 'sort'
        })
    ], SortPipe);
    return SortPipe;
}());

//# sourceMappingURL=sort.pipe.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SummaryComponent = (function () {
    function SummaryComponent() {
    }
    SummaryComponent.prototype.ngOnInit = function () {
    };
    SummaryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-summary',
            template: __webpack_require__(436),
            styles: [__webpack_require__(381)]
        }),
        __metadata("design:paramtypes", [])
    ], SummaryComponent);
    return SummaryComponent;
}());

//# sourceMappingURL=summary.component.js.map

/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, "md-input-container {\n  width: 100%\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, ".wrapper {\n  min-height: 100vh;\n}\n.content {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, ".img {\n  width: 200px\n}\n.detail {\n  text-align: center;\n  /*height: 100vh;*/\n  height:100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, ".img {\n  width: 80%\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 428:
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <form (ngSubmit)=\"submit(product.value)\" [formGroup]=\"product\">\n    <h2>Create new product</h2>\n    <div fxLayout='column' fxLayoutAlign='center' class=\"form-group\">\n\n      <md-input-container>\n        <input mdInput type=\"text\" placeholder=\"title\" #title formControlName=\"title\" >\n        <md-hint align=\"end\" *ngIf=\"product.controls['title'].errors && product.controls['title'].touched\">\n          You can't leave this empty.\n        </md-hint>\n      </md-input-container>\n\n      <md-input-container>\n        <input mdInput type=\"text\" placeholder=\"description\" #description formControlName=\"description\" >\n        <md-hint align=\"end\" *ngIf=\"product.controls['description'].errors && product.controls['description'].touched\">\n          You can't leave this empty.\n        </md-hint>\n      </md-input-container>\n\n      <md-input-container>\n        <input mdInput type=\"text\" placeholder=\"price\" #price formControlName=\"price\" >\n        <md-hint align=\"end\" *ngIf=\"product.controls['price'].errors && product.controls['price'].touched\">\n          You can't leave this empty.\n        </md-hint>\n      </md-input-container>\n\n      <md-input-container>\n        <input mdInput type=\"text\" placeholder=\"photo\" #photo formControlName=\"photo\" >\n        <md-hint align=\"end\" *ngIf=\"product.controls['photo'].errors && product.controls['photo'].touched\">\n          You can't leave this empty.\n        </md-hint>\n      </md-input-container>\n\n      <md-select placeholder=\"type\" formControlName=\"type\">\n        <md-option *ngFor=\"let type of types\" [value]=\"type.value\">\n          {{type.value}}\n        </md-option>\n      </md-select>\n\n    </div>\n    <button md-button [disabled]=\"product.invalid\">Ok</button>\n  </form>\n</md-card>\n"

/***/ }),

/***/ 429:
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" class=\"wrapper\">\n  <app-header></app-header>\n  <div fxLayout='row' fxLayoutAlign=\"space-between\" class=\"content\">\n    <div fxFlex=\"100\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n  <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ 430:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"cart\">\n  <md-card *ngFor=\"let item of cart | async\" fxLayout=\"row\">\n    <md-card-title fxFlex=\"60\">{{item.title}}</md-card-title>\n    <a fxFlex=\"5\" (click)=\"reduceItem(item)\"><i class=\"fa fa-minus\" aria-hidden=\"true\"></i></a>\n    <md-card-title fxFlex=\"5\">{{item.amount}}</md-card-title>\n    <a fxFlex=\"15\" (click)=\"increaseItem(item)\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></a>\n    <md-card-title fxFlex=\"40\">{{item.price | currency}}</md-card-title>\n    <a fxFlex=\"5\" (click)=\"removeItem(item)\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></a>\n  </md-card>\n  <md-card  fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <button md-raised-button color=\"accent\" [routerLink]=\"['/form']\">NEXT</button>\n    <button md-button>Total: {{sum}}</button>\n  </md-card>\n</div>\n"

/***/ }),

/***/ 431:
/***/ (function(module, exports) {

module.exports = "<md-card fxLayout='row' fxLayoutAlign=\"space-between\">\n  <div>@2017</div>\n  <nav>\n    <a><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a>\n    <a><i class=\"fa fa-vk\" aria-hidden=\"true\"></i></a>\n    <a><i class=\"fa fa-youtube\" aria-hidden=\"true\"></i></a>\n  </nav>\n</md-card>\n"

/***/ }),

/***/ 432:
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <form (ngSubmit)=\"createOrder($event)\" [formGroup]=\"details\">\n    <h2>Enter your details</h2>\n    <div fxLayout='row' fxLayoutAlign=\"space-between\" class=\"form-group\">\n      <md-input-container fxFlex=\"48\">\n        <input mdInput placeholder=\"Name\" #name formControlName=\"name\">\n        <md-hint align=\"end\" *ngIf=\"details.controls['name'].hasError('required') && details.controls['name'].touched\">\n          You can't leave this empty.\n        </md-hint>\n      </md-input-container>\n      <md-input-container fxFlex=\"48\">\n        <input mdInput type=\"email\" placeholder=\"Email\" #email formControlName=\"email\" >\n        <md-hint align=\"end\" *ngIf=\"details.controls['email'].errors && details.controls['email'].touched\">\n          You can't leave this empty.\n        </md-hint>\n      </md-input-container>\n    </div>\n\n    <div fxLayout='row' fxLayoutAlign=\"space-between\" class=\"form-group\">\n      <md-input-container fxFlex=\"48\">\n        <input mdInput placeholder=\"Address\" #address formControlName=\"address\">\n        <md-hint align=\"end\" *ngIf=\"details.controls['address'].errors && details.controls['address'].touched\">\n          You can't leave this empty.\n        </md-hint>\n      </md-input-container>\n      <md-input-container fxFlex=\"48\">\n        <input mdInput type=\"number\" placeholder=\"Phone\" #phone formControlName=\"phone\">\n        <md-hint align=\"end\" *ngIf=\"details.controls['phone'].errors && details.controls['phone'].touched\">\n          You can't leave this empty.\n        </md-hint>\n      </md-input-container>\n    </div>\n    <button md-button [disabled]=\"details.invalid\">Ok</button>\n  </form>\n</md-card>\n"

/***/ }),

/***/ 433:
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"accent\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" [routerLink]=\"['/products']\">\n      <md-icon><i class=\"fa fa-star\" aria-hidden=\"true\"></i></md-icon>\n      <span class=\"app-title\">Star Store</span>\n    </div>\n  <div fxFlex></div>\n  <span [routerLink]=\"['/cart']\"><i class=\"fa fa-shopping-basket\" aria-hidden=\"true\"></i> {{amount}}</span>\n</md-toolbar>\n"

/***/ }),

/***/ 434:
/***/ (function(module, exports) {

module.exports = "<md-card fxLayout=\"column\" *ngIf=\"product\" fxLayoutAlign=\"center center\" class=\"detail\">\n  <md-grid-tile-header>\n    <md-card-title>{{product.title}}</md-card-title>\n    <md-card-subtitle>{{product.price}} $</md-card-subtitle>\n    <md-card-subtitle>{{product.description}}</md-card-subtitle>\n  </md-grid-tile-header>\n  <img class=\"img\" md-card-image [src]=\"product.photo\">\n  <md-grid-tile-footer>\n    <button md-raised-button color=\"accent\" (click)=\"addProduct(product)\">BUY</button>\n  </md-grid-tile-footer>\n</md-card>\n"

/***/ }),

/***/ 435:
/***/ (function(module, exports) {

module.exports = "<md-input-container fxLayout='row' fxFlex=\"100\">\n  <input mdInput placeholder=\"Search\" #search>\n</md-input-container>\n<md-tab-group md-dynamic-height md-border-bottom md-autoselect>\n  <md-tab *ngFor=\"let tab of products | async | category\" label=\"{{tab}}\">\n    <md-grid-list cols=\"3\">\n      <md-grid-tile rowspan=\"1\" colspan=\"1\" *ngFor=\"let  product of products | async | sort: tab | search: search.value\">\n        <md-grid-tile-header>{{product.title}}</md-grid-tile-header>\n        <img class=\"img\"  md-card-image [src]=\"product.photo\">\n        <md-grid-tile-footer  fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n          <button md-raised-button color=\"accent\" (click)=\"addProduct(product)\">BUY</button>\n          <button md-raised-button color=\"primary\" [routerLink]=\"['/product', product.id]\">INFO</button>\n        </md-grid-tile-footer>\n      </md-grid-tile>\n    </md-grid-list>\n  </md-tab>\n</md-tab-group>\n"

/***/ }),

/***/ 436:
/***/ (function(module, exports) {

module.exports = "<p>\n  summary works!\n</p>\n"

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartActions; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartActions = (function () {
    var CartActions = CartActions_1 = function CartActions(_mdSnackBar) {
        this._mdSnackBar = _mdSnackBar;
    };
    CartActions.prototype.loadCartItems = function () {
        return {
            type: CartActions_1.LOAD_CART_ITEMS
        };
    };
    CartActions.prototype.loadCartItemsSuccess = function (products) {
        return {
            type: CartActions_1.LOAD_CART_ITEMS_SUCCESS,
            payload: products
        };
    };
    CartActions.prototype.getCartItem = function (id) {
        return {
            type: CartActions_1.GET_CART_ITEM,
            payload: id
        };
    };
    CartActions.prototype.getCartItemSuccess = function (product) {
        return {
            type: CartActions_1.GET_CART_ITEM_SUCCESS,
            payload: product
        };
    };
    CartActions.prototype.addToCart = function (product) {
        this._mdSnackBar.open('+1', 'x', { duration: 2000 });
        return {
            type: CartActions_1.ADD_TO_CART,
            payload: product
        };
    };
    CartActions.prototype.deleteItem = function (product) {
        this._mdSnackBar.open('Item was deleted from cart', 'x', { duration: 2000 });
        return {
            type: CartActions_1.DELETE_ITEM,
            payload: product
        };
    };
    CartActions.prototype.reduceItem = function (product) {
        return {
            type: CartActions_1.REDUCE_ITEM,
            payload: product
        };
    };
    CartActions.prototype.increaseItem = function (product) {
        return {
            type: CartActions_1.INCREASE_ITEM,
            payload: product
        };
    };
    // tslint:disable-next-line
    CartActions.LOAD_CART_ITEMS = '[Cart] Load Cart Items';
    // tslint:disable-next-line
    CartActions.LOAD_CART_ITEMS_SUCCESS = '[Cart] Load Cart Items Success';
    // tslint:disable-next-line
    CartActions.GET_CART_ITEM = '[Cart] Load Cart Item';
    // tslint:disable-next-line
    CartActions.GET_CART_ITEM_SUCCESS = '[Cart] Load Cart Item Success';
    // tslint:disable-next-line
    CartActions.ADD_TO_CART = '[Cart] Add Product To Cart';
    // tslint:disable-next-line
    CartActions.DELETE_ITEM = '[Cart] Delete Item';
    // tslint:disable-next-line
    CartActions.REDUCE_ITEM = '[Cart] Reduce Item';
    // tslint:disable-next-line
    CartActions.INCREASE_ITEM = '[Cart] Increase Item';
    CartActions = CartActions_1 = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_material__["b" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_material__["b" /* MdSnackBar */]) === "function" && _a || Object])
    ], CartActions);
    return CartActions;
    var CartActions_1, _a;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(53);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductActions; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// TODO: invastigate where i can send notification
var ProductActions = (function () {
    var ProductActions = ProductActions_1 = function ProductActions(_mdSnackBar) {
        this._mdSnackBar = _mdSnackBar;
    };
    ProductActions.prototype.loadProducts = function () {
        return {
            type: ProductActions_1.LOAD_PRODUCTS
        };
    };
    ProductActions.prototype.loadProductsSuccess = function (products) {
        this._mdSnackBar.open('Products were loaded', '', { duration: 3000 });
        return {
            type: ProductActions_1.LOAD_PRODUCTS_SUCCESS,
            payload: products
        };
    };
    ProductActions.prototype.getProduct = function (id) {
        return {
            type: ProductActions_1.GET_PRODUCT,
            payload: id
        };
    };
    ProductActions.prototype.getProductSuccess = function (product) {
        return {
            type: ProductActions_1.GET_PRODUCT_SUCCESS,
            payload: product
        };
    };
    ProductActions.prototype.addProduct = function (product) {
        return {
            type: ProductActions_1.ADD_PRODUCT,
            payload: product
        };
    };
    ProductActions.prototype.addProductSuccess = function (product) {
        this._mdSnackBar.open('Products were loaded', '', { duration: 3000 });
        return {
            type: ProductActions_1.ADD_PRODUCT_SUCCESS,
            payload: product
        };
    };
    // tslint:disable-next-line
    ProductActions.LOAD_PRODUCTS = '[Product] Load Products';
    // tslint:disable-next-line
    ProductActions.LOAD_PRODUCTS_SUCCESS = '[Product] Load Products Success';
    // tslint:disable-next-line
    ProductActions.GET_PRODUCT = '[Product] Get Product';
    // tslint:disable-next-line
    ProductActions.GET_PRODUCT_SUCCESS = '[Product] Get Product Success';
    // tslint:disable-next-line
    ProductActions.ADD_PRODUCT = '[Product] Add Product';
    // tslint:disable-next-line
    ProductActions.ADD_PRODUCT_SUCCESS = '[Product] Add Product Success';
    ProductActions = ProductActions_1 = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdSnackBar */]) === "function" && _a || Object])
    ], ProductActions);
    return ProductActions;
    var ProductActions_1, _a;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ 682:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(269);


/***/ })

},[682]);
//# sourceMappingURL=main.bundle.js.map