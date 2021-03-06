webpackJsonp([2],{

/***/ 108:
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
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/details/details.module": [
		268,
		1
	],
	"../pages/home/home.module": [
		269,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 150;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return comicsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ts_md5_dist_md5__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ts_md5_dist_md5__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var comicsService = (function () {
    function comicsService(http) {
        this.http = http;
        this.ts = 1;
        this.privateKey = "edb8c96f8b36bd38946fb25207d7350de5ae3794";
        this.publicKey = "8b4b8bdebf950524d49ab01de18e69ad";
        this.hash = __WEBPACK_IMPORTED_MODULE_4_ts_md5_dist_md5__["Md5"].hashStr(this.ts + this.privateKey + this.publicKey);
        this.limit = 20;
    }
    //Get Comics
    comicsService.prototype.getComics = function () {
        return this.http.get('https://gateway.marvel.com/v1/public/comics?ts=' + this.ts + '&apikey=' + this.publicKey + '&hash=' + this.hash + "&limit=" + this.limit)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    //Gets comic by title
    comicsService.prototype.getComicsSearchTitle = function (title) {
        return this.http.get('https://gateway.marvel.com/v1/public/comics?ts=' + this.ts + "&titleStartsWith=" + title + '&apikey=' + this.publicKey + '&hash=' + this.hash + "&limit=" + this.limit)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    //Gets comic by year
    comicsService.prototype.getComicsSearchYear = function (year) {
        return this.http.get('https://gateway.marvel.com/v1/public/comics?ts=' + this.ts + "&startYear=" + year + '&apikey=' + this.publicKey + '&hash=' + this.hash + "&limit=" + this.limit)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    return comicsService;
}());
comicsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], comicsService);

var _a;
//# sourceMappingURL=comics-service.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(215);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_comics_service_comics_service__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_details_details__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(152);
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
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_details_details__["a" /* DetailsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/details/details.module#DetailsPageModule', name: 'DetailsPage', segment: 'details', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#HomeModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_details_details__["a" /* DetailsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_7__providers_comics_service_comics_service__["a" /* comicsService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(99);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Fernando\Documents\GitHub\ProyectoMarvel\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Fernando\Documents\GitHub\ProyectoMarvel\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NewDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DetailsPage = (function () {
    function DetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.comic = navParams.data.comic;
        //Validate creators 
        var creatorstotal;
        var x = 0;
        if (this.comic.creators.items.length > 0) {
            for (var i in this.comic.creators.items) {
                if (x == 0) {
                    creatorstotal = this.comic.creators.items[i].name;
                    x++;
                }
                else {
                    creatorstotal = creatorstotal + ', ' + this.comic.creators.items[i].name;
                }
            }
            this.comic["creatorsFinal"] = creatorstotal;
        }
        else {
            this.comic["creatorsFinal"] = "No information";
        }
        //Validate characters
        var characterstotal;
        x = 0;
        if (this.comic.characters.items.length > 0) {
            for (var j in this.comic.characters.items) {
                if (x == 0) {
                    characterstotal = this.comic.characters.items[j].name;
                    x++;
                }
                else {
                    characterstotal = characterstotal + ', ' + this.comic.characters.items[j].name;
                }
            }
            this.comic["charactersFinal"] = characterstotal;
        }
        else {
            this.comic["charactersFinal"] = "No information";
        }
        //Validate urls
        var myVar = this.comic.urls[1];
        if (typeof myVar === "undefined") {
            this.comic.urls[1] = { "url": "#" };
        }
        //Validate prices 
        if (this.comic.prices.length <= 1) {
            this.comic.prices[1] = { "type": "digitalprice", "price": "No information" };
        }
        //Validate description
        if (this.comic.description != null) {
            this.comic.description = this.comic.description.replace(/(?:<[^>]+>)/gi, '');
        }
    }
    DetailsPage.prototype.ionViewDidLoad = function () {
    };
    return DetailsPage;
}());
DetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-details',template:/*ion-inline-start:"C:\Users\Fernando\Documents\GitHub\ProyectoMarvel\src\pages\details\details.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      {{ comic.title }}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card>\n    <img [src]="comic.src2">\n    <ion-card-content>\n      <span style="font-size:1.8em;color:#f53d3d">\n        {{comic.title}}\n        </span>\n      <br>\n      <span>\n       {{comic.description}}\n      </span>\n    </ion-card-content>\n\n    <ion-item text-wrap>\n      <ion-icon name="clipboard" large></ion-icon>\n      <span style="color:#666;">Creators :</span>\n      <span>{{comic.creatorsFinal}}</span>\n    </ion-item>\n\n    <ion-item text-wrap>\n      <ion-icon name="people" large></ion-icon>\n      <span style="color:#666;">Characters :</span>\n      <span>{{comic.charactersFinal}}</span>\n    </ion-item>\n\n    <ion-item text-wrap>\n      <ion-icon name="calendar" large></ion-icon>\n      <span style="color:#666;">Year :</span>\n      <span>{{comic.year}}</span>\n    </ion-item>\n\n    <ion-item text-wrap>\n      <ion-icon name="logo-usd" large></ion-icon>\n      <span style="color:#666;">Prices :</span>\n      <br>\n      <span>&nbsp; • Print : {{comic.prices[0].price}}</span>\n      <br>\n      <span>&nbsp; • Digital : {{comic.prices[1].price}}</span>\n    </ion-item>\n\n    <ion-item text-wrap item-end *ngIf=\'comic.urls[1].url != "#"\'>\n      <a item-end [href]="comic.urls[1].url">\n    <button ion-button icon-left clear item-end large>\n      Buy&nbsp; \n      <ion-icon name="cart"></ion-icon>     \n    </button>\n    </a>\n    </ion-item>\n    \n    <ion-item text-wrap item-end *ngIf=\'comic.urls[1].url == "#"\'>\n      <span style="color:#f53d3d;" item-end icon-left large>Not available to buy</span>\n    </ion-item>\n\n  </ion-card>\n</ion-content>'/*ion-inline-end:"C:\Users\Fernando\Documents\GitHub\ProyectoMarvel\src\pages\details\details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], DetailsPage);

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_comics_service_comics_service__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_details_details__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, comicService, loading) {
        this.navCtrl = navCtrl;
        this.comicService = comicService;
        this.loading = loading;
        this.comics = [];
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loading.create({
            content: 'Getting Comics...',
        });
        loader.present().then(function () {
            _this.comicService.getComics()
                .then(function (data) {
                _this.comics = data.data.results;
                _this.validateComics();
            })
                .catch(function (error) {
                console.error(error);
            });
            loader.dismiss();
        });
    };
    //Gets Comics for search value
    HomePage.prototype.getItems = function (ev) {
        var _this = this;
        var val = ev.target.value;
        if (val && val.trim() != '') {
            if (val.length == 4 && this.validateVal(val)) {
                this.comicService.getComicsSearchYear(val)
                    .then(function (data) {
                    _this.comics = data.data.results;
                    _this.validateComics();
                })
                    .catch(function (error) {
                    console.error(error);
                });
            }
            else {
                this.comicService.getComicsSearchTitle(val)
                    .then(function (data) {
                    _this.comics = data.data.results;
                    _this.validateComics();
                })
                    .catch(function (error) {
                    console.error(error);
                });
            }
        }
        else {
            this.ionViewDidLoad();
        }
    };
    //Call to page Details
    HomePage.prototype.openNavDetailsPage = function (comic) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_details_details__["a" /* DetailsPage */], { comic: comic });
    };
    //validate the Comics 
    HomePage.prototype.validateComics = function () {
        this.comics = this.comics.map(function (item) {
            //Validate Year
            var validate = /\((.[0-9]*)\)/;
            if (validate.test(item.title) == false) {
                item.year = (new Date(item.dates[0].date)).getFullYear(); //Get from date onsaleDate
            }
            else {
                item.year = item.title.match(/\((.[0-9]*)\)/).pop(); //Get from title
            }
            //Validate Title         
            item.title = item.title.replace(/\((.*)\)/, "");
            //Validate Imgs
            item.src = item.thumbnail.path + "/portrait_medium." + item.thumbnail.extension;
            item.src2 = item.thumbnail.path + "/portrait_incredible." + item.thumbnail.extension;
            return item;
        });
    };
    //validate value of Search
    HomePage.prototype.validateVal = function (val) {
        var n = Math.floor(Number(val));
        return String(n) === val && n >= 0;
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Fernando\Documents\GitHub\ProyectoMarvel\src\pages\home\home.html"*/'<ion-header >\n  <ion-navbar >\n    <ion-title >\n      <img alt="logo" height="40" src="assets/img/logo.png">\n    </ion-title>\n  </ion-navbar>\n  <ion-searchbar placeholder="Search by Title or Year" (ionInput)="getItems($event)"></ion-searchbar>\n  \n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let comic of comics" (click)="openNavDetailsPage(comic)">\n      <ion-thumbnail item-start>\n      <img [src]="comic.src">\n    </ion-thumbnail>\n    <h2>{{ comic.title }}</h2>\n    <p>Year •{{comic.year}}</p>    \n    </button>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\Fernando\Documents\GitHub\ProyectoMarvel\src\pages\home\home.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_comics_service_comics_service__["a" /* comicsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_comics_service_comics_service__["a" /* comicsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _c || Object])
], HomePage);

var _a, _b, _c;
//# sourceMappingURL=home.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map