exports.up = function(knex) {
    return knex.schema.createTable("user", table => {
        table.increments("id").primary();
        table.string("username");
        table.string("email");
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("user");
};