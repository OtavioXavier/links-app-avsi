import { useGo } from '@/src/context/GoContext';
import { Link, Stack, useNavigation } from "expo-router";
import { ChevronLeft } from 'lucide-react-native';
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function TabsLayout() {
	const {go} = useGo();
	return (
		<View style={styles.container}>
			<Stack
				screenOptions={{
					headerShown: !go,
					headerStyle: {
						backgroundColor: 'transparent',
					},
					headerShadowVisible: false,
					headerTitle: '',
					headerBackImageSource: require('@/src/assets/images/back-icon.png'),
					headerTintColor: "#00a443",
					headerTransparent: true,
				}}
			>
				<Stack.Screen name="bahia" />
				<Stack.Screen name="brasilia" />
				<Stack.Screen name="pernambuco" />
				<Stack.Screen name="sao-paulo" />
				<Stack.Screen name="rio-grande-do-norte" />
			</Stack>
		</View>

	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	}
})