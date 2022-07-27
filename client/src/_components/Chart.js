import { LineChart, Line, XAxis, YAxis, Label } from "recharts";
import "../_styles/Chart.css";

const data = [
	{ name: "Page A", uv: 400, pv: 2400, amt: 2400 },
	{ name: "Page B", uv: 600, pv: 2400, amt: 2400 },
	{ name: "Page C", uv: 700, pv: 2400, amt: 2400 },
	{ name: "Page D", uv: 200, pv: 2400, amt: 2400 },
	{ name: "Page E", uv: 100, pv: 2400, amt: 2400 },
	{ name: "Page F", uv: 800, pv: 2400, amt: 2400 }
];

const Chart = () => {
	return (
		<div className="chart-container">
			<div className="chart">
				<LineChart
					width={400}
					height={400}
					data={data}
					margin={{ top: 15, right: 30, left: 20, bottom: 5 }}>
					<XAxis dataKey="name">
						<Label value="name" offset={-5} position="insideBottom" />
					</XAxis>
					<YAxis />
					<Line type="monotone" dataKey="uv" stroke="#8884d8" />
				</LineChart>
			</div>
		</div>
	);
};

export default Chart;
