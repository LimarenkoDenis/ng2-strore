webpackJsonp([1,4],{

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(187);
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

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_actions_cart__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(29);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_11" /* Component */])({
            selector: 'app-cart',
            template: __webpack_require__(438),
            styles: [__webpack_require__(382)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["d" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["d" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__common_actions_cart__["a" /* CartActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__common_actions_cart__["a" /* CartActions */]) === "function" && _b || Object])
    ], CartComponent);
    return CartComponent;
    var _a, _b;
}());

//# sourceMappingURL=cart.component.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(53);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
            selector: 'app-form-details',
            template: __webpack_require__(440),
            styles: [__webpack_require__(384)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormBuilder */]) === "function" && _a || Object])
    ], FormDetailsComponent);
    return FormDetailsComponent;
    var _a;
}());

//# sourceMappingURL=form-details.component.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_actions_auth__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(53);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(_fb, _store, _authActions) {
        this._fb = _fb;
        this._store = _store;
        this._authActions = _authActions;
        this.auth = this._fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            password: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._store.select('auth').subscribe(function (data) {
            _this.message = data.message;
        });
    };
    LoginComponent.prototype.login = function (user) {
        this._store.dispatch(this._authActions.login(user));
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_11" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__(442),
            styles: [__webpack_require__(386)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["d" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["d" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__common_actions_auth__["a" /* AuthActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__common_actions_auth__["a" /* AuthActions */]) === "function" && _c || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_actions_product__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(53);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_11" /* Component */])({
            selector: 'app-product-create',
            template: __webpack_require__(443),
            styles: [__webpack_require__(387)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["d" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["d" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__common_actions_product__["a" /* ProductActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__common_actions_product__["a" /* ProductActions */]) === "function" && _c || Object])
    ], ProductCreateComponent);
    return ProductCreateComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=product-create.component.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_actions_cart__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_product_service__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(84);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_11" /* Component */])({
            selector: 'app-product-detail',
            template: __webpack_require__(444),
            styles: [__webpack_require__(388)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_product_service__["a" /* ProductService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["d" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["d" /* Store */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__common_actions_cart__["a" /* CartActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__common_actions_cart__["a" /* CartActions */]) === "function" && _d || Object])
    ], ProductDetailComponent);
    return ProductDetailComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=product-detail.component.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_actions_cart__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_actions_product__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(29);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_11" /* Component */])({
            selector: 'app-products',
            template: __webpack_require__(445),
            styles: [__webpack_require__(389)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["d" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["d" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__common_actions_product__["a" /* ProductActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common_actions_product__["a" /* ProductActions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__common_actions_cart__["a" /* CartActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__common_actions_cart__["a" /* CartActions */]) === "function" && _c || Object])
    ], ProductsComponent);
    return ProductsComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=products.component.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(86);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuardService = (function () {
    function AuthGuardService(afAuth, _router) {
        this.afAuth = afAuth;
        this._router = _router;
    }
    AuthGuardService.prototype.canActivate = function (route) {
        var _this = this;
        return this.afAuth.authState
            .take(1)
            .switchMap(function (user) {
            console.log(user);
            if (!user) {
                _this._router.navigate(['/login']);
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(false);
            }
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(true);
        });
    };
    AuthGuardService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], AuthGuardService);
    return AuthGuardService;
    var _a, _b;
}());

//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = (function () {
    function LoginService(afAuth) {
        this.afAuth = afAuth;
    }
    LoginService.prototype.login = function (data) {
        var email = data.email, password = data.password;
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].fromPromise(__WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().signInWithEmailAndPassword(email, password));
    };
    LoginService.prototype.logout = function () {
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].fromPromise(this.afAuth.auth.signOut());
    };
    LoginService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object])
    ], LoginService);
    return LoginService;
    var _a;
}());

//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(448);
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

/***/ 180:
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

/***/ 275:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 275;


