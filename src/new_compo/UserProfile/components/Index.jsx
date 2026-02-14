import { useNavigate } from "react-router-dom";
import UserProfileForm from "./UserProfileForm";
import UserProfileHead from "./UserProfileHead";
// import { useAuth } from "../../../Store/ReducerStore/Index";
// import { useEffect } from "react";
const UserProfile = () => {
	const navigate = useNavigate();
	// const {dispatch} = useAuth();
	// useEffect(() => {
	// 	const token = localStorage.getItem("token");
	// 	const currentUser = JSON.parse(localStorage.getItem("currentUser"));
	// 	if (token && currentUser) {
	// 		dispatch({ type: "GET_DATA", payload: { token, user: currentUser } });
	// 	}
	// }, [dispatch]);

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
