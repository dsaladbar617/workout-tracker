import React, { useState, useEffect } from "react";
import { TextInput, NumberInput, createStyles, Button } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import "../_styles/UserForm.css";
import axios from "axios";

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

const addEntry = (name, sets, reps, date) => {
	let url = "http://localhost:8080/api/add_entry";

	let data = { exercise: name, sets: sets, reps: reps, date: date };

	axios
		.post(url, data, {
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json;charset=UTF-8"
			}
		})
		.then((data) => console.log(data));

	// fetch('localhost:8080/api/add_entry', {
	// 	method: "POST",

	// })
};

const UserForm = () => {
	const { classes } = useStyles();

	const [name, setName] = useState("");
	const [sets, setSets] = useState(0);
	const [reps, setReps] = useState(0);
	const [date, setDate] = useState(new Date());
	const [isEnabled, setIsEnabled] = useState(true);

	// useEffect(() => {

	// }, []);

	return (
		<>
			<div className="input-container">
				<TextInput
					placeholder="Input an exercise"
					label="Exercise"
					required
					value={name}
					onChange={(event) => setName(event.currentTarget.value)}
					styles={{ root: classes.root, label: classes.label }}
				/>
				<NumberInput
					placeholder="Input sets"
					label="Sets"
					required
					value={sets}
					onChange={setSets}
					min={0}
					styles={{ root: classes.root, label: classes.label }}
				/>
				<NumberInput
					placeholder="Input reps"
					label="Reps"
					required
					value={reps}
					onChange={setReps}
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
						addEntry(name, sets, reps, date);
					}}>
					Submit
				</Button>
			</div>
		</>
	);
};

export default UserForm;
