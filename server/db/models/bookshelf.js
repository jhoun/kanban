
const knex = require('../knex/knex.js');
const bookshelf = require('bookshelf')(knex);
bookshelf.plugin('registry')

// user bookshelf instance to create models
module.exports = bookshelf;