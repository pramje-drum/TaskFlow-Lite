import axios from "axios";

const API = "http://localhost:5000/tasks";

export function getTasks() {
	return axios.get(API);
}

export function addTasks(task) {
	return (axios.post(API), task);
}
export function updateTasks(id, updatedTask) {
	return axios.put(`${API}/${id}`, updatedTask);
}
