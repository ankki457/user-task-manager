exports.up = function (knex) {
   return knex.schema
      .createTable('users', function (table) {
         table.increments('id').primary();
         table.string('name', 255).notNullable();
         table.string('email', 255).notNullable().unique();
         table.string('mobile', 15).notNullable();
         table.timestamps(true, true);
      })
      .createTable('tasks', function (table) {
         table.increments('id').primary();
         table.integer('user_id').unsigned().references('id').inTable('users');
         table.string('task_name', 255).notNullable();
         table.enu('task_type', ['Pending', 'Done']).notNullable();
         table.timestamps(true, true);
      });

};

exports.down = function (knex) {
   return knex.schema
      .dropTable('tasks')
      .dropTable('users');
};
