import { View, StyleSheet } from "react-native";
import AuthLink from "@/src/components/AuthLink";
import Title from "@/src/components/Title";
import { theme } from '@/src/theme';

export default function SaoPauloScreen() {
	return (
		<View style={styles.container}>
			<Title text="São Paulo" />
			<AuthLink title={"UME"} rota={"/sao-paulo/ume"} senha="Sp@ume2024" />
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
