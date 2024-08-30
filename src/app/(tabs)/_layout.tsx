import { Stack } from 'expo-router';

export default function TabsLayout() {
  return (
    <Stack screenOptions={{
      headerShown: false,
      contentStyle: {
        backgroundColor: "#FFF5EC",
      },
    }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="bahia" />
      <Stack.Screen name="brasilia/index" />
      <Stack.Screen name="pernambuco/index" />
      <Stack.Screen name="sao-paulo/index" />
      <Stack.Screen name="rio-grande-do-norte/index" />
      <Stack.Screen name="+not-found" />
    </Stack>
  )
}