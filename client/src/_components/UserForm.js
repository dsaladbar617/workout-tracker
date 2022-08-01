import React, { useState, useEffect, useContext } from "react";
import { NumberInput, createStyles, Button, Select } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import "../_styles/UserForm.css";
import axios from "axios";
import { DataContext } from "../DataContext";

const useStyles = createStyles((theme) => ({
	root: {
		backgroundColor: "#3c6e71",
		border: 0,
		padding: 20,
		borderRadius: 6,
		marginTop: 5,
		maxWidth: 400,

		"&:hover": {
			backgroundColor: theme.fn.darken("#3c6e71", 0.05)
		}
	},
	label: {
		color: "white"
	}
}));

const addEntry = (name, sets, reps, weight, date) => {
	let url = "http://localhost:8080/api/add_entry";

	let data = {
		exercise: name,
		sets: sets,
		reps: reps,
		weight: weight,
		date: date
	};
	axios
		.post(url, data, {
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json;charset=UTF-8"
			}
		})
		.then((data) => console.log(data));
};

const UserForm = () => {
	const { classes } = useStyles();
	const { values, setters } = useContext(DataContext);

	const [name, setName] = useState("");
	const [sets, setSets] = useState(0);
	const [reps, setReps] = useState(0);
	const [weight, setWeight] = useState(0);
	const [date, setDate] = useState(new Date());
	let [names, setNames] = useState([]);

	useEffect(() => {
		let url = "http://localhost:8080/api/get_exercises";
		axios.get(url).then((data) => {
			setNames(
				data.data.map((item) => ({ name: item.exercise, group: item.group }))
			);
			console.log(data);
		});
	}, [values.submitted]);

	return (
		<>
			<div className="input-container">
				<Select
					placeholder="Input an exercise"
					label="Exercise"
					data={names.map((name, index) => ({
						key: index,
						value: name.name,
						label: name.name,
						group: name.group
					}))}
					required
					searchable
					nothingFound="No options"
					// creatable
					// getCreateLabel={(query) => `+ Create ${query}`}
					// onCreate={(query) => {
					// 	const item = { value: query, label: query };
					// 	setNames((current) => [...current, query]);
					// 	return item;
					// }}
					value={name}
					onChange={setName}
					styles={{ root: classes.root, label: classes.label }}
					transition="scale-y"
					transitionDuration={220}
					transitionTimingFunction="ease"
				/>
				<NumberInput
					placeholder="Input sets"
					label="Sets"
					required
					value={sets !== 0 ? sets : null}
					onChange={setSets}
					min={0}
					styles={{ root: classes.root, label: classes.label }}
				/>
				<NumberInput
					placeholder="Input reps"
					label="Reps"
					required
					value={reps !== 0 ? reps : null}
					onChange={setReps}
					min={0}
					styles={{ root: classes.root, label: classes.label }}
				/>
				<NumberInput
					placeholder="Input weight"
					label="Weight"
					required
					value={weight !== 0 ? weight : null}
					onChange={setWeight}
					min={0}
					styles={{ root: classes.root, label: classes.label }}
				/>
				<DatePicker
					placeholder="Pick date"
					label="Event date"
					required
					value={date}
					onChange={setDate}
					styles={{ root: classes.root, label: classes.label }}
				/>
			</div>
			<div className="sub-butt">
				<Button
					color="gray"
					onClick={() => {
						console.log(date);
						addEntry(name, sets, reps, weight, date);
						setters.setRefreshChart(true);
						setters.setSubmitted(true);
					}}>
					Submit
				</Button>
			</div>
		</>
	);
};

export default UserForm;
