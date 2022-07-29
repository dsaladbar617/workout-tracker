import React, { useState } from "react";

const DataContext = React.createContext([]);

const DataProvider = ({ children }) => {
	const [data, setData] = useState([]);
	const [refreshChart, setRefreshChart] = useState(false);

	const values = {
		data,
		refreshChart
	};

	const setters = {
		setData,
		setRefreshChart
	};

	return (
		<DataContext.Provider value={{ values, setters }}>
			{children}
		</DataContext.Provider>
	);
};

export { DataProvider, DataContext };
