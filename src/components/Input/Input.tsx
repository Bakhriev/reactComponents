import EyeIcon from "../EyeIcon/EyeIcon"

import { InputProps } from "../../types/input"

import styles from "./Input.module.scss"

export const Input: React.FC<InputProps> = ({
	type,
	placeholder,
	helperText,
	status
}) => {
	return (
		<div className={`${styles.field} ${status ? styles[status] : ""}`}>
			<div className={styles.title}>Some Title</div>
			<div className={`${type === "password" ? `${styles.fieldWrapper}` : ""}`}>
				<input
					type={type}
					className={styles.input}
					placeholder={placeholder}
					value=""
				/>
				{type === "password" && (
					<button className={`${styles.show}`}>
						<EyeIcon />
					</button>
				)}
			</div>
			{helperText && <div className={styles.helperText}>{helperText}</div>}
		</div>
	)
}
