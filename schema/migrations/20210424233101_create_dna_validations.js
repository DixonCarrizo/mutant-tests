exports.up = (knex) => knex.schema
  .createTable('dna_validations', (table) => {
    table.bigIncrements('id')
      .primary();

    table.boolean('is_mutant').defaultTo(false);

    table.specificType('input', 'text[]').notNullable();

    table.dateTime('created_at')
      .notNullable().defaultTo(knex.fn.now());
  });

exports.down = (knex) => knex.schema.dropTableIfExists('dna_validations');
