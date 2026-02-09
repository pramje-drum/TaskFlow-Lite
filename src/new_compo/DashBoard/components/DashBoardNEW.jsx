import AddTask from "./AddTask";
import Column from "./Column";
import { Columns } from "../constants/Columns";
import SearchTask from "./SearchTask";
import Modal from "react-modal";
import useDashboard from "../hooks/useDashboard";

const DashboardNEW = () => {
	const {
		tasks,
		loading,
		error,

		newTask,
		setNewTask,
		currCol,
		setCurrCol,
		dueDate,
		setDueDate,
		searchVal,
		setSearchVal,

		isOpen,
		setIsOpen,
		editingTask,
		setEditingTask,

		addNewTask,
		handleEditTask,
		handleRemoveTask,

		handleDragStart,
		handleDragOver,
		handleDrop,

		resetForm,
	} = useDashboard();

	if (loading) return <p>Loading Tasks...</p>;
	if (error) return <p>Something went wrong...</p>;

	return (
		<div className="p-6 min-h-screen bg-white flex flex-col items-center">
			<button
				onClick={() => {
					setIsOpen(true);
					setEditingTask(null);
				}}
				className="px-6 py-3 bg-black text-white rounded-xl mb-6"
			>
				Add Task
			</button>

			<Modal
				isOpen={isOpen}
				onRequestClose={() => {
					setIsOpen(false);
					resetForm();
				}}
				overlayClassName="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
				className="bg-white w-full max-w-160 rounded-2xl shadow-2xl outline-none"
			>
				<div className="flex justify-between items-center px-6 py-4 border-b">
					<h2 className="text-xl font-bold">
						{editingTask ? "Edit Task" : "Add New Task"}
					</h2>
					<button onClick={() => setIsOpen(false)}>✕</button>
				</div>

				<div className="px-6 py-5">
					<AddTask
						newTask={newTask}
						setNewTask={setNewTask}
						currCol={currCol}
						setCurrCol={setCurrCol}
						dueDate={dueDate}
						setDueDate={setDueDate}
						addNewTask={addNewTask}
						isEdit={!!editingTask}
					/>
				</div>
			</Modal>

			<SearchTask searchVal={searchVal} setSearchVal={setSearchVal} />

			<div className="flex flex-wrap gap-6 overflow-x-auto w-full justify-center">
				{Object.keys(Columns).map((columnId) => (
					<Column
						key={columnId}
						columnId={columnId}
						columnName={Columns[columnId]}
						tasks={tasks.filter(
							(t) =>
								t.status === columnId &&
								t.content.toLowerCase().includes(searchVal.toLowerCase()),
						)}
						handleEditTask={handleEditTask}
						handleRemoveTask={handleRemoveTask}
						handleDragStart={handleDragStart}
						handleDragOver={handleDragOver}
						handleDrop={handleDrop}
						setEditingTask={setEditingTask}
					/>
				))}
			</div>
		</div>
	);
};

export default DashboardNEW;
