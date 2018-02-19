'use strict';

const path = require('path');
const express = require('express');
const router = express.Router();

/**
 * @description Contains All Generic Routes.
 */
module.exports = () => {

    // Home route
    router.get('/', (req, res, next) => {
        return res.render('partials/index');
    });

    // About route
    router.get('/about', (req, res, next) => {
        return res.render('partials/about');
    });

    // Term of Use/Services route
    router.get('/tos', (req, res, next) => {
        return res.render('partials/tos');
    });

    // Return router
    return router;
};