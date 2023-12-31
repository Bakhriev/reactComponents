import { IconProps } from "../../../interfaces/icon"

export const PlayIcon: React.FC<IconProps> = ({ cl }) => {
	return (
		<svg
			className={`playIcon ${cl ? cl : ""}`}
			width="12"
			height="13"
			viewBox="0 0 12 13"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_16_353)">
				<path d="M9.54122 5.47716L3.63979 2.06985C2.85242 1.61539 1.86859 2.18351 1.86859 3.09259V9.90722C1.86859 10.8158 2.85276 11.3844 3.64013 10.93L9.54122 7.52265C10.3286 7.06819 10.3286 5.93162 9.54122 5.47716Z" />
			</g>
			<defs>
				<clipPath id="clip0_16_353">
					<rect width="12" height="12" transform="translate(0 0.5)" />
				</clipPath>
			</defs>
		</svg>
	)
}
