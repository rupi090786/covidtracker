function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/admin/admin.component.ts":
  /*!******************************************!*\
    !*** ./src/app/admin/admin.component.ts ***!
    \******************************************/

  /*! exports provided: AdminComponent */

  /***/
  function srcAppAdminAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
      return AdminComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_newsservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/newsservice */
    "./src/app/services/newsservice.ts");

    var AdminComponent = /*#__PURE__*/function () {
      function AdminComponent(fb, mynews) {
        _classCallCheck(this, AdminComponent);

        this.fb = fb;
        this.mynews = mynews;
        this.newsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          News: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
      }

      _createClass(AdminComponent, [{
        key: "onSubmit",
        value: function onSubmit(data, formDirective) {
          var respons = this.mynews.PostNews(this.newsForm.value);

          if (respons) {
            alert("Successfully posted News");
            formDirective.resetForm();
            this.newsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              News: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
            });
            this.newsForm.reset();
          } else {
            alert("Error Posting News");
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminComponent;
    }();

    AdminComponent.ɵfac = function AdminComponent_Factory(t) {
      return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_newsservice__WEBPACK_IMPORTED_MODULE_2__["NewsService"]));
    };

    AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminComponent,
      selectors: [["app-admin"]],
      decls: 7,
      vars: 1,
      consts: [[1, "page-title"], [1, "example-form", 3, "formGroup", "ngSubmit"], ["formDirective", "ngForm"], ["type", "text", "id", "News", "formControlName", "News", "placeholder", "Enter news here", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"]],
      template: function AdminComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "POST NEWS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AdminComponent_Template_form_ngSubmit_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

            return ctx.onSubmit(ctx.newsForm, _r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.newsForm);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin',
          templateUrl: './admin.component.html',
          styleUrls: ['./admin.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_newsservice__WEBPACK_IMPORTED_MODULE_2__["NewsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _tracker_tracker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./tracker/tracker.component */
    "./src/app/tracker/tracker.component.ts");
    /* harmony import */


    var _latestnews_latestnews_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./latestnews/latestnews.component */
    "./src/app/latestnews/latestnews.component.ts");
    /* harmony import */


    var _precautions_precautions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./precautions/precautions.component */
    "./src/app/precautions/precautions.component.ts");
    /* harmony import */


    var _authenticated_user_authenticated_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./authenticated-user/authenticated-user.component */
    "./src/app/authenticated-user/authenticated-user.component.ts");
    /* harmony import */


    var src_dashboard_users_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/dashboard/users/sign-in/sign-in.component */
    "./src/dashboard/users/sign-in/sign-in.component.ts");
    /* harmony import */


    var _admin_admin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./admin/admin.component */
    "./src/app/admin/admin.component.ts");
    /* harmony import */


    var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/auth-guard.service */
    "./src/app/services/auth-guard.service.ts");

    var routes = [{
      path: 'signin',
      component: src_dashboard_users_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_6__["SignInComponent"]
    }, {
      path: 'authenticated',
      component: _authenticated_user_authenticated_user_component__WEBPACK_IMPORTED_MODULE_5__["AuthenticatedUserComponent"],
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]],
      children: [{
        path: '',
        canActivateChild: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]],
        children: [{
          path: '',
          redirectTo: 'admin',
          pathMatch: 'full'
        }, {
          path: 'admin',
          component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_7__["AdminComponent"]
        }]
      }]
    }, {
      path: 'dashboard',
      component: _tracker_tracker_component__WEBPACK_IMPORTED_MODULE_2__["TrackerComponent"]
    }, {
      path: 'dashboard/:statecode',
      component: _tracker_tracker_component__WEBPACK_IMPORTED_MODULE_2__["TrackerComponent"]
    }, {
      path: 'latestnews',
      component: _latestnews_latestnews_component__WEBPACK_IMPORTED_MODULE_3__["LatestnewsComponent"]
    }, {
      path: 'precautions',
      component: _precautions_precautions_component__WEBPACK_IMPORTED_MODULE_4__["PrecautionsComponent"]
    }, {
      path: '',
      component: _tracker_tracker_component__WEBPACK_IMPORTED_MODULE_2__["TrackerComponent"]
    }, {
      path: '**',
      component: _tracker_tracker_component__WEBPACK_IMPORTED_MODULE_2__["TrackerComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./app.menu */
    "./src/app/app.menu.ts");
    /* harmony import */


    var src_dashboard_services_configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/dashboard/services/configuration.service */
    "./src/dashboard/services/configuration.service.ts");
    /* harmony import */


    var src_dashboard_services_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/dashboard/services/menu.service */
    "./src/dashboard/services/menu.service.ts");
    /* harmony import */


    var _dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../dashboard/dashboard/dashboard.component */
    "./src/dashboard/dashboard/dashboard.component.ts");

    var AppComponent = function AppComponent(configurationService, menuService) {
      _classCallCheck(this, AppComponent);

      this.configurationService = configurationService;
      this.menuService = menuService;
      var config = {
        showlanguageSelector: true,
        showUserControls: true,
        showstatusBarBreakpoint: 800
      };
      configurationService.configure(config);
      menuService.items = _app_menu__WEBPACK_IMPORTED_MODULE_1__["MyMenuItems"];
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_dashboard_services_configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_dashboard_services_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "corona-dashboard");
        }
      },
      directives: [_dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: src_dashboard_services_configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"]
        }, {
          type: src_dashboard_services_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.menu.ts":
  /*!*****************************!*\
    !*** ./src/app/app.menu.ts ***!
    \*****************************/

  /*! exports provided: MyMenuItems */

  /***/
  function srcAppAppMenuTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyMenuItems", function () {
      return MyMenuItems;
    });

    var MyMenuItems = [{
      text: 'Dashboard',
      icon: 'fa-tachometer',
      route: '/dashboard',
      submenu: null
    }, {
      text: 'Latest news',
      icon: 'fa-newspaper-o',
      route: '/latestnews',
      submenu: null
    }, {
      text: 'Precautions',
      icon: 'fa-times-rectangle',
      route: '/precautions',
      submenu: null
    }];
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var src_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/dashboard/dashboard.module */
    "./src/dashboard/dashboard.module.ts");
    /* harmony import */


    var _tracker_tracker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tracker/tracker.component */
    "./src/app/tracker/tracker.component.ts");
    /* harmony import */


    var _latestnews_latestnews_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./latestnews/latestnews.component */
    "./src/app/latestnews/latestnews.component.ts");
    /* harmony import */


    var _precautions_precautions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./precautions/precautions.component */
    "./src/app/precautions/precautions.component.ts");
    /* harmony import */


    var _authenticated_user_authenticated_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./authenticated-user/authenticated-user.component */
    "./src/app/authenticated-user/authenticated-user.component.ts");
    /* harmony import */


    var _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./admin/admin.component */
    "./src/app/admin/admin.component.ts");
    /* harmony import */


    var _services_users_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./services/users.service */
    "./src/app/services/users.service.ts");
    /* harmony import */


    var src_dashboard_users_users_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/dashboard/users/users-api */
    "./src/dashboard/users/users-api.ts");
    /* harmony import */


    var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./services/auth-guard.service */
    "./src/app/services/auth-guard.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_users_service__WEBPACK_IMPORTED_MODULE_10__["UsersService"], {
        provide: src_dashboard_users_users_api__WEBPACK_IMPORTED_MODULE_11__["UserApi"],
        useExisting: _services_users_service__WEBPACK_IMPORTED_MODULE_10__["UsersService"]
      }, _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], src_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_4__["DashboardModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _tracker_tracker_component__WEBPACK_IMPORTED_MODULE_5__["TrackerComponent"], _latestnews_latestnews_component__WEBPACK_IMPORTED_MODULE_6__["LatestnewsComponent"], _precautions_precautions_component__WEBPACK_IMPORTED_MODULE_7__["PrecautionsComponent"], _authenticated_user_authenticated_user_component__WEBPACK_IMPORTED_MODULE_8__["AuthenticatedUserComponent"], _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__["AdminComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], src_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_4__["DashboardModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _tracker_tracker_component__WEBPACK_IMPORTED_MODULE_5__["TrackerComponent"], _latestnews_latestnews_component__WEBPACK_IMPORTED_MODULE_6__["LatestnewsComponent"], _precautions_precautions_component__WEBPACK_IMPORTED_MODULE_7__["PrecautionsComponent"], _authenticated_user_authenticated_user_component__WEBPACK_IMPORTED_MODULE_8__["AuthenticatedUserComponent"], _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__["AdminComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], src_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_4__["DashboardModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"]],
          providers: [_services_users_service__WEBPACK_IMPORTED_MODULE_10__["UsersService"], {
            provide: src_dashboard_users_users_api__WEBPACK_IMPORTED_MODULE_11__["UserApi"],
            useExisting: _services_users_service__WEBPACK_IMPORTED_MODULE_10__["UsersService"]
          }, _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/authenticated-user/authenticated-user.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/authenticated-user/authenticated-user.component.ts ***!
    \********************************************************************/

  /*! exports provided: AuthenticatedUserComponent */

  /***/
  function srcAppAuthenticatedUserAuthenticatedUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticatedUserComponent", function () {
      return AuthenticatedUserComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _admin_admin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../admin/admin.component */
    "./src/app/admin/admin.component.ts");

    var AuthenticatedUserComponent = /*#__PURE__*/function () {
      function AuthenticatedUserComponent() {
        _classCallCheck(this, AuthenticatedUserComponent);
      }

      _createClass(AuthenticatedUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AuthenticatedUserComponent;
    }();

    AuthenticatedUserComponent.ɵfac = function AuthenticatedUserComponent_Factory(t) {
      return new (t || AuthenticatedUserComponent)();
    };

    AuthenticatedUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AuthenticatedUserComponent,
      selectors: [["app-authenticated-user"]],
      decls: 1,
      vars: 0,
      template: function AuthenticatedUserComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-admin");
        }
      },
      directives: [_admin_admin_component__WEBPACK_IMPORTED_MODULE_1__["AdminComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0ZWQtdXNlci9hdXRoZW50aWNhdGVkLXVzZXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticatedUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-authenticated-user',
          templateUrl: './authenticated-user.component.html',
          styleUrls: ['./authenticated-user.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/latestnews/latestnews.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/latestnews/latestnews.component.ts ***!
    \****************************************************/

  /*! exports provided: LatestnewsComponent */

  /***/
  function srcAppLatestnewsLatestnewsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LatestnewsComponent", function () {
      return LatestnewsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_newsservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/newsservice */
    "./src/app/services/newsservice.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LatestnewsComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "News");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var new_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", new_r1.News, " ");
      }
    }

    var LatestnewsComponent = function LatestnewsComponent(newsService) {
      _classCallCheck(this, LatestnewsComponent);

      this.newsService = newsService;
      this.news = [];
      this.news = this.newsService.getNews();
    };

    LatestnewsComponent.ɵfac = function LatestnewsComponent_Factory(t) {
      return new (t || LatestnewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_newsservice__WEBPACK_IMPORTED_MODULE_1__["NewsService"]));
    };

    LatestnewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LatestnewsComponent,
      selectors: [["app-latestnews"]],
      decls: 3,
      vars: 1,
      consts: [[1, "page-title"], ["class", "acc", 4, "ngFor", "ngForOf"], [1, "acc"], [1, "nh"], [1, "head", 2, "color", "black", "font-weight", "bold"], [1, "content"]],
      template: function LatestnewsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Latest News ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LatestnewsComponent_div_2_Template, 6, 1, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.news);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: [".head[_ngcontent-%COMP%] {\r\n    padding: 7px;\r\n    background: linear-gradient(45deg, rgba(204, 145, 157, 0.6) 90%, transparent 5%);\r\n    margin: 5px 0;\r\n    border-radius: 4px;\r\n    font-weight: bolder;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF0ZXN0bmV3cy9sYXRlc3RuZXdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osZ0ZBQWdGO0lBQ2hGLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbGF0ZXN0bmV3cy9sYXRlc3RuZXdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZCB7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMjA0LCAxNDUsIDE1NywgMC42KSA5MCUsIHRyYW5zcGFyZW50IDUlKTtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIH1cclxuIFxyXG4gICJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LatestnewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-latestnews',
          templateUrl: './latestnews.component.html',
          styleUrls: ['./latestnews.component.css']
        }]
      }], function () {
        return [{
          type: _services_newsservice__WEBPACK_IMPORTED_MODULE_1__["NewsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/precautions/precautions.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/precautions/precautions.component.ts ***!
    \******************************************************/

  /*! exports provided: PrecautionsComponent */

  /***/
  function srcAppPrecautionsPrecautionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrecautionsComponent", function () {
      return PrecautionsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PrecautionsComponent = /*#__PURE__*/function () {
      function PrecautionsComponent() {
        _classCallCheck(this, PrecautionsComponent);
      }

      _createClass(PrecautionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PrecautionsComponent;
    }();

    PrecautionsComponent.ɵfac = function PrecautionsComponent_Factory(t) {
      return new (t || PrecautionsComponent)();
    };

    PrecautionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PrecautionsComponent,
      selectors: [["app-precautions"]],
      decls: 35,
      vars: 0,
      consts: [[1, "do"], [1, "dont"]],
      template: function PrecautionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Do's");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Maintain at least 1 metre (3 feet) distance between yourself and anyone who is coughing or sneezing.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Avoid touching eyes, nose and mouth");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Make sure you, and the people around you, follow good respiratory hygiene");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " If you have fever, cough and difficulty breathing, seek medical care early");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Stay informed and follow advice given by your healthcare provider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Don'ts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Do not cough or sneeze into your bare hands or without covering your face.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Don\u2019t go near your contacts if you are suffering from fever and cough.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Don\u2019t touch your eyes, face, nose and tongue.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Don\u2019t go near affected/ sick people .");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Don\u2019t self-medicate.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Don\u2019t shake hands or hug your friends and near ones.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Do not go to hospital for routine checkup or follow up. As far as possible make tele-consultation with your healthcare provider.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Don\u2019t go to crowded places like parks, markets and religious places.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Don\u2019t go out unless it is absolutely essential.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["p[_ngcontent-%COMP%]{\r\n\r\n\r\n    margin-left:auto;\r\n    margin-right:auto; \r\n    text-align: center ;\r\n    justify-content: center;\r\n    font-size: larger;\r\n    font-weight: bold;\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n}\r\nh2.do[_ngcontent-%COMP%]{\r\n    color: darkcyan;\r\n    text-align: center;\r\n    shape-outside: margin-box;\r\n}\r\nh2.dont[_ngcontent-%COMP%]{\r\n\r\n    color: darkred;\r\n    text-align: center;\r\n    shape-outside: margin-box;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlY2F1dGlvbnMvcHJlY2F1dGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0lBR0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsc0hBQXNIO0FBQzFIO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3QjtBQUNBOztJQUVJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvcHJlY2F1dGlvbnMvcHJlY2F1dGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInB7XHJcblxyXG5cclxuICAgIG1hcmdpbi1sZWZ0OmF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6YXV0bzsgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxufVxyXG5oMi5kb3tcclxuICAgIGNvbG9yOiBkYXJrY3lhbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHNoYXBlLW91dHNpZGU6IG1hcmdpbi1ib3g7XHJcbn1cclxuaDIuZG9udHtcclxuXHJcbiAgICBjb2xvcjogZGFya3JlZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHNoYXBlLW91dHNpZGU6IG1hcmdpbi1ib3g7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrecautionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-precautions',
          templateUrl: './precautions.component.html',
          styleUrls: ['./precautions.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/auth-guard.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/auth-guard.service.ts ***!
    \************************************************/

  /*! exports provided: AuthGuardService */

  /***/
  function srcAppServicesAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
      return AuthGuardService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./users.service */
    "./src/app/services/users.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuardService = /*#__PURE__*/function () {
      function AuthGuardService(usersService, router) {
        _classCallCheck(this, AuthGuardService);

        this.usersService = usersService;
        this.router = router;
      }

      _createClass(AuthGuardService, [{
        key: "canActivate",
        value: function canActivate() {
          console.log('AuthGuard#canActivate called' + this.usersService.isAuthenticated);

          if (!this.usersService.isAuthenticated) {
            console.log('You are not authorized');
            this.router.navigate(['/signin']);
          }

          return this.usersService.isAuthenticated;
        }
      }, {
        key: "canActivateChild",
        value: function canActivateChild() {
          return this.canActivate();
        }
      }]);

      return AuthGuardService;
    }();

    AuthGuardService.ɵfac = function AuthGuardService_Factory(t) {
      return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuardService,
      factory: AuthGuardService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/dashboard-data.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/dashboard-data.service.ts ***!
    \****************************************************/

  /*! exports provided: DashboardDataService */

  /***/
  function srcAppServicesDashboardDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardDataService", function () {
      return DashboardDataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var DashboardDataService = /*#__PURE__*/function () {
      function DashboardDataService(httpClient) {
        _classCallCheck(this, DashboardDataService);

        this.httpClient = httpClient;
        this.REST_API_SERVER = "https://api.covid19india.org/data.json";
        this.District_Response = "https://api.covid19india.org/state_district_wise.json";
      }

      _createClass(DashboardDataService, [{
        key: "sendGetRequest",
        value: function sendGetRequest() {
          return this.httpClient.get(this.REST_API_SERVER);
        }
      }, {
        key: "getDistrictRequest",
        value: function getDistrictRequest() {
          return this.httpClient.get(this.District_Response);
        }
      }]);

      return DashboardDataService;
    }();

    DashboardDataService.ɵfac = function DashboardDataService_Factory(t) {
      return new (t || DashboardDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    DashboardDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DashboardDataService,
      factory: DashboardDataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/newsservice.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/newsservice.ts ***!
    \*****************************************/

  /*! exports provided: NewsService */

  /***/
  function srcAppServicesNewsserviceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsService", function () {
      return NewsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NewsService = /*#__PURE__*/function () {
      function NewsService() {
        _classCallCheck(this, NewsService);

        this.latestnews = [{
          News: ' According to MHA guidelines, there will be  considerable relaxations in the districts falling in the Green and Orange Zones. The biggest and most economically-important cities including Delhi, Mumbai, Bengaluru, Chennai and Ahmedabad, all marked red zones, will stay under strict lockdown. Meanwhile, the total number of coronavirus cases in India has risen to 37,776, with 1,223 people dead.'
        }, {
          News: "Globally, 3,402,160 people have been infected by coronavirus so far, and the total number of deaths from the disease stands at 239,623. Nations hit with most coronavirus cases at present are the US (1,131,030 ) Spain (242,988), Italy (207,428), UK (177,454), France (167,346) and Germany (164,077 )."
        }];
      }

      _createClass(NewsService, [{
        key: "getNews",
        value: function getNews() {
          return JSON.parse(localStorage.getItem('mynews'));
        }
      }, {
        key: "PostNews",
        value: function PostNews(item) {
          try {
            var news = this.getNews();
            news.push(item);
            localStorage.setItem('mynews', JSON.stringify(news));
          } catch (error) {
            return false;
          }

          return true;
        }
      }]);

      return NewsService;
    }();

    NewsService.ɵfac = function NewsService_Factory(t) {
      return new (t || NewsService)();
    };

    NewsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NewsService,
      factory: NewsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/users.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/users.service.ts ***!
    \*******************************************/

  /*! exports provided: UsersService */

  /***/
  function srcAppServicesUsersServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersService", function () {
      return UsersService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var UsersService = /*#__PURE__*/function () {
      function UsersService(router) {
        _classCallCheck(this, UsersService);

        this.router = router;
        this.loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');
        this.isAuthenticated = false;
      }

      _createClass(UsersService, [{
        key: "setLoggedIn",
        value: function setLoggedIn(value) {
          this.loggedInStatus = value;
          localStorage.setItem('loggedIn', 'true');
        }
      }, {
        key: "signIn",
        value: function signIn(username, password) {
          console.log('UsersService.signIn: ' + username + ' ' + password);
          this.isAuthenticated = true;
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({});
          ;
        }
      }, {
        key: "signOut",
        value: function signOut() {
          localStorage.setItem("loggedAsAdmin", "");
          this.isAuthenticated = false;
          this.router.navigate(['/signin']);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({});
        }
      }]);

      return UsersService;
    }();

    UsersService.ɵfac = function UsersService_Factory(t) {
      return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UsersService,
      factory: UsersService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/tracker/tracker.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/tracker/tracker.component.ts ***!
    \**********************************************/

  /*! exports provided: TrackerComponent */

  /***/
  function srcAppTrackerTrackerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TrackerComponent", function () {
      return TrackerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services_dashboard_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/dashboard-data.service */
    "./src/app/services/dashboard-data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _dashboard_panel_panel_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../dashboard/panel/panel/panel.component */
    "./src/dashboard/panel/panel/panel.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TrackerComponent_tr_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var total_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](total_r4.state);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](total_r4.confirmed);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](total_r4.active);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](total_r4.recovered);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](total_r4.deaths);
      }
    }

    var _c0 = function _c0(a1) {
      return ["/dashboard", a1];
    };

    function TrackerComponent_tr_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var response_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, response_r5.statecode));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](response_r5.state);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](response_r5.confirmed);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](response_r5.active);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](response_r5.recovered);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](response_r5.deaths);
      }
    }

    function TrackerComponent_thead_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "thead", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Districts");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Total Cases");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Active");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Recovered");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Deceased");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TrackerComponent_tbody_32_tr_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var district_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](district_r7.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](district_r7.data.confirmed);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](district_r7.data.active);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](district_r7.data.recovered);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](district_r7.data.deceased);
      }
    }

    function TrackerComponent_tbody_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TrackerComponent_tbody_32_tr_1_Template, 11, 5, "tr", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.currentState.districtData);
      }
    }

    var TrackerComponent = /*#__PURE__*/function () {
      function TrackerComponent(dashboarddataservice, router) {
        _classCallCheck(this, TrackerComponent);

        this.dashboarddataservice = dashboarddataservice;
        this.router = router;
        this.responsereport = [];
        this.finalresponse = [];
        this.totaldataonly = [];
        this.districtreport = [];
        this.districtresponse = [];
        this.districtData = [];
        this.stateList = [];
        this.termSub = rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"].EMPTY;
      }

      _createClass(TrackerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.dashboarddataservice.sendGetRequest().subscribe(function (data) {
            _this.responsereport = data;
            console.log(data);
            _this.responsereport = Object.values(data);
            console.log(_this.responsereport);
            _this.finalresponse = _this.responsereport[1].slice(1, 38);
            console.log(_this.finalresponse);
            _this.totaldataonly = _this.responsereport[1].slice(0, 1);
            console.log(_this.totaldataonly);
          });
          this.dashboarddataservice.getDistrictRequest().subscribe(function (data) {
            for (var statename in data) {
              var district = [];
              var code = data[statename].statecode;

              for (var districtname in data[statename].districtData) {
                var districtdata = data[statename].districtData[districtname];
                district.push({
                  name: districtname,
                  data: districtdata
                });
              }

              _this.stateList.push({
                districtData: district,
                statecode: code
              });
            }

            _this.currentState = _this.getStateFromCode(_this.statecode);
          });
          this.termSub = this.router.paramMap.subscribe(function (params) {
            _this.statecode = params.get("statecode");
          });
          this.currentState = this.getStateFromCode(this.statecode);
        }
      }, {
        key: "getStateFromCode",
        value: function getStateFromCode(statecode) {
          return this.stateList.find(function (state) {
            return state.statecode === statecode;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.termSub.unsubscribe();
        }
      }]);

      return TrackerComponent;
    }();

    TrackerComponent.ɵfac = function TrackerComponent_Factory(t) {
      return new (t || TrackerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dashboard_data_service__WEBPACK_IMPORTED_MODULE_2__["DashboardDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    TrackerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TrackerComponent,
      selectors: [["app-tracker"]],
      decls: 33,
      vars: 4,
      consts: [[2, "border", "1px solid black", "margin-left", "auto", "margin-right", "auto"], [2, "width", "50 px"], [4, "ngFor", "ngForOf"], [2, "width", "35 px"], ["class", "thead-light", 4, "ngIf"], [4, "ngIf"], [2, "color", "#d14566"], [2, "color", "darkslateblue"], [2, "color", "darkgreen"], [1, "btn", "btn-sm", "btn-primary", 2, "font-size", "medium", 3, "routerLink"], [1, "thead-light"], ["scope", "row"]],
      template: function TrackerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "corona-panel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "th", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Confirmed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Active");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Recovered");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Deceased");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TrackerComponent_tr_14_Template, 11, 5, "tr", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "State/UT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Confirmed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Active");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Recovered");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Deceased");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, TrackerComponent_tr_29_Template, 12, 8, "tr", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, TrackerComponent_thead_31_Template, 12, 0, "thead", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, TrackerComponent_tbody_32_Template, 2, 1, "tbody", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.totaldataonly);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.finalresponse);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentState);
        }
      },
      directives: [_dashboard_panel_panel_panel_component__WEBPACK_IMPORTED_MODULE_4__["PanelComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
      styles: ["[_nghost-%COMP%]{\r\n    display: block;\r\n}\r\ntable[_ngcontent-%COMP%]{\r\n\r\nborder-collapse: collapse;\r\nmargin: 10px;\r\nmargin-top: 15px;\r\njustify-content: center;\r\n}\r\ntr[_ngcontent-%COMP%]:nth-of-type(odd){\r\n    background: rgba(204, 145, 157, 0.6);\r\n    \r\n}\r\nth[_ngcontent-%COMP%]{\r\n\r\n    background: #333;\r\n    color:white;\r\n    font-weight: bold;\r\n}\r\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{\r\n    padding: 6px;\r\n    border:1px solid #ccc;\r\n\r\n}\r\n.btn.btn-sm[_ngcontent-%COMP%] {\r\n    background-color:black;\r\n    color: white;\r\n    display: flex;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhY2tlci90cmFja2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7O0FBRUEseUJBQXlCO0FBQ3pCLFlBQVk7QUFDWixnQkFBZ0I7QUFDaEIsdUJBQXVCO0FBQ3ZCO0FBRUE7SUFDSSxvQ0FBb0M7O0FBRXhDO0FBQ0E7O0lBRUksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7O0FBRXpCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGFBQWE7O0FBRWpCIiwiZmlsZSI6InNyYy9hcHAvdHJhY2tlci90cmFja2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbnRhYmxle1xyXG5cclxuYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxubWFyZ2luOiAxMHB4O1xyXG5tYXJnaW4tdG9wOiAxNXB4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxudHI6bnRoLW9mLXR5cGUob2RkKXtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjA0LCAxNDUsIDE1NywgMC42KTtcclxuICAgIFxyXG59XHJcbnRoe1xyXG5cclxuICAgIGJhY2tncm91bmQ6ICMzMzM7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG50ZCwgdGh7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XHJcblxyXG59XHJcbi5idG4uYnRuLXNtIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgXHJcbn1cclxuXHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrackerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-tracker',
          templateUrl: './tracker.component.html',
          styleUrls: ['./tracker.component.css']
        }]
      }], function () {
        return [{
          type: _services_dashboard_data_service__WEBPACK_IMPORTED_MODULE_2__["DashboardDataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/dashboard/content/content.component.ts":
  /*!****************************************************!*\
    !*** ./src/dashboard/content/content.component.ts ***!
    \****************************************************/

  /*! exports provided: ContentComponent */

  /***/
  function srcDashboardContentContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentComponent", function () {
      return ContentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ContentComponent = /*#__PURE__*/function () {
      function ContentComponent() {
        _classCallCheck(this, ContentComponent);
      }

      _createClass(ContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContentComponent;
    }();

    ContentComponent.ɵfac = function ContentComponent_Factory(t) {
      return new (t || ContentComponent)();
    };

    ContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContentComponent,
      selectors: [["corona-content"]],
      decls: 2,
      vars: 0,
      consts: [[1, "body-style"]],
      template: function ContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["[_nghost-%COMP%] {\r\n\r\n    display: flex;\r\n    background-color:#DDFEF2 ;\r\n    flex-grow: 1;\r\n}\r\n\r\n.body-style[_ngcontent-%COMP%]{\r\n\r\n    padding: 20px;\r\n    flex-grow: 1;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9kYXNoYm9hcmQvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBOztJQUVJLGFBQWE7SUFDYixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9kYXNoYm9hcmQvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I0RERkVGMiA7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbi5ib2R5LXN0eWxle1xyXG5cclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'corona-content',
          templateUrl: './content.component.html',
          styleUrls: ['./content.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/dashboard/dashboard.module.ts":
  /*!*******************************************!*\
    !*** ./src/dashboard/dashboard.module.ts ***!
    \*******************************************/

  /*! exports provided: DashboardModule */

  /***/
  function srcDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
      return DashboardModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/dashboard/dashboard/dashboard.component.ts");
    /* harmony import */


    var _content_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./content/content.component */
    "./src/dashboard/content/content.component.ts");
    /* harmony import */


    var _title_bar_title_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./title-bar/title-bar.component */
    "./src/dashboard/title-bar/title-bar.component.ts");
    /* harmony import */


    var _status_bar_status_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./status-bar/status-bar.component */
    "./src/dashboard/status-bar/status-bar.component.ts");
    /* harmony import */


    var _services_menu_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/menu.service */
    "./src/dashboard/services/menu.service.ts");
    /* harmony import */


    var _services_configuration_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./services/configuration.service */
    "./src/dashboard/services/configuration.service.ts");
    /* harmony import */


    var _menus_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./menus/menu/menu.component */
    "./src/dashboard/menus/menu/menu.component.ts");
    /* harmony import */


    var _menus_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./menus/menu-item/menu-item.component */
    "./src/dashboard/menus/menu-item/menu-item.component.ts");
    /* harmony import */


    var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./top-bar/top-bar.component */
    "./src/dashboard/top-bar/top-bar.component.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _users_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./users/sign-in/sign-in.component */
    "./src/dashboard/users/sign-in/sign-in.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _panel_panel_panel_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./panel/panel/panel.component */
    "./src/dashboard/panel/panel/panel.component.ts");

    var DashboardModule = function DashboardModule() {
      _classCallCheck(this, DashboardModule);
    };

    DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DashboardModule
    });
    DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DashboardModule_Factory(t) {
        return new (t || DashboardModule)();
      },
      providers: [_services_menu_service__WEBPACK_IMPORTED_MODULE_6__["MenuService"], _services_configuration_service__WEBPACK_IMPORTED_MODULE_7__["ConfigurationService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserModule"], src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardModule, {
        declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], _content_content_component__WEBPACK_IMPORTED_MODULE_3__["ContentComponent"], _title_bar_title_bar_component__WEBPACK_IMPORTED_MODULE_4__["TitleBarComponent"], _status_bar_status_bar_component__WEBPACK_IMPORTED_MODULE_5__["StatusBarComponent"], _menus_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"], _menus_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_9__["MenuItemComponent"], _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_10__["TopBarComponent"], _users_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_13__["SignInComponent"], _panel_panel_panel_component__WEBPACK_IMPORTED_MODULE_15__["PanelComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserModule"], src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"]],
        exports: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], _title_bar_title_bar_component__WEBPACK_IMPORTED_MODULE_4__["TitleBarComponent"], _status_bar_status_bar_component__WEBPACK_IMPORTED_MODULE_5__["StatusBarComponent"], _content_content_component__WEBPACK_IMPORTED_MODULE_3__["ContentComponent"], _menus_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"], _menus_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_9__["MenuItemComponent"], _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_10__["TopBarComponent"], _users_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_13__["SignInComponent"], _panel_panel_panel_component__WEBPACK_IMPORTED_MODULE_15__["PanelComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], _content_content_component__WEBPACK_IMPORTED_MODULE_3__["ContentComponent"], _title_bar_title_bar_component__WEBPACK_IMPORTED_MODULE_4__["TitleBarComponent"], _status_bar_status_bar_component__WEBPACK_IMPORTED_MODULE_5__["StatusBarComponent"], _menus_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"], _menus_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_9__["MenuItemComponent"], _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_10__["TopBarComponent"], _users_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_13__["SignInComponent"], _panel_panel_panel_component__WEBPACK_IMPORTED_MODULE_15__["PanelComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserModule"], src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"]],
          providers: [_services_menu_service__WEBPACK_IMPORTED_MODULE_6__["MenuService"], _services_configuration_service__WEBPACK_IMPORTED_MODULE_7__["ConfigurationService"]],
          exports: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], _title_bar_title_bar_component__WEBPACK_IMPORTED_MODULE_4__["TitleBarComponent"], _status_bar_status_bar_component__WEBPACK_IMPORTED_MODULE_5__["StatusBarComponent"], _content_content_component__WEBPACK_IMPORTED_MODULE_3__["ContentComponent"], _menus_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"], _menus_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_9__["MenuItemComponent"], _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_10__["TopBarComponent"], _users_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_13__["SignInComponent"], _panel_panel_panel_component__WEBPACK_IMPORTED_MODULE_15__["PanelComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/dashboard/dashboard/dashboard.component.ts":
  /*!********************************************************!*\
    !*** ./src/dashboard/dashboard/dashboard.component.ts ***!
    \********************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcDashboardDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _title_bar_title_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../title-bar/title-bar.component */
    "./src/dashboard/title-bar/title-bar.component.ts");
    /* harmony import */


    var _content_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../content/content.component */
    "./src/dashboard/content/content.component.ts");
    /* harmony import */


    var _status_bar_status_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../status-bar/status-bar.component */
    "./src/dashboard/status-bar/status-bar.component.ts");

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent() {
        _classCallCheck(this, DashboardComponent);
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)();
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["corona-dashboard"]],
      decls: 3,
      vars: 0,
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "corona-title-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "corona-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "corona-status-bar");
        }
      },
      directives: [_title_bar_title_bar_component__WEBPACK_IMPORTED_MODULE_1__["TitleBarComponent"], _content_content_component__WEBPACK_IMPORTED_MODULE_2__["ContentComponent"], _status_bar_status_bar_component__WEBPACK_IMPORTED_MODULE_3__["StatusBarComponent"]],
      styles: ["[_nghost-%COMP%]{\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    position:absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left:0;\r\n    right:0\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9kYXNoYm9hcmQvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLE1BQU07SUFDTixTQUFTO0lBQ1QsTUFBTTtJQUNOO0FBQ0oiLCJmaWxlIjoic3JjL2Rhc2hib2FyZC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDowO1xyXG4gICAgcmlnaHQ6MFxyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'corona-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/dashboard/menus/menu-item/menu-item.component.ts":
  /*!**************************************************************!*\
    !*** ./src/dashboard/menus/menu-item/menu-item.component.ts ***!
    \**************************************************************/

  /*! exports provided: MenuItemComponent */

  /***/
  function srcDashboardMenusMenuItemMenuItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuItemComponent", function () {
      return MenuItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var MenuItemComponent = /*#__PURE__*/function () {
      function MenuItemComponent() {
        _classCallCheck(this, MenuItemComponent);
      }

      _createClass(MenuItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MenuItemComponent;
    }();

    MenuItemComponent.ɵfac = function MenuItemComponent_Factory(t) {
      return new (t || MenuItemComponent)();
    };

    MenuItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MenuItemComponent,
      selectors: [["corona-menu-item"]],
      inputs: {
        item: "item"
      },
      decls: 4,
      vars: 5,
      consts: [["routerLinkActive", "router-link-active", 1, "menu-item", 3, "routerLink"]],
      template: function MenuItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.item.route);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("fa ", ctx.item.icon, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.text.toUpperCase());
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: ["[_nghost-%COMP%]{\r\n    display: inline-block;\r\n    position: relative;\r\n    margin-left: 0;\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n    padding: 0;\r\n    font-size: 15px;\r\n    line-height: 15px;\r\n    color: whitesmoke;\r\n    cursor: pointer;\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n}\r\n\r\n[_nghost-%COMP%]:not(.parent-is-popup){\r\n    margin-left: 16px;\r\n    width: auto;\r\n\r\n}\r\n\r\nspan[_ngcontent-%COMP%] {\r\n\r\n    pointer-events: none;\r\n}\r\n\r\n.fa[_ngcontent-%COMP%] {\r\n    top:1px;\r\n    font-size: 14px;\r\n    margin-right: 4px;\r\n    margin-left: 8px;\r\n}\r\n\r\n.menu-item[_ngcontent-%COMP%]{\r\n    padding: 10px 10px 10px 0;\r\n}\r\n\r\n.menu-item[_ngcontent-%COMP%]:hover{\r\n    background-color: gray ;\r\n}\r\n\r\n.router-link-active[_ngcontent-%COMP%]{\r\n    background-color: gray;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9kYXNoYm9hcmQvbWVudXMvbWVudS1pdGVtL21lbnUtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVzs7QUFFZjs7QUFDQTs7SUFFSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2Rhc2hib2FyZC9tZW51cy9tZW51LWl0ZW0vbWVudS1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuOmhvc3Q6bm90KC5wYXJlbnQtaXMtcG9wdXApe1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuXHJcbn1cclxuc3BhbiB7XHJcblxyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5mYSB7XHJcbiAgICB0b3A6MXB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG59XHJcbi5tZW51LWl0ZW17XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAwO1xyXG59XHJcblxyXG4ubWVudS1pdGVtOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheSA7XHJcbn1cclxuXHJcbi5yb3V0ZXItbGluay1hY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'corona-menu-item',
          templateUrl: './menu-item.component.html',
          styleUrls: ['./menu-item.component.css']
        }]
      }], function () {
        return [];
      }, {
        item: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/dashboard/menus/menu/menu.component.ts":
  /*!****************************************************!*\
    !*** ./src/dashboard/menus/menu/menu.component.ts ***!
    \****************************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcDashboardMenusMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_dashboard_services_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/dashboard/services/menu.service */
    "./src/dashboard/services/menu.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../menu-item/menu-item.component */
    "./src/dashboard/menus/menu-item/menu-item.component.ts");

    function MenuComponent_li_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "corona-menu-item", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var itemEl_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", itemEl_r1);
      }
    }

    var MenuComponent = /*#__PURE__*/function () {
      function MenuComponent(menuService) {
        _classCallCheck(this, MenuComponent);

        this.menuService = menuService;
      }

      _createClass(MenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MenuComponent;
    }();

    MenuComponent.ɵfac = function MenuComponent_Factory(t) {
      return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_dashboard_services_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"]));
    };

    MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MenuComponent,
      selectors: [["corona-menu"]],
      decls: 3,
      vars: 1,
      consts: [[4, "ngFor", "ngForOf"], [3, "item"]],
      template: function MenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MenuComponent_li_2_Template, 2, 1, "li", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuService.items);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_3__["MenuItemComponent"]],
      styles: ["[_nghost-%COMP%]{\r\n\r\n    display: flex;\r\n    align-items: flex-end;\r\n    justify-content: flex-end;\r\n    flex-grow: 1;\r\n\r\n}\r\n\r\nul[_ngcontent-%COMP%]{\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n\r\n}\r\n\r\nli[_ngcontent-%COMP%]{\r\n    display:inline;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9kYXNoYm9hcmQvbWVudXMvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsU0FBUztJQUNULFVBQVU7O0FBRWQ7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9kYXNoYm9hcmQvbWVudXMvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuXHJcbn1cclxuXHJcbnVse1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuXHJcbn1cclxuXHJcbmxpe1xyXG4gICAgZGlzcGxheTppbmxpbmU7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'corona-menu',
          templateUrl: './menu.component.html',
          styleUrls: ['./menu.component.css']
        }]
      }], function () {
        return [{
          type: src_dashboard_services_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/dashboard/panel/panel/panel.component.ts":
  /*!******************************************************!*\
    !*** ./src/dashboard/panel/panel/panel.component.ts ***!
    \******************************************************/

  /*! exports provided: PanelComponent */

  /***/
  function srcDashboardPanelPanelPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PanelComponent", function () {
      return PanelComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var _c0 = ["*"];

    var PanelComponent = /*#__PURE__*/function () {
      function PanelComponent() {
        _classCallCheck(this, PanelComponent);
      }

      _createClass(PanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PanelComponent;
    }();

    PanelComponent.ɵfac = function PanelComponent_Factory(t) {
      return new (t || PanelComponent)();
    };

    PanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PanelComponent,
      selectors: [["corona-panel"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function PanelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9kYXNoYm9hcmQvcGFuZWwvcGFuZWwvcGFuZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUciLCJmaWxlIjoic3JjL2Rhc2hib2FyZC9wYW5lbC9wYW5lbC9wYW5lbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogOmhvc3R7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbjo0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIGJsdWV2aW9sZXQ7XHJcbn0gKi8iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'corona-panel',
          templateUrl: './panel.component.html',
          styleUrls: ['./panel.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/dashboard/services/configuration.service.ts":
  /*!*********************************************************!*\
    !*** ./src/dashboard/services/configuration.service.ts ***!
    \*********************************************************/

  /*! exports provided: ConfigurationService */

  /***/
  function srcDashboardServicesConfigurationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigurationService", function () {
      return ConfigurationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ConfigurationService = /*#__PURE__*/function () {
      function ConfigurationService() {
        _classCallCheck(this, ConfigurationService);

        this.showUserControls = true;
        this.showStatusBar = true;
        this.showstatusBarBreakpoint = 0;
      }

      _createClass(ConfigurationService, [{
        key: "configure",
        value: function configure(settings) {
          Object.assign(this, settings);
        }
      }]);

      return ConfigurationService;
    }();

    ConfigurationService.ɵfac = function ConfigurationService_Factory(t) {
      return new (t || ConfigurationService)();
    };

    ConfigurationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ConfigurationService,
      factory: ConfigurationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigurationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/dashboard/services/menu.service.ts":
  /*!************************************************!*\
    !*** ./src/dashboard/services/menu.service.ts ***!
    \************************************************/

  /*! exports provided: MenuService */

  /***/
  function srcDashboardServicesMenuServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuService", function () {
      return MenuService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MenuService = function MenuService() {
      _classCallCheck(this, MenuService);
    };

    MenuService.ɵfac = function MenuService_Factory(t) {
      return new (t || MenuService)();
    };

    MenuService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MenuService,
      factory: MenuService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/dashboard/status-bar/status-bar.component.ts":
  /*!**********************************************************!*\
    !*** ./src/dashboard/status-bar/status-bar.component.ts ***!
    \**********************************************************/

  /*! exports provided: StatusBarComponent */

  /***/
  function srcDashboardStatusBarStatusBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatusBarComponent", function () {
      return StatusBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var StatusBarComponent = /*#__PURE__*/function () {
      function StatusBarComponent() {
        _classCallCheck(this, StatusBarComponent);
      }

      _createClass(StatusBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StatusBarComponent;
    }();

    StatusBarComponent.ɵfac = function StatusBarComponent_Factory(t) {
      return new (t || StatusBarComponent)();
    };

    StatusBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StatusBarComponent,
      selectors: [["corona-status-bar"]],
      decls: 2,
      vars: 0,
      consts: [[2, "color", "black"]],
      template: function StatusBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Stay Home !!Stay Safe :)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["[_nghost-%COMP%]{\r\n\r\nbackground-color: grey;\r\nmin-height: 26px;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9kYXNoYm9hcmQvc3RhdHVzLWJhci9zdGF0dXMtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsc0JBQXNCO0FBQ3RCLGdCQUFnQjs7QUFFaEIiLCJmaWxlIjoic3JjL2Rhc2hib2FyZC9zdGF0dXMtYmFyL3N0YXR1cy1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xyXG5cclxuYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxubWluLWhlaWdodDogMjZweDtcclxuXHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatusBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'corona-status-bar',
          templateUrl: './status-bar.component.html',
          styleUrls: ['./status-bar.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/dashboard/title-bar/title-bar.component.ts":
  /*!********************************************************!*\
    !*** ./src/dashboard/title-bar/title-bar.component.ts ***!
    \********************************************************/

  /*! exports provided: TitleBarComponent */

  /***/
  function srcDashboardTitleBarTitleBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TitleBarComponent", function () {
      return TitleBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../top-bar/top-bar.component */
    "./src/dashboard/top-bar/top-bar.component.ts");
    /* harmony import */


    var _menus_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../menus/menu/menu.component */
    "./src/dashboard/menus/menu/menu.component.ts");

    var _c0 = function _c0() {
      return ["/dashboard"];
    };

    var TitleBarComponent = /*#__PURE__*/function () {
      function TitleBarComponent(router) {
        _classCallCheck(this, TitleBarComponent);

        this.router = router;
      }

      _createClass(TitleBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TitleBarComponent;
    }();

    TitleBarComponent.ɵfac = function TitleBarComponent_Factory(t) {
      return new (t || TitleBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    TitleBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TitleBarComponent,
      selectors: [["corona-title-bar"]],
      decls: 5,
      vars: 2,
      consts: [[1, "title-bar"], ["src", "assets/logo.png", "alt", "Covid-19 India Dashboard Logo", 3, "routerLink"], [1, "menu-area"]],
      template: function TitleBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "corona-top-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "corona-menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_2__["TopBarComponent"], _menus_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"]],
      styles: ["[_nghost-%COMP%]{\r\n\r\n    display: flex;\r\n}\r\n.title-bar[_ngcontent-%COMP%] {\r\n    flex-grow :1;\r\n    display: flex;\r\n    min-height: 40px;\r\n}\r\n.menu-area[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-grow: 1;\r\n    padding-right: 20px;\r\n}\r\nspan[_ngcontent-%COMP%]{\r\n    margin-left: 10px;\r\n    margin-right: 20px;\r\n    font-size: 25px;\r\n    line-height: 50px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9kYXNoYm9hcmQvdGl0bGUtYmFyL3RpdGxlLWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGFBQWE7QUFDakI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvZGFzaGJvYXJkL3RpdGxlLWJhci90aXRsZS1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLnRpdGxlLWJhciB7XHJcbiAgICBmbGV4LWdyb3cgOjE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWluLWhlaWdodDogNDBweDtcclxufVxyXG4ubWVudS1hcmVhe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcbnNwYW57XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TitleBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'corona-title-bar',
          templateUrl: './title-bar.component.html',
          styleUrls: ['./title-bar.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/dashboard/top-bar/top-bar.component.ts":
  /*!****************************************************!*\
    !*** ./src/dashboard/top-bar/top-bar.component.ts ***!
    \****************************************************/

  /*! exports provided: TopBarComponent */

  /***/
  function srcDashboardTopBarTopBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopBarComponent", function () {
      return TopBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_configuration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/configuration.service */
    "./src/dashboard/services/configuration.service.ts");
    /* harmony import */


    var _users_users_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../users/users-api */
    "./src/dashboard/users/users-api.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/signin"];
    };

    function TopBarComponent_div_0_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "SIGN IN");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    function TopBarComponent_div_0_span_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopBarComponent_div_0_span_2_Template_span_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r3.signOut();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "SIGN OUT");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TopBarComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TopBarComponent_div_0_span_1_Template, 2, 2, "span", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TopBarComponent_div_0_span_2_Template, 2, 0, "span", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.userApi.access);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.userApi.access == true);
      }
    }

    var TopBarComponent = /*#__PURE__*/function () {
      function TopBarComponent(configurationServices, userApi) {
        _classCallCheck(this, TopBarComponent);

        this.configurationServices = configurationServices;
        this.userApi = userApi;
      }

      _createClass(TopBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "signOut",
        value: function signOut() {
          this.userApi.signOut();
          this.userApi.access = false;
        }
      }]);

      return TopBarComponent;
    }();

    TopBarComponent.ɵfac = function TopBarComponent_Factory(t) {
      return new (t || TopBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_configuration_service__WEBPACK_IMPORTED_MODULE_1__["ConfigurationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_users_users_api__WEBPACK_IMPORTED_MODULE_2__["UserApi"]));
    };

    TopBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TopBarComponent,
      selectors: [["corona-top-bar"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], ["class", "sign-out", 3, "routerLink", 4, "ngIf"], ["class", "sign-out", 3, "click", 4, "ngIf"], [1, "sign-out", 3, "routerLink"], [1, "sign-out", 3, "click"]],
      template: function TopBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TopBarComponent_div_0_Template, 3, 2, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.configurationServices.showUserControls);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]],
      styles: ["[_nghost-%COMP%] {\r\n    height: 30px;\r\n    text-align: right;\r\n    padding-top: 4px;\r\n    color: whitesmoke;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]{\r\n    display: inline;\r\n    margin-left: 34px;\r\n}\r\n\r\n.sign-out[_ngcontent-%COMP%]{\r\n    margin-left: 12px;\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9kYXNoYm9hcmQvdG9wLWJhci90b3AtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2Rhc2hib2FyZC90b3AtYmFyL3RvcC1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgcGFkZGluZy10b3A6IDRweDtcclxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59XHJcblxyXG5kaXZ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBtYXJnaW4tbGVmdDogMzRweDtcclxufVxyXG4uc2lnbi1vdXR7XHJcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'corona-top-bar',
          templateUrl: './top-bar.component.html',
          styleUrls: ['./top-bar.component.css']
        }]
      }], function () {
        return [{
          type: _services_configuration_service__WEBPACK_IMPORTED_MODULE_1__["ConfigurationService"]
        }, {
          type: _users_users_api__WEBPACK_IMPORTED_MODULE_2__["UserApi"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/dashboard/users/sign-in/sign-in.component.ts":
  /*!**********************************************************!*\
    !*** ./src/dashboard/users/sign-in/sign-in.component.ts ***!
    \**********************************************************/

  /*! exports provided: SignInComponent */

  /***/
  function srcDashboardUsersSignInSignInComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignInComponent", function () {
      return SignInComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _users_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../users-api */
    "./src/dashboard/users/users-api.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SignInComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.formError, " ");
      }
    }

    function SignInComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sign In");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignInComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Signing In....");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var SignInComponent = /*#__PURE__*/function () {
      function SignInComponent(UserApi, router) {
        _classCallCheck(this, SignInComponent);

        this.UserApi = UserApi;
        this.router = router;
        this.submitting = false;
      }

      _createClass(SignInComponent, [{
        key: "onSubmit",
        value: function onSubmit(signInForm) {
          var _this2 = this;

          if (signInForm.valid) {
            console.log('submitting...', signInForm);
            this.submitting = true;
            this.UserApi.access = true;
            this.UserApi.signIn(signInForm.value.username, signInForm.value.password).subscribe(function (data) {
              console.log('is valid data', data);

              if (signInForm.value.username == 'admin' && signInForm.value.password == "admin") {
                _this2.router.navigate(['/authenticated/admin']);

                _this2.UserApi.access = true;
              } else {
                _this2.submitting = false;
                _this2.UserApi.access = false;
                alert("You are not authorized, Please login with admin credentials");
              }
            }, function (error) {
              _this2.submitting = false;
              _this2.UserApi.access = false;
              console.log('Error occured', error);
              _this2.formError = error;
            });
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SignInComponent;
    }();

    SignInComponent.ɵfac = function SignInComponent_Factory(t) {
      return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_users_api__WEBPACK_IMPORTED_MODULE_1__["UserApi"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    SignInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignInComponent,
      selectors: [["corona-sign-in"]],
      decls: 19,
      vars: 5,
      consts: [[1, "sign-in-form"], ["src", "../../../assets/logo.png"], [3, "ngSubmit"], ["signInForm", "ngForm"], [1, "form-group"], ["name", "username", "required", "", "placeholder", "User Name", "ngModel", "", 1, "form-control"], ["username", "ngModel"], [1, "alert", "alert-danger", 3, "hidden"], ["name", "password", "required", "", "type", "password", "placeholder", "Password", "ngModel", "", 1, "form-control"], ["password", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], [4, "ngIf"], [1, "alert", "alert-danger"], ["type", "submit", 1, "btn", "btn-primary"], [1, "message"]],
      template: function SignInComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sign In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignInComponent_Template_form_ngSubmit_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

            return ctx.onSubmit(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " User Name is necessary. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Password is necessary. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SignInComponent_div_16_Template, 2, 1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SignInComponent_div_17_Template, 3, 0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SignInComponent_div_18_Template, 3, 0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r1.valid || _r1.pristine);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r2.valid || _r2.pristine);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formError);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.submitting);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitting);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: ["[_nghost-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 100vh;  \r\n    width: 100vw;\r\n    background-image: url('medical.jpg');\r\n    background-position: center center;\r\n    background-size: cover;\r\n}\r\n.sign-in-form[_ngcontent-%COMP%] {\r\n\r\n    min-width: 300px;\r\n    background-color: whitesmoke;\r\n    opacity: .93;\r\n    padding: 20 px;\r\n\r\n}\r\na[_ngcontent-%COMP%]{\r\n\r\n    line-height: 32 px;\r\n}\r\nbutton[_ngcontent-%COMP%]{\r\n\r\n    float: right;\r\n}\r\n.message[_ngcontent-%COMP%]{\r\n\r\n    float: right;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9kYXNoYm9hcmQvdXNlcnMvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsWUFBWTtJQUNaLG9DQUFrRDtJQUNsRCxrQ0FBa0M7SUFDbEMsc0JBQXNCO0FBQzFCO0FBQ0E7O0lBRUksZ0JBQWdCO0lBQ2hCLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osY0FBYzs7QUFFbEI7QUFDQTs7SUFFSSxrQkFBa0I7QUFDdEI7QUFFQTs7SUFFSSxZQUFZO0FBQ2hCO0FBRUE7O0lBRUksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvZGFzaGJvYXJkL3VzZXJzL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDsgIFxyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9tZWRpY2FsLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4uc2lnbi1pbi1mb3JtIHtcclxuXHJcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIG9wYWNpdHk6IC45MztcclxuICAgIHBhZGRpbmc6IDIwIHB4O1xyXG5cclxufVxyXG5he1xyXG5cclxuICAgIGxpbmUtaGVpZ2h0OiAzMiBweDtcclxufVxyXG5cclxuYnV0dG9ue1xyXG5cclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLm1lc3NhZ2V7XHJcblxyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignInComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'corona-sign-in',
          templateUrl: './sign-in.component.html',
          styleUrls: ['./sign-in.component.css']
        }]
      }], function () {
        return [{
          type: _users_api__WEBPACK_IMPORTED_MODULE_1__["UserApi"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/dashboard/users/users-api.ts":
  /*!******************************************!*\
    !*** ./src/dashboard/users/users-api.ts ***!
    \******************************************/

  /*! exports provided: UserApi */

  /***/
  function srcDashboardUsersUsersApiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserApi", function () {
      return UserApi;
    });

    var UserApi = function UserApi() {
      _classCallCheck(this, UserApi);
    };
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Assignment\corona\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map