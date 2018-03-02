'use strict';

window.APP_NAME = 'app';

var modules = [window.APP_NAME + '.services', window.APP_NAME + '.controllers', window.APP_NAME + '.filters', window.APP_NAME + '.directives', 'ngRoute'];

angular.module(window.APP_NAME + '.services', []);
angular.module(window.APP_NAME + '.controllers', []);
angular.module(window.APP_NAME + '.filters', []);
angular.module(window.APP_NAME + '.directives', []);
angular.module('' + window.APP_NAME, modules);
'use strict';

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
    };

    Config.$inject = ['$routeProvider', '$locationProvider'];

    return Config;
}();

angular.module(window.APP_NAME).config(Config);
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HomeController = function HomeController() {
    _classCallCheck(this, HomeController);

    var _this = this;
    _this.title = 'christiansoler.me';
    _this.subtitle = 'Under Construction';
};

HomeController.$inject = [];

angular.module(window.APP_NAME + '.controllers').controller('HomeController', HomeController);
//# sourceMappingURL=application.js.map
