import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import Temp from "./services/useAPI";
import DashboardNEW from "./new_compo/DashBoard/DashBoardNEW";
import LoginArea from "./new_compo/LoginFolder/LoginArea";
import ProtectedRoutes from "./new_compo/ProtectedRoutes/ProtectedRoutes";
import Header from "./new_compo/Header";

const App = () => {
	const [auth, setAuth] = useState(localStorage.getItem("token"));
	const router = createBrowserRouter([
		{
			path: "/",
			element: (
				<div>
					<Header auth={auth} setAuth={setAuth} />
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
							<Header auth={auth} setAuth={setAuth} />
							<DashboardNEW />
						</div>
					),
				},
			],
		},
	]);
	return <RouterProvider router={router} />;
};

export default App;
