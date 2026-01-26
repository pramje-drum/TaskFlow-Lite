import Dashboard from "./assets/components/DashBoard/Dashboard";
import LoginArea from "./assets/components/LoginForm/LoginArea";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<LoginArea />} />
				<Route path="/dashboard" element={<Dashboard />} />
			</Routes>
		</Router>
	);
}

export default App;
