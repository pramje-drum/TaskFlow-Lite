import Dashboard from "./assets/components/DashBoard/Dashboard";
import LoginArea from "./assets/components/LoginForm/LoginArea";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoutes from "./assets/components/ProtectedRoutes/ProtectedRoutes";
import { useState } from "react";
import Header from "./assets/components/Header";

const App = () => {
	const [auth, setAuth] = useState(localStorage.getItem("token"));
	const router = createBrowserRouter([
		{
			path: "/",
			element: (
				<div>
					<Header auth={auth} setAuth={setAuth}/>
					<LoginArea setAuth={setAuth} />{" "}
				</div>
			),
		},
		{
			element: <ProtectedRoutes auth={auth} />,
			children: [
				{
					path: "/dashboard",
					element: (
						<div>
							<Header auth={auth} setAuth={setAuth}/>
							<Dashboard />
						</div>
					),
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default App;
