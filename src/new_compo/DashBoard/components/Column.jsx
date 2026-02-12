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
}) => {
	return (
		<div
			className="w-100 bg-task_container_color  py-10 px-7 text-white rounded-xl shadow-xl"
			onDragOver={handleDragOver}
			onDrop={(e) => handleDrop(e, columnId)}
		>
			<div className="py-4 mx-4 bg-task_container_title_bg opacity-80 uppercase  border-task_continer border-2 text-white flex justify-center font-bold rounded-xl">
				<span>{columnName}</span>
				<span>-</span>
				<span className="">{tasks.length}</span>
			</div>

			<div className="p-4 min-h-75 max-h-screen overflow-auto no-scrollbar">
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
