import Titulo from "@/src/components/Titulo";
import { Link } from "expo-router";
import { View, Image, StyleSheet, Text } from "react-native";
import { theme } from '../theme';

export default function HomeScreen() {
	return (
		<View style={styles.container}>
			<Image
				style={styles.image}
				source={require("@/src/assets/images/folhagem.png")}
			/>
			<Titulo title="Home" />

			<Link push href={"/bahia"} style={styles.button}>
				<Text style={styles.buttonText} >BA</Text>
			</Link>

			<Link push href={"/brasilia"} style={styles.button}>
				<Text style={styles.buttonText} >BRB</Text>
			</Link>

			<Link push href={"/pernambuco"} style={styles.button}>
				<Text style={styles.buttonText} >PE</Text>
			</Link>

			<Link push href={"/rio-grande-do-norte"} style={styles.button}>
				<Text style={styles.buttonText} >RN</Text>
			</Link>

			<Link push href={"/sao-paulo"} style={styles.button}>
				<Text style={styles.buttonText} >SP</Text>
			</Link>

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
	image: {
		position: "absolute",
		width: "100%",
		height: 150,
		top: 0,
	},
	button: {
		backgroundColor: theme.colors.lightGreen,
		padding: 15,
		alignItems: "center",
		color: theme.colors.white,
		fontWeight: "semibold",
		fontSize: 20,
		width: 250,
		paddingVertical: 16,
		borderRadius: 100,
		textAlign: "center",
		alignContent: "center",
	},
	buttonText: {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
	},
});
