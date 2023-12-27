import { Input } from "./components/Input/Input"
import "./scss/main.scss"

function App() {
	return (
		<div className="inputs">
			<h2 style={{ marginBottom: "60px" }}>default</h2>
			<h2>active</h2>
			<h2>checked</h2>
			<h2>error</h2>

			<Input type="text" placeholder={"some placeholder"} />
			<Input type="text" placeholder={"some placeholder"} state="fieldActive" />
			<Input
				type="text"
				placeholder={"some placeholder"}
				state="fieldChecked"
			/>
			<Input
				type="text"
				placeholder={"some placeholder"}
				errorMessage={"some error message"}
				state="fieldError"
			/>
			<Input type="password" placeholder={"********"} />
			<Input type="password" placeholder={"********"} state="fieldActive" />
			<Input type="password" placeholder={"********"} state="fieldChecked" />

			<Input
				type="password"
				placeholder={"********"}
				state="fieldError"
				errorMessage={"some error message"}
			/>
		</div>
	)
}

export default App
