import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Header from "./_components/Header";
import { DataProvider } from "./DataContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<DataProvider>
			<Header />
			<App />
		</DataProvider>
	</React.StrictMode>
);
