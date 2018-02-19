'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    is_active: { type: boolean, default: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    content: { type: String, required: true }
});

module.exports = mongoose.model('comment', Schema);