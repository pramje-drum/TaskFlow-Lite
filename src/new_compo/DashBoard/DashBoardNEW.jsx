import { useState } from "react";
import useTasks from "../../hooks/useTasks";
import AddTask from "./AddTask";
import Column from "./Column";
import { Columns } from "../Columns";
import useDragDrop from "../../hooks/useDragDrop";
import SearchTask from "./SearchTask";
import Modal from "react-modal";

const DashboardNEW = () => {
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

	const addNewTask = () => {
		if (!newTask.trim()) {
			alert("Task Content Empty!!");
			return;
		}
		if (!dueDate.trim()) {
			alert("Date Content Empty!!");
			return;
		}

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
				priority: "Medium",
				date: dueDate,
			});
		}

		setNewTask("");
		setCurrCol("todo");
		setDueDate("");
		setEditingTask(null);
		setIsOpen(false);
	};
	const handleRemoveTask = (id) => removeTask(id);

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

	if (loading) return <p>Loading Tasks...</p>;
	if (error) return <p>Something went wrong...</p>;

	return (
		<div className="p-6 min-h-screen  bg-white flex flex-col items-center">
			{/* Add Task Section */}
			<button
				onClick={() => {
					setEditingTask(null);
					setNewTask(""); 
					setCurrCol("todo"); 
					setDueDate(""); 
					setIsOpen(true);
				}}
				className="px-6 py-3 bg-black text-white rounded-xl mb-6"
			>
				Add Task
			</button>
			<Modal
				isOpen={isOpen}
				onRequestClose={() => setIsOpen(false)}
				overlayClassName="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
				className="bg-white w-full max-w-[640px] rounded-2xl shadow-2xl outline-none animate-fadeIn"
			>
				<div className="flex justify-between items-center px-6 py-4 border-b">
					<h2 className="text-xl font-bold">
						{editingTask ? "Edit Task " : "Add New Task "}
					</h2>

					<button
						onClick={() => setIsOpen(false)}
						className="text-2xl leading-none hover:text-red-500 transition"
					>
						✕
					</button>
				</div>

				<div className="px-6 py-5">
					<AddTask
						newTask={newTask}
						setNewTask={setNewTask}
						currCol={currCol}
						setCurrCol={setCurrCol}
						dueDate={dueDate}
						setDueDate={setDueDate}
						addNewTask={addNewTask}
						isEdit={!!editingTask}
					/>
				</div>
			</Modal>

			{/* Search Tasks Here */}
			<SearchTask searchVal={searchVal} setSearchVal={setSearchVal} />

			{/* Board Columns */}
			<div className="flex gap-6 overflow-x-auto w-full justify-center ">
				{Object.keys(Columns).map((columnId) => (
					<Column
						key={columnId}
						columnId={columnId}
						columnName={Columns[columnId]}
						tasks={tasks.filter(
							(t) => t.status === columnId && t.content.includes(searchVal),
						)}
						// tasks={tasks.filter((t) => t.status === columnId)}
						handleEditTask={handleEditTask}
						handleRemoveTask={handleRemoveTask}
						handleDragStart={handleDragStart}
						handleDragOver={handleDragOver}
						handleDrop={handleDrop}
					/>
				))}
			</div>
		</div>
	);
};

export default DashboardNEW;