/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(180);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_actions_menu__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_utils_service__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__(29);
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
    function AppComponent(_utilsService, snackBar, _fb, _store, _menuActions) {
        this._utilsService = _utilsService;
        this.snackBar = snackBar;
        this._fb = _fb;
        this._store = _store;
        this._menuActions = _menuActions;
        this.menuActive$ = _store.select('menu');
        this.details = this._fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            phone: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            address: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]]
        });
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.toogleMenu = function () {
        this._store.dispatch(this._menuActions.closeMenu());
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_11" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(437),
            styles: [__webpack_require__(381)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_utils_service__["a" /* UtilsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_utils_service__["a" /* UtilsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdSnackBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["d" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["d" /* Store */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__common_actions_menu__["a" /* MenuActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__common_actions_menu__["a" /* MenuActions */]) === "function" && _e || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routes__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_hammerjs__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__header_header_component__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__form_details_form_details_component__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__products_products_component__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__product_detail_product_detail_component__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__cart_cart_component__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__summary_summary_component__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__login_login_component__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__footer_footer_component__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__product_create_product_create_component__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_services_product_service__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_services_utils_service__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_services_login_service__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_services_auth_guard_service__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__environments_environment__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__config__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__shared_pipes_sort_pipe__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__shared_pipes_search_pipe__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__shared_pipes_category_pipe__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ngrx_store__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ngrx_effects__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__common_reducers__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__common_effects_product__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__common_effects_auth__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__common_actions_cart__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__common_actions_product__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__common_actions_menu__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__common_actions_auth__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_angularfire2__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_angularfire2_database__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_angularfire2_auth__ = __webpack_require__(86);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































// import { StoreDevtoolsModule } from '@ngrx/store-devtools';










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_26__shared_pipes_sort_pipe__["a" /* SortPipe */],
                __WEBPACK_IMPORTED_MODULE_12__form_details_form_details_component__["a" /* FormDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__summary_summary_component__["a" /* SummaryComponent */],
                __WEBPACK_IMPORTED_MODULE_27__shared_pipes_search_pipe__["a" /* SearchPipe */],
                __WEBPACK_IMPORTED_MODULE_13__products_products_component__["a" /* ProductsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__cart_cart_component__["a" /* CartComponent */],
                __WEBPACK_IMPORTED_MODULE_28__shared_pipes_category_pipe__["a" /* CategoryPipe */],
                __WEBPACK_IMPORTED_MODULE_14__product_detail_product_detail_component__["a" /* ProductDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_18__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_17__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_19__product_create_product_create_component__["a" /* ProductCreateComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_routes__["a" /* routes */]),
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["FlexLayoutModule"],
                __WEBPACK_IMPORTED_MODULE_29__ngrx_store__["a" /* StoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_31__common_reducers__["a" /* reducers */], {
                    initialState: {
                        auth: {
                            loggedIn: true
                        }
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_30__ngrx_effects__["a" /* EffectsModule */].forRoot([__WEBPACK_IMPORTED_MODULE_32__common_effects_product__["a" /* ProductEffects */], __WEBPACK_IMPORTED_MODULE_33__common_effects_auth__["a" /* AuthEffects */]]),
                // StoreDevtoolsModule.instrumentStore({
                //   maxAge: 25
                // }),
                __WEBPACK_IMPORTED_MODULE_38_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_24__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_39_angularfire2_database__["a" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_40_angularfire2_auth__["a" /* AngularFireAuthModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_20__shared_services_product_service__["a" /* ProductService */],
                __WEBPACK_IMPORTED_MODULE_21__shared_services_utils_service__["a" /* UtilsService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_25__config__["a" /* DOMAIN */],
                    useValue: __WEBPACK_IMPORTED_MODULE_24__environments_environment__["a" /* environment */].domain,
                },
                __WEBPACK_IMPORTED_MODULE_34__common_actions_cart__["a" /* CartActions */],
                __WEBPACK_IMPORTED_MODULE_35__common_actions_product__["a" /* ProductActions */],
                __WEBPACK_IMPORTED_MODULE_36__common_actions_menu__["a" /* MenuActions */],
                __WEBPACK_IMPORTED_MODULE_37__common_actions_auth__["a" /* AuthActions */],
                __WEBPACK_IMPORTED_MODULE_23__shared_services_auth_guard_service__["a" /* AuthGuardService */],
                __WEBPACK_IMPORTED_MODULE_22__shared_services_login_service__["a" /* LoginService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__product_create_product_create_component__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_guard_service__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_detail_product_detail_component__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_products_component__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__form_details_form_details_component__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_cart_component__ = __webpack_require__(171);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });







var routes = [
    { path: '', redirectTo: 'products', pathMatch: 'full' },
    { path: 'products', component: __WEBPACK_IMPORTED_MODULE_4__products_products_component__["a" /* ProductsComponent */] },
    { path: 'product/:id', component: __WEBPACK_IMPORTED_MODULE_3__product_detail_product_detail_component__["a" /* ProductDetailComponent */] },
    { path: 'cart', component: __WEBPACK_IMPORTED_MODULE_6__cart_cart_component__["a" /* CartComponent */] },
    { path: 'form', component: __WEBPACK_IMPORTED_MODULE_5__form_details_form_details_component__["a" /* FormDetailsComponent */] },
    {
        path: 'product-create',
        component: __WEBPACK_IMPORTED_MODULE_0__product_create_product_create_component__["a" /* ProductCreateComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__shared_services_auth_guard_service__["a" /* AuthGuardService */]]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */]
    },
    { path: '**', redirectTo: 'products' }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_login_service__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_auth__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AuthEffects = (function () {
    function AuthEffects(actions$, _authActions, _loginService, _router) {
        var _this = this;
        this.actions$ = actions$;
        this._authActions = _authActions;
        this._loginService = _loginService;
        this._router = _router;
        this.login$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_2__actions_auth__["a" /* AuthActions */].LOGIN)
            .map(function (action) { return action.payload; })
            .switchMap(function (data) {
            return _this._loginService.login(data)
                .map(function (user) { return _this._authActions.loginSuccess(user); })
                .do(function () { return _this._router.navigate(['/']); })
                .catch(function (err) {
                // tslint:disable-next-line
                console.log(err);
                return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].of(_this._authActions.loginFail(err));
            });
        });
        this.logout$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_2__actions_auth__["a" /* AuthActions */].LOGOUT)
            .map(function (action) { return action.payload; })
            .switchMap(function () {
            return _this._loginService.logout()
                .map(function (user) { return _this._authActions.logoutSuccess(); })
                .do(function () { return _this._router.navigate(['/']); })
                .catch(function (err) {
                // tslint:disable-next-line
                console.log(err);
                return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].of(_this._authActions.logoutFail());
            });
        });
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"]) === "function" && _a || Object)
    ], AuthEffects.prototype, "login$", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"]) === "function" && _b || Object)
    ], AuthEffects.prototype, "logout$", void 0);
    AuthEffects = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["c" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["c" /* Actions */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__actions_auth__["a" /* AuthActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__actions_auth__["a" /* AuthActions */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_login_service__["a" /* LoginService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _f || Object])
    ], AuthEffects);
    return AuthEffects;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_product_service__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_product__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_delay__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__ = __webpack_require__(146);
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

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_auth__ = __webpack_require__(61);
/* harmony export (immutable) */ __webpack_exports__["a"] = authReducer;
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

function authReducer(state, action) {
    if (state === void 0) { state = {}; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_auth__["a" /* AuthActions */].LOGIN_SUCCESS: {
            return action.payload;
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_auth__["a" /* AuthActions */].LOGIN_FAIL: {
            console.log(__assign({}, action.payload));
            return __assign({}, action.payload);
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_auth__["a" /* AuthActions */].LOGOUT_SUCCESS: {
            return false;
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_auth__["a" /* AuthActions */].LOGIOUT_FAIL: {
            return state;
        }
        default:
            return state;
    }
}
//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_cart__ = __webpack_require__(62);
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

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__product__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cart__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth__ = __webpack_require__(308);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducers; });




// tslint:disable-next-line
var reducers = {
    product: __WEBPACK_IMPORTED_MODULE_0__product__["a" /* productReducer */],
    cart: __WEBPACK_IMPORTED_MODULE_1__cart__["a" /* cartReducer */],
    menu: __WEBPACK_IMPORTED_MODULE_2__menu__["a" /* menuReducer */],
    auth: __WEBPACK_IMPORTED_MODULE_3__auth__["a" /* authReducer */]
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_menu__ = __webpack_require__(85);
/* harmony export (immutable) */ __webpack_exports__["a"] = menuReducer;

function menuReducer(state, action) {
    if (state === void 0) { state = true; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_menu__["a" /* MenuActions */].TOGGLE_MENU: {
            return !state;
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_menu__["a" /* MenuActions */].CLOSE_MENU: {
            return false;
        }
        default: {
            return false;
        }
    }
}
//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_product__ = __webpack_require__(63);
/* harmony export (immutable) */ __webpack_exports__["a"] = productReducer;

var initialState = [];
function productReducer(state, action) {
    // console.log(action.type);
    if (state === void 0) { state = initialState; }
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

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DOMAIN; });

var DOMAIN = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* InjectionToken */]('domain');
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 314:
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__(439),
            styles: [__webpack_require__(383)]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_actions_auth__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_actions_menu__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__(29);
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
    function HeaderComponent(_store, _menuActions, _authActions, afAuth) {
        this._store = _store;
        this._menuActions = _menuActions;
        this._authActions = _authActions;
        this.afAuth = afAuth;
        this.amount = 0;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (user) {
            _this.user = user;
        });
        this.menuActive$.subscribe(function (menuActive) { return _this.menuActive = menuActive; });
        this._store.select('cart').subscribe(function (product) { return _this.amount = product.length; });
    };
    HeaderComponent.prototype.toogleMenu = function () {
        this._store.dispatch(this._menuActions.toggleManu());
    };
    HeaderComponent.prototype.logout = function () {
        this._store.dispatch(this._authActions.logout());
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Input */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"]) === "function" && _a || Object)
    ], HeaderComponent.prototype, "menuActive$", void 0);
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_11" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__(441),
            styles: [__webpack_require__(385)]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["d" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["d" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__common_actions_menu__["a" /* MenuActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_actions_menu__["a" /* MenuActions */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__common_actions_auth__["a" /* AuthActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common_actions_auth__["a" /* AuthActions */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _e || Object])
    ], HeaderComponent);
    return HeaderComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 316:
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'category'
        })
    ], CategoryPipe);
    return CategoryPipe;
}());

