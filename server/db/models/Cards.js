
const bookshelf = require('./bookshelf.js');
require('./Priorities.js');
require('./Statuses');
require('./Users');

const Cards = bookshelf.Model.extend({
  tableName: 'cards',
  idAttribute: 'card_id',
  hasTimestamps: true,
  priorities: function () {
    return this.hasOne('Priorities', 'priority_id', 'priority_id')
  },
  statuses: function () {
    return this.hasOne('Statuses', 'status_id', 'status_id')
  },
  createdBy: function () {
    return this.hasOne('Users', 'user_id', 'created_by_id')
  },
  assignedTo: function () {
    return this.hasOne('Users', 'user_id', 'assigned_to_id')
  }
})

module.exports = bookshelf.model('Cards', Cards);