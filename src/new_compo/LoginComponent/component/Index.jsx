import { useState } from "react";
import Modal from "react-modal";
import { poster } from "../../../assets/images";
import HeaderLogin from "./HeaderLogin";
// import Input from "../../Common/Input";
import Input from "../../Common/InputController/Input";
import useAuthForm from "../hooks/useAuthForm";

Modal.setAppElement("#root");

const LoginSignup = ({ setAuth }) => {
	const { control, handleSubmit, onSubmit, isLogin, toggleMode } =
		useAuthForm(setAuth);

	const [isOpen, setIsOpen] = useState(false);

	const openLogin = () => {
		if (!isLogin) toggleMode();
		setIsOpen(true);
	};

	const openSignup = () => {
		if (isLogin) toggleMode();
		setIsOpen(true);
	};

	return (
		<>
			<HeaderLogin onLogin={openLogin} onSignup={openSignup} />

			<div className="text-8xl flex justify-center items-center mt-40 font-ChewyFamily font-thin underline">
				Welcome TaskFlow-Lite
			</div>

			<Modal
				isOpen={isOpen}
				onRequestClose={() => setIsOpen(false)}
				className="outline-none "
				overlayClassName="fixed inset-0 bg-black/70 flex items-center justify-center"
			>
				<div className="h-[70vh] w-[70vw] flex overflow-auto bg-bg_color text-white rounded-xl ">
					{/* LEFT IMAGE */}
					<div className="w-[45%] h-full">
						<img
							src={poster}
							alt="signup poster"
							className="h-full w-full object-cover"
						/>
					</div>

					{/* RIGHT FORM */}
					<div className="w-[55%] h-full flex  items-center justify-center px-12 py-10">
						<div className="w-full max-w-md">
							<h1 className="text-2xl font-semibold text-center mb-2">
								{isLogin ? "Login" : "Sign Up"}
							</h1>

							<div className="flex items-center justify-center gap-3 mb-6 text-xs text-gray-300">
								<span className="h-px w-12 bg-white"></span>
								<span>
									{isLogin ? "Login with Username" : "Sign Up With e-mail"}
								</span>
								<span className="h-px w-12 bg-white"></span>
							</div>

							<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
								<Input
									control={control}
									name="username"
									label="User Name"
									placeholder="User111"
									rules={{ required: true }}
								/>

								{!isLogin && (
									<>
										<Input
											control={control}
											name="email"
											label="E-Mail"
											placeholder="Enter your E-Mail"
											rules={{
												required: true,
											}}
										/>

										<Input
											control={control}
											name="phone"
											label="Phone No."
											placeholder="2156562651"
											rules={{ required: true, maxLength: 10, minLength: 10 }}
										/>
									</>
								)}

								<Input
									control={control}
									name="password"
									label="Password"
									type="password"
									placeholder="********"
									rules={{ required: true }}
								/>
								{!isLogin && (
									<Input
										control={control}
										name="age_confirm"
										type="checkbox"
										label="	I confirm that I am 18 years or older and legally allowed to participate in online gaming."
										rules={{ required: true }}
									/>
								)}

								<button
									type="submit"
									className="w-full py-2 rounded-md  bg-purple-700  text-sm"
								>
									{isLogin ? "Log In" : "Sign Up"}
								</button>
							</form>

							<p
								className="text-center text-xs mt-4 text-yellow-400 cursor-pointer hover:underline"
								onClick={toggleMode}
							>
								{isLogin
									? "Don’t have an account? Sign Up"
									: "Already have an account? Login"}
							</p>
						</div>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default LoginSignup;
