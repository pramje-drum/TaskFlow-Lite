import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

const useHeader = () => {
	const navigate = useNavigate();
	const { isAuthenticated, logout } = useAuth();

	const [showLogoutModal, setShowLogoutModal] = useState(false);

	const handleConfirmLogout = () => {
		logout();
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
