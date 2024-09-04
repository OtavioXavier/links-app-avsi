import CustomButton from "@/src/components/CustomButton";
import CustomWebView from "@/src/components/navigation/WebView";
import Titulo from "@/src/components/Titulo";
import { useGo } from "@/src/context/GoContext";
import { links } from "@/links";
import { Link } from "expo-router";
import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { theme } from '@/src/theme';

export default function EspacoMakerScreen() {
	const [url, setUrl] = useState<string>("");
	const { go, setGo } = useGo();

	const onPressButton = (url: string) => {
		setUrl(url);
		setGo(true);
	};

	return go ?
		<CustomWebView url={url} />
		: (
			<View style={styles.largestContainer}>
				<View style={styles.container}>
					<Titulo title="Oficinas" />
					<Link push href={"/bahia/espaco-maker/arduino"} style={styles.containerLink}>
						<Text style={styles.text}>Arduino</Text>
					</Link>
					<Link push href={"/bahia/espaco-maker/eolica"} style={styles.containerLink}>
						<Text style={styles.text}>Eólica</Text>
					</Link>
				</View>
				<View style={styles.container}>
					<Titulo title="Satisfação" />
					<CustomButton
						title="Ficha de avaliação"
						onPress={() => onPressButton(links.BA.EspacoMaker.Satisfação)}
					/>
				</View>
			</View>
		);

}

const styles = StyleSheet.create({
	largestContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		gap: 16,
		backgroundColor: theme.colors.white
	},
	container: {
		justifyContent: "center",
		alignItems: "center",
		gap: 16,
	},
	containerLink: {
		backgroundColor: theme.colors.lightGreen,
		color: theme.colors.white,
		fontWeight: "semibold",
		width: 250,
		paddingVertical: 16,
		borderRadius: 100,
		textAlign: "center",
	},
	text: {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
	},
});
