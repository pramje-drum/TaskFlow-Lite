import { useState } from "react";
import Modal from "react-modal";

const TaskCard = ({
	task,
	columnId,
	handleRemoveTask,
	handleDragStart,
	handleEditTask,
}) => {
	const [modalOpen, setModalOpen] = useState(false);

	return (
		<>
			{/* TASK CARD */}
			<div
				draggable
				onDragStart={() => handleDragStart(columnId, task)}
				onClick={() => setModalOpen(true)}
				className="p-3 mb-3 border border-black rounded-lg cursor-move
					flex justify-between items-center
					bg-white hover:bg-black hover:text-white transition group"
			>
				<span className="truncate">{task.content}</span>

				<div className="flex gap-2 opacity-0 group-hover:opacity-100 transition">
					<button
						onClick={(e) => {
							e.stopPropagation();
							handleEditTask(task);
							setModalOpen(false);
						}}
						title="Edit Task"
						className="px-2 py-1 rounded-md border border-black
							bg-white text-black hover:bg-yellow-400 transition"
					>
						✏️
					</button>
					<button
						onClick={(e) => {
							e.stopPropagation();
							handleRemoveTask(task.id);
						}}
						title="Delete Task"
						className="px-2 py-1 rounded-md border border-black
							bg-white text-black hover:bg-red-500 hover:text-white transition"
					>
						✕
					</button>
				</div>
			</div>
			<Modal
				isOpen={modalOpen}
				onRequestClose={() => setModalOpen(false)}
				className="bg-white text-black w-[420px] p-6 rounded-xl outline-none"
				overlayClassName="fixed inset-0 bg-black/70 flex items-center justify-center"
			>
				<div className="space-y-4">
					<h2 className="text-xl font-bold border-b pb-2">{task.content}</h2>

					<p>
						<span className="font-semibold">Status:</span> {task.status}
					</p>

					<p>
						<span className="font-semibold">Due Date:</span> {task.date}
					</p>

					<div className="flex justify-end gap-3 pt-4">
						<button
							onClick={() => setModalOpen(false)}
							className="px-4 py-2 border border-black rounded-lg"
						>
							Close
						</button>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default TaskCard;
