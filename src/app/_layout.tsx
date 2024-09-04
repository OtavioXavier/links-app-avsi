import { useFonts } from "expo-font";
import { Stack, usePathname } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { Image, StyleSheet, View } from "react-native";
import { GoProvider } from "@/src/context/GoContext";
import { theme } from '../theme';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded] = useFonts({
		SpaceMono: require("@/src/assets/fonts/SpaceMono-Regular.ttf"),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<GoProvider>
			<View style={styles.container}>
				<Stack />
				<Image
					style={styles.folhagem}
					source={require("@/src/assets/images/folhagem.png")}
				/>
			</View>
		</GoProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.white,
	},
	folhagem: {
		position: "absolute",
		width: "100%",
		height: 150,
		bottom: 0,
		transform: [{ rotate: "180deg" }],
	},
});
