import Titulo from "@/src/components/Titulo";
import { Link, useRouter } from "expo-router";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import { theme } from '../theme';

export default function HomeScreen() {
	return (
		<View style={styles.container}>
			<Image
				style={styles.image}
				source={require("@/src/assets/images/folhagem.png")}
			/>
			<Titulo title="Home" />

			<Link push href={"/bahia"} asChild>
				<TouchableOpacity style={styles.containerLink}>
					<Text style={styles.text}>BA</Text>
				</TouchableOpacity>
			</Link>

			<Link push href={"/brasilia"} asChild>
				<TouchableOpacity style={styles.containerLink}>
					<Text style={styles.text}>BRB</Text>
				</TouchableOpacity>
			</Link>

			<Link push href={"/pernambuco"} asChild>
				<TouchableOpacity style={styles.containerLink}>
					<Text style={styles.text}>PE</Text>
				</TouchableOpacity>
			</Link>

			<Link push href={"/rio-grande-do-norte"} asChild>
				<TouchableOpacity style={styles.containerLink}>
					<Text style={styles.text}>RN</Text>
				</TouchableOpacity>
			</Link>

			<Link push href={"/sao-paulo"} asChild>
				<TouchableOpacity style={styles.containerLink}>
					<Text style={styles.text}>SP</Text>
				</TouchableOpacity>
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
	containerLink: {
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
	text: {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
	},
});
