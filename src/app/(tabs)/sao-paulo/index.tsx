import { View, Text, StyleSheet } from "react-native";
import AuthButton from "@/src/components/AuthButton";
import Titulo from "@/src/components/Titulo";
import { theme } from '@/src/theme';

export default function SaoPauloScreen() {
	return (
		<View style={styles.container}>
			<Titulo title="São Paulo" />
			<AuthButton title={"UME"} rota={"/sao-paulo/ume"} senha="Sp@ume2024" />
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
