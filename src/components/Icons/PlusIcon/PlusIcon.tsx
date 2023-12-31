import { IconProps } from "../../../interfaces/icon"

export const PlusIcon: React.FC<IconProps> = ({ cl }) => {
	return (
		<svg
			className={`plusIcon ${cl ? cl : ""}`}
			xmlns="http://www.w3.org/2000/svg"
			width="25"
			height="26"
			viewBox="0 0 25 26"
		>
			<path d="M23.7499 11.75H13.7501V1.74992C13.7501 1.0601 13.19 0.5 12.4999 0.5C11.8101 0.5 11.25 1.0601 11.25 1.74992V11.75H1.24992C0.560097 11.75 0 12.3101 0 12.9999C0 13.69 0.560097 14.2501 1.24992 14.2501H11.25V24.2499C11.25 24.94 11.8101 25.5001 12.4999 25.5001C13.19 25.5001 13.7501 24.94 13.7501 24.2499V14.2501H23.7499C24.44 14.2501 25.0001 13.69 25.0001 12.9999C25.0001 12.3101 24.44 11.75 23.7499 11.75Z" />
		</svg>
	)
}
