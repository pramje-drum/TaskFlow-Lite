import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost:3000/users",
});

const getUser = () => api.get();
const addUser = (user) => api.post("", user);
const updateDBUser = (id, data) => api.put(`/${id}`, data);

export { getUser, addUser, updateDBUser };

export default {
	getUser,
	addUser,
	updateDBUser,
};
