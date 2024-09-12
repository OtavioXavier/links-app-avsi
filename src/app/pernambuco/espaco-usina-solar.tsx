import CustomButton from "@/src/components/CustomButton";
import CustomWebView from "@/src/components/navigation/WebView";
import Title from "@/src/components/Title";
import { useGo } from "@/src/context/GoContext";
import { links } from "@/links";
import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { theme } from '@/src/theme';

export default function EspacoUsinaSolarScreen() {
	const [url, setUrl] = useState<string>("");
	const { go, setGo } = useGo();

	const onPressButton = (url: string) => {
		setUrl(url);
		setGo(true);
	};

	return go ?
		<CustomWebView url={url} />
		:

		(
			<View
				style={styles.container}
			>
				<Title text="Espaço Usina Solar" />
				<CustomButton
					title="Ficha de Avaliação"
					onPress={() => onPressButton(links.PE.EspaçoUsinaSolar.Satisfação)}
				/>
			</View>
		);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		gap: 32,
		marginHorizontal: 16,
		backgroundColor: theme.colors.white
	},
});
