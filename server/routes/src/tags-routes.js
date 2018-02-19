'use strict';

const express = require('express');
const router = express.Router();
const db = require('../../data-access/db');

/**
 * @description Contains All Generic Routes.
 */
module.exports = () => {
    // Home route
    router.post('/tags', (req, res, next) => {
        const tags = req.body.tags;

        db.tags.add(tags)
            .then((tag_ids) => res.status(200).send(tag_ids))
            .catch((err) => res.status(422).send({ error: 422, message: `Duplicated key: ${err.toJSON().op.name}` }));
    });

    // Return router
    return router;
};