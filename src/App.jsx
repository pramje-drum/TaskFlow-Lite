import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardNEW from "./new_compo/DashBoard/components/DashBoardNEW";
import ProtectedRoutes from "./new_compo/ProtectedRoutes/ProtectedRoutes";

import UserProfile from "./new_compo/UserProfile/components/Index";
import { AuthProvider } from "./context/AuthContext";
import LoginSignup from "./new_compo/LoginComponent/component/Index";
import Header from "./new_compo/Header/Header";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LoginSignup />,
	},
	{
		element: <ProtectedRoutes />,
		children: [
			{
				path: "/dashboard",
				element: (
					<>
						<Header />
						<DashboardNEW />
					</>
				),
			},
			{
				path: "/userProfile",
				element: <UserProfile />,
			},
		],
	},
]);

const App = () => {
	return (
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	);
};

export default App;
