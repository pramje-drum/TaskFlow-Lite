import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
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

	return (
		<>
			<div className="navbar bg-base-100 shadow-lg flex top-0 z-50 justify-center items-center p-6 font-ChewyFamily relative">
				<div>
					<a className="text-5xl cursor-pointer">TaskFlow-Lite</a>
				</div>

				{isAuthenticated && (
					<div className="absolute right-6 flex gap-6 items-center">
						<button
							onClick={handleProfile}
							className="text-2xl hover:text-gray-600 transition"
						>
							Update Profile
						</button>

						<button
							onClick={() => setShowLogoutModal(true)}
							className="text-2xl hover:text-gray-600 transition"
						>
							Log-Out
						</button>
					</div>
				)}
			</div>

			{showLogoutModal && (
				<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
					<div className="bg-white rounded-xl p-6 w-[350px] text-center">
						<h2 className="text-2xl font-semibold mb-4">
							Confirm Logout
						</h2>
						<p className="mb-6">
							Are you sure you want to logout?
						</p>

						<div className="flex justify-center gap-4">
							<button
								onClick={() => setShowLogoutModal(false)}
								className="px-5 py-2 rounded-lg bg-gray-200 cursor-pointer"
							>
								Cancel
							</button>

							<button
								onClick={handleConfirmLogout}
								className="px-5 py-2 rounded-lg bg-red-500 text-white cursor-pointer"
							>
								Logout
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Header;
