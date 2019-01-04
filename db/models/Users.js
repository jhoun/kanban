
const bookshelf = require('./bookshelf.js');
require('./Cards.js');

const Users = bookshelf.Model.extend({
  tableName: 'users',
  idAttribute: 'user_id',
  hasTimestamps: true,
  createdBy() {
    return this.hasMany('Cards', 'user_id');
  },

  assignedTo() {
    return this.hasMany('Cards', 'user_id');
  }
})

module.exports = bookshelf.model('Users', Users);