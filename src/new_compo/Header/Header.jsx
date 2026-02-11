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
			<div className="navbar  bg-task-bg text-purple-300 shadow-lg flex top-0 z-50 justify-center items-center p-6 font-ChewyFamily relative">
				<div>
					<a className="text-5xl cursor-pointer">TaskFlow-Lite</a>
				</div>

				{isAuthenticated && (
					<div className="absolute right-6 flex gap-6 items-center cursor-pointer">
						<button
							onClick={handleProfile}
							className="text-2xl hover:text-gray-600 transition"
						>
							Update Profile
						</button>

						<button
							onClick={() => setShowLogoutModal(true)}
							className="text-2xl hover:text-gray-600 cursor-pointer transition"
						>
							Log-Out
						</button>
					</div>
				)}
			</div>

			{showLogoutModal && (
				<div  className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
					<div className="bg-white/80 text-gray-800 rounded-2xl p-8 w-[380px] shadow-2xl border border-white/30 animate-scaleIn">
						<h2 className="text-2xl font-bold mb-2 text-center">
							Logout Confirmation
						</h2>

						<p className="text-center text-gray-600 mb-6">
							Are you sure you want to logout?
						</p>

						<div className="flex gap-4">
							<button
								onClick={() => setShowLogoutModal(false)}
								className="w-full py-2 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
							>
								Cancel
							</button>

							<button
								onClick={handleConfirmLogout}
								className="w-full py-2 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
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
