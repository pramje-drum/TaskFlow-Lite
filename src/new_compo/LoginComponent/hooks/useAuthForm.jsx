import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { getUser, addUser } from "../../../services/useProfile";
import { useAuth } from "../../../context/AuthContext";
import { toast } from "react-toastify";

const useAuthForm = () => {
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
			password: "",
			confirm_password: "",
			age_confirm: false,
		},
	});

	const { login } = useAuth();
	const [isLogin, setIsLogin] = useState(true);
	const navigate = useNavigate();

	const onSubmit = async (data) => {
		try {
			const res = await getUser();
			const users = Array.isArray(res.data) ? res.data : [];

			// ================= LOGIN =================
			if (isLogin) {
				const user = users.find(
					(u) => u.username === data.username && u.password === data.password,
				);

				if (!user) {
					toast.error("Invalid username or password");
					return;
				}

				login("dummy-token-123", user);
				navigate("/dashboard");
				toast("Log-In Successfull");
				return;
			}

			// ================= SIGNUP =================
			if (!data.age_confirm) {
				toast("You must confirm age 18+");
				return;
			}

			const usernameExists = users.some((u) => u.username === data.username);
			if (usernameExists) {
				toast("Username already exists");
				return;
			}

			const emailExists = users.some((u) => u.email === data.email);
			if (emailExists) {
				toast("Email already exists");
				return;
			}

			const newUser = {
				id: Date.now(),
				fullname: data.fullname,
				username: data.username,
				email: data.email,
				phone: data.phone,
				gender: data.gender,
				dob: data.dob,
				address: data.address,
				pincode: data.pincode,
				state: data.state,
				password: data.password,
			};

			await addUser(newUser);

			login("dummy-token-123", newUser);
			toast("Account created successfully");

			navigate("/dashboard");
			reset();
			return;
		} catch (error) {
			console.error(error);
			toast("Something went wrong");
		}
	};

	const toggleMode = () => {
		setIsLogin((prev) => !prev);
		reset();
	};

	return {
		control,
		handleSubmit,
		onSubmit,
		isLogin,
		toggleMode,
	};
};

export default useAuthForm;
