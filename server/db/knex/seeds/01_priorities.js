exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('priorities').del()
    .then(function () {
      // Inserts seed entries
      return knex('priorities').insert([
        {
          priority_id: 1,
          name: 'low',
          rank: 1
        },
        {
          priority_id: 2,
          name: 'medium',
          rank: 2
        },
        {
          priority_id: 3,
          name: 'high',
          rank: 3
        }
      ]);
    });
};