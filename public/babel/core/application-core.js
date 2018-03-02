window.APP_NAME = 'app';

(() => {
    const modules = [
        `${window.APP_NAME}.services`,
        `${window.APP_NAME}.controllers`,
        `${window.APP_NAME}.filters`,
        `${window.APP_NAME}.directives`,
        'ngRoute'
    ];
    
    angular.module(`${window.APP_NAME}.services`, []);
    angular.module(`${window.APP_NAME}.controllers`, []);
    angular.module(`${window.APP_NAME}.filters`, []);
    angular.module(`${window.APP_NAME}.directives`, []);
    angular.module(`${window.APP_NAME}`, modules);
})();