
exports.up = async function(knex) {
    const id = "id"
    await knex.schema.createTable("projects", (table) => {
        table.increments(id)
        table.string("names").notNullable()
        table.string("description")
        table.boolean("done").notNullable().defaultTo(false)
    })

    await knex.schema.createTable("tasks", (table) => {
        table.increments(id)
        table.string("name").notNullable()
        table.integer("project_id")
            .notNullable()
            .references(id)
            .inTable("projects")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
        table.boolean("done").notNullable().defaultTo(false)
    })

    await knex.schema.createTable("resources", (table) => {
        table.increments(id)
        table.string("name").notNullable()
        table.string("description")
        table.integer("project_id")
            .notNullable()
            .references(id)
            .inTable("projects")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("resources")
    await knex.schema.dropTableIfExists("tasks")
    await knex.schema.dropTableIfExists("projects")
};
