import Logo from "../../assets/logo.svg"
import { Button } from "../Buttons/button/Button"

export const Header = () => {
	return (
		<div className="header__container container">
			<div className="logo">
				<img className="logo__img" src={Logo} alt="logo" />
			</div>
			<div className="header__buttons">
				<Button title="Регистрация" outline />
			</div>
		</div>
	)
}
