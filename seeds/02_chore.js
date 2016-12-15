
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM chore; ALTER SEQUENCE chore_id_seq restart with 5;')
    .then(function () {
      var chores = [
        {
          id: 1,
          description: 'vaccuum',
          user_id: 1
        },
        {
          id: 2,
          description: 'dishes',
          user_id: 2
        },
        {
          id: 3,
          description: 'laundry',
          user_id: 1
        },
        {
          id: 4,
          description: 'water plants',
          user_id: 2
        }
      ];
      return knex('chore').insert(chores);
    })
};
