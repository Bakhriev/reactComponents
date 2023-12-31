import { IconProps } from "../../../interfaces/icon"

export const DownloadIcon: React.FC<IconProps> = ({ cl }) => {
	return (
		<svg
			className={`saveIcon ${cl ? cl : ""}`}
			width="12"
			height="13"
			viewBox="0 0 12 13"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M10.5 9.5V8C10.5 7.90054 10.4605 7.80516 10.3902 7.73483C10.3198 7.66451 10.2245 7.625 10.125 7.625C10.0255 7.625 9.93016 7.66451 9.85983 7.73483C9.78951 7.80516 9.75 7.90054 9.75 8V9.5C9.75 9.59946 9.71049 9.69484 9.64017 9.76517C9.56984 9.83549 9.47446 9.875 9.375 9.875H2.625C2.52554 9.875 2.43016 9.83549 2.35984 9.76517C2.28951 9.69484 2.25 9.59946 2.25 9.5V8C2.25 7.90054 2.21049 7.80516 2.14016 7.73483C2.06984 7.66451 1.97446 7.625 1.875 7.625C1.77554 7.625 1.68016 7.66451 1.60984 7.73483C1.53951 7.80516 1.5 7.90054 1.5 8V9.5C1.5 9.79837 1.61853 10.0845 1.8295 10.2955C2.04048 10.5065 2.32663 10.625 2.625 10.625H9.375C9.67337 10.625 9.95952 10.5065 10.1705 10.2955C10.3815 10.0845 10.5 9.79837 10.5 9.5ZM8.1075 7.5425L6.2325 9.0425C6.1663 9.09482 6.08438 9.12327 6 9.12327C5.91562 9.12327 5.83371 9.09482 5.7675 9.0425L3.8925 7.5425C3.82418 7.47801 3.78256 7.39023 3.77586 7.29652C3.76917 7.20281 3.79789 7.11 3.85635 7.03646C3.91481 6.96291 3.99874 6.91399 4.09155 6.89937C4.18435 6.88475 4.27926 6.90549 4.3575 6.9575L5.625 7.97V2.75C5.625 2.65054 5.66451 2.55516 5.73484 2.48484C5.80516 2.41451 5.90054 2.375 6 2.375C6.09946 2.375 6.19484 2.41451 6.26517 2.48484C6.33549 2.55516 6.375 2.65054 6.375 2.75V7.97L7.6425 6.9575C7.68026 6.92186 7.72501 6.89444 7.77392 6.877C7.82283 6.85955 7.87483 6.85245 7.92663 6.85615C7.97843 6.85985 8.02889 6.87427 8.07482 6.89849C8.12075 6.92271 8.16116 6.95621 8.19347 6.99686C8.22578 7.03751 8.2493 7.08443 8.26253 7.13464C8.27576 7.18485 8.27842 7.23727 8.27034 7.28856C8.26226 7.33986 8.24361 7.38892 8.21558 7.43263C8.18755 7.47634 8.15075 7.51375 8.1075 7.5425Z" />
		</svg>
	)
}
