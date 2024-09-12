import AuthLink from "@/src/components/AuthLink";
import Title from "@/src/components/Title";
import { theme } from '@/src/theme';
import { View, Text, StyleSheet } from "react-native";

export default function PernambucoScreen() {
	return (
		<View style={styles.container}>
			<Title text="Pernambuco" />
			<AuthLink title={"UME"} rota={"/pernambuco/ume"} senha="Ume@pe2024" />
			<AuthLink
				title={"Espaço Usina Solar"}
				rota={"/pernambuco/espaco-usina-solar"}
				senha="Fnoronha@"
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