//# sourceMappingURL=category.pipe.js.map

/***/ }),

/***/ 317:
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
}());

//# sourceMappingURL=search.pipe.js.map

/***/ }),

/***/ 318:
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'sort'
        })
    ], SortPipe);
    return SortPipe;
}());

//# sourceMappingURL=sort.pipe.js.map

/***/ }),

/***/ 319:
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
            selector: 'app-summary',
            template: __webpack_require__(446),
            styles: [__webpack_require__(390)]
        }),
        __metadata("design:paramtypes", [])
    ], SummaryComponent);
    return SummaryComponent;
}());

//# sourceMappingURL=summary.component.js.map

/***/ }),

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)();
// imports


// module
exports.push([module.i, ".wrapper {\n  min-height: 100vh;\n}\n.content {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)();
// imports


// module
exports.push([module.i, "md-input-container {\n  width: 100%\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)();
// imports


// module
exports.push([module.i, ".img {\n  width: 200px\n}\n.detail {\n  text-align: center;\n  /*height: 100vh;*/\n  height:100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)();
// imports


// module
exports.push([module.i, ".img {\n  width: 80%\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 437:
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" class=\"wrapper\">\n  <app-header [menuActive$]=\"menuActive$\"></app-header>\n  <div fxLayout='row' fxLayoutAlign=\"space-between\" class=\"content\">\n    <div fxFlex=\"100\">\n      <md-sidenav-container>\n        <md-sidenav mode=\"over\" opened=\"{{menuActive$ | async}}\">\n          <md-list>\n            <md-list-item>Mani page</md-list-item>\n            <md-list-item>About us</md-list-item>\n            <md-list-item>Contacts</md-list-item>\n          </md-list>\n        </md-sidenav>\n        <router-outlet></router-outlet>\n      </md-sidenav-container>\n    </div>\n  </div>\n  <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ 438:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"cart\">\n  <md-card *ngFor=\"let item of cart | async\" fxLayout=\"row\">\n    <md-card-title fxFlex=\"60\">{{item.title}}</md-card-title>\n    <a fxFlex=\"5\" (click)=\"reduceItem(item)\"><i class=\"fa fa-minus\" aria-hidden=\"true\"></i></a>\n    <md-card-title fxFlex=\"5\">{{item.amount}}</md-card-title>\n    <a fxFlex=\"15\" (click)=\"increaseItem(item)\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></a>\n    <md-card-title fxFlex=\"40\">{{item.price | currency}}</md-card-title>\n    <a fxFlex=\"5\" (click)=\"removeItem(item)\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></a>\n  </md-card>\n  <md-card  fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <button md-raised-button color=\"accent\" [routerLink]=\"['/form']\">NEXT</button>\n    <button md-button>Total: {{sum}}</button>\n  </md-card>\n</div>\n"

/***/ }),

/***/ 439:
/***/ (function(module, exports) {

module.exports = "<md-card fxLayout='row' fxLayoutAlign=\"space-between\">\n  <div>@2017</div>\n  <nav>\n    <a><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a>\n    <a><i class=\"fa fa-vk\" aria-hidden=\"true\"></i></a>\n    <a><i class=\"fa fa-youtube\" aria-hidden=\"true\"></i></a>\n  </nav>\n</md-card>\n"

/***/ }),

/***/ 440:
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <form (ngSubmit)=\"createOrder($event)\" [formGroup]=\"details\">\n    <h2>Enter your details</h2>\n    <div fxLayout='row' fxLayoutAlign=\"space-between\" class=\"form-group\">\n      <md-input-container fxFlex=\"48\">\n        <input mdInput placeholder=\"Name\" #name formControlName=\"name\">\n        <md-hint align=\"end\" *ngIf=\"details.controls['name'].hasError('required') && details.controls['name'].touched\">\n          You can't leave this empty.\n        </md-hint>\n      </md-input-container>\n      <md-input-container fxFlex=\"48\">\n        <input mdInput type=\"email\" placeholder=\"Email\" #email formControlName=\"email\" >\n        <md-hint align=\"end\" *ngIf=\"details.controls['email'].errors && details.controls['email'].touched\">\n          You can't leave this empty.\n        </md-hint>\n      </md-input-container>\n    </div>\n\n    <div fxLayout='row' fxLayoutAlign=\"space-between\" class=\"form-group\">\n      <md-input-container fxFlex=\"48\">\n        <input mdInput placeholder=\"Address\" #address formControlName=\"address\">\n        <md-hint align=\"end\" *ngIf=\"details.controls['address'].errors && details.controls['address'].touched\">\n          You can't leave this empty.\n        </md-hint>\n      </md-input-container>\n      <md-input-container fxFlex=\"48\">\n        <input mdInput type=\"number\" placeholder=\"Phone\" #phone formControlName=\"phone\">\n        <md-hint align=\"end\" *ngIf=\"details.controls['phone'].errors && details.controls['phone'].touched\">\n          You can't leave this empty.\n        </md-hint>\n      </md-input-container>\n    </div>\n    <button md-button [disabled]=\"details.invalid\">Ok</button>\n  </form>\n</md-card>\n"

/***/ }),

/***/ 441:
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"accent\">\n  <span *ngIf=\"!menuActive\" (click)=\"toogleMenu()\">\n    <i class=\"fa fa-bars\" aria-hidden=\"true\"></i>\n  </span>\n  <span *ngIf=\"menuActive\" (click)=\"toogleMenu()\">\n    <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n  </span>\n  <div fxLayout=\"row\" fxLayoutAlign=\"start center\" [routerLink]=\"['/products']\">\n    <span class=\"app-title\">Star Store</span>\n    <md-icon><i class=\"fa fa-star\" aria-hidden=\"true\"></i></md-icon>\n  </div>\n  <div fxFlex></div>\n\n  <button md-raised-button color=\"danger\" *ngIf=\"user\" [routerLink]=\"['/product-create']\">\n    <i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i>\n  </button>\n\n  <span>{{user?.email}}</span>\n\n  <button md-raised-button color=\"accent\" *ngIf=\"user\" (click)=\"logout()\">\n    Logout\n  </button>\n\n  <button md-raised-button color=\"danger\" *ngIf=\"!user\" [routerLink]=\"['/login']\">\n    <i class=\"fa fa-user\" aria-hidden=\"true\"></i>Login\n  </button>\n\n  <span [routerLink]=\"['/cart']\"><i class=\"fa fa-shopping-basket\" aria-hidden=\"true\"></i> {{amount}}</span>\n</md-toolbar>\n"

/***/ }),

/***/ 442:
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <form (ngSubmit)=\"login(auth.value)\" [formGroup]=\"auth\">\n    <h2>Login</h2>\n    <div fxLayout='column' class=\"form-group\">\n      <md-input-container>\n        <input mdInput type=\"email\" placeholder=\"Email\" #email formControlName=\"email\" >\n        <md-hint align=\"end\" *ngIf=\"auth.controls['email'].errors && auth.controls['email'].touched\">\n          You can't leave this empty.\n        </md-hint>\n      </md-input-container>\n      <md-input-container>\n        <input mdInput type=\"password\" placeholder=\"Password\" #name formControlName=\"password\">\n        <md-hint align=\"end\" *ngIf=\"auth.controls['password'].hasError('required') && auth.controls['password'].touched\">\n          You can't leave this empty.\n        </md-hint>\n      </md-input-container>\n    </div>\n    <div>{{message}}</div>\n    <button md-button [disabled]=\"auth.invalid\">Login</button>\n  </form>\n</md-card>\n"

/***/ }),

