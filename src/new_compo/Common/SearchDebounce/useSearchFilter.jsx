import { useRef, useEffect, useState } from "react";

const useSearchFilter = ( setSearchVal, checkSize ) => {
	const timeoutRef = useRef(null);
	const [inputValue, setInputValue] = useState("");

	useEffect(() => {
		return () => clearTimeout(timeoutRef.current);
	}, []);

	const handleSearch = (e) => {
		const value = e.target.value;

		setInputValue(value);
		clearTimeout(timeoutRef.current);

		if (value.length < checkSize) {
			setSearchVal("");
			return;
		}

		timeoutRef.current = setTimeout(() => {
			setSearchVal(value);
		}, 1000);
	};

	return {
		inputValue,
		handleSearch,
	};
};

export default useSearchFilter;
