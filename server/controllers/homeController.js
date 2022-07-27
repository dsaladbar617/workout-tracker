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
		.then(() => res.status(201).json("you suck"));
};

const request = (req, res) => {
	res.status(200).json("You suck");
};

export { add, request };