/***/ 443:
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <form (ngSubmit)=\"submit(product.value)\" [formGroup]=\"product\">\n    <h2>Create new product</h2>\n    <div fxLayout='column' fxLayoutAlign='center' class=\"form-group\">\n\n      <md-input-container>\n        <input mdInput type=\"text\" placeholder=\"title\" #title formControlName=\"title\" >\n        <md-hint align=\"end\" *ngIf=\"product.controls['title'].errors && product.controls['title'].touched\">\n          You can't leave this empty.\n        </md-hint>\n      </md-input-container>\n\n      <md-input-container>\n        <input mdInput type=\"text\" placeholder=\"description\" #description formControlName=\"description\" >\n        <md-hint align=\"end\" *ngIf=\"product.controls['description'].errors && product.controls['description'].touched\">\n          You can't leave this empty.\n        </md-hint>\n      </md-input-container>\n\n      <md-input-container>\n        <input mdInput type=\"number\" placeholder=\"price\" #price formControlName=\"price\" >\n        <md-hint align=\"end\" *ngIf=\"product.controls['price'].errors && product.controls['price'].touched\">\n          You can't leave this empty.\n        </md-hint>\n      </md-input-container>\n\n      <md-input-container>\n        <input mdInput type=\"text\" placeholder=\"photo\" #photo formControlName=\"photo\" >\n        <md-hint align=\"end\" *ngIf=\"product.controls['photo'].errors && product.controls['photo'].touched\">\n          You can't leave this empty.\n        </md-hint>\n      </md-input-container>\n\n      <md-select placeholder=\"type\" formControlName=\"type\">\n        <md-option *ngFor=\"let type of types\" [value]=\"type.value\">\n          {{type.value}}\n        </md-option>\n      </md-select>\n\n    </div>\n    <button md-button [disabled]=\"product.invalid\">Ok</button>\n  </form>\n</md-card>\n"

