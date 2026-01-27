import { useState } from "react";
import Header from "../Header";
// import { useNavigate } from "react-router-dom";

const Dashboard = () => {
	
	const [columns, setColumns] = useState({
		todo: {
			name: "to-do",
			items: [
				// { id: "1", content: "Make Project" },
				// { id: "2", content: "Make Diagram" },
			],
		},
		inProgress: {
			name: "in-progress",
			items: [
				// { id: "1", content: "Make Project" },
				// { id: "2", content: "Make Diagram" },
			],
		},
		completed: {
			name: "completed",
			items: [
				// { id: "1", content: "Make Project" },
				// { id: "2", content: "Make Diagram" },
			],
		},
	});

	const [newTasks, setNewTasks] = useState("");
	const [currCol, setCurrCol] = useState("todo");
	const [draggedItem, setDraggedItem] = useState(null);

	const addNewTask = () => {
		if (newTasks.trim() === "") return;

		const updatedColumns = { ...columns };

		updatedColumns[currCol].items.push({
			id: Date.now().toString(),
			content: newTasks,
		});

		setColumns(updatedColumns);
		setNewTasks("");
	};

	const removeTasks = (column, task) => {
		const updatedColumns = { ...columns };

		updatedColumns[column].items = updatedColumns[column].items.filter(
			(item) => item.id !== task,
		);

		setColumns(updatedColumns);
	};

	const handleDragStart = (columnId, item) => {
		setDraggedItem({ columnId, item });
	};

	const handleDragOver = (event) => {
		event.preventDefault();
	};

	const handleDrop = (event, columnId) => {
		event.preventDefault();
		if (!draggedItem) return;

		const { columnId: sourceColumnId, item } = draggedItem;

		if (sourceColumnId == columnId) return;

		const updatedColumns = { ...columns };

		updatedColumns[sourceColumnId].items = updatedColumns[
			sourceColumnId
		].items.filter((i) => i.id != item.id);

		updatedColumns[columnId].items.push(item);

		setColumns(updatedColumns);
		setDraggedItem(null);
	};

	return (
		<div>
			

			<div className="p-6 font-Gothic w-full min-h-screen bg-white flex flex-col items-center justify-center">
				<div className="mb-8 flex w-full max-w-lg border border-black rounded-xl overflow-hidden shadow-sm">
					<input
						type="text"
						value={newTasks}
						onChange={(e) => setNewTasks(e.target.value)}
						placeholder="Add a new task..."
						className="grow px-4 py-3 outline-none bg-white text-black placeholder-gray-500"
						onKeyDown={(e) => e.key === "Enter" && addNewTask()}
					/>

					<select
						value={currCol}
						onChange={(e) => setCurrCol(e.target.value)}
						className="px-4 py-3 border-l border-black outline-none bg-white text-black"
					>
						{Object.keys(columns).map((columnId) => {
							return (
								<option value={columnId} key={columnId}>
									{columns[columnId].name}
								</option>
							);
						})}
					</select>

					<button
						onClick={addNewTask}
						className="px-6 py-3 border-l border-black bg-black text-white hover:bg-white hover:text-black transition cursor-pointer"
					>
						Add
					</button>
				</div>

				<div className="flex gap-6 overflow-x-auto pb-6 full">
					{Object.keys(columns).map((columnId) => (
						<div
							key={columnId}
							className="shrink-0 w-80 rounded-lg shadow-lg border border-black bg-white"
							onDragOver={handleDragOver}
							onDrop={(e) => handleDrop(e, columnId)}
						>
							<div className="p-4 font-bold text-xl rounded-t-md bg-black text-white flex justify-between">
								<span>{columns[columnId].name}</span>
								<span>{columns[columnId].items.length}</span>
							</div>

							<div className="min-h-64 p-4">
								{columns[columnId].items.length === 0 ? (
									<div className="text-gray-500">Drag Tasks Here!!</div>
								) : (
									columns[columnId].items.map((item) => (
										<div
											key={item.id}
											className="p-4 mb-3 flex items-center justify-between border border-black rounded-md cursor-move bg-white hover:bg-black hover:text-white transition"
											draggable
											onDragStart={() => handleDragStart(columnId, item)}
										>
											<span>{item.content}</span>
											<button onClick={() => removeTasks(columnId, item.id)}>
												<span className="text-lg cursor-pointer">X</span>
											</button>
										</div>
									))
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
