exports.up = function (knex, Promise) {
  return knex.schema.createTable('cards', function (table) {
    table.increments('card_id').primary().notNullable();
    table.string('title').notNullable();
    table.integer('priority_id').references('priority_id').inTable('priorities').onDelete('cascade').notNullable();;
    table.integer('status_id').references('status_id').inTable('statuses').onDelete('cascade').notNullable();;
    table.integer('created_by_id').references('user_id').inTable('users').onDelete('cascade').notNullable();;
    table.integer('assigned_to_id').references('user_id').inTable('users').onDelete('cascade').notNullable();;
    table.timestamps(true, true);
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('cards');
};