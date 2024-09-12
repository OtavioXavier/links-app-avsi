import { View, Text, StyleSheet } from "react-native";
import AuthLink from "@/src/components/AuthLink";
import Title from "@/src/components/Title";
import { theme } from '@/src/theme';

export default function RioGrandeDoNorteScreen() {
	return (
		<View style={styles.container}>
			<Title text="Rio Grande do Norte" />
			<AuthLink
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
