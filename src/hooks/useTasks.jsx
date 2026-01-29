import { useEffect, useState } from "react";
import { getTasks, addTask, deleteTask, updateTask } from "../services/useAPI";

const useTasks = () => {
	const [tasks, setTasks] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	// logic for fetch task
	const fetchTasks = async () => {
		try {
			setLoading(true);
			const res = await getTasks();
			setTasks(res.data);
		} catch (err) {
			setError(err);
		} finally {
			setLoading(false);
		}
	};

	// logic for add task
	const createTask = async (task) => {
		try {
			const res = await addTask(task);
			setTasks((prev) => [...prev, res.data]);
		} catch (err) {
			setError(err);
		}
	};

	// logic for delete task
	const removeTask = async (id) => {
		try {
			await deleteTask(id);
			setTasks((prev) => prev.filter((task) => task.id !== id));
		} catch (err) {
			setError(err);
		}
	};

	// logic for update tasks
	const editTasks = async (id, data) => {
		try {
			await updateTask(id, data);
			setTasks((prev) =>
				prev.map((task) => (task.id === id ? { ...task, ...data } : task)),
			);
		} catch (err) {
			setError(err);
		}
	};

	useEffect(() => {
		fetchTasks();
	}, []);

	return { tasks, loading, error, createTask, removeTask, editTasks };
};

export default useTasks;
