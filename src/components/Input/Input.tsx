import React, { useState, ChangeEvent } from "react"
import EyeIcon from "../EyeIcon/EyeIcon"

interface InputProps {
	type: "text" | "password"
	placeholder: string
	errorMessage?: string
	state?: string
}

export const Input: React.FC<InputProps> = ({
	type,
	placeholder,
	errorMessage,
	state
}) => {
	const [value, setValue] = useState<string>("")
	const [showPassword, setShowPassword] = useState<boolean>(false)

	const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword)
	}

	return (
		<div className={`${state}`}>
			<div className="title">Some Title</div>
			<div className={`${type === "password" ? "fieldWrapper" : ""}`}>
				<input
					type={showPassword ? "text" : type}
					className="input"
					placeholder={placeholder}
					value={value}
					onChange={changeValue}
				/>
				{type === "password" && (
					<button onClick={togglePasswordVisibility} className="show btn-reset">
						<EyeIcon />
					</button>
				)}
			</div>
			{errorMessage && <div className="helperText">{errorMessage}</div>}
		</div>
	)
}
