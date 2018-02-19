'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    provider: { type: String, required: true },
    name: String,

    is_admin: { type: Boolean, default: false },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },

    google: { type: Object },
    twitter: { type: Object },
    facebook: { type: Object },
    github: { type: Object },
    reddit: { type: Object }
});

module.exports = mongoose.model('user', Schema);