import { AddCard } from "../components/Cards/AddCard/AddCard"
import Logo from "../assets/logo.svg"
import { Search } from "../components/Search/Search"
import { TestCard } from "../components/Cards/TestCard/TestCard"
import { Profile } from "../components/Profile/Profile"
import { Popup } from "../components/Popup/Popup"

export const Test = () => {
	return (
		<div className="wrapper">
			<div className="overlay overlay_active"></div>

			<Popup />
			<div className="overlay"></div>

			<header className="header header_position">
				<div className="header__container container">
					<div className="logo">
						<img className="logo__img" src={Logo} alt="logo" />
					</div>
					<div className="header__buttons">
						<Profile title="poogiloy@yandex.ru" />
					</div>
				</div>
			</header>

			<main className="main">
				<div className="testList">
					<div className="testList__container container">
						<div className="testList__top">
							<h1 className="testList__title">Список тестов</h1>
							<Search cl="testList__search" placeholder="Поиск..." />
						</div>
						<div className="testList__body customScroll">
							<AddCard />
							<TestCard title="Тест номер 1" description="Описание" />
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}
