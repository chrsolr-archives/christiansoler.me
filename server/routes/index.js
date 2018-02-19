'use strict';

/**
 * @description Attach routes.
 * 
 * @param {*} express_app Express App.
 */
module.exports = (express_app) => {
    // Home, About, Term of Use/Services & Generic Routes
    express_app.use('/', require('./src/home-routes')());

    // API routes for Tags
    express_app.use('/api', require('./src/tags-routes')());

    // Catchall Route
    express_app.get('*', (req, res) => {
        res.redirect('/');
    });
};