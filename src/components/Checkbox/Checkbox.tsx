import { CheckboxProps } from "../../interfaces/checkbox"

export const Checkbox: React.FC<CheckboxProps> = ({ title, rounded }) => {
	return (
		<div className={`checkbox ${rounded ? "checkbox_rounded" : ""}`}>
			<label className="checkbox__label">
				<input className="checkbox__input" type="checkbox" />
				<span className="checkbox__text">{title}</span>
			</label>
		</div>
	)
}
