interface TestCardProps {
	title: string
	description: string
}

export const TestCard: React.FC<TestCardProps> = ({ title, description }) => {
	return (
		<button className="testCard">
			<span className="testCard__title">{title}</span>
			<span className="testCard__description">{description}</span>
		</button>
	)
}
