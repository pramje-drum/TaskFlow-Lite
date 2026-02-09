import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
	const navigate = useNavigate();
	const { isAuthenticated, logout } = useAuth();

	const handleLogOut = () => {
		logout();
		navigate("/");
	};

	const handleProfile = () => {
		navigate("/userProfile");
	};

	return (
		<div className="navbar bg-base-100 shadow-lg flex top-0 z-1000 justify-center items-center p-6 font-ChewyFamily relative">
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
						onClick={handleLogOut}
						className="text-2xl hover:text-gray-600 transition"
					>
						Log-Out
					</button>
				</div>
			)}
		</div>
	);
};

export default Header;
