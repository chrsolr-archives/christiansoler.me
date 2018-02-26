(() => {

    app.config(config);

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