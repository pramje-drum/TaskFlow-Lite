const ShimmerCard = () => {
	return (
		<div>
			<div className="bg-purple-900/60 rounded-xl p-4 mb-4 animate-pulse">
				<div className="h-5 bg-purple-700 rounded w-3/4 mb-3"></div>
				<div className="h-4 bg-purple-700 rounded w-1/2 mb-2"></div>
				<div className="h-4 bg-purple-700 rounded w-2/3 mb-4"></div>

				<div className="flex justify-end gap-2">
					<div className="h-8 w-8 bg-purple-700 rounded"></div>
					<div className="h-8 w-8 bg-purple-700 rounded"></div>
				</div>
			</div>
		</div>
	);
};

export default ShimmerCard;
