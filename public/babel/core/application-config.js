(() => {
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

    Config.$inject = ['$routeProvider', '$locationProvider'];

    angular.module(window.APP_NAME).config(Config);
})();