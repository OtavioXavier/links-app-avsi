import { Stack, Tabs } from 'expo-router';

export default function LayoutOficinas() {
  return (
    <Stack  screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name='eolica'/>
      <Stack.Screen name='arduino'/>
      <Stack.Screen name='index'/>
    </Stack>
  )
}