import React from "react"
import { ButtonProps } from "../../../interfaces/button"

export const Button: React.FC<ButtonProps> = ({
	type,
	title,
	outline,
	filled,
	disabled,
	cl
}) => {
	return (
		<button
			type={type as "button" | "reset" | "submit" | undefined}
			className={`btn ${cl ? cl : ""}
        ${outline ? "btn_outline" : ""}
        ${filled ? "btn_filled" : ""} ${disabled ? "btn_disabled" : ""}`}
		>
			{title}
		</button>
	)
}
