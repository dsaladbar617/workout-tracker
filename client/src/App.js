import "./App.css";
import UserForm from "./_components/UserForm";
import { MantineProvider } from "@mantine/core";
import Chart from "./_components/Chart";

const App = () => {
	return (
		<MantineProvider withGlobalStyles withNormalizeCSS>
			<UserForm />
			<Chart />
		</MantineProvider>
	);
};

export default App;
