export const ProfileSectionFields = [
	{
		name: "fullname",
		type: "text",
		label: "Full Name",
		placeholder: "Enter full name",
		rules: {
			required: "Full Name is required",
			minLength: {
				value: 3,
				message: "Full Name must be at least 3 characters",
			},
		},
	},
	{
		name: "username",
		type: "text",
		label: "Username",
		placeholder: "Enter username",
		rules: {
			required: "Username is required",
			minLength: {
				value: 3,
				message: "Username must be at least 3 characters",
			},
		},
	},
	{
		name: "email",
		type: "email",
		label: "Email Address",
		placeholder: "example@domain.com",
		rules: {
			required: "Email is required",
			pattern: {
				value: /^\S+@\S+\.\S+$/,
				message: "Invalid email address",
			},
		},
	},
	{
		name: "phone",
		type: "tel",
		label: "Phone Number",
		placeholder: "Enter phone number",
		message: "Phone number must be exactly 10 digits",
		rules: {
			required: "Phone number is required",
			pattern: {
				value: /^[0-9]{10}$/,
			},
		},
	},
	{
		name: "gender",
		type: "select",
		label: "Gender",
		placeholder: "Select gender",
		options: ["Male", "Female", "Other"],
		rules: {
			required: "Gender is required",
		},
	},
	{
		name: "dob",
		type: "date",
		label: "Date of Birth",
		placeholder: "YYYY-MM-DD",
		rules: {
			required: "Date of Birth is required",
		},
	},
	{
		name: "address",
		type: "text",
		label: "Address",
		placeholder: "Street, Apartment, City",
		rules: {
			required: "Address is required",
			minLength: {
				value: 1,
				message: "Address must be at least 5 characters",
			},
		},
	},
	{
		name: "pincode",
		type: "tel",
		label: "Pincode",
		placeholder: "Enter 6-digit pincode",
		rules: {
			required: "Pincode is required",
			pattern: {
				value: /^[0-9]{6}$/,
				message: "Pincode must be exactly 6 digits",
			},
		},
	},
	{
		name: "state",
		type: "select",
		label: "State",
		placeholder: "Select state",
		options: [
			"Andhra Pradesh",
			"Arunachal Pradesh",
			"Assam",
			"Bihar",
			"Chhattisgarh",
			"Goa",
			"Gujarat",
			"Haryana",
			"Himachal Pradesh",
			"Jharkhand",
			"Karnataka",
			"Kerala",
			"Madhya Pradesh",
			"Maharashtra",
			"Manipur",
			"Meghalaya",
			"Mizoram",
			"Nagaland",
			"Odisha",
			"Punjab",
			"Rajasthan",
			"Sikkim",
			"Tamil Nadu",
			"Telangana",
			"Tripura",
			"Uttar Pradesh",
			"Uttarakhand",
			"West Bengal",
		],
		rules: {
			required: "State is required",
		},
	},
];
