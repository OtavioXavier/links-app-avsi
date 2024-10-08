import { Pressable, StyleSheet, Text, View } from "react-native";
import WebView from "react-native-webview";
import { useGo } from "@/src/context/GoContext";
import { theme } from '@/src/theme';

interface Props {
	url: string;
}

export default function CustomWebView({ url }: Props) {
	const { setGo, go } = useGo();

	if(url === '' && go === true) {
		setGo(false)
	}
	
	return (
		<View style={{ flex: 1 }}>
			<Pressable onPress={() => setGo(false)} style={styles.closeButton}>
				<Text style={styles.closeButtonText}>Fechar</Text>
			</Pressable>
			<WebView
				source={{ uri: url }}
				style={{
					marginVertical: 30,
					flex: 1,
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	closeButton: {
		backgroundColor: theme.colors.red,
		padding: 16,
		justifyContent: "center",
		alignItems: "center",
		position: "absolute",
		top: 30,
		left: 0,
		zIndex: 10,
		borderTopEndRadius: 16,
		borderBottomRightRadius: 16,
	},
	closeButtonText: {
		color: theme.colors.white,
		fontWeight: "bold",
		fontSize: 18,
	},
});
