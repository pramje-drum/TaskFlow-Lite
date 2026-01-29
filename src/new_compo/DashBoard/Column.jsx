import TaskCard from "./TaskCard";

const Column = ({
	columnId,
	columnName,
	tasks,
	handleRemoveTask,
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
			<div className="p-4 bg-black text-white flex justify-between font-bold">
				<span>{columnName}</span>
				<span>{tasks.length}</span>
			</div>

			<div className="p-4 min-h-[300px]">
				{tasks.length === 0 ? (
					<p className="text-gray-500">Drag tasks here</p>
				) : (
					tasks.map((task) => (
						<TaskCard
							key={task.id}
							task={task}
							columnId={columnId}
							handleRemoveTask={handleRemoveTask}
							handleDragStart={handleDragStart}
						/>
					))
				)}
			</div>
		</div>
	);
};

export default Column;
