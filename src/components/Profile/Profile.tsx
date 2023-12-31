import { ProfileProps } from "../../interfaces/profile"

export const Profile: React.FC<ProfileProps> = ({ title }) => {
	return (
		<button className="profile">
			<div className="profile__name">{title}</div>
			<div className="profile__icon">
				<span>P</span>
				{/* <img className="profile__img" src="./assets/img/profile.svg" /> */}
			</div>
		</button>
	)
}
