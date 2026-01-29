import { useState } from "react";
import useTasks from "../../hooks/useTasks";
import AddTask from "./AddTask";
import Column from "./Column";
import { Columns } from "../Columns";
import useDragDrop from "../../hooks/useDragDrop";

const DashboardNEW = () => {
	const { tasks, loading, error, createTask, removeTask, editTasks } =
		useTasks();
	const [newTask, setNewTask] = useState("");
	const [currCol, setCurrCol] = useState("todo");

	const { draggedItem, handleDragStart, handleDragOver, resetDrag } = useDragDrop();

	const addNewTask = () => {
		if (!newTask.trim()) return;

		createTask({
			id: Date.now().toString(),
			content: newTask,
			status: currCol,
			priority: "Medium",
		});
		setNewTask("");
	};

	const handleRemoveTask = (id) => removeTask(id);

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
		<div className="p-6 min-h-screen bg-white flex flex-col items-center">
			{/* Add Task Section */}
			<AddTask
				newTask={newTask}
				setNewTask={setNewTask}
				currCol={currCol}
				setCurrCol={setCurrCol}
				addNewTask={addNewTask}
			/>

			{/* Board Columns */}
			<div className="flex gap-6 overflow-x-auto w-full justify-center">
				{Object.keys(Columns).map((columnId) => (
					<Column
						key={columnId}
						columnId={columnId}
						columnName={Columns[columnId]}
						tasks={tasks.filter((t) => t.status === columnId)}
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
