import { useState } from "react";

const useDragDrop = () => {
	const [draggedItem, setDraggedItem] = useState(null);

	const handleDragStart = (columnId, task) => {
		setDraggedItem({ columnId, task });
	};

	const handleDragOver = (e) => e.preventDefault();

	const handleDrop = (e) => {
		e.preventDefault();
		return draggedItem;
	};

	const resetDrag = () => setDraggedItem(null);

	return {
		draggedItem,
		handleDragStart,
		handleDragOver,
		handleDrop,
		resetDrag,
	};
};

export default useDragDrop;
