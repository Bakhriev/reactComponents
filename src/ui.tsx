import { ActionBtn } from "./components/Buttons/action/ActionBtn"
import { TextBtn } from "./components/Buttons/text/TextBtn"
import { InputText } from "./components/Inputs/text/InputText"
import { Switch } from "./components/Switch/Switch"
import { InputPassword } from "./components/Inputs/password/InputPassword"

import { Checkbox } from "./components/Checkbox/Checkbox"
import { Button } from "./components/Buttons/button/Button"
import { Search } from "./components/Search/Search"
import { Dropdown } from "./components/Dropdown/Dropdown"
import { DownloadIcon } from "./components/Icons/DownloadIcon/DownloadIcon"
import { PlayIcon } from "./components/Icons/PlayIcon/PlayIcon"
import { SaveIcon } from "./components/Icons/SaveIcon/SaveIcon"
import { AddCard } from "./components/Cards/AddCard/AddCard"
import { TestCard } from "./components/Cards/TestCard/TestCard"
import { Header } from "./components/Header/Header"

export const UI = () => {
	return (
		<>
			<Header />

			<div className="ui-test-grid">
				{/* Headings */}
				<h2 style={{ marginBottom: "60px" }}>default</h2>
				<h2>active</h2>
				<h2>checked</h2>
				<h2>error</h2>

				<Button title="btn" outline />
				<Button title="btn" outline disabled />
				<Button title="btn" filled />
				<Button title="btn" filled disabled />

				<TextBtn title="text btn" />
				<TextBtn title="text btn" primary />

				<ActionBtn title="Download" icon={DownloadIcon} />
				<ActionBtn title="Play" icon={PlayIcon} />
				<ActionBtn title="Save" icon={SaveIcon} />

				<Switch title="Cookies" helperText="Helper text" />
				<InputText title="Name" placeholder="Input" helperText="Helper text" />
				<InputPassword
					title="password"
					placeholder="********"
					helperText="Helper text"
				/>

				<Checkbox title="cookies" />
				<Checkbox rounded title="cookies" />

				<Search placeholder="Поиск..." />
				<Search placeholder="Поиск..." small />

				<Dropdown
					items={["Item 1", "Item 2", "Item 3"]}
					title="Dropdown"
					helperText="Helper text"
				/>

				<AddCard />
				<TestCard title="Тест номер 1" description="Описание" />
			</div>
		</>
	)
}
