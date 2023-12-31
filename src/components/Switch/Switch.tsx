import React from "react"
import { SwitchProps } from "../../interfaces/switch"

export const Switch: React.FC<SwitchProps> = ({ title, helperText }) => {
	return (
		<div className="switch-group">
			<label className="switch-group__wrapper">
				<span className="switch-group__title">{title}</span>
				<label className="switch">
					<input type="checkbox" />
					<span className="switch__slider"></span>
				</label>
			</label>
			<span className="switch-group__helperText">{helperText}</span>
		</div>
	)
}
