import { useState } from "react";
import useDragDrop from "./useDragDrop";
import useTasks from "./useTasks";

const useDashboard = () => {
	const { tasks, loading, error, createTask, removeTask, editTasks } =
		useTasks();

	const [newTask, setNewTask] = useState("");
	const [currCol, setCurrCol] = useState("todo");
	const [dueDate, setDueDate] = useState("");
	const [searchVal, setSearchVal] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	const [editingTask, setEditingTask] = useState(null);

	const { draggedItem, handleDragStart, handleDragOver, resetDrag } =
		useDragDrop();

	const resetForm = () => {
		setNewTask("");
		setCurrCol("todo");
		setDueDate("");
		setEditingTask(null);
		setIsOpen(false);
	};

	const addNewTask = () => {
		if (!newTask.trim()) return alert("Task Content Empty!!");
		if (!dueDate.trim()) return alert("Date Content Empty!!");

		// const resetForm = () => {
		// 	setNewTask("");
		// 	setCurrCol("todo");
		// 	setDueDate("");
		// 	setEditingTask(null);
		// 	setIsOpen(false);
		// };

		if (editingTask) {
			editTasks(editingTask.id, {
				content: newTask,
				status: currCol,
				date: dueDate,
			});
		} else {
			createTask({
				id: Date.now().toString(),
				content: newTask,
				status: currCol,
				date: dueDate,
			});
		}
		resetForm();
	};

	const handleEditTask = (task) => {
		setEditingTask(task);
		setNewTask(task.content);
		setCurrCol(task.status);
		setDueDate(task.date);
		setIsOpen(true);
	};

	const handleDrop = (e, targetColumnId) => {
		e.preventDefault();
		if (!draggedItem) return;

		const { columnId: sourceColumnId, task } = draggedItem;
		if (sourceColumnId === targetColumnId) return;

		editTasks(task.id, { status: targetColumnId });
		resetDrag();
	};

	return {
		tasks,
		loading,
		error,

		newTask,
		setNewTask,
		currCol,
		setCurrCol,
		dueDate,
		setDueDate,
		searchVal,
		setSearchVal,

		isOpen,
		setIsOpen,
		editingTask,
		setEditingTask,

		addNewTask,
		handleEditTask,
		handleRemoveTask: removeTask,

		handleDragStart,
		handleDragOver,
		handleDrop,

		resetForm,
	};
};

export default useDashboard;
