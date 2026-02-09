
const AddTask = ({
	newTask = "",
	setNewTask,
	currCol = "to-do",
	dueDate = null,
	setCurrCol,
	addNewTask,
	setDueDate = "",
	editingTask = false,
}) => {
	return (
		<div className="mb-8 flex w-full max-w-150 border border-black rounded-xl overflow-hidden">
			<input
				type="text"
				value={editingTask ? "" : newTask}
				onChange={(e) => setNewTask(e.target.value)}
				placeholder="Add a new task..."
				className="grow px-4 py-3 outline-none"
				onKeyDown={(e) => e.key === "Enter" && addNewTask()}
			/>

			<select
				value={editingTask ? "" : currCol}
				onChange={(e) => setCurrCol(e.target.value)}
				className="px-2 py-3 border-l border-black outline-none"
			>
				<option value="todo">To Do</option>
				<option value="inProgress">In Progress</option>
				<option value="completed">Completed</option>
			</select>

			<input
				value={editingTask ? "" : dueDate}
				type="date"
				min="2026-02-09" max="2050-04-30"
				className="px-3 border-l border-black"
				onChange={(e) => setDueDate(e.target.value)}
			/>

			<button
				onClick={addNewTask}
				className="px-6 py-3 border-l border-black bg-black text-white hover:bg-white hover:text-black transition"
			>
				{editingTask ? "Edit" : "Add"}
			</button>
		</div>
	);
};

export default AddTask;
