
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cards').del()
    .then(function () {
      // Inserts seed entries
      return knex('cards').insert([
        {
          card_id: 1,
          title: 'Walk the Dog',
          priority_id: 1,
          status_id: 1,
          created_by_id: 1,
          assigned_to_id: 2
        },
        {
          card_id: 2,
          title: 'Buy Groceries',
          priority_id: 2,
          status_id: 2,
          created_by_id: 2,
          assigned_to_id: 3
        },
        {
          card_id: 3,
          title: 'Clean the House',
          priority_id: 3,
          status_id: 3,
          created_by_id: 3,
          assigned_to_id: 1
        }
      ]);
    });
};
