/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
	// Deletes ALL existing entries
	await knex("exercise").del();
	await knex("exercise").insert([
		{
			exercise: "bench press",
			group: "upper",
			sets: 3,
			reps: 5,
			weight: 25,
			date: "Jul 24 2022"
		},
		{
			exercise: "squat",
			group: "lower",
			sets: 4,
			reps: 5,
			weight: 25,
			date: "Jul 25 2022"
		},
		{
			exercise: "deadlift",
			group: "lower",
			sets: 5,
			reps: 5,
			weight: 25,
			date: "Jul 26 2022"
		},
		{
			exercise: "bench press",
			group: "upper",
			sets: 5,
			reps: 7,
			weight: 25,
			date: "Jul 27 2022"
		},
		{
			exercise: "bench press",
			group: "upper",
			sets: 5,
			reps: 8,
			weight: 25,
			date: "Jul 28 2022"
		},
		{
			exercise: "bench press",
			group: "upper",
			sets: 5,
			reps: 5,
			weight: 35,
			date: "Jul 29 2022"
		}
	]);
}
