import AuthLink from "@/src/components/AuthLink";
import Title from "@/src//components/Title";
import { View, StyleSheet } from "react-native";
import { theme } from '@/src/theme';

export default function BahiaScreen() {
	return (
		<View style={styles.container}>
			<Title text="Bahia" />
			<AuthLink
				title={"Espaço Maker"}
				rota="/bahia/espaco-maker"
				senha="Emaker@2024"
			/>
			<AuthLink title={"Museu"} rota="/bahia/museu" senha="Museu2024" />
			<AuthLink title={"UME"} rota="/bahia/ume" senha="UmeBa" />
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
