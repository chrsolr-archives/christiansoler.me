'use strict';

window.APP_NAME = 'app';

(function () {
    var APP_NAME = 'app';

    var modules = [window.APP_NAME + '.services', window.APP_NAME + '.controllers', window.APP_NAME + '.filters', window.APP_NAME + '.directives', 'ngRoute'];

    angular.module(window.APP_NAME + '.services', []);
    angular.module(window.APP_NAME + '.controllers', []);
    angular.module(window.APP_NAME + '.filters', []);
    angular.module(window.APP_NAME + '.directives', []);

    return angular.module('' + window.APP_NAME, modules);
})();
'use strict';

(function () {

    angular.module(window.APP_NAME).config(config);

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
    };
})();
'use strict';

(function () {

    angular.module(window.APP_NAME + '.controllers').controller('HomeController', HomeController);

    HomeController.$inject = [];

    function HomeController() {
        var _this = this;

        _this.title = 'christiansoler.me';
        _this.subtitle = 'Under Development';
    };
})();
//# sourceMappingURL=application.js.map
