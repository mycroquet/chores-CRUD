
exports.up = function(knex, Promise) {
  return knex.schema.createTable('chore', function(table){
    table.increments();
    table.text('description').notNullable();
    table.integer('user_id').references('user.id').unsigned().notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('chore');
};
