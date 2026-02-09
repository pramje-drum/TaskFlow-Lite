import { Controller } from "react-hook-form";
import InputRender from "./InputRender";

const Input = ({
	control,
	name,
	label,
	type = "text",
	placeholder = "",
	rules = {},
	options = [],
	disabled = false,
}) => {
	return (
		<div className={type === "checkbox" ? "mb-4" : "flex flex-col mb-4"}>
			{type !== "checkbox" && (
				<label className="text-left text-sm font-medium mb-1 text-gray-300">
					{label}
				</label>
			)}

			<Controller
				name={name}
				control={control}
				rules={rules}
				render={({ field, fieldState: { error } }) => (
					<InputRender
						field={field}
						error={error}
						type={type}
						label={label}
						placeholder={placeholder}
						options={options}
						disabled={disabled}
					/>
				)}
			/>
		</div>
	);
};

export default Input;
