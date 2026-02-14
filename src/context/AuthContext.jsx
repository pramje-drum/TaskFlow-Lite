import { createContext, useContext, useState } from "react";
import { updateDBUser} from "../services/useProfile";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [token, setToken] = useState(localStorage.getItem("token") || null);
	const [user, setUser] = useState(() => {
		const savedUser = localStorage.getItem("currentUser");
		return savedUser ? JSON.parse(savedUser) : null;
	});

	const login = (token, userData) => {
		localStorage.setItem("token", token);
		localStorage.setItem("currentUser", JSON.stringify(userData));
		setToken(token);
		setUser(userData);
	};

	const logout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("currentUser");
		setToken(null);
		setUser(null);
	};

	const updateUser = async (updatedData) => {
		try {
			setUser(updatedData);
			localStorage.setItem("currentUser", JSON.stringify(updatedData));

			if (updatedData.id) {
				await updateDBUser(updatedData.id, updatedData);
			}
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<AuthContext.Provider
			value={{
				token,
				user,
				isAuthenticated: !!token,
				login,
				logout,
				updateUser,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
