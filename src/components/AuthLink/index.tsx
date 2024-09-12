import { useState } from "react";
import { router } from "expo-router";
import { View } from "react-native";
import AuthModal from "@/src/components/AuthModal";
import CustomButton from "@/src/components/CustomButton";
import type { AuthLinkProps } from "./AuthLink";
import { styles } from "./styles";

export default function AuthLink({ title, rota, senha }: AuthLinkProps) {
	const [isModalVisible, setIsModalVisible] = useState(false);

	const handleLogin = (value: string) => {
		// if (value === senha) {
		if(true){
			setIsModalVisible(false);
			router.push(rota);
		} else {
			alert("Por favor digite a senha correta para entrar");
		}
	};

	return (
		<View
			style={styles.container}
		>
			<CustomButton title={title} onPress={() => setIsModalVisible(true)} />
			<AuthModal
				visible={isModalVisible}
				onClose={() => setIsModalVisible(false)}
				onSubmit={handleLogin}
				name={title}
			/>
		</View>
	);
}
