import { InputProps } from "../../../interfaces/input"

export const InputText: React.FC<InputProps> = ({
	type,
	title,
	placeholder,
	helperText
}) => {
	return (
		<>
			<div className="field">
				<div className="field__title">{title}</div>
				<input
					type={type ? type : "text"}
					className="input"
					placeholder={placeholder}
					value=""
				/>
				<div className="helper-text">{helperText}</div>
			</div>
		</>
	)
}
