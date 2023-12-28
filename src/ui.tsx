import { Input } from "./components/Input/Input"
import { Switch } from "./components/Switch/Switch"

export const UI = () => {
	return (
		<div className="inputs">
			{/* Headings */}
			<h2 style={{ marginBottom: "60px" }}>default</h2>
			<h2>active</h2>
			<h2>checked</h2>
			<h2>error</h2>

			{/* Type Text */}
			<Input type="text" placeholder={"some placeholder"} />
			<Input type="text" placeholder={"some placeholder"} status="active" />
			<Input
				type="text"
				placeholder={"some placeholder"}
				helperText={"Helper Text"}
				status="checked"
			/>
			<Input
				type="text"
				status="error"
				helperText={"Helper Text"}
				placeholder={"some placeholder"}
			/>

			{/* Type Password */}
			<Input type="password" placeholder={"********"} />
			<Input type="password" placeholder={"********"} status="active" />
			<Input type="password" placeholder={"********"} status="checked" />
			<Input
				type="password"
				status="error"
				helperText={"Helper Text"}
				placeholder={"********"}
			/>

			{/* Switch */}
			<Switch title="Some Title" />
			<Switch title="Some Title" />
			<Switch title="Some Title" status="active" />
			<Switch title="Some Title" status="error" helperText="Helper Text" />
		</div>
	)
}
