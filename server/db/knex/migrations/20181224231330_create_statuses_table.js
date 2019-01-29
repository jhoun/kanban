exports.up = function (knex, Promise) {
  return knex.schema.createTable('statuses', function (table) {
    table.increments('status_id').primary().notNullable();
    table.string('name').notNullable();
    table.integer('rank').notNullable();
    table.timestamps(true, true);
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('statuses')
};