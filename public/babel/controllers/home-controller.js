
class HomeController {
    constructor() {
        const _this = this;
        _this.title = 'christiansoler.me';
        _this.subtitle = 'Under Construction';
    }
}

HomeController.$inject = [];

angular.module(`${window.APP_NAME}.controllers`).controller('HomeController', HomeController);