import { ActionBtnProps } from "../../../interfaces/actionBtn"

export const ActionBtn: React.FC<ActionBtnProps> = ({
	title,
	icon: IconComponent
}) => {
	return (
		<>
			<button type="button" className="action-btn">
				<IconComponent />
				<span className="action-btn__text">{title}</span>
			</button>
		</>
	)
}
