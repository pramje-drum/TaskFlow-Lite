const Header = ({ auth, setAuth }) => {
	const handleLogOut = () => {
		console.log("clicked");
		localStorage.removeItem("token");
		setAuth(false);
	};
	return (
		<div className="navbar bg-base-100 shadow-lg flex mb-26 top-0 z-1000 justify-center items-center p-6 font-ChewyFamily">
			<div>
				<a className="text-5xl">TaskFlow-Lite</a>
			</div>
			{/* logout-button */}
			{auth && (
				<div className="absolute right-6">
					<button
						onClick={handleLogOut}
						className=" text-2xl font-ChewyFamily hover:text-gray-600"
					>
						Log-Out
					</button>
				</div>
			)}
		</div>
	);
};

export default Header;
