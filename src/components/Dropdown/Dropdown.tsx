import { Search } from "../Search/Search"
import { DropdownProps } from "../../interfaces/dropdown"
import { ArrowIcon } from "../Icons/ArrowIcon/ArrowIcon"

export const Dropdown: React.FC<DropdownProps> = ({
	title,
	items,
	helperText
}) => {
	return (
		<div className="dropdown ">
			<div className="dropdown__title">{title}</div>
			<div className="dropdown__inner">
				<button className="dropdown__toggle">
					<input
						tabIndex={-1}
						type="text"
						className="dropdown__input"
						placeholder="Не выбрано"
						readOnly
						value=""
					/>
					<ArrowIcon cl="dropdown__arrow" />
				</button>
			</div>
			<div className="dropdown__popup">
				<Search placeholder="Поиск..." cl="dropdown__search" small />
				<div className="dropdown__menu customScroll">
					{items.map(item => (
						<button className="dropdown__item">{item}</button>
					))}
				</div>
			</div>
			<div className="dropdown__helperText">{helperText}</div>
		</div>
	)
}
