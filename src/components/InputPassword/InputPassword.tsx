import EyeIcon from "../EyeIcon/EyeIcon"

export const InputPassword = () => {
	return (
		<div>
			<div className="title">Some Title</div>
			<div className="fieldWrapper">
				<input
					type="password"
					className="input"
					placeholder="********"
					value=""
				/>
				<button className="show btn-reset">
					<EyeIcon />
				</button>
			</div>
			<div className="helperText">Error Message</div>
		</div>
	)
}
