import CommonInput from "./CommonInput";

const InputRender = ({
	field,
	error,
	label,
	type = "text",
	placeholder = "",
	options = [],
	disabled = false,
}) => {
	if (type === "checkbox") {
		return (
			<div className="flex items-start gap-2">
				<input
					type="checkbox"
					checked={!!field.value}
					onChange={(e) => field.onChange(e.target.checked)}
					className="w-4 h-4 mt-1 accent-purple-600"
				/>

				<div>
					<label className="text-sm text-gray-300 leading-snug">{label}</label>

					{error && (
						<p className="text-red-500 text-xs mt-1">This field is required</p>
					)}
				</div>
			</div>
		);
	}
	if (type === "select") {
		return (
			<>
				<select
					{...field}
					disabled={disabled}
					className={`
					w-full px-3 py-2 rounded-md bg-input_bg text-white border-2
					${error ? "border-red-500" : "border-white/30"}
					${disabled ? "opacity-50 cursor-not-allowed" : ""}
				`}
				>
					<option value="">{`Select ${label}`}</option>
					{options.map((opt) => (
						<option key={opt} value={typeof opt === "string" ? opt : opt.value}>
							{typeof opt === "string" ? opt : opt.label}
						</option>
					))}
				</select>

				{error && (
					<p className="text-red-500 text-xs mt-1">{label} is required</p>
				)}
			</>
		);
	}
	if (type === "date") {
		return (
			<>
				<input
					{...field}
					type="date"
					max="2007-12-31"
					placeholder={placeholder}
					disabled={disabled}
					className={`
				w-full px-3 py-2 rounded-md
				bg-input_bg text-white
				border-2
				${error ? "border-red-500" : "border-white/30"}
				${disabled ? "opacity-50 cursor-not-allowed" : ""}
				focus:outline-none focus:ring-2 focus:ring-focus_color`}
				/>
			</>
		);
	}

	return (
		<>
			<CommonInput
				field={field}
				type={type}
				error={error}
				placeholder={placeholder}
				disabled={disabled}
			/>

			{error && (
				<p className="text-red-500 text-xs mt-1">{label} is required</p>
			)}
		</>
	);
};

export default InputRender;
