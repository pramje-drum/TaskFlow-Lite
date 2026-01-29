const AddTask = ({ newTask, setNewTask, currCol, setCurrCol, addNewTask }) => {
	return (
		<div className="mb-8 flex w-full max-w-lg border border-black rounded-xl overflow-hidden">
			<input
				type="text"
				value={newTask}
				onChange={(e) => setNewTask(e.target.value)}
				placeholder="Add a new task..."
				className="grow px-4 py-3 outline-none"
				onKeyDown={(e) => e.key === "Enter" && addNewTask()}
			/>

			<select
				value={currCol}
				onChange={(e) => setCurrCol(e.target.value)}
				className="px-4 py-3 border-l border-black outline-none"
			>
				<option value="todo">To Do</option>
				<option value="inProgress">In Progress</option>
				<option value="completed">Completed</option>
			</select>

			<button
				onClick={addNewTask}
				className="px-6 py-3 border-l border-black bg-black text-white hover:bg-white hover:text-black transition"
			>
				Add
			</button>
		</div>
	);
};

export default AddTask;
