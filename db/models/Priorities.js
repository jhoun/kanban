const bookshelf = require('./bookshelf.js');
require('./Cards.js');

const Priorities = bookshelf.Model.extend({
  tableName: 'priorities',
  hasTimestamps: true,
  cards: function(){
    return this.hasMany('Cards', 'priority_id');
  }
})

module.exports = bookshelf.model('Priorities', Priorities);