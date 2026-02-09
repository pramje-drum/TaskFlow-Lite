import { pfp } from "../../../assets/images";
const UserProfileHead = () => {
	return (
		<div className="flex flex-col items-center mb-10 text-white">
			<h2 className="text-lg mb-4">Personal Information</h2>

			<img src={pfp} alt="profile" className="w-24 h-24 rounded-full mb-3" />

			<h1 className="text-2xl font-semibold">Jason Miller</h1>
			<p className="text-sm text-gray-300">User ID: jmiller23</p>
		</div>
	);
};

export default UserProfileHead;
