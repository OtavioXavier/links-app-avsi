import { Stack, Tabs } from "expo-router";
import React from "react";

export default function BrasiliaLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {display: 'none'}

      }}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="ume" />
    </Tabs>
  );
}
