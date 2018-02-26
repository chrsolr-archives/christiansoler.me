"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular = require("../../../node_modules/@types/angular/index");
var APP_NAME = 'app';
var modules = [
    APP_NAME + ".services",
    APP_NAME + ".controllers",
    APP_NAME + ".filters",
    APP_NAME + ".directives",
    'ngRoute'
];
angular.module(APP_NAME + ".services", []);
angular.module(APP_NAME + ".controllers", []);
angular.module(APP_NAME + ".filters", []);
angular.module(APP_NAME + ".directives", []);
angular.module("" + APP_NAME, modules);

"use strict";
(function () {
    angular.module('app').config(config);
    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            templateUrl: '/views/home.html',
            caseInsensitiveMatch: true,
            controller: 'HomeController',
            controllerAs: 'vm'
        }).otherwise({
            redirectTo: '/'
        });
        $locationProvider.html5Mode(true);
    }
    ;
})();

//# sourceMappingURL=application.js.map
