import { useRef } from "react";

const SearchTask = ({ searchVal, setSearchVal }) => {
	const timeoutRef = useRef(null);

	const handleSearch = (e) => {
		const value = e.target.value;

		clearTimeout(timeoutRef.current);

		if (value.length < 3) {
			setSearchVal("");
			return;
		}

		timeoutRef.current = setTimeout(() => {
			setSearchVal(value);
		}, 1000);
	};

	return (
		<div className="mb-10 border min-w-30 py-3 px-4 rounded-xl">
			<input
				VALUE = {searchVal}
				type="text"
				placeholder="Search Tasks here...."
				onChange={handleSearch}
			/>
		</div>
	);
};

export default SearchTask;
