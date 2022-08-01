import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Label,
	Tooltip,
	CartesianGrid,
	ResponsiveContainer
} from "recharts";
import { Select } from "@mantine/core";
import "../_styles/Chart.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { DataContext } from "../DataContext";

const Chart = () => {
	let [names, setNames] = useState([]);
	const { values, setters } = useContext(DataContext);
	const [value, setValue] = useState("");
	const [chartData, setChartData] = useState([]);

	useEffect(() => {
		let url = "http://localhost:8080/api/get_exercises";
		axios
			.get(url)
			.then((data) => setNames(data.data.map((item) => item.exercise)));

		let dataUrl = "http://localhost:8080/api/get_data";
		axios.get(dataUrl).then((response) => {
			setters.setData(
				response.data.map((item) => ({
					...item,
					date: new Date(item.date).toLocaleDateString("en-us", {
						month: "long",
						day: "numeric"
					}),
					total: item.sets * item.reps * item.weight
				}))
			);
			setChartData(values.data);
			setters.setSubmitted(false);
		});
	}, [values.submitted]);

	useEffect(() => {
		setChartData(values.data);
	}, [values.data]);

	useEffect(() => {
		if (value !== null) {
			setChartData(values.data.filter((item) => item.exercise === value));
		} else {
			setChartData(values.data);
		}
	}, [value]);

	let namesData = names.map((name, index) => ({
		key: index,
		value: name,
		label: name
	}));

	return (
		<div className="chart-container">
			<div className="chart">
				<Select
					clearable
					label="Exercise"
					placeholder="Pick one"
					data={namesData}
					value={value}
					onChange={(event) => {
						console.log(event);
						setValue(event);
					}}
					transition="scale-y"
					transitionDuration={220}
					transitionTimingFunction="ease"
				/>
				<ResponsiveContainer width={"70%"} height={500}>
					<LineChart
						width={500}
						height={500}
						data={chartData}
						margin={{ top: 15, right: 30, left: 20, bottom: 15 }}>
						<XAxis dataKey="date">
							<Label value="Date" offset={-5} position="insideBottom" />
						</XAxis>
						<YAxis
							label={{
								value: "Total Weight",
								angle: -90,
								position: "left"
							}}></YAxis>
						<CartesianGrid strokeDasharray="3 5" />
						<Tooltip />
						{chartData.length > 0 ? (
							<Line
								type="monotone"
								dataKey="total"
								stroke="#8884d8"
								strokeWidth={3}
								dot={{ stroke: "black", strokeWidth: 2 }}
							/>
						) : null}
					</LineChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default Chart;
