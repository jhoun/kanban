const bookshelf = require('./bookshelf.js');
require('./Cards.js');

const Statuses = bookshelf.Model.extend({
  tableName: 'statuses',
  hasTimestamps: true,
  cards: function () {
    return this.hasMany('Cards', 'status_id');
  }
})

module.exports = bookshelf.model('Statuses', Statuses);