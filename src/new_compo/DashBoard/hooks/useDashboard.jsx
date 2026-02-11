import { useState } from "react";
import useDragDrop from "./useDragDrop";
import useTasks from "./useTasks";
import { useDispatch } from "react-redux";
import { api } from "../../../Store/apiSlice";
import { toast } from "react-toastify";

const useDashboard = () => {
	const { tasks, loading, error, createTask, removeTask, editTasks } =
		useTasks();

	const dispatch = useDispatch();

	const [newTask, setNewTask] = useState("");
	const [currCol, setCurrCol] = useState("todo");
	const [dueDate, setDueDate] = useState("");
	const [searchVal, setSearchVal] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	const [editingTask, setEditingTask] = useState(null);
	const [selectedTask, setSelectedTask] = useState([]);

	const { draggedItem, handleDragStart, handleDragOver, resetDrag } =
		useDragDrop();

	const resetForm = () => {
		setNewTask("");
		setCurrCol("todo");
		setDueDate("");
		setEditingTask(null);
		setIsOpen(false);
	};

	const handleSelected = (task) => {
		setSelectedTask((prev) => {
			const alreadySelected = prev.some((item) => item.id === task.id);

				console.log(prev)
			if (alreadySelected) {
				return prev.filter((item) => item.id !== task.id);
			} else {
				return [...prev, task];
			}
		});
		console.log(selectedTask, "tasks")
	};

	const handleSelectedStatusChange = (newStatus) => {
		if (!newStatus) return;

		selectedTask
			.filter((task) => task.status !== newStatus)
			.forEach((task) => {
				editTasks({
					id: task.id,
					task: {
						...task,
						status: newStatus,
					},
				});
			});

		setSelectedTask([]);
	};

	const handleSelectedDelete = () => {
		selectedTask.forEach((task) => {
			removeTask(task.id);
		});

		setSelectedTask([]);
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
			editTasks({
				id: editingTask?.id,
				task: {
					content: newTask,
					status: currCol,
					date: dueDate,
				},
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
	// console.log(editingTask);

	const handleDrop = (e, targetColumnId) => {
		e.preventDefault();
		if (!draggedItem) return;

		const { columnId: sourceColumnId, task } = draggedItem;
		if (sourceColumnId === targetColumnId) return;
		// console.log(task.id, "taskid", task);

		editTasks({
			id: task?.id,
			task: {
				content: task?.content,
				status: targetColumnId,
				date: task?.date,
			},
		});
		resetDrag();
	};

	const handleRemoveTask = (id) => {
		const patchResult = dispatch(
			api.util.updateQueryData("getTasks", undefined, (draft) => {
				const index = draft.findIndex((task) => task.id === id);
				draft.splice(index, 1);
			}),
		);

		const timeout = setTimeout(() => {
			removeTask(id);
		}, 10000);

		toast(
			({ closeToast }) => (
				<div className="flex flex-row space-x-2 items-center  g-10">
					<div>Task deleted</div>
					<button
						onClick={() => {
							clearTimeout(timeout);
							patchResult.undo();
							closeToast();
						}}
						className="text-end transparent border p-2 rounded-md text-black cursor-pointer font-extrabold"
					>
						UNDO
					</button>
				</div>
			),
			{
				autoClose: 5000,
			},
		);
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
		// handleRemoveTask: removeTask,
		handleRemoveTask,

		handleDragStart,
		handleDragOver,
		handleDrop,

		selectedTask,
		handleSelected,
		handleSelectedDelete,
		handleSelectedStatusChange,

		resetForm,
	};
};

export default useDashboard;
