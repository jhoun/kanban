exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments('user_id').primary().notNullable();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('email').notNullable();
    table.timestamps(true, true);
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('users');
};