const CommonInput = ({ field, type, error, placeholder, disabled }) => {
	return (
		<input
			{...field}
			type={type}
			placeholder={placeholder}
			disabled={disabled}
			className={`
				w-full px-3 py-2 rounded-md
				bg-input_bg text-white
				border-2
				${error ? "border-red-500" : "border-white/30"}
				${disabled ? "opacity-50 cursor-not-allowed" : ""}
				focus:outline-none focus:ring-2 focus:ring-focus_color
			`}
		/>
	);
};

export default CommonInput;
