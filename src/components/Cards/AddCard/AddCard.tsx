import { PlusIcon } from "../../Icons/PlusIcon/PlusIcon"

export const AddCard = () => {
	return (
		<button className="addCard">
			<PlusIcon cl="addCard__icon" />
			<span className="addCard__text">Создать тест</span>
		</button>
	)
}
