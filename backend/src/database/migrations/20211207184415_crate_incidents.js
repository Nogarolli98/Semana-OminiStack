exports.up = function(knex) {
    knex.schema.createtable('incidents', function (table){
        table.increments();
        table.string('title').notNullable(); 
        table.string('description').notNullable(); 
        table.decimal('value').notNullable(); 

        table.string('ong_ìd').notNullable();

        table.foreign('ong_id').references('id').intable('ongs');

    });
 };

exports.down = function(knex) {
  return knex.schema.droptable('incidents');
};
 