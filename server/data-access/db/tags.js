'use strict';

const TagModel = require('../models/Tag');

class DbContext {
    constructor() { }

    add(tags) {
        if (typeof tags === 'string' || tags instanceof String) {
            tags = [tags];
        }

        const promise = new Promise((resolve, reject) => {
            let _query = TagModel.find({});
            _query.where('name');
            _query.in(tags);
            _query.exec((err, tags_in_db) => {
                if (err) {
                    return reject(err);
                }

                if (tags_in_db.length) {
                    // TODO: Find better solution
                    tags.forEach((value) => {
                        tags_in_db.forEach((obj) => {
                            if (value.trim().toUpperCase() === obj.name_canonical) {
                                tags.splice(tags.indexOf(value), 1);
                            }
                        });
                    });
                }

                tags = tags.map((value) => {
                    return { name: value, name_canonical: value };
                });

                TagModel.insertMany(tags, (err, docs) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(docs);
                });
            });
        });

        return promise;
    }
}

module.exports = new DbContext();