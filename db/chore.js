const knex = require('./connection');

module.exports = {
  getByUser: function(id) {
    return knex('chore').where('user_id', id);
  }
}
