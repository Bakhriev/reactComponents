import { InputText } from "../Inputs/text/InputText"
import { Button } from "../Buttons/button/Button"
import { CloseIcon } from "../Icons/CloseIcon/CloseIcon"

export const Popup = () => {
	return (
		<div className="popup popup_active">
			<button className="popup__close">
				<CloseIcon cl="popup__closeIcon" />
			</button>
			<div className="popup__inner">
				<div className="popup__top">
					<h1 className="title">Создание теста</h1>
				</div>
				<div className="popup__body">
					<InputText title="Название теста" placeholder="Input" />
					<InputText title="Описание теста" placeholder="Input" />
				</div>
				<div className="popup__bottom">
					<Button cl="fullWidth" title="Создать тест" filled disabled />
				</div>
			</div>
		</div>
	)
}
