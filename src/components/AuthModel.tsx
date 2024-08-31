import { useState } from "react";
import {
	Modal,
	View,
	Text,
	TextInput,
	TouchableOpacity,
	SafeAreaView,
	StyleSheet,
	Button,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { theme } from '@/src/theme';

interface Props {
	visible: boolean;
	onClose: () => void;
	onSubmit: (valor: string) => void;
	name: string;
}

export default function AuthModal({ visible, onClose, onSubmit, name }: Props) {
	const [valor, setValor] = useState<string>("");
	const [isVisible, setIsVisible] = useState<boolean>(true);

	const enviar = () => {
		onSubmit(valor);
	};

	return (
		<Modal
			animationType="fade"
			transparent={true}
			visible={visible}
			onRequestClose={onClose}
		>
			<View style={styles.modalBackground}>
				<View style={styles.modalContainer}>
					<View style={styles.header}>
						<Text style={styles.title}>{name}</Text>
						<TouchableOpacity style={styles.closeButton} onPress={onClose}>
							<Ionicons name="close" size={32} color={theme.colors.darkGreen} />
						</TouchableOpacity>
					</View>
					<SafeAreaView style={styles.formContainer}>
						<Text style={styles.label}>Senha de acesso</Text>
						<View style={styles.input}>
							<TextInput
								secureTextEntry={isVisible}
								onChangeText={setValor}
								placeholder="Digite a senha..."
								style={{ margin: 0, padding: 0, width: "80%", height: 40 }}
							/>
							<TouchableOpacity
								style={styles.closeButton}
								onPress={() => setIsVisible(!isVisible)}
							>
								{isVisible ? (
									<Ionicons name="eye-off" size={24} color={theme.colors.darkGreen} />
								) : (
									<Ionicons name="eye" size={24} color={theme.colors.darkGreen} />
								)}
							</TouchableOpacity>
						</View>
						<TouchableOpacity style={styles.button} onPress={enviar}>
							<Text style={styles.textButton}>Acesar</Text>
						</TouchableOpacity>
					</SafeAreaView>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	modalBackground: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},
	modalContainer: {
		width: 300,
		padding: 10,
		backgroundColor: theme.colors.white,
		borderRadius: 16,
		alignItems: "center",
	},
	input: {
		backgroundColor: "transparent",
		borderWidth: 2,
		borderRadius: 12,
		borderColor: theme.colors.lightGreen,
		width: "100%",
		marginBottom: 8,
		padding: 10,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		height: 55,
	},
	closeButton: {
		flexDirection: "row",
		alignItems: "center",
		alignSelf: "flex-end",
		marginBottom: 10,
	},
	label: {
		fontSize: 16,
		fontWeight: "bold",
		color: theme.colors.lightGreen,
	},
	formContainer: {
		width: 250,
	},
	button: {
		backgroundColor: theme.colors.orange,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		height: 45,
		borderRadius: 12,
		marginBottom: 16,
	},
	textButton: {
		color: theme.colors.white,
		fontWeight: "bold",
		fontSize: 18,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		color: theme.colors.darkGreen,
	},
	header: {
		width: "100%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 8,
		marginBottom: 20,
	},
});

