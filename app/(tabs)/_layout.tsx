import { Stack, Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="bahia"/>
      <Tabs.Screen name="brasilia" />
      <Tabs.Screen name="pernambuco" />
      <Tabs.Screen name="rio-grande-do-norte" />
      <Tabs.Screen name="sao-paulo" />
    </Tabs>
  );
}
