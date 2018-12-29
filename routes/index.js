const express = require('express');
const router = express.Router();
const cards = require('./cards.js');
const users = require('./users.js');

router.use('/', cards);
router.use('/', users);

module.exports = router;