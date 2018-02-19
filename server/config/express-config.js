'use strict';

const config = require('./web-config');
const routes = require('../routes');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Setup body parser 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setup view engine (pug)
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

// Setup static files path
app.use(express.static('public'));
app.use('/libs', express.static(path.join(__dirname, '../../node_modules')))

// Global variables
app.locals.brand_title = config.server.brand_title;

// Mount all application & APIs routes
routes(app);

// Export express app
module.exports = app;