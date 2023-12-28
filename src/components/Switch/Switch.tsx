import { useState } from "react"
import { SwitchProps } from "../../types/switch"
import styles from "./Switch.module.scss"

export const Switch: React.FC<SwitchProps> = ({
	title,
	status,
	helperText
}) => {
	return (
		<div className={`${status ? styles[status] : ""}`}>
			<div className={styles.inner}>
				<div className={styles.title}>{title}</div>
				<button className={styles.switch}>
					<input
						className={styles.checkbox}
						type="checkbox"
						id="checkbox"
						checked
					/>
					<div className={styles.toggle}></div>
				</button>
			</div>
			{helperText && <div className={styles.helperText}>{helperText}</div>}
		</div>
	)
}
