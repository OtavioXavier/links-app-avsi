import { Text } from "react-native";
import type { TitleProps } from "./title";
import type {TextProps} from "react-native";
import { styles } from "./styles";

export default function Title({ text, ...rest }: TitleProps & TextProps) {
	return (
		<Text
			style={[styles.title, rest.style]}
			{...rest}
		>
			{text}
		</Text>
	);
}
