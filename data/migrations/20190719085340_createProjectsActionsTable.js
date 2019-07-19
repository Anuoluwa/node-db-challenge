exports.up = function(knex) {
    return knex.schema
    .createTable("projects", (table) => {
      table.increments();
      table.string("name", 128).notNullable();
      table.text("description").notNullable();
      table.boolean("completed").defaultTo(false);
    })
    .createTable('actions', (table) => {
      table.increments();
      table.string('description', 128).notNullable();
      table.text('notes').notNullable();
      table.boolean('completed').defaultTo(false)
      table.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("projects")
    .dropTableIfExists("actions");
  };