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
}) => {
	return (
		<div
			className="w-80 shrink-0 border border-black rounded-lg shadow-md"
			onDragOver={handleDragOver}
			onDrop={(e) => handleDrop(e, columnId)}
		>
			<div className="p-4 bg-black text-white flex justify-between font-bold rounded-md">
				<span>{columnName}</span>
				<span>{tasks.length}</span>
			</div>

			<div className="p-4 min-h-75">
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
						/>
					))
				)}
			</div>
		</div>
	);
};

export default Column;
