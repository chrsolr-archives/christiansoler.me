'use strict';

const config = require('./server/config/web-config');
const server = require('./server/config/express-config');
const mongoose = require('mongoose');

const hostname = config.server.hostname;
const port = config.server.port;

mongoose.Promise = global.Promise;
mongoose.connect(config.server.db_url, (err) => {
    if (err) {
        console.error(err);
    }
});

server.listen(port, (err) => {
    if (err) { 
        console.error(err); 
    }
    console.info(`Server running at http://${hostname}:${port}/`);
});