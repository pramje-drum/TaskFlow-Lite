import TaskCard from "./TaskCard";

const Column = ({
	columnId,
	columnName,
	tasks,
	handleRemoveTask,
	handleEditTask,
	handleDragStart,
	handleDragOver,
	handleDrop,
	selectedTask,
	handleSelected,
	handleSelectedDelete,
	handleSelectedStatusChange,
}) => {
	return (
		<div
			className="w-100  bg-task_container_color py-10 px-7 text-white rounded-xl shadow-xl"
			onDragOver={handleDragOver}
			onDrop={(e) => handleDrop(e, columnId)}
		>
			<div className="p-4 bg-task_container_title_bg opacity-80 uppercase  border-task_continer border-2 text-white flex justify-center font-bold rounded-lg">
				<span>{columnName}</span>
				<span>-</span>
				<span>{tasks.length}</span>
			</div>

			{selectedTask.length !== 0 && (
				<div className="flex justify-between items-center mt-3">
					<button
						onClick={() => handleSelectedDelete()}
						className="bg-red-500 hover:bg-red-600 px-4 py-1 rounded-md text-sm"
					>
						Delete Selected
					</button>

					<select
						onChange={(e) => handleSelectedStatusChange(e.target.value)}
						className="border p-2 rounded-md text-yellow-200"
					>
						<option value="" className="text-black">
							{" "}
						</option>
						<option value="todo" className="text-black">
							To-Do
						</option>
						<option value="inProgress" className="text-black">
							In Progress
						</option>
						<option value="completed" className="text-black">
							Completed
						</option>
					</select>
				</div>
			)}

			<div className="p-4 min-h-75 max-h-screen overflow-auto">
				{tasks.length === 0 ? (
					<div className="flex flex-col text-center mt-24">
						<p className="text-gray-500 ">No Tasks Here!</p>
						<p className="text-gray-500">Add New Tasks..</p>
					</div>
				) : (
					tasks.map((task) => (
						<TaskCard
							key={task.id}
							task={task}
							columnId={columnId}
							handleRemoveTask={handleRemoveTask}
							handleEditTask={handleEditTask}
							handleDragStart={handleDragStart}
							selectedTask={selectedTask}
							handleSelected={handleSelected}
						/>
					))
				)}
			</div>
		</div>
	);
};

export default Column;
