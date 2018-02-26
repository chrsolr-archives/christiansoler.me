((app: any): void => {

    app.config(config);

    config.$inject = ['$routeProvider', '$locationProvider'];

    function config($routeProvider: ng.route.IRouteProvider, $locationProvider: ng.ILocationProvider) {
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
})(app || angular);