/***/ }),

/***/ 444:
/***/ (function(module, exports) {

module.exports = "<md-card fxLayout=\"column\" *ngIf=\"product\" fxLayoutAlign=\"center center\" class=\"detail\">\n  <md-grid-tile-header>\n    <md-card-title>{{product.title}}</md-card-title>\n    <md-card-subtitle>{{product.price}} $</md-card-subtitle>\n    <md-card-subtitle>{{product.description}}</md-card-subtitle>\n  </md-grid-tile-header>\n  <img class=\"img\" md-card-image [src]=\"product.photo\">\n  <md-grid-tile-footer>\n    <button md-raised-button color=\"accent\" (click)=\"addProduct(product)\">BUY</button>\n  </md-grid-tile-footer>\n</md-card>\n"

/***/ }),

/***/ 445:
/***/ (function(module, exports) {

module.exports = "<md-input-container fxLayout='row' fxFlex=\"100\">\n  <input mdInput placeholder=\"Search\" #search>\n</md-input-container>\n<md-tab-group md-dynamic-height md-border-bottom md-autoselect>\n  <md-tab *ngFor=\"let tab of products | async | category\" label=\"{{tab}}\">\n    <md-grid-list cols=\"3\">\n      <md-grid-tile rowspan=\"1\" colspan=\"1\" *ngFor=\"let  product of products | async | sort: tab | search: search.value\">\n        <md-grid-tile-header>{{product.title}}</md-grid-tile-header>\n        <img class=\"img\"  md-card-image [src]=\"product.photo\">\n        <md-grid-tile-footer  fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n          <button md-raised-button color=\"accent\" (click)=\"addProduct(product)\">BUY</button>\n          <button md-raised-button color=\"primary\" [routerLink]=\"['/product', product.id]\">INFO</button>\n        </md-grid-tile-footer>\n      </md-grid-tile>\n    </md-grid-list>\n  </md-tab>\n</md-tab-group>\n"

/***/ }),

