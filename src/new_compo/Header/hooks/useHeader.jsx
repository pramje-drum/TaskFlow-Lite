import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../Store/ReducerStore/Index";

// import { useAuth } from "../../../context/AuthContext";

const useHeader = () => {
	const navigate = useNavigate();
	// const { isAuthenticated, logout } = useAuth();
	const { state, dispatch } = useAuth();
	const [showLogoutModal, setShowLogoutModal] = useState(false);

	// ..token auth
	const isAuthenticated = !!state.token;

	const handleConfirmLogout = () => {
		// logout();
		localStorage.removeItem("token");
		localStorage.removeItem("currentUser");
		dispatch({ type: "LOGOUT" });
		setShowLogoutModal(false);
		navigate("/");
	};

	const handleProfile = () => {
		navigate("/userProfile");
	};

	return {
		isAuthenticated,
		handleProfile,
		showLogoutModal,
		setShowLogoutModal,
		handleConfirmLogout,
	};
};

export default useHeader;
