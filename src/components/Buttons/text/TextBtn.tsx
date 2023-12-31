import React from "react"
import { TextBtnProps } from "../../../interfaces/textBtn"

export const TextBtn: React.FC<TextBtnProps> = ({ title, primary }) => {
	return (
		<button
			type="button"
			className={`btn-text ${primary ? "btn-text_primary" : ""}`}
		>
			{title}
		</button>
	)
}
