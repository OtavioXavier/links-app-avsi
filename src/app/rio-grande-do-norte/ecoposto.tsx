import CustomButton from "@/src/components/CustomButton";
import CustomWebView from "@/src/components/navigation/WebView";
import Title from "@/src/components/Title";
import { useGo } from "@/src/context/GoContext";
import { links } from "@/links";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { theme } from '@/src/theme';

export default function EcopostoScreen() {
	const [url, setUrl] = useState<string>("");
	const { go, setGo } = useGo();

	const onPressButton = (url: string) => {
		setUrl(url);
		setGo(true);
	};

	return go ?
		< CustomWebView url={url} />
		:
		(
			<View style={styles.container}>
				<Title text="EcoPosto" />
				<CustomButton
					title="Pré-Teste"
					onPress={() => onPressButton(links.RN.EcoPosto.Pré)}
				/>
				<CustomButton
					title="Pós-Teste"
					onPress={() => onPressButton(links.RN.EcoPosto.Pós)}
				/>
				<CustomButton
					title="Ficha de Avaliação"
					onPress={() => onPressButton(links.RN.EcoPosto.Satisfação)}
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
