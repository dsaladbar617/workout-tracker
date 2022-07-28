import knex from "../db/db.js";

const add = (req, res) => {
	let entry = req.body;
	console.log(entry);
	knex("exercise")
		.select("*")
		.insert({
			exercise: entry.exercise,
			sets: entry.sets,
			reps: entry.reps,
			date: entry.date
		})
		.then(() => {
			res.status(201).json("you suck");
		});
};

const requestExercises = (req, res) => {
	knex("exercise")
		.select("exercise")
		.then((data) => {
			res.status(200).json(data);
		});
};

const getData = (req, res) => {
	knex("exercise")
		.select("*")
		.then((data) => {
			res.status(200).json(data);
		});
};
export { add, requestExercises, getData };
