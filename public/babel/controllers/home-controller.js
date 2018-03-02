(() => {
    
    angular.module(`${window.APP_NAME}.controllers`).controller('HomeController', HomeController);

    HomeController.$inject = [];

    function HomeController() {
        const _this = this;

        _this.title = 'christiansoler.me';
        _this.subtitle = 'Under Development';
    };
})();
