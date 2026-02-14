export const initialState = {
	token: localStorage.getItem("token") || "",
	user: null,
};

export const authReducer = (state, action) => {
	switch (action.type) {
		case "LOGIN":
			return {
				...state,
				token: action.payload.token,
				user: action.payload.user,
			};

		case "LOGOUT":
			return {
				...state,
				token: null,
				user: null,
			};

		case "UPDATE_USER":
			return {
				...state,
				user: action.payload,
			};

		case "GET_DATA":
			return {
				...state,
				token: action.payload.token,
				user: action.payload.user,
			};

		default:
			return state;
	}
};
