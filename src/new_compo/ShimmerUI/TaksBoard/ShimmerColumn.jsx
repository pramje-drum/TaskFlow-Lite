import ShimmerCard from "./ShimmerCard";

const ShimmerColumn = () => {
	return (
		<div>
			<div className="bg-task_border_color rounded-2xl p-5 w-full">
				<div className="h-10 bg-task_container_color rounded-lg mb-6 animate-pulse"></div>
				<ShimmerCard />
				<ShimmerCard />
				<ShimmerCard />
			</div>
		</div>
	);
};

export default ShimmerColumn;
