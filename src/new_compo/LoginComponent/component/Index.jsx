import { useState } from "react";
import Modal from "react-modal";
import { poster } from "../../../assets/images";
import HeaderLogin from "./HeaderLogin";
// import Input from "../../Common/Input";
import Input from "../../Common/InputController/Input";
import useAuthForm from "../hooks/useAuthForm";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../../Store/ReducerStore/Index";

Modal.setAppElement("#root");

const LoginSignup = ({ setAuth }) => {
	const { control, handleSubmit, onSubmit, isLogin, toggleMode } =
		useAuthForm(setAuth);
	// const navigate = useNavigate();

	const [isOpen, setIsOpen] = useState(false);
	// const { state } = useAuth();

	const openLogin = () => {
		if (!isLogin) toggleMode();
		setIsOpen(true);
	};

	const openSignup = () => {
		if (isLogin) toggleMode();
		setIsOpen(true);
	};
	// useEffect(() => {
	// 	if (!!state.token) {
	// 		navigate("/dashboard");
	// 	}
	// }, []);

	return (
		<>
			<div className="bg-bg_color h-screen  text-purple-200">
				<HeaderLogin onLogin={openLogin} onSignup={openSignup} />

				<div className="text-8xl  flex justify-center items-center mt-40 font-ChewyFamily font-thin underline">
					Welcome TaskFlow-Lite
				</div>

				<Modal
					isOpen={isOpen}
					onRequestClose={() => setIsOpen(false)}
					className="outline-none "
					overlayClassName="fixed inset-0 bg-black/70 flex items-center justify-center"
				>
					<div className="h-[70vh] w-[70vw] flex  bg-bg_color text-white rounded-xl ">
						{/* left image */}
						<div className="w-[45%] md:block hidden h-full">
							<img
								src={poster}
								alt="signup poster"
								className="h-full w-full object-cover"
							/>
						</div>
						{/* right form */}
						<div className="md:w-[55%] w-full  h-full flex overflow-auto no-scrollbar items-center justify-center px-12 py-15">
							<div className="w-full max-w-md">
								<h1 className="text-2xl font-semibold text-center mt-4 mb-2">
									{isLogin ? "Login" : "Sign Up"}
								</h1>

								<div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6 text-[10px] sm:text-xs md:text-sm text-gray-300">
									<span className="h-px w-6 sm:w-10 md:w-12 bg-white"></span>

									<span className="text-center px-2">
										{isLogin ? "Login with Username" : "Sign Up With e-mail"}
									</span>

									<span className="h-px w-6 sm:w-10 md:w-12 bg-white"></span>
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
												message="Phone no. should be 10 digits"
												placeholder="2156562651"
												rules={{
													required: true,
													maxLength: 10,
													minLength: 10,
												}}
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
			</div>
		</>
	);
};

export default LoginSignup;
