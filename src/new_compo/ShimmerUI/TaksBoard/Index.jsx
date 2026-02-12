import ShimmerColumn from "./ShimmerColumn";

const TaskBoardShimmer = () => {
	return (
		<>
			<div className="min-h-screen bg-input_bg p-8">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					<ShimmerColumn />
					<ShimmerColumn />
					<ShimmerColumn />
				</div>
			</div>
		</>
	);
};

export default TaskBoardShimmer;