/***/ 446:
/***/ (function(module, exports) {

module.exports = "<p>\n  summary works!\n</p>\n"

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthActions; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthActions = (function () {
    var AuthActions = AuthActions_1 = function AuthActions() {
    };
    AuthActions.prototype.login = function (user) {
        return {
            type: AuthActions_1.LOGIN,
            payload: user
        };
    };
    AuthActions.prototype.loginSuccess = function (user) {
        return {
            type: AuthActions_1.LOGIN_SUCCESS,
            payload: user
        };
    };
    AuthActions.prototype.loginFail = function (err) {
        return {
            type: AuthActions_1.LOGIN_FAIL,
            payload: err
        };
    };
    AuthActions.prototype.logout = function () {
        return {
            type: AuthActions_1.LOGOUT,
        };
    };
    AuthActions.prototype.logoutSuccess = function () {
        return {
            type: AuthActions_1.LOGOUT_SUCCESS,
        };
    };
    AuthActions.prototype.logoutFail = function () {
        return {
            type: AuthActions_1.LOGIOUT_FAIL,
        };
    };
    // tslint:disable-next-line
    AuthActions.LOGIN = '[Login] Login ..';
    // tslint:disable-next-line
    AuthActions.LOGIN_SUCCESS = '[Login] login Success';
    // tslint:disable-next-line
    AuthActions.LOGIN_FAIL = '[Login] login Fail';
    // tslint:disable-next-line
    AuthActions.LOGOUT = '[Logout] Logout ..';
    // tslint:disable-next-line
    AuthActions.LOGOUT_SUCCESS = '[Login] Logout Success';
    // tslint:disable-next-line
    AuthActions.LOGIOUT_FAIL = '[Login] Logout Fail';
    AuthActions = AuthActions_1 = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AuthActions);
    return AuthActions;
    var AuthActions_1;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__(60);
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

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(60);
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

/***/ 691:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(276);


/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuActions; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MenuActions = (function () {
    var MenuActions = MenuActions_1 = function MenuActions() {
    };
    MenuActions.prototype.toggleManu = function () {
        return {
            type: MenuActions_1.TOGGLE_MENU
        };
    };
    MenuActions.prototype.closeMenu = function () {
        return {
            type: MenuActions_1.CLOSE_MENU,
        };
    };
    // tslint:disable-next-line
    MenuActions.TOGGLE_MENU = '[Menu] Toggle menu';
    // tslint:disable-next-line
    MenuActions.CLOSE_MENU = '[Menu] Close menu';
    MenuActions = MenuActions_1 = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
    ], MenuActions);
    return MenuActions;
    var MenuActions_1;
}());

//# sourceMappingURL=menu.js.map

/***/ })

},[691]);
//# sourceMappingURL=main.bundle.js.map