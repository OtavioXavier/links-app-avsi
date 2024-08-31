import { Stack, Tabs } from "expo-router";
import React from "react";

export default function BrasiliaLayout() {
	return (
		<Stack
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="index" />
			<Stack.Screen name="ume" />
		</Stack>
	);
}
