import { View, StyleSheet } from "react-native";
import { links } from "@/links";
import { useState } from "react";
import { useGo } from "@/src/context/GoContext";
import CustomButton from "@/src/components/CustomButton";
import Title from "@/src/components/Title";
import CustomWebView from "@/src/components/navigation/WebView";
import { theme } from '@/src/theme';

export default function UMEScreen() {
	const [url, setUrl] = useState<string>("");
	const { go, setGo } = useGo();

	const handlePress = (url: string) => {
		setUrl(url);
		setGo(true);
	};

	return go ?
		<CustomWebView url={url} />
		: (
			<View style={styles.container}>
				<Title text="UME BA" />
				<CustomButton
					title="Pré-Teste"
					onPress={() => handlePress(links.BA.UME.Pré)}
				/>
				<CustomButton
					title="Pós-Teste"
					onPress={() => handlePress(links.BA.UME.Pós)}
				/>
				<CustomButton
					title="Ficha de Avaliação"
					onPress={() => handlePress(links.BA.UME.Satisfação)}
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
