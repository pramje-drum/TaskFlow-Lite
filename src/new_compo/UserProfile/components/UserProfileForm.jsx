import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Input from "../../Common/InputController/Input"
import { ProfileSectionFields } from "../constants/ProfileSectionFields";
import { useAuth } from "../../../context/AuthContext";

const UserProfileForm = () => {
	const { user, updateUser } = useAuth();

	const { control, handleSubmit, reset } = useForm({
		defaultValues: {
			fullname: "",
			username: "",
			email: "",
			phone: "",
			gender: "",
			dob: "",
			address: "",
			pincode: "",
			state: "",
		},
	});

	useEffect(() => {
		if (user) {
			reset({
				fullname: user.fullname || "",
				username: user.username || "",
				email: user.email || "",
				phone: user.phone || "",
				gender: user.gender || "",
				dob: user.dob || "",
				address: user.address || "",
				pincode: user.pincode || "",
				state: user.state || "",
			});
		}
	}, [user, reset]);

	const onSubmit = (data) => {
		const updatedUser = {
			...user,
			...data,
		};



		updateUser(updatedUser);
		// console.log("Updated Profile", updatedUser);
		alert("Profile updated successfully");
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="max-w-5xl mx-auto px-6">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
				{ProfileSectionFields.map((field) => (
					<Input
						key={field.name}
						control={control}
						name={field.name}
						label={field.label}
						type={field.type}
						placeholder={field.placeholder}
						rules={field.rules}
						options={field.options}
						disabled={["username", "email"].includes(field.name)}
					/>
				))}
			</div>

			<div className="flex justify-center mt-10">
				<button
					type="submit"
					className="bg-purple-700 hover:bg-purple-800 px-10 py-2 rounded-full text-white transition"
				>
					Save
				</button>
			</div>
		</form>
	);
};

export default UserProfileForm;
