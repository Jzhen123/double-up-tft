exports.up = function(knex) {
    return knex.schema.createTable("champion", table => {
        table.increments("id").primary();
        table.string("name", 45).notNullable();
        table.integer("cost", 45).notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("champion");
};