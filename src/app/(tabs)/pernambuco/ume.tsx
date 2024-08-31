import CustomButton from "@/src/components/CustomButton";
import CustomWebView from "@/src/components/navigation/WebView";
import Titulo from "@/src/components/Titulo";
import { useGo } from "@/src/context/GoContext";
import { links } from "@/links";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { theme } from '@/src/theme';

export default function UMEScreen() {
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
			<View style={styles.container}>
				<Titulo title="UME PE" />
				<CustomButton
					title="Pré-Teste"
					onPress={() => onPressButton(links.PE.UME.Pré)}
				/>
				<CustomButton
					title="Pós-Teste"
					onPress={() => onPressButton(links.PE.UME.Pós)}
				/>
				<CustomButton
					title="Ficha de Avaliação"
					onPress={() => onPressButton(links.PE.UME.Satisfação)}
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
