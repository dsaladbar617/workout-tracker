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
	// let [chartData, setChartData] = useState([]);
	const { values, setters } = useContext(DataContext);

	useEffect(() => {
		let url = "http://localhost:8080/api/get_exercises";
		axios
			.get(url)
			.then((data) => setNames(data.data.map((item) => item.exercise)));
	}, []);

	useEffect(() => {
		let dataUrl = "http://localhost:8080/api/get_data";
		axios.get(dataUrl).then((response) =>
			setters.setData(
				response.data.map((item) => ({
					...item,
					date: new Date(item.date).toLocaleDateString("en-us", {
						month: "long",
						day: "numeric"
					}),
					total: item.sets * item.reps * item.weight
				}))
			)
		);
		console.log(values.data);
		setters.setRefreshChart(false);
	}, [values.refreshChart]);

	return (
		<div className="chart-container">
			<div className="chart">
				<Select
					label="Exercise"
					placeholder="Pick one"
					data={names.map((name, index) => ({
						key: index,
						value: name,
						label: name
					}))}
					// onChange={}
					transition="scale-y"
					transitionDuration={220}
					transitionTimingFunction="ease"
				/>
				{values.data.length > 0 ? (
					<ResponsiveContainer width={"70%"} height={600}>
						<LineChart
							width={500}
							height={500}
							data={values.data}
							margin={{ top: 15, right: 30, left: 20, bottom: 5 }}>
							<XAxis dataKey="date">
								{/* <Label value="name" offset={-5} position="insideBottom" /> */}
							</XAxis>
							<YAxis />
							<CartesianGrid />
							<Tooltip />
							<Line type="monotone" dataKey="total" stroke="#8884d8" />
							{/* <Line type="monotone" dataKey="reps" stroke="#8884d8" />
							<Line type="monotone" dataKey="sets" stroke="#8884d8" /> */}
						</LineChart>
					</ResponsiveContainer>
				) : null}
			</div>
		</div>
	);
};

export default Chart;
