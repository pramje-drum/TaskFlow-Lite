const TaskCard = ({ task, columnId, handleRemoveTask, handleDragStart }) => {
	return (
		<div
			draggable
			onDragStart={() => handleDragStart(columnId, task)}
			className="p-3 mb-3 border border-black rounded-md cursor-move flex justify-between items-center hover:bg-black hover:text-white transition"
		>
			<span>{task.content}</span>
			<button onClick={() => handleRemoveTask(task.id)} className="font-bold">
				✕
			</button>
		</div>
	);
};

export default TaskCard;
