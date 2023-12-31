import { IconProps } from "../../../interfaces/icon"

export const ArrowIcon: React.FC<IconProps> = ({ cl }) => {
	return (
		<svg
			className={`arrowIcon ${cl ? cl : ""}`}
			width="15"
			height="16"
			viewBox="0 0 15 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_37_12185)">
				<path
					d="M14.8167 4.12077C14.5724 3.87641 14.1774 3.87641 13.933 4.12077L7.49998 10.5538L1.06699 4.12077C0.822631 3.87641 0.42763 3.87641 0.18327 4.12077C-0.06109 4.36513 -0.06109 4.76013 0.18327 5.00449L7.05813 11.8794C7.1161 11.9375 7.18497 11.9836 7.2608 12.015C7.33663 12.0464 7.41792 12.0626 7.50001 12.0625C7.58209 12.0626 7.66338 12.0464 7.73921 12.015C7.81504 11.9836 7.88392 11.9375 7.94188 11.8794L14.8167 5.00449C15.0611 4.76013 15.0611 4.36513 14.8167 4.12077Z"
					fill="#1B1B1B"
				/>
			</g>
			<defs>
				<clipPath id="clip0_37_12185">
					<rect
						width="15"
						height="15"
						fill="white"
						transform="translate(0 0.5)"
					/>
				</clipPath>
			</defs>
		</svg>
	)
}
