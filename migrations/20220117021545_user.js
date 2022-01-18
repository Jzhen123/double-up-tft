exports.up = function(knex) {
    return knex.schema.createTable("user", table => {
        table.increments("id").primary();
        table.string("username", 50);
        table.string("password", 255);
        table.string("email", 255);

    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("user");
};