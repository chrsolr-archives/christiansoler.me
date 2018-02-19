'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    name: { type: String, required: true, unique: true, trim: true },
    name_canonical: { type: String, required: true, trim: true, index: true, unique: true, uppercase: true }
});

module.exports = mongoose.model('tag', Schema);