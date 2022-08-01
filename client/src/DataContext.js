import React, { useState } from "react";

const DataContext = React.createContext([]);

const DataProvider = ({ children }) => {
	const [data, setData] = useState([]);
	const [refreshChart, setRefreshChart] = useState(false);
	const [submitted, setSubmitted] = useState(false);

	const values = {
		data,
		refreshChart,
		submitted
	};

	const setters = {
		setData,
		setRefreshChart,
		setSubmitted
	};

	return (
		<DataContext.Provider value={{ values, setters }}>
			{children}
		</DataContext.Provider>
	);
};

export { DataProvider, DataContext };
