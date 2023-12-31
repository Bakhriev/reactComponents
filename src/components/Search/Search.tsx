import React from "react"
import { SearchIcon } from "../Icons/SearchIcon/SearchIcon"
import { searchProps } from "../../interfaces/search"

export const Search: React.FC<searchProps> = ({ placeholder, small, cl }) => {
	return (
		<div className={`search ${small ? "search_sm" : ""} ${cl ? cl : ""}`}>
			<SearchIcon cl="search__icon" />
			<input type="text" className="search__input" placeholder={placeholder} />
		</div>
	)
}
