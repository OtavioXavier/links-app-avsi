import { Stack } from "expo-router";
import React from "react";

export default function RioGrandeDoNorteLayout() {
	return (
		<Stack
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="index" />
			<Stack.Screen name="ecoposto" />
		</Stack>
	);
}
