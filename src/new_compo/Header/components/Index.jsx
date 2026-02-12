import Modal from "react-modal";
import useHeader from "../hooks/useHeader";

const Header = () => {
	const {
		isAuthenticated,
		handleProfile,
		showLogoutModal,
		setShowLogoutModal,
		handleConfirmLogout,
	} = useHeader();

	return (
		<>
			<div className="navbar bg-task-bg text-purple-300 shadow-lg flex justify-between items-center p-6 md:p-8 font-ChewyFamily">
				<div>
					<a className="text-2xl sm:text-3xl md:text-5xl cursor-pointer">
						TaskFlow-Lite
					</a>
				</div>

				{isAuthenticated && (
					<div className="absolute right-6 flex flex-col sm:flex-row gap-3 sm:gap-6 items-center">
						<button
							onClick={handleProfile}
							className="text-sm sm:text-lg md:text-2xl hover:text-gray-600 transition"
						>
							Update Profile
						</button>

						<button
							onClick={() => setShowLogoutModal(true)}
							className="text-sm sm:text-lg md:text-2xl hover:text-red-400 transition"
						>
							Log-Out
						</button>
					</div>
				)}
			</div>
			{/* warnig log out */}
			<Modal
				isOpen={showLogoutModal}
				onRequestClose={() => setShowLogoutModal(false)}
				className="outline-none"
				overlayClassName="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
			>
				<div className="bg-bg_color text-white rounded-xl p-8 w-[400px] shadow-2xl">
					<h2 className="text-2xl font-semibold text-center mb-4">
						Logout Confirmation
					</h2>

					<p className="text-center text-gray-300 mb-6">
						Are you sure you want to logout?
					</p>

					<div className="flex gap-4">
						<button
							onClick={() => setShowLogoutModal(false)}
							className="w-full py-2 rounded-md bg-gray-600 hover:bg-gray-700 transition"
						>
							Cancel
						</button>

						<button
							onClick={handleConfirmLogout}
							className="w-full py-2 rounded-md bg-red-600 hover:bg-red-700 transition"
						>
							Logout
						</button>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default Header;
