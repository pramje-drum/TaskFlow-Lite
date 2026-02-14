import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../Store/ReducerStore/Index";
import { useEffect, useState } from "react";

// import { useAuth } from "../../context/AuthContext";

const ProtectedRoutes = () => {
	const { state } = useAuth();
	const { dispatch } = useAuth();
	// const [loading, setLoading] = useState(true);

	useEffect(() => {
		const token = localStorage.getItem("token");
		const currentUser = JSON.parse(localStorage.getItem("currentUser"));
		if (token && currentUser) {
			dispatch({ type: "GET_DATA", payload: { token, user: currentUser } });
		}
	}, []);
	// setLoading(false);

	// if (loading) return <div>Loading...</div>;

	// return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
	return !!state.token ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoutes;
