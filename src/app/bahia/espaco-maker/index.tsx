import CustomButton from "@/src/components/CustomButton";
import CustomWebView from "@/src/components/navigation/WebView";
import Title from "@/src/components/Title";
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

	return (go && url !== '') ?
		<CustomWebView url={url} />
		: (
			<View style={styles.largestContainer}>
				<View style={styles.container}>
					<Title text="Oficinas" />
					<Link push href={"/bahia/espaco-maker/arduino"} style={styles.containerLink}>
						<Text style={styles.text}>ARDUINO</Text>
					</Link>
					<Link push href={"/bahia/espaco-maker/eolica"} style={styles.containerLink}>
						<Text style={styles.text}>EÓLICA</Text>
					</Link>
				</View>
				<View style={styles.container}>
					<Title text="Satisfação" />
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
		gap: 12,
		backgroundColor: theme.colors.white
	},
	container: {
		justifyContent: "center",
		alignItems: "center",
		gap: 10,
	},
	containerLink: {
		backgroundColor: theme.colors.lightGreen,
		padding: 15,
		alignItems: "center",
		color: theme.colors.white,
		fontWeight: "semibold",
		fontSize: 20,
		width: 300,
		paddingVertical: 20,
		borderRadius: 100,
		textAlign: "center",
		alignContent: "center",
	},
	text: {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
	},
});
