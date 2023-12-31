import Logo from "../assets/logo.svg"
import { ActionBtn } from "../components/Buttons/action/ActionBtn"
import { Dropdown } from "../components/Dropdown/Dropdown"
import { ArrowIcon } from "../components/Icons/ArrowIcon/ArrowIcon"
import { DownloadIcon } from "../components/Icons/DownloadIcon/DownloadIcon"
import { HomeIcon } from "../components/Icons/HomeIcon/HomeIcon"
import { PlayIcon } from "../components/Icons/PlayIcon/PlayIcon"
import { PlusIcon } from "../components/Icons/PlusIcon/PlusIcon"
import { SaveIcon } from "../components/Icons/SaveIcon/SaveIcon"
import { Switch } from "../components/Switch/Switch"
import { Table } from "../components/Table/Table"

export const Draw = () => {
	return (
		<div className="draw">
			<canvas id="canvas"></canvas>
			<div className="panel">
				<div className="logo panel__logo">
					<img className="logo__img" src={Logo} alt="logo" />
				</div>
				<div className="panel__test">Тест номер 1</div>
				<button>
					<HomeIcon />
				</button>
			</div>
			<div className="blockList">
				<div className="blockList__title">Список блоков</div>
				<div className="blockList__inner">
					<button className="blockList__btn">
						<PlusIcon cl="blockList__icon" />
						<div className="blockList__name">Kafka</div>
					</button>
					<button className="blockList__btn">
						<PlusIcon cl="blockList__icon" />
						<div className="blockList__name">Kafka</div>
					</button>
				</div>
			</div>
			<div className="actions">
				<ActionBtn title="Запустить" icon={PlayIcon} />
				<ActionBtn title="Сохранить" icon={SaveIcon} />
				<ActionBtn title="Скачать" icon={DownloadIcon} />
			</div>

			<div className="settings">
				<div className="settings__title">Настройки</div>
				<div className="settings__inner">
					<div className="field">
						<div className="field__title">
							Текстовое поле<span>*</span>
						</div>
						<textarea
							className="settings__textarea"
							placeholder="Заполните текстовое поле"
						></textarea>
						<div className="helperText"></div>
					</div>
					<Switch title="Параметр" />

					<Dropdown
						items={["1", "2", "3"]}
						title={"Название поля"}
						helperText="Helper Text"
					/>

					<div className="accordion accordion_active">
						<button className="btnArrow accordion__toggle">
							<div className="btnArrow__text">Табличное поле</div>
							<ArrowIcon cl="accordion__arrow btnArrow__icon" />
						</button>
						<div className="accordion__wrapper">
							<Table />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
