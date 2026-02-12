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
		<div className="mb-8 flex w-full max-w-150 border 	border-white rounded-xl overflow-hidden">
			<input
				type="text"
				// value={editingTask ? "" : newTask}
				value={newTask}
				onChange={(e) => setNewTask(e.target.value)}
				placeholder="Add a new task..."
				className="grow px-4 py-3 outline-none"
				onKeyDown={(e) => e.key === "Enter" && addNewTask()}
			/>

			<select
				// value={editingTask ? "" : currCol}
				value={currCol}
				onChange={(e) => setCurrCol(e.target.value)}
				className="px-2 py-3 border-l border-black  outline-none"
			>
				<option value="todo" className="bg-task_border_color">
					To Do
				</option>
				<option value="inProgress" className="bg-task_border_color">
					In Progress
				</option>
				<option value="completed" className="bg-task_border_color">
					Completed
				</option>
			</select>

			<input
				// value={editingTask ? "" : dueDate}
				value={dueDate}
				type="date"
				min="2026-02-09"
				max="2050-04-30"
				className="px-3 border-l border-black"
				onChange={(e) => setDueDate(e.target.value)}
			/>

			<button
				onClick={addNewTask}
				className="px-6 py-3 border-l border-black  text-white hover:bg-task_border_color cursor-pointer transition"
			>
				{editingTask ? "Edit" : "Add"}
			</button>
		</div>
	);
};

export default AddTask;
