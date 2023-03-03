const { getResources, getResource } = require('./handlers');

const router = require('express').Router();

router.get('/', getResources).get('/:id', getResource);

module.exports = router;
