import AuthButton from "@/src/components/AuthButton";
import Titulo from "@/src//components/Titulo";
import { View, StyleSheet } from "react-native";
import { theme } from '@/src/theme';

export default function BahiaScreen() {
	return (
		<View style={styles.container}>
			<Titulo title="Bahia" />
			<AuthButton
				title={"Espaço Maker"}
				rota="/bahia/espaco-maker"
				senha="Emaker@2024"
			/>
			<AuthButton title={"Museu"} rota="/bahia/museu" senha="Museu2024" />
			<AuthButton title={"UME"} rota="/bahia/ume" senha="UmeBa" />
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
