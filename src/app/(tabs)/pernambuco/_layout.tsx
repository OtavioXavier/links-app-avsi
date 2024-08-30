import { Stack, Tabs } from "expo-router";
import React from "react";

export default function PernambucoLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,

      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="espaco-usina-solar" />
      <Stack.Screen name="ume" />
    </Stack>
  );
}
