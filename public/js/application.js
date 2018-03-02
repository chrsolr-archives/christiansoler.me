'use strict';

window.APP_NAME = 'app';

(function () {
    var modules = [window.APP_NAME + '.services', window.APP_NAME + '.controllers', window.APP_NAME + '.filters', window.APP_NAME + '.directives', 'ngRoute'];

    angular.module(window.APP_NAME + '.services', []);
    angular.module(window.APP_NAME + '.controllers', []);
    angular.module(window.APP_NAME + '.filters', []);
    angular.module(window.APP_NAME + '.directives', []);
    angular.module('' + window.APP_NAME, modules);
})();
'use strict';

(function () {
    var Config = function () {
        function Config($routeProvider, $locationProvider) {
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

        return Config;
    }();

    Config.$inject = ['$routeProvider', '$locationProvider'];

    angular.module(window.APP_NAME).config(Config);
})();
'use strict';

(function () {
    var HomeController = function () {
        function HomeController() {
            var _this = this;
            _this.title = 'christiansoler.me';
            _this.subtitle = 'Under Construction';
        }

        return HomeController;
    }();

    HomeController.$inject = [];

    angular.module(window.APP_NAME + '.controllers').controller('HomeController', HomeController);
})();
//# sourceMappingURL=application.js.map
