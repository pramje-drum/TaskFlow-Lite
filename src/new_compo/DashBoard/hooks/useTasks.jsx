// import { useEffect, useState } from "react";
// import {
// 	addTask,
// 	deleteTask,
// 	getTasks,
// 	updateTask,
// } from "../../../services/useAPI";

import {
	useAddTasksMutation,
	useDeleteTasksMutation,
	useGetTasksQuery,
	useUpdateTasksMutation,
} from "../../../Store/apiSlice";

const useTasks = () => {
	// const [tasks, setTasks] = useState([]);
	// const [loading, setLoading] = useState(false);
	// const [error, setError] = useState(null);

	const { data: tasks, isLoading: loading, error } = useGetTasksQuery();
	const [createTask] = useAddTasksMutation();
	const [editTasks] = useUpdateTasksMutation();
	const [removeTask] = useDeleteTasksMutation();

	// const fetchTasks = async () => {
	// 	try {
	// 		setLoading(true);
	// 		setError(null);

	// 		const res = await getTasks();

	// 		setTasks(res.data);
	// 	} catch (err) {
	// 		console.error("Fetch tasks error:", err);
	// 		setError(err);
	// 	} finally {
	// 		setLoading(false);
	// 	}
	// };

	// const createTask = async (task) => {
	// 	try {
	// 		setError(null);
	// 		const res = await addTask(task);
	// 		setTasks((prev) => [...prev, res.data]);
	// 	} catch (err) {
	// 		console.error("Create task error:", err);
	// 		setError(err);
	// 	}
	// };

	// const removeTask = async (id) => {
	// 	try {
	// 		setError(null);
	// 		await deleteTask(id);
	// 		setTasks((prev) => prev.filter((task) => task.id !== id));
	// 	} catch (err) {
	// 		console.error("Delete task error:", err);
	// 		setError(err);
	// 	}
	// };

	// const editTasks = async (id, data) => {
	// 	try {
	// 		setError(null);
	// 		await updateTask(id, data);
	// 		setTasks((prev) =>
	// 			prev.map((task) => (task.id === id ? { ...task, ...data } : task)),
	// 		);
	// 	} catch (err) {
	// 		console.error("Update task error:", err);
	// 		setError(err);
	// 	}
	// };

	// useEffect(() => {
	// 	fetchTasks();
	// }, []);

	return {
		tasks,
		loading,
		error,
		createTask,
		removeTask,
		editTasks,
	};
};

export default useTasks;
