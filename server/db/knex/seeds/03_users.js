exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          user_id: 1,
          first_name: 'Jay',
          last_name: 'Giang',
          email: 'jay@gmail.com'
        },
        {
          user_id: 2,
          first_name: 'EJ',
          last_name: 'Giang',
          email: 'ej@gmail.com'
        },
        {
          user_id: 3,
          first_name: 'Sunday',
          last_name: 'The Dog',
          email: 'sunday@gmail.com'
        }
      ]);
    });
};