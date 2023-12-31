import Logo from "../assets/logo.svg"
import { Button } from "../components/Buttons/button/Button"
import { TextBtn } from "../components/Buttons/text/TextBtn"
import { Checkbox } from "../components/Checkbox/Checkbox"
import { InputPassword } from "../components/Inputs/password/InputPassword"
import { InputText } from "../components/Inputs/text/InputText"

export const Auth = () => {
	return (
		<div className="wrapper">
			<header className="header header_position">
				<div className="header__container container">
					<div className="logo">
						<img className="logo__img" src={Logo} alt="logo" />
					</div>
					<div className="header__buttons">
						<Button outline title="Войти" />
					</div>
				</div>
			</header>
			<main className="main">
				<div className="auth">
					<form action="#!" className="form auth__form">
						<div className="form__container">
							<div>
								<h1 className="title">Регистрация</h1>
							</div>
							<div className="form__fields">
								<InputText
									type="email"
									title="Электронная почта"
									helperText="Helper Text"
									placeholder="omintest@login.ru"
								/>

								<InputPassword
									title="Пароль"
									helperText="Helper Text"
									placeholder="********"
								/>

								<InputPassword
									title="Повторите Пароль"
									helperText="Helper Text"
									placeholder="********"
								/>

								<Checkbox
									title="Для регистрации подтвердите согласие на обработку
											персональных данных"
								/>
							</div>
							<div className="form__bottom">
								<Button
									filled
									disabled
									cl="fullWidth"
									type="submit"
									title="Продолжить"
								/>
								<TextBtn primary title="Или войди в аккаунт" />
							</div>
						</div>
					</form>
				</div>

				<div className="auth">
					<form action="#!" className="form auth__form">
						<div className="form__container">
							<div>
								<h1 className="title">Регистрация</h1>
							</div>
							<div className="form__fields">
								<InputText
									type="number"
									title="Код подтверждения"
									placeholder="12345"
								/>
							</div>
							<div className="form__bottom">
								<Button
									title="Зарегистрировать аккаунт"
									cl="fullWidth"
									filled
									disabled
								/>
							</div>
						</div>
					</form>
				</div>
			</main>
		</div>
	)
}
