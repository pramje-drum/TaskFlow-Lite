import axios from "axios";

const api = axios.create({
	baseURL: "/tasks",
});

const getTasks = () => api.get();

const addTask = (task) => api.post("", task);

const deleteTask = (id) => api.delete(`/${id}`);

const updateTask = (id, data) => api.patch(`/${id}`, data);

export { getTasks, addTask, deleteTask, updateTask };

export default {
	getTasks,
	addTask,
	deleteTask,
	updateTask,
};
