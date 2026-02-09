import useSearchFilter from "../../Common/SearchDebounce/useSearchFilter";

const SearchTask = ({ setSearchVal }) => {
	const { inputValue, handleSearch } = useSearchFilter(setSearchVal, 3);

	return (
		<div className="mb-10 border min-w-30 py-3 px-4 rounded-xl">
			<input
				type="text"
				value={inputValue}
				placeholder="Search Tasks here...."
				onChange={handleSearch}
			/>
		</div>
	);
};

export default SearchTask;
