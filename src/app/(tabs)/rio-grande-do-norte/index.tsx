import { View, Text, StyleSheet } from "react-native";
import AuthButton from "@/src/components/AuthButton";
import Titulo from "@/src/components/Titulo";
import { theme } from '@/src/theme';

export default function RioGrandeDoNorteScreen() {
	return (
		<View style={styles.container}>
			<Titulo title="Rio Grande do Norte" />
			<AuthButton
				title={"EcoPosto"}
				rota={"/rio-grande-do-norte/ecoposto"}
				senha="Rn@2024"
			/>
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
