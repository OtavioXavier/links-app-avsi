import { Tabs } from "expo-router";
import React from "react";
import { View } from 'react-native';

export default function BahiaLayout() {
  return (
    <View style={{flex: 1, backgroundColor: "#FFF5EC"}}>
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {display: 'none'}
      }}
    >
      <Tabs.Screen name="index"/>
      <Tabs.Screen name="museu" />
      <Tabs.Screen name="ume" />
      <Tabs.Screen name="espaco-maker"/>
    </Tabs>
    </View>
  );
}
