
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE from "user"; ALTER SEQUENCE user_id_seq restart with 5;')
  .then(function(){
    var users = [{
      id: 1,
      name: 'Mike Dowd',
      email: 'mikedowd1972@gmail.com',
      password: 'bacon'
    },
    {
      id: 2,
      name: 'Mike Roque',
      email: 'mikeroque1@gmail.com',
      password: 'bananas'
    }];
    return knex('user').insert(users);
  })
};
