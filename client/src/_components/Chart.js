import { LineChart, Line, XAxis, YAxis, Label } from "recharts";
import { Select } from "@mantine/core";
import "../_styles/Chart.css";
import { useEffect, useState } from "react";
import axios from "axios";

// const data = [
// 	{ name: "Page A", uv: 400, pv: 2400, amt: 2400 },
// 	{ name: "Page B", uv: 600, pv: 2400, amt: 2400 },
// 	{ name: "Page C", uv: 700, pv: 2400, amt: 2400 },
// 	{ name: "Page D", uv: 200, pv: 2400, amt: 2400 },
// 	{ name: "Page E", uv: 100, pv: 2400, amt: 2400 },
// 	{ name: "Page F", uv: 800, pv: 2400, amt: 2400 }
// ];

const Chart = () => {
	let [names, setNames] = useState([]);
	let [chartData, setChartData] = useState([]);

	useEffect(() => {
		let url = "http://localhost:8080/api/get_exercises";
		axios
			.get(url)
			.then((data) => setNames(data.data.map((item) => item.exercise)));

		let dataUrl = "http://localhost:8080/api/get_data";
		axios.get(dataUrl).then((response) =>
			setChartData(
				response.data.map((item) => ({
					...item,
					total: item.sets * item.reps * item.weight
				}))
			)
		);
	}, []);

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
					transition="scale-y"
					transitionDuration={220}
					transitionTimingFunction="ease"
				/>
				<LineChart
					width={400}
					height={400}
					data={chartData}
					margin={{ top: 15, right: 30, left: 20, bottom: 5 }}>
					<XAxis dataKey="date">
						<Label value="name" offset={-5} position="insideBottom" />
					</XAxis>
					<YAxis />
					<Line type="monotone" dataKey="total" stroke="#8884d8" />
				</LineChart>
			</div>
		</div>
	);
};

export default Chart;
