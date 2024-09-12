import AuthLink from "@/src/components/AuthLink";
import Title from "@/src/components/Title";
import { theme } from '@/src/theme';
import { StyleSheet, Text, View } from "react-native";

export default function BrasiliaScreen() {
	return (
		<View style={styles.container}>
			<Title text="Brasília" />
			<AuthLink title={"UME"} rota={"/brasilia/ume"} senha="Ume@brb" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		gap: 16,
		backgroundColor: theme.colors.white
	},
});
