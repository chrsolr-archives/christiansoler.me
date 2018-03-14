'use strict';

const path = require('path');
const express = require('express');
const router = express.Router();

/**
 * @description Contains All Generic Routes.
 */
module.exports = () => {

    // Home route
    router.get('/android/xa/version', (req, res, next) => {
        return res.status(200).send({
            version_code: 1,
            version_name: '0.0.1',
            xda_thread_url: 'https://forum.xda-developers.com/android/apps-games/app-xa-unofficial-xboxachievements-com-t3600450',
            download_url: 'https://labs.xda-developers.com/store/app/io.keypunchers.xa'
        });
    });

    // Return router
    return router;
};
