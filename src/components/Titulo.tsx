import { Text } from "react-native";
import { theme } from '../theme';

interface Props {
	title: string;
}

export default function Titulo({ title }: Props) {
	return (
		<Text
			style={{
				fontWeight: "bold",
				fontSize: 44,
				textAlign: "center",
				marginBottom: 36,
				color: theme.colors.darkGreen,
			}}
		>
			{title}
		</Text>
	);
}
