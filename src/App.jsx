import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardNEW from "./new_compo/DashBoard/components/DashBoardNEW";
import ProtectedRoutes from "./new_compo/ProtectedRoutes/ProtectedRoutes";

import UserProfile from "./new_compo/UserProfile/components/Index";
// import { AuthProvider } from "./context/AuthContext";
import LoginSignup from "./new_compo/LoginComponent/component/Index";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { api } from "./Store/apiSlice";
import Header from "./new_compo/Header/components/Index";
import TaskBoardShimmer from "./new_compo/ShimmerUI/TaksBoard/Index";
import { AuthProvider } from "./Store/ReducerStore/Index";

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
						{/* <TaskBoardShimmer /> */}
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
		<ApiProvider api={api}>
			<AuthProvider>
				<RouterProvider router={router} />
			</AuthProvider>
		</ApiProvider>
	);
};

export default App;
