import { useReducer, createContext, useContext, } from "react";
// import { updateDBUser } from "../../services/useProfile";
import { authReducer, initialState } from "./Reducers/Index";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, initialState);

	// for token in local storage
	// useEffect(() => {
	// 	if (state.token) {
	// 		localStorage.setItem("token", state.token);
	// 	} else {
	// 		localStorage.removeItem("token");
	// 	}
	// }, [state.token]);

	// // for users in local storage
	// useEffect(() => {
	// 	if (state.user) {
	// 		localStorage.setItem("currentUser", JSON.stringify(state.user));
	// 	} else {
	// 		localStorage.removeItem("currentUser");
	// 	}
	// }, [state.user]);

	// // this is updating db
	// useEffect(() => {
	// 	if (state.user?.id) {
	// 		updateDBUser(state.user.id, state.user).catch((err) =>
	// 			console.error("DB update failed", err),
	// 		);
	// 	}
	// }, [state.user]);

	return (
		<AuthContext.Provider
			value={{
				state,
				dispatch,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
