import { Stack, Tabs } from "expo-router";
import React from "react";
import { View } from 'react-native';

export default function BahiaLayout() {
  return (
    <View style={{flex: 1, backgroundColor: "#FFF5EC"}}>
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index"/>
      <Stack.Screen name="museu" />
      <Stack.Screen name="ume" />
      <Stack.Screen name="espaco-maker"/>
    </Stack>
    </View>
  );
}
