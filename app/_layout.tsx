import { useFonts } from "expo-font";
import { Stack, usePathname } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Image, StyleSheet, View } from "react-native";
import BackButton from "@/components/navigation/BackButton";
import { Rotate3D } from "lucide-react-native";
import { GoProvider } from "@/context/GoContext";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GoProvider>
      <View style={styles.container}>
        <Stack
          screenOptions={{
            contentStyle: {
              backgroundColor: "#FFF5EC",
            },
          }}
        >
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <BackButton />
        <Image
          style={styles.folhagem}
          source={require("@/assets/images/folhagem.png")}
        />
      </View>
    </GoProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF5EC",
  },
  folhagem: {
    position: "absolute",
    width: "100%",
    height: 150,
    bottom: 0,
    transform: [{ rotate: "180deg" }],
  },
});
