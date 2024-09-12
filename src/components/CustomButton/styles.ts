import { theme } from "@/src/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	button: {
		backgroundColor: theme.colors.lightGreen,
		padding: 15,
		color: theme.colors.white,
		fontFamily: theme.fontFamily.semiBold,
		fontSize: 30,
		width: 300,
		height: 64,
		borderRadius: 100,
		flexDirection: 'row',
		alignItems: "center",
		justifyContent: 'center',
	},
	buttonText: {
		color: "white",
		fontSize: 16,
		fontFamily: theme.fontFamily.bold,
	},
});
