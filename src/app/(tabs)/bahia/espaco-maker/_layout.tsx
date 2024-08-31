import { theme } from '@/src/theme';
import { Stack } from "expo-router";
import { StyleSheet, View } from 'react-native';

export default function LayoutOficinas() {
	return (
		<View style={styles.container}>
			<Stack
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name="index" />
				<Stack.Screen name="eolica" />
				<Stack.Screen name="arduino" />
			</Stack>
		</View>

	);
}

const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: theme.colors.white }
})