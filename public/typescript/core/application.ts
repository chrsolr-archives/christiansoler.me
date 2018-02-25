((): void => {
    'use strict';

    const APP_NAME = 'app';
    const modules = [
        `${APP_NAME}.services`, 
        `${APP_NAME}.controllers`, 
        `${APP_NAME}.filters`,
        `${APP_NAME}.directives`,
        'ngRoute'
    ];

    angular.module(`${APP_NAME}.services`, []);
    angular.module(`${APP_NAME}.controllers`, []);
    angular.module(`${APP_NAME}.filters`, []);
    angular.module(`${APP_NAME}.directives`, []);
    angular.module(`${APP_NAME}`, modules);
})();