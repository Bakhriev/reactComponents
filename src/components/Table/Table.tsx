import React from "react"
import { PlusIcon } from "../Icons/PlusIcon/PlusIcon"

export const Table = () => {
	return (
		<div className="table">
			<div className="table__item">
				<div className="table__inner">
					<div className="table__cell">
						<button className="table__data">Ключ 1</button>
						<input type="text" className="table__input" placeholder="Пусто" />
					</div>
					<div className="table__cell">
						<button className="table__data">Заполненное значение</button>
						<input type="text" className="table__input" placeholder="Пусто" />
					</div>
				</div>
				<button className="table__btn">
					<svg className="table__icon">
						<use href="./assets/img/svg/sprite.svg#close"></use>
					</svg>
				</button>
			</div>
			<div className="table__item">
				<div className="table__inner">
					<div className="table__cell">
						<button className="table__data">Ключ 1</button>
						<input type="text" className="table__input" placeholder="Пусто" />
					</div>
					<div className="table__cell">
						<button className="table__data">Заполненное значение</button>
						<input type="text" className="table__input" placeholder="Пусто" />
					</div>
				</div>
				<button className="table__btn">
					<svg className="table__icon">
						<use href="./assets/img/svg/sprite.svg#close"></use>
					</svg>
				</button>
			</div>
			<button className="table__add addBtn">
				<PlusIcon cl="addBtn__icon" />
				<span className="addBtn__text">Добавить строку</span>
			</button>
		</div>
	)
}
