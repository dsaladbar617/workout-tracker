/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
	return knex.schema.createTable("exercise", (table) => {
		table.increments();
		table.string("exercise", 255);
		table.integer("sets");
		table.integer("reps");
		table.date("date", { precision: 6 }).defaultTo(knex.fn.now(6));
	});
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
	return knex.schema.dropTableIfExists("exercise");
}
