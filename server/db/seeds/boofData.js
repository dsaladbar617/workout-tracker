/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
	// Deletes ALL existing entries
	await knex("exercise").del();
	await knex("exercise").insert([{ exercise: "daaa", sets: 5, reps: 5 }]);
}
