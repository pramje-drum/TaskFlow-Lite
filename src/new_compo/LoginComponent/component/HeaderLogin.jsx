const HeaderLogin = ({ onLogin, onSignup }) => {
	return (
		<header className="w-full h-16 flex items-center justify-center px-10">
			<div className="flex gap-4">
				<button
					onClick={onLogin}
					className="px-5 py-2 rounded-md border cursor-pointer"
				>
					Login
				</button>

				<button
					onClick={onSignup}
					className="px-5 py-2 rounded-md border cursor-pointer"
				>
					Sign Up
				</button>
			</div>
		</header>
	);
};

export default HeaderLogin;
