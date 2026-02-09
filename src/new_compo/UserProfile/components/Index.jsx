import { useNavigate } from "react-router-dom";
import UserProfileForm from "./UserProfileForm";
import UserProfileHead from "./UserProfileHead";

const UserProfile = () => {
	const navigate = useNavigate();

	return (
		<div className="bg-input_bg min-h-screen py-10 px-6">
			{/* Back to Dashboard Button */}
			<div className="flex justify-end mb-6">
				<button
					onClick={() => navigate("/dashboard")}
					className="px-5 py-2 rounded-md bg-purple-600 text-white text-sm hover:bg-purple-700 transition"
				>
					← Back to Dashboard
				</button>
			</div>

			{/* Top profile section */}
			<UserProfileHead />

			{/* Form */}
			<div>
				<UserProfileForm />
			</div>
		</div>
	);
};

export default UserProfile;
