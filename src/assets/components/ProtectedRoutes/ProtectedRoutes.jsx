import { Outlet, Navigate } from "react-router-dom";
const ProtectedRoutes = ({ auth }) => {
	// return auth ? <Outlet /> : <Navigate to="/" replace />;
	return auth ? (
		
		<Outlet/>
	) : (
		<Navigate to="/" replace />
	);
};

export default ProtectedRoutes;
