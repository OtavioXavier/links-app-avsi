import Titulo from "@/src/components/Titulo";
import { Link, useRouter } from "expo-router";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import { theme } from '../theme';
import CustomButton from '../components/CustomButton';

export default function HomeScreen() {
	return (
		<View style={styles.container}>
			<Image
				style={styles.image}
				source={require("@/src/assets/images/folhagem.png")}
			/>
			<Titulo title="Home" />

			<Link push href={"/bahia"} asChild>
				<CustomButton title='BA' />
			</Link>

			<Link push href={"/brasilia"} asChild>
				<CustomButton title='BRB' />
			</Link>

			<Link push href={"/pernambuco"} asChild>
				<CustomButton title='PE' />
			</Link>

			<Link push href={"/rio-grande-do-norte"} asChild>
				<CustomButton title='RN' />
			</Link>

			<Link push href={"/sao-paulo"} asChild>
				<CustomButton title='SP' />
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
	}
});
