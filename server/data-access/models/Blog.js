'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    image_url: { type: String, required: true },
    title: { type: String, required: true },
    permalink: {type: String, required: true },
    is_active: {type: Boolean, default: false },
    tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'tags' }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'comments' }],
    author: [{ type: mongoose.Schema.Types.ObjectId, ref: 'users' }],
    preview: { type: String, required: true },
    type: { type: String, required: true },
    content: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('blog', Schema);