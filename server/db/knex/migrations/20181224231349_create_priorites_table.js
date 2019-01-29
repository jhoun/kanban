exports.up = function (knex, Promise) {
  return knex.schema.createTable('priorities', function (table) {
    table.increments('priority_id').primary().notNullable();
    table.string('name').notNullable();
    table.integer('rank').notNullable();
    table.timestamps(true, true);
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('priorities')
};