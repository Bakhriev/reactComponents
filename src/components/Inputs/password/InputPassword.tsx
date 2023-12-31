import { InputProps } from "../../../interfaces/input"
import { EyeIcon } from "../../Icons/EyeIcon/EyeIcon"

export const InputPassword: React.FC<InputProps> = ({
	title,
	helperText,
	placeholder
}) => {
	return (
		<div className="field ">
			<label className="field__title">{title}</label>
			<div className="field__wrapper">
				<input type="password" className="input" placeholder={placeholder} />
				<button type="button" className="show">
					<EyeIcon />
				</button>
			</div>
			<div className="helper-text">{helperText}</div>
		</div>
	)
}
