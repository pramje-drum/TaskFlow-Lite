import { Controller } from "react-hook-form";

const Input = ({
	control,
	name,
	label,
	type = "text",
	placeholder = "",
	rules = {},
}) => {
	return (
		<div className="flex flex-col mb-4">
			<label className="text-left text-lg font-medium mb-1">{label} :</label>

			<Controller
				name={name}
				control={control}
				rules={rules}
				render={({ field, fieldState: { error } }) => (
					<>
						<input
							{...field}
							type={type}
							placeholder={placeholder}
							className={`flex-1 border px-3 py-2 rounded-lg focus:outline-none
								${error ? "border-red-500" : "border-gray-300"}`}
						/>
						{error && (
							<span className="text-red-500 text-sm mt-1">
								{error.type === "required" && `${label} is required`}
								{error.type === "maxLength" && `${label} is too long`}
							</span>
						)}
					</>
				)}
			/>
		</div>
	);
};

export default Input;
