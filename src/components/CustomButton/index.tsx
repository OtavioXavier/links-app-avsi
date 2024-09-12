import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import type { CustomButtonProps } from "./customButton";

export default function CustomButton({ title, onPress }: CustomButtonProps) {
	return (
		<TouchableOpacity style={styles.button} onPress={onPress}>
			<Text style={styles.buttonText}>{title.toUpperCase()}</Text>
		</TouchableOpacity>
	);
};
