import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Input from "./Input";

const userKey = "taskReact";

const LoginArea = ({ setAuth }) => {
	const { control, handleSubmit, reset } = useForm({
		defaultValues: {
			username: "",
			password: "",
			confirm_password: "",
		},
	});

	const [isLogin, setIsLogin] = useState(true);
	const navigate = useNavigate();

	const onSubmit = (data) => {
		const savedUser = JSON.parse(localStorage.getItem(userKey)) || [];

		if (isLogin) {
			const filter_user = savedUser.find(
				(u) => u.username === data.username && u.password === data.password,
			);

			if (filter_user) {
				localStorage.setItem("token", "dummy-token-123");
				setAuth(true);
				navigate("/dashboard");
			} else {
				alert("Invalid username or password");
			}
		} else {
			if (data.password !== data.confirm_password) {
				alert("Passwords do not match");
				return;
			}

			if (savedUser.some((u) => u.username === data.username)) {
				alert("Username already Exists");
				return;
			}

			const updated_user = [
				...savedUser,
				{
					username: data.username,
					password: data.password,
				},
			];

			localStorage.setItem(userKey, JSON.stringify(updated_user));
			alert("Account created successfully. Please log in.");
			setIsLogin(true);
			reset();
		}
	};

	return (
		<div className="mt-46 flex flex-col">
			<div className="flex-1 flex justify-center items-center px-4">
				<div className="font-Gothic w-full bg-white p-8 text-center max-w-lg shadow-lg rounded-2xl">
					<div className="text-4xl mb-6 font-semibold">
						{isLogin ? "Log In" : "Sign Up"}
					</div>

					<form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
						<Input
							control={control}
							name="username"
							label="UserName"
							placeholder="Enter username"
							rules={{ required: true, maxLength: 20 }}
						/>

						<Input
							control={control}
							name="password"
							label="Password"
							type="password"
							placeholder="Enter password"
							rules={{ required: true, maxLength: 20 }}
						/>

						{!isLogin && (
							<Input
								control={control}
								name="confirm_password"
								label="Confirm Password"
								type="password"
								placeholder="Re-enter password"
								rules={{ required: true, maxLength: 20 }}
							/>
						)}

						<input
							type="submit"
							value={isLogin ? "Log In" : "Sign Up"}
							className="mt-4 px-6 py-2 rounded-lg border hover:bg-gray-400 cursor-pointer"
						/>
					</form>

					<div
						className="mt-5 hover:text-gray-700 cursor-pointer"
						onClick={() => {
							setIsLogin(!isLogin);
							reset();
						}}
					>
						{isLogin
							? " New User? Create Account "
							: "Already a User? LogIn here"}
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginArea;
