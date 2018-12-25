const bookshelf = require('./bookshelf.js')

const Priorities = bookshelf.Model.extend({
  tableName: 'priorities',
  idAttribute: 'priority_id',
  hasTimestamps: true
})

module.exports = Contacts