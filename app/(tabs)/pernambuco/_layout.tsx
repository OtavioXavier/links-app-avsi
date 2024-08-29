import { Stack, Tabs } from "expo-router";
import React from "react";

export default function PernambucoLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {display: 'none'}

      }}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="espaco-usina-solar" />
      <Tabs.Screen name="ume" />
    </Tabs>
  );
}